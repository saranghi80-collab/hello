// Shared level materials. Static level geometry is vertex-colored and merged; a world-space
// triplanar noise breaks up flat colors so surfaces read as grass, stone, sand, etc.
import * as THREE from 'three';
import { noiseTexture } from './textures.js';

export const shared = { time: { value: 0 } };

export function addDetail(material, { scale = 0.18, strength = 0.32, key = 'detail' } = {}) {
  const noise = noiseTexture(256, 7, 8);
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uNoise = { value: noise };
    shader.uniforms.uDetail = { value: new THREE.Vector2(scale, strength) };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vDWPos;\nvarying vec3 vDWNorm;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vec4 dwp = vec4(transformed, 1.0);
        vec3 dwn = objectNormal;
        #ifdef USE_INSTANCING
          dwp = instanceMatrix * dwp;
          dwn = mat3(instanceMatrix) * dwn;
        #endif
        dwp = modelMatrix * dwp;
        vDWPos = dwp.xyz;
        vDWNorm = normalize(mat3(modelMatrix) * dwn);`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform sampler2D uNoise;\nuniform vec2 uDetail;\nvarying vec3 vDWPos;\nvarying vec3 vDWNorm;')
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
        {
          // dither away surfaces that come very close to the camera (trees, walls)
          float camD = length(vDWPos - cameraPosition);
          if (camD < 2.6) {
            vec2 fc = mod(floor(gl_FragCoord.xy), 4.0);
            float bayer = mod(fc.x * 3.0 + fc.y * 7.0, 16.0) / 16.0;
            if (smoothstep(0.9, 2.6, camD) < bayer) discard;
          }
        }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        {
          vec3 bw = abs(normalize(vDWNorm));
          bw = pow(bw, vec3(4.0));
          bw /= (bw.x + bw.y + bw.z);
          vec3 p = vDWPos * uDetail.x;
          float n1 = texture2D(uNoise, p.yz).r * bw.x + texture2D(uNoise, p.xz).r * bw.y + texture2D(uNoise, p.xy).r * bw.z;
          vec3 q = vDWPos * uDetail.x * 4.3;
          float n2 = texture2D(uNoise, q.yz).r * bw.x + texture2D(uNoise, q.xz).r * bw.y + texture2D(uNoise, q.xy).r * bw.z;
          diffuseColor.rgb *= 1.0 + (n1 - 0.5) * uDetail.y + (n2 - 0.5) * uDetail.y * 0.6;
        }`);
  };
  material.customProgramCacheKey = () => key + scale + strength;
  return material;
}

const lib = new Map();
export function levelMaterial(kind = 'std') {
  if (lib.has(kind)) return lib.get(kind);
  let m;
  switch (kind) {
    case 'std': m = addDetail(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.88, metalness: 0 })); break;
    case 'smooth': m = addDetail(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0 }), { strength: 0.12, key: 'detailS' }); break;
    case 'glossy': m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.3, metalness: 0.05 }); break;
    case 'metal': m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.32, metalness: 0.8 }); break;
    case 'terrain': m = addDetail(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 }), { scale: 0.12, strength: 0.38, key: 'detailT' }); break;
    case 'glow': {
      m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.4 });
      m.onBeforeCompile = (sh) => {
        sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * 2.4;');
      };
      m.customProgramCacheKey = () => 'glowvc';
      break;
    }
    case 'unlit': m = new THREE.MeshBasicMaterial({ vertexColors: true }); break;
    case 'lava': {
      m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, emissive: 0xff5a10, emissiveIntensity: 1.4 });
      addDetail(m, { scale: 0.3, strength: 0.6, key: 'detailL' });
      break;
    }
    default: m = addDetail(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 })); break;
  }
  lib.set(kind, m);
  return m;
}
