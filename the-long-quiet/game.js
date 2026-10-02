(()=>{var od=Object.defineProperty;var ld=(s,t,e)=>t in s?od(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var zc=(s,t,e)=>ld(s,typeof t!="symbol"?t+"":t,e);var cd=0,Vc=1,hd=2;var Yh=1,Wl=2,Vn=3,ln=0,Te=1,_e=2,fi=0,cs=1,Gc=2,Wc=3,qc=4,je=5,Wn=100,ud=101,dd=102,fd=103,pd=104,md=200,Se=201,gd=202,vd=203,fs=204,Zs=205,xd=206,yd=207,_d=208,Md=209,Sd=210,bd=211,wd=212,Ed=213,Td=214,Eo=0,To=1,Ao=2,ps=3,Ro=4,Co=5,Io=6,Po=7,Zh=0,Ad=1,Rd=2,Cn=0,Cd=1,Id=2,Pd=3,Ld=4,Dd=5,Ud=6,Nd=7;var jh=300,ms=301,gs=302,Lo=303,Do=304,pa=306,vs=1e3,qn=1001,Uo=1002,Le=1003,Fd=1004;var mr=1005;var Me=1006,Wa=1007;var Li=1008;var Yn=1009,Jh=1010,Kh=1011,js=1012,ql=1013,Di=1014,pn=1015,En=1016,Xl=1017,$l=1018,xs=1020,Qh=35902,tu=1021,eu=1022,Oe=1023,nu=1024,iu=1025,hs=1026,ys=1027,su=1028,Yl=1029,ru=1030,Zl=1031;var jl=1033,Hr=33776,zr=33777,Vr=33778,Gr=33779,No=35840,Fo=35841,Oo=35842,Bo=35843,ko=36196,Ho=37492,zo=37496,Vo=37808,Go=37809,Wo=37810,qo=37811,Xo=37812,$o=37813,Yo=37814,Zo=37815,jo=37816,Jo=37817,Ko=37818,Qo=37819,tl=37820,el=37821,Wr=36492,nl=36494,il=36495,au=36283,sl=36284,rl=36285,al=36286;var qr=2300,ol=2301,qa=2302,Xc=2400,$c=2401,Yc=2402;var Od=3200,Bd=3201;var ou=0,kd=1,di="",Xe="srgb",vi="srgb-linear",ma="linear",oe="srgb";var Yi=7680;var Zc=519,Hd=512,zd=513,Vd=514,lu=515,Gd=516,Wd=517,qd=518,Xd=519,jc=35044,Jl=35048;var Jc="300 es",Xn=2e3,Xr=2001,pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xa=Math.PI/180,ll=180/Math.PI;function ir(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[s&255]+ze[s>>8&255]+ze[s>>16&255]+ze[s>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Fe(s,t,e){return Math.max(t,Math.min(e,s))}function $d(s,t){return(s%t+t)%t}function $a(s,t,e){return(1-e)*s+e*t}function ks(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var yt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=i[0],g=i[3],m=i[6],_=i[1],x=i[4],y=i[7],R=i[2],T=i[5],A=i[8];return r[0]=a*v+o*_+l*R,r[3]=a*g+o*x+l*T,r[6]=a*m+o*y+l*A,r[1]=c*v+h*_+u*R,r[4]=c*g+h*x+u*T,r[7]=c*m+h*y+u*A,r[2]=d*v+f*_+p*R,r[5]=d*g+f*x+p*T,r[8]=d*m+f*y+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ya.makeScale(t,e)),this}rotate(t){return this.premultiply(Ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ya=new Ht;function cu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function $r(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yd(){let s=$r("canvas");return s.style.display="block",s}var Kc={};function Ws(s){s in Kc||(Kc[s]=!0,console.warn(s))}function Zd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function jd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kt={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?ma:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Qc=[.64,.33,.3,.6,.15,.06],th=[.2126,.7152,.0722],eh=[.3127,.329],nh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ih=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[vi]:{primaries:Qc,whitePoint:eh,transfer:ma,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:th,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:Qc,whitePoint:eh,transfer:oe,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:th,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});var Zi,cl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=$r("canvas")),Zi.width=t.width,Zi.height=t.height;let n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$r("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kd=0,Yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=ir(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Za(i[a].image)):r.push(Za(i[a]))}else r=Za(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Za(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qd=0,tn=class s extends pi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=qn,i=qn,r=Me,a=Li,o=Oe,l=Yn,c=s.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=ir(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=jh;tn.DEFAULT_ANISOTROPY=1;var jt=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(f+1)/2,R=(m+1)/2,T=(h+d)/4,A=(u+v)/4,I=(p+g)/4;return x>y&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=A/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=A/r,i=I/r),this.set(n,i,r,e),this}let _=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hl=class extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Me,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Yr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends hl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zr=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ul=class extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ge=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==p){let g=1-o,m=l*d+c*f+h*p+u*v,_=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let R=Math.sqrt(x),T=Math.atan2(R,m*_);g=Math.sin(g*T)/R,o=Math.sin(o*T)/R}let y=o*_;if(l=l*g+d*y,c=c*g+f*y,h=h*g+p*y,u=u*g+v*y,g===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ja=new P,sh=new Ge,Ui=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),vr.subVectors(this.max,Hs),ji.subVectors(t.a,Hs),Ji.subVectors(t.b,Hs),Ki.subVectors(t.c,Hs),ai.subVectors(Ji,ji),oi.subVectors(Ki,Ji),bi.subVectors(ji,Ki);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-bi.z,bi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,bi.z,0,-bi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-bi.y,bi.x,0];return!Ja(e,ji,Ji,Ki,vr)||(e=[1,0,0,0,1,0,0,0,1],!Ja(e,ji,Ji,Ki,vr))?!1:(xr.crossVectors(ai,oi),e=[xr.x,xr.y,xr.z],Ja(e,ji,Ji,Ki,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},On=[new P,new P,new P,new P,new P,new P,new P,new P],Mn=new P,gr=new Ui,ji=new P,Ji=new P,Ki=new P,ai=new P,oi=new P,bi=new P,Hs=new P,vr=new P,xr=new P,wi=new P;function Ja(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){wi.fromArray(s,r);let o=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var tf=new Ui,zs=new P,Ka=new P,mi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):tf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(Ka)),this.expandByPoint(zs.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bn=new P,Qa=new P,yr=new P,li=new P,to=new P,_r=new P,eo=new P,jr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qa.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Qa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(yr),o=li.dot(this.direction),l=-li.dot(yr),c=li.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qa).addScaledVector(yr,d),f}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);let n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,i,r){to.subVectors(e,t),_r.subVectors(n,t),eo.crossVectors(to,_r);let a=this.direction.dot(eo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,t);let l=o*this.direction.dot(_r.crossVectors(li,_r));if(l<0)return null;let c=o*this.direction.dot(to.cross(li));if(c<0||l+c>a)return null;let h=-o*li.dot(eo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,p,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,p,v,g)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d+v*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,v=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ef,t,nf)}lookAt(t,e,n){let i=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ci.crossVectors(n,an),ci.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ci.crossVectors(n,an)),ci.normalize(),Mr.crossVectors(an,ci),i[0]=ci.x,i[4]=Mr.x,i[8]=an.x,i[1]=ci.y,i[5]=Mr.y,i[9]=an.y,i[2]=ci.z,i[6]=Mr.z,i[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],_=n[3],x=n[7],y=n[11],R=n[15],T=i[0],A=i[4],I=i[8],w=i[12],M=i[1],C=i[5],k=i[9],B=i[13],z=i[2],X=i[6],W=i[10],it=i[14],H=i[3],rt=i[7],ct=i[11],$=i[15];return r[0]=a*T+o*M+l*z+c*H,r[4]=a*A+o*C+l*X+c*rt,r[8]=a*I+o*k+l*W+c*ct,r[12]=a*w+o*B+l*it+c*$,r[1]=h*T+u*M+d*z+f*H,r[5]=h*A+u*C+d*X+f*rt,r[9]=h*I+u*k+d*W+f*ct,r[13]=h*w+u*B+d*it+f*$,r[2]=p*T+v*M+g*z+m*H,r[6]=p*A+v*C+g*X+m*rt,r[10]=p*I+v*k+g*W+m*ct,r[14]=p*w+v*B+g*it+m*$,r[3]=_*T+x*M+y*z+R*H,r[7]=_*A+x*C+y*X+R*rt,r[11]=_*I+x*k+y*W+R*ct,r[15]=_*w+x*B+y*it+R*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+v*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+g*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],_=u*g*c-v*d*c+v*l*f-o*g*f-u*l*m+o*d*m,x=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,y=h*v*c-p*u*c+p*o*f-a*v*f-h*o*m+a*u*m,R=p*u*l-h*v*l-p*o*d+a*v*d+h*o*g-a*u*g,T=e*_+n*x+i*y+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=_*A,t[1]=(v*d*r-u*g*r-v*i*f+n*g*f+u*i*m-n*d*m)*A,t[2]=(o*g*r-v*l*r+v*i*c-n*g*c-o*i*m+n*l*m)*A,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*A,t[4]=x*A,t[5]=(h*g*r-p*d*r+p*i*f-e*g*f-h*i*m+e*d*m)*A,t[6]=(p*l*r-a*g*r-p*i*c+e*g*c+a*i*m-e*l*m)*A,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*A,t[8]=y*A,t[9]=(p*u*r-h*v*r-p*n*f+e*v*f+h*n*m-e*u*m)*A,t[10]=(a*v*r-p*o*r+p*n*c-e*v*c-a*n*m+e*o*m)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=R*A,t[13]=(h*v*i-p*u*i+p*n*d-e*v*d-h*n*g+e*u*g)*A,t[14]=(p*o*i-a*v*i-p*n*l+e*v*l+a*n*g-e*o*g)*A,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,v=a*h,g=a*u,m=o*u,_=l*c,x=l*h,y=l*u,R=n.x,T=n.y,A=n.z;return i[0]=(1-(v+m))*R,i[1]=(f+y)*R,i[2]=(p-x)*R,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+m))*T,i[6]=(g+_)*T,i[7]=0,i[8]=(p+x)*A,i[9]=(g-_)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Qi.set(i[0],i[1],i[2]).length(),a=Qi.set(i[4],i[5],i[6]).length(),o=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Sn.copy(this);let c=1/r,h=1/a,u=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Xn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,p;if(o===Xn)f=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Xr)f=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Xn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h,p,v;if(o===Xn)p=(a+r)*u,v=-2*u;else if(o===Xr)p=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qi=new P,Sn=new se,ef=new P(0,0,0),nf=new P(1,1,1),ci=new P,Mr=new P,an=new P,rh=new se,ah=new Ge,In=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sf=0,oh=new P,ts=new Ge,kn=new se,Sr=new P,Vs=new P,rf=new P,af=new Ge,lh=new P(1,0,0),ch=new P(0,1,0),hh=new P(0,0,1),uh={type:"added"},of={type:"removed"},es={type:"childadded",child:null},no={type:"childremoved",child:null},Ze=class s extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new In,n=new Ge,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Ht}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(ch,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return oh.copy(t).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(ch,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Vs,Sr,this.up):kn.lookAt(Sr,Vs,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(kn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(of),no.child=t,this.dispatchEvent(no),no.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ze.DEFAULT_UP=new P(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new P,Hn=new P,io=new P,zn=new P,ns=new P,is=new P,dh=new P,so=new P,ro=new P,ao=new P,oo=new jt,lo=new jt,co=new jt,Ii=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){bn.subVectors(i,e),Hn.subVectors(n,e),io.subVectors(t,e);let a=bn.dot(bn),o=bn.dot(Hn),l=bn.dot(io),c=Hn.dot(Hn),h=Hn.dot(io),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return oo.setScalar(0),lo.setScalar(0),co.setScalar(0),oo.fromBufferAttribute(t,e),lo.fromBufferAttribute(t,n),co.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(oo,r.x),a.addScaledVector(lo,r.y),a.addScaledVector(co,r.z),a}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),Hn.subVectors(t,e),bn.cross(Hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),bn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;ns.subVectors(i,n),is.subVectors(r,n),so.subVectors(t,n);let l=ns.dot(so),c=is.dot(so);if(l<=0&&c<=0)return e.copy(n);ro.subVectors(t,i);let h=ns.dot(ro),u=is.dot(ro);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ns,a);ao.subVectors(t,r);let f=ns.dot(ao),p=is.dot(ao);if(p>=0&&f<=p)return e.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(is,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return dh.subVectors(r,i),o=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(dh,o);let m=1/(g+v+d);return a=v*m,o=d*m,e.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},br={h:0,s:0,l:0};function ho(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=$d(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ho(a,r,t+1/3),this.g=ho(a,r,t),this.b=ho(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Kt.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Fe(Ve.r*255,0,255))*65536+Math.round(Fe(Ve.g*255,0,255))*256+Math.round(Fe(Ve.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,i=Ve.g,r=Ve.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Xe){Kt.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,i=Ve.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(br);let n=$a(hi.h,br.h,e),i=$a(hi.s,br.s,e),r=$a(hi.l,br.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new kt;kt.NAMES=hu;var lf=0,gi=class extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=ir(),this.name="",this.blending=cs,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fs,this.blendDst=Zs,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fs&&(n.blendSrc=this.blendSrc),this.blendDst!==Zs&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},cn=class extends gi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ee=new P,wr=new yt,he=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jc&&(t.usage=this.usage),t}};var Kr=class extends he{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qr=class extends he{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends he{constructor(t,e,n){super(new Float32Array(t),e,n)}},cf=0,fn=new se,uo=new Ze,ss=new P,on=new Ui,Gs=new Ui,Pe=new P,ye=class s extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?Qr:Kr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(on.min,Gs.min),on.expandByPoint(Pe),Pe.addVectors(on.max,Gs.max),on.expandByPoint(Pe)):(on.expandByPoint(Gs.min),on.expandByPoint(Gs.max))}on.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(t,c),Pe.add(ss)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;let c=new P,h=new P,u=new P,d=new yt,f=new yt,p=new yt,v=new P,g=new P;function m(I,w,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),o[I].add(v),o[w].add(v),o[M].add(v),l[I].add(g),l[w].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let I=0,w=_.length;I<w;++I){let M=_[I],C=M.start,k=M.count;for(let B=C,z=C+k;B<z;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let x=new P,y=new P,R=new P,T=new P;function A(I){R.fromBufferAttribute(i,I),T.copy(R);let w=o[I];x.copy(w),x.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(T,w);let C=y.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,C)}for(let I=0,w=_.length;I<w;++I){let M=_[I],C=M.start,k=M.count;for(let B=C,z=C+k;B<z;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new he(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=new se,Ei=new jr,Er=new mi,ph=new P,Tr=new P,Ar=new P,Rr=new P,fo=new P,Cr=new P,mh=new P,Ir=new P,Et=class extends Ze{constructor(t=new ye,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(fo.fromBufferAttribute(u,t),a?Cr.addScaledVector(fo,h):Cr.addScaledVector(fo.sub(e),h))}e.add(Cr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Er.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Er,ph)===null||Ei.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(fh.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(fh),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,R=x;y<R;y+=3){let T=o.getX(y),A=o.getX(y+1),I=o.getX(y+2);i=Pr(this,m,t,n,c,h,u,T,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let _=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);i=Pr(this,a,t,n,c,h,u,_,x,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,R=x;y<R;y+=3){let T=y,A=y+1,I=y+2;i=Pr(this,m,t,n,c,h,u,T,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let _=g,x=g+1,y=g+2;i=Pr(this,a,t,n,c,h,u,_,x,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function hf(s,t,e,n,i,r,a,o){let l;if(t.side===Te?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ln,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ir);return c<e.near||c>e.far?null:{distance:c,point:Ir.clone(),object:s}}function Pr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Tr),s.getVertexPosition(l,Ar),s.getVertexPosition(c,Rr);let h=hf(s,t,e,n,Tr,Ar,Rr,mh);if(h){let u=new P;Ii.getBarycoord(mh,Tr,Ar,Rr,u),i&&(h.uv=Ii.getInterpolatedAttribute(i,o,l,c,u,new yt)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,o,l,c,u,new yt)),a&&(h.normal=Ii.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};Ii.getNormal(Tr,Ar,Rr,d.normal),h.face=d,h.barycoord=u}return h}var De=class s extends ye{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function p(v,g,m,_,x,y,R,T,A,I,w){let M=y/A,C=R/I,k=y/2,B=R/2,z=T/2,X=A+1,W=I+1,it=0,H=0,rt=new P;for(let ct=0;ct<W;ct++){let $=ct*C-B;for(let Q=0;Q<X;Q++){let st=Q*M-k;rt[v]=st*_,rt[g]=$*x,rt[m]=z,c.push(rt.x,rt.y,rt.z),rt[v]=0,rt[g]=0,rt[m]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Q/A),u.push(1-ct/I),it+=1}}for(let ct=0;ct<I;ct++)for(let $=0;$<A;$++){let Q=d+$+X*ct,st=d+$+X*(ct+1),O=d+($+1)+X*(ct+1),K=d+($+1)+X*ct;l.push(Q,st,K),l.push(st,O,K),H+=6}o.addGroup(f,H,w),f+=H,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function qe(s){let t={};for(let e=0;e<s.length;e++){let n=_s(s[e]);for(let i in n)t[i]=n[i]}return t}function uf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var df={clone:_s,merge:qe},ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends gi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ff,this.fragmentShader=pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ta=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new P,gh=new yt,vh=new yt,$e=class extends ta{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ll*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ll*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,gh,vh),e.subVectors(vh,gh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},rs=-90,as=1,Js=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new $e(rs,as,t,e);i.layers=this.layers,this.add(i);let r=new $e(rs,as,t,e);r.layers=this.layers,this.add(r);let a=new $e(rs,as,t,e);a.layers=this.layers,this.add(a);let o=new $e(rs,as,t,e);o.layers=this.layers,this.add(o);let l=new $e(rs,as,t,e);l.layers=this.layers,this.add(l);let c=new $e(rs,as,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ea=class extends tn{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ks=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ea(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Me}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new De(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:fi});r.uniforms.tEquirect.value=e;let a=new Et(i,r),o=e.minFilter;return e.minFilter===Li&&(e.minFilter=Me),new Js(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},po=new P,mf=new P,gf=new Ht,Gn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=po.subVectors(n,e).cross(mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||gf.getNormalMatrix(t),i=this.coplanarPoint(po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new mi,Lr=new P,Ni=class{constructor(t=new Gn,e=new Gn,n=new Gn,i=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],v=i[10],g=i[11],m=i[12],_=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,g-f,y-m).normalize(),n[1].setComponents(l+r,d+c,g+f,y+m).normalize(),n[2].setComponents(l+a,d+h,g+p,y+_).normalize(),n[3].setComponents(l-a,d-h,g-p,y-_).normalize(),n[4].setComponents(l-o,d-u,g-v,y-x).normalize(),e===Xn)n[5].setComponents(l+o,d+u,g+v,y+x).normalize();else if(e===Xr)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Lr.x=i.normal.x>0?t.max.x:t.min.x,Lr.y=i.normal.y>0?t.max.y:t.min.y,Lr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function du(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function vf(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Ms=class s extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let _=m*d-a;for(let x=0;x<c;x++){let y=x*u-r;p.push(y,-_,0),v.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let x=_+c*m,y=_+c*(m+1),R=_+1+c*(m+1),T=_+1+c*m;f.push(x,y,T),f.push(y,R,T)}this.setIndex(f),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,If=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ap=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Em=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,km=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:xf,alphahash_pars_fragment:yf,alphamap_fragment:_f,alphamap_pars_fragment:Mf,alphatest_fragment:Sf,alphatest_pars_fragment:bf,aomap_fragment:wf,aomap_pars_fragment:Ef,batching_pars_vertex:Tf,batching_vertex:Af,begin_vertex:Rf,beginnormal_vertex:Cf,bsdfs:If,iridescence_fragment:Pf,bumpmap_pars_fragment:Lf,clipping_planes_fragment:Df,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Ff,color_fragment:Of,color_pars_fragment:Bf,color_pars_vertex:kf,color_vertex:Hf,common:zf,cube_uv_reflection_fragment:Vf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Wf,displacementmap_vertex:qf,emissivemap_fragment:Xf,emissivemap_pars_fragment:$f,colorspace_fragment:Yf,colorspace_pars_fragment:Zf,envmap_fragment:jf,envmap_common_pars_fragment:Jf,envmap_pars_fragment:Kf,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:hp,envmap_vertex:tp,fog_vertex:ep,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:sp,gradientmap_pars_fragment:rp,lightmap_pars_fragment:ap,lights_lambert_fragment:op,lights_lambert_pars_fragment:lp,lights_pars_begin:cp,lights_toon_fragment:up,lights_toon_pars_fragment:dp,lights_phong_fragment:fp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:vp,lights_fragment_maps:xp,lights_fragment_end:yp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:bp,map_fragment:wp,map_pars_fragment:Ep,map_particle_fragment:Tp,map_particle_pars_fragment:Ap,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Ip,morphcolor_vertex:Pp,morphnormal_vertex:Lp,morphtarget_pars_vertex:Dp,morphtarget_vertex:Up,normal_fragment_begin:Np,normal_fragment_maps:Fp,normal_pars_fragment:Op,normal_pars_vertex:Bp,normal_vertex:kp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Vp,clearcoat_pars_fragment:Gp,iridescence_pars_fragment:Wp,opaque_fragment:qp,packing:Xp,premultiplied_alpha_fragment:$p,project_vertex:Yp,dithering_fragment:Zp,dithering_pars_fragment:jp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:Kp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:tm,shadowmap_vertex:em,shadowmask_pars_fragment:nm,skinbase_vertex:im,skinning_pars_vertex:sm,skinning_vertex:rm,skinnormal_vertex:am,specularmap_fragment:om,specularmap_pars_fragment:lm,tonemapping_fragment:cm,tonemapping_pars_fragment:hm,transmission_fragment:um,transmission_pars_fragment:dm,uv_pars_fragment:fm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:vm,background_frag:xm,backgroundCube_vert:ym,backgroundCube_frag:_m,cube_vert:Mm,cube_frag:Sm,depth_vert:bm,depth_frag:wm,distanceRGBA_vert:Em,distanceRGBA_frag:Tm,equirect_vert:Am,equirect_frag:Rm,linedashed_vert:Cm,linedashed_frag:Im,meshbasic_vert:Pm,meshbasic_frag:Lm,meshlambert_vert:Dm,meshlambert_frag:Um,meshmatcap_vert:Nm,meshmatcap_frag:Fm,meshnormal_vert:Om,meshnormal_frag:Bm,meshphong_vert:km,meshphong_frag:Hm,meshphysical_vert:zm,meshphysical_frag:Vm,meshtoon_vert:Gm,meshtoon_frag:Wm,points_vert:qm,points_frag:Xm,shadow_vert:$m,shadow_frag:Ym,sprite_vert:Zm,sprite_frag:jm},gt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Rn={basic:{uniforms:qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:qe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:qe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:qe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:qe([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:qe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:qe([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:qe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:qe([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:qe([gt.common,gt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:qe([gt.lights,gt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Rn.physical={uniforms:qe([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Dr={r:0,b:0,g:0},Ai=new In,Jm=new se;function Km(s,t,e,n,i,r,a){let o=new kt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function v(_){let x=!1,y=p(_);y===null?m(o,l):y&&y.isColor&&(m(y,1),x=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,x){let y=p(x);y&&(y.isCubeTexture||y.mapping===pa)?(h===void 0&&(h=new Et(new De(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:_s(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ai.copy(x.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(Ai)),h.material.toneMapped=Kt.getTransfer(y.colorSpace)!==oe,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Et(new Ms(2,2),new Qt({name:"BackgroundMaterial",uniforms:_s(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,x){_.getRGB(Dr,uu(s)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(o,l)},render:v,addToRenderList:g}}function Qm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(M,C,k,B,z){let X=!1,W=u(B,k,C);r!==W&&(r=W,c(r.object)),X=f(M,B,k,z),X&&p(M,B,k,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(M,C,k,B),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,C,k){let B=k.wireframe===!0,z=n[M.id];z===void 0&&(z={},n[M.id]=z);let X=z[C.id];X===void 0&&(X={},z[C.id]=X);let W=X[B];return W===void 0&&(W=d(l()),X[B]=W),W}function d(M){let C=[],k=[],B=[];for(let z=0;z<e;z++)C[z]=0,k[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,C,k,B){let z=r.attributes,X=C.attributes,W=0,it=k.getAttributes();for(let H in it)if(it[H].location>=0){let ct=z[H],$=X[H];if($===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),ct===void 0||ct.attribute!==$||$&&ct.data!==$.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function p(M,C,k,B){let z={},X=C.attributes,W=0,it=k.getAttributes();for(let H in it)if(it[H].location>=0){let ct=X[H];ct===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));let $={};$.attribute=ct,ct&&ct.data&&($.data=ct.data),z[H]=$,W++}r.attributes=z,r.attributesNum=W,r.index=B}function v(){let M=r.newAttributes;for(let C=0,k=M.length;C<k;C++)M[C]=0}function g(M){m(M,0)}function m(M,C){let k=r.newAttributes,B=r.enabledAttributes,z=r.attributeDivisors;k[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),z[M]!==C&&(s.vertexAttribDivisor(M,C),z[M]=C)}function _(){let M=r.newAttributes,C=r.enabledAttributes;for(let k=0,B=C.length;k<B;k++)C[k]!==M[k]&&(s.disableVertexAttribArray(k),C[k]=0)}function x(M,C,k,B,z,X,W){W===!0?s.vertexAttribIPointer(M,C,k,z,X):s.vertexAttribPointer(M,C,k,B,z,X)}function y(M,C,k,B){v();let z=B.attributes,X=k.getAttributes(),W=C.defaultAttributeValues;for(let it in X){let H=X[it];if(H.location>=0){let rt=z[it];if(rt===void 0&&(it==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),it==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){let ct=rt.normalized,$=rt.itemSize,Q=t.get(rt);if(Q===void 0)continue;let st=Q.buffer,O=Q.type,K=Q.bytesPerElement,lt=O===s.INT||O===s.UNSIGNED_INT||rt.gpuType===ql;if(rt.isInterleavedBufferAttribute){let nt=rt.data,dt=nt.stride,ot=rt.offset;if(nt.isInstancedInterleavedBuffer){for(let ut=0;ut<H.locationSize;ut++)m(H.location+ut,nt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ut=0;ut<H.locationSize;ut++)g(H.location+ut);s.bindBuffer(s.ARRAY_BUFFER,st);for(let ut=0;ut<H.locationSize;ut++)x(H.location+ut,$/H.locationSize,O,ct,dt*K,(ot+$/H.locationSize*ut)*K,lt)}else{if(rt.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)m(H.location+nt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let nt=0;nt<H.locationSize;nt++)g(H.location+nt);s.bindBuffer(s.ARRAY_BUFFER,st);for(let nt=0;nt<H.locationSize;nt++)x(H.location+nt,$/H.locationSize,O,ct,$*K,$/H.locationSize*nt*K,lt)}}else if(W!==void 0){let ct=W[it];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(H.location,ct);break;case 3:s.vertexAttrib3fv(H.location,ct);break;case 4:s.vertexAttrib4fv(H.location,ct);break;default:s.vertexAttrib1fv(H.location,ct)}}}}_()}function R(){I();for(let M in n){let C=n[M];for(let k in C){let B=C[k];for(let z in B)h(B[z].object),delete B[z];delete C[k]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let k in C){let B=C[k];for(let z in B)h(B[z].object),delete B[z];delete C[k]}delete n[M.id]}function A(M){for(let C in n){let k=n[C];if(k[M.id]===void 0)continue;let B=k[M.id];for(let z in B)h(B[z].object),delete B[z];delete k[M.id]}}function I(){w(),a=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function t0(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v]*d[v];e.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function e0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Oe&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let I=A===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Yn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pn&&!I)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:T}}function n0(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Gn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,x=_*4,y=m.clippingState||null;l.value=y,y=h(p,d,x,f);for(let R=0;R!==x;++R)y[R]=e[R];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,y=f;x!==v;++x,y+=4)a.copy(u[x]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function i0(s){let t=new WeakMap;function e(a,o){return o===Lo?a.mapping=ms:o===Do&&(a.mapping=gs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Lo||o===Do)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ks(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ss=class extends ta{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ls=4,xh=[.125,.215,.35,.446,.526,.582],Pi=20,mo=new Ss,yh=new kt,go=null,vo=0,xo=0,yo=!1,Ci=(1+Math.sqrt(5))/2,os=1/Ci,_h=[new P(-Ci,os,0),new P(Ci,os,0),new P(-os,0,Ci),new P(os,0,Ci),new P(0,Ci,-os),new P(0,Ci,os),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go,vo,xo),this._renderer.xr.enabled=yo,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Me,minFilter:Me,generateMipmaps:!1,type:En,format:Oe,colorSpace:vi,depthBuffer:!1},i=Mh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s0(r)),this._blurMaterial=r0(r,t,e)}return i}_compileMaterial(t){let e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,n,i){let o=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(yh),h.toneMapping=Cn,h.autoClear=!1;let f=new cn({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),p=new Et(new De,f),v=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(yh),v=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):_===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let x=this._cubeSize;Ur(i,_*x,m>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ms||t.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,mo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_h[(i-r-1)%_h.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Et(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),v=r/p,g=isFinite(r)?1+Math.floor(h*v):Pi;g>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pi}`);let m=[],_=0;for(let A=0;A<Pi;++A){let I=A/v,w=Math.exp(-I*I/2);m.push(w),A===0?_+=w:A<g&&(_+=2*w)}for(let A=0;A<m.length;A++)m[A]=m[A]/_;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;let y=this._sizeLods[i],R=3*y*(i>x-ls?i-x+ls:0),T=4*(this._cubeSize-y);Ur(e,R,T,3*y,2*y),l.setRenderTarget(e),l.render(u,mo)}};function s0(s){let t=[],e=[],n=[],i=s,r=s-ls+1+xh.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ls?l=xh[a-s+ls-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,g=2,m=1,_=new Float32Array(v*p*f),x=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,I=T>2?0:-1,w=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];_.set(w,v*p*T),x.set(d,g*p*T);let M=[T,T,T,T,T,T];y.set(M,m*p*T)}let R=new ye;R.setAttribute("position",new he(_,v)),R.setAttribute("uv",new he(x,g)),R.setAttribute("faceIndex",new he(y,m)),t.push(R),i>ls&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mh(s,t,e){let n=new Ye(s,t,e);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function r0(s,t,e){let n=new Float32Array(Pi),i=new P(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Sh(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function bh(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function a0(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Lo||l===Do,h=l===ms||l===gs;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new bs(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new bs(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function o0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function l0(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let x=0,y=_.length;x<y;x+=3){let R=_[x+0],T=_[x+1],A=_[x+2];d.push(R,T,T,A,A,R)}}else if(p!==void 0){let _=p.array;v=p.version;for(let x=0,y=_.length/3-1;x<y;x+=3){let R=x+0,T=x+1,A=x+2;d.push(R,T,T,A,A,R)}}else return;let g=new(cu(d)?Qr:Kr)(d,1);g.version=v;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function c0(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*a,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,v){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*v[_];e.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function h0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function u0(s,t,e){let n=new WeakMap,i=new jt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],x=0;f===!0&&(x=1),p===!0&&(x=2),v===!0&&(x=3);let y=o.attributes.position.count*x,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*R*4*u),A=new Zr(T,y,R,u);A.type=pn,A.needsUpdate=!0;let I=x*4;for(let M=0;M<u;M++){let C=g[M],k=m[M],B=_[M],z=y*R*4*M;for(let X=0;X<C.count;X++){let W=X*I;f===!0&&(i.fromBufferAttribute(C,X),T[z+W+0]=i.x,T[z+W+1]=i.y,T[z+W+2]=i.z,T[z+W+3]=0),p===!0&&(i.fromBufferAttribute(k,X),T[z+W+4]=i.x,T[z+W+5]=i.y,T[z+W+6]=i.z,T[z+W+7]=0),v===!0&&(i.fromBufferAttribute(B,X),T[z+W+8]=i.x,T[z+W+9]=i.y,T[z+W+10]=i.z,T[z+W+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new yt(y,R)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function d0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var na=class extends tn{constructor(t,e,n,i,r,a,o,l,c,h=hs){if(h!==hs&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hs&&(n=Di),n===void 0&&h===ys&&(n=xs),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fu=new tn,wh=new na(1,1),pu=new Zr,mu=new ul,gu=new ea,Eh=[],Th=[],Ah=new Float32Array(16),Rh=new Float32Array(9),Ch=new Float32Array(4);function As(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Eh[i];if(r===void 0&&(r=new Float32Array(i),Eh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ie(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ga(s,t){let e=Th[t];e===void 0&&(e=new Int32Array(t),Th[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function f0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function p0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Ie(e,t)}}function m0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Ie(e,t)}}function g0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Ie(e,t)}}function v0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Ch.set(n),s.uniformMatrix2fv(this.addr,!1,Ch),Ie(e,n)}}function x0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Rh.set(n),s.uniformMatrix3fv(this.addr,!1,Rh),Ie(e,n)}}function y0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Ah.set(n),s.uniformMatrix4fv(this.addr,!1,Ah),Ie(e,n)}}function _0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function M0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Ie(e,t)}}function S0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Ie(e,t)}}function b0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Ie(e,t)}}function w0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function E0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Ie(e,t)}}function T0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Ie(e,t)}}function A0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Ie(e,t)}}function R0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wh.compareFunction=lu,r=wh):r=fu,e.setTexture2D(t||r,i)}function C0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||mu,i)}function I0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gu,i)}function P0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pu,i)}function L0(s){switch(s){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return v0;case 35675:return x0;case 35676:return y0;case 5124:case 35670:return _0;case 35667:case 35671:return M0;case 35668:case 35672:return S0;case 35669:case 35673:return b0;case 5125:return w0;case 36294:return E0;case 36295:return T0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return P0}}function D0(s,t){s.uniform1fv(this.addr,t)}function U0(s,t){let e=As(t,this.size,2);s.uniform2fv(this.addr,e)}function N0(s,t){let e=As(t,this.size,3);s.uniform3fv(this.addr,e)}function F0(s,t){let e=As(t,this.size,4);s.uniform4fv(this.addr,e)}function O0(s,t){let e=As(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function B0(s,t){let e=As(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function k0(s,t){let e=As(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function H0(s,t){s.uniform1iv(this.addr,t)}function z0(s,t){s.uniform2iv(this.addr,t)}function V0(s,t){s.uniform3iv(this.addr,t)}function G0(s,t){s.uniform4iv(this.addr,t)}function W0(s,t){s.uniform1uiv(this.addr,t)}function q0(s,t){s.uniform2uiv(this.addr,t)}function X0(s,t){s.uniform3uiv(this.addr,t)}function $0(s,t){s.uniform4uiv(this.addr,t)}function Y0(s,t,e){let n=this.cache,i=t.length,r=ga(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||fu,r[a])}function Z0(s,t,e){let n=this.cache,i=t.length,r=ga(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||mu,r[a])}function j0(s,t,e){let n=this.cache,i=t.length,r=ga(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||gu,r[a])}function J0(s,t,e){let n=this.cache,i=t.length,r=ga(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||pu,r[a])}function K0(s){switch(s){case 5126:return D0;case 35664:return U0;case 35665:return N0;case 35666:return F0;case 35674:return O0;case 35675:return B0;case 35676:return k0;case 5124:case 35670:return H0;case 35667:case 35671:return z0;case 35668:case 35672:return V0;case 35669:case 35673:return G0;case 5125:return W0;case 36294:return q0;case 36295:return X0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return J0}}var dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=L0(e.type)}},fl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=K0(e.type)}},pl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},_o=/(\w+)(\])?(\[|\.)?/g;function Ih(s,t){s.seq.push(t),s.map[t.id]=t}function Q0(s,t,e){let n=s.name,i=n.length;for(_o.lastIndex=0;;){let r=_o.exec(n),a=_o.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ih(e,c===void 0?new dl(o,s,t):new fl(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new pl(o),Ih(e,u)),e=u}}}var ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Q0(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Ph(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var tg=37297,eg=0;function ng(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Lh=new Ht;function ig(s){Kt._getMatrix(Lh,Kt.workingColorSpace,s);let t=`mat3( ${Lh.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(s)){case ma:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Dh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ng(s.getShaderSource(t),a)}else return i}function sg(s,t){let e=ig(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rg(s,t){let e;switch(t){case Cd:e="Linear";break;case Id:e="Reinhard";break;case Pd:e="Cineon";break;case Ld:e="ACESFilmic";break;case Ud:e="AgX";break;case Nd:e="Neutral";break;case Dd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nr=new P;function ag(){Kt.getLuminanceCoefficients(Nr);let s=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function og(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function lg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function qs(s){return s!==""}function Uh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(s){return s.replace(hg,dg)}var ug=new Map;function dg(s,t){let e=Xt[t];if(e===void 0){let n=ug.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ml(e)}var fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(s){return s.replace(fg,pg)}function pg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Oh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function gg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===gs&&(t="ENVMAP_MODE_REFRACTION"),t}function xg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ad:t="ENVMAP_BLENDING_MIX";break;case Rd:t="ENVMAP_BLENDING_ADD";break}return t}function yg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _g(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=mg(e),c=gg(e),h=vg(e),u=xg(e),d=yg(e),f=og(e),p=lg(r),v=i.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(qs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(qs).join(`
`),m.length>0&&(m+=`
`)):(g=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),m=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,sg("linearToOutputTexel",e.outputColorSpace),ag(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),a=ml(a),a=Uh(a,e),a=Nh(a,e),o=ml(o),o=Uh(o,e),o=Nh(o,e),a=Fh(a),o=Fh(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=_+g+a,y=_+m+o,R=Ph(i,i.VERTEX_SHADER,x),T=Ph(i,i.FRAGMENT_SHADER,y);i.attachShader(v,R),i.attachShader(v,T),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(C){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(v).trim(),B=i.getShaderInfoLog(R).trim(),z=i.getShaderInfoLog(T).trim(),X=!0,W=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,R,T);else{let it=Dh(i,R,"vertex"),H=Dh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+it+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||z==="")&&(W=!1);W&&(C.diagnostics={runnable:X,programLog:k,vertexShader:{log:B,prefix:g},fragmentShader:{log:z,prefix:m}})}i.deleteShader(R),i.deleteShader(T),I=new ds(i,v),w=cg(i,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,tg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}var Mg=0,gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vl(t),e.set(t,n)),n}},vl=class{constructor(t){this.id=Mg++,this.code=t,this.usedTimes=0}};function Sg(s,t,e,n,i,r,a){let o=new Jr,l=new gl,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,M,C,k,B){let z=k.fog,X=B.geometry,W=w.isMeshStandardMaterial?k.environment:null,it=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),H=it&&it.mapping===pa?it.image.height:null,rt=p[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$=ct!==void 0?ct.length:0,Q=0;X.morphAttributes.position!==void 0&&(Q=1),X.morphAttributes.normal!==void 0&&(Q=2),X.morphAttributes.color!==void 0&&(Q=3);let st,O,K,lt;if(rt){let ee=Rn[rt];st=ee.vertexShader,O=ee.fragmentShader}else st=w.vertexShader,O=w.fragmentShader,l.update(w),K=l.getVertexShaderID(w),lt=l.getFragmentShaderID(w);let nt=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),ot=B.isInstancedMesh===!0,ut=B.isBatchedMesh===!0,pt=!!w.map,At=!!w.matcap,It=!!it,L=!!w.aoMap,Jt=!!w.lightMap,Ft=!!w.bumpMap,Ot=!!w.normalMap,tt=!!w.displacementMap,St=!!w.emissiveMap,vt=!!w.metalnessMap,E=!!w.roughnessMap,S=w.anisotropy>0,U=w.clearcoat>0,Z=w.dispersion>0,j=w.iridescence>0,Y=w.sheen>0,Rt=w.transmission>0,ft=S&&!!w.anisotropyMap,Tt=U&&!!w.clearcoatMap,qt=U&&!!w.clearcoatNormalMap,at=U&&!!w.clearcoatRoughnessMap,Mt=j&&!!w.iridescenceMap,Ut=j&&!!w.iridescenceThicknessMap,Bt=Y&&!!w.sheenColorMap,bt=Y&&!!w.sheenRoughnessMap,$t=!!w.specularMap,Vt=!!w.specularColorMap,ae=!!w.specularIntensityMap,D=Rt&&!!w.transmissionMap,mt=Rt&&!!w.thicknessMap,q=!!w.gradientMap,J=!!w.alphaMap,xt=w.alphaTest>0,_t=!!w.alphaHash,Gt=!!w.extensions,ge=Cn;w.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ge=s.toneMapping);let Re={shaderID:rt,shaderType:w.type,shaderName:w.name,vertexShader:st,fragmentShader:O,defines:w.defines,customVertexShaderID:K,customFragmentShaderID:lt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ut,batchingColor:ut&&B._colorsTexture!==null,instancing:ot,instancingColor:ot&&B.instanceColor!==null,instancingMorph:ot&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:vi,alphaToCoverage:!!w.alphaToCoverage,map:pt,matcap:At,envMap:It,envMapMode:It&&it.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:Jt,bumpMap:Ft,normalMap:Ot,displacementMap:d&&tt,emissiveMap:St,normalMapObjectSpace:Ot&&w.normalMapType===kd,normalMapTangentSpace:Ot&&w.normalMapType===ou,metalnessMap:vt,roughnessMap:E,anisotropy:S,anisotropyMap:ft,clearcoat:U,clearcoatMap:Tt,clearcoatNormalMap:qt,clearcoatRoughnessMap:at,dispersion:Z,iridescence:j,iridescenceMap:Mt,iridescenceThicknessMap:Ut,sheen:Y,sheenColorMap:Bt,sheenRoughnessMap:bt,specularMap:$t,specularColorMap:Vt,specularIntensityMap:ae,transmission:Rt,transmissionMap:D,thicknessMap:mt,gradientMap:q,opaque:w.transparent===!1&&w.blending===cs&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:xt,alphaHash:_t,combine:w.combine,mapUv:pt&&v(w.map.channel),aoMapUv:L&&v(w.aoMap.channel),lightMapUv:Jt&&v(w.lightMap.channel),bumpMapUv:Ft&&v(w.bumpMap.channel),normalMapUv:Ot&&v(w.normalMap.channel),displacementMapUv:tt&&v(w.displacementMap.channel),emissiveMapUv:St&&v(w.emissiveMap.channel),metalnessMapUv:vt&&v(w.metalnessMap.channel),roughnessMapUv:E&&v(w.roughnessMap.channel),anisotropyMapUv:ft&&v(w.anisotropyMap.channel),clearcoatMapUv:Tt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:qt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:bt&&v(w.sheenRoughnessMap.channel),specularMapUv:$t&&v(w.specularMap.channel),specularColorMapUv:Vt&&v(w.specularColorMap.channel),specularIntensityMapUv:ae&&v(w.specularIntensityMap.channel),transmissionMapUv:D&&v(w.transmissionMap.channel),thicknessMapUv:mt&&v(w.thicknessMap.channel),alphaMapUv:J&&v(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ot||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(pt||J),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:dt,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,decodeVideoTexture:pt&&w.map.isVideoTexture===!0&&Kt.getTransfer(w.map.colorSpace)===oe,decodeVideoTextureEmissive:St&&w.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(w.emissiveMap.colorSpace)===oe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_e,flipSided:w.side===Te,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function m(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let C in w.defines)M.push(C),M.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(_(M,w),x(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){let M=p[w.type],C;if(M){let k=Rn[M];C=df.clone(k.uniforms)}else C=w.uniforms;return C}function R(w,M){let C;for(let k=0,B=h.length;k<B;k++){let z=h[k];if(z.cacheKey===M){C=z,++C.usedTimes;break}}return C===void 0&&(C=new _g(s,M,w,r),h.push(C)),C}function T(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:I}}function bg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function wg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Bh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function kh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,p,v,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),t++,m}function o(u,d,f,p,v,g){let m=a(u,d,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,p,v,g){let m=a(u,d,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||wg),n.length>1&&n.sort(d||Bh),i.length>1&&i.sort(d||Bh)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Eg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new kh,s.set(n,[a])):i>=r.length?(a=new kh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Tg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new kt};break;case"SpotLight":e={position:new P,direction:new P,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Ag(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Rg=0;function Cg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ig(s){let t=new Tg,e=Ag(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new se,a=new se;function o(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,_=0,x=0,y=0,R=0,T=0,A=0;c.sort(Cg);for(let w=0,M=c.length;w<M;w++){let C=c[w],k=C.color,B=C.intensity,z=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*B,u+=k.g*B,d+=k.b*B;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],B);A++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let it=C.shadow,H=e.get(C);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=C.shadow.matrix,_++}n.directional[f]=W,f++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(k).multiplyScalar(B),W.distance=z,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[v]=W;let it=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,it.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[v]=it.matrix,C.castShadow){let H=e.get(C);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=X,y++}v++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(k).multiplyScalar(B),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=W,g++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let it=C.shadow,H=e.get(C);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,H.shadowCameraNear=it.camera.near,H.shadowCameraFar=it.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=C.shadow.matrix,x++}n.point[p]=W,p++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(B),W.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[m]=W,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==_||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==R||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=f,I.pointLength=p,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=_,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=R,I.numLightProbes=A,n.version=Rg++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0,g=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let x=c[m];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(x.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Hh(s){let t=new Ig(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Pg(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Hh(s),t.set(i,[o])):r>=a.length?(o=new Hh(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var xl=class extends gi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yl=class extends gi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ug(s,t,e){let n=new Ni,i=new yt,r=new yt,a=new jt,o=new xl({depthPacking:Bd}),l=new yl,c={},h=e.maxTextureSize,u={[ln]:Te,[Te]:ln,[_e]:_e},d=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Lg,fragmentShader:Dg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ye;p.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Et(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yh;let m=this.type;this.render=function(T,A,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let w=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),k=s.state;k.setBlending(fi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let B=m!==Vn&&this.type===Vn,z=m===Vn&&this.type!==Vn;for(let X=0,W=T.length;X<W;X++){let it=T[X],H=it.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let rt=H.getFrameExtents();if(i.multiply(rt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||B===!0||z===!0){let $=this.type!==Vn?{minFilter:Le,magFilter:Le}:{};H.map!==null&&H.map.dispose(),H.map=new Ye(i.x,i.y,$),H.map.texture.name=it.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let ct=H.getViewportCount();for(let $=0;$<ct;$++){let Q=H.getViewport($);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),k.viewport(a),H.updateMatrices(it,$),n=H.getFrustum(),y(A,I,H.camera,it,this.type)}H.isPointLightShadow!==!0&&this.type===Vn&&_(H,I),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,M,C)};function _(T,A){let I=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ye(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,I,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,I,f,v,null)}function x(T,A,I,w){let M=null,C=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=I.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let k=M.uuid,B=A.uuid,z=c[k];z===void 0&&(z={},c[k]=z);let X=z[B];X===void 0&&(X=M.clone(),z[B]=X,A.addEventListener("dispose",R)),M=X}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Vn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=s.properties.get(M);k.light=I}return M}function y(T,A,I,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Vn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let B=t.update(T),z=T.material;if(Array.isArray(z)){let X=B.groups;for(let W=0,it=X.length;W<it;W++){let H=X[W],rt=z[H.materialIndex];if(rt&&rt.visible){let ct=x(T,rt,w,M);T.onBeforeShadow(s,T,A,I,B,ct,H),s.renderBufferDirect(I,null,B,ct,T,H),T.onAfterShadow(s,T,A,I,B,ct,H)}}}else if(z.visible){let X=x(T,z,w,M);T.onBeforeShadow(s,T,A,I,B,X,null),s.renderBufferDirect(I,null,B,X,T,null),T.onAfterShadow(s,T,A,I,B,X,null)}}let k=T.children;for(let B=0,z=k.length;B<z;B++)y(k[B],A,I,w,M)}function R(T){T.target.removeEventListener("dispose",R);for(let I in c){let w=c[I],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Ng={[Eo]:To,[Ao]:Io,[Ro]:Po,[ps]:Co,[To]:Eo,[Io]:Ao,[Po]:Ro,[Co]:ps};function Fg(s,t){function e(){let D=!1,mt=new jt,q=null,J=new jt(0,0,0,0);return{setMask:function(xt){q!==xt&&!D&&(s.colorMask(xt,xt,xt,xt),q=xt)},setLocked:function(xt){D=xt},setClear:function(xt,_t,Gt,ge,Re){Re===!0&&(xt*=ge,_t*=ge,Gt*=ge),mt.set(xt,_t,Gt,ge),J.equals(mt)===!1&&(s.clearColor(xt,_t,Gt,ge),J.copy(mt))},reset:function(){D=!1,q=null,J.set(-1,0,0,0)}}}function n(){let D=!1,mt=!1,q=null,J=null,xt=null;return{setReversed:function(_t){if(mt!==_t){let Gt=t.get("EXT_clip_control");mt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let ge=xt;xt=null,this.setClear(ge)}mt=_t},getReversed:function(){return mt},setTest:function(_t){_t?nt(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(_t){q!==_t&&!D&&(s.depthMask(_t),q=_t)},setFunc:function(_t){if(mt&&(_t=Ng[_t]),J!==_t){switch(_t){case Eo:s.depthFunc(s.NEVER);break;case To:s.depthFunc(s.ALWAYS);break;case Ao:s.depthFunc(s.LESS);break;case ps:s.depthFunc(s.LEQUAL);break;case Ro:s.depthFunc(s.EQUAL);break;case Co:s.depthFunc(s.GEQUAL);break;case Io:s.depthFunc(s.GREATER);break;case Po:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=_t}},setLocked:function(_t){D=_t},setClear:function(_t){xt!==_t&&(mt&&(_t=1-_t),s.clearDepth(_t),xt=_t)},reset:function(){D=!1,q=null,J=null,xt=null,mt=!1}}}function i(){let D=!1,mt=null,q=null,J=null,xt=null,_t=null,Gt=null,ge=null,Re=null;return{setTest:function(ee){D||(ee?nt(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function(ee){mt!==ee&&!D&&(s.stencilMask(ee),mt=ee)},setFunc:function(ee,He,sn){(q!==ee||J!==He||xt!==sn)&&(s.stencilFunc(ee,He,sn),q=ee,J=He,xt=sn)},setOp:function(ee,He,sn){(_t!==ee||Gt!==He||ge!==sn)&&(s.stencilOp(ee,He,sn),_t=ee,Gt=He,ge=sn)},setLocked:function(ee){D=ee},setClear:function(ee){Re!==ee&&(s.clearStencil(ee),Re=ee)},reset:function(){D=!1,mt=null,q=null,J=null,xt=null,_t=null,Gt=null,ge=null,Re=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,_=null,x=null,y=null,R=null,T=null,A=new kt(0,0,0),I=0,w=!1,M=null,C=null,k=null,B=null,z=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=it>=1):H.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=it>=2);let rt=null,ct={},$=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),st=new jt().fromArray($),O=new jt().fromArray(Q);function K(D,mt,q,J){let xt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(D,_t),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<q;Gt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(mt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return _t}let lt={};lt[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),lt[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),lt[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(s.DEPTH_TEST),a.setFunc(ps),Ft(!1),Ot(Vc),nt(s.CULL_FACE),L(fi);function nt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function dt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function ot(D,mt){return u[D]!==mt?(s.bindFramebuffer(D,mt),u[D]=mt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=mt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function ut(D,mt){let q=f,J=!1;if(D){q=d.get(mt),q===void 0&&(q=[],d.set(mt,q));let xt=D.textures;if(q.length!==xt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Gt=xt.length;_t<Gt;_t++)q[_t]=s.COLOR_ATTACHMENT0+_t;q.length=xt.length,J=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,J=!0);J&&s.drawBuffers(q)}function pt(D){return p!==D?(s.useProgram(D),p=D,!0):!1}let At={[Wn]:s.FUNC_ADD,[ud]:s.FUNC_SUBTRACT,[dd]:s.FUNC_REVERSE_SUBTRACT};At[fd]=s.MIN,At[pd]=s.MAX;let It={[md]:s.ZERO,[Se]:s.ONE,[gd]:s.SRC_COLOR,[fs]:s.SRC_ALPHA,[Sd]:s.SRC_ALPHA_SATURATE,[_d]:s.DST_COLOR,[xd]:s.DST_ALPHA,[vd]:s.ONE_MINUS_SRC_COLOR,[Zs]:s.ONE_MINUS_SRC_ALPHA,[Md]:s.ONE_MINUS_DST_COLOR,[yd]:s.ONE_MINUS_DST_ALPHA,[bd]:s.CONSTANT_COLOR,[wd]:s.ONE_MINUS_CONSTANT_COLOR,[Ed]:s.CONSTANT_ALPHA,[Td]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,mt,q,J,xt,_t,Gt,ge,Re,ee){if(D===fi){v===!0&&(dt(s.BLEND),v=!1);return}if(v===!1&&(nt(s.BLEND),v=!0),D!==je){if(D!==g||ee!==w){if((m!==Wn||y!==Wn)&&(s.blendEquation(s.FUNC_ADD),m=Wn,y=Wn),ee)switch(D){case cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gc:s.blendFunc(s.ONE,s.ONE);break;case Wc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,x=null,R=null,T=null,A.set(0,0,0),I=0,g=D,w=ee}return}xt=xt||mt,_t=_t||q,Gt=Gt||J,(mt!==m||xt!==y)&&(s.blendEquationSeparate(At[mt],At[xt]),m=mt,y=xt),(q!==_||J!==x||_t!==R||Gt!==T)&&(s.blendFuncSeparate(It[q],It[J],It[_t],It[Gt]),_=q,x=J,R=_t,T=Gt),(ge.equals(A)===!1||Re!==I)&&(s.blendColor(ge.r,ge.g,ge.b,Re),A.copy(ge),I=Re),g=D,w=!1}function Jt(D,mt){D.side===_e?dt(s.CULL_FACE):nt(s.CULL_FACE);let q=D.side===Te;mt&&(q=!q),Ft(q),D.blending===cs&&D.transparent===!1?L(fi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),St(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Ot(D){D!==cd?(nt(s.CULL_FACE),D!==C&&(D===Vc?s.cullFace(s.BACK):D===hd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),C=D}function tt(D){D!==k&&(W&&s.lineWidth(D),k=D)}function St(D,mt,q){D?(nt(s.POLYGON_OFFSET_FILL),(B!==mt||z!==q)&&(s.polygonOffset(mt,q),B=mt,z=q)):dt(s.POLYGON_OFFSET_FILL)}function vt(D){D?nt(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function E(D){D===void 0&&(D=s.TEXTURE0+X-1),rt!==D&&(s.activeTexture(D),rt=D)}function S(D,mt,q){q===void 0&&(rt===null?q=s.TEXTURE0+X-1:q=rt);let J=ct[q];J===void 0&&(J={type:void 0,texture:void 0},ct[q]=J),(J.type!==D||J.texture!==mt)&&(rt!==q&&(s.activeTexture(q),rt=q),s.bindTexture(D,mt||lt[D]),J.type=D,J.texture=mt)}function U(){let D=ct[rt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(D){st.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function bt(D){O.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),O.copy(D))}function $t(D,mt){let q=c.get(mt);q===void 0&&(q=new WeakMap,c.set(mt,q));let J=q.get(D);J===void 0&&(J=s.getUniformBlockIndex(mt,D.name),q.set(D,J))}function Vt(D,mt){let J=c.get(mt).get(D);l.get(mt)!==J&&(s.uniformBlockBinding(mt,J,D.__bindingPointIndex),l.set(mt,J))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,ct={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,_=null,x=null,y=null,R=null,T=null,A=new kt(0,0,0),I=0,w=!1,M=null,C=null,k=null,B=null,z=null,st.set(0,0,s.canvas.width,s.canvas.height),O.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:dt,bindFramebuffer:ot,drawBuffers:ut,useProgram:pt,setBlending:L,setMaterial:Jt,setFlipSided:Ft,setCullFace:Ot,setLineWidth:tt,setPolygonOffset:St,setScissorTest:vt,activeTexture:E,bindTexture:S,unbindTexture:U,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:Mt,texImage3D:Ut,updateUBOMapping:$t,uniformBlockBinding:Vt,texStorage2D:qt,texStorage3D:at,texSubImage2D:Y,texSubImage3D:Rt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Tt,scissor:Bt,viewport:bt,reset:ae}}function zh(s,t,e,n){let i=Og(n);switch(e){case tu:return s*t;case nu:return s*t;case iu:return s*t*2;case su:return s*t/i.components*i.byteLength;case Yl:return s*t/i.components*i.byteLength;case ru:return s*t*2/i.components*i.byteLength;case Zl:return s*t*2/i.components*i.byteLength;case eu:return s*t*3/i.components*i.byteLength;case Oe:return s*t*4/i.components*i.byteLength;case jl:return s*t*4/i.components*i.byteLength;case Hr:case zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fo:case Bo:return Math.max(s,16)*Math.max(t,8)/4;case No:case Oo:return Math.max(s,8)*Math.max(t,8)/2;case ko:case Ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $o:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case jo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Wr:case nl:case il:return Math.ceil(s/4)*Math.ceil(t/4)*16;case au:case sl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case rl:case al:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Og(s){switch(s){case Yn:case Jh:return{byteLength:1,components:1};case js:case Kh:case En:return{byteLength:2,components:1};case Xl:case $l:return{byteLength:2,components:4};case Di:case ql:case pn:return{byteLength:4,components:1};case Qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Bg(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,S){return f?new OffscreenCanvas(E,S):$r("canvas")}function v(E,S,U){let Z=1,j=vt(E);if((j.width>U||j.height>U)&&(Z=U/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Y=Math.floor(Z*j.width),Rt=Math.floor(Z*j.height);u===void 0&&(u=p(Y,Rt));let ft=S?p(Y,Rt):u;return ft.width=Y,ft.height=Rt,ft.getContext("2d").drawImage(E,0,0,Y,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+Rt+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){s.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(E,S,U,Z,j=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=S;if(S===s.RED&&(U===s.FLOAT&&(Y=s.R32F),U===s.HALF_FLOAT&&(Y=s.R16F),U===s.UNSIGNED_BYTE&&(Y=s.R8)),S===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.R8UI),U===s.UNSIGNED_SHORT&&(Y=s.R16UI),U===s.UNSIGNED_INT&&(Y=s.R32UI),U===s.BYTE&&(Y=s.R8I),U===s.SHORT&&(Y=s.R16I),U===s.INT&&(Y=s.R32I)),S===s.RG&&(U===s.FLOAT&&(Y=s.RG32F),U===s.HALF_FLOAT&&(Y=s.RG16F),U===s.UNSIGNED_BYTE&&(Y=s.RG8)),S===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.RG8UI),U===s.UNSIGNED_SHORT&&(Y=s.RG16UI),U===s.UNSIGNED_INT&&(Y=s.RG32UI),U===s.BYTE&&(Y=s.RG8I),U===s.SHORT&&(Y=s.RG16I),U===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),U===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),U===s.UNSIGNED_INT&&(Y=s.RGB32UI),U===s.BYTE&&(Y=s.RGB8I),U===s.SHORT&&(Y=s.RGB16I),U===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),U===s.UNSIGNED_INT&&(Y=s.RGBA32UI),U===s.BYTE&&(Y=s.RGBA8I),U===s.SHORT&&(Y=s.RGBA16I),U===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&U===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),S===s.RGBA){let Rt=j?ma:Kt.getTransfer(Z);U===s.FLOAT&&(Y=s.RGBA32F),U===s.HALF_FLOAT&&(Y=s.RGBA16F),U===s.UNSIGNED_BYTE&&(Y=Rt===oe?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(E,S){let U;return E?S===null||S===Di||S===xs?U=s.DEPTH24_STENCIL8:S===pn?U=s.DEPTH32F_STENCIL8:S===js&&(U=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Di||S===xs?U=s.DEPTH_COMPONENT24:S===pn?U=s.DEPTH_COMPONENT32F:S===js&&(U=s.DEPTH_COMPONENT16),U}function R(E,S){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Le&&E.minFilter!==Me?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function T(E){let S=E.target;S.removeEventListener("dispose",T),I(S),S.isVideoTexture&&h.delete(S)}function A(E){let S=E.target;S.removeEventListener("dispose",A),M(S)}function I(E){let S=n.get(E);if(S.__webglInit===void 0)return;let U=E.source,Z=d.get(U);if(Z){let j=Z[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(E),Object.keys(Z).length===0&&d.delete(U)}n.remove(E)}function w(E){let S=n.get(E);s.deleteTexture(S.__webglTexture);let U=E.source,Z=d.get(U);delete Z[S.__cacheKey],a.memory.textures--}function M(E){let S=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let j=0;j<S.__webglFramebuffer[Z].length;j++)s.deleteFramebuffer(S.__webglFramebuffer[Z][j]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let U=E.textures;for(let Z=0,j=U.length;Z<j;Z++){let Y=n.get(U[Z]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(U[Z])}n.remove(E)}let C=0;function k(){C=0}function B(){let E=C;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),C+=1,E}function z(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function X(E,S){let U=n.get(E);if(E.isVideoTexture&&tt(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){let Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(U,E,S);return}}e.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+S)}function W(E,S){let U=n.get(E);if(E.version>0&&U.__version!==E.version){O(U,E,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+S)}function it(E,S){let U=n.get(E);if(E.version>0&&U.__version!==E.version){O(U,E,S);return}e.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+S)}function H(E,S){let U=n.get(E);if(E.version>0&&U.__version!==E.version){K(U,E,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+S)}let rt={[vs]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[Uo]:s.MIRRORED_REPEAT},ct={[Le]:s.NEAREST,[Fd]:s.NEAREST_MIPMAP_NEAREST,[mr]:s.NEAREST_MIPMAP_LINEAR,[Me]:s.LINEAR,[Wa]:s.LINEAR_MIPMAP_NEAREST,[Li]:s.LINEAR_MIPMAP_LINEAR},$={[Hd]:s.NEVER,[Xd]:s.ALWAYS,[zd]:s.LESS,[lu]:s.LEQUAL,[Vd]:s.EQUAL,[qd]:s.GEQUAL,[Gd]:s.GREATER,[Wd]:s.NOTEQUAL};function Q(E,S){if(S.type===pn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Me||S.magFilter===Wa||S.magFilter===mr||S.magFilter===Li||S.minFilter===Me||S.minFilter===Wa||S.minFilter===mr||S.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,rt[S.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,rt[S.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,rt[S.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ct[S.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ct[S.minFilter]),S.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,$[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Le||S.minFilter!==mr&&S.minFilter!==Li||S.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function st(E,S){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",T));let Z=S.source,j=d.get(Z);j===void 0&&(j={},d.set(Z,j));let Y=z(S);if(Y!==E.__cacheKey){j[Y]===void 0&&(j[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),j[Y].usedTimes++;let Rt=j[E.__cacheKey];Rt!==void 0&&(j[E.__cacheKey].usedTimes--,Rt.usedTimes===0&&w(S)),E.__cacheKey=Y,E.__webglTexture=j[Y].texture}return U}function O(E,S,U){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);let j=st(E,S),Y=S.source;e.bindTexture(Z,E.__webglTexture,s.TEXTURE0+U);let Rt=n.get(Y);if(Y.version!==Rt.__version||j===!0){e.activeTexture(s.TEXTURE0+U);let ft=Kt.getPrimaries(Kt.workingColorSpace),Tt=S.colorSpace===di?null:Kt.getPrimaries(S.colorSpace),qt=S.colorSpace===di||ft===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let at=v(S.image,!1,i.maxTextureSize);at=St(S,at);let Mt=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type),Bt=x(S.internalFormat,Mt,Ut,S.colorSpace,S.isVideoTexture);Q(Z,S);let bt,$t=S.mipmaps,Vt=S.isVideoTexture!==!0,ae=Rt.__version===void 0||j===!0,D=Y.dataReady,mt=R(S,at);if(S.isDepthTexture)Bt=y(S.format===ys,S.type),ae&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,Bt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,Bt,at.width,at.height,0,Mt,Ut,null));else if(S.isDataTexture)if($t.length>0){Vt&&ae&&e.texStorage2D(s.TEXTURE_2D,mt,Bt,$t[0].width,$t[0].height);for(let q=0,J=$t.length;q<J;q++)bt=$t[q],Vt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,bt.width,bt.height,Mt,Ut,bt.data):e.texImage2D(s.TEXTURE_2D,q,Bt,bt.width,bt.height,0,Mt,Ut,bt.data);S.generateMipmaps=!1}else Vt?(ae&&e.texStorage2D(s.TEXTURE_2D,mt,Bt,at.width,at.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,Mt,Ut,at.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,at.width,at.height,0,Mt,Ut,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Vt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Bt,$t[0].width,$t[0].height,at.depth);for(let q=0,J=$t.length;q<J;q++)if(bt=$t[q],S.format!==Oe)if(Mt!==null)if(Vt){if(D)if(S.layerUpdates.size>0){let xt=zh(bt.width,bt.height,S.format,S.type);for(let _t of S.layerUpdates){let Gt=bt.data.subarray(_t*xt/bt.data.BYTES_PER_ELEMENT,(_t+1)*xt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,_t,bt.width,bt.height,1,Mt,Gt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,bt.width,bt.height,at.depth,Mt,bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Bt,bt.width,bt.height,at.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,bt.width,bt.height,at.depth,Mt,Ut,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Bt,bt.width,bt.height,at.depth,0,Mt,Ut,bt.data)}else{Vt&&ae&&e.texStorage2D(s.TEXTURE_2D,mt,Bt,$t[0].width,$t[0].height);for(let q=0,J=$t.length;q<J;q++)bt=$t[q],S.format!==Oe?Mt!==null?Vt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,bt.width,bt.height,Mt,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Bt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,bt.width,bt.height,Mt,Ut,bt.data):e.texImage2D(s.TEXTURE_2D,q,Bt,bt.width,bt.height,0,Mt,Ut,bt.data)}else if(S.isDataArrayTexture)if(Vt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Bt,at.width,at.height,at.depth),D)if(S.layerUpdates.size>0){let q=zh(at.width,at.height,S.format,S.type);for(let J of S.layerUpdates){let xt=at.data.subarray(J*q/at.data.BYTES_PER_ELEMENT,(J+1)*q/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,at.width,at.height,1,Mt,Ut,xt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Mt,Ut,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,at.width,at.height,at.depth,0,Mt,Ut,at.data);else if(S.isData3DTexture)Vt?(ae&&e.texStorage3D(s.TEXTURE_3D,mt,Bt,at.width,at.height,at.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Mt,Ut,at.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,at.width,at.height,at.depth,0,Mt,Ut,at.data);else if(S.isFramebufferTexture){if(ae)if(Vt)e.texStorage2D(s.TEXTURE_2D,mt,Bt,at.width,at.height);else{let q=at.width,J=at.height;for(let xt=0;xt<mt;xt++)e.texImage2D(s.TEXTURE_2D,xt,Bt,q,J,0,Mt,Ut,null),q>>=1,J>>=1}}else if($t.length>0){if(Vt&&ae){let q=vt($t[0]);e.texStorage2D(s.TEXTURE_2D,mt,Bt,q.width,q.height)}for(let q=0,J=$t.length;q<J;q++)bt=$t[q],Vt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,Mt,Ut,bt):e.texImage2D(s.TEXTURE_2D,q,Bt,Mt,Ut,bt);S.generateMipmaps=!1}else if(Vt){if(ae){let q=vt(at);e.texStorage2D(s.TEXTURE_2D,mt,Bt,q.width,q.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,Ut,at)}else e.texImage2D(s.TEXTURE_2D,0,Bt,Mt,Ut,at);g(S)&&m(Z),Rt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function K(E,S,U){if(S.image.length!==6)return;let Z=st(E,S),j=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+U);let Y=n.get(j);if(j.version!==Y.__version||Z===!0){e.activeTexture(s.TEXTURE0+U);let Rt=Kt.getPrimaries(Kt.workingColorSpace),ft=S.colorSpace===di?null:Kt.getPrimaries(S.colorSpace),Tt=S.colorSpace===di||Rt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let qt=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,Mt=[];for(let J=0;J<6;J++)!qt&&!at?Mt[J]=v(S.image[J],!0,i.maxCubemapSize):Mt[J]=at?S.image[J].image:S.image[J],Mt[J]=St(S,Mt[J]);let Ut=Mt[0],Bt=r.convert(S.format,S.colorSpace),bt=r.convert(S.type),$t=x(S.internalFormat,Bt,bt,S.colorSpace),Vt=S.isVideoTexture!==!0,ae=Y.__version===void 0||Z===!0,D=j.dataReady,mt=R(S,Ut);Q(s.TEXTURE_CUBE_MAP,S);let q;if(qt){Vt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,$t,Ut.width,Ut.height);for(let J=0;J<6;J++){q=Mt[J].mipmaps;for(let xt=0;xt<q.length;xt++){let _t=q[xt];S.format!==Oe?Bt!==null?Vt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt,0,0,_t.width,_t.height,Bt,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt,$t,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt,0,0,_t.width,_t.height,Bt,bt,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt,$t,_t.width,_t.height,0,Bt,bt,_t.data)}}}else{if(q=S.mipmaps,Vt&&ae){q.length>0&&mt++;let J=vt(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,$t,J.width,J.height)}for(let J=0;J<6;J++)if(at){Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Mt[J].width,Mt[J].height,Bt,bt,Mt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$t,Mt[J].width,Mt[J].height,0,Bt,bt,Mt[J].data);for(let xt=0;xt<q.length;xt++){let Gt=q[xt].image[J].image;Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt+1,0,0,Gt.width,Gt.height,Bt,bt,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt+1,$t,Gt.width,Gt.height,0,Bt,bt,Gt.data)}}else{Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Bt,bt,Mt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$t,Bt,bt,Mt[J]);for(let xt=0;xt<q.length;xt++){let _t=q[xt];Vt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt+1,0,0,Bt,bt,_t.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xt+1,$t,Bt,bt,_t.image[J])}}}g(S)&&m(s.TEXTURE_CUBE_MAP),Y.__version=j.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function lt(E,S,U,Z,j,Y){let Rt=r.convert(U.format,U.colorSpace),ft=r.convert(U.type),Tt=x(U.internalFormat,Rt,ft,U.colorSpace),qt=n.get(S),at=n.get(U);if(at.__renderTarget=S,!qt.__hasExternalTextures){let Mt=Math.max(1,S.width>>Y),Ut=Math.max(1,S.height>>Y);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,Tt,Mt,Ut,S.depth,0,Rt,ft,null):e.texImage2D(j,Y,Tt,Mt,Ut,0,Rt,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Ot(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,j,at.__webglTexture,0,Ft(S)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,j,at.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(E,S,U){if(s.bindRenderbuffer(s.RENDERBUFFER,E),S.depthBuffer){let Z=S.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,Y=y(S.stencilBuffer,j),Rt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=Ft(S);Ot(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Y,S.width,S.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Y,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Y,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,E)}else{let Z=S.textures;for(let j=0;j<Z.length;j++){let Y=Z[j],Rt=r.convert(Y.format,Y.colorSpace),ft=r.convert(Y.type),Tt=x(Y.internalFormat,Rt,ft,Y.colorSpace),qt=Ft(S);U&&Ot(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Tt,S.width,S.height):Ot(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,Tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);let j=Z.__webglTexture,Y=Ft(S);if(S.depthTexture.format===hs)Ot(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(S.depthTexture.format===ys)Ot(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ot(E){let S=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){let Z=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Z}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");dt(S.__webglFramebuffer,E)}else if(U){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),nt(S.__webglDepthbuffer[Z],E,!1);else{let j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),nt(S.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(E,S,U){let Z=n.get(E);S!==void 0&&lt(Z.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&ot(E)}function pt(E){let S=E.texture,U=n.get(E),Z=n.get(S);E.addEventListener("dispose",A);let j=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Rt=j.length>1;if(Rt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,a.memory.textures++),Y){U.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[ft]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)U.__webglFramebuffer[ft][Tt]=s.createFramebuffer()}else U.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)U.__webglFramebuffer[ft]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let ft=0,Tt=j.length;ft<Tt;ft++){let qt=n.get(j[ft]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&Ot(E)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ft=0;ft<j.length;ft++){let Tt=j[ft];U.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[ft]);let qt=r.convert(Tt.format,Tt.colorSpace),at=r.convert(Tt.type),Mt=x(Tt.internalFormat,qt,at,Tt.colorSpace,E.isXRRenderTarget===!0),Ut=Ft(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,Mt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,U.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Q(s.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)lt(U.__webglFramebuffer[ft][Tt],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Tt);else lt(U.__webglFramebuffer[ft],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(S)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ft=0,Tt=j.length;ft<Tt;ft++){let qt=j[ft],at=n.get(qt);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),Q(s.TEXTURE_2D,qt),lt(U.__webglFramebuffer,E,qt,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),g(qt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ft=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,Z.__webglTexture),Q(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)lt(U.__webglFramebuffer[Tt],E,S,s.COLOR_ATTACHMENT0,ft,Tt);else lt(U.__webglFramebuffer,E,S,s.COLOR_ATTACHMENT0,ft,0);g(S)&&m(ft),e.unbindTexture()}E.depthBuffer&&ot(E)}function At(E){let S=E.textures;for(let U=0,Z=S.length;U<Z;U++){let j=S[U];if(g(j)){let Y=_(E),Rt=n.get(j).__webglTexture;e.bindTexture(Y,Rt),m(Y),e.unbindTexture()}}}let It=[],L=[];function Jt(E){if(E.samples>0){if(Ot(E)===!1){let S=E.textures,U=E.width,Z=E.height,j=s.COLOR_BUFFER_BIT,Y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=n.get(E),ft=S.length>1;if(ft)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[Tt]);let qt=n.get(S[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,U,Z,0,0,U,Z,j,s.NEAREST),l===!0&&(It.length=0,L.length=0,It.push(s.COLOR_ATTACHMENT0+Tt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(It.push(Y),L.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[Tt]);let qt=n.get(S[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let S=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ft(E){return Math.min(i.maxSamples,E.samples)}function Ot(E){let S=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function tt(E){let S=a.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function St(E,S){let U=E.colorSpace,Z=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==vi&&U!==di&&(Kt.getTransfer(U)===oe?(Z!==Oe||j!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function vt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=it,this.setTextureCube=H,this.rebindTextures=ut,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ot}function kg(s,t){function e(n,i=di){let r,a=Kt.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===Xl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Jh)return s.BYTE;if(n===Kh)return s.SHORT;if(n===js)return s.UNSIGNED_SHORT;if(n===ql)return s.INT;if(n===Di)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===En)return s.HALF_FLOAT;if(n===tu)return s.ALPHA;if(n===eu)return s.RGB;if(n===Oe)return s.RGBA;if(n===nu)return s.LUMINANCE;if(n===iu)return s.LUMINANCE_ALPHA;if(n===hs)return s.DEPTH_COMPONENT;if(n===ys)return s.DEPTH_STENCIL;if(n===su)return s.RED;if(n===Yl)return s.RED_INTEGER;if(n===ru)return s.RG;if(n===Zl)return s.RG_INTEGER;if(n===jl)return s.RGBA_INTEGER;if(n===Hr||n===zr||n===Vr||n===Gr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===No||n===Fo||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===No)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===Ho||n===zo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===Ho)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vo||n===Go||n===Wo||n===qo||n===Xo||n===$o||n===Yo||n===Zo||n===jo||n===Jo||n===Ko||n===Qo||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$o)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wr||n===nl||n===il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wr)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===au||n===sl||n===rl||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var _l=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},le=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hg={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ml=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new tn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Qt({vertexShader:zg,fragmentShader:Vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new Ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sl=class extends pi{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,v=new Ml,g=e.getContextAttributes(),m=null,_=null,x=[],y=[],R=new yt,T=null,A=new $e;A.viewport=new jt;let I=new $e;I.viewport=new jt;let w=[A,I],M=new _l,C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let K=x[O];return K===void 0&&(K=new Xs,x[O]=K),K.getTargetRaySpace()},this.getControllerGrip=function(O){let K=x[O];return K===void 0&&(K=new Xs,x[O]=K),K.getGripSpace()},this.getHand=function(O){let K=x[O];return K===void 0&&(K=new Xs,x[O]=K),K.getHandSpace()};function B(O){let K=y.indexOf(O.inputSource);if(K===-1)return;let lt=x[K];lt!==void 0&&(lt.update(O.inputSource,O.frame,c||a),lt.dispatchEvent({type:O.type,data:O.inputSource}))}function z(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",X);for(let O=0;O<x.length;O++){let K=y[O];K!==null&&(y[O]=null,x[O].disconnect(K))}C=null,k=null,v.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,_=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",z),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){let K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ye(f.framebufferWidth,f.framebufferHeight,{format:Oe,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,lt=null,nt=null;g.depth&&(nt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=g.stencil?ys:hs,lt=g.stencil?xs:Di);let dt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(dt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Ye(d.textureWidth,d.textureHeight,{format:Oe,type:Yn,depthTexture:new na(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(O){for(let K=0;K<O.removed.length;K++){let lt=O.removed[K],nt=y.indexOf(lt);nt>=0&&(y[nt]=null,x[nt].disconnect(lt))}for(let K=0;K<O.added.length;K++){let lt=O.added[K],nt=y.indexOf(lt);if(nt===-1){for(let ot=0;ot<x.length;ot++)if(ot>=y.length){y.push(lt),nt=ot;break}else if(y[ot]===null){y[ot]=lt,nt=ot;break}if(nt===-1)break}let dt=x[nt];dt&&dt.connect(lt)}}let W=new P,it=new P;function H(O,K,lt){W.setFromMatrixPosition(K.matrixWorld),it.setFromMatrixPosition(lt.matrixWorld);let nt=W.distanceTo(it),dt=K.projectionMatrix.elements,ot=lt.projectionMatrix.elements,ut=dt[14]/(dt[10]-1),pt=dt[14]/(dt[10]+1),At=(dt[9]+1)/dt[5],It=(dt[9]-1)/dt[5],L=(dt[8]-1)/dt[0],Jt=(ot[8]+1)/ot[0],Ft=ut*L,Ot=ut*Jt,tt=nt/(-L+Jt),St=tt*-L;if(K.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(St),O.translateZ(tt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),dt[10]===-1)O.projectionMatrix.copy(K.projectionMatrix),O.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let vt=ut+tt,E=pt+tt,S=Ft-St,U=Ot+(nt-St),Z=At*pt/E*vt,j=It*pt/E*vt;O.projectionMatrix.makePerspective(S,U,Z,j,vt,E),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function rt(O,K){K===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(K.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;let K=O.near,lt=O.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(lt=v.depthFar)),M.near=I.near=A.near=K,M.far=I.far=A.far=lt,(C!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,k=M.far),A.layers.mask=O.layers.mask|2,I.layers.mask=O.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;let nt=O.parent,dt=M.cameras;rt(M,nt);for(let ot=0;ot<dt.length;ot++)rt(dt[ot],nt);dt.length===2?H(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),ct(O,M,nt)};function ct(O,K,lt){lt===null?O.matrix.copy(K.matrixWorld):(O.matrix.copy(lt.matrixWorld),O.matrix.invert(),O.matrix.multiply(K.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(K.projectionMatrix),O.projectionMatrixInverse.copy(K.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ll*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let $=null;function Q(O,K){if(h=K.getViewerPose(c||a),p=K,h!==null){let lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let nt=!1;lt.length!==M.cameras.length&&(M.cameras.length=0,nt=!0);for(let ot=0;ot<lt.length;ot++){let ut=lt[ot],pt=null;if(f!==null)pt=f.getViewport(ut);else{let It=u.getViewSubImage(d,ut);pt=It.viewport,ot===0&&(t.setRenderTargetTextures(_,It.colorTexture,d.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(_))}let At=w[ot];At===void 0&&(At=new $e,At.layers.enable(ot),At.viewport=new jt,w[ot]=At),At.matrix.fromArray(ut.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(ut.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(pt.x,pt.y,pt.width,pt.height),ot===0&&(M.matrix.copy(At.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),nt===!0&&M.cameras.push(At)}let dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")){let ot=u.getDepthInformation(lt[0]);ot&&ot.isValid&&ot.texture&&v.init(t,ot,i.renderState)}}for(let lt=0;lt<x.length;lt++){let nt=y[lt],dt=x[lt];nt!==null&&dt!==void 0&&dt.update(nt,K,c||a)}$&&$(O,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}let st=new du;st.setAnimationLoop(Q),this.setAnimationLoop=function(O){$=O},this.dispose=function(){}}},Ri=new In,Gg=new se;function Wg(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,uu(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Te&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Te&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),x=_.envMap,y=_.envMapRotation;x&&(g.envMap.value=x,Ri.copy(y),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(Ri)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Te&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qg(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){let y=x.program;n.uniformBlockBinding(_,y)}function c(_,x){let y=i[_.id];y===void 0&&(p(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",g));let R=x.program;n.updateUBOMapping(_,R);let T=t.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function h(_){let x=u();_.__bindingPointIndex=x;let y=s.createBuffer(),R=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let x=i[_.id],y=_.uniforms,R=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,A=y.length;T<A;T++){let I=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,M=I.length;w<M;w++){let C=I[w];if(f(C,T,w,R)===!0){let k=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],z=0;for(let X=0;X<B.length;X++){let W=B[X],it=v(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,k+z,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,z),z+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,x,y,R){let T=_.value,A=x+"_"+y;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let I=R[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function p(_){let x=_.uniforms,y=0,R=16;for(let A=0,I=x.length;A<I;A++){let w=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,C=w.length;M<C;M++){let k=w[M],B=Array.isArray(k.value)?k.value:[k.value];for(let z=0,X=B.length;z<X;z++){let W=B[z],it=v(W),H=y%R,rt=H%it.boundary,ct=H+rt;y+=rt,ct!==0&&R-ct<it.storage&&(y+=R-ct),k.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=it.storage}}}let T=y%R;return T>0&&(y+=R-T),_.__size=y,_.__cache={},this}function v(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){let x=_.target;x.removeEventListener("dispose",g);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}var ia=class{constructor(t={}){let{canvas:e=Yd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,_=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=Cn,this.toneMappingExposure=1;let y=this,R=!1,T=0,A=0,I=null,w=-1,M=null,C=new jt,k=new jt,B=null,z=new kt(0),X=0,W=e.width,it=e.height,H=1,rt=null,ct=null,$=new jt(0,0,W,it),Q=new jt(0,0,W,it),st=!1,O=new Ni,K=!1,lt=!1,nt=new se,dt=new se,ot=new P,ut=new jt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},At=!1;function It(){return I===null?H:1}let L=n;function Jt(b,N){return e.getContext(b,N)}try{let b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),L===null){let N="webgl2";if(L=Jt(N,b),L===null)throw Jt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ft,Ot,tt,St,vt,E,S,U,Z,j,Y,Rt,ft,Tt,qt,at,Mt,Ut,Bt,bt,$t,Vt,ae,D;function mt(){Ft=new o0(L),Ft.init(),Vt=new kg(L,Ft),Ot=new e0(L,Ft,t,Vt),tt=new Fg(L,Ft),Ot.reverseDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),St=new h0(L),vt=new bg,E=new Bg(L,Ft,tt,vt,Ot,Vt,St),S=new i0(y),U=new a0(y),Z=new vf(L),ae=new Qm(L,Z),j=new l0(L,Z,St,ae),Y=new d0(L,j,Z,St),Bt=new u0(L,Ot,E),at=new n0(vt),Rt=new Sg(y,S,U,Ft,Ot,ae,at),ft=new Wg(y,vt),Tt=new Eg,qt=new Pg(Ft),Ut=new Km(y,S,U,tt,Y,f,l),Mt=new Ug(y,Y,Ot),D=new qg(L,St,Ot,tt),bt=new t0(L,Ft,St),$t=new c0(L,Ft,St),St.programs=Rt.programs,y.capabilities=Ot,y.extensions=Ft,y.properties=vt,y.renderLists=Tt,y.shadowMap=Mt,y.state=tt,y.info=St}mt();let q=new Sl(y,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=Ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(W,it,!1))},this.getSize=function(b){return b.set(W,it)},this.setSize=function(b,N,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,it=N,e.width=Math.floor(b*H),e.height=Math.floor(N*H),V===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(W*H,it*H).floor()},this.setDrawingBufferSize=function(b,N,V){W=b,it=N,H=V,e.width=Math.floor(b*V),e.height=Math.floor(N*V),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,N,V,G){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,N,V,G),tt.viewport(C.copy($).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,N,V,G){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,N,V,G),tt.scissor(k.copy(Q).multiplyScalar(H).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(b){tt.setScissorTest(st=b)},this.setOpaqueSort=function(b){rt=b},this.setTransparentSort=function(b){ct=b},this.getClearColor=function(b){return b.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(b=!0,N=!0,V=!0){let G=0;if(b){let F=!1;if(I!==null){let ht=I.texture.format;F=ht===jl||ht===Zl||ht===Yl}if(F){let ht=I.texture.type,wt=ht===Yn||ht===Di||ht===js||ht===xs||ht===Xl||ht===$l,Pt=Ut.getClearColor(),Lt=Ut.getClearAlpha(),zt=Pt.r,Wt=Pt.g,Dt=Pt.b;wt?(p[0]=zt,p[1]=Wt,p[2]=Dt,p[3]=Lt,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=zt,v[1]=Wt,v[2]=Dt,v[3]=Lt,L.clearBufferiv(L.COLOR,0,v))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Tt.dispose(),qt.dispose(),vt.dispose(),S.dispose(),U.dispose(),Y.dispose(),ae.dispose(),D.dispose(),Rt.dispose(),q.dispose(),q.removeEventListener("sessionstart",dr),q.removeEventListener("sessionend",Uc),Si.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=St.autoReset,N=Mt.enabled,V=Mt.autoUpdate,G=Mt.needsUpdate,F=Mt.type;mt(),St.autoReset=b,Mt.enabled=N,Mt.autoUpdate=V,Mt.needsUpdate=G,Mt.type=F}function _t(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Gt(b){let N=b.target;N.removeEventListener("dispose",Gt),ge(N)}function ge(b){Re(b),vt.remove(b)}function Re(b){let N=vt.get(b).programs;N!==void 0&&(N.forEach(function(V){Rt.releaseProgram(V)}),b.isShaderMaterial&&Rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,V,G,F,ht){N===null&&(N=pt);let wt=F.isMesh&&F.matrixWorld.determinant()<0,Pt=sd(b,N,V,G,F);tt.setMaterial(G,wt);let Lt=V.index,zt=1;if(G.wireframe===!0){if(Lt=j.getWireframeAttribute(V),Lt===void 0)return;zt=2}let Wt=V.drawRange,Dt=V.attributes.position,te=Wt.start*zt,ce=(Wt.start+Wt.count)*zt;ht!==null&&(te=Math.max(te,ht.start*zt),ce=Math.min(ce,(ht.start+ht.count)*zt)),Lt!==null?(te=Math.max(te,0),ce=Math.min(ce,Lt.count)):Dt!=null&&(te=Math.max(te,0),ce=Math.min(ce,Dt.count));let ue=ce-te;if(ue<0||ue===1/0)return;ae.setup(F,G,Pt,V,Lt);let Ke,ne=bt;if(Lt!==null&&(Ke=Z.get(Lt),ne=$t,ne.setIndex(Ke)),F.isMesh)G.wireframe===!0?(tt.setLineWidth(G.wireframeLinewidth*It()),ne.setMode(L.LINES)):ne.setMode(L.TRIANGLES);else if(F.isLine){let Nt=G.linewidth;Nt===void 0&&(Nt=1),tt.setLineWidth(Nt*It()),F.isLineSegments?ne.setMode(L.LINES):F.isLineLoop?ne.setMode(L.LINE_LOOP):ne.setMode(L.LINE_STRIP)}else F.isPoints?ne.setMode(L.POINTS):F.isSprite&&ne.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ne.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))ne.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Nt=F._multiDrawStarts,Fn=F._multiDrawCounts,ie=F._multiDrawCount,_n=Lt?Z.get(Lt).bytesPerElement:1,$i=vt.get(G).currentProgram.getUniforms();for(let rn=0;rn<ie;rn++)$i.setValue(L,"_gl_DrawID",rn),ne.render(Nt[rn]/_n,Fn[rn])}else if(F.isInstancedMesh)ne.renderInstances(te,ue,F.count);else if(V.isInstancedBufferGeometry){let Nt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Fn=Math.min(V.instanceCount,Nt);ne.renderInstances(te,ue,Fn)}else ne.render(te,ue)};function ee(b,N,V){b.transparent===!0&&b.side===_e&&b.forceSinglePass===!1?(b.side=Te,b.needsUpdate=!0,pr(b,N,V),b.side=ln,b.needsUpdate=!0,pr(b,N,V),b.side=_e):pr(b,N,V)}this.compile=function(b,N,V=null){V===null&&(V=b),m=qt.get(V),m.init(N),x.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==V&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();let G=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ht=F.material;if(ht)if(Array.isArray(ht))for(let wt=0;wt<ht.length;wt++){let Pt=ht[wt];ee(Pt,V,F),G.add(Pt)}else ee(ht,V,F),G.add(ht)}),x.pop(),m=null,G},this.compileAsync=function(b,N,V=null){let G=this.compile(b,N,V);return new Promise(F=>{function ht(){if(G.forEach(function(wt){vt.get(wt).currentProgram.isReady()&&G.delete(wt)}),G.size===0){F(b);return}setTimeout(ht,10)}Ft.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let He=null;function sn(b){He&&He(b)}function dr(){Si.stop()}function Uc(){Si.start()}let Si=new du;Si.setAnimationLoop(sn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(b){He=b,q.setAnimationLoop(b),b===null?Si.stop():Si.start()},q.addEventListener("sessionstart",dr),q.addEventListener("sessionend",Uc),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,N,I),m=qt.get(b,x.length),m.init(N),x.push(m),dt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),O.setFromProjectionMatrix(dt),lt=this.localClippingEnabled,K=at.init(this.clippingPlanes,lt),g=Tt.get(b,_.length),g.init(),_.push(g),q.enabled===!0&&q.isPresenting===!0){let ht=y.xr.getDepthSensingMesh();ht!==null&&Ga(ht,N,-1/0,y.sortObjects)}Ga(b,N,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(rt,ct),At=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,At&&Ut.addToRenderList(g,b),this.info.render.frame++,K===!0&&at.beginShadows();let V=m.state.shadowsArray;Mt.render(V,b,N),K===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,F=g.transmissive;if(m.setupLights(),N.isArrayCamera){let ht=N.cameras;if(F.length>0)for(let wt=0,Pt=ht.length;wt<Pt;wt++){let Lt=ht[wt];Fc(G,F,b,Lt)}At&&Ut.render(b);for(let wt=0,Pt=ht.length;wt<Pt;wt++){let Lt=ht[wt];Nc(g,b,Lt,Lt.viewport)}}else F.length>0&&Fc(G,F,b,N),At&&Ut.render(b),Nc(g,b,N);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(y,b,N),ae.resetDefaultState(),w=-1,M=null,x.pop(),x.length>0?(m=x[x.length-1],K===!0&&at.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Ga(b,N,V,G){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||O.intersectsSprite(b)){G&&ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);let wt=Y.update(b),Pt=b.material;Pt.visible&&g.push(b,wt,Pt,V,ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||O.intersectsObject(b))){let wt=Y.update(b),Pt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ut.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ut.copy(wt.boundingSphere.center)),ut.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(Pt)){let Lt=wt.groups;for(let zt=0,Wt=Lt.length;zt<Wt;zt++){let Dt=Lt[zt],te=Pt[Dt.materialIndex];te&&te.visible&&g.push(b,wt,te,V,ut.z,Dt)}}else Pt.visible&&g.push(b,wt,Pt,V,ut.z,null)}}let ht=b.children;for(let wt=0,Pt=ht.length;wt<Pt;wt++)Ga(ht[wt],N,V,G)}function Nc(b,N,V,G){let F=b.opaque,ht=b.transmissive,wt=b.transparent;m.setupLightsView(V),K===!0&&at.setGlobalState(y.clippingPlanes,V),G&&tt.viewport(C.copy(G)),F.length>0&&fr(F,N,V),ht.length>0&&fr(ht,N,V),wt.length>0&&fr(wt,N,V),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Fc(b,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Ye(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?En:Yn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let ht=m.state.transmissionRenderTarget[G.id],wt=G.viewport||C;ht.setSize(wt.z,wt.w);let Pt=y.getRenderTarget();y.setRenderTarget(ht),y.getClearColor(z),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),At&&Ut.render(V);let Lt=y.toneMapping;y.toneMapping=Cn;let zt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),K===!0&&at.setGlobalState(y.clippingPlanes,G),fr(b,V,G),E.updateMultisampleRenderTarget(ht),E.updateRenderTargetMipmap(ht),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Dt=0,te=N.length;Dt<te;Dt++){let ce=N[Dt],ue=ce.object,Ke=ce.geometry,ne=ce.material,Nt=ce.group;if(ne.side===_e&&ue.layers.test(G.layers)){let Fn=ne.side;ne.side=Te,ne.needsUpdate=!0,Oc(ue,V,G,Ke,ne,Nt),ne.side=Fn,ne.needsUpdate=!0,Wt=!0}}Wt===!0&&(E.updateMultisampleRenderTarget(ht),E.updateRenderTargetMipmap(ht))}y.setRenderTarget(Pt),y.setClearColor(z,X),zt!==void 0&&(G.viewport=zt),y.toneMapping=Lt}function fr(b,N,V){let G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ht=b.length;F<ht;F++){let wt=b[F],Pt=wt.object,Lt=wt.geometry,zt=G===null?wt.material:G,Wt=wt.group;Pt.layers.test(V.layers)&&Oc(Pt,N,V,Lt,zt,Wt)}}function Oc(b,N,V,G,F,ht){b.onBeforeRender(y,N,V,G,F,ht),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(y,N,V,G,b,ht),F.transparent===!0&&F.side===_e&&F.forceSinglePass===!1?(F.side=Te,F.needsUpdate=!0,y.renderBufferDirect(V,N,G,F,b,ht),F.side=ln,F.needsUpdate=!0,y.renderBufferDirect(V,N,G,F,b,ht),F.side=_e):y.renderBufferDirect(V,N,G,F,b,ht),b.onAfterRender(y,N,V,G,F,ht)}function pr(b,N,V){N.isScene!==!0&&(N=pt);let G=vt.get(b),F=m.state.lights,ht=m.state.shadowsArray,wt=F.state.version,Pt=Rt.getParameters(b,F.state,ht,N,V),Lt=Rt.getProgramCacheKey(Pt),zt=G.programs;G.environment=b.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(b.isMeshStandardMaterial?U:S).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,zt===void 0&&(b.addEventListener("dispose",Gt),zt=new Map,G.programs=zt);let Wt=zt.get(Lt);if(Wt!==void 0){if(G.currentProgram===Wt&&G.lightsStateVersion===wt)return kc(b,Pt),Wt}else Pt.uniforms=Rt.getUniforms(b),b.onBeforeCompile(Pt,y),Wt=Rt.acquireProgram(Pt,Lt),zt.set(Lt,Wt),G.uniforms=Pt.uniforms;let Dt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Dt.clippingPlanes=at.uniform),kc(b,Pt),G.needsLights=ad(b),G.lightsStateVersion=wt,G.needsLights&&(Dt.ambientLightColor.value=F.state.ambient,Dt.lightProbe.value=F.state.probe,Dt.directionalLights.value=F.state.directional,Dt.directionalLightShadows.value=F.state.directionalShadow,Dt.spotLights.value=F.state.spot,Dt.spotLightShadows.value=F.state.spotShadow,Dt.rectAreaLights.value=F.state.rectArea,Dt.ltc_1.value=F.state.rectAreaLTC1,Dt.ltc_2.value=F.state.rectAreaLTC2,Dt.pointLights.value=F.state.point,Dt.pointLightShadows.value=F.state.pointShadow,Dt.hemisphereLights.value=F.state.hemi,Dt.directionalShadowMap.value=F.state.directionalShadowMap,Dt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Dt.spotShadowMap.value=F.state.spotShadowMap,Dt.spotLightMatrix.value=F.state.spotLightMatrix,Dt.spotLightMap.value=F.state.spotLightMap,Dt.pointShadowMap.value=F.state.pointShadowMap,Dt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Wt,G.uniformsList=null,Wt}function Bc(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=ds.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function kc(b,N){let V=vt.get(b);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function sd(b,N,V,G,F){N.isScene!==!0&&(N=pt),E.resetTextureUnits();let ht=N.fog,wt=G.isMeshStandardMaterial?N.environment:null,Pt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:vi,Lt=(G.isMeshStandardMaterial?U:S).get(G.envMap||wt),zt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Wt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Dt=!!V.morphAttributes.position,te=!!V.morphAttributes.normal,ce=!!V.morphAttributes.color,ue=Cn;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ue=y.toneMapping);let Ke=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=Ke!==void 0?Ke.length:0,Nt=vt.get(G),Fn=m.state.lights;if(K===!0&&(lt===!0||b!==M)){let dn=b===M&&G.id===w;at.setState(G,b,dn)}let ie=!1;G.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Fn.state.version||Nt.outputColorSpace!==Pt||F.isBatchedMesh&&Nt.batching===!1||!F.isBatchedMesh&&Nt.batching===!0||F.isBatchedMesh&&Nt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Nt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Nt.instancing===!1||!F.isInstancedMesh&&Nt.instancing===!0||F.isSkinnedMesh&&Nt.skinning===!1||!F.isSkinnedMesh&&Nt.skinning===!0||F.isInstancedMesh&&Nt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Nt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Nt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Nt.instancingMorph===!1&&F.morphTexture!==null||Nt.envMap!==Lt||G.fog===!0&&Nt.fog!==ht||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==at.numPlanes||Nt.numIntersection!==at.numIntersection)||Nt.vertexAlphas!==zt||Nt.vertexTangents!==Wt||Nt.morphTargets!==Dt||Nt.morphNormals!==te||Nt.morphColors!==ce||Nt.toneMapping!==ue||Nt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Nt.__version=G.version);let _n=Nt.currentProgram;ie===!0&&(_n=pr(G,N,F));let $i=!1,rn=!1,Os=!1,de=_n.getUniforms(),An=Nt.uniforms;if(tt.useProgram(_n.program)&&($i=!0,rn=!0,Os=!0),G.id!==w&&(w=G.id,rn=!0),$i||M!==b){tt.buffers.depth.getReversed()?(nt.copy(b.projectionMatrix),jd(nt),Jd(nt),de.setValue(L,"projectionMatrix",nt)):de.setValue(L,"projectionMatrix",b.projectionMatrix),de.setValue(L,"viewMatrix",b.matrixWorldInverse);let si=de.map.cameraPosition;si!==void 0&&si.setValue(L,ot.setFromMatrixPosition(b.matrixWorld)),Ot.logarithmicDepthBuffer&&de.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&de.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,rn=!0,Os=!0)}if(F.isSkinnedMesh){de.setOptional(L,F,"bindMatrix"),de.setOptional(L,F,"bindMatrixInverse");let dn=F.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),de.setValue(L,"boneTexture",dn.boneTexture,E))}F.isBatchedMesh&&(de.setOptional(L,F,"batchingTexture"),de.setValue(L,"batchingTexture",F._matricesTexture,E),de.setOptional(L,F,"batchingIdTexture"),de.setValue(L,"batchingIdTexture",F._indirectTexture,E),de.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&de.setValue(L,"batchingColorTexture",F._colorsTexture,E));let Bs=V.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0)&&Bt.update(F,V,_n),(rn||Nt.receiveShadow!==F.receiveShadow)&&(Nt.receiveShadow=F.receiveShadow,de.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(An.envMap.value=Lt,An.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(An.envMapIntensity.value=N.environmentIntensity),rn&&(de.setValue(L,"toneMappingExposure",y.toneMappingExposure),Nt.needsLights&&rd(An,Os),ht&&G.fog===!0&&ft.refreshFogUniforms(An,ht),ft.refreshMaterialUniforms(An,G,H,it,m.state.transmissionRenderTarget[b.id]),ds.upload(L,Bc(Nt),An,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ds.upload(L,Bc(Nt),An,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&de.setValue(L,"center",F.center),de.setValue(L,"modelViewMatrix",F.modelViewMatrix),de.setValue(L,"normalMatrix",F.normalMatrix),de.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let dn=G.uniformsGroups;for(let si=0,ri=dn.length;si<ri;si++){let Hc=dn[si];D.update(Hc,_n),D.bind(Hc,_n)}}return _n}function rd(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function ad(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,N,V){vt.get(b.texture).__webglTexture=N,vt.get(b.depthTexture).__webglTexture=V;let G=vt.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){let V=vt.get(b);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,V=0){I=b,T=N,A=V;let G=!0,F=null,ht=!1,wt=!1;if(b){let Lt=vt.get(b);if(Lt.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(Lt.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Lt.__hasExternalTextures)E.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Dt=b.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&vt.has(Dt)&&(b.width!==Dt.image.width||b.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let zt=b.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(wt=!0);let Wt=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[N])?F=Wt[N][V]:F=Wt[N],ht=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?F=vt.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?F=Wt[V]:F=Wt,C.copy(b.viewport),k.copy(b.scissor),B=b.scissorTest}else C.copy($).multiplyScalar(H).floor(),k.copy(Q).multiplyScalar(H).floor(),B=st;if(tt.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&tt.drawBuffers(b,F),tt.viewport(C),tt.scissor(k),tt.setScissorTest(B),ht){let Lt=vt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Lt.__webglTexture,V)}else if(wt){let Lt=vt.get(b.texture),zt=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.__webglTexture,V||0,zt)}w=-1},this.readRenderTargetPixels=function(b,N,V,G,F,ht,wt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt){tt.bindFramebuffer(L.FRAMEBUFFER,Pt);try{let Lt=b.texture,zt=Lt.format,Wt=Lt.type;if(!Ot.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-G&&V>=0&&V<=b.height-F&&L.readPixels(N,V,G,F,Vt.convert(zt),Vt.convert(Wt),ht)}finally{let Lt=I!==null?vt.get(I).__webglFramebuffer:null;tt.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,N,V,G,F,ht,wt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt){let Lt=b.texture,zt=Lt.format,Wt=Lt.type;if(!Ot.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-G&&V>=0&&V<=b.height-F){tt.bindFramebuffer(L.FRAMEBUFFER,Pt);let Dt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Dt),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),L.readPixels(N,V,G,F,Vt.convert(zt),Vt.convert(Wt),0);let te=I!==null?vt.get(I).__webglFramebuffer:null;tt.bindFramebuffer(L.FRAMEBUFFER,te);let ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Zd(L,ce,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Dt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.deleteBuffer(Dt),L.deleteSync(ce),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,V=0){b.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);let G=Math.pow(2,-V),F=Math.floor(b.image.width*G),ht=Math.floor(b.image.height*G),wt=N!==null?N.x:0,Pt=N!==null?N.y:0;E.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,wt,Pt,F,ht),tt.unbindTexture()},this.copyTextureToTexture=function(b,N,V=null,G=null,F=0){b.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let ht,wt,Pt,Lt,zt,Wt,Dt,te,ce,ue=b.isCompressedTexture?b.mipmaps[F]:b.image;V!==null?(ht=V.max.x-V.min.x,wt=V.max.y-V.min.y,Pt=V.isBox3?V.max.z-V.min.z:1,Lt=V.min.x,zt=V.min.y,Wt=V.isBox3?V.min.z:0):(ht=ue.width,wt=ue.height,Pt=ue.depth||1,Lt=0,zt=0,Wt=0),G!==null?(Dt=G.x,te=G.y,ce=G.z):(Dt=0,te=0,ce=0);let Ke=Vt.convert(N.format),ne=Vt.convert(N.type),Nt;N.isData3DTexture?(E.setTexture3D(N,0),Nt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),Nt=L.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),Nt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Fn=L.getParameter(L.UNPACK_ROW_LENGTH),ie=L.getParameter(L.UNPACK_IMAGE_HEIGHT),_n=L.getParameter(L.UNPACK_SKIP_PIXELS),$i=L.getParameter(L.UNPACK_SKIP_ROWS),rn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Wt);let Os=b.isDataArrayTexture||b.isData3DTexture,de=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let An=vt.get(b),Bs=vt.get(N),dn=vt.get(An.__renderTarget),si=vt.get(Bs.__renderTarget);tt.bindFramebuffer(L.READ_FRAMEBUFFER,dn.__webglFramebuffer),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<Pt;ri++)Os&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(b).__webglTexture,F,Wt+ri),b.isDepthTexture?(de&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(N).__webglTexture,F,ce+ri),L.blitFramebuffer(Lt,zt,ht,wt,Dt,te,ht,wt,L.DEPTH_BUFFER_BIT,L.NEAREST)):de?L.copyTexSubImage3D(Nt,F,Dt,te,ce+ri,Lt,zt,ht,wt):L.copyTexSubImage2D(Nt,F,Dt,te,ce+ri,Lt,zt,ht,wt);tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else de?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Nt,F,Dt,te,ce,ht,wt,Pt,Ke,ne,ue.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Nt,F,Dt,te,ce,ht,wt,Pt,Ke,ue.data):L.texSubImage3D(Nt,F,Dt,te,ce,ht,wt,Pt,Ke,ne,ue):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Dt,te,ht,wt,Ke,ne,ue.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Dt,te,ue.width,ue.height,Ke,ue.data):L.texSubImage2D(L.TEXTURE_2D,F,Dt,te,ht,wt,Ke,ne,ue);L.pixelStorei(L.UNPACK_ROW_LENGTH,Fn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ie),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_n),L.pixelStorei(L.UNPACK_SKIP_ROWS,$i),L.pixelStorei(L.UNPACK_SKIP_IMAGES,rn),F===0&&N.generateMipmaps&&L.generateMipmap(Nt),tt.unbindTexture()},this.copyTextureToTexture3D=function(b,N,V=null,G=null,F=0){return b.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0),Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,V,G,F)},this.initRenderTarget=function(b){vt.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),tt.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,tt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var Zn=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var sa=class extends tn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Le,h=Le,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bl=class extends gi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vh=new se,wl=new jr,Fr=new mi,Or=new P,ws=class extends Ze{constructor(t=new ye,e=new bl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Fr.radius+=r,t.ray.intersectsSphere(Fr)===!1)return;Vh.copy(i).invert(),wl.copy(t.ray).applyMatrix4(Vh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,v=f;p<v;p++){let g=c.getX(p);Or.fromBufferAttribute(u,g),Gh(Or,g,l,i,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,v=f;p<v;p++)Or.fromBufferAttribute(u,p),Gh(Or,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gh(s,t,e,n,i,r,a){let o=wl.distanceSqToPoint(s);if(o<e){let l=new P;wl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Es=class extends tn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new yt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,i=[],r=[],a=[],o=new P,l=new se;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Fe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Fe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qs=class extends mn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new yt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},El=class extends Qs{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ql(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Br=new P,Mo=new Ql,So=new Ql,bo=new Ql,Tl=class extends mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Br.subVectors(i[0],i[1]).add(i[0]),c=Br);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Br.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Br),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Mo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,g),So.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,g),bo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(Mo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),So.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),bo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Mo.calc(l),So.calc(l),bo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Wh(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Xg(s,t){let e=1-s;return e*e*t}function $g(s,t){return 2*(1-s)*s*t}function Yg(s,t){return s*s*t}function $s(s,t,e,n){return Xg(s,t)+$g(s,e)+Yg(s,n)}function Zg(s,t){let e=1-s;return e*e*e*t}function jg(s,t){let e=1-s;return 3*e*e*s*t}function Jg(s,t){return 3*(1-s)*s*s*t}function Kg(s,t){return s*s*s*t}function Ys(s,t,e,n,i){return Zg(s,t)+jg(s,e)+Jg(s,n)+Kg(s,i)}var ra=class extends mn{constructor(t=new yt,e=new yt,n=new yt,i=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new yt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ys(t,i.x,r.x,a.x,o.x),Ys(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Al=class extends mn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ys(t,i.x,r.x,a.x,o.x),Ys(t,i.y,r.y,a.y,o.y),Ys(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},aa=class extends mn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rl=class extends mn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends mn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set($s(t,i.x,r.x,a.x),$s(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cl=class extends mn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set($s(t,i.x,r.x,a.x),$s(t,i.y,r.y,a.y),$s(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Wh(o,l.x,c.x,h.x,u.x),Wh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new yt().fromArray(i))}return this}},qh=Object.freeze({__proto__:null,ArcCurve:El,CatmullRomCurve3:Tl,CubicBezierCurve:ra,CubicBezierCurve3:Al,EllipseCurve:Qs,LineCurve:aa,LineCurve3:Rl,QuadraticBezierCurve:oa,QuadraticBezierCurve3:Cl,SplineCurve:la}),Il=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new qh[i.type]().fromJSON(i))}return this}},Pl=class extends Il{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new aa(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new oa(this.currentPoint.clone(),new yt(t,e),new yt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new ra(this.currentPoint.clone(),new yt(t,e),new yt(n,i),new yt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new la(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Qs(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},jn=class s extends ye{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Fe(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new P,d=new yt,f=new P,p=new P,v=new P,g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let _=0;_<=e;_++){let x=n+_*h*i,y=Math.sin(x),R=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),d.x=_/e,d.y=T/(t.length-1),o.push(d.x,d.y);let A=l[3*T+0]*y,I=l[3*T+1],w=l[3*T+0]*R;c.push(A,I,w)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){let y=x+_*t.length,R=y,T=y+t.length,A=y+t.length+1,I=y+1;r.push(R,T,I),r.push(A,I,T)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},ca=class s extends jn{constructor(t=1,e=1,n=4,i=8){let r=new Pl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},tr=class s extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new yt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},be=class s extends ye{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],g=n/2,m=0;_(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function _(){let y=new P,R=new P,T=0,A=(e-t)/n;for(let I=0;I<=r;I++){let w=[],M=I/r,C=M*(e-t)+t;for(let k=0;k<=i;k++){let B=k/i,z=B*l+o,X=Math.sin(z),W=Math.cos(z);R.x=C*X,R.y=-M*n+g,R.z=C*W,u.push(R.x,R.y,R.z),y.set(X,A,W).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-M),w.push(p++)}v.push(w)}for(let I=0;I<i;I++)for(let w=0;w<r;w++){let M=v[w][I],C=v[w+1][I],k=v[w+1][I+1],B=v[w][I+1];(t>0||w!==0)&&(h.push(M,C,B),T+=3),(e>0||w!==r-1)&&(h.push(C,k,B),T+=3)}c.addGroup(m,T,0),m+=T}function x(y){let R=p,T=new yt,A=new P,I=0,w=y===!0?t:e,M=y===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;let C=p;for(let k=0;k<=i;k++){let z=k/i*l+o,X=Math.cos(z),W=Math.sin(z);A.x=w*W,A.y=g*M,A.z=w*X,u.push(A.x,A.y,A.z),d.push(0,M,0),T.x=X*.5+.5,T.y=W*.5*M+.5,f.push(T.x,T.y),p++}for(let k=0;k<i;k++){let B=R+k,z=C+k;y===!0?h.push(z,z+1,B):h.push(z+1,z,B),I+=3}c.addGroup(m,I,y===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ha=class s extends be{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var er=class s extends ye{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new P,p=new yt;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let v=0;v<i;v++){let g=v*(n+1);for(let m=0;m<n;m++){let _=m+g,x=_,y=_+n+1,R=_+n+2,T=_+1;o.push(x,y,T),o.push(y,R,T)}}this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var en=class s extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let _=[],x=m/n,y=0;m===0&&a===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+x*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(T+y,1-x),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let x=h[m][_+1],y=h[m][_],R=h[m+1][_],T=h[m+1][_+1];(m!==0||a>0)&&f.push(x,y,T),(m!==n-1||l<Math.PI)&&f.push(y,R,T)}this.setIndex(f),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fi=class s extends ye{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){let v=p/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){let v=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,_=(i+1)*f+p;a.push(v,g,_),a.push(g,m,_)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Be=class extends gi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function kr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Qg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ts=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ll=class extends Ts{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case $c:r=t,o=2*e-n;break;case Yc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:a=t,l=2*n-e;break;case Yc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,_=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*v+.5*p,y=f*g-f*v;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+_*a[c+R]+x*a[l+R]+y*a[u+R];return r}},Dl=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ul=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},wn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=kr(e,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:kr(t.times,Array),values:kr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ll(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qr:e=this.InterpolantFactoryMethodDiscrete;break;case ol:e=this.InterpolantFactoryMethodLinear;break;case qa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return ol;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Qg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let v=e[u+p];if(v!==e[d+p]||v!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=ol;var Oi=class extends wn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=qr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends wn{};Nl.prototype.ValueTypeName="color";var Fl=class extends wn{};Fl.prototype.ValueTypeName="number";var Ol=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ge.slerpFlat(r,0,a,c-o,a,c,l);return r}},ua=class extends wn{InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}};ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends wn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=qr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends wn{};Bl.prototype.ValueTypeName="vector";var kl=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},tv=new kl,Hl=class{constructor(t){this.manager=t!==void 0?t:tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var da=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var wo=new se,Xh=new P,$h=new P,zl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ni,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Vl=class extends zl{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nr=class extends da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},fa=class extends da{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var tc="\\[\\]\\.:\\/",ev=new RegExp("["+tc+"]","g"),ec="[^"+tc+"]",nv="[^"+tc.replace("\\.","")+"]",iv=/((?:WC+[\/:])*)/.source.replace("WC",ec),sv=/(WCOD+)?/.source.replace("WCOD",nv),rv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),ov=new RegExp("^"+iv+sv+rv+av+"$"),lv=["material","materials","bones","map"],Gl=class{constructor(t,e,n){let i=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ev,"")}static parseTrackName(t){let e=ov.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);lv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Gl;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ax=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var va=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,cv=`
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uClamp;
varying vec2 vUv;
vec3 s(vec2 o) { return min(texture2D(tSrc, vUv + o * uTexel).rgb, vec3(uClamp)); }
void main() {
  vec3 a = s(vec2(-2.0, 2.0)), b = s(vec2(0.0, 2.0)), c = s(vec2(2.0, 2.0));
  vec3 d = s(vec2(-2.0, 0.0)), e = s(vec2(0.0)), f = s(vec2(2.0, 0.0));
  vec3 g = s(vec2(-2.0, -2.0)), h = s(vec2(0.0, -2.0)), i = s(vec2(2.0, -2.0));
  vec3 j = s(vec2(-1.0, 1.0)), k = s(vec2(1.0, 1.0)), l = s(vec2(-1.0, -1.0)), m = s(vec2(1.0, -1.0));
  vec3 col = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);
}
`,hv=`
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uWeight;
varying vec2 vUv;
void main() {
  vec2 t = uTexel;
  vec3 c = texture2D(tSrc, vUv + vec2(-t.x, t.y)).rgb + texture2D(tSrc, vUv + vec2(0.0, t.y)).rgb * 2.0 + texture2D(tSrc, vUv + vec2(t.x, t.y)).rgb
         + texture2D(tSrc, vUv + vec2(-t.x, 0.0)).rgb * 2.0 + texture2D(tSrc, vUv).rgb * 4.0 + texture2D(tSrc, vUv + vec2(t.x, 0.0)).rgb * 2.0
         + texture2D(tSrc, vUv + vec2(-t.x, -t.y)).rgb + texture2D(tSrc, vUv + vec2(0.0, -t.y)).rgb * 2.0 + texture2D(tSrc, vUv + vec2(t.x, -t.y)).rgb;
  gl_FragColor = vec4(c / 16.0 * uWeight, 1.0);
}
`,uv=`
uniform sampler2D tLum;
uniform sampler2D tPrev;
uniform float uExposure;
uniform float uDt;
uniform float uMaxAdapt;
uniform float uReset;
varying vec2 vUv;
void main() {
  // meter on lit things only: black space should not drive the exposure up
  float sum = 0.0, cnt = 0.0, wsum = 0.0;
  for (int y = 0; y < 8; y++) {
    for (int x = 0; x < 12; x++) {
      vec2 uv = (vec2(float(x), float(y)) + 0.5) / vec2(12.0, 8.0);
      vec3 c = texture2D(tLum, uv).rgb * uExposure;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      float w = 1.2 - length(uv - 0.5);
      if (l > 0.025) { sum += min(l, 4.0) * w; cnt += w; }
      wsum += w;
    }
  }
  float frac = cnt / wsum;
  float meanLit = cnt > 0.0 ? sum / cnt : 0.2;
  float target = frac < 0.03 ? 1.0 : clamp(0.24 / meanLit, 0.45, uMaxAdapt);
  float prev = texture2D(tPrev, vec2(0.5)).r;
  float rate = target < prev ? 2.2 : 0.9;
  float a = uReset > 0.5 ? target : prev + (target - prev) * (1.0 - exp(-uDt * rate));
  gl_FragColor = vec4(a, 0.0, 0.0, 1.0);
}
`,dv=`
uniform sampler2D tHdr;
uniform sampler2D tBloom;
uniform sampler2D tAdapt;
uniform float uExposure;
uniform float uBloom;
uniform float uTime;
uniform float uFade;
uniform vec3 uFadeColor;
uniform float uFlash;
uniform float uAberration;
uniform float uNoise;
uniform vec2 uRes;
varying vec2 vUv;

const mat3 ACESIn = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
const mat3 ACESOut = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
vec3 rrt(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
vec3 aces(vec3 c) { c = ACESIn * c; c = rrt(c); c = ACESOut * c; return clamp(c, 0.0, 1.0); }
vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }

void main() {
  vec2 d = vUv - 0.5;
  float r2 = dot(d, d);
  vec2 off = d * r2 * uAberration;
  vec3 col;
  col.r = texture2D(tHdr, vUv - off).r;
  col.g = texture2D(tHdr, vUv).g;
  col.b = texture2D(tHdr, vUv + off).b;
  vec3 bloom = texture2D(tBloom, vUv).rgb;
  col = mix(col, bloom, uBloom);
  float adapt = texture2D(tAdapt, vec2(0.5)).r;
  col *= uExposure * adapt;
  col += uFlash * vec3(0.85, 0.9, 1.0);
  col = aces(col / 0.6);
  // vignette, as from a real lens
  col *= mix(1.0, smoothstep(0.95, 0.15, r2 * 2.2), 0.55);
  col = toSRGB(col);
  float n = hash(vUv * uRes + fract(uTime * 13.17) * 117.0) - 0.5;
  float lum = dot(col, vec3(0.3333));
  col += n * (1.5 / 255.0 + uNoise * (1.0 - lum) * 0.06);
  col = mix(col, uFadeColor, uFade);
  gl_FragColor = vec4(col, 1.0);
}
`;function fv(){let s=new ye;return s.setAttribute("position",new re([-1,-1,0,3,-1,0,-1,3,0],3)),s.setAttribute("uv",new re([0,0,2,0,0,2],2)),s}var xa=class{constructor(t){this.renderer=t,this.scene=new Zn,this.cam=new Ss(-1,1,1,-1,0,1),this.quad=new Et(fv()),this.quad.frustumCulled=!1,this.scene.add(this.quad);let e={type:En,format:Oe,minFilter:Me,magFilter:Me,depthBuffer:!1};this.levels=6,this.mips=[];for(let n=0;n<this.levels;n++)this.mips.push(new Ye(4,4,e));this.adapt=[new Ye(1,1,{...e,type:pn,minFilter:Le,magFilter:Le}),new Ye(1,1,{...e,type:pn,minFilter:Le,magFilter:Le})],this.adaptIndex=0,this.resetAdapt=!0,this.downMat=new Qt({vertexShader:va,fragmentShader:cv,depthTest:!1,depthWrite:!1,uniforms:{tSrc:{value:null},uTexel:{value:new yt},uClamp:{value:6e4}}}),this.upMat=new Qt({vertexShader:va,fragmentShader:hv,depthTest:!1,depthWrite:!1,blending:je,blendSrc:Se,blendDst:Se,blendEquation:Wn,uniforms:{tSrc:{value:null},uTexel:{value:new yt},uWeight:{value:1}}}),this.adaptMat=new Qt({vertexShader:va,fragmentShader:uv,depthTest:!1,depthWrite:!1,uniforms:{tLum:{value:null},tPrev:{value:null},uExposure:{value:1},uDt:{value:.016},uMaxAdapt:{value:6},uReset:{value:1}}}),this.compMat=new Qt({vertexShader:va,fragmentShader:dv,depthTest:!1,depthWrite:!1,uniforms:{tHdr:{value:null},tBloom:{value:null},tAdapt:{value:null},uExposure:{value:1},uBloom:{value:.05},uTime:{value:0},uFade:{value:0},uFadeColor:{value:new kt(0,0,0)},uFlash:{value:0},uAberration:{value:.0015},uNoise:{value:.35},uRes:{value:new yt(1,1)}}}),this.exposure=1,this.bloom=.04,this.fade=0,this.flash=0,this.maxAdapt=6}setSize(t,e){let n=Math.max(1,t>>1),i=Math.max(1,e>>1);for(let r of this.mips)r.setSize(n,i),n=Math.max(1,n>>1),i=Math.max(1,i>>1);this.compMat.uniforms.uRes.value.set(t,e)}pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.cam)}render(t,e,n){let i=this.renderer,r=i.autoClear;i.autoClear=!1;let a=t.texture,o=t.width,l=t.height;for(let d=0;d<this.levels;d++){let f=this.mips[d];this.downMat.uniforms.tSrc.value=a,this.downMat.uniforms.uTexel.value.set(1/o,1/l),this.downMat.uniforms.uClamp.value=d===0?70/Math.max(this.exposure,1e-6):1e9,i.setRenderTarget(f),i.clear(!0,!1,!1),this.pass(this.downMat,f),a=f.texture,o=f.width,l=f.height}let c=this.adapt[this.adaptIndex],h=this.adapt[1-this.adaptIndex];this.adaptMat.uniforms.tLum.value=this.mips[3].texture,this.adaptMat.uniforms.tPrev.value=c.texture,this.adaptMat.uniforms.uExposure.value=this.exposure,this.adaptMat.uniforms.uDt.value=e,this.adaptMat.uniforms.uMaxAdapt.value=this.maxAdapt,this.adaptMat.uniforms.uReset.value=this.resetAdapt?1:0,this.resetAdapt=!1,this.pass(this.adaptMat,h),this.adaptIndex=1-this.adaptIndex;for(let d=this.levels-1;d>0;d--){let f=this.mips[d],p=this.mips[d-1];this.upMat.uniforms.tSrc.value=f.texture,this.upMat.uniforms.uTexel.value.set(1/f.width,1/f.height),this.upMat.uniforms.uWeight.value=.72,this.pass(this.upMat,p)}let u=this.compMat.uniforms;u.tHdr.value=t.texture,u.tBloom.value=this.mips[0].texture,u.tAdapt.value=h.texture,u.uExposure.value=this.exposure,u.uBloom.value=this.bloom/this.levels*1.6,u.uTime.value=n,u.uFade.value=this.fade,u.uFlash.value=this.flash,i.setRenderTarget(null),this.pass(this.compMat,null),i.autoClear=r}};var Ln=`
// Ashima / Gustavson 3D simplex noise (MIT)
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
float fbm3(vec3 p, int oct) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 8; i++) {
    if (i >= oct) break;
    s += a * snoise(p);
    p = p * 2.03 + vec3(1.7, 9.2, 3.1);
    a *= 0.5;
  }
  return s;
}
float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 hash33(vec3 p3) {
  p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yxx) * p3.zyx);
}
`,ya=`
uniform vec3 aCenter;     // planet centre relative to camera, metres
uniform float aR;         // planet radius, metres
uniform float aRa;        // atmosphere top radius / planet radius
uniform vec3 aBetaR;      // rayleigh scattering per planet radius
uniform vec3 aBetaM;      // mie scattering per planet radius (tinted)
uniform float aHR;        // scale heights / planet radius
uniform float aHM;
uniform float aG;
uniform vec3 aSunDir;
uniform vec3 aSunColor;
uniform float aEnabled;

const float A_PI = 3.14159265;

vec2 aRaySphere(vec3 ro, vec3 rd, float r) {
  // ro relative to sphere centre. Robust form for distant observers.
  float tc = -dot(ro, rd);
  vec3 p = ro + rd * tc;
  float h2 = dot(p, p);
  float r2 = r * r;
  if (h2 > r2) return vec2(1e30, -1e30);
  float dt = sqrt(r2 - h2);
  return vec2(tc - dt, tc + dt);
}

float aChapman(float X, float cosChi) {
  float c = sqrt(X * 1.5707963);
  if (cosChi >= 0.0) return c / ((c - 1.0) * cosChi + 1.0);
  float sinChi = sqrt(clamp(1.0 - cosChi * cosChi, 0.0, 1.0));
  return c / ((c - 1.0) * cosChi - 1.0) + 2.0 * c * exp(min(X - X * sinChi, 60.0)) * sqrt(sinChi);
}

// optical depth (rayleigh, mie) from point at radius r (planet units) toward direction with zenith cosine mu
vec2 aOpticalToTop(float r, float mu) {
  float h = max(r - 1.0, 0.0);
  float dr = aHR * exp(-h / aHR) * aChapman(r / aHR, mu);
  float dm = aHM * exp(-h / aHM) * aChapman(r / aHM, mu);
  return vec2(dr, dm);
}

vec3 aTransmittanceSun(vec3 p) {
  float r = length(p);
  vec3 up = p / r;
  float mu = dot(up, aSunDir);
  // ground shadow
  vec2 hit = aRaySphere(p, aSunDir, 1.0);
  if (hit.x > 0.0 && hit.y > 0.0) return vec3(0.0);
  vec2 od = aOpticalToTop(r, mu);
  return exp(-(aBetaR * od.x + aBetaM * 1.1 * od.y));
}

// Integrate inscattered light along a ray segment. ro, rd in planet units relative to centre.
// Returns inscatter (rgb) and average transmittance (a).
vec4 aScatter(vec3 ro, vec3 rd, float tMax, int steps) {
  vec2 hit = aRaySphere(ro, rd, aRa);
  float t0 = max(hit.x, 0.0);
  float t1 = min(hit.y, tMax);
  if (t1 <= t0) return vec4(0.0, 0.0, 0.0, 1.0);
  float ds = (t1 - t0) / float(steps);
  vec3 sumR = vec3(0.0), sumM = vec3(0.0);
  float odR = 0.0, odM = 0.0;
  for (int i = 0; i < 24; i++) {
    if (i >= steps) break;
    float t = t0 + ds * (float(i) + 0.5);
    vec3 p = ro + rd * t;
    float r = length(p);
    float h = max(r - 1.0, 0.0);
    float dR = exp(-h / aHR) * ds;
    float dM = exp(-h / aHM) * ds;
    odR += dR * 0.5; odM += dM * 0.5;
    vec3 tView = exp(-(aBetaR * odR + aBetaM * 1.1 * odM));
    vec3 tSun = aTransmittanceSun(p);
    sumR += tView * tSun * dR;
    sumM += tView * tSun * dM;
    odR += dR * 0.5; odM += dM * 0.5;
  }
  float mu = dot(rd, aSunDir);
  float pR = 3.0 / (16.0 * A_PI) * (1.0 + mu * mu);
  float g = aG, g2 = g * g;
  float pM = 3.0 / (8.0 * A_PI) * ((1.0 - g2) * (1.0 + mu * mu)) / ((2.0 + g2) * pow(max(1.0 + g2 - 2.0 * g * mu, 1e-4), 1.5));
  vec3 trans = exp(-(aBetaR * odR + aBetaM * 1.1 * odM));
  vec3 single = (sumR * aBetaR * pR + sumM * aBetaM * pM);
  // cheap multiple-scattering fill for thick atmospheres
  float day = clamp(dot(normalize(ro + rd * (t0 + t1) * 0.5), aSunDir) * 2.0 + 0.4, 0.0, 1.0);
  vec3 fill = (1.0 - trans) * (aBetaR / max(aBetaR.b, 1e-6) * 0.06 + aBetaM / max(max(aBetaM.r, aBetaM.g), 1e-6) * 0.10) * day * 0.5;
  vec3 col = (single + fill) * aSunColor;
  return vec4(col, dot(trans, vec3(0.3333)));
}
`,_a=`
uniform vec4 uOcc[4];       // xyz centre relative to camera (m), w radius (m)
uniform int uOccCount;
uniform float uSunAngR;     // angular radius of the star as seen from here
float eclipse(vec3 p, vec3 sunDir) {
  float lit = 1.0;
  for (int i = 0; i < 4; i++) {
    if (i >= uOccCount) break;
    vec3 c = uOcc[i].xyz - p;
    float d = length(c);
    float r = uOcc[i].w;
    float along = dot(c, sunDir);
    if (along <= 0.0) continue;
    float angSep = atan(length(cross(c, sunDir)), along);
    float angOcc = asin(clamp(r / d, 0.0, 1.0));
    float s = uSunAngR;
    // fraction of solar disc covered, smooth approximation
    float cover = clamp((angOcc + s - angSep) / (2.0 * s), 0.0, 1.0);
    float maxCover = clamp((angOcc * angOcc) / (s * s), 0.0, 1.0);
    lit *= 1.0 - cover * maxCover;
  }
  return lit;
}
`;var nc=`
uniform mat3 uCamRot;
uniform vec2 uTanFov;
uniform vec2 uRes;
vec3 viewRay() {
  vec2 ndc = gl_FragCoord.xy / uRes * 2.0 - 1.0;
  return normalize(uCamRot * vec3(ndc.x * uTanFov.x, ndc.y * uTanFov.y, -1.0));
}
`;function Dn(...s){let t=2166136261^s.length;for(let e of s)e=Math.floor(e)|0,t=Math.imul(t^e&65535,16777619),t=Math.imul(t^e>>>16,16777619),t^=t>>>13,t=Math.imul(t,1540483477),t^=t>>>15;return t>>>0}var xe=class{constructor(t){this.s=t>>>0||2654435769}next(){let t=this.s=this.s+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return t+Math.floor((e-t+1)*this.next())}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}gauss(){let t=Math.max(1e-12,this.next());return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*this.next())}logRange(t,e){return Math.exp(this.range(Math.log(t),Math.log(e)))}poisson(t){if(t>30)return Math.max(0,Math.round(t+Math.sqrt(t)*this.gauss()));let e=Math.exp(-t),n=0,i=1;do n++,i*=this.next();while(i>e);return n-1}weighted(t,e="w"){let n=0;for(let r of t)n+=r[e];let i=this.next()*n;for(let r of t)if(i-=r[e],i<=0)return r;return t[t.length-1]}};function ki(s,t,e,n){let i=(s-t)/(s<t?e:n);return Math.exp(-.5*i*i)}function pv(s){return 1.056*ki(s,599.8,37.9,31)+.362*ki(s,442,16,26.7)-.065*ki(s,501.1,20.4,26.2)}function mv(s){return .821*ki(s,568.8,46.9,40.5)+.286*ki(s,530.9,16.3,31.1)}function gv(s){return 1.217*ki(s,437,11.8,36)+.681*ki(s,459,26,13.8)}var ic=new Map;function rc(s){let t=Math.round(s/25);if(ic.has(t))return ic.get(t).slice();let e=0,n=0,i=0;for(let h=380;h<=780;h+=5){let u=h*1e-9,d=1/(Math.pow(u,5)*(Math.exp(.014387769/(u*s))-1));e+=d*pv(h),n+=d*mv(h),i+=d*gv(h)}let r=3.2406*e-1.5372*n-.4986*i,a=-.9689*e+1.8758*n+.0415*i,o=.0557*e-.204*n+1.057*i;r=Math.max(r,0),a=Math.max(a,0),o=Math.max(o,0);let l=Math.max(r,a,o)||1,c=[r/l,a/l,o/l];return ic.set(t,c),c.slice()}function sc(s){return s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4)}function gn(s){let t=parseInt(s.replace("#",""),16);return[sc((t>>16&255)/255),sc((t>>8&255)/255),sc((t&255)/255)]}function ac(s,t,e){return[s[0]+(t[0]-s[0])*e,s[1]+(t[1]-s[1])*e,s[2]+(t[2]-s[2])*e]}function Ma(s,t){return[s[0]*t,s[1]*t,s[2]*t]}var xi=6674e-14,sr=94607e11,fe=149597870700,Hi=31557600,Rs=86400,oc=6957e5,vu=1989e27;var zi=6371e3,We=5972e21,Vi=69911e3,Gi=1898e24,pe=(s,t,e)=>s<t?t:s>e?e:s;var lc=(s,t,e)=>{let n=pe((e-s)/(t-s),0,1);return n*n*(3-2*n)};function yi(s){let t=Math.abs(s);return t<1e3?`${t.toFixed(0)} m`:t<1e6?`${(t/1e3).toFixed(t<1e4?2:1)} km`:t<.05*fe?`${Math.round(t/1e3).toLocaleString("en-US")} km`:t<.2*sr?`${(t/fe).toFixed(t<10*fe?2:1)} AU`:`${(t/sr).toFixed(2)} ly`}function cc(s){let t=Math.abs(s);return t<1e3?`${t.toFixed(t<10?1:0)} m/s`:t<.01*299792458?`${(t/1e3).toFixed(t<1e4?2:1)} km/s`:`${(t/299792458).toFixed(t<10*299792458?2:t<100*299792458?1:0)} c`}function xu(s){return s<60?`${s.toFixed(0)} s`:s<3600?`${(s/60).toFixed(0)} min`:s<2*Rs?`${(s/3600).toFixed(1)} h`:s<Hi?`${(s/Rs).toFixed(1)} days`:`${(s/Hi).toFixed(2)} yr`}var vv=["","","b","br","c","d","dr","f","g","h","k","kh","l","m","n","p","r","s","sh","st","t","th","tr","v","z","ess","or","al","ul","y","w","sk","vh"],xv=["a","a","e","e","i","o","o","u","ae","ei","ia","io","au","y"],yv=["","","","n","r","s","l","th","m","nd","rn","sk","ll","ss","x","nt","rd"];function yu(s){return s.charAt(0).toUpperCase()+s.slice(1)}function _u(s){let t=new xe(s^1374496523);for(let e=0;e<8;e++){let n=t.chance(.55)?2:t.chance(.7)?3:1,i="";for(let r=0;r<n;r++)i+=t.pick(vv)+t.pick(xv)+(r===n-1||t.chance(.3)?t.pick(yv):"");if(i=i.replace(/(.)\1\1+/g,"$1$1"),i.length>=4&&i.length<=10&&!/[aeiouy]{3}/.test(i))return yu(i)}return yu("ostra")}var _v=["OSC","OSC","OSC","HVK","Lund","TSR"];function Mu(s){let t=new xe(s^739982445),e=t.pick(_v),n=t.int(1e3,99999);return e==="Lund"?`Lund ${t.int(2,900)}`:`${e} ${n}`}var Mv=["I","II","III","IV","V","VI","VII","VIII","IX","X"];function Su(s){return"bcdefghijklmnop"[s]||`p${s}`}function bu(s){return Mv[s]||`${s+1}`}var Sv=132479505,Un=10,we=[0,18,26e3],ke={R0:26e3,Rd:9e3,h0:330,pitch:12.5*Math.PI/180,arms:4,armOffset:.6,bulgeR:2600};function ba(s,t,e){let n=Math.hypot(s,e),i=Math.atan2(e,s),r=Math.exp(-(n-ke.R0)/ke.Rd)*lc(52e3,38e3,n),a=ke.h0+n*.006,o=Math.cosh(t/a),l=1/(o*o),c=1/Math.tan(ke.pitch),h=i-c*Math.log(Math.max(n,400)/ke.R0),u=.5+.5*Math.cos(ke.arms*h+ke.armOffset),d=u*u*u*u*lc(2500,7e3,n),f=r*l*(.42+1.25*d),p=(n*n+t*t*3.2)/(2*ke.bulgeR*ke.bulgeR),v=18*Math.exp(-p);return f+v}var bv=.004,wv=bv/ba(we[0],we[1],we[2]);function Ev(s,t,e){return ba(s,t,e)*wv}var hc=[{cls:"M",kind:"main",w:.55,T:[2400,3700],M:[.08,.47],R:[.12,.62]},{cls:"K",kind:"main",w:.17,T:[3700,5200],M:[.47,.8],R:[.66,.93]},{cls:"G",kind:"main",w:.095,T:[5200,6e3],M:[.8,1.05],R:[.93,1.16]},{cls:"F",kind:"main",w:.05,T:[6e3,7500],M:[1.05,1.4],R:[1.16,1.5]},{cls:"A",kind:"main",w:.022,T:[7500,1e4],M:[1.4,2.1],R:[1.5,2.2]},{cls:"B",kind:"main",w:.006,T:[1e4,28e3],M:[2.1,14],R:[2.2,6.5]},{cls:"O",kind:"main",w:5e-4,T:[3e4,42e3],M:[16,40],R:[6.6,12]},{cls:"K",kind:"giant",w:.007,T:[3900,4800],M:[1,2.5],R:[10,40]},{cls:"M",kind:"giant",w:.003,T:[3100,3800],M:[1,3],R:[40,160]},{cls:"D",kind:"dwarf",w:.045,T:[5500,32e3],M:[.5,1.2],R:[.008,.015]},{cls:"L",kind:"brown",w:.03,T:[900,2200],M:[.03,.075],R:[.08,.11]},{cls:"N",kind:"neutron",w:.0012,T:[4e5,9e5],M:[1.3,2],R:[16e-6,19e-6]},{cls:"X",kind:"blackhole",w:4e-4,T:[0,0],M:[5,18],R:[0,0]}];function wu(s,t,e,n){let i=new xe(e),r=n?.classDef||i.weighted(hc),a=n?.u??i.next(),o=x=>x[0]+(x[1]-x[0])*a,l=r.kind==="blackhole"?0:o(r.T)*(.97+.06*i.next()),c=r.M[0]*Math.pow(r.M[1]/r.M[0],a),h=o(r.R);r.kind==="blackhole"&&(h=2*6674e-14*c*1989e27/299792458**2/6957e5);let u=r.kind==="blackhole"?0:h*h*Math.pow(l/5772,4),d=r.kind==="blackhole"||r.kind==="neutron"?0:Math.min(9,Math.floor(10*(1-a))),f={main:"V",giant:"III",dwarf:"",brown:"",neutron:"",blackhole:""}[r.kind],p=`${r.cls}${d}${f}`;r.kind==="dwarf"&&(p=`DA${Math.max(1,Math.min(9,Math.round(50400/l)))}`),r.kind==="brown"&&(p=l<1300?`T${d}`:`L${d}`),r.kind==="neutron"&&(p="Neutron star"),r.kind==="blackhole"&&(p="Black hole");let v=u>4||r.kind==="giant",g=n?.name||(v||i.chance(.28)?_u(e):Mu(e)),m=r.kind==="blackhole"?[0,0,0]:rc(Math.min(l,4e4)),_=r.kind==="main"||r.kind==="giant";return{id:s,name:g,pos:t,seed:e,cls:r.cls,kind:r.kind,spectral:p,temp:l,mass:c,radius:h,lum:u,color:m,scoopable:_}}var Sa=class{constructor(t=Sv){this.seed=t,this.sectors=new Map,this.overrides=new Map,this.sol=wu("SOL",we.slice(),Dn(t,1),{classDef:hc[2],u:.72,name:"Sol"}),this.sol.temp=5772,this.sol.mass=1,this.sol.radius=1,this.sol.lum=1,this.sol.spectral="G2V",this.sol.color=rc(5772),this.solSector=this.sectorOf(we)}sectorOf(t){return[Math.floor(t[0]/Un),Math.floor(t[1]/Un),Math.floor(t[2]/Un)]}sectorStars(t,e,n){let i=`${t},${e},${n}`,r=this.sectors.get(i);if(r)return r;let a=Dn(this.seed,t,e,n),o=new xe(a),l=(t+.5)*Un,c=(e+.5)*Un,h=(n+.5)*Un,u=Ev(l,c,h)*Un**3,d=Math.min(o.poisson(u),400);r=[];let f=t===this.solSector[0]&&e===this.solSector[1]&&n===this.solSector[2];for(let p=0;p<d;p++){let v=[(t+o.next())*Un,(e+o.next())*Un,(n+o.next())*Un];if(f&&Math.hypot(v[0]-we[0],v[1]-we[1],v[2]-we[2])<4)continue;let g=`${t}.${e}.${n}.${p}`,m=wu(g,v,Dn(a,p,77),this.overrides.get(g));r.push(m)}return f&&r.push(this.sol),this.sectors.size>6e4&&this.sectors.clear(),this.sectors.set(i,r),r}starsInRadius(t,e){let n=[],i=e*e,r=this.sectorOf([t[0]-e,t[1]-e,t[2]-e]),a=this.sectorOf([t[0]+e,t[1]+e,t[2]+e]);for(let o=r[0];o<=a[0];o++)for(let l=r[1];l<=a[1];l++)for(let c=r[2];c<=a[2];c++)for(let h of this.sectorStars(o,l,c)){let u=h.pos[0]-t[0],d=h.pos[1]-t[1],f=h.pos[2]-t[2],p=u*u+d*d+f*f;p<=i&&n.push({star:h,d:Math.sqrt(p)})}return n}starById(t){if(t==="SOL")return this.sol;let[e,n,i]=t.split(".").map(Number);return this.sectorStars(e,n,i).find(r=>r.id===t)||null}forceStar(t,e){this.overrides.set(t,e);let[n,i,r]=t.split(".").map(Number);return this.sectors.delete(`${n},${i},${r}`),this.starById(t)}classDef(t,e="main"){return hc.find(n=>n.cls===t&&n.kind===e)}};function me(s,t){return Math.hypot(s[0]-t[0],s[1]-t[1],s[2]-t[2])}var Tv=`
const float R0 = ${ke.R0.toFixed(1)};
const float RD = ${ke.Rd.toFixed(1)};
const float H0 = ${ke.h0.toFixed(1)};
const float PITCHK = ${(1/Math.tan(ke.pitch)).toFixed(6)};
const float ARMS = ${ke.arms.toFixed(1)};
const float ARMOFF = ${ke.armOffset.toFixed(4)};
const float BULGER = ${ke.bulgeR.toFixed(1)};

float sech2(float x) { float c = cosh(clamp(x, -40.0, 40.0)); return 1.0 / (c * c); }

void galaxyAt(vec3 p, out float stars, out float arm, out float bulge, out float dust) {
  float r = length(p.xz);
  float theta = atan(p.z, p.x);
  float radial = exp(-(r - R0) / RD) * smoothstep(52000.0, 38000.0, r);
  float h = H0 + r * 0.006;
  float phase = theta - PITCHK * log(max(r, 400.0) / R0);
  float a = 0.5 + 0.5 * cos(ARMS * phase + ARMOFF);
  arm = a * a * a * a * smoothstep(2500.0, 7000.0, r);
  float b2 = (r * r + p.y * p.y * 3.2) / (2.0 * BULGER * BULGER);
  bulge = 18.0 * exp(-b2);
  stars = radial * sech2(p.y / h) * (0.42 + 1.25 * arm);
  // dust sits in a thinner layer, on the inner edge of the arms
  float ad = 0.5 + 0.5 * cos(ARMS * (phase + 0.09) + ARMOFF);
  float hd = 110.0 + r * 0.0025;
  dust = exp(-(r - R0) / (RD * 1.2)) * smoothstep(50000.0, 30000.0, r) * sech2(p.y / hd) * (0.35 + 1.6 * ad * ad * ad);
}
`,Av=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Rv=`
uniform vec3 uObs;
uniform float uFace;
uniform float uSize;
varying vec3 vDir;
${Ln}
${Tv}
void main() {
  vec3 rd = normalize(vDir);
  vec3 L = vec3(0.0);
  vec3 T = vec3(1.0);
  float t = 30.0;
  const int STEPS = 84;
  float k = pow(95000.0 / 30.0, 1.0 / float(STEPS));
  float column = 0.0;
  for (int i = 0; i < STEPS; i++) {
    float tn = t * k;
    float ds = tn - t;
    vec3 p = uObs + rd * (t + ds * 0.5);
    float stars, arm, bulge, dust;
    galaxyAt(p, stars, arm, bulge, dust);
    float near = t < 6000.0 ? 1.0 : 0.0;
    float clump = 0.55 + 0.9 * (0.5 + 0.5 * fbm3(p / 420.0, near > 0.5 ? 4 : 2));
    float dclump = smoothstep(-0.25, 0.65, fbm3(p / 260.0 + 17.0, near > 0.5 ? 5 : 2)) * 1.6;
    vec3 old = vec3(1.0, 0.86, 0.68);
    vec3 young = vec3(0.72, 0.82, 1.0);
    vec3 emit = (stars * clump) * mix(old, young, clamp(arm * 1.4, 0.0, 1.0)) + bulge * vec3(1.0, 0.78, 0.52);
    // HII regions: pink knots in the arms
    float hii = arm * arm * smoothstep(0.52, 0.9, fbm3(p / 700.0 + 41.0, 3)) * stars;
    emit += hii * vec3(1.0, 0.32, 0.42) * 2.2;
    vec3 ext = dust * dclump * vec3(0.55, 0.72, 1.0) * 0.0042;
    L += T * emit * ds;
    column += stars * ds;
    T *= exp(-ext * ds);
    t = tn;
  }
  vec3 col = L * 2.4e-8;
  // faint unresolved stars, one per texel at most
  float h = hash13(vec3(gl_FragCoord.xy, uFace * 17.0 + 3.0));
  float h2 = hash13(vec3(gl_FragCoord.yx * 1.37, uFace * 5.0 + 11.0));
  float dens = clamp(column * 6e-5, 0.04, 1.0);
  float sp = pow(h, 520.0 / (0.25 + dens)) ;
  vec3 starTint = mix(vec3(1.0, 0.8, 0.62), vec3(0.75, 0.85, 1.0), h2);
  col += sp * starTint * 1.2e-3 * dot(T, vec3(0.333)) * (0.3 + 0.7 * h2);
  // a rare bright distant giant
  float sp2 = pow(h, 9000.0);
  col += sp2 * starTint * 2.5e-2;
  gl_FragColor = vec4(col, 1.0);
}
`,Cv=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * vec4((viewMatrix * vec4(position, 0.0)).xyz, 1.0);
  gl_Position = p.xyww;
  gl_Position.z = gl_Position.w * 0.99999;
}
`,Eu=`
uniform float uBeta;
uniform float uOneMinusBeta;   // 1 - beta, computed in double precision
uniform vec3 uVelDir;
// All of this is written in terms of (1 - cos) so it stays exact when beta is within
// a millionth of 1 and the angles involved are fractions of a milliradian.
// Map an apparent direction to its source direction; D is the Doppler factor.
vec3 aberrateInverse(vec3 d, out float D) {
  D = 1.0;
  if (uBeta <= 0.0) return d;
  vec3 dv = d - uVelDir;
  float omca = 0.5 * dot(dv, dv);                 // 1 - cos(apparent angle)
  float den = uOneMinusBeta + uBeta * omca;       // 1 - beta cos
  float omcs = omca * (1.0 + uBeta) / den;        // 1 - cos(source angle)
  float cs = 1.0 - omcs;
  float ss = sqrt(max(0.0, omcs * (2.0 - omcs)));
  vec3 perp = d - uVelDir * (1.0 - omca);
  float pl = length(perp);
  vec3 pn = pl > 1e-9 ? perp / pl : vec3(0.0);
  float gamma = inversesqrt(max(uOneMinusBeta * (1.0 + uBeta), 1e-14));
  D = 1.0 / (gamma * den);
  return uVelDir * cs + pn * ss;
}
// Map a source direction to its apparent direction.
vec3 aberrate(vec3 d, out float D) {
  D = 1.0;
  if (uBeta <= 0.0) return d;
  vec3 dv = d - uVelDir;
  float omcs = 0.5 * dot(dv, dv);
  float cs = 1.0 - omcs;
  float omca = omcs * uOneMinusBeta / (1.0 + uBeta * cs);
  float ca = 1.0 - omca;
  float sa = sqrt(max(0.0, omca * (2.0 - omca)));
  vec3 perp = d - uVelDir * cs;
  float pl = length(perp);
  vec3 pn = pl > 1e-9 ? perp / pl : vec3(0.0);
  float gamma = inversesqrt(max(uOneMinusBeta * (1.0 + uBeta), 1e-14));
  D = gamma * (1.0 + uBeta * cs);
  return uVelDir * ca + pn * sa;
}
vec3 dopplerTint(float D) {
  float l = log2(D);
  vec3 tint = l < 0.0 ? mix(vec3(1.0), vec3(1.0, 0.3, 0.1), clamp(-l / 2.5, 0.0, 1.0))
                      : mix(vec3(1.0), vec3(0.62, 0.74, 1.0), clamp(l / 2.0, 0.0, 1.0));
  float b = l < 0.0 ? D * D * D : D * D / (1.0 + pow(D / 10.0, 4.0));
  return tint * b;
}
`,Iv=`
uniform samplerCube tSky;
uniform float uIntensity;
uniform vec4 uBH;        // direction to black hole, angular Schwarzschild radius
varying vec3 vDir;
${Eu}
void main() {
  vec3 d = normalize(vDir);
  float D;
  vec3 src = aberrateInverse(d, D);
  float shadow = 1.0;
  if (uBH.w > 0.0) {
    vec3 bh = normalize(uBH.xyz);
    float a = acos(clamp(dot(src, bh), -1.0, 1.0));
    float ts = uBH.w;
    shadow = smoothstep(2.55 * ts, 2.75 * ts, a);
    float beta = a - 2.0 * ts / max(a, 1e-6);
    vec3 perp = src - bh * cos(a);
    float pl = length(perp);
    if (pl > 1e-7) src = bh * cos(beta) + (perp / pl) * sin(beta);
  }
  vec3 c = textureLod(tSky, src, 0.0).rgb;
  c *= dopplerTint(D);
  // At extreme blueshift the cosmic background slides into visible light.
  float cmb = smoothstep(12.0, 70.0, D);
  c += cmb * vec3(1.0, 0.55, 0.3) * 4e-4 * (1.0 + 3.0 * smoothstep(50.0, 80.0, D));
  gl_FragColor = vec4(c * uIntensity * shadow, 1.0);
}
`,Pv=`
attribute vec3 aColor;
attribute float aFlux;
uniform float uScale;
uniform float uPx;
uniform vec4 uBH;
varying vec3 vColor;
${Eu}
void main() {
  float D;
  vec3 d = aberrate(normalize(position), D);
  vec4 p = projectionMatrix * vec4((viewMatrix * vec4(d, 0.0)).xyz, 1.0);
  gl_Position = p.xyww;
  gl_Position.z = gl_Position.w * 0.99998;
  float I = aFlux * uScale;
  vec3 tint = dopplerTint(D);
  float hide = 1.0;
  if (uBH.w > 0.0) hide = smoothstep(4.0 * uBH.w, 12.0 * uBH.w, acos(clamp(dot(d, normalize(uBH.xyz)), -1.0, 1.0)));
  // energy-preserving size: bright stars spread wider at lower peak
  float size = clamp(2.2 + 1.2 * log2(1.0 + I * 2.0), 2.2, 9.0);
  gl_PointSize = size * uPx;
  vColor = aColor * I * tint * hide * (6.0 / (size * size));
}
`,Lv=`
varying vec3 vColor;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  float g = exp(-r2 * 4.5);
  gl_FragColor = vec4(vColor * g, 1.0);
}
`,Dv=40;function Cs(s,t){let e=1/Math.sqrt(Math.max(1-t*t,1e-18)),n=Math.min(e,Dv),i=1-Math.sqrt(1-1/(n*n)),r=t<=0?0:1-Math.max(i,1-t);s.uBeta.value=r,s.uOneMinusBeta.value=t<=0?1:Math.max(i,1-t)}var wa=class{constructor(t,e=1024){this.renderer=t,this.size=e,this.cubeTarget=new Ks(e,{type:En,generateMipmaps:!1,minFilter:Me,magFilter:Me}),this.cubeCamera=new Js(.1,10,this.cubeTarget),this.cubeCamera.coordinateSystem=t.coordinateSystem,this.cubeCamera.updateCoordinateSystem(),this.cubeCamera.updateMatrixWorld(!0),this.genScene=new Zn,this.genMat=new Qt({vertexShader:Av,fragmentShader:Rv,side:Te,depthTest:!1,depthWrite:!1,uniforms:{uObs:{value:new P},uFace:{value:0},uSize:{value:e}}}),this.genScene.add(new Et(new De(2,2,2),this.genMat)),this.uniforms={tSky:{value:this.cubeTarget.texture},uIntensity:{value:1},uBeta:{value:0},uOneMinusBeta:{value:1},uVelDir:{value:new P(0,0,-1)},uBH:{value:new jt(0,0,0,0)}},this.mesh=new Et(new De(2,2,2),new Qt({vertexShader:Cv,fragmentShader:Iv,side:Te,depthTest:!1,depthWrite:!1,uniforms:this.uniforms})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.starUniforms={uScale:{value:3},uPx:{value:1},uBeta:this.uniforms.uBeta,uOneMinusBeta:this.uniforms.uOneMinusBeta,uVelDir:this.uniforms.uVelDir,uBH:this.uniforms.uBH},this.starMat=new Qt({vertexShader:Pv,fragmentShader:Lv,depthTest:!1,depthWrite:!1,blending:je,blendSrc:Se,blendDst:Se,transparent:!1,uniforms:this.starUniforms}),this.points=new ws(new ye,this.starMat),this.points.frustumCulled=!1,this.points.renderOrder=-999,this.pending=null}regenerate(t,e=!1){if(this.genMat.uniforms.uObs.value.set(t[0],t[1],t[2]),this.tile=Math.min(256,this.size),this.tilesPerSide=Math.ceil(this.size/this.tile),this.pending={face:0,tile:0},e)for(;this.pending;)this.step(64)}step(t=6){if(!this.pending)return!1;let e=this.renderer,n=this.cubeCamera.children,i=e.getRenderTarget(),r=e.getScissorTest(),a=this.tilesPerSide,o=!1;for(let l=0;l<t&&!o;l++){let{face:c,tile:h}=this.pending,u=h%a,d=Math.floor(h/a),f=u*this.tile,p=d*this.tile,v=Math.min(this.tile,this.size-f),g=Math.min(this.tile,this.size-p);this.genMat.uniforms.uFace.value=c,this.cubeTarget.viewport.set(0,0,this.size,this.size),this.cubeTarget.scissor.set(f,p,v,g),this.cubeTarget.scissorTest=!0,e.setRenderTarget(this.cubeTarget,c),e.render(this.genScene,n[c]),this.cubeTarget.scissorTest=!1,this.pending.tile++,this.pending.tile>=a*a&&(this.pending.tile=0,this.pending.face++,this.pending.face>=6&&(this.pending=null,o=!0))}return e.setRenderTarget(i),e.setScissorTest(r),o}setStars(t){let e=t.length,n=new Float32Array(e*3),i=new Float32Array(e*3),r=new Float32Array(e);t.forEach((o,l)=>{n.set(o.dir,l*3),i.set(o.color,l*3),r[l]=o.flux});let a=new ye;a.setAttribute("position",new he(n,3)),a.setAttribute("aColor",new he(i,3)),a.setAttribute("aFlux",new he(r,1)),this.points.geometry.dispose(),this.points.geometry=a}};var Is={uCamRot:{value:new Ht},uTanFov:{value:new yt(1,1)},uRes:{value:new yt(1,1)}},Ea=class{constructor(t,{quality:e="high"}={}){this.canvas=t;let n=new ia({canvas:t,antialias:!1,logarithmicDepthBuffer:!0,powerPreference:"high-performance",alpha:!1,stencil:!1});n.outputColorSpace=vi,n.toneMapping=Cn,n.shadowMap.enabled=!0,n.shadowMap.type=Wl,n.autoClear=!1,this.renderer=n,this.camera=new $e(60,1,.15,1e15),this.camera.position.set(0,0,0),this.bgScene=new Zn,this.scene=new Zn,this.setQuality(e,!0),this.sky=new wa(n,this.skySize),this.bgScene.add(this.sky.mesh,this.sky.points),this.post=new xa(n),this.hdr=null,this.frustum=new Ni,this.projScreenMatrix=new se,this.resize(),window.addEventListener("resize",()=>this.resize())}setQuality(t,e=!1){this.quality=t;let n={low:{scale:.7,samples:0,sky:512,maxPixels:1e6},medium:{scale:.9,samples:2,sky:768,maxPixels:16e5},high:{scale:1,samples:4,sky:1024,maxPixels:24e5},ultra:{scale:1.35,samples:4,sky:1536,maxPixels:45e5}},i={...n[t]||n.high};window.__TLQ_TEST&&(i.sky=window.__TLQ_SKY||128,i.samples=0,i.scale=window.__TLQ_SCALE||.5),this.renderScale=i.scale,this.samples=i.samples,this.skySize=i.sky,this.maxPixels=window.__TLQ_TEST?1e9:i.maxPixels,e||this.resize(!0)}resize(t=!1){let e=Math.max(1,this.canvas.clientWidth||window.innerWidth),n=Math.max(1,this.canvas.clientHeight||window.innerHeight),i=Math.min(window.devicePixelRatio||1,2)*this.renderScale;e*n*i*i>this.maxPixels&&(i=Math.sqrt(this.maxPixels/(e*n)));let r=Math.round(e*i),a=Math.round(n*i);!t&&this.hdr&&this.width===r&&this.height===a||(this.width=r,this.height=a,this.pixelRatio=i,this.renderer.setPixelRatio(1),this.renderer.setSize(r,a,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.hdr&&this.hdr.dispose(),this.hdr=new Ye(r,a,{type:En,format:Oe,samples:this.samples,minFilter:Me,magFilter:Me,depthBuffer:!0}),this.post.setSize(r,a),this.post.resetAdapt=!0)}get pixelAngle(){return 2*Math.tan(this.camera.fov*Math.PI/360)/this.height}get projScale(){return this.height/(2*Math.tan(this.camera.fov*Math.PI/360))}updateFrustum(){let t=this.camera;return t.updateMatrixWorld(),this.projScreenMatrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projScreenMatrix),this.frustum}updateCameraUniforms(){let t=this.camera;Is.uCamRot.value.setFromMatrix4(new se().makeRotationFromQuaternion(t.quaternion));let e=Math.tan(t.fov*Math.PI/360);Is.uTanFov.value.set(e*t.aspect,e),Is.uRes.value.set(this.width,this.height)}render(t,e){let n=this.renderer;this.updateCameraUniforms(),this.sky.starUniforms.uPx.value=this.pixelRatio,n.setRenderTarget(this.hdr),n.setClearColor(0,1),n.clear(!0,!0,!1),n.render(this.bgScene,this.camera),n.clearDepth(),n.render(this.scene,this.camera),this.post.render(this.hdr,t,e)}};function uc(){let s=[{n:[1,0,0],u:[0,0,-1],v:[0,1,0]},{n:[-1,0,0],u:[0,0,1],v:[0,1,0]},{n:[0,1,0],u:[1,0,0],v:[0,0,-1]},{n:[0,-1,0],u:[1,0,0],v:[0,0,1]},{n:[0,0,1],u:[1,0,0],v:[0,1,0]},{n:[0,0,-1],u:[-1,0,0],v:[0,1,0]}],t=Math.PI/4;function e(p,v,g,m){let _=s[p],x=Math.tan(v*t),y=Math.tan(g*t),R=_.n[0]+_.u[0]*x+_.v[0]*y,T=_.n[1]+_.u[1]*x+_.v[1]*y,A=_.n[2]+_.u[2]*x+_.v[2]*y,I=1/Math.sqrt(R*R+T*T+A*A);return m[0]=R*I,m[1]=T*I,m[2]=A*I,m}let n=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function i(p){let v=p>>>0;return()=>{v=v+1831565813>>>0;let g=v;return g=Math.imul(g^g>>>15,g|1),g^=g+Math.imul(g^g>>>7,g|61),((g^g>>>14)>>>0)/4294967296}}function r(p){let v=i(p),g=new Uint8Array(256);for(let R=0;R<256;R++)g[R]=R;for(let R=255;R>0;R--){let T=Math.floor(v()*(R+1)),A=g[R];g[R]=g[T],g[T]=A}let m=new Uint8Array(512),_=new Uint8Array(512);for(let R=0;R<512;R++)m[R]=g[R&255],_[R]=m[R]%12;let x=1/3,y=1/6;return function(T,A,I){let w=0,M=0,C=0,k=0,B=(T+A+I)*x,z=Math.floor(T+B),X=Math.floor(A+B),W=Math.floor(I+B),it=(z+X+W)*y,H=T-(z-it),rt=A-(X-it),ct=I-(W-it),$,Q,st,O,K,lt;H>=rt?rt>=ct?($=1,Q=0,st=0,O=1,K=1,lt=0):H>=ct?($=1,Q=0,st=0,O=1,K=0,lt=1):($=0,Q=0,st=1,O=1,K=0,lt=1):rt<ct?($=0,Q=0,st=1,O=0,K=1,lt=1):H<ct?($=0,Q=1,st=0,O=0,K=1,lt=1):($=0,Q=1,st=0,O=1,K=1,lt=0);let nt=H-$+y,dt=rt-Q+y,ot=ct-st+y,ut=H-O+2*y,pt=rt-K+2*y,At=ct-lt+2*y,It=H-1+.5,L=rt-1+.5,Jt=ct-1+.5,Ft=z&255,Ot=X&255,tt=W&255,St=.6-H*H-rt*rt-ct*ct;if(St>0){let U=_[Ft+m[Ot+m[tt]]]*3;St*=St,w=St*St*(n[U]*H+n[U+1]*rt+n[U+2]*ct)}let vt=.6-nt*nt-dt*dt-ot*ot;if(vt>0){let U=_[Ft+$+m[Ot+Q+m[tt+st]]]*3;vt*=vt,M=vt*vt*(n[U]*nt+n[U+1]*dt+n[U+2]*ot)}let E=.6-ut*ut-pt*pt-At*At;if(E>0){let U=_[Ft+O+m[Ot+K+m[tt+lt]]]*3;E*=E,C=E*E*(n[U]*ut+n[U+1]*pt+n[U+2]*At)}let S=.6-It*It-L*L-Jt*Jt;if(S>0){let U=_[Ft+1+m[Ot+1+m[tt+1]]]*3;S*=S,k=S*S*(n[U]*It+n[U+1]*L+n[U+2]*Jt)}return 32*(w+M+C+k)}}function a(p,v,g,m){let _=Math.imul(p|0,668265261)^Math.imul(v|0,374761393)^Math.imul(g|0,2654435761)^Math.imul(m|0,2246822519);return _=Math.imul(_^_>>>15,739982445),_=Math.imul(_^_>>>12,695872825),_^=_>>>15,_>>>0}let o=(p,v,g)=>p<v?v:p>g?g:p,l=(p,v,g)=>{let m=o((g-p)/(v-p),0,1);return m*m*(3-2*m)};function c(p,v,g){let m=o(.5+.5*(v-p)/g,0,1);return v*(1-m)+p*m-g*m*(1-m)}function h(p,v,g){return-c(-p,-v,g)}function u(p){let v=p.radius,g=p.amp,m=p.type,_=p.seed|0,x=r(_),y=r(_+101),R=r(_+202),T=r(_+303),A=p.craters||0,I=p.mare||0,w=m==="terran"?0:m==="titan"?-.32*g:null,M=m==="terran"?p.sea??.05:0,C=!!p.life,k=Math.cos(_%7),B=Math.sin(_%7);function z($,Q,st,O,K,lt,nt,dt){let ot=0,ut=1,pt=K;for(let At=0;At<lt;At++){let It=v/pt;if(It<dt){It*2>dt&&(ot+=ut*$(Q*pt,st*pt,O*pt)*((It*2-dt)/dt));break}ot+=ut*$(Q*pt,st*pt,O*pt),ut*=nt,pt*=2.02}return ot}function X($,Q,st,O,K,lt,nt){let dt=0,ot=.5,ut=K,pt=1;for(let At=0;At<lt&&!(v/ut<nt);At++){let It=1-Math.abs($(Q*ut,st*ut,O*ut));It*=It,dt+=It*ot*pt,pt=o(It*1.6,0,1),ot*=.5,ut*=2.05}return dt}function W($,Q,st,O,K,lt){let nt=0,dt=O,ot=0;for(;dt>K&&dt>.7&&ot<14;){let ut=v/dt;nt+=T($*ut+ot*3.1,Q*ut,st*ut)*lt*Math.pow(dt,.92),dt*=.5,ot++}return nt}let it=.28,H=[0,0];function rt($,Q,st,O,K,lt,nt){if(K<=0)return 0;let dt=0,ot=it,ut=0;for(let pt=0;pt<22;pt++,ot*=.5){let At=.42*ot*v;if(At<O*.7||At<1.5)break;let It=$/ot,L=Q/ot,Jt=st/ot,Ft=Math.floor(It),Ot=Math.floor(L),tt=Math.floor(Jt),St=It-Ft>.5?1:-1,vt=L-Ot>.5?1:-1,E=Jt-tt>.5?1:-1,S=K*(pt<2?.35:.55);for(let U=0;U<8;U++){let Z=Ft+(U&1?St:0),j=Ot+(U&2?vt:0),Y=tt+(U&4?E:0),Rt=a(Z,j,Y,pt*7919+_);if((Rt&65535)/65536>S)continue;let ft=(Rt>>>16&255)/255,Tt=(Rt>>>24&255)/255,qt=a(Y,Z,j,pt+_*3),at=(qt&65535)/65536,Mt=(qt>>>16)/65536,Ut=(Z+.25+.5*ft)*ot,Bt=(j+.25+.5*Tt)*ot,bt=(Y+.25+.5*at)*ot,$t=ot*(.12+.3*Mt*Mt),Vt=$-Ut,ae=Q-Bt,D=st-bt,mt=Vt*Vt+ae*ae+D*D,q=$t*1.7;if(mt>q*q)continue;let J=Math.sqrt(mt)/$t,xt=$t*v,_t=xt>5e3,Gt=_t?.42*Math.pow(5e3/xt,.55):.42,ge=J*J-1,Re=Math.min(J-1.7,0),ee=.3*Re*Re,He=h(ge,_t?-.32:-.78,.35);He=c(He,ee,.22),xt>9e3&&(He+=.3*Math.exp(-J*J*45));let sn=(qt&255)/255,dr=lt*(sn<.15?1:.55+.45*(1-sn));dt+=He*xt*Gt*dr,sn<.07&&J<2.4&&(ut=Math.max(ut,(1-J/2.4)*(pt>2?1:.6)))}}return nt&&(nt[0]=ut),dt}function ct($,Q,st,O,K){let lt=0,nt=0,dt=0;switch(m){case"barren":{let ot=z(x,$,Q,st,1.3,9,.52,O)*g*.38,ut=z(y,$,Q,st,.9,4,.5,O),pt=l(.05,.32,ut)*I,At=X(R,$,Q,st,2.2,5,O)*g*.25*(1-pt),It=rt($,Q,st,O,A*(1-.65*pt),1,H);lt=ot+At-pt*g*.32+It+W($,Q,st,1600,O,.045*(1-.5*pt)),nt=pt,dt=H[0];break}case"ice":{let ot=z(x,$,Q,st,1.2,8,.5,O)*g*.3,ut=0,pt=0;for(let It=0;It<3;It++){let L=3.5*Math.pow(2.3,It);if(v/L<O*4)break;let Jt=R($*2.1+It,Q*2.1,st*2.1)*.25,Ft=1-Math.abs(y($*L+Jt,Q*L+Jt,st*L-Jt)),Ot=Math.pow(Ft,14),tt=Math.pow(Ft,70);ut+=(Ot-tt*1.3)*(1/(1+It)),pt=Math.max(pt,Math.pow(Ft,9))}let At=rt($,Q,st,O,A,.7,H);lt=ot+ut*g*.12+At+W($,Q,st,900,O,.022),nt=pt,dt=l(-.2,.6,z(T,$,Q,st,2,4,.5,O));break}case"desert":{let ot=z(x,$,Q,st,1.1,9,.5,O),ut=X(y,$,Q,st,2.6,7,O)*l(0,.4,ot),pt=Math.abs(R($*2.6,Q*2.6,st*2.6)+.35*T($*9,Q*9,st*9)),At=(1-l(0,.07,pt))*l(-.1,.25,ot),It=rt($,Q,st,O,A,.45,H),L=1-l(-.2,.2,ot),Jt=0;if(v/3e3>O*.5){let Ft=v/650,Ot=T($*40,Q*40,st*40)*6,tt=($*k+st*B+Q*.3)*Ft+Ot,St=tt-Math.floor(tt);Jt=Math.pow(St<.7?St/.7:(1-St)/.3,1.6)*38*L}lt=ot*g*.55+ut*g*.7-At*g*.5+It+Jt+W($,Q,st,1200,O,.03),nt=L,dt=At;break}case"lava":{let ot=z(x,$,Q,st,1.4,8,.5,O)*g*.35,ut=X(y,$,Q,st,3,6,O)*g*.2,pt=0;for(let It=0;It<3;It++){let L=9*Math.pow(2.4,It);if(v/L<O*3)break;let Jt=Math.abs(R($*L+It*11,Q*L,st*L));pt=Math.max(pt,(1-l(0,.05/(1+It*.3),Jt))/(1+It*.6))}let At=rt($,Q,st,O,A,.5,H);lt=ot+ut-pt*60+At+W($,Q,st,900,O,.04),nt=pt,dt=l(-.3,.5,T($*3,Q*3,st*3));break}case"venus":{let ot=z(x,$,Q,st,1,9,.5,O),ut=X(y,$,Q,st,2.2,6,O)*l(.1,.5,ot),pt=rt($,Q,st,O,A,.6,H);lt=ot*g*.45+ut*g*.6+pt+W($,Q,st,1e3,O,.03),nt=l(-.2,.4,ot),dt=ut;break}case"titan":{let ot=z(x,$,Q,st,1.2,9,.5,O),ut=Math.abs(Q),pt=0,At=1-l(.25,.5,ut);if(v/3e3>O*.5){let L=v/900,Jt=T($*30,Q*30,st*30)*4,Ft=($*k+st*B)*L+Jt,Ot=Ft-Math.floor(Ft);pt=Math.pow(Ot<.75?Ot/.75:(1-Ot)/.25,1.5)*60*At}let It=rt($,Q,st,O,A,.5,H);lt=ot*g*.5-l(.55,.85,ut)*g*.3+pt+It+W($,Q,st,900,O,.02),nt=At,dt=0;break}case"terran":{let ot=T($*1.5,Q*1.5,st*1.5)*.35,ut=z(x,$+ot,Q-ot,st+ot,1.15,10,.52,O)+M,pt=l(-.02,.18,ut),At=X(y,$,Q,st,2.4,8,O)*l(.08,.45,ut),It=z(R,$,Q,st,6,7,.5,O)*.12;ut<0?lt=ut*g*.9:lt=ut*g*.35+At*g*.9+It*g*pt,lt+=rt($,Q,st,O,A,.3,H)*pt,lt+=W($,Q,st,900,O,.025)*pt,nt=.5+.5*z(T,$*1.7,Q*1.7,st*1.7,1,5,.55,O),dt=At;break}default:lt=z(x,$,Q,st,1.3,8,.5,O)*g*.4}return K&&(K[0]=lt,K[1]=nt,K[2]=dt),lt}return{R:v,amp:g,type:m,seaLevel:w,life:C,sample:ct,height($,Q,st){let O=ct($,Q,st,.6,null);return w!==null?Math.max(O,w):O}}}function d(p,v,g,m,_,x){let y=p.R,R=2/(1<<g),T=-1+m*R,A=-1+_*R,I=x+3,w=y*(Math.PI/2)*(R/2)/x,M=w*1.6,C=new Float64Array(I*I*3),k=new Float64Array(I*I*3),B=new Float32Array(I*I),z=new Float32Array(I*I*2),X=[0,0,0],W=[0,0,0],it=p.seaLevel,H=1e9,rt=-1e9;for(let tt=0;tt<I;tt++)for(let St=0;St<I;St++){let vt=T+(St-1)/x*R,E=A+(tt-1)/x*R;e(v,vt,E,X),p.sample(X[0],X[1],X[2],M,W);let S=W[0],U=it!==null&&S<it?it:S,Z=y+U,j=tt*I+St;C[j*3]=X[0]*Z,C[j*3+1]=X[1]*Z,C[j*3+2]=X[2]*Z,k[j*3]=X[0],k[j*3+1]=X[1],k[j*3+2]=X[2],B[j]=S,z[j*2]=W[1],z[j*2+1]=W[2],St>0&&tt>0&&St<I-1&&tt<I-1&&(U<H&&(H=U),U>rt&&(rt=U))}let ct=x+1,$=ct*ct,Q=4*ct,st=$+Q,O=new Float32Array(st*3),K=new Float32Array(st*3),lt=new Float32Array(st),nt=new Float32Array(st*2),dt=new Float32Array(st*3),ot=((x>>1)+1)*I+(x>>1)+1,ut=C[ot*3],pt=C[ot*3+1],At=C[ot*3+2],It=w*1.5+(rt-H)*.03;function L(tt,St,vt){let E=k[St*3],S=k[St*3+1],U=k[St*3+2];O[tt*3]=C[St*3]-ut-E*vt,O[tt*3+1]=C[St*3+1]-pt-S*vt,O[tt*3+2]=C[St*3+2]-At-U*vt,dt[tt*3]=E,dt[tt*3+1]=S,dt[tt*3+2]=U,lt[tt]=B[St],nt[tt*2]=z[St*2],nt[tt*2+1]=z[St*2+1]}function Jt(tt,St,vt){let E=St*I+tt-1,S=St*I+tt+1,U=(St-1)*I+tt,Z=(St+1)*I+tt,j=C[S*3]-C[E*3],Y=C[S*3+1]-C[E*3+1],Rt=C[S*3+2]-C[E*3+2],ft=C[Z*3]-C[U*3],Tt=C[Z*3+1]-C[U*3+1],qt=C[Z*3+2]-C[U*3+2],at=Y*qt-Rt*Tt,Mt=Rt*ft-j*qt,Ut=j*Tt-Y*ft,Bt=1/Math.sqrt(at*at+Mt*Mt+Ut*Ut);at*=Bt,Mt*=Bt,Ut*=Bt;let bt=St*I+tt;it!==null&&B[bt]<it&&(at=k[bt*3],Mt=k[bt*3+1],Ut=k[bt*3+2]),K[vt*3]=at,K[vt*3+1]=Mt,K[vt*3+2]=Ut}for(let tt=0;tt<ct;tt++)for(let St=0;St<ct;St++){let vt=tt*ct+St;L(vt,(tt+1)*I+(St+1),0),Jt(St+1,tt+1,vt)}let Ft=$,Ot=[tt=>[tt,0],tt=>[tt,x],tt=>[0,tt],tt=>[x,tt]];for(let tt of Ot)for(let St=0;St<ct;St++){let[vt,E]=tt(St);L(Ft,(E+1)*I+(vt+1),It),Jt(vt+1,E+1,Ft),Ft++}return{pos:O,nor:K,hgt:lt,mat:nt,unit:dt,center:[ut,pt,At],minH:H,maxH:rt,spacing:w}}function f(p){let v=p+1,g=[];for(let x=0;x<p;x++)for(let y=0;y<p;y++){let R=x*v+y,T=R+1,A=R+v,I=A+1;g.push(R,T,A,T,I,A)}let m=v*v,_=[x=>x,x=>p*v+x,x=>x*v,x=>x*v+p];for(let x=0;x<4;x++)for(let y=0;y<p;y++){let R=_[x](y),T=_[x](y+1),A=m+x*v+y,I=A+1;g.push(R,A,T,T,A,I),g.push(R,T,A,T,I,A)}return new Uint32Array(g)}return{FACES:s,cubeToSphere:e,makeGenerator:u,buildPatch:d,buildIndex:f}}var rr=32,Ps=uc(),dc=null;function Uv(){return dc||(dc=new he(Ps.buildIndex(rr),1)),dc}var pc=class{constructor(){this.workers=[],this.queue=[],this.inflight=new Map,this.nextId=1,this.inits=new Map,this.syncGens=new Map;let t=Math.max(1,Math.min(4,(navigator.hardwareConcurrency||4)-1));try{let e=`const LIB = (${uc.toString()})();
const gens = new Map();
onmessage = (e) => {
  const m = e.data;
  if (m.type === 'init') { gens.set(m.planet, LIB.makeGenerator(m.params)); return; }
  if (m.type === 'drop') { gens.delete(m.planet); return; }
  if (m.type === 'build') {
    const g = gens.get(m.planet);
    if (!g) { postMessage({ id: m.id, missing: true }); return; }
    const out = LIB.buildPatch(g, m.face, m.level, m.ix, m.iy, m.N);
    out.id = m.id;
    postMessage(out, [out.pos.buffer, out.nor.buffer, out.hgt.buffer, out.mat.buffer, out.unit.buffer]);
  }
};`,n=URL.createObjectURL(new Blob([e],{type:"text/javascript"}));for(let i=0;i<t;i++){let r=new Worker(n);r.busy=0,r.onmessage=a=>this.onResult(r,a.data),r.onerror=()=>{this.failed=!0},this.workers.push(r)}}catch{this.workers=[]}}init(t,e){this.inits.set(t,e);for(let n of this.workers)n.postMessage({type:"init",planet:t,params:e});this.workers.length||this.syncGens.set(t,Ps.makeGenerator(e))}drop(t){this.inits.delete(t),this.syncGens.delete(t);for(let e of this.workers)e.postMessage({type:"drop",planet:t});this.queue=this.queue.filter(e=>e.planet!==t);for(let[e,n]of this.inflight)n.planet===t&&(n.cancelled=!0)}request(t){this.queue.push(t)}pump(){if(this.queue.length)if(this.queue.sort((t,e)=>e.priority-t.priority),this.workers.length&&!this.failed){for(let t of this.workers)for(;t.busy<2&&this.queue.length;){let e=this.queue.shift();if(e.cancelled)continue;let n=this.nextId++;e.id=n,e.worker=t,this.inflight.set(n,e),t.busy++,t.postMessage({type:"build",id:n,planet:e.planet,face:e.face,level:e.level,ix:e.ix,iy:e.iy,N:rr})}for(let t of this.queue)t.node.pending=!1;this.queue.length=0}else{let t=performance.now();for(;this.queue.length&&performance.now()-t<6;){let e=this.queue.shift();if(e.cancelled)continue;let n=this.syncGens.get(e.planet);n||(n=Ps.makeGenerator(this.inits.get(e.planet)),this.syncGens.set(e.planet,n)),e.done(Ps.buildPatch(n,e.face,e.level,e.ix,e.iy,rr))}for(let e of this.queue)e.node.pending=!1;this.queue.length=0}}onResult(t,e){t.busy=Math.max(0,t.busy-1);let n=this.inflight.get(e.id);if(this.inflight.delete(e.id),!!n){if(n.cancelled){n.node.pending=!1;return}if(e.missing){let i=this.inits.get(n.planet);i&&t.postMessage({type:"init",planet:n.planet,params:i}),n.node.pending=!1;return}n.done(e)}}},fc=null;function Nv(){return fc||(fc=new pc),fc}var Wi=class{constructor(t,e,n,i,r){this.face=t,this.level=e,this.ix=n,this.iy=i,this.parent=r,this.key=`${t}/${e}/${n}/${i}`,this.children=null,this.data=null,this.mesh=null,this.pending=!1,this.lastUsed=0;let a=2/(1<<e),o=Ps.cubeToSphere(t,-1+(n+.5)*a,-1+(i+.5)*a,[0,0,0]);this.unitCenter=o,this.arc=Math.PI/2*(a/2)*1.25}},Fv=0,Ta=class{constructor(t,e,n){this.params=t,this.R=t.radius,this.material=e,this.group=n,this.planetKey=`p${++Fv}`,this.pool=Nv(),this.pool.init(this.planetKey,t),this.gen=Ps.makeGenerator(t),this.roots=[];for(let i=0;i<6;i++)this.roots.push(new Wi(i,0,0,0,null));this.frame=0,this.loaded=0,this.budget=900,this.maxLevel=Math.max(4,Math.min(19,Math.floor(Math.log2(this.R*.785/(1.2*rr))))),this.threshold=5,this.drawn=0,this.minPossible=-t.amp*1.4+(this.gen.seaLevel??-1e9)*0;for(let i of this.roots)this.requestNode(i,1e9)}get ready(){return this.roots.every(t=>t.data)}requestNode(t,e){t.pending||t.data||(t.pending=!0,this.pool.request({planet:this.planetKey,face:t.face,level:t.level,ix:t.ix,iy:t.iy,priority:e,node:t,done:n=>this.onData(t,n)}))}onData(t,e){if(t.pending=!1,this.disposed)return;let n=new ye;n.setAttribute("position",new he(e.pos,3)),n.setAttribute("normal",new he(e.nor,3)),n.setAttribute("aHeight",new he(e.hgt,1)),n.setAttribute("aMat",new he(e.mat,2)),n.setAttribute("aUnit",new he(e.unit,3)),n.setIndex(Uv());let i=Math.max(this.R*t.arc*.75,e.maxH-e.minH);n.boundingSphere=new mi(new P,i);let r=new Et(n,this.material);r.position.set(e.center[0],e.center[1],e.center[2]),r.frustumCulled=!1,r.visible=!1,r.matrixAutoUpdate=!0,this.group.add(r),t.mesh=r,t.data={center:e.center,minH:e.minH,maxH:e.maxH,radius:i},t.lastUsed=this.frame,this.loaded++}update(t,e,n,i){this.frame++,this.drawn=0,this.cam=t,this.frustum=e,this.bodyToCam=n,this.projScale=i;let r=Math.hypot(t[0],t[1],t[2]),a=this.R-this.params.amp*1.2;this.horizonBase=r>a?Math.sqrt(r*r-a*a):0,this.Rm=a,this.camD=r;for(let o of this.visibleList||[])o.visible=!1;this.visibleList=[];for(let o of this.roots)this.select(o);this.evict(),this.pool.pump()}nodeBounds(t){if(t.data){let r=t.data.center;return{x:r[0],y:r[1],z:r[2],r:t.data.radius,top:this.R+t.data.maxH}}let e=t.unitCenter,n=t.parent?.data,i=this.R+(n?n.maxH:this.params.amp);return{x:e[0]*this.R,y:e[1]*this.R,z:e[2]*this.R,r:this.R*t.arc*.75+this.params.amp,top:i}}visible(t){let e=this.cam,n=t.x-e[0],i=t.y-e[1],r=t.z-e[2],a=Math.sqrt(n*n+i*i+r*r);if(this.camD>this.Rm){let l=Math.max(t.top,this.Rm+1),c=this.horizonBase+Math.sqrt(l*l-this.Rm*this.Rm);if(a-t.r>c)return{vis:!1,dist:a}}let o=this.bodyToCam(n,i,r);for(let l of this.frustum.planes)if(l.normal.x*o[0]+l.normal.y*o[1]+l.normal.z*o[2]+l.constant<-t.r)return{vis:!1,dist:a};return{vis:!0,dist:a}}select(t){let e=this.nodeBounds(t),{vis:n,dist:i}=this.visible(e);if(t.lastUsed=this.frame,!n)return!t.data&&t.level===0&&this.requestNode(t,1e8),!1;let r=Math.max(i-e.r*.5,1),a=this.R*t.arc/rr/r*this.projScale;if(a>this.threshold&&t.level<this.maxLevel){if(!t.children){let c=t.level+1,h=t.ix*2,u=t.iy*2;t.children=[new Wi(t.face,c,h,u,t),new Wi(t.face,c,h+1,u,t),new Wi(t.face,c,h,u+1,t),new Wi(t.face,c,h+1,u+1,t)]}let l=!0;for(let c of t.children)c.data||(l=!1,this.requestNode(c,a));if(l){for(let c of t.children)this.select(c);return!0}}return t.data?(t.mesh.visible=!0,this.visibleList.push(t.mesh),this.drawn++):this.requestNode(t,a+1e6),!0}evict(){if(this.loaded<=this.budget)return;let t=[],e=r=>{if(r.data&&r.level>0&&this.frame-r.lastUsed>30&&t.push(r),r.children)for(let a of r.children)e(a)};for(let r of this.roots)e(r);t.sort((r,a)=>r.lastUsed-a.lastUsed);let n=0;for(;this.loaded>this.budget*.8&&n<t.length;)this.freeNode(t[n++]);let i=r=>{if(!r.children)return!r.data&&!r.pending;let a=!0;for(let o of r.children)i(o)||(a=!1);return a&&this.frame-r.lastUsed>120&&(r.children=null),a&&!r.data&&!r.pending};for(let r of this.roots)i(r)}freeNode(t){t.mesh&&(this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh=null),t.data&&this.loaded--,t.data=null}dispose(){this.disposed=!0,this.pool.drop(this.planetKey);let t=e=>{this.freeNode(e),e.children&&e.children.forEach(t)};this.roots.forEach(t)}heightAt(t,e,n){let i=Math.hypot(t,e,n);return this.gen.height(t/i,e/i,n/i)}};var Ov={barren:0,ice:1,desert:2,lava:3,venus:4,titan:5,terran:6},Bv=`
#include <common>
#include <logdepthbuf_pars_vertex>
attribute float aHeight;
attribute vec2 aMat;
attribute vec3 aUnit;
uniform vec3 uPatchOffset;
varying vec3 vWorldPos;
varying vec3 vNormalW;
varying vec3 vUpW;
varying vec3 vUnit;
varying vec3 vDetail;
varying float vH;
varying vec2 vMat;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vUpW = normalize(mat3(modelMatrix) * aUnit);
  vUnit = aUnit;
  vDetail = position + uPatchOffset;
  vH = aHeight;
  vMat = aMat;
  gl_Position = projectionMatrix * viewMatrix * wp;
  #include <logdepthbuf_vertex>
}
`,kv=`
#include <common>
#include <logdepthbuf_pars_fragment>
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uFillDir;
uniform vec3 uFillColor;
uniform vec3 uAmbient;
uniform vec3 uLo;
uniform vec3 uHi;
uniform vec3 uAcc;
uniform int uType;
uniform float uSea;
uniform float uAmp;
uniform float uRadius;
uniform float uLife;
uniform float uLunar;
uniform float uTime;
uniform float uProj;
uniform vec3 uSpotPos;
uniform vec3 uSpotDir;
uniform vec3 uSpotColor;
uniform float uSpotCos;
varying vec3 vWorldPos;
varying vec3 vNormalW;
varying vec3 vUpW;
varying vec3 vUnit;
varying vec3 vDetail;
varying float vH;
varying vec2 vMat;
${Ln}
${ya}
${_a}

// thin bright-or-dark lines (ice lineae, lava cracks), anti-aliased and faded by scale
float lineae(vec3 u, float f0, float w0, float dist) {
  float c = 0.0;
  for (int i = 0; i < 3; i++) {
    float f = f0 * pow(2.4, float(i));
    vec3 q = u * f + float(i) * 11.0;
    q += 0.25 * vec3(snoise(u * 2.1 + float(i)), snoise(u * 2.1 + 5.0), snoise(u * 2.1 - 3.0));
    float n = abs(snoise(q));
    float w = max(w0 / (1.0 + float(i) * 0.3), fwidth(n) * 1.2);
    float px = (uRadius / f) / dist * uProj;
    c = max(c, (1.0 - smoothstep(0.0, w, n)) / (1.0 + float(i) * 0.6) * smoothstep(2.0, 8.0, px));
  }
  return c;
}

float layer(vec3 p, float waveM, float dist) {
  // noise of a given wavelength, faded out before it can alias
  float px = waveM / dist * uProj;
  float w = smoothstep(1.5, 5.0, px);
  return w > 0.0 ? snoise(p) * w : 0.0;
}

void main() {
  #include <logdepthbuf_fragment>
  vec3 N = normalize(vNormalW);
  vec3 up = normalize(vUpW);
  float dist = length(vWorldPos);
  vec3 V = -vWorldPos / dist;
  float slope = 1.0 - clamp(dot(N, up), 0.0, 1.0);
  float h = vH;
  vec2 m = vMat;
  float lat = abs(vUnit.y);

  // detail: far layers from the unit sphere, near layers from a local anchor
  float dFar = layer(vUnit * 90.0, uRadius / 90.0, dist) * 0.5 + layer(vUnit * 900.0, uRadius / 900.0, dist) * 0.3
             + layer(vUnit * 7000.0, uRadius / 7000.0, dist) * 0.2;
  float dNear = layer(vDetail * 0.06, 16.0, dist) * 0.5 + layer(vDetail * 0.4, 2.5, dist) * 0.35 + layer(vDetail * 2.2, 0.45, dist) * 0.25;
  float detail = dFar + dNear;

  vec3 albedo = uLo;
  vec3 emissive = vec3(0.0);
  float waterMask = 0.0;
  float depth = uSea - h;
  float hn = clamp(0.5 + h / (uAmp * 1.6), 0.0, 1.0);

  if (uType == 0) {            // airless rock
    albedo = mix(uLo, uHi, clamp(hn * 0.7 + 0.25 + detail * 0.18, 0.0, 1.0));
    albedo = mix(albedo, uAcc, m.x * 0.85);
    albedo = mix(albedo, uHi * 1.35, clamp(m.y, 0.0, 1.0) * 0.55);
    albedo *= 1.0 - slope * 0.12 + slope * slope * 0.25;
  } else if (uType == 1) {     // ice
    albedo = mix(uLo, uHi, clamp(0.55 + detail * 0.25 + m.y * 0.3, 0.0, 1.0));
    float lin = mix(lineae(vUnit + 3.7, 3.5, 0.06, dist), clamp(m.x, 0.0, 1.0), smoothstep(8000.0, 2500.0, dist));
    albedo = mix(albedo, uAcc, clamp(lin * 1.1, 0.0, 0.85));
    albedo = mix(albedo, uLo * 0.8, slope * 0.4);
  } else if (uType == 2) {     // arid
    vec3 sand = mix(uHi, uHi * vec3(1.05, 0.95, 0.85), detail * 0.5 + 0.5);
    vec3 rock = mix(uLo, uAcc, clamp(0.5 + detail * 0.6, 0.0, 1.0));
    float sandAmt = clamp(m.x * 1.3 - slope * 2.5 + detail * 0.2, 0.0, 1.0);
    albedo = mix(rock, sand, sandAmt);
    albedo = mix(albedo, uAcc * 0.8, m.y * 0.5);
    albedo = mix(albedo, vec3(0.85, 0.82, 0.8), smoothstep(0.86, 0.95, lat + detail * 0.04) * 0.85);
  } else if (uType == 3) {     // molten
    albedo = mix(uLo, uHi, clamp(0.4 + detail * 0.4 + m.y * 0.3, 0.0, 1.0));
    float crack = mix(lineae(vUnit, 9.0, 0.05, dist), clamp(m.x, 0.0, 1.0), smoothstep(6000.0, 1500.0, dist));
    vec3 hot = mix(vec3(1.0, 0.22, 0.03), vec3(1.0, 0.6, 0.2), crack);
    float sunE = max(dot(uSunColor, vec3(0.2126, 0.7152, 0.0722)), 0.0);
    // glow that reads at night and stays subtle in full daylight
    float glowK = 0.004 + sunE * 0.05;
    emissive = hot * crack * crack * glowK * 5.0 + vec3(1.0, 0.2, 0.03) * smoothstep(0.45, 0.0, hn) * glowK * 0.4;
    albedo *= 1.0 - crack * 0.7;
  } else if (uType == 4) {     // greenhouse
    albedo = mix(uLo, uHi, clamp(0.35 + detail * 0.3 + m.x * 0.4, 0.0, 1.0));
    albedo = mix(albedo, uAcc, m.y * 0.4);
  } else if (uType == 5) {     // hazy cryogenic
    albedo = mix(uLo, uHi, clamp(0.45 + detail * 0.35, 0.0, 1.0));
    albedo = mix(albedo, uLo * 0.55, m.x * 0.5);
    if (depth > 0.0) waterMask = 1.0;
  } else {                     // temperate
    vec3 soil = mix(uLo, uHi, clamp(0.45 + detail * 0.35, 0.0, 1.0));
    vec3 rock = mix(uLo * 0.9, uHi * 0.85, clamp(0.5 + detail * 0.5, 0.0, 1.0));
    vec3 veg = mix(vec3(0.03, 0.075, 0.025), vec3(0.11, 0.13, 0.045), clamp(m.x + detail * 0.3, 0.0, 1.0));
    // dry belts in the subtropics, green where it is wet
    vec3 dry = mix(vec3(0.42, 0.33, 0.2), vec3(0.55, 0.45, 0.3), clamp(0.5 + detail, 0.0, 1.0));
    soil = mix(soil, dry, smoothstep(0.45, 0.25, m.x) * (1.0 - smoothstep(0.55, 0.7, lat)));
    float vegAmt = uLife * smoothstep(0.36, 0.56, m.x + detail * 0.08) * (1.0 - smoothstep(0.35, 0.6, slope))
                 * (1.0 - smoothstep(uAmp * 0.25, uAmp * 0.45, h)) * (1.0 - smoothstep(0.62, 0.78, lat));
    albedo = mix(soil, veg, vegAmt);
    albedo = mix(albedo, rock, smoothstep(0.3, 0.6, slope));
    float beach = (1.0 - smoothstep(4.0, 40.0, h)) * (1.0 - smoothstep(0.2, 0.4, slope));
    albedo = mix(albedo, vec3(0.42, 0.38, 0.3), beach * 0.7);
    float snow = max(smoothstep(0.72, 0.84, lat + detail * 0.05), smoothstep(uAmp * 0.5, uAmp * 0.7, h + detail * 300.0));
    albedo = mix(albedo, vec3(0.82, 0.84, 0.86), snow * (1.0 - smoothstep(0.55, 0.8, slope)));
    if (depth > 0.0) waterMask = 1.0;
  }
  albedo = max(albedo, vec3(0.0));

  // ------------- lighting -------------
  vec3 L = uSunDir;
  float NdL = dot(N, L);
  float mu0 = max(NdL, 0.0);
  float mu = max(dot(N, V), 0.0);
  float lommel = 2.0 * mu0 / (mu0 + mu + 1e-3);
  float diffuse = mix(mu0, lommel * 0.5, uLunar);
  // mountains catch light after the terminator, but the far side of the planet is dark
  float hgt = max(h + uAmp, 0.0);
  float horizon = smoothstep(-0.015 - sqrt(2.0 * hgt / uRadius), 0.02, dot(up, L));
  float shadow = horizon * eclipse(vWorldPos, L);

  vec3 sunCol = uSunColor;
  vec3 sky = vec3(0.0);
  vec3 pPlanet = (vWorldPos - aCenter) / aR;
  if (aEnabled > 0.5) {
    vec3 tSun = aTransmittanceSun(pPlanet * (1.0 + 2e-6));
    sunCol *= tSun;
    float dayAmt = smoothstep(-0.25, 0.3, dot(up, L));
    vec3 tint = aBetaR / max(max(aBetaR.r, max(aBetaR.g, aBetaR.b)), 1e-6) + aBetaM / max(max(aBetaM.r, max(aBetaM.g, aBetaM.b)), 1e-6) * 0.6;
    float tau = clamp((aBetaR.b + aBetaM.g) * aHR * 1.0, 0.0, 3.0);
    sky = uSunColor * tint * (1.0 - exp(-tau)) * 0.35 * dayAmt;
  }
  vec3 E = sunCol * diffuse * shadow + uFillColor * max(dot(N, uFillDir), 0.0) + sky * (0.6 + 0.4 * dot(N, up)) + uAmbient;

  // floodlight
  vec3 toF = vWorldPos - uSpotPos;
  float dS = length(toF);
  vec3 sdir = toF / max(dS, 1e-3);
  float cone = smoothstep(uSpotCos, mix(uSpotCos, 1.0, 0.35), dot(sdir, uSpotDir));
  E += uSpotColor * cone * max(dot(N, -sdir), 0.0) / (dS * dS + 4.0);

  vec3 col = albedo / PI * E + emissive;

  if (waterMask > 0.5) {
    vec3 deep = uType == 5 ? vec3(0.006, 0.004, 0.002) : vec3(0.004, 0.018, 0.035);
    vec3 shallow = uType == 5 ? vec3(0.02, 0.014, 0.008) : vec3(0.02, 0.07, 0.08);
    vec3 wcol = mix(shallow, deep, 1.0 - exp(-depth / 60.0));
    vec3 wn = up;
    float near = smoothstep(4000.0, 200.0, dist);
    if (near > 0.0) {
      vec3 q = vDetail * 0.08 + vec3(0.0, uTime * 0.4, 0.0);
      wn = normalize(up + (vec3(snoise(q), snoise(q + 7.1), snoise(q + 13.7)) - up * 0.0) * 0.06 * near);
    }
    float NdLw = max(dot(wn, L), 0.0);
    vec3 Hh = normalize(L + V);
    float rough = mix(0.22, 0.06, near);
    float a2 = rough * rough * rough * rough;
    float nh = max(dot(wn, Hh), 0.0);
    float dd = nh * nh * (a2 - 1.0) + 1.0;
    float D = a2 / (PI * dd * dd);
    float fres = 0.02 + 0.98 * pow(1.0 - max(dot(wn, V), 0.0), 5.0);
    vec3 spec = sunCol * shadow * D * fres * NdLw * 0.25;
    col = wcol / PI * E + spec + sky * fres * 0.3;
  }

  if (aEnabled > 0.5) {
    vec3 ro = -aCenter / aR;
    vec4 sc = aScatter(ro, -V, dist / aR, 10);
    col = col * sc.a + sc.rgb;
  }
  gl_FragColor = vec4(col, 1.0);
}
`;function Tu(s){let t=s.terrain,e=t.palette,n={uSunDir:{value:new P(1,0,0)},uSunColor:{value:new P(1,1,1)},uFillDir:{value:new P(0,1,0)},uFillColor:{value:new P},uAmbient:{value:new P(4e-4,4e-4,5e-4)},uLo:{value:new P(...e.lo)},uHi:{value:new P(...e.hi)},uAcc:{value:new P(...e.acc)},uType:{value:Ov[t.type]??0},uSea:{value:t.type==="terran"?0:t.type==="titan"?-.32*t.amp:-1e9},uAmp:{value:t.amp},uRadius:{value:s.radius},uLife:{value:t.life?1:0},uLunar:{value:{barren:1,ice:.35,lava:.5,desert:.25}[t.type]??0},uTime:{value:0},uProj:{value:800},uPatchOffset:{value:new P},uSpotPos:{value:new P},uSpotDir:{value:new P(0,0,-1)},uSpotColor:{value:new P},uSpotCos:{value:.9},uOcc:{value:[new jt,new jt,new jt,new jt]},uOccCount:{value:0},uSunAngR:{value:.005},...mc()};return new Qt({vertexShader:Bv,fragmentShader:kv,uniforms:n})}function mc(){return{aCenter:{value:new P},aR:{value:1},aRa:{value:1.02},aBetaR:{value:new P},aBetaM:{value:new P},aHR:{value:.001},aHM:{value:2e-4},aG:{value:.76},aSunDir:{value:new P(1,0,0)},aSunColor:{value:new P(1,1,1)},aEnabled:{value:0}}}function gc(s,t){let e=t.atmosphere;if(!e){s.aEnabled.value=0;return}let n=t.radius;s.aR.value=n,s.aRa.value=1+e.top/n;let i=e.H/n,r=e.Hm/n;s.aHR.value=i,s.aHM.value=r,s.aBetaR.value.set(e.tauR[0]/i,e.tauR[1]/i,e.tauR[2]/i);let a=e.mieColor;s.aBetaM.value.set(e.tauM*a[0]/r,e.tauM*a[1]/r,e.tauM*a[2]/r),s.aG.value=e.g,s.aEnabled.value=1}var hn=Math.PI*2;function Ue(s,t){return[s[3]*t[0]+s[0]*t[3]+s[1]*t[2]-s[2]*t[1],s[3]*t[1]-s[0]*t[2]+s[1]*t[3]+s[2]*t[0],s[3]*t[2]+s[0]*t[1]-s[1]*t[0]+s[2]*t[3],s[3]*t[3]-s[0]*t[0]-s[1]*t[1]-s[2]*t[2]]}function Je(s,t,e,n){let i=Math.sin(n/2);return[s*i,t*i,e*i,Math.cos(n/2)]}function Yt(s,t){let[e,n,i,r]=s,a=r*t[0]+n*t[2]-i*t[1],o=r*t[1]+i*t[0]-e*t[2],l=r*t[2]+e*t[1]-n*t[0],c=-e*t[0]-n*t[1]-i*t[2];return[a*r+c*-e+o*-i-l*-n,o*r+c*-n+l*-e-a*-i,l*r+c*-i+a*-n-o*-e]}function un(s){return[-s[0],-s[1],-s[2],s[3]]}var Aa={barren:[{lo:"#4a4744",hi:"#8b8781",acc:"#2c2a28"},{lo:"#5a5048",hi:"#9c8f80",acc:"#3a332c"},{lo:"#3d3a38",hi:"#77726b",acc:"#26221f"},{lo:"#5f4b3e",hi:"#a08672",acc:"#3b2c22"},{lo:"#545354",hi:"#a3a19f",acc:"#2f2e30"}],ice:[{lo:"#a9b4bb",hi:"#e8ecee",acc:"#8a6f5a"},{lo:"#b8b0a2",hi:"#efe8dc",acc:"#7d5b45"},{lo:"#9fb0bf",hi:"#dfe9f0",acc:"#6a7d8f"}],desert:[{lo:"#6e3b22",hi:"#b8784c",acc:"#4a2817"},{lo:"#7b5a3c",hi:"#c49a6c",acc:"#4f3826"},{lo:"#5b4537",hi:"#a28468",acc:"#3a2a20"},{lo:"#80452c",hi:"#c98d5e",acc:"#5a2e1c"}],lava:[{lo:"#1c1716",hi:"#3a302b",acc:"#ff6a1a"},{lo:"#211a17",hi:"#453832",acc:"#ff8a2a"}],sulfur:[{lo:"#7a5a24",hi:"#d9c27a",acc:"#3a2414"},{lo:"#8a6428",hi:"#e2cf8a",acc:"#4a2c18"}],venus:[{lo:"#5a3d22",hi:"#9a7448",acc:"#3a2814"}],titan:[{lo:"#3a2a1a",hi:"#6e5232",acc:"#120d08"}],terran:[{lo:"#4b4033",hi:"#8c7a63",acc:"#2d3b22"},{lo:"#57493b",hi:"#9a8b76",acc:"#3a3a24"},{lo:"#4a4440",hi:"#8a8178",acc:"#33281f"}]},Jn={cold:["#9fb4b9","#c9d6d2","#7d989f","#e1e6de"],jovian:["#c8a27a","#e9dcc4","#9b6a45","#f2e7d2","#7a4a33"],saturnian:["#d8c49a","#efe2c0","#b39b6e","#e8d5a8"],water:["#e8e6e0","#cfd4d6","#f4f2ea","#b9c1c4"],azure:["#3e6fa8","#5d8cc0","#2b5486","#88aad0"],hot:["#3a2a2a","#5a3a30","#22181a","#7a4a32"],icegiant:["#8fc7d1","#a9d8de","#76b2c0","#c3e4e6"],neptunian:["#3f6fc4","#5a86d4","#2d58a8","#7ea2e0"]};function Hv(s,t){let e=t.pick(s),n=i=>{let r=gn(i),a=.85+.3*t.next();return r.map(o=>pe(o*a,0,1))};return{lo:n(e.lo),hi:n(e.hi),acc:n(e.acc)}}function Ls(s,t,e,n,i){let r=pe(8e3*(9.81/e)*(n/288),3e3,6e4),a=r*9,o=[.0464,.108,.265],l,c,h,u=.76,d=r*.15,f=0;switch(s){case"terran":l=Ma(o,t),c=.02*t,h=[1,1,1];break;case"desert":l=Ma(o,t*.6),c=.25+.6*i.next(),h=[1,.62,.38],d=r*.8,u=.65;break;case"venus":l=[3.2,3,2.2],c=6,h=[1,.86,.55],d=r*1.4,u=.7;break;case"titan":l=[.25,.35,.45],c=3.5,h=[1,.55,.22],d=r*1.2,u=.6;break;case"gas":l=[.08,.12,.2],c=.05,h=[1,1,1];break;default:return null}return{P:t,H:r,Hm:d,top:a,tauR:l,tauM:c,mieColor:h,g:u,sunsetTint:f}}function zv(s){return{kind:"star",name:s.name,radius:s.kind==="blackhole"?s.radius*oc:s.radius*oc,mass:s.mass*vu,lum:s.lum,temp:s.temp,color:s.color,starKind:s.kind,spectral:s.spectral}}function Cu(s,t,e){return s*Math.cbrt(t/(3*e))}function vc(s,t,e,n){let i=s.range(-n,n),r=s.range(0,hn),a=Ue(Je(0,1,0,r),Je(1,0,0,i));return{a:t,q:a,phase0:s.range(0,hn),period:hn*Math.sqrt(t*t*t/(xi*e))}}function Vv(s,t,e,n){if(s>750)return"lava";if(s>400)return t>.6&&!n&&e.chance(.65)?"venus":"barren";if(s>=235&&s<=330&&t>.35&&t<4&&!n){let i=e.next();return i<.4?"terran":i<.7?"desert":"barren"}return s>=170&&s<420&&t>.25?e.chance(.55)?"desert":"barren":s<170&&e.chance(.6)?"ice":"barren"}function Gv(s,t,e){return t?s<60&&e.chance(.6)?Jn.neptunian:Jn.icegiant:s<80?Jn.cold:s<170?e.chance(.6)?Jn.jovian:Jn.saturnian:s<360?Jn.water:s<850?Jn.azure:Jn.hot}function xc(s,t,e,n,i,r,a={}){let o=xi*i/(n*n),l=t.int(1,2**31-1),c=Hv(e==="lava"&&a.moon?Aa.sulfur:Aa[e]||Aa.barren,t),h=null,u=0,d=!1;e==="terran"&&(u=t.range(.5,2.2),h=Ls("terran",u,o,r,t),d=a.life??t.chance(.3)),e==="desert"&&(u=t.logRange(.004,.25),h=Ls("desert",u,o,r,t)),e==="venus"&&(u=t.range(40,95),h=Ls("venus",u,o,r,t)),e==="titan"&&(u=t.range(1.2,1.8),h=Ls("titan",u,o,r,t));let f={barren:.0045,ice:.0022,desert:.0032,lava:.0022,venus:.0018,titan:.0013,terran:.0028}[e],p=pe(n*f*(n<12e5?1.6:1),1500,14e3),v=r+(e==="venus"?420+t.range(0,60):e==="terran"?14*u:e==="titan"?6:0),g={seed:l,type:e,radius:n,amp:p,craters:{barren:1,ice:.45,desert:.45,lava:.05,venus:.08,titan:.12,terran:.06}[e]*t.range(.7,1.2),sea:e==="terran"?t.range(-.18,.1):e==="titan"?-.35:null,mare:e==="barren"?t.range(0,.9):0,life:d,palette:c};return{solid:!0,type:e,radius:n,mass:i,gravity:o,tempK:v,atmosphere:h,pressure:u,terrain:g,life:d,landable:o<26,oceans:g.sea!==null&&e==="terran"}}function Iu(s,t){let e=new xe(Dn(s.seed,11588069)),n=zv(s),i={starData:s,star:n,bodies:[],signals:[],seed:s.seed},r=Math.max(s.lum,1e-5),a=n.mass;if(t?.build)return t.build(i,e,Ru),Au(i),i;let o;switch(s.kind){case"main":o=s.cls==="O"?e.int(0,3):s.cls==="M"?e.int(1,6):e.int(2,9);break;case"giant":o=e.int(1,5);break;case"dwarf":o=e.int(0,3);break;case"brown":o=e.int(0,4);break;case"neutron":o=e.int(0,2);break;default:o=e.int(0,3)}t?.minPlanets&&(o=Math.max(o,t.minPlanets));let l=4.85*Math.sqrt(r),c=Math.max(e.logRange(.12,.45)*Math.sqrt(r),n.radius*6/fe,.012);s.kind==="giant"&&(c=Math.max(c,n.radius*8/fe)*1.5),(s.kind==="brown"||s.kind==="dwarf")&&(c=e.logRange(.004,.02)),(s.kind==="blackhole"||s.kind==="neutron")&&(c=e.logRange(.3,2));for(let h=0;h<o;h++){let u=c;c*=e.range(1.45,2.15);let d=278*Math.pow(r,.25)/Math.sqrt(u),f,p=u>l,v=e.next();if(p&&v<.5&&s.kind!=="brown"){let y=e.logRange(.12,6)*Gi,R=Vi*e.range(.82,1.08)*(d>800?1.25:1);f=Ra(e,!1,R,y,d)}else if(p&&v<.78&&s.kind!=="brown"){let y=e.range(10,24)*We,R=zi*e.range(3.5,4.2);f=Ra(e,!0,R,y,d)}else if(!p&&v<.04&&s.cls!=="M"&&s.kind==="main"){let y=e.logRange(.4,3)*Gi;f=Ra(e,!1,Vi*e.range(1.1,1.4),y,d)}else{let y=p?e.logRange(.005,.6):e.logRange(.02,4.5),R=zi*Math.pow(y,y<1?.3:.27)*e.range(.95,1.05),T=Vv(d,y,e,!1);f=xc(i,e,T,R,y*We,d)}f.kind="planet",f.parent=-1,f.index=i.bodies.length,f.name=`${s.name} ${Su(h)}`,f.orbit=vc(e,u*fe,a,.06),f.eqTemp=d,Pu(f,e,u<.11*Math.sqrt(r)||s.kind==="brown"),i.bodies.push(f);let g=f.index,m=Cu(f.orbit.a,f.mass,a),_=0;f.type==="gas"||f.type==="icegiant"?_=e.int(1,f.type==="gas"?5:3):f.radius>3e6&&e.chance(.35)&&(_=e.int(1,2));let x=f.radius*e.range(2.8,4.5);f.rings&&(x=Math.max(x,f.rings.outer*1.25));for(let y=0;y<_&&!(x>m*.35);y++){let R=f.type==="gas"||f.type==="icegiant",T=R?e.logRange(.0015,.03):e.logRange(4e-4,.012),A=zi*Math.pow(T,.3)*e.range(.95,1.08),I=d<170&&e.chance(.65)?"ice":"barren";R&&y===0&&e.chance(.25)&&(I="lava"),R&&d<130&&T>.012&&e.chance(.3)&&(I="titan");let w=I==="lava"?900:d*.98,M=xc(i,e,I,A,T*We,w,{moon:!0});M.kind="moon",M.parent=g,M.index=i.bodies.length,M.name=`${f.name} ${bu(y)}`,M.orbit=vc(e,x,f.mass,.04),M.eqTemp=d,M.spin={locked:!0,tilt:[0,0,0,1],period:M.orbit.period,phase0:0},i.bodies.push(M),x*=e.range(1.5,2.3)}}return t?.after&&t.after(i,e,Ru),Au(i),Wv(i,e,t),i}function Ra(s,t,e,n,i){let r=Gv(i,t,s).map(gn),a=xi*n/(e*e),o={solid:!1,type:t?"icegiant":"gas",radius:e,mass:n,gravity:a,tempK:i,landable:!1,atmosphere:Ls("gas",1,a,Math.max(i,60),s),gas:{seed:s.int(1,2**31-1),palette:r,bands:t?s.range(4,9):s.range(10,22),turbulence:t?s.range(.15,.4):s.range(.5,1),storms:s.range(0,1),glow:i>850?pe((i-850)/900,0,1):0}};o.atmosphere.top=e*.012,o.atmosphere.H=o.atmosphere.top/8,o.atmosphere.Hm=o.atmosphere.H*.5;let l=ac(r[1],[.6,.75,1],t?.6:.35);if(o.atmosphere.tauR=Ma([.15/l[0],.15/l[1],.15/l[2]],.6).map((c,h)=>c*[.5,.8,1.4][h]),s.chance(t?.3:.38)){let c=e*s.range(1.22,1.5),h=e*s.range(1.85,2.6);o.rings={inner:c,outer:h,seed:s.int(1,2**31-1),color:i<170?ac(gn("#d9cfbf"),gn("#b8a58a"),s.next()):gn("#6b5f55"),opacity:t?s.range(.15,.5):s.range(.5,.95)}}return o}function Pu(s,t,e){let n=t.chance(.06)?t.range(.5,1.6):t.range(0,.5),i=Ue(Je(0,1,0,t.range(0,hn)),Je(1,0,0,n));if(e)s.spin={locked:!0,tilt:[0,0,0,1],period:s.orbit.period,phase0:0};else{let r=s.solid?t.logRange(9,90)*3600:t.range(9,18)*3600;s.spin={locked:!1,tilt:i,period:t.chance(.1)?-r:r,phase0:t.range(0,hn),tiltAngle:n}}}function Au(s){for(let t of s.bodies){let e=t.parent<0?s.star.mass:s.bodies[t.parent].mass;t.soi=Math.max(t.radius*3,t.orbit.a*Math.pow(t.mass/e,.4)),t.parent>=0&&(t.soi=Math.min(t.soi,t.orbit.a*.45)),t.children=s.bodies.filter(n=>n.parent===t.index).map(n=>n.index),t.id=`${s.starData.id}/${t.index}`}s.extent=s.bodies.reduce((t,e)=>Math.max(t,e.parent<0?e.orbit.a:0),0)||fe}function Wv(s,t,e){let n=s.bodies;if(!n.length)return;let i=n.filter(a=>a.solid&&a.landable&&a.type!=="venus"),r=t.next();if(!e?.noRandomSignals){if(r<.11){let a=t.pick(n);s.signals.push(yc("probe",a,t))}else if(r<.16&&i.length)s.signals.push(_c("wreck",t.pick(i),t));else if(r<.185&&i.length)s.signals.push(_c("monolith",t.pick(i),t));else if(r<.2){let a=n.filter(o=>o.kind==="planet").sort((o,l)=>l.radius-o.radius)[0];a&&s.signals.push(yc("ring",a,t,t.range(1.8,3.2)))}}}function yc(s,t,e,n){let i=n??e.range(1.12,1.6),r=t.radius*i+(t.rings,0);return{type:s,body:t.index,placement:"orbit",orbit:{a:t.rings&&i<t.rings.outer/t.radius+.1?t.rings.outer*1.15:r,inc:e.range(-.5,.5),phase0:e.range(0,hn),lan:e.range(0,hn)},seed:e.int(1,2**31-1)}}function _c(s,t,e,n,i){return{type:s,body:t.index,placement:"surface",lat:n??e.range(-.9,.9),lon:i??e.range(-Math.PI,Math.PI),seed:e.int(1,2**31-1)}}var Ru={makeSolid:xc,makeGas:Ra,makeOrbit:vc,spinFor:Pu,orbitSignal:yc,surfaceSignal:_c,hillRadius:Cu,PAL:Aa,GAS_PALETTES:Jn,atmosphere:Ls};function Ds(s,t,e,n=[0,0,0]){let i=s.bodies[t],r=i.orbit,a=r.phase0+hn*e/r.period,o=Yt(r.q,[r.a*Math.cos(a),0,r.a*Math.sin(a)]);if(i.parent>=0){let l=Ds(s,i.parent,e);n[0]=l[0]+o[0],n[1]=l[1]+o[1],n[2]=l[2]+o[2]}else n[0]=o[0],n[1]=o[1],n[2]=o[2];return n}function Lu(s,t,e){let i=Ds(s,t,e-1),r=Ds(s,t,e+1);return[(r[0]-i[0])/2,(r[1]-i[1])/2,(r[2]-i[2])/2]}function ar(s,t,e){let n=s.bodies[t],i=n.spin;if(i.locked){let r=n.orbit,a=r.phase0+hn*e/r.period;return Ue(r.q,Je(0,1,0,Math.PI-a))}return Ue(i.tilt,Je(0,1,0,i.phase0+hn*e/i.period))}function Du(s,t){let e=s.bodies[t],n=hn/e.spin.period,i=e.spin.locked?Yt(e.orbit.q,[0,-1,0]):Yt(e.spin.tilt,[0,1,0]);return[i[0]*n,i[1]*n,i[2]*n]}function Uu(s,t,e,n){let i=s.bodies[t.body],r=n||Ds(s,t.body,e);if(t.placement==="orbit"){let c=t.orbit,h=hn*Math.sqrt(c.a**3/(xi*i.mass))*6e4,u=c.phase0+hn*e/h,d=Ue(Je(0,1,0,c.lan),Je(1,0,0,c.inc)),f=Yt(d,[c.a*Math.cos(u),0,c.a*Math.sin(u)]);return[r[0]+f[0],r[1]+f[1],r[2]+f[2]]}let a=ar(s,t.body,e),o=t.local||Mc(t.lat,t.lon,i.radius),l=Yt(a,o);return[r[0]+l[0],r[1]+l[1],r[2]+l[2]]}function Mc(s,t,e){return[e*Math.cos(s)*Math.cos(t),e*Math.sin(s),e*Math.cos(s)*Math.sin(t)]}var Us={barren:"Airless rock",ice:"Ice world",desert:"Arid world",lava:"Molten world",venus:"Greenhouse world",titan:"Hazy world",terran:"Temperate world",gas:"Gas giant",icegiant:"Ice giant"};var Kn=`#include <common>
#include <logdepthbuf_pars_vertex>
`,Qn=`#include <common>
#include <logdepthbuf_pars_fragment>
`;function Nu(s){let t=.2126*s[0]+.7152*s[1]+.0722*s[2];return[s[0]/t,s[1]/t,s[2]/t]}var qv=`${Kn}
varying vec3 vObj; varying vec3 vN; varying vec3 vV;
void main() {
  vObj = position;
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vV = -wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
  #include <logdepthbuf_vertex>
}`,Xv=`${Qn}
uniform vec3 uColor; uniform float uRadiance; uniform float uTime; uniform float uGran; uniform float uSpots; uniform float uSeed;
varying vec3 vObj; varying vec3 vN; varying vec3 vV;
${Ln}
void main() {
  #include <logdepthbuf_fragment>
  float mu = clamp(dot(normalize(vN), normalize(vV)), 0.0, 1.0);
  vec3 ld = vec3(1.0) - vec3(0.5, 0.62, 0.78) * (1.0 - pow(mu, 0.75));
  vec3 p = normalize(vObj);
  float t = uTime * 0.004;
  float g1 = snoise(p * uGran + vec3(t, -t, t * 0.7));
  float g2 = snoise(p * uGran * 2.3 + vec3(-t * 1.3, t, 0.0));
  float cells = 1.0 - abs(g1);
  float gran = 0.82 + 0.18 * (cells * 0.7 + g2 * 0.3);
  float spot = smoothstep(0.62, 0.78, fbm3(p * 3.0 + uSeed, 4)) * uSpots;
  float fac = smoothstep(0.4, 0.75, fbm3(p * 5.0 + uSeed * 2.0, 3)) * (1.0 - mu) * 0.25;
  vec3 c = uColor * uRadiance * ld * gran * (1.0 - spot * 0.75) * (1.0 + fac);
  gl_FragColor = vec4(c, 1.0);
}`,$v=`${Kn}
varying vec2 vQ;
uniform float uScale;
void main() {
  vQ = position.xy * uScale;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float r = length(mv.xyz);
  mv.xy += position.xy * uScale * uRad;
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}`.replace("uniform float uScale;","uniform float uScale; uniform float uRad;"),Yv=`${Qn}
uniform vec3 uColor; uniform float uIntensity; uniform float uTime; uniform float uSeed;
varying vec2 vQ;
${Ln}
void main() {
  #include <logdepthbuf_fragment>
  float r = length(vQ);
  if (r < 0.98) discard;
  float a = atan(vQ.y, vQ.x);
  float streak = 0.6 + 0.4 * fbm3(vec3(cos(a) * 3.0, sin(a) * 3.0, uSeed + uTime * 0.002), 4);
  float fall = pow(1.0 / r, 6.0) * 0.6 + pow(1.0 / r, 2.5) * 0.04 * streak;
  fall *= smoothstep(0.98, 1.02, r);
  gl_FragColor = vec4(uColor * uIntensity * fall, 1.0);
}`,Sc=class{constructor(t){this.star=t,this.group=new le;let e=Nu(t.color);this.color=e;let n=t.starKind!=="blackhole",i=t.starKind==="giant"?9:t.starKind==="dwarf"?80:40;this.mat=new Qt({vertexShader:qv,fragmentShader:Xv,uniforms:{uColor:{value:new P(...e)},uRadiance:{value:1},uTime:{value:0},uGran:{value:i},uSpots:{value:t.temp<6200?.8:.1},uSeed:{value:t.radius%97}}}),this.mesh=new Et(new en(1,128,64),this.mat),this.mesh.frustumCulled=!1,this.mesh.visible=n,this.group.add(this.mesh),this.coronaMat=new Qt({vertexShader:$v,fragmentShader:Yv,transparent:!0,depthWrite:!1,blending:je,blendSrc:Se,blendDst:Se,uniforms:{uColor:{value:new P(...e)},uIntensity:{value:1},uTime:{value:0},uSeed:{value:3.7},uScale:{value:7},uRad:{value:1}}}),this.corona=new Et(new Ms(2,2),this.coronaMat),this.corona.frustumCulled=!1,this.corona.visible=n&&t.starKind!=="neutron",this.group.add(this.corona),this.radiance=Math.max(t.lum,1e-6)*fe*fe/(Math.PI*t.radius*t.radius),t.starKind==="blackhole"&&this.buildAccretion(),t.starKind==="neutron"&&this.buildPulsar()}buildAccretion(){let t=this.star.radius,e=new er(t*3,t*14,256,1),n=new Qt({vertexShader:`${Kn} varying vec3 vP; varying vec3 vW; void main(){ vP = position; vec4 wp = modelMatrix*vec4(position,1.0); vW = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp; 
#include <logdepthbuf_vertex>
}`,fragmentShader:`${Qn} uniform float uTime; uniform float uRs; uniform vec3 uAxisX; varying vec3 vP; varying vec3 vW; ${Ln}
      void main(){
        #include <logdepthbuf_fragment>
        float r = length(vP.xy) / uRs;
        float a = atan(vP.y, vP.x);
        float spin = uTime * 0.6 / pow(r, 1.5);
        float n = fbm3(vec3(cos(a + spin) * r * 0.8, sin(a + spin) * r * 0.8, r * 0.3), 5);
        float T = pow(3.0 / r, 0.75);
        vec3 hot = mix(vec3(1.0, 0.45, 0.15), vec3(0.85, 0.9, 1.0), clamp(T - 0.4, 0.0, 1.0));
        // doppler beaming: one side approaches
        vec3 vel = normalize(cross(vec3(0.0, 0.0, 1.0), vP));
        vec3 viewDir = normalize(vW);
        float beam = 1.0 + 0.8 * dot(mat3(modelMatrix) * vel, -viewDir);
        float fade = smoothstep(3.0, 3.6, r) * smoothstep(14.0, 8.0, r);
        gl_FragColor = vec4(hot * T * T * (0.55 + 0.45 * n) * beam * beam * fade * 40.0, 1.0);
      }`,uniforms:{uTime:{value:0},uRs:{value:t},uAxisX:{value:new P(1,0,0)}},side:_e,transparent:!0,depthWrite:!1,blending:je,blendSrc:Se,blendDst:Se});this.accretion=new Et(e,n),this.accretion.rotation.x=Math.PI/2+.25,this.accretion.frustumCulled=!1,this.group.add(this.accretion)}buildPulsar(){let e=new ha(24e7,4e9,32,1,!0);e.translate(0,4e9/2,0);let n=new Qt({vertexShader:`${Kn} varying float vT; varying vec3 vN; varying vec3 vW; void main(){ vT = position.y / ${4e9.toExponential()}; vN = normalize(mat3(modelMatrix)*normal); vec4 wp = modelMatrix*vec4(position,1.0); vW = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp; 
#include <logdepthbuf_vertex>
}`,fragmentShader:`${Qn} varying float vT; varying vec3 vN; varying vec3 vW; void main(){ 
#include <logdepthbuf_fragment>
 float edge = pow(1.0 - abs(dot(normalize(vN), normalize(-vW))), 2.0); float f = (1.0 - edge) * pow(1.0 - vT, 3.0); gl_FragColor = vec4(vec3(0.55, 0.7, 1.0) * f * 0.6, 1.0); }`,side:_e,transparent:!0,depthWrite:!1,blending:je,blendSrc:Se,blendDst:Se});this.beams=new le;let i=new Et(e,n),r=new Et(e,n);r.rotation.z=Math.PI,i.frustumCulled=r.frustumCulled=!1,this.beams.add(i,r),this.beams.rotation.z=.5,this.spinner=new le,this.spinner.add(this.beams),this.group.add(this.spinner)}update(t,e,n,i){this.group.position.set(e[0],e[1],e[2]),this.mesh.scale.setScalar(this.star.radius),this.mat.uniforms.uRadiance.value=this.radiance,this.mat.uniforms.uTime.value=t.time,this.coronaMat.uniforms.uRad.value=this.star.radius,this.coronaMat.uniforms.uIntensity.value=this.radiance*.02,this.coronaMat.uniforms.uTime.value=t.time;let r=i<t.pixelAngle*.7;return this.mesh.visible=this.star.starKind!=="blackhole"&&!r,this.corona.visible=this.mesh.visible&&this.star.starKind!=="neutron",this.accretion&&(this.accretion.material.uniforms.uTime.value=t.time),this.spinner&&(this.spinner.rotation.y=t.time*2*Math.PI*1.3),r}dispose(){this.group.traverse(t=>{t.geometry?.dispose?.(),t.material?.dispose?.()})}};function Zv(s){let e=new Uint8Array(4096),n=new xe(s.seed),i=[];for(let o=0;o<n.int(1,4);o++)i.push({x:n.range(.15,.85),w:n.range(.004,.03)});let r=[];for(let o=0;o<18;o++)r.push({f:n.logRange(6,260),p:n.range(0,6.28),a:n.range(.1,1)/(1+o*.2)});for(let o=0;o<1024;o++){let l=o/1023,c=.55;for(let u of r)c+=.18*u.a*Math.sin(l*u.f+u.p);c=Math.max(0,Math.min(1,c));for(let u of i)c*=Math.min(1,Math.abs(l-u.x)/u.w);c*=Math.min(1,l/.04)*Math.min(1,(1-l)/.02);let h=.85+.15*Math.sin(l*9+s.seed);e[o*4]=Math.round(c*255),e[o*4+1]=Math.round(h*255),e[o*4+2]=0,e[o*4+3]=255}let a=new sa(e,1024,1,Oe);return a.minFilter=Me,a.magFilter=Me,a.wrapS=qn,a.needsUpdate=!0,a}var Fu=`
uniform sampler2D tRing; uniform float uInner; uniform float uOuter; uniform float uOpacity;
float ringDensity(float r) {
  if (r < uInner || r > uOuter) return 0.0;
  return texture2D(tRing, vec2((r - uInner) / (uOuter - uInner), 0.5)).r * uOpacity;
}`,jv=`${Kn}
varying vec3 vObj; varying vec3 vW;
void main() { vObj = position; vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,Jv=`${Qn}
uniform vec3 uColor; uniform vec3 uSunColor; uniform vec3 uSunLocal; uniform vec3 uCamLocal; uniform float uR;
varying vec3 vObj; varying vec3 vW;
${Fu}
void main() {
  #include <logdepthbuf_fragment>
  vec3 p = vObj / uR;
  float r = length(p.xz);
  float d = ringDensity(r);
  if (d <= 0.001) discard;
  vec2 tex = texture2D(tRing, vec2((r - uInner) / (uOuter - uInner), 0.5)).rg;
  // planet shadow
  vec3 s = uSunLocal;
  float tc = -dot(p, s);
  float sh = 1.0;
  if (tc > 0.0) { float h2 = dot(p + s * tc, p + s * tc); sh = smoothstep(0.985, 1.015, sqrt(h2)); }
  vec3 v = normalize(uCamLocal - p);
  float sunSide = sign(s.y), viewSide = sign(v.y);
  float mu = abs(v.y);
  float alpha = 1.0 - exp(-d * 2.2 / max(mu, 0.03));
  float lit = sunSide == viewSide ? 1.0 : 0.35 * (1.0 - d);
  float fwd = pow(max(dot(-v, s), 0.0), 8.0) * 2.5 * (1.0 - d);
  vec3 col = uColor * tex.g * uSunColor * (abs(s.y) * 0.9 + 0.1) * lit * sh / 3.14159;
  col += uColor * uSunColor * fwd * sh * 0.3;
  gl_FragColor = vec4(col * alpha, 1.0 - alpha);
}`,bc=class{constructor(t){let e=t.rings;this.body=t,this.tex=Zv(e);let n=new er(e.inner,e.outer,256,4);n.rotateX(-Math.PI/2),this.mat=new Qt({vertexShader:jv,fragmentShader:Jv,transparent:!0,depthWrite:!1,side:_e,blending:je,blendSrc:Se,blendDst:fs,uniforms:{tRing:{value:this.tex},uInner:{value:e.inner/t.radius},uOuter:{value:e.outer/t.radius},uOpacity:{value:e.opacity},uColor:{value:new P(...e.color)},uSunColor:{value:new P},uSunLocal:{value:new P},uCamLocal:{value:new P},uR:{value:t.radius}}}),this.mesh=new Et(n,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2}},Kv=`${Kn}
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
void main() {
  vObj = position; vN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
  #include <logdepthbuf_vertex>
}`,Qv=`${Qn}
uniform vec3 uP0; uniform vec3 uP1; uniform vec3 uP2; uniform vec3 uP3; uniform vec3 uP4;
uniform float uBands; uniform float uTurb; uniform float uStorms; uniform float uSeed; uniform float uTime; uniform float uGlow;
uniform vec3 uSunDir; uniform vec3 uSunColor; uniform vec3 uSunLocal; uniform vec3 uFillDir; uniform vec3 uFillColor;
uniform float uHasRings; uniform float uDist; uniform float uProj; uniform float uR; uniform vec4 uSpot;
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
${Ln}
${_a}
${Fu}
vec3 bandColor(float b) {
  // alternate light zones and darker belts, each with its own tint
  float i = floor(b);
  float t = fract(b);
  float h = hash13(vec3(i, uSeed, 1.0));
  float h2 = hash13(vec3(i + 1.0, uSeed, 1.0));
  vec3 c0 = mod(i, 2.0) < 0.5 ? mix(uP1, uP3, h) : mix(uP0, uP2, h);
  vec3 c1 = mod(i + 1.0, 2.0) < 0.5 ? mix(uP1, uP3, h2) : mix(uP0, uP2, h2);
  return mix(c0, c1, smoothstep(0.2, 0.8, t));
}
void main() {
  #include <logdepthbuf_fragment>
  vec3 p = normalize(vObj);
  float lat = p.y;
  // differential rotation: the bands slide past each other
  float shear = uTime * 1.2e-4 * sin(lat * uBands * 1.3 + uSeed);
  float c = cos(shear), s = sin(shear);
  vec3 q = vec3(p.x * c - p.z * s, p.y, p.x * s + p.z * c);
  float detailFade = smoothstep(0.5, 4.0, uR / uDist * uProj / 400.0);
  vec3 w1 = vec3(fbm3(q * 3.0 + uSeed, 4), fbm3(q * 3.0 + uSeed + 11.0, 4), fbm3(q * 3.0 + uSeed + 23.0, 4));
  vec3 qs = vec3(q.x * 2.2, q.y * 14.0, q.z * 2.2) + w1 * uTurb * 1.4;
  float turb = fbm3(qs, 4 + int(detailFade * 3.0));
  float b = (lat + 1.0) * 0.5 * uBands + turb * 0.35 * uTurb + fbm3(vec3(0.0, lat * 6.0, uSeed), 3) * 0.6;
  vec3 col = bandColor(b);
  float fine = fbm3(vec3(q.x * 6.0, q.y * 60.0, q.z * 6.0) + w1 * 2.5 * uTurb, 5);
  col = mix(col, uP4, clamp(fine * 0.6 + 0.1, 0.0, 1.0) * 0.14);
  col *= 0.88 + 0.24 * fine;
  // storms
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    vec3 sc = normalize(vec3(cos(uSeed * 3.1 + fi * 2.4), sin(uSeed + fi * 1.7) * 0.55, sin(uSeed * 3.1 + fi * 2.4)));
    float d = length((q - sc) * vec3(0.6, 1.4, 0.6));
    float size = 0.06 + 0.12 * hash13(vec3(fi, uSeed, 7.0));
    float st = smoothstep(size, size * 0.3, d) * uStorms * step(hash13(vec3(fi, uSeed, 3.0)), 0.6 + 0.4 * uStorms);
    float swirl = fbm3(vec3(d * 30.0, atan(q.z - sc.z, q.x - sc.x) * 2.0, fi), 3);
    col = mix(col, mix(uP2, uP1, 0.5 + 0.5 * swirl) * vec3(1.08, 0.95, 0.85), st * 0.8);
  }
  // one great long-lived storm
  if (uSpot.w > 0.0) {
    vec3 sc = normalize(vec3(cos(uSpot.x) * cos(uSpot.y), sin(uSpot.y), sin(uSpot.x) * cos(uSpot.y)));
    vec3 dq = q - sc;
    float d = length(dq * vec3(0.55, 1.6, 0.55));
    float st = smoothstep(uSpot.z, uSpot.z * 0.55, d);
    float ring = smoothstep(uSpot.z * 1.25, uSpot.z, d) - st;
    float sw = fbm3(vec3(d * 40.0, atan(dq.z, dq.x) * 3.0 + d * 30.0, uSeed), 3);
    col = mix(col, uP3 * 1.02, ring * 0.5 * uSpot.w);
    col = mix(col, vec3(0.62, 0.3, 0.18) * (0.9 + 0.2 * sw), st * uSpot.w);
  }
  vec3 N = normalize(vN);
  vec3 V = normalize(-vW);
  float NdL = dot(N, uSunDir);
  float mu = max(dot(N, V), 0.0);
  float diff = smoothstep(-0.08, 0.3, NdL) * (0.6 * max(NdL, 0.0) + 0.4 * smoothstep(-0.05, 0.4, NdL));
  float limb = 0.75 + 0.25 * pow(mu, 0.4);
  float sh = eclipse(vW, uSunDir);
  if (uHasRings > 0.5 && abs(uSunLocal.y) > 1e-4) {
    float t = -p.y / uSunLocal.y;
    if (t > 0.0) {
      vec3 hit = p + uSunLocal * t;
      sh *= 1.0 - ringDensity(length(hit.xz)) * 0.9;
    }
  }
  vec3 E = uSunColor * diff * sh * limb + uFillColor * max(dot(N, uFillDir), 0.0);
  vec3 outc = col / 3.14159 * E;
  outc += vec3(1.0, 0.3, 0.1) * uGlow * (0.4 + 0.6 * fine) * 0.08;
  gl_FragColor = vec4(outc, 1.0);
}`,tx=`${Kn}
varying vec3 vW;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,ex=`${Qn}
uniform float uSolid;
varying vec3 vW;
${ya}
${nc}
void main() {
  #include <logdepthbuf_fragment>
  vec3 rd = viewRay();
  vec3 ro = -aCenter / aR;
  vec2 g = aRaySphere(ro, rd, 1.0);
  float tMax = 1e9;
  if (g.x > 0.0) {
    if (uSolid > 0.5) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
    tMax = g.x;
  }
  vec4 sc = aScatter(ro, rd, tMax, 16);
  gl_FragColor = vec4(sc.rgb, sc.a);
}`,wc=class{constructor(t){this.body=t,this.uniforms={...mc(),...Is,uSolid:{value:t.solid?1:0}},gc(this.uniforms,t),this.mat=new Qt({vertexShader:tx,fragmentShader:ex,uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:je,blendSrc:Se,blendDst:fs,side:ln});let e=t.radius*this.uniforms.aRa.value;this.mesh=new Et(new en(e,128,64),this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1}},nx=`${Kn}
varying vec3 vW;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,ix=`${Qn}
uniform vec3 cCenter; uniform float cRadius; uniform float cGround; uniform mat3 cToBody;
uniform vec3 cSunDir; uniform vec3 cSunColor; uniform vec3 cColor; uniform float cCover; uniform float cOpacity;
uniform float cSeed; uniform float cTime; uniform float cVenus; uniform float cProj;
varying vec3 vW;
${Ln}
${nc}
float density(vec3 p, float detail) {
  float lon = cTime * 2.0e-6;
  float c = cos(lon), s = sin(lon);
  p = vec3(p.x * c - p.z * s, p.y, p.x * s + p.z * c);
  if (cVenus > 0.5) {
    vec3 w = vec3(fbm3(p * 2.0 + cSeed, 3), 0.0, fbm3(p * 2.0 + cSeed + 7.0, 3));
    float band = fbm3(vec3(p.x * 2.0, p.y * 9.0, p.z * 2.0) + w * 1.5, 5);
    return 0.82 + 0.18 * band;
  }
  vec3 q = p * 2.0;
  vec3 w = vec3(fbm3(q * 0.6 + cSeed, 4), fbm3(q * 0.6 + cSeed + 5.2, 4), fbm3(q * 0.6 + cSeed + 9.7, 4));
  vec3 qq = vec3(q.x, q.y * 1.5, q.z) + w * 1.15;
  float n = fbm3(qq * 1.6, 4 + int(detail * 3.0));
  // billowed small-scale structure so the deck breaks into cells, not paint
  float b = 1.0 - abs(fbm3(qq * 7.0 + 3.1, 3 + int(detail * 3.0)));
  n = n + (b - 0.55) * 0.35;
  float lat = abs(p.y);
  float belts = 0.12 * cos(lat * 9.0) + 0.05;
  float d = smoothstep(1.0 - cCover, 1.0 - cCover + 0.3, n * 0.5 + 0.5 + belts);
  return d;
}
void main() {
  #include <logdepthbuf_fragment>
  vec3 rd = viewRay();
  vec3 ro = -cCenter;
  float tc = -dot(ro, rd);
  vec3 pc = ro + rd * tc;
  float h2 = dot(pc, pc);
  float r2 = cRadius * cRadius;
  if (h2 > r2) discard;
  float dt = sqrt(r2 - h2);
  float camR = length(ro);
  float t = camR > cRadius ? tc - dt : tc + dt;
  if (t <= 0.0) discard;
  // hidden behind the ground
  float g2 = cGround * cGround;
  if (h2 < g2) { float tg = tc - sqrt(g2 - h2); if (tg > 0.0 && tg < t) discard; }
  vec3 hit = ro + rd * t;
  vec3 n = normalize(hit);
  vec3 pb = cToBody * n;
  float dist = t;
  float detail = clamp(cRadius / dist * cProj / 900.0, 0.0, 1.0);
  float d = density(pb, detail) * cOpacity;
  // thin out at the very limb so the deck does not draw a hard ring
  d *= smoothstep(0.0, 0.08, abs(dot(n, -rd)));
  if (d < 0.003) discard;
  float NdL = dot(n, cSunDir);
  float day = smoothstep(-0.12, 0.2, NdL);
  float below = camR < cRadius ? 1.0 : 0.0;
  float light = (0.25 + 0.75 * max(NdL, 0.0)) * day;
  float self = mix(1.0, 0.35, below * d);
  vec3 col = cColor * cSunColor * light * self / 3.14159;
  gl_FragColor = vec4(col * d, d);
}`,Ec=class{constructor(t){this.body=t;let e=t.type==="venus";this.alt=e?62e3:9e3;let n=t.radius+this.alt;this.uniforms={cCenter:{value:new P},cRadius:{value:n},cGround:{value:t.radius+(t.terrain?.sea===null,0)},cToBody:{value:new Ht},cSunDir:{value:new P},cSunColor:{value:new P},cColor:{value:new P(...e?[.92,.84,.62]:[.95,.96,.98])},cCover:{value:e?1:.42+(t.terrain?.seed||0)%100/100*.2},cOpacity:{value:e?1:.92},cSeed:{value:(t.terrain?.seed||7)%997/31},cTime:{value:0},cVenus:{value:e?1:0},cProj:{value:800},...Is},this.mat=new Qt({vertexShader:nx,fragmentShader:ix,uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:je,blendSrc:Se,blendDst:Zs,side:ln}),this.mesh=new Et(new en(n*1.003,96,48),this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=.5}update(t,e,n,i,r){let a=this.uniforms;a.cCenter.value.set(e[0],e[1],e[2]),a.cSunDir.value.set(i.sunDir[0],i.sunDir[1],i.sunDir[2]),a.cSunColor.value.set(i.sun[0],i.sun[1],i.sun[2]),a.cTime.value=t.time,a.cProj.value=t.projScale;let o=new se().makeRotationFromQuaternion(new Ge(n[0],n[1],n[2],n[3])).invert();a.cToBody.value.setFromMatrix4(o);let l=r<a.cRadius.value*1.002;this.mat.side=l?Te:ln}},sx=`${Kn}
attribute vec3 aCol;
uniform float uPx; uniform float uPixOmega;
varying vec3 vCol;
void main() {
  vec4 mv = viewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float size = 3.5;
  gl_PointSize = size * uPx;
  vCol = aCol / (uPixOmega * 0.172 * size * size);
  #include <logdepthbuf_vertex>
}`,rx=`${Qn}
varying vec3 vCol;
void main() {
  #include <logdepthbuf_fragment>
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  gl_FragColor = vec4(vCol * exp(-r2 * 4.5), 1.0);
}`,Tc=class{constructor(t=96){this.max=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3);let e=new ye;e.setAttribute("position",new he(this.pos,3).setUsage(Jl)),e.setAttribute("aCol",new he(this.col,3).setUsage(Jl)),e.setDrawRange(0,0),this.mat=new Qt({vertexShader:sx,fragmentShader:rx,transparent:!0,depthWrite:!1,blending:je,blendSrc:Se,blendDst:Se,uniforms:{uPx:{value:1},uPixOmega:{value:1e-6}}}),this.points=new ws(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,this.n=0}begin(){this.n=0}add(t,e,n){if(this.n>=this.max)return;let i=Math.min(e,1e12)/e,r=this.n++;this.pos[r*3]=t[0]*i,this.pos[r*3+1]=t[1]*i,this.pos[r*3+2]=t[2]*i,this.col[r*3]=n[0],this.col[r*3+1]=n[1],this.col[r*3+2]=n[2]}end(){let t=this.points.geometry;t.attributes.position.needsUpdate=!0,t.attributes.aCol.needsUpdate=!0,t.setDrawRange(0,this.n)}},Ou={barren:.12,ice:.6,desert:.25,lava:.08,venus:.75,titan:.22,terran:.3,gas:.5,icegiant:.5},Ac=class{constructor(t,e){if(this.body=t,this.sys=e,this.group=new le,this.inertial=new le,this.albedo=Ou[t.type]??.3,t.solid)this.material=Tu(t),gc(this.material.uniforms,t),this.terrain=new Ta({...t.terrain,palette:void 0,radius:t.radius},this.material,this.group),this.detailOrigin=null;else{let n=t.gas.palette,i=r=>new P(...n[r%n.length]);this.material=new Qt({vertexShader:Kv,fragmentShader:Qv,uniforms:{uP0:{value:i(0)},uP1:{value:i(1)},uP2:{value:i(2)},uP3:{value:i(3)},uP4:{value:i(4)},uBands:{value:t.gas.bands},uTurb:{value:t.gas.turbulence},uStorms:{value:t.gas.storms},uSeed:{value:t.gas.seed%1e3/37},uTime:{value:0},uGlow:{value:t.gas.glow},uSunDir:{value:new P},uSunColor:{value:new P},uSunLocal:{value:new P},uFillDir:{value:new P},uFillColor:{value:new P},uHasRings:{value:t.rings?1:0},uDist:{value:1},uProj:{value:800},uR:{value:t.radius},uOcc:{value:[new jt,new jt,new jt,new jt]},uOccCount:{value:0},uSunAngR:{value:.005},tRing:{value:null},uInner:{value:1},uOuter:{value:1},uOpacity:{value:0},uSpot:{value:new jt(t.gas.seed%6.28,-.38,.11,t.type==="gas"&&t.gas.storms>.45&&t.tempK<200?1:0)}}}),this.sphere=new Et(new en(t.radius,160,96),this.material),this.sphere.frustumCulled=!1,this.group.add(this.sphere)}if(t.atmosphere&&(this.atmo=new wc(t),this.inertial.add(this.atmo.mesh)),t.solid&&(t.type==="venus"||t.type==="terran")&&(this.clouds=new Ec(t),this.inertial.add(this.clouds.mesh)),t.rings&&(this.rings=new bc(t),this.ringFrame=new le,this.ringFrame.add(this.rings.mesh),this.inertial.add(this.ringFrame),!t.solid)){let n=this.material.uniforms;n.tRing.value=this.rings.tex,n.uInner.value=this.rings.mat.uniforms.uInner.value,n.uOuter.value=this.rings.mat.uniforms.uOuter.value,n.uOpacity.value=t.rings.opacity}}update(t,e,n,i,r,a){let o=this.body,l=r<t.pixelAngle*.8;if(this.group.visible=!l,this.inertial.visible=!l||this.rings&&r*(o.rings.outer/o.radius)>t.pixelAngle,this.group.position.set(e[0],e[1],e[2]),this.group.quaternion.set(n[0],n[1],n[2],n[3]),this.inertial.position.copy(this.group.position),this.ringFrame){let u=o.spin.locked?o.orbit.q:o.spin.tilt;this.ringFrame.quaternion.set(u[0],u[1],u[2],u[3])}if(l)return!0;let c=a.sunDir,h=this.material.uniforms;h.uSunDir.value.set(c[0],c[1],c[2]),h.uSunColor.value.set(a.sun[0],a.sun[1],a.sun[2]),h.uFillDir.value.set(a.fillDir[0],a.fillDir[1],a.fillDir[2]),h.uFillColor.value.set(a.fill[0],a.fill[1],a.fill[2]),h.uSunAngR.value=a.sunAngR,h.uOccCount.value=a.occ.length;for(let u=0;u<4;u++){let d=a.occ[u];d&&h.uOcc.value[u].set(d[0],d[1],d[2],d[3])}if(o.solid){h.uTime.value=t.time,h.uProj.value=t.projScale,h.aCenter.value.set(e[0],e[1],e[2]),h.aSunDir.value.copy(h.uSunDir.value),h.aSunColor.value.copy(h.uSunColor.value);let u=t.spot;h.uSpotPos.value.set(u.pos[0],u.pos[1],u.pos[2]),h.uSpotDir.value.set(u.dir[0],u.dir[1],u.dir[2]),h.uSpotColor.value.setScalar(u.on?u.intensity:0),h.uSpotCos.value=u.cos;let d=un(n),f=Yt(d,[-e[0],-e[1],-e[2]]);(!this.detailOrigin||Math.hypot(f[0]-this.detailOrigin[0],f[1]-this.detailOrigin[1],f[2]-this.detailOrigin[2])>2e4)&&(this.detailOrigin=f.slice());let p=this.detailOrigin,v=this.material,g=new P;this.terrain.update(f,t.frustum,(m,_,x)=>Yt(n,[m,_,x]),t.projScale);for(let m of this.terrain.visibleList)if(!m.onBeforeRender.__set){let _=m.position;m.onBeforeRender=()=>{let x=this.detailOrigin;v.uniforms.uPatchOffset.value.set(_.x-x[0],_.y-x[1],_.z-x[2]),v.uniformsNeedUpdate=!0},m.onBeforeRender.__set=!0}}else{h.uTime.value=t.time,h.uDist.value=i,h.uProj.value=t.projScale;let u=Yt(un(o.spin.locked?o.orbit.q:o.spin.tilt),c);h.uSunLocal.value.set(u[0],u[1],u[2])}if(this.clouds&&this.clouds.update(t,e,n,a,i),this.atmo){let u=this.atmo.uniforms;u.aCenter.value.set(e[0],e[1],e[2]),u.aSunDir.value.set(c[0],c[1],c[2]),u.aSunColor.value.set(a.sun[0],a.sun[1],a.sun[2]);let d=i<o.radius*u.aRa.value*1.0005;this.atmo.mat.side=d?Te:ln}if(this.rings){let u=this.rings.mat.uniforms,d=o.spin.locked?o.orbit.q:o.spin.tilt,f=un(d),p=Yt(f,c),v=Yt(f,[-e[0]/o.radius,-e[1]/o.radius,-e[2]/o.radius]);u.uSunLocal.value.set(p[0],p[1],p[2]),u.uCamLocal.value.set(v[0],v[1],v[2]),u.uSunColor.value.set(a.sun[0],a.sun[1],a.sun[2])}return!1}heightAt(t){return this.body.solid?this.terrain.heightAt(t[0],t[1],t[2]):0}get ready(){return this.body.solid?this.terrain.ready:!0}dispose(){this.terrain&&this.terrain.dispose(),this.group.traverse(t=>{t.isMesh&&t.geometry&&!this.terrain&&t.geometry.dispose()}),this.material.dispose(),this.atmo&&(this.atmo.mesh.geometry.dispose(),this.atmo.mat.dispose()),this.clouds&&(this.clouds.mesh.geometry.dispose(),this.clouds.mat.dispose()),this.rings&&(this.rings.mesh.geometry.dispose(),this.rings.mat.dispose(),this.rings.tex.dispose())}},Ca=class{constructor(t,e){this.engine=t,this.sys=e,this.root=new le,this.star=new Sc(e.star),this.root.add(this.star.group),this.planets=e.bodies.map(n=>{let i=new Ac(n,e);return this.root.add(i.group,i.inertial),i}),this.glints=new Tc,this.root.add(this.glints.points),t.scene.add(this.root),this.positions=e.bodies.map(()=>[0,0,0]),this.orient=e.bodies.map(()=>[0,0,0,1]),this.starColor=Nu(e.star.color)}get ready(){return this.planets.every(t=>t.ready)}irradianceAt(t){let e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];return Math.max(this.sys.star.lum,0)*fe*fe/Math.max(e,1)}computeKinematics(t){for(let e=0;e<this.sys.bodies.length;e++)Ds(this.sys,e,t,this.positions[e]),this.orient[e]=ar(this.sys,e,t)}update(t){let e=this.sys,n=t.camWorld,i=t.time;this.computeKinematics(i),this.glints.begin();let r=[-n[0],-n[1],-n[2]],a=Math.hypot(r[0],r[1],r[2]),o=Math.atan(e.star.radius/a);if(this.star.update(t,r,a,o)&&e.star.starKind!=="blackhole"){let h=this.irradianceAt(n);this.glints.add(r,a,this.starColor.map(u=>u*h))}let c=h=>Math.atan(e.star.radius/Math.max(Math.hypot(h[0],h[1],h[2]),1));for(let h=0;h<e.bodies.length;h++){let u=e.bodies[h],d=this.positions[h],f=[d[0]-n[0],d[1]-n[1],d[2]-n[2]],p=Math.hypot(f[0],f[1],f[2]),v=Math.asin(Math.min(1,u.radius/p)),g=Math.hypot(d[0],d[1],d[2]),m=[-d[0]/g,-d[1]/g,-d[2]/g],_=this.irradianceAt(d),x=this.starColor.map(M=>M*_),y=[0,0,0],R=[0,1,0];if(u.parent>=0){let M=this.positions[u.parent],C=e.bodies[u.parent],k=M[0]-d[0],B=M[1]-d[1],z=M[2]-d[2],X=Math.hypot(k,B,z);R=[k/X,B/X,z/X];let W=.5*(1-(R[0]*m[0]+R[1]*m[1]+R[2]*m[2])),it=(Ou[C.type]??.3)*(C.radius/X)**2*W*.7;y=x.map(H=>H*it)}let T=[],A=[];u.parent>=0&&A.push(u.parent);for(let M of u.children)A.push(M);if(u.parent>=0)for(let M of e.bodies[u.parent].children)M!==h&&A.push(M);for(let M of A.slice(0,4)){let C=this.positions[M];T.push([C[0]-n[0],C[1]-n[1],C[2]-n[2],e.bodies[M].radius])}let I={sunDir:m,sun:x,fill:y,fillDir:R,occ:T,sunAngR:c(d)};if(this.planets[h].update(t,f,this.orient[h],p,v,I)){let C=.5*(1+-(f[0]*m[0]+f[1]*m[1]+f[2]*m[2])/p),k=this.planets[h].albedo*(u.radius/p)**2*C*.67;k*_>1e-14&&this.glints.add(f,p,x.map(B=>B*k))}}if(t.extraGlints)for(let h of t.extraGlints)this.glints.add(h.rel,h.dist,h.flux);this.glints.end(),this.glints.mat.uniforms.uPx.value=t.pxRatio,this.glints.mat.uniforms.uPixOmega.value=t.pixelAngle*t.pixelAngle}dispose(){this.engine.scene.remove(this.root),this.star.dispose();for(let t of this.planets)t.dispose();this.glints.points.geometry.dispose()}};function or(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function ax(s,t,e){let i=new xe(1171),r=or(1024,1024),a=or(1024,1024),o=or(1024,1024),l=r.getContext("2d"),c=a.getContext("2d"),h=o.getContext("2d");l.fillStyle="#cfccc4",l.fillRect(0,0,1024,1024),c.fillStyle="#8a8a8a",c.fillRect(0,0,1024,1024),h.fillStyle="#808080",h.fillRect(0,0,1024,1024);let u=14;for(let f=0;f<u;f++){let p=f/u*1024,v=(f+1)/u*1024,g=0;for(;g<1024;){let m=i.range(40,160),x=204+i.range(-14,10);l.fillStyle=`rgb(${x+2},${x},${x-6})`,l.fillRect(g,p,m,v-p);let y=130+i.range(-25,30);c.fillStyle=`rgb(${y},${y},${y})`,c.fillRect(g,p,m,v-p),i.chance(.08)&&(l.fillStyle="rgba(60,62,66,0.85)",l.fillRect(g+4,p+4,m-8,v-p-8)),l.fillStyle="rgba(40,40,40,0.55)",l.fillRect(g,p,2,v-p),h.fillStyle="#2a2a2a",h.fillRect(g,p,2,v-p),l.fillStyle="rgba(90,90,90,0.5)";for(let R=6;R<v-p-4;R+=12)l.fillRect(g+5,p+R,2,2);g+=m}l.fillStyle="rgba(30,30,30,0.6)",l.fillRect(0,p,1024,2),h.fillStyle="#202020",h.fillRect(0,p,1024,2)}for(let f=0;f<2600*e;f++){let p=i.range(0,1024),v=i.range(0,1024),g=i.range(1,6);l.fillStyle=`rgba(70,60,50,${i.range(.02,.07)})`,l.fillRect(p,v,g,g*i.range(1,6))}l.save(),l.fillStyle="#2b2d31",l.font='600 46px "IBM Plex Mono", monospace',l.translate(1024*.18,1024*.47),l.fillText(s,0,0),l.font='500 18px "IBM Plex Mono", monospace',l.fillText(`OUTER SURVEY PROGRAM  \xB7  ${t}`,0,30),l.restore(),l.fillStyle="#9c3a2a",l.fillRect(1024*.18,1024*.53,180,6);for(let f=0;f<6;f++)l.fillStyle=f%2?"#d8b03a":"#26272a",l.fillRect(1024*.62+f*14,1024*.44,14,40);let d=(f,p)=>{let v=new Es(f);return v.wrapS=v.wrapT=vs,v.anisotropy=8,p&&(v.colorSpace=Xe),v};return{map:d(r,!0),roughnessMap:d(a,!1),bumpMap:d(o,!1)}}function ox(){let t=new xe(77),e=or(512,512),n=e.getContext("2d");n.fillStyle="#808080",n.fillRect(0,0,512,512);for(let r=0;r<1400;r++){let a=t.range(0,512),o=t.range(0,512),l=Math.round(t.range(70,190));n.fillStyle=`rgba(${l},${l},${l},0.35)`,n.beginPath();let c=t.int(3,6);for(let h=0;h<c;h++){let u=h/c*Math.PI*2+t.range(-.3,.3),d=t.range(6,30),f=a+Math.cos(u)*d,p=o+Math.sin(u)*d;h?n.lineTo(f,p):n.moveTo(f,p)}n.closePath(),n.fill()}let i=new Es(e);return i.wrapS=i.wrapT=vs,i.repeat.set(3,2),i}function lx(){let s=or(256,512),t=s.getContext("2d");t.fillStyle="#56585c",t.fillRect(0,0,256,512);for(let n=0;n<512;n+=8)t.fillStyle="rgba(20,20,22,0.7)",t.fillRect(0,n,256,2),t.fillStyle="rgba(140,140,145,0.25)",t.fillRect(0,n+2,256,1);t.fillStyle="rgba(25,25,28,0.9)",t.fillRect(0,0,8,512),t.fillRect(248,0,8,512);let e=new Es(s);return e.colorSpace=Xe,e}var Ns=class{constructor(t="TERN"){this.group=new le;let e=t!=="TERN",n=ax(t,e?"S-7":"S-11",e?3:1);this.hull=new Be({map:n.map,roughnessMap:n.roughnessMap,bumpMap:n.bumpMap,bumpScale:1.2,roughness:1,metalness:.05,envMapIntensity:.6}),this.foil=new Be({color:13145650,metalness:1,roughness:.32,bumpMap:ox(),bumpScale:2.5,envMapIntensity:1}),this.dark=new Be({color:2895152,metalness:.7,roughness:.42,envMapIntensity:.8}),this.steel=new Be({color:9277590,metalness:.9,roughness:.3,envMapIntensity:1}),this.radiator=new Be({map:lx(),metalness:.3,roughness:.55,emissive:new kt(0,0,0),envMapIntensity:.5}),this.glass=new Be({color:461068,metalness:.1,roughness:.04,envMapIntensity:2}),this.glow=new cn({color:new kt(0,0,0),side:_e}),this.navRed=new cn({color:new kt(0,0,0)}),this.navGreen=new cn({color:new kt(0,0,0)}),this.strobe=new cn({color:new kt(0,0,0)}),this.cabin=new cn({color:new kt(0,0,0)}),this.build(),this.group.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0)}),this.gear=1,this.length=30,this.bottom=3.9}lathe(t,e,n=64){let i=t.map(([o,l])=>new yt(o,l));i[0].y>i[i.length-1].y&&i.reverse();let r=new jn(i,n);r.rotateX(-Math.PI/2);let a=new Et(r,e);return this.group.add(a),a}build(){let t=(x,y=1)=>x.map(([R,T])=>[R*y,T]);this.lathe(t([[0,15.2],[.5,15.1],[1.15,14.7],[1.7,14],[2.1,13],[2.38,11.8],[2.5,10.6],[2.52,9],[2.4,8.4],[2.2,8.2]]),this.hull,72);let e=new Et(new be(2.43,2.27,1.5,48,1,!0,-Math.PI*.42,Math.PI*.84),this.glass);e.rotation.x=-Math.PI/2,e.rotation.y=0,e.position.set(0,0,-12.3),e.rotateY(Math.PI),this.group.add(e);let n=new Et(new be(2.41,2.25,1.3,48,1,!0,-Math.PI*.36,Math.PI*.72),this.cabin);n.rotation.x=-Math.PI/2,n.position.set(0,0,-12.3),n.rotateY(Math.PI),n.scale.setScalar(.995),this.group.add(n);let i=new Et(new be(2.05,2.05,9.8,48,1,!0),this.foil);i.rotation.x=Math.PI/2,i.position.z=-3.2,this.group.add(i);for(let x of[-8.1,-3.2,1.7]){let y=new Et(new Fi(2.12,.12,8,64),this.dark);y.position.z=x,this.group.add(y)}for(let x of[-1,1]){let y=new Et(new ca(.85,6.5,8,24),this.hull);y.rotation.x=Math.PI/2,y.position.set(x*2.75,-.5,-3),this.group.add(y);for(let R of[-6,-.2]){let T=new Et(new De(1,.18,.4),this.dark);T.position.set(x*2.2,-.45,R),this.group.add(T)}}this.lathe([[2.2,1.9],[2.55,1.6],[2.62,-1],[2.5,-3.8],[2.05,-5],[1.2,-5.6],[0,-5.7]],this.hull,64).position.z=3.6;let r=[];for(let x=0;x<=16;x++){let y=x/16;r.push(new yt(.75+1.65*Math.pow(y,1.6),-y*4.4))}let a=new jn(r.reverse(),64);a.rotateX(-Math.PI/2);let o=new Et(a,new Be({color:6971223,metalness:.55,roughness:.5,side:_e,envMapIntensity:.7}));o.position.z=9,this.group.add(o);let l=new Et(new tr(.78,32),this.glow);l.position.z=9.45,this.group.add(l),this.plumeMat=new Qt({uniforms:{uI:{value:0},uT:{value:0}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
varying vec3 vP; varying vec3 vN; varying vec3 vW; void main(){ vP = position; vN = normalize(normalMatrix*normal); vec4 mv = modelViewMatrix*vec4(position,1.0); vW = mv.xyz; gl_Position = projectionMatrix*mv; 
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
uniform float uI; uniform float uT; varying vec3 vP; varying vec3 vN; varying vec3 vW; void main(){ 
#include <logdepthbuf_fragment>
 float t = clamp(vP.z / 14.0, 0.0, 1.0); float rim = pow(1.0 - abs(dot(normalize(vN), normalize(-vW))), 0.5) * pow(abs(dot(normalize(vN), normalize(-vW))), 1.2); float flick = 0.85 + 0.15 * sin(uT * 60.0 + vP.y * 3.0); vec3 c = mix(vec3(0.75, 0.82, 1.0), vec3(0.45, 0.35, 1.0), t) * (1.0 - t) * (1.0 - t) * rim * uI * flick * 3.0; gl_FragColor = vec4(c, 1.0); }`,transparent:!0,depthWrite:!1,blending:je,blendSrc:Se,blendDst:Se,side:_e});let c=new be(.9,2.2,14,32,6,!0);c.translate(0,-7,0),c.rotateX(-Math.PI/2),this.plume=new Et(c,this.plumeMat),this.plume.position.z=13.3,this.plume.castShadow=!1,this.plume.visible=!1,this.group.add(this.plume),this.radiators=[];for(let x of[-1,1]){let y=new le;y.position.set(x*2.3,.9,.2);let R=new Et(new De(8.5,.07,3.6),this.radiator);R.position.x=x*4.6,y.add(R);let T=new Et(new De(.9,.16,.3),this.dark);T.position.x=x*.35,y.add(T),y.rotation.z=x*.12;let A=new Et(new en(.09,8,6),x<0?this.navRed:this.navGreen);A.position.set(x*8.9,.07,0),y.add(A),this.group.add(y),this.radiators.push(y)}this.antenna=new le,this.antenna.position.set(0,2.25,.5);let h=new Et(new be(.07,.09,1.6,8),this.steel);h.position.y=.8,this.antenna.add(h),this.dish=new le,this.dish.position.y=1.65;let u=[];for(let x=0;x<=12;x++){let y=x/12;u.push(new yt(y*1.35,y*y*.42))}let d=new Et(new jn(u,40),new Be({color:14868698,roughness:.6,metalness:.05,side:_e}));d.rotation.x=Math.PI/2,this.dish.add(d);let f=new Et(new be(.04,.04,.9,6),this.steel);f.rotation.x=Math.PI/2,f.position.z=-.45,this.dish.add(f),this.antenna.add(this.dish),this.group.add(this.antenna);for(let[x,y]of[[1.95,1],[-1.95,1],[1.95,-1],[-1.95,-1]]){let R=new Et(new De(.35,.35,.5),this.dark);R.position.set(x,y,-10.4),this.group.add(R)}this.legs=[];let p=[Math.PI*.25,Math.PI*.75,Math.PI*1.25,Math.PI*1.75];for(let x of p){let y=new le,R=Math.sin(x)>0?-7.5:4.5;y.position.set(Math.cos(x)>0?2:-2,-1.4,R);let T=new Et(new be(.11,.14,2.6,10),this.steel);T.position.y=-1.3,y.add(T);let A=new Et(new be(.55,.62,.14,20),this.dark);A.position.y=-2.62,y.add(A),y.userData.side=Math.cos(x)>0?1:-1,this.group.add(y),this.legs.push(y)}let v=new en(.09,8,6),g=new Et(v,this.strobe);g.position.set(0,2.55,4.6),this.group.add(g);let m=new Et(v,this.strobe);m.position.set(0,-2.1,-9),this.group.add(m);let _=new Et(new be(.22,.28,.3,12),this.dark);_.rotation.x=Math.PI/2,_.position.set(0,-2.15,-11.4),this.group.add(_),this.lampLens=new Et(new tr(.2,16),new cn({color:new kt(0,0,0)})),this.lampLens.position.set(0,-2.15,-11.56),this.lampLens.rotation.y=Math.PI,this.group.add(this.lampLens),this.lampPos=new P(0,-2.15,-11.6)}animate(t,e,{gear:n,thrust:i,heat:r,lights:a,cruise:o,solDirLocal:l,cabinLight:c,expo:h=1,jumpGlow:u=0}){let d=1/Math.max(h,1e-6);this.gear+=(n-this.gear)*Math.min(1,e*1.6);for(let _ of this.legs){let x=_.userData.side;_.rotation.z=x*(this.gear*.38-(1-this.gear)*1.45)}this.bottom=2.65+this.gear*1.25;for(let _ of this.radiators)_.rotation.z=Math.sign(_.position.x)*(.12-this.gear*.2);let f=i,p=u;this.glow.color.setRGB(3*f+.15*(o?1:0)+4*p,4*f+.22*(o?1:0)+5*p,9*f+.5*(o?1:0)+9*p).multiplyScalar(2.5*d),this.plume.visible=f>.05,this.plumeMat.uniforms.uI.value=f*.25*d,this.plumeMat.uniforms.uT.value=t;let v=Math.max(0,r-.35);this.radiator.emissive.setRGB(v*1.6,v*.45,v*.12).multiplyScalar(.8*d);let g=t%1.6<.08,m=a?1:.4;if(this.navRed.color.setRGB(6,.25,.1).multiplyScalar(m*d),this.navGreen.color.setRGB(.15,5,1.4).multiplyScalar(m*d),this.strobe.color.setScalar(g?14*d:0),this.cabin.color.setRGB(.9,.62,.35).multiplyScalar((c?.35:.08)*d),this.lampLens.material.color.setScalar(a?25*d:0),l){let _=l,x=Math.atan2(-_[0],-_[2]),y=Math.asin(Math.max(-1,Math.min(1,_[1])));this.antenna.rotation.y=x,this.dish.rotation.x=Math.max(-.4,Math.min(1.4,y))}}setEnvMap(t){for(let e of[this.hull,this.foil,this.dark,this.steel,this.radiator,this.glass])e.envMap=t,e.needsUpdate=!0}};function ti(s,t=.3,e=.6){return new Be({color:s,metalness:t,roughness:e,envMapIntensity:.7})}function Bu(s){let t=new le,e=ti(12170668,.2,.7),n=ti(2763566,.6,.45),i=new Et(new be(.7,.7,1.6,8),e);t.add(i);let r=new Et(new be(.05,.05,4.2,6),n);r.position.y=2.9,t.add(r);let a=new Be({color:1712694,metalness:.5,roughness:.25});for(let h of[-1,1]){let u=new Et(new De(3.4,.05,1.1),a);u.position.set(h*2.4,.2,0),t.add(u)}let o=new Et(new en(.8,20,8,0,Math.PI*2,0,.7),ti(14210768,.1,.6));o.material.side=_e,o.position.set(0,-1.2,0),o.rotation.x=Math.PI,t.add(o);let l=new cn({color:new kt(0,0,0)}),c=new Et(new en(.16,10,8),l);return c.position.y=5.05,t.add(c),t.userData.lamp=l,t.userData.radius=6,t}function cx(s){let t=new xe(s),e=new le,n=new Be({color:10123834,metalness:.9,roughness:.45}),i=ti(3355443,.5,.6),r=new Et(new be(1,1,.8,6),n);e.add(r);let a=[];for(let u=0;u<=10;u++){let d=u/10;a.push(new yt(d*1.9,d*d*.5))}let o=new Et(new jn(a,32),ti(13618372,.05,.75));o.material.side=_e,o.position.y=.4,e.add(o);let l=new Et(new be(.04,.04,6.5,5),i);l.rotation.z=Math.PI/2,l.position.set(3.3,-.1,0),e.add(l);let c=new Et(new be(.22,.22,1.1,10),i);c.rotation.z=Math.PI/2,c.position.set(-1.9,-.2,0),e.add(c);let h=new Et(new be(.02,.02,9,4),i);return h.rotation.x=Math.PI/2,h.rotation.z=.4,h.position.set(0,-.3,4.4),e.add(h),e.userData.radius=6,e.userData.tumble=[t.range(-.03,.03),t.range(-.05,.05),t.range(-.02,.02)],e}function hx(s){let t=new xe(s),e=new le,n=ti(3946547,.35,.85),i=ti(9407104,.2,.8),r=new Et(new be(2.4,2.4,14,20,1,!0,0,Math.PI*1.4),i);r.material.side=_e,r.rotation.set(Math.PI/2-.2,.3,.4),r.position.y=.6,e.add(r);let a=new Et(new en(2.4,16,10,0,Math.PI*2,0,Math.PI/2),n);a.position.set(9,.5,4),a.rotation.set(1.2,.4,.2),e.add(a);for(let l=0;l<26;l++){let c=t.range(.3,2.2),h=new Et(new De(c,c*t.range(.05,.4),c*t.range(.3,1.4)),t.chance(.5)?n:i),u=t.range(0,Math.PI*2),d=t.range(4,40);h.position.set(Math.cos(u)*d,c*.05,Math.sin(u)*d*.6+6),h.rotation.set(t.range(-.4,.4),t.range(0,6),t.range(-.4,.4)),e.add(h)}let o=new Et(new De(7,.08,3),ti(4540236,.3,.6));return o.position.set(-8,1.2,-6),o.rotation.set(.3,.5,.9),e.add(o),e.userData.radius=30,e}function ux(){let s=new le,t=new Be({color:131587,metalness:.9,roughness:.12,envMapIntensity:.25}),e=new Et(new De(12,54,3),t);return e.position.y=22,e.rotation.y=.4,s.add(e),s.userData.radius=60,s}function dx(s){let t=new le,e=new xe(s),n=38e3,i=1600,r=new Fi(n,i,24,220,Math.PI*e.range(.25,.42)),a=new Be({color:3881528,metalness:.8,roughness:.5,envMapIntensity:.4}),o=new Et(r,a);t.add(o);let l=ti(1907999,.7,.5),c=r.parameters.arc;for(let h=0;h<=40;h++){let u=h/40*c,d=new Et(new Fi(i*1.08,120,6,24),l);d.position.set(Math.cos(u)*n,Math.sin(u)*n,0),d.rotation.y=Math.PI/2,d.rotation.x=u,d.lookAt(new P(Math.cos(u)*n-Math.sin(u),Math.sin(u)*n+Math.cos(u),0)),t.add(d)}return t.userData.radius=n+i,t.userData.spin=4e-4,t}var Rc={beacon:{label:"Survey beacon",range:4e3},probe:{label:"Derelict probe",range:3e3},wreck:{label:"Wreckage",range:5e3},monolith:{label:"Unidentified structure",range:6e3},ring:{label:"Orbital structure",range:12e4},petrel:{label:"Vessel PETREL",range:4e3}},Ia=class{constructor(t,e,n){this.sys=e,this.root=new le,t.add(this.root),this.scene=t,this.items=e.signals.map((i,r)=>{let a;switch(i.type){case"beacon":a=Bu(i.seed);break;case"probe":a=cx(i.seed);break;case"wreck":a=hx(i.seed);break;case"monolith":a=ux();break;case"ring":a=dx(i.seed);break;case"petrel":{let o=new Ns("PETREL");o.animate(0,10,{gear:1,thrust:0,heat:0,lights:!1,cruise:!1}),a=o.group,a.userData.radius=20,a.userData.ship=o;break}default:a=Bu(i.seed)}return a.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),this.root.add(a),{sig:i,model:a,index:r,worldPos:[0,0,0],local:null,settled:!1}}),this.planetViews=n}settle(t){let e=t.sig;if(e.placement!=="surface"||t.settled)return;let n=this.sys.bodies[e.body],i=Mc(e.lat,e.lon,1),a=this.planetViews[e.body].heightAt(i),o=e.type==="petrel"?3.6:e.type==="monolith"?-1:.2;e.local=i.map(l=>l*(n.radius+a+o)),t.up=i,t.settled=!0}update(t,e,n,i=1){let r=[];for(let a of this.items){let o=a.sig;this.settle(a);let l=Uu(this.sys,o,e);a.worldPos=l;let c=[l[0]-n[0],l[1]-n[1],l[2]-n[2]],h=Math.hypot(c[0],c[1],c[2]);a.rel=c,a.dist=h;let u=a.model.userData.radius,d=Math.atan(u/h)<t.pixelAngle*1.5;if(a.model.visible=!d&&h<4e8,a.model.position.set(c[0],c[1],c[2]),o.placement==="surface"){let v=ar(this.sys,o.body,e),g=a.up,m=new Ge().setFromUnitVectors(new P(0,1,0),new P(g[0],g[1],g[2])),_=new Ge().setFromAxisAngle(new P(0,1,0),o.seed%628/100),x=new Ge(v[0],v[1],v[2],v[3]);a.model.quaternion.copy(x).multiply(m).multiply(_)}else{let v=a.model.userData.tumble;v&&a.model.rotation.set(e*v[0],e*v[1],e*v[2]),a.model.userData.spin&&(a.model.rotation.z=e*a.model.userData.spin)}let f=a.model.userData.lamp,p=(e*.7+o.seed%10)%2.2<.18;if(f&&f.color.setRGB(p?9/i:0,p?2.5/i:0,p?.8/i:0),d&&h<3e7){let v=o.type==="beacon"&&p?.02/i:0;v>0&&r.push({rel:c,dist:h,flux:[v*(6e3/h)**2,v*.3*(6e3/h)**2,v*.1*(6e3/h)**2]})}}return r}dispose(){this.scene.remove(this.root),this.root.traverse(t=>{t.geometry?.dispose?.()})}};var fx=["Wren","Halloran","Ostrey","Calder","Mirrin","Saelith","Tamsin","Lowe"],_i=8,Pa=class{constructor(){this.galaxy=new Sa,this.special=new Map,this.systemCache=new Map,this.buildStory()}buildStory(){let t=this.galaxy,e=new xe(Dn(t.seed,22273)),n=t.starsInRadius(we,13).filter(l=>l.d>7&&l.star.kind==="main"&&"KGF".includes(l.star.cls)).sort((l,c)=>l.star.id.localeCompare(c.star.id)),i;if(n.length)i=n[0].star;else{let l=t.starsInRadius(we,13).filter(c=>c.d>6&&c.star.id!=="SOL").sort((c,h)=>h.d-c.d)[0];i=t.forceStar(l.star.id,{classDef:t.classDef("K"),u:.4})}i=t.forceStar(i.id,{classDef:t.classDef(i.cls),u:.45,name:"Vesper"}),this.start=i;let r=Cc(px(i.pos,we));r=Cc([r[0],r[1]*.2,r[2]]);let a=[i],o=i;for(let l=0;l<_i;l++){let c=e.range(18,27),h=e.range(-.55,.55);r=Cc([r[0]*Math.cos(h)-r[2]*Math.sin(h),r[1]*.5+e.range(-.08,.08),r[0]*Math.sin(h)+r[2]*Math.cos(h)]);let u=mx(o.pos,gx(r,c)),f=t.starsInRadius(u,9).filter(v=>v.star.kind==="main"&&v.star.cls!=="O"&&v.star.cls!=="B"&&!a.includes(v.star)&&me(v.star.pos,o.pos)>12).sort((v,g)=>v.d-g.d)[0]?.star;f||(f=t.starsInRadius(u,14).filter(g=>!a.includes(g.star)&&g.star.id!=="SOL").sort((g,m)=>g.d-m.d)[0].star);let p=l===_i-1||f.cls==="M"||f.kind!=="main"?"K":f.cls;f=t.forceStar(f.id,{classDef:t.classDef(p),u:e.range(.2,.8),name:fx[l]}),a.push(f),o=f}this.trail=a,this.special.set(i.id,{minPlanets:5,noRandomSignals:!0,after:(l,c,h)=>yx(l,c,h)});for(let l=1;l<a.length;l++){let c=l===a.length-1;this.special.set(a[l].id,{minPlanets:3,noRandomSignals:!0,after:(h,u,d)=>c?_x(h,u,d):xx(h,u,d,l)})}this.special.set("SOL",{build:Mx,noRandomSignals:!0})}trailIndex(t){return this.trail.findIndex(e=>e.id===t)}system(t){let e=this.systemCache.get(t.id);return e||(e=Iu(t,this.special.get(t.id)),this.systemCache.size>24&&this.systemCache.clear(),this.systemCache.set(t.id,e)),e}};function px(s,t){return[s[0]-t[0],s[1]-t[1],s[2]-t[2]]}function mx(s,t){return[s[0]+t[0],s[1]+t[1],s[2]+t[2]]}function gx(s,t){return[s[0]*t,s[1]*t,s[2]*t]}function Cc(s){let t=Math.hypot(s[0],s[1],s[2])||1;return[s[0]/t,s[1]/t,s[2]/t]}function lr(s,t,e,n,i,r){return n.kind="planet",n.parent=-1,n.index=s.bodies.length,n.name=r,n.orbit=t.makeOrbit(e,i*fe,s.star.mass,.03),n.eqTemp=278*Math.pow(Math.max(s.star.lum,1e-5),.25)/Math.sqrt(i),t.spinFor(n,e,!1),s.bodies.push(n),n}function ei(s,t,e,n,i,r,a){return i.kind="moon",i.parent=n.index,i.index=s.bodies.length,i.name=a,i.orbit=t.makeOrbit(e,r,n.mass,.03),i.eqTemp=n.eqTemp,i.spin={locked:!0,tilt:[0,0,0,1],period:i.orbit.period,phase0:0},s.bodies.push(i),i}function vx(s,t){return s.bodies.filter(n=>n.rings).concat(s.bodies.filter(n=>n.kind==="moon"&&n.parent>=0&&s.bodies[n.parent].rings)).concat(s.bodies.filter(n=>n.type==="gas"||n.type==="icegiant")).concat(s.bodies)[0]}function xx(s,t,e,n){s.bodies.length||lr(s,e,t,e.makeSolid(s,t,"barren",zi*.4,We*.06,200),1.2*Math.sqrt(s.star.lum),`${s.starData.name} b`);let i=vx(s,t),r=e.orbitSignal("beacon",i,t,i.rings?1:t.range(1.25,1.6));r.trail=n,s.signals.push(r)}function yx(s,t,e){let n=s.bodies.find(r=>r.type==="gas"&&r.parent<0);if(!n){let r=Math.max(s.star.lum,.001),a=5.2*Math.sqrt(r)*1.1;n=lr(s,e,t,e.makeGas(t,!1,Vi*.92,Gi*.8,278*Math.pow(r,.25)/Math.sqrt(a)),a,`${s.starData.name} ${"bcdefghij"[s.bodies.filter(o=>o.parent<0).length]}`)}n.rings||(n.rings={inner:n.radius*1.3,outer:n.radius*2.25,seed:t.int(1,1e9),color:gn("#d4c6ad"),opacity:.85});for(let r of s.bodies)r.parent===n.index&&r.orbit.a<n.rings.outer*1.2&&(r.orbit.a=n.rings.outer*1.3+r.radius*4);let i=s.bodies.find(r=>r.parent===n.index&&r.solid);i||(i=ei(s,e,t,n,e.makeSolid(s,t,"ice",13e5,.011*We,n.eqTemp),n.radius*4.2,`${n.name} I`)),s.signals.push({...e.orbitSignal("beacon",n,t,1),trail:0}),s.signals[s.signals.length-1].orbit.a=n.rings.outer*1.12}function _x(s,t,e){let n=Math.max(s.star.lum,.001),i=3.4*Math.sqrt(n),r=278*Math.pow(n,.25)/Math.sqrt(i),a=lr(s,e,t,e.makeGas(t,!1,Vi*1.02,Gi*1.4,r),i,`${s.starData.name} ${"bcdefghij"[s.bodies.filter(c=>c.parent<0).length]}`);a.rings={inner:a.radius*1.35,outer:a.radius*2.4,seed:t.int(1,1e9),color:gn("#d8ccb6"),opacity:.9},a.spin.tilt=Je(1,0,0,.42);let o=ei(s,e,t,a,e.makeSolid(s,t,"barren",105e4,.0075*We,r),a.radius*5.5,`${a.name} I`);o.terrain.mare=.3,o.restingPlace=!0;let l=e.surfaceSignal("petrel",o,t,.22,-.18);l.trail=_i,s.signals.push(l)}function Mx(s,t,e){let n=(u,d,f,p,v,g={})=>{let m=278/Math.sqrt(p),_=e.makeSolid(s,t,u,d*zi,f*We,m,g);return lr(s,e,t,_,p,v)},i=(u,d,f,p,v,g)=>{let m=278/Math.sqrt(p),_=e.makeGas(t,u,d*Vi,f*Gi,m);return g&&(_.gas.palette=g.map(gn)),lr(s,e,t,_,p,v)};n("barren",.383,.055,.387,"Mercury"),n("venus",.949,.815,.723,"Venus");let r=n("terran",1,1,1,"Earth",{life:!0});r.terrain.sea=-.06,r.life=!0,r.terrain.life=!0,r.home=!0,r.atmosphere=e.atmosphere("terran",1,9.81,288,t),ei(s,e,t,r,e.makeSolid(s,t,"barren",1737e3,.0123*We,270),3844e5,"Moon");let a=n("desert",.532,.107,1.524,"Mars"),o=i(!1,1,1,5.2,"Jupiter",["#c8a27a","#ebdfc8","#9b6a45","#f2e7d2","#7a4a33"]);ei(s,e,t,o,e.makeSolid(s,t,"lava",1821600,.015*We,900,{moon:!0}),4217e5,"Io"),ei(s,e,t,o,e.makeSolid(s,t,"ice",1560800,.008*We,102),6709e5,"Europa"),ei(s,e,t,o,e.makeSolid(s,t,"ice",2634100,.025*We,110),10704e5,"Ganymede"),ei(s,e,t,o,e.makeSolid(s,t,"barren",2410300,.018*We,134),18827e5,"Callisto");let l=i(!1,.832,.299,9.54,"Saturn",["#d8c49a","#efe2c0","#b39b6e","#e8d5a8"]);l.rings={inner:l.radius*1.24,outer:l.radius*2.27,seed:4242,color:gn("#d9cdb4"),opacity:.92},l.spin.tilt=Je(1,0,0,.466),ei(s,e,t,l,e.makeSolid(s,t,"titan",2574700,.0225*We,94),12219e5,"Titan");let c=i(!0,.362,.0457,19.2,"Uranus",["#a6d8de","#b7e0e3","#98ced6","#c6e7e8"]);c.spin.tilt=Je(1,0,0,1.706),c.rings={inner:c.radius*1.6,outer:c.radius*2,seed:77,color:gn("#3a3a3a"),opacity:.25};let h=i(!0,.352,.054,30.07,"Neptune",["#3f6fc4","#5a86d4","#2d58a8","#7ea2e0"]);ei(s,e,t,h,e.makeSolid(s,t,"ice",1353400,.0036*We,38),3548e5,"Triton"),s.home=!0}var ku=[0,0,0,1],vn=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],Tn=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],Ae=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],qi=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],nn=s=>Math.hypot(s[0],s[1],s[2]),yn=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],xn=s=>{let t=nn(s)||1;return[s[0]/t,s[1]/t,s[2]/t]};function Xi(s){let t=Math.hypot(s[0],s[1],s[2],s[3])||1;return[s[0]/t,s[1]/t,s[2]/t,s[3]/t]}function Hu(s,t,e){let n=s[0]*t[0]+s[1]*t[1]+s[2]*t[2]+s[3]*t[3],i=t;if(n<0&&(n=-n,i=[-t[0],-t[1],-t[2],-t[3]]),n>.9995)return Xi([s[0]+(i[0]-s[0])*e,s[1]+(i[1]-s[1])*e,s[2]+(i[2]-s[2])*e,s[3]+(i[3]-s[3])*e]);let r=Math.acos(n),a=Math.sin(r),o=Math.sin((1-e)*r)/a,l=Math.sin(e*r)/a;return[s[0]*o+i[0]*l,s[1]*o+i[1]*l,s[2]*o+i[2]*l,s[3]*o+i[3]*l]}function zu(s,t){let e=qi(s,t);if(e<-.999999){let i=yn([1,0,0],s);return nn(i)<1e-6&&(i=yn([0,1,0],s)),i=xn(i),[i[0],i[1],i[2],0]}let n=yn(s,t);return Xi([n[0],n[1],n[2],1+e])}var et={sub:vn,add:Tn,scl:Ae,dot:qi,len:nn,cross:yn,nrm:xn},Ic={qNormalize:Xi,qSlerp:Hu,qFromTo:zu},cr=class{constructor(){this.frame=-1,this.rot=!1,this.p=[0,0,0],this.v=[0,0,0],this.q=[0,0,0,1],this.w=[0,0,0],this.mode="flight",this.throttle=0,this.cruiseV=0,this.cruiseCharge=0,this.fuel=1,this.heat=0,this.hull=1,this.gearDown=!1,this.lights=!1,this.thrust=0,this.alt=1/0,this.ground=null,this.groundNormal=[0,1,0],this.vertSpeed=0,this.events=[],this.bottom=3.9,this.landBody=-1,this.autoLevel=0,this.speed=0}frameState(t,e=this.frame,n=this.rot){if(e<0)return{pos:[0,0,0],q:ku,vel:[0,0,0],omega:[0,0,0]};let i=t.positions[e],r=t.velocity(e);return{pos:i,vel:r,q:n?t.orient[e]:ku,omega:n?Du(t.sys,e):[0,0,0]}}worldPos(t){let e=this.frameState(t);return Tn(e.pos,Yt(e.q,this.p))}worldQ(t){let e=this.frameState(t);return Ue(e.q,this.q)}worldVel(t){let e=this.frameState(t),n=Yt(e.q,this.p);return Tn(Tn(e.vel,Yt(e.q,this.v)),yn(e.omega,n))}setFrame(t,e,n){if(e===this.frame&&n===this.rot)return;let i=this.worldPos(t),r=this.worldVel(t),a=this.worldQ(t),o=this.frameState(t,e,n),l=un(o.q),c=vn(i,o.pos);this.p=Yt(l,c),this.v=Yt(l,vn(vn(r,o.vel),yn(o.omega,c))),this.q=Xi(Ue(l,a)),this.frame=e,this.rot=n}chooseFrame(t){let e=this.worldPos(t),n=t.sys,i=-1;for(let a of n.bodies){if(a.parent>=0)continue;let o=t.positions[a.index];if(nn(vn(e,o))<a.soi){i=a.index;for(let l of a.children){let c=n.bodies[l];nn(vn(e,t.positions[l]))<c.soi&&(i=l)}}}let r=!1;if(i>=0){let a=n.bodies[i],o=nn(vn(e,t.positions[i])),l=a.radius*1.5+(a.atmosphere?a.atmosphere.top:0);r=this.frame===i&&this.rot?o<l*1.08:o<l}this.mode==="landed"&&(i=this.frame,r=!0),this.setFrame(t,i,r)}get forward(){return Yt(this.q,[0,0,-1])}get up(){return Yt(this.q,[0,1,0])}get right(){return Yt(this.q,[1,0,0])}measureGround(t,e){if(this.ground=null,this.alt=1/0,this.frame<0)return;let n=t.sys.bodies[this.frame],i=nn(this.p),r=this.rot?Ae(this.p,1/i):Yt(un(t.orient[this.frame]),Ae(this.p,1/i)),a=n.solid?e(this.frame,r):0;this.groundH=a,this.alt=i-(n.radius+a),this.ground={body:n,local:r,h:a,d:i}}terrainNormal(t,e){let n=this.ground;if(!n||!n.body.solid)return this.rot?xn(this.p):xn(this.p);let i=n.local,r=yn(i,[0,1,0]);nn(r)<.001&&(r=yn(i,[1,0,0])),r=xn(r);let a=yn(i,r),o=2.5/n.body.radius,l=n.body.radius,c=(v,g)=>{let m=xn(Tn(i,Tn(Ae(r,v*o),Ae(a,g*o)))),_=e(this.frame,m);return Ae(m,l+_)},h=c(-1,0),u=c(1,0),d=c(0,-1),f=c(0,1),p=xn(yn(vn(u,h),vn(f,d)));return qi(p,i)<0&&(p=Ae(p,-1)),this.rot||(p=Yt(t.orient[this.frame],p)),p}steer(t,e,n){let i=e.stick,r=this.mode==="cruise"||this.mode==="jump",a=this.mode==="landed",o=r?.42:1,l=r?.8:1.5,c=0,h=0,u=0;if(!a&&!n&&this.mode!=="jump"&&(c=-i.y*o,h=-i.x*o),!a&&this.mode!=="jump"&&(e.down("ArrowUp")&&(c-=o*.7),e.down("ArrowDown")&&(c+=o*.7),e.down("ArrowLeft")&&(h+=o*.7),e.down("ArrowRight")&&(h-=o*.7),e.down("KeyA")&&(u+=l),e.down("KeyD")&&(u-=l)),this.mode==="flight"&&this.alt<600&&this.frame>=0){let p=xn(this.p),v=this.up,g=yn(v,p),m=Yt(un(this.q),g),_=pe(1-Math.hypot(i.x,i.y)*2,0,1)*pe((600-this.alt)/400,0,1)*1.2;c+=m[0]*_,u+=m[2]*_}let d=1-Math.exp(-t*(r?3:5));this.w[0]+=(c-this.w[0])*d,this.w[1]+=(h-this.w[1])*d,this.w[2]+=(u-this.w[2])*d;let f=nn(this.w)*t;if(f>1e-9){let p=xn(this.w);this.q=Xi(Ue(this.q,Je(p[0],p[1],p[2],f)))}}turnToward(t,e,n=.8){let i=this.forward,r=qi(i,t),a=yn(i,t),o=nn(a);if(o<1e-6&&r>0)return 1;let l=Math.atan2(o,r),c=Math.min(l,n*e),h=o>1e-6?Ae(a,1/o):this.up;return this.q=Xi(Ue(Je(h[0],h[1],h[2],c),this.q)),this.w=[0,0,0],r}updateFlight(t,e,n,i){let r=this.frame>=0?n.sys.bodies[this.frame]:null,a=[0,0,0],o=r?r.mass:n.sys.star.mass,l=nn(this.p);l>1&&(a=Ae(this.p,-xi*o/(l*l*l))),r||(a=Ae(this.p,-xi*n.sys.star.mass/Math.max(l*l*l,1)));let c=nn(a),h=this.alt,u=pe(60+(isFinite(h)?h:1e9)*.35,60,2500);r&&r.atmosphere&&h<r.atmosphere.top&&(u=Math.min(u,120+h*.05+400/Math.max(r.atmosphere.P||1,.1)));let d=[0,0,0];e.down("KeyQ")&&(d[0]-=1),e.down("KeyE")&&(d[0]+=1),(e.down("KeyR")||e.down("Space")&&!1)&&(d[1]+=1),e.down("KeyF")&&(d[1]-=1);let f=pe(15+(isFinite(h)?h:1e4)*.05,15,80),p=[d[0]*f,d[1]*f*.8,-this.throttle*u],v=Yt(this.q,p),m=vn(Ae(vn(v,this.v),1/.9),a),_=Yt(un(this.q),m),x={fwd:34,back:16,lat:12,up:26,down:12};_[0]=pe(_[0],-x.lat,x.lat),_[1]=pe(_[1],-x.down,x.up),_[2]=pe(_[2],-x.fwd,x.back),this.thrust=pe(Math.max(-_[2],0)/x.fwd+Math.abs(_[1])/x.up*.25,0,1);let y=Tn(Yt(this.q,_),a);this.v=Tn(this.v,Ae(y,t)),this.p=Tn(this.p,Ae(this.v,t)),this.gmag=c,this.canHover=x.up>c*1.02}updateCruise(t,e){let n=pe(.38*e,400,2400*299792458),i=this.throttle*n;this.cruiseV<i?this.cruiseV=Math.min(i,this.cruiseV*Math.exp(1.15*t)+300*t):this.cruiseV=i+(this.cruiseV-i)*Math.exp(-5*t),this.cruiseV=Math.min(this.cruiseV,n),this.cruiseCap=n,this.v=Ae(this.forward,this.cruiseV),this.p=Tn(this.p,Ae(this.v,t)),this.thrust=0}collide(t,e){if(this.frame<0||this.mode!=="flight")return null;this.measureGround(t,e);let n=this.ground;if(!n)return null;let i=n.body;if(!i.solid)return this.alt<0?{type:"gas",depth:-this.alt}:null;let r=this.alt-this.bottom;if(r>0)return null;let a=this.terrainNormal(t,e),o=xn(this.p),l=qi(this.v,a),c=nn(this.v),h=qi(a,o)>.82,u=qi(this.up,a)>.8,d=this.gearReady;if(this.p=Tn(this.p,Ae(o,-r)),d&&c<7.5&&h&&u&&i.landable)return{type:"land",normal:a,speed:c};let f=0,p=Math.max(-l,0);return p>(d?6:2.5)&&(f=(p-(d?6:2.5))*(d?.025:.05)),!i.landable&&p>1&&(f+=.05),l<0&&(this.v=vn(this.v,Ae(a,l*1.35))),this.v=Ae(this.v,.92),{type:"scrape",damage:f,impact:p,normal:a}}land(t,e){this.mode="landed",this.v=[0,0,0],this.w=[0,0,0],this.throttle=0,this.landNormal=e,this.landBody=this.frame;let n=zu(this.up,e);this.landQ=Xi(Ue(n,this.q))}updateLanded(t,e,n){if(this.landQ&&(this.q=Hu(this.q,this.landQ,1-Math.exp(-t*4))),this.measureGround(e,n),this.ground){let i=xn(this.p),r=this.ground.body.radius+this.groundH+this.bottom,a=nn(this.p);this.p=Ae(i,a+(r-a)*(1-Math.exp(-t*6)))}this.v=[0,0,0],this.thrust=0}takeoff(){this.mode="flight",this.v=Ae(xn(this.p),4),this.landQ=null,this.events.push("takeoff")}};var Gu=1e3,Wu=Math.acosh(Gu),La=6,hr=7,Vu=4.5,Mi=7.5,Pc=s=>Wu*Math.pow(Math.max(0,Math.min(1,s)),2.4),Da=class{constructor(t){this.game=t,this.phase="idle"}get active(){return this.phase!=="idle"}start(t){let e=this.game;this.target=t,this.origin=e.star,this.distLy=me(t.pos,this.origin.pos);let n=this.distLy;this.dir=[(t.pos[0]-this.origin.pos[0])/n,(t.pos[1]-this.origin.pos[1])/n,(t.pos[2]-this.origin.pos[2])/n],this.phase="charge",this.t=0,this.swapped=!1,this.homeAdded=0,this.homeTotal=n+.35,this.shipTotal=n/Gu+(hr+Mi)*2*Rs/Hi,this.shipAdded=0,e.ship.mode="jump",e.ship.throttle=0,e.audio.engage()}cancel(t){let e=this.game;this.phase="idle",e.ship.mode="flight",Cs(e.engine.sky.uniforms,0),t&&e.hud.note(t,"warn")}beta(){return this.phase==="accel"?Math.tanh(Pc(this.t/hr)):this.phase==="transit"?Math.tanh(Wu):this.phase==="decel"?Math.tanh(Pc(1-this.t/Mi)):0}remaining(t){let e=0,n=400,i=(Mi-t)/n;for(let r=0;r<n;r++){let a=t+(r+.5)*i;e+=Math.tanh(Pc(1-a/Mi))*299792458*i}return e}update(t){let e=this.game,n=e.ship;this.t+=t;let i=e.engine.sky,r=0;if(this.phase==="charge"){let o=n.frame>=0&&n.rot?e.dirToFrame(this.dir):e.dirToFrame(this.dir),l=n.turnToward(o,t,.7);r=this.t/La*.5,this.t>=La&&(l<.9995?this.t=La-.5:(n.setFrame(e.world,-1,!1),n.v=[0,0,0],this.phase="accel",this.t=0,e.audio.jumpBoom(),e.engine.post.flash=.6))}else if(this.phase==="accel"){let o=this.beta();n.p=[n.p[0]+this.dir[0]*o*299792458*t,n.p[1]+this.dir[1]*o*299792458*t,n.p[2]+this.dir[2]*o*299792458*t],n.q=e.qLookDir(this.dir),r=.5+.5*(this.t/hr),this.advanceClocks(t,.03),this.t>=hr&&(this.phase="transit",this.t=0)}else if(this.phase==="transit")r=1,this.advanceClocks(t,.94),!this.swapped&&this.t>.6&&(this.swapped=!0,this.decelDistance=this.remaining(0),e.arriveSystem(this.target,this.dir,this.decelDistance)),this.t>=Vu&&!e.engine.sky.pending&&(this.phase="decel",this.t=0);else if(this.phase==="decel"){let o=this.remaining(Math.min(this.t,Mi)),l=e.arrivalDistance;n.p=[-this.dir[0]*(l+o),-this.dir[1]*(l+o),-this.dir[2]*(l+o)],n.q=e.qLookDir(this.dir),r=1-this.t/Mi,this.advanceClocks(t,.03),this.t>=Mi&&this.finish()}let a=this.beta();return Cs(i.uniforms,a),i.uniforms.uVelDir.value.set(this.dir[0],this.dir[1],this.dir[2]),this.jumpLevel=r,r}advanceClocks(t,e){let n=this.game,i=this.phase==="transit"?Vu:this.phase==="accel"?hr:Mi,r=Math.min(this.homeTotal-this.homeAdded,this.homeTotal*e*t/i);this.homeAdded+=r,n.homeYears+=r;let a=Math.min(this.shipTotal-this.shipAdded,this.shipTotal*e*t/i);this.shipAdded+=a,n.shipYears+=a}finish(){let t=this.game;t.homeYears+=this.homeTotal-this.homeAdded,t.shipYears+=this.shipTotal-this.shipAdded,this.phase="idle",Cs(t.engine.sky.uniforms,0),t.ship.mode="flight",t.ship.v=[0,0,0],t.ship.throttle=0,t.onArrived(this.origin,this.distLy)}hudInfo(){let t=this.beta(),e=1/Math.sqrt(Math.max(1-t*t,1e-12));return{title:{charge:`JUMP DRIVE CHARGING \xB7 ${Math.max(0,La-this.t).toFixed(1)} s`,accel:"ACCELERATING",transit:`IN TRANSIT TO ${this.target.name.toUpperCase()}`,decel:"DECELERATING"}[this.phase],beta:this.phase==="charge"?0:t,gamma:e,clock:`Aboard +${(this.shipAdded*365.25).toFixed(1)} days   \xB7   At home +${this.homeAdded.toFixed(2)} years`}}};var Ua=class{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.stick={x:0,y:0},this.mouseDelta={x:0,y:0},this.wheel=0,this.buttons=0,this.locked=!1,this.invertY=!1,this.sensitivity=1,this.enabled=!0,window.addEventListener("keydown",e=>{e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")||(["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code))}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.buttons=0}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||(this.stick.x=0,this.stick.y=0)}),window.addEventListener("mousemove",e=>{this.locked?(this.mouseDelta.x+=e.movementX,this.mouseDelta.y+=e.movementY):this.buttons&3&&(this.mouseDelta.x+=e.movementX,this.mouseDelta.y+=e.movementY)}),t.addEventListener("mousedown",e=>{this.buttons|=1<<e.button,e.button===0&&!this.locked&&this.enabled&&this.requestLock()}),window.addEventListener("mouseup",e=>{this.buttons&=~(1<<e.button)}),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("wheel",e=>{this.wheel+=Math.sign(e.deltaY),e.preventDefault()},{passive:!1})}requestLock(){try{let t=this.canvas.requestPointerLock?.();t&&t.catch&&t.catch(()=>{})}catch{}}releaseLock(){document.pointerLockElement&&document.exitPointerLock()}down(t){return this.enabled&&this.keys.has(t)}hit(t){return this.enabled&&this.pressed.has(t)}updateStick(t,e){let n=.0045*this.sensitivity;e||(this.stick.x+=this.mouseDelta.x*n,this.stick.y+=this.mouseDelta.y*n*(this.invertY?-1:1));let i=Math.hypot(this.stick.x,this.stick.y);i>1&&(this.stick.x/=i,this.stick.y/=i);let r=Math.exp(-t*1.6);return this.stick.x*=r,this.stick.y*=r,this.stick}endFrame(){this.pressed.clear(),this.mouseDelta.x=0,this.mouseDelta.y=0,this.wheel=0}};var qu={aeolian:[0,2,3,5,7,8,10],dorian:[0,2,3,5,7,9,10],lydian:[0,2,4,6,7,9,11],phrygian:[0,1,3,5,7,8,10],pentatonic:[0,3,5,7,10],mixolydian:[0,2,4,5,7,9,10]};function Sx(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Na=class{constructor(){this.ctx=null,this.volume={master:.8,music:.7,sfx:.8},this.nextChord=0,this.nextBell=0,this.mood={root:55,mode:qu.aeolian,seed:1}}start(){if(this.ctx){this.ctx.resume?.();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.volume.master;let n=e.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=3,n.attack.value=.02,n.release.value=.4,this.master.connect(n).connect(e.destination),this.reverb=e.createConvolver(),this.reverb.buffer=this.impulse(6.5,2.6),this.reverbOut=e.createGain(),this.reverbOut.gain.value=.9,this.reverb.connect(this.reverbOut).connect(this.master),this.music=e.createGain(),this.music.gain.value=this.volume.music,this.music.connect(this.master),this.musicSend=e.createGain(),this.musicSend.gain.value=1,this.music.connect(this.musicSend).connect(this.reverb),this.sfx=e.createGain(),this.sfx.gain.value=this.volume.sfx,this.sfx.connect(this.master),this.sfxSend=e.createGain(),this.sfxSend.gain.value=.35,this.sfx.connect(this.sfxSend).connect(this.reverb),this.noiseBuf=this.noise(4,!1),this.brownBuf=this.noise(4,!0),this.buildContinuous(),this.nextChord=e.currentTime+1.5,this.nextBell=e.currentTime+6}setVolumes(t){if(Object.assign(this.volume,t),!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.volume.master,e,.1),this.music.gain.setTargetAtTime(this.volume.music,e,.1),this.sfx.gain.setTargetAtTime(this.volume.sfx,e,.1)}impulse(t,e){let n=this.ctx,i=Math.floor(n.sampleRate*t),r=n.createBuffer(2,i,n.sampleRate);for(let a=0;a<2;a++){let o=r.getChannelData(a),l=0;for(let c=0;c<i;c++){let h=c/i;l+=(Math.random()*2-1-l)*(.35-.25*h),o[c]=l*Math.pow(1-h,e)*(c<200?c/200:1)}}return r}noise(t,e){let n=this.ctx,i=Math.floor(n.sampleRate*t),r=n.createBuffer(1,i,n.sampleRate),a=r.getChannelData(0),o=0;for(let l=0;l<i;l++){let c=Math.random()*2-1;e?(o=(o+.02*c)/1.02,a[l]=o*3.5):a[l]=c}return r}loop(t){let e=this.ctx.createBufferSource();return e.buffer=t,e.loop=!0,e.start(),e}buildContinuous(){let t=this.ctx;this.hum=t.createOscillator(),this.hum.type="sawtooth",this.hum.frequency.value=46,this.humF=t.createBiquadFilter(),this.humF.type="lowpass",this.humF.frequency.value=160,this.humG=t.createGain(),this.humG.gain.value=0,this.hum.connect(this.humF).connect(this.humG).connect(this.sfx),this.hum.start(),this.room=this.loop(this.brownBuf),this.roomF=t.createBiquadFilter(),this.roomF.type="lowpass",this.roomF.frequency.value=220,this.roomG=t.createGain(),this.roomG.gain.value=.05,this.room.connect(this.roomF).connect(this.roomG).connect(this.sfx),this.thr=this.loop(this.noiseBuf),this.thrF=t.createBiquadFilter(),this.thrF.type="bandpass",this.thrF.frequency.value=500,this.thrF.Q.value=.7,this.thrG=t.createGain(),this.thrG.gain.value=0,this.thr.connect(this.thrF).connect(this.thrG).connect(this.sfx),this.cru=this.loop(this.brownBuf),this.cruF=t.createBiquadFilter(),this.cruF.type="lowpass",this.cruF.frequency.value=200,this.cruG=t.createGain(),this.cruG.gain.value=0,this.cru.connect(this.cruF).connect(this.cruG).connect(this.sfx),this.cruTone=t.createOscillator(),this.cruTone.type="sine",this.cruTone.frequency.value=33,this.cruToneG=t.createGain(),this.cruToneG.gain.value=0,this.cruTone.connect(this.cruToneG).connect(this.sfx),this.cruTone.start(),this.wind=this.loop(this.noiseBuf),this.windF=t.createBiquadFilter(),this.windF.type="bandpass",this.windF.frequency.value=400,this.windF.Q.value=.5,this.windG=t.createGain(),this.windG.gain.value=0,this.wind.connect(this.windF).connect(this.windG).connect(this.sfx),this.scoop=this.loop(this.brownBuf),this.scoopF=t.createBiquadFilter(),this.scoopF.type="lowpass",this.scoopF.frequency.value=600,this.scoopG=t.createGain(),this.scoopG.gain.value=0,this.scoop.connect(this.scoopF).connect(this.scoopG).connect(this.sfx),this.jmp=t.createOscillator(),this.jmp.type="sawtooth",this.jmp.frequency.value=40,this.jmpF=t.createBiquadFilter(),this.jmpF.type="lowpass",this.jmpF.frequency.value=300,this.jmpF.Q.value=6,this.jmpG=t.createGain(),this.jmpG.gain.value=0,this.jmp.connect(this.jmpF).connect(this.jmpG).connect(this.sfx),this.jmp.start(),this.drone=t.createOscillator(),this.drone.type="sine",this.drone.frequency.value=55,this.drone2=t.createOscillator(),this.drone2.type="sine",this.drone2.frequency.value=82.5,this.droneG=t.createGain(),this.droneG.gain.value=0,this.drone.connect(this.droneG),this.drone2.connect(this.droneG),this.droneG.connect(this.music),this.drone.start(),this.drone2.start(),this.alarmT=0}setMood(t,e){let n=Sx(t),i=e==="M"||e==="L"?n()<.5?"phrygian":"aeolian":e==="A"||e==="B"||e==="O"||e==="F"?n()<.5?"lydian":"mixolydian":e==="D"||e==="N"||e==="X"?"pentatonic":n()<.5?"dorian":"aeolian",r=41.2*Math.pow(2,Math.floor(n()*7)/12);if(this.mood={root:r,mode:qu[i],seed:t,rand:n},this.ctx){let a=this.ctx.currentTime;this.drone.frequency.setTargetAtTime(r,a,4),this.drone2.frequency.setTargetAtTime(r*1.5,a,4)}}freq(t,e){let n=this.mood.mode,i=Math.floor(t/n.length),r=(t%n.length+n.length)%n.length;return this.mood.root*Math.pow(2,e+i+n[r]/12)}padChord(t){let e=this.ctx,n=this.mood.rand||Math.random,i=Math.floor(n()*7),r=[i,i+2,i+4,i+(n()<.5?6:7)],a=26+n()*14;for(let o=0;o<r.length;o++){let l=this.freq(r[o],1+(o>1?1:0)),c=e.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(.022/(1+o*.3),t+7+n()*3),c.gain.setValueAtTime(.022/(1+o*.3),t+a-10),c.gain.linearRampToValueAtTime(0,t+a);let h=e.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(380,t),h.frequency.linearRampToValueAtTime(900+n()*700,t+a*.5),h.frequency.linearRampToValueAtTime(420,t+a);for(let u of[-6,5]){let d=e.createOscillator();d.type=o===0?"triangle":"sawtooth",d.frequency.value=l,d.detune.value=u+(n()-.5)*4,d.connect(h),d.start(t),d.stop(t+a+.1)}h.connect(c).connect(this.music)}return a}bell(t,e,n=.05){let i=this.ctx,r=i.createOscillator();r.type="sine",r.frequency.value=e;let a=i.createOscillator();a.type="sine",a.frequency.value=e*3.5;let o=i.createGain();o.gain.setValueAtTime(e*2.2,t),o.gain.exponentialRampToValueAtTime(e*.05,t+2.5),a.connect(o).connect(r.frequency);let l=i.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(n,t+.008),l.gain.exponentialRampToValueAtTime(1e-4,t+6);let c=i.createStereoPanner?i.createStereoPanner():null;c&&(c.pan.value=(Math.random()-.5)*.8),r.connect(l),(c?l.connect(c):l).connect(this.music),r.start(t),a.start(t),r.stop(t+6.2),a.stop(t+6.2)}updateMusic(){let t=this.ctx.currentTime,e=this.mood.rand||Math.random;if(t>=this.nextChord){let n=this.padChord(t+.05);this.nextChord=t+n*(.55+e()*.25)+(e()<.25?20:0)}if(t>=this.nextBell){let n=e()<.6?1:e()<.7?2:3,i=Math.floor(e()*10);for(let r=0;r<n;r++)this.bell(t+r*(.9+e()*.8),this.freq(i,3+(e()<.3?1:0)),.03+e()*.025),i+=e()<.5?2:-1;this.nextBell=t+7+e()*16}}update(t){if(!this.ctx)return;let e=this.ctx.currentTime,n=.15;this.humG.gain.setTargetAtTime(.018+t.thrust*.05,e,n),this.humF.frequency.setTargetAtTime(140+t.thrust*260,e,n),this.thrG.gain.setTargetAtTime(t.thrust*.09+(t.rcs?.02:0),e,.08),this.thrF.frequency.setTargetAtTime(380+t.thrust*600,e,n);let i=t.cruise?Math.min(1,Math.log10(Math.max(t.speed,1e3)/1e3)/6):0;this.cruG.gain.setTargetAtTime(t.cruise?.06+i*.12:0,e,.4),this.cruF.frequency.setTargetAtTime(120+i*600,e,.4),this.cruToneG.gain.setTargetAtTime(t.cruise?.03+i*.03:0,e,.5);let r=Math.min(1,t.windDensity*(.15+Math.min(t.airSpeed/300,1.5)));this.windG.gain.setTargetAtTime(r*.16,e,.5),this.windF.frequency.setTargetAtTime(250+500*Math.min(t.airSpeed/300,1)+150*Math.sin(e*.37)*Math.sin(e*.13),e,.3),this.scoopG.gain.setTargetAtTime(t.scoop*.18+Math.max(0,t.heat-.6)*.1,e,.3),this.scoopF.frequency.setTargetAtTime(300+t.scoop*900,e,.3),this.jmpG.gain.setTargetAtTime(t.jump*.06,e,.2),this.jmp.frequency.setTargetAtTime(38+t.jump*70,e,.3),this.jmpF.frequency.setTargetAtTime(200+t.jump*1600,e,.3),this.roomG.gain.setTargetAtTime(.035,e,1),this.droneG.gain.setTargetAtTime(t.musicDrone?.012:0,e,3),t.heat>.85&&e-this.alarmT>1.2&&(this.alarmT=e,this.tone(880,.08,.04,"square"),this.tone(660,.08,.04,"square",.14)),t.music&&this.updateMusic()}tone(t,e,n,i="sine",r=0,a=null){if(!this.ctx)return;let o=this.ctx,l=o.currentTime+r,c=o.createOscillator();c.type=i,c.frequency.value=t;let h=o.createGain();h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(n,l+.005),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h).connect(a||this.sfx),c.start(l),c.stop(l+e+.05)}sweep(t,e,n,i,r="sine"){if(!this.ctx)return;let a=this.ctx,o=a.currentTime,l=a.createOscillator();l.type=r,l.frequency.setValueAtTime(t,o),l.frequency.exponentialRampToValueAtTime(e,o+n);let c=a.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(i,o+.02),c.gain.exponentialRampToValueAtTime(1e-4,o+n),l.connect(c).connect(this.sfx),l.start(o),l.stop(o+n+.05)}thud(t=.3){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this.brownBuf;let r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=160;let a=e.createGain();a.gain.setValueAtTime(t,n),a.gain.exponentialRampToValueAtTime(1e-4,n+.9),i.connect(r).connect(a).connect(this.sfx),i.start(n,Math.random()*2),i.stop(n+1),this.tone(55,.5,t*.4)}servo(t=1.4){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(140,n),i.frequency.linearRampToValueAtTime(190,n+t);let r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=3;let a=e.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.025,n+.1),a.gain.setValueAtTime(.025,n+t-.2),a.gain.linearRampToValueAtTime(0,n+t),i.connect(r).connect(a).connect(this.sfx),i.start(n),i.stop(n+t+.05),this.tone(320,.12,.05,"triangle",t)}blip(){this.tone(1760,.06,.025)}select(){this.tone(1320,.05,.02),this.tone(1980,.08,.018,"sine",.05)}deny(){this.tone(220,.15,.04,"triangle")}pulse(){this.sweep(180,1400,1.6,.06),this.tone(90,2.5,.05,"sine",0,this.music)}surveyed(){[0,4,7].forEach((t,e)=>this.bell(this.ctx?this.ctx.currentTime+e*.18:0,this.freq(t+7,3),.035))}message(){this.ctx&&(this.tone(988,.25,.03),this.tone(1318,.4,.025,"sine",.22))}engage(){this.sweep(60,220,1.2,.08,"triangle")}disengage(){this.sweep(260,60,.9,.07,"triangle")}jumpBoom(){this.thud(.5),this.sweep(800,30,3,.08)}arrive(){this.sweep(1200,140,3.5,.05),this.ctx&&this.bell(this.ctx.currentTime+1.5,this.freq(0,3),.05)}};var Zt="rgba(232,228,218,",Fs="#e3a54b",Xu="#e0674c",Fa=class{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.notes=[],this.v=new P,this.pulse=-1,this.visible=!0,this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.dpr=t,this.w=window.innerWidth,this.h=window.innerHeight,this.canvas.width=Math.round(this.w*t),this.canvas.height=Math.round(this.h*t)}note(t,e="info",n=7){this.notes.push({text:t,kind:e,t:0,life:n}),this.notes.length>6&&this.notes.shift()}project(t,e){let n=Math.hypot(e[0],e[1],e[2]);if(n===0)return null;this.v.set(e[0]/n,e[1]/n,e[2]/n).applyQuaternion(t.quaternion.clone().invert());let i=this.v.z>0,r=this.v.clone().applyMatrix4(t.projectionMatrix),a=(r.x*.5+.5)*this.w,o=(-r.y*.5+.5)*this.h;return i&&(a=this.w-a,o=this.h-o),{x:a,y:o,behind:i,on:!i&&a>=0&&a<=this.w&&o>=0&&o<=this.h}}text(t,e,n,{size:i=11,color:r=Zt+"0.82)",align:a="left",weight:o=500,spacing:l=.08}={}){let c=this.ctx;c.font=`${o} ${i}px "IBM Plex Mono", ui-monospace, Menlo, monospace`,c.fillStyle=r,c.textAlign=a,c.textBaseline="alphabetic","letterSpacing"in c&&(c.letterSpacing=`${l}em`),c.fillText(t,e,n)}bar(t,e,n,i,r,a,o){let l=this.ctx;this.text(a,t,e-6,{size:10,color:Zt+"0.55)",spacing:.16}),this.text(o,t+n,e-6,{size:10,color:r,align:"right"}),l.fillStyle=Zt+"0.12)",l.fillRect(t,e,n,3),l.fillStyle=r,l.fillRect(t,e,Math.max(0,Math.min(1,i))*n,3)}draw(t,e){let n=this.ctx;if(n.setTransform(this.dpr,0,0,this.dpr,0,0),n.clearRect(0,0,this.w,this.h),!this.visible||!e)return;let i=this.w,r=this.h,a=e.camera,o=Math.max(16,Math.min(i,r)*.035),l=this.project(a,e.noseDir);if(l&&l.on&&e.mode!=="landed"&&(n.strokeStyle=Zt+"0.55)",n.lineWidth=1,n.beginPath(),n.arc(l.x,l.y,9,.25,Math.PI-.25),n.moveTo(l.x+9*Math.cos(Math.PI+.25),l.y+9*Math.sin(Math.PI+.25)),n.arc(l.x,l.y,9,Math.PI+.25,Math.PI*2-.25),n.stroke(),n.beginPath(),n.moveTo(l.x-16,l.y),n.lineTo(l.x-12,l.y),n.moveTo(l.x+12,l.y),n.lineTo(l.x+16,l.y),n.stroke()),e.velDir&&e.mode==="flight"&&e.speed>3){let p=this.project(a,e.velDir);p&&p.on&&(n.strokeStyle="rgba(160,210,190,0.7)",n.beginPath(),n.arc(p.x,p.y,5,0,Math.PI*2),n.moveTo(p.x-5,p.y),n.lineTo(p.x-11,p.y),n.moveTo(p.x+5,p.y),n.lineTo(p.x+11,p.y),n.moveTo(p.x,p.y-5),n.lineTo(p.x,p.y-10),n.stroke())}for(let p of e.labels||[]){let v=this.project(a,p.rel);if(!v||!v.on)continue;let g=p.alpha??.5;n.strokeStyle=Zt+g*.6+")",n.beginPath(),p.kind==="signal"?(n.moveTo(v.x,v.y-5),n.lineTo(v.x+5,v.y),n.lineTo(v.x,v.y+5),n.lineTo(v.x-5,v.y),n.closePath()):(n.moveTo(v.x+4,v.y-4),n.lineTo(v.x+12,v.y-12)),n.stroke(),this.text(p.name,v.x+14,v.y-14,{size:10,color:Zt+g+")"}),p.sub&&this.text(p.sub,v.x+14,v.y-3,{size:9,color:Zt+g*.7+")"})}if(e.target){let p=e.target,v=this.project(a,p.rel);if(v&&v.on){let g=Math.max(14,Math.min(220,p.angR/e.pixelAngle*1.15+8));n.strokeStyle=Zt+"0.85)",n.lineWidth=1.2;let m=Math.min(10,g*.5);n.beginPath();for(let[_,x]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.moveTo(v.x+_*g,v.y+x*(g-m)),n.lineTo(v.x+_*g,v.y+x*g),n.lineTo(v.x+_*(g-m),v.y+x*g);n.stroke(),this.text(p.name.toUpperCase(),v.x+g+8,v.y-4,{size:11,weight:600,spacing:.12}),this.text(p.info,v.x+g+8,v.y+10,{size:10,color:Zt+"0.6)"}),p.scan>0&&(n.strokeStyle="rgba(160,210,190,0.9)",n.lineWidth=2,n.beginPath(),n.arc(v.x,v.y,g+6,-Math.PI/2,-Math.PI/2+p.scan*Math.PI*2),n.stroke())}else if(v){let g=i/2,m=r/2,_=v.x-g,x=v.y-m,y=Math.hypot(_,x)||1;_/=y,x/=y;let R=Math.min((i/2-40)/Math.abs(_||1e-6),(r/2-40)/Math.abs(x||1e-6)),T=g+_*R,A=m+x*R;n.fillStyle=Zt+"0.8)",n.beginPath(),n.moveTo(T+_*10,A+x*10),n.lineTo(T-x*6,A+_*6),n.lineTo(T+x*6,A-_*6),n.closePath(),n.fill(),this.text(p.name.toUpperCase(),T-_*18,A-x*18+4,{size:10,align:_>0?"right":"left",color:Zt+"0.7)"})}}for(let p of e.skyMarkers||[]){let v=this.project(a,p.dir);!v||!v.on||(n.strokeStyle=p.color||Zt+"0.5)",n.lineWidth=1,n.beginPath(),n.arc(v.x,v.y,7,0,Math.PI*2),n.stroke(),this.text(p.name,v.x+11,v.y+4,{size:10,color:p.color||Zt+"0.6)"}))}this.text(e.systemName.toUpperCase(),o,o+6,{size:12,weight:600,spacing:.22}),this.text(e.systemSub,o,o+22,{size:10,color:Zt+"0.55)"}),this.text(e.timeLine,o,o+38,{size:10,color:Zt+"0.55)"}),e.objective&&this.text(e.objective.toUpperCase(),o,o+58,{size:10,color:"rgba(160,210,190,0.75)",spacing:.12}),this.text(e.homeLine,i-o,o+6,{size:10,align:"right",color:Zt+"0.6)",spacing:.14}),e.jumpLine&&this.text(e.jumpLine,i-o,o+22,{size:10,align:"right",color:e.jumpOk?Zt+"0.75)":Fs});let c=o,h=r-o;this.text(e.modeLabel,c,h-92,{size:10,color:e.modeColor||Zt+"0.6)",spacing:.24,weight:600}),this.text(cc(e.speed),c,h-66,{size:22,weight:500,spacing:.02}),e.mode==="cruise"&&e.cruiseCap?this.text(`LIMIT ${cc(e.cruiseCap)}`,c,h-50,{size:10,color:Zt+"0.5)"}):e.mode==="flight"&&this.text(e.gLine||"",c,h-50,{size:10,color:Zt+"0.5)"});let u=150;n.fillStyle=Zt+"0.12)",n.fillRect(c,h-36,u,3),n.fillStyle=Zt+"0.8)",n.fillRect(c,h-36,u*e.throttle,3),this.text("THROTTLE",c,h-42+26,{size:9,color:Zt+"0.45)",spacing:.2}),this.text(`${Math.round(e.throttle*100)}%`,c+u,h-42+26,{size:9,align:"right",color:Zt+"0.6)"}),isFinite(e.alt)&&e.alt<2e6&&(this.text("ALT",c+190,h-92,{size:10,color:Zt+"0.5)",spacing:.24}),this.text(yi(Math.max(0,e.alt)),c+190,h-66,{size:16}),e.mode==="flight"&&e.alt<5e4&&this.text(`${e.vs>=0?"+":""}${e.vs.toFixed(1)} m/s`,c+190,h-50,{size:10,color:e.vs<-8&&e.alt<300?Fs:Zt+"0.55)"})),e.gear&&this.text(e.gearLabel,c+190,h-30,{size:9,color:e.gearWarn?Fs:Zt+"0.5)",spacing:.18});let d=i-o-170;this.bar(d,h-80,170,e.fuel,e.fuel<.2?Fs:Zt+"0.8)","FUEL",`${Math.round(e.fuel*100)}%  \xB7  ${e.rangeLy.toFixed(1)} LY`),this.bar(d,h-50,170,e.heat,e.heat>.85?Xu:e.heat>.6?Fs:Zt+"0.8)","HEAT",`${Math.round(e.heat*100)}%`),this.bar(d,h-20,170,e.hull,e.hull<.3?Xu:e.hull<.6?Fs:Zt+"0.8)","HULL",`${Math.round(e.hull*100)}%`),e.scooping&&this.text("FUEL SCOOP ACTIVE",d,h-102,{size:10,color:"rgba(160,210,190,0.9)",spacing:.18});let f=r*.3+10;for(let p=this.notes.length-1;p>=0;p--){let v=this.notes[p];if(v.t+=t,v.t>v.life){this.notes.splice(p,1);continue}}for(let p of this.notes){let v=Math.min(1,p.t*3)*Math.min(1,(p.life-p.t)/1.2),g=p.kind==="warn"?`rgba(227,165,75,${v})`:p.kind==="good"?`rgba(160,210,190,${v})`:Zt+v*.85+")";this.text(p.text,o,f,{size:11,color:g}),f+=18}if(e.hint&&this.text(e.hint,i/2,r-o-4,{size:10,align:"center",color:Zt+"0.55)",spacing:.14}),e.centerText&&(this.text(e.centerText,i/2,r*.62,{size:12,align:"center",color:e.centerColor||Zt+"0.85)",spacing:.2,weight:600}),e.centerSub&&this.text(e.centerSub,i/2,r*.62+18,{size:10,align:"center",color:Zt+"0.6)",spacing:.12})),this.pulse>=0){this.pulse+=t;let p=this.pulse/2.2;p>1?this.pulse=-1:(n.strokeStyle=`rgba(160,210,190,${(1-p)*.5})`,n.lineWidth=1,n.beginPath(),n.arc(i/2,r/2,p*Math.hypot(i,r)*.6,0,Math.PI*2),n.stroke())}if(e.jump){let p=e.jump;this.text(p.title,i/2,r*.2,{size:12,align:"center",spacing:.3,weight:600}),p.beta>0&&this.text(`\u03B2 ${p.beta.toFixed(p.beta>.999?7:4)}   \u03B3 ${p.gamma.toFixed(p.gamma>100?0:2)}`,i/2,r*.2+20,{size:11,align:"center",color:Zt+"0.7)"}),this.text(p.clock,i/2,r*.2+38,{size:10,align:"center",color:Zt+"0.55)"})}}};var Ne="rgba(232,228,218,";function Oa(s,t=1,e=1){let n=i=>Math.round(Math.min(1,Math.pow(Math.max(i*e,0),.45454545454545453))*255);return`rgba(${n(s[0])},${n(s[1])},${n(s[2])},${t})`}var Ba=class{constructor(t){this.game=t,this.el=document.getElementById("map"),this.canvas=document.getElementById("map-canvas"),this.ctx=this.canvas.getContext("2d"),this.info=document.getElementById("map-info"),this.tabs=[...this.el.querySelectorAll("[data-maptab]")],this.tab="galaxy",this.open=!1,this.yaw=.6,this.pitch=.55,this.zoom=32,this.center=null,this.selected=null,this.hover=null,this.drag=null,this.stars=[],this.inset=document.getElementById("map-inset"),this.insetDrawn=!1,this.tabs.forEach(e=>e.addEventListener("click",()=>this.setTab(e.dataset.maptab))),document.getElementById("map-close").addEventListener("click",()=>this.toggle(!1)),this.canvas.addEventListener("mousedown",e=>{this.drag={x:e.clientX,y:e.clientY,moved:!1}}),window.addEventListener("mouseup",e=>{this.drag&&!this.drag.moved&&this.open&&this.click(e),this.drag=null}),window.addEventListener("mousemove",e=>{if(!this.open)return;let n=this.canvas.getBoundingClientRect();if(this.mouse={x:e.clientX-n.left,y:e.clientY-n.top},this.drag){let i=e.clientX-this.drag.x,r=e.clientY-this.drag.y;Math.abs(i)+Math.abs(r)>3&&(this.drag.moved=!0),this.tab==="galaxy"?(this.yaw+=i*.006,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch+r*.006))):(this.sysPan.x+=i,this.sysPan.y+=r),this.drag.x=e.clientX,this.drag.y=e.clientY}}),this.canvas.addEventListener("wheel",e=>{e.preventDefault(),this.tab==="galaxy"?this.zoom=Math.max(8,Math.min(70,this.zoom*(e.deltaY>0?1.12:.89))):this.sysZoom=Math.max(.4,Math.min(8,this.sysZoom*(e.deltaY>0?.89:1.12)))},{passive:!1}),this.sysPan={x:0,y:0},this.sysZoom=1}toggle(t,e){let n=t??!this.open;n===this.open&&!e||(this.open=n,this.el.hidden=!n,n&&(this.game.input.releaseLock(),e&&(this.tab=e),this.setTab(this.tab),this.refresh()),this.game.audio.blip())}setTab(t){this.tab=t,this.tabs.forEach(e=>e.setAttribute("aria-selected",e.dataset.maptab===t?"true":"false")),this.inset.hidden=t!=="galaxy",this.renderInfo()}refresh(){let t=this.game,e=t.star.pos;this.center=e,this.stars=t.universe.galaxy.starsInRadius(e,52).map(n=>n.star),!this.selected&&t.jumpTarget&&(this.selected=t.jumpTarget),this.renderInfo()}resize(){let t=this.canvas.getBoundingClientRect(),e=Math.min(window.devicePixelRatio||1,2);(this.canvas.width!==Math.round(t.width*e)||this.canvas.height!==Math.round(t.height*e))&&(this.canvas.width=Math.round(t.width*e),this.canvas.height=Math.round(t.height*e)),this.cw=t.width,this.ch=t.height,this.dpr=e}projectLy(t){let e=this.center,n=t[0]-e[0],i=t[1]-e[1],r=t[2]-e[2],a=Math.cos(this.yaw),o=Math.sin(this.yaw);[n,r]=[n*a-r*o,n*o+r*a];let l=Math.cos(this.pitch),c=Math.sin(this.pitch);[i,r]=[i*l-r*c,i*c+r*l];let h=this.zoom*2.6,d=Math.min(this.cw,this.ch)*.9/(r+h);return r+h<1?null:{x:this.cw/2+n*d*(h/this.zoom)*.5,y:this.ch/2-i*d*(h/this.zoom)*.5,depth:r,k:d}}draw(){if(!this.open)return;this.resize();let t=this.ctx;t.setTransform(this.dpr,0,0,this.dpr,0,0),t.clearRect(0,0,this.cw,this.ch),this.tab==="galaxy"?this.drawGalaxy(t):this.drawSystem(t)}drawGalaxy(t){let e=this.game,n=e.star.pos;t.lineWidth=1;for(let h=10;h<=50;h+=10){t.strokeStyle=Ne+(h===50?.06:.09)+")",t.beginPath();for(let d=0;d<=96;d++){let f=d/96*Math.PI*2,p=this.projectLy([n[0]+Math.cos(f)*h,n[1],n[2]+Math.sin(f)*h]);p&&(d?t.lineTo(p.x,p.y):t.moveTo(p.x,p.y))}t.stroke();let u=this.projectLy([n[0]+h,n[1],n[2]]);u&&this.label(t,`${h} ly`,u.x+4,u.y-3,9,Ne+"0.3)")}let i=e.jumpRange();t.strokeStyle="rgba(160,210,190,0.35)",t.setLineDash([3,4]),t.beginPath();for(let h=0;h<=96;h++){let u=h/96*Math.PI*2,d=this.projectLy([n[0]+Math.cos(u)*i,n[1],n[2]+Math.sin(u)*i]);d&&(h?t.lineTo(d.x,d.y):t.moveTo(d.x,d.y))}t.stroke(),t.setLineDash([]),this.edgeMarker(t,we,"SOL","rgba(232,210,150,0.8)"),this.edgeMarker(t,[0,0,0],"GALACTIC CORE",Ne+"0.35)",!0);let r=[];for(let h of this.stars){let u=this.projectLy(h.pos);u&&r.push({s:h,p:u})}r.sort((h,u)=>u.p.depth-h.p.depth);let a=null,o=12;for(let{s:h,p:u}of r){let d=me(h.pos,n),f=Math.max(h.lum,1e-4),p=Math.max(1.1,Math.min(5,1.6+Math.log10(f)*.75))*Math.min(1.6,u.k/14+.4),v=d<=i,g=this.projectLy([h.pos[0],n[1],h.pos[2]]);if(g&&Math.abs(h.pos[1]-n[1])>.5&&(d<=i*1.2||h===this.selected)&&(t.strokeStyle=Ne+"0.08)",t.beginPath(),t.moveTo(u.x,u.y),t.lineTo(g.x,g.y),t.stroke()),t.fillStyle=h.kind==="blackhole"?"rgba(180,140,255,0.9)":Oa(h.color,v?.95:.45,1),t.beginPath(),t.arc(u.x,u.y,p,0,Math.PI*2),t.fill(),e.visited.has(h.id)&&(t.strokeStyle=Ne+"0.45)",t.beginPath(),t.arc(u.x,u.y,p+3,0,Math.PI*2),t.stroke()),this.mouse){let m=Math.hypot(this.mouse.x-u.x,this.mouse.y-u.y);m<o&&(o=m,a={s:h,p:u})}}this.hover=a;let l=e.trailKnown();for(let h of l){let u=this.projectLy(h.star.pos);u&&(t.strokeStyle=h.found?"rgba(160,210,190,0.5)":"rgba(160,210,190,0.95)",t.lineWidth=1.2,t.beginPath(),t.moveTo(u.x,u.y-9),t.lineTo(u.x+9,u.y),t.lineTo(u.x,u.y+9),t.lineTo(u.x-9,u.y),t.closePath(),t.stroke(),h.found||this.label(t,`BEACON \xB7 ${h.star.name.toUpperCase()}`,u.x+13,u.y+3,10,"rgba(160,210,190,0.95)"))}let c=this.projectLy(n);if(c&&(t.strokeStyle=Ne+"0.9)",t.lineWidth=1,t.beginPath(),t.moveTo(c.x-14,c.y),t.lineTo(c.x-6,c.y),t.moveTo(c.x+6,c.y),t.lineTo(c.x+14,c.y),t.moveTo(c.x,c.y-14),t.lineTo(c.x,c.y-6),t.moveTo(c.x,c.y+6),t.lineTo(c.x,c.y+14),t.stroke(),this.label(t,e.star.name.toUpperCase(),c.x+16,c.y-8,10,Ne+"0.9)")),e.route&&c){t.strokeStyle="rgba(160,210,190,0.55)",t.setLineDash([2,4]),t.beginPath(),t.moveTo(c.x,c.y);for(let h of e.route.path){let u=this.projectLy(h.pos);u&&t.lineTo(u.x,u.y)}t.stroke(),t.setLineDash([]);for(let h of e.route.path){let u=this.projectLy(h.pos);u&&(t.beginPath(),t.arc(u.x,u.y,4,0,Math.PI*2),t.stroke())}}if(this.selected){let h=this.projectLy(this.selected.pos);if(h&&c){let u=me(this.selected.pos,n)<=i;t.strokeStyle=u?"rgba(160,210,190,0.8)":"rgba(227,165,75,0.8)",t.setLineDash([5,4]),t.beginPath(),t.moveTo(c.x,c.y),t.lineTo(h.x,h.y),t.stroke(),t.setLineDash([]),t.beginPath(),t.arc(h.x,h.y,9,0,Math.PI*2),t.stroke(),this.label(t,this.selected.name.toUpperCase(),h.x+13,h.y-6,11,Ne+"0.95)")}}if(a&&a.s!==this.selected){let h=a.s;this.label(t,`${h.name}  \xB7  ${h.spectral}  \xB7  ${me(h.pos,n).toFixed(1)} ly`,a.p.x+12,a.p.y+16,10,Ne+"0.75)")}this.drawInset(),this.label(t,"DRAG TO ROTATE  \xB7  SCROLL TO ZOOM  \xB7  CLICK A STAR TO PLOT A JUMP",18,this.ch-18,9,Ne+"0.4)")}edgeMarker(t,e,n,i,r){let a=this.game.star.pos,o=me(e,a),l=[(e[0]-a[0])/o,(e[1]-a[1])/o,(e[2]-a[2])/o],c=Math.min(o,this.zoom*1.4),h=this.projectLy([a[0]+l[0]*c,a[1]+l[1]*c,a[2]+l[2]*c]);if(!h)return;t.strokeStyle=i,t.lineWidth=1,t.beginPath(),t.arc(h.x,h.y,4,0,Math.PI*2),t.stroke();let u=o>1e3?`${Math.round(o).toLocaleString("en-US")} ly`:`${o.toFixed(1)} ly`;this.label(t,`${n} \xB7 ${u}`,h.x+8,h.y+3,9,i)}drawInset(){if(this.insetDrawn){this.updateInsetMarker();return}let t=this.inset,e=180;t.width=e*2,t.height=e*2;let n=t.getContext("2d"),i=n.createImageData(e*2,e*2),r=52e3;for(let a=0;a<e*2;a++)for(let o=0;o<e*2;o++){let l=(o/(e*2)*2-1)*r,c=(a/(e*2)*2-1)*r,h=ba(l,0,c),u=Math.min(1,Math.pow(h*.55,.45)),d=(a*e*2+o)*4;i.data[d]=235*u,i.data[d+1]=220*u,i.data[d+2]=200*u,i.data[d+3]=255}n.putImageData(i,0,0),this.insetBase=n.getImageData(0,0,e*2,e*2),this.insetDrawn=!0,this.updateInsetMarker()}updateInsetMarker(){let t=this.inset,e=t.getContext("2d");e.putImageData(this.insetBase,0,0);let n=52e3,i=this.game.star.pos,r=(i[0]/n*.5+.5)*t.width,a=(i[2]/n*.5+.5)*t.height;e.strokeStyle="rgba(160,210,190,1)",e.lineWidth=2,e.beginPath(),e.arc(r,a,7,0,Math.PI*2),e.stroke()}click(){if(this.tab==="galaxy"){if(this.hover){let t=this.hover.s;if(t.id===this.game.star.id)return;this.selected=t,me(t.pos,this.game.star.pos)<=15&&this.game.setJumpTarget(t),this.game.audio.select(),this.renderInfo()}}else this.sysHover!=null&&(this.game.setTarget(this.sysHover),this.game.audio.select(),this.renderInfo())}renderInfo(){let t=this.game;if(t.star)if(this.tab==="galaxy"){let e=this.selected,n=t.star.pos,i=`<p class="eyebrow">Current system</p><h3>${t.star.name}</h3><p class="dim">${t.star.spectral} \xB7 ${me(n,we).toFixed(1)} ly from Sol</p>`;if(e){let a=me(e.pos,n),o=t.jumpCost(a),l=a<=t.jumpRange(),c=t.trailKnown().find(h=>h.star.id===e.id&&!h.found);i+=`<hr><p class="eyebrow">Jump target</p><h3>${e.name}</h3>
          <dl>
            <dt>Class</dt><dd>${e.spectral}</dd>
            <dt>Distance</dt><dd>${a.toFixed(2)} ly</dd>
            <dt>Fuel</dt><dd class="${l?"":"warn"}">${Math.round(o*100)}% of tank${l?"":" \xB7 out of range"}</dd>
            <dt>Fuel scoop</dt><dd>${e.scoopable?"Yes":"No"}</dd>
            <dt>Time at home</dt><dd>+${(a+.35).toFixed(1)} years</dd>
            <dt>Status</dt><dd>${t.visited.has(e.id)?"Visited":"Unvisited"}</dd>
          </dl>
          ${c?'<p class="good">A survey beacon is broadcasting from this system.</p>':""}
          ${e.id==="SOL"?'<p class="dim">Home.</p>':""}
          <p class="dim small">${l?"Close the map, then press J to begin the jump.":a>15?"Too far for one jump. Plot a route through stars on the way.":"Not enough fuel for this jump. Skim a star or a gas giant first."}</p>
          ${a>15?'<button class="link primary" id="btn-route">Plot route</button>':""}
          ${t.route&&t.route.dest.id===e.id?`<p class="good small">Route plotted: ${t.route.path.length} jumps. Press J at each star.</p>`:""}`}else i+='<hr><p class="dim">Select a star to plot a jump. Its distance in light-years is also the number of years that will pass at home.</p>';this.info.innerHTML=i;let r=this.info.querySelector("#btn-route");r&&r.addEventListener("click",()=>{t.setRoute(e)&&(this.selected=e,t.audio.select(),this.renderInfo())})}else{let e=t.sys,n=[];n.push(`<p class="eyebrow">${t.scanned?"System survey":"Unscanned system"}</p><h3>${t.star.name}</h3><p class="dim">${t.star.spectral}${t.star.scoopable?" \xB7 scoopable":""}</p><hr>`),t.scanned?(n.push('<ul class="bodylist">'),e.bodies.forEach((i,r)=>{let a=t.surveyed.has(i.id);n.push(`<li data-body="${r}" class="${t.target&&t.target.kind==="body"&&t.target.index===r?"sel":""}">
            <span class="${i.kind==="moon"?"moon":""}">${i.name}</span>
            <span class="dim">${Us[i.type]}${a?"":" \xB7 ?"}${i.life&&a?" \xB7 life":""}</span></li>`)}),e.signals.forEach((i,r)=>{n.push(`<li data-signal="${r}" class="sig ${t.target&&t.target.kind==="signal"&&t.target.index===r?"sel":""}"><span>\u25C7 ${t.signalLabel(i)}</span><span class="dim">${e.bodies[i.body].name}</span></li>`)}),n.push("</ul>")):n.push('<p class="dim">Press <kbd>Space</kbd> to pulse-scan the system and resolve its bodies.</p>'),this.info.innerHTML=n.join(""),this.info.querySelectorAll("li[data-body]").forEach(i=>i.addEventListener("click",()=>{t.setTarget({kind:"body",index:Number(i.dataset.body)}),t.audio.select(),this.renderInfo()})),this.info.querySelectorAll("li[data-signal]").forEach(i=>i.addEventListener("click",()=>{t.setTarget({kind:"signal",index:Number(i.dataset.signal)}),t.audio.select(),this.renderInfo()}))}}drawSystem(t){let e=this.game,n=e.sys,i=this.cw/2+this.sysPan.x,r=this.ch/2+this.sysPan.y,a=Math.max(...n.bodies.filter(p=>p.parent<0).map(p=>p.orbit.a),fe*.5),o=Math.min(this.cw,this.ch)*.44*this.sysZoom/Math.log(1+a/(fe*.05)),l=p=>Math.log(1+p/(fe*.05))*o,c=p=>{let v=Math.hypot(p[0],p[2]),g=l(v),m=Math.atan2(p[2],p[0]);return{x:i+Math.cos(m)*g,y:r+Math.sin(m)*g}};t.fillStyle=Oa(n.star.color,1,1),t.beginPath(),t.arc(i,r,6,0,Math.PI*2),t.fill(),this.label(t,n.star.name.toUpperCase(),i+10,r-8,10,Ne+"0.8)");let h=null,u=14,d=e.view.positions;e.scanned||this.label(t,"UNSCANNED  \xB7  PRESS SPACE IN FLIGHT TO PULSE-SCAN",i-150,r+40,10,Ne+"0.5)");for(let p of n.bodies){if(!e.scanned)break;p.parent<0&&(t.strokeStyle=Ne+"0.1)",t.beginPath(),t.arc(i,r,l(p.orbit.a),0,Math.PI*2),t.stroke())}if(e.scanned){for(let p of n.bodies){let v;if(p.parent<0)v=c(d[p.index]);else{let x=c(d[p.parent]),y=n.bodies[p.parent].children.indexOf(p.index),R=[d[p.index][0]-d[p.parent][0],d[p.index][2]-d[p.parent][2]],T=Math.atan2(R[1],R[0]),A=12+y*7;t.strokeStyle=Ne+"0.07)",t.beginPath(),t.arc(x.x,x.y,A,0,Math.PI*2),t.stroke(),v={x:x.x+Math.cos(T)*A,y:x.y+Math.sin(T)*A}}let g=Math.max(1.5,Math.min(7,Math.log10(p.radius/2e5)*2.4)),m={gas:[.9,.75,.55],icegiant:[.55,.8,.9],terran:[.45,.65,.9],ice:[.85,.9,.95],lava:[1,.45,.2],desert:[.85,.55,.35],venus:[.95,.85,.6],titan:[.85,.6,.3],barren:[.65,.63,.6]}[p.type];t.fillStyle=Oa(m,e.surveyed.has(p.id)?1:.6,.8),t.beginPath(),t.arc(v.x,v.y,g,0,Math.PI*2),t.fill(),p.rings&&(t.strokeStyle=Oa(m,.6,.8),t.beginPath(),t.ellipse(v.x,v.y,g*2,g*.7,-.3,0,Math.PI*2),t.stroke());let _=e.target&&e.target.kind==="body"&&e.target.index===p.index;if(_&&(t.strokeStyle=Ne+"0.9)",t.beginPath(),t.arc(v.x,v.y,g+5,0,Math.PI*2),t.stroke()),(p.parent<0||_||this.sysZoom>2.5)&&this.label(t,p.name,v.x+g+5,v.y+3,9,Ne+(_?"0.95)":"0.6)")),this.mouse){let x=Math.hypot(this.mouse.x-v.x,this.mouse.y-v.y);x<u&&(u=x,h={kind:"body",index:p.index})}}n.signals.forEach((p,v)=>{let g=d[p.body],m=n.bodies[p.body].parent<0?c(g):c(d[n.bodies[p.body].parent]),_=m.x+10,x=m.y-10;t.strokeStyle="rgba(160,210,190,0.9)",t.beginPath(),t.moveTo(_,x-5),t.lineTo(_+5,x),t.lineTo(_,x+5),t.lineTo(_-5,x),t.closePath(),t.stroke(),this.mouse&&Math.hypot(this.mouse.x-_,this.mouse.y-x)<u&&(u=0,h={kind:"signal",index:v})})}let f=c(e.shipWorld||[0,0,0]);if(t.strokeStyle="rgba(160,210,190,1)",t.beginPath(),t.moveTo(f.x,f.y-6),t.lineTo(f.x+5,f.y+4),t.lineTo(f.x-5,f.y+4),t.closePath(),t.stroke(),this.label(t,"TERN",f.x+8,f.y+12,9,"rgba(160,210,190,0.9)"),this.sysHover=h,h&&h.kind==="body"){let p=n.bodies[h.index],v=Math.hypot(d[p.index][0]-e.shipWorld[0],d[p.index][1]-e.shipWorld[1],d[p.index][2]-e.shipWorld[2]);this.label(t,`${p.name} \xB7 ${Us[p.type]} \xB7 ${yi(v)}`,this.mouse.x+12,this.mouse.y+18,10,Ne+"0.85)")}this.label(t,"DISTANCES ARE LOGARITHMIC  \xB7  DRAG TO PAN  \xB7  SCROLL TO ZOOM  \xB7  CLICK TO TARGET",18,this.ch-18,9,Ne+"0.4)")}label(t,e,n,i,r,a){t.font=`500 ${r}px "IBM Plex Mono", ui-monospace, monospace`,t.fillStyle=a,t.textAlign="left","letterSpacing"in t&&(t.letterSpacing="0.08em"),t.fillText(e,n,i)}};var $u=["Outer Survey Program \xB7 Vessel TERN \xB7 Surveyor Eleven","You left Sol in 2291.","You slept while the ship crossed nine light-years. At home, almost ten years went by.","This is the first star on your list. There will be many more.","No one is coming. No one was ever meant to."],Yu=[{year:.05,from:"Outer Survey Operations",text:"TERN, this is Ops. Clean telemetry through the boost phase, and your sleep cycle started on schedule. Half the night shift stayed late to watch you go. Good luck, Eleven."},{year:.4,from:"Mara",text:"I keep writing these and deleting them. It's raining here. I walked past your old flat and somebody has put a red bicycle on the balcony. I hope it's cold and quiet where you are, the way you like it. I hope you sleep well."},{year:1.5,from:"Outer Survey Operations",text:"Routine traffic. Surveyor Nine reports a completed route and a frozen water world worth a second look. Surveyor Seven, Marrow, is still silent. Her last relay reached us in 2240. We are keeping her channel open."},{year:4,from:"Mara",text:"I had a daughter. Her name is June. She has your ears, which seems unfair to her. I told her you were out mapping stars, and she asked if you'd be back for her birthday. I said probably not this one."},{year:9,from:"Mara",text:"June is nine and has decided you keep a lighthouse somewhere very far away. I haven't corrected her. Dad died in the autumn. It was peaceful. He asked whether the signal had reached you yet. I said it would, eventually. So here it is, eventually."},{year:16,from:"Outer Survey Operations",text:"The funding review is over. The program continues with fewer staff. Some of us are new. We've read your file and all of your reports. We are still here."},{year:24,from:"June",text:"Hi. It's June. Mum says I'm old enough to write to you myself. I'm studying orbital mechanics, which she says is your fault. I don't know what to say to someone who might read this in fifty years. The sea is very blue today. That's what I wanted to tell you."},{year:33,from:"Outer Survey Operations",text:"Notice: Outer Survey Operations moves to automated relay at the end of this fiscal year. Your data will still be received and archived. Thank you for everything you have sent us."},{year:41,from:"June",text:"Mum died this spring. She kept your picture on the kitchen wall, the one from the launch where you're squinting. I've left it there. I hope the light where you are is kind. I hope you found something out there worth the trip."},{year:58,from:"OSP Automated Relay",text:"OUTER SURVEY RELAY \xB7 AUTOMATED \xB7 NO OPERATOR ON DUTY. TELEMETRY RECEIVED AND ARCHIVED. NEXT SCHEDULED MAINTENANCE: NONE."},{year:77,from:"June",text:"I'm older now than Mum ever got. I don't know if you're alive, or if you'll read these all at once. I read your survey reports sometimes. You write about planets as if they were people you'd met. I don't think you're lonely in the way we used to worry about. I hope that's true."},{year:105,from:"Sol Archive",text:"This is the Sol Archive, Long Memory Project. We found the Outer Survey records during a migration. Eleven surveyors, and one still transmitting: you. We don't know if this will reach you. We are listening on your frequency. Whatever you find, we would like to hear it."},{year:160,from:"Sol Archive",text:"The Archive again. Your reports from the outer beacons arrived. A class of students reads them aloud every year on the day you launched. They asked me to tell you the names they've given your planets. I'm not going to. You'll have your own."},{year:260,from:"OSP Automated Relay",text:"CARRIER ONLY. NO MESSAGE."}],Lc=["Surveyor Seven, Ilse Marrow, vessel PETREL. Year eleven of my route. If you can hear this, you came out here too, and you're probably on your own. I've started leaving these behind me. I don't really know why. Maybe so the route has a voice in it. The next one is at {next}, about {dist} light-years on. I'll leave the light on.","The first year out I talked to the ship all the time. The second year, less. Now I mostly talk to the planets. The one here has a ring you could get lost in. I watched a shadow cross it for an hour, which is not survey work, and I don't care. Next beacon: {next}, {dist} light-years.","I did the arithmetic today. Everyone I knew when I left is old now, or gone. That should feel like grief, and some days it does. Other days it feels like a door closing quietly behind me, and the room I'm standing in is enormous and full of light. On to {next}.","The relay from home stopped reaching me three systems back. I'm moving faster than the news. It's strange to outrun your own people. The silence isn't empty, though. It hums. You'll know what I mean by now. {next} is next, {dist} light-years.","I landed today and went nowhere. There's no airlock on these ships, so you sit in the cockpit and look. So I sat. The horizon was very close. The stars didn't twinkle. For six hours nothing moved except the light. It might have been the best day I've had in years. {next}, when you're ready.","There's an old probe a few systems from here, one of the early automated ones, still tumbling. Somebody built it in a lab with windows and coffee and arguments. It came all this way to be the only made thing for light-years in any direction. I know how it feels. Keep heading for {next}.","My scoop is running hot. The repairs are holding, mostly. I'm not frightened, which surprises me. I keep thinking someone will come after me. Maybe you. If you're reading this: hello. I'm glad it was you. {next} is {dist} light-years on. I'll try to make it.","Last beacon before the end, I think. At {next} there's a moon around a ringed giant, with a hill on the near side where the planet never sets. I'm going to land there. If the drive holds, I'll keep going. If it doesn't, that's not a bad place to stop. Come and see the view.","PETREL here. If you're reading this, you found me, and you came the whole long way. The drive didn't hold, and that's all right. I've had a lot of time to sit with the view, and here's what I learned, for what it's worth: it's a long quiet, but it isn't empty. You're part of what's out here now. Sit for a while. Look up. Then go on, or don't. Either is fine. \u2014 I. M."],Zu=["LANTERN-4 \xB7 AUTONOMOUS SURVEY PROBE \xB7 LAUNCHED 2187. POWER CRITICAL. FINAL CATALOGUE ENTRY: THREE PLANETS, NO BIOSIGNATURES. TRANSMITTER DEGRADED. TRANSMITTING ANYWAY.","WAYFARER-11 \xB7 DEEP PROBE. ATTITUDE CONTROL LOST IN 2231. IMAGING CONTINUES. 41,207 IMAGES QUEUED FOR TRANSMISSION. NONE SENT.","HERON-2 \xB7 RECORDED GREETING, PLAYING ON LOOP: 'Hello from the people of Earth. We made this to say we were here. We hope whoever finds it is well.'","CORVID-6 \xB7 SPECTROMETER ONLINE \xB7 REPORTING TO NO ONE. ATMOSPHERE OF NEAREST BODY ANALYSED. ADDED TO CATALOGUE. CATALOGUE SIZE: 1,904 ENTRIES.","PATHWARD-9 \xB7 AUTONOMY CORE NOTE: NO COMMAND RECEIVED IN 61 YEARS. SURVEY CONTINUED AS LAST INSTRUCTED. PLEASE ADVISE.","LANTERN-12 \xB7 MICROMETEOROID DAMAGE, 2219. THREE OF FOUR SOLAR ARRAYS OFFLINE. TOO FAR FROM ITS STAR TO MAKE USEFUL POWER. STILL LISTENING.","ARIADNE-3 \xB7 DATA RELAY. BUFFER FULL SINCE 2244. OLDEST STORED PACKET: A BIRTHDAY MESSAGE ADDRESSED TO A TECHNICIAN AT TSIOLKOVSKY STATION. UNDELIVERED.","MERIDIAN-5 \xB7 CLOCK DRIFT 4.2 SECONDS. HAS COUNTED EVERY SECOND SINCE LAUNCH: 3,417,055,912. COUNTING."],ju=["Flight recorder, vessel GANNET, Surveyor Three. Landing strut failed on contact. Cockpit intact. Air for nine months, food for longer. I'll keep surveying from here. It's a good view. ... Day 214. Still a good view.","Vessel KESTREL, Surveyor Five. Reactor shutdown during descent. Last recorder entry: 'Funny. You spend twelve years alone and the last thing you want is company. I just wanted to say that to someone.'","Colony tender BRIGHTWATER, uncrewed. Cargo manifest: seed vault, 40,000 species. Destination never reached. Vault temperature nominal. Seeds viable.","Vessel TEAL, Surveyor Eight. Recorder: 'Decided to stop here. Nothing is broken. I just decided. The planet's shadow crosses the plain every eleven hours and I like to be awake for it.'","Unregistered hull, pre-survey era. No recorder. Someone scratched a tally into the cockpit frame: 1,312 marks, grouped in fives. The last group has three."],Ju=["Structure is artificial. Material composition: unknown. Surface erosion suggests an age of four to six million years. No markings, no power, no signal. Nothing else in this system was made by anyone.","Analysis: artificial, older than the human species. Whoever placed it here left nothing else, or nothing else survived. At local noon its shadow points straight at the star. It has done that every day for six million years.","No signal. No inscriptions. Just the fact of it, standing in the dust, facing nothing. The ship cannot estimate its purpose. Neither can you."],Ku=["An arc of something enormous, thirty-eight kilometres in radius. The rest of the ring is missing, or was never finished. Spectra show refined metals pitted by millions of years of dust. It is cold all the way through. There is no one home.","Megastructure fragment. Rotation stopped. Interior volume could hold a city. Thermal scan: ambient, everywhere, for a very long time."],Qu=["Instruments nominal. Nothing to report but light.","No transmissions on any band.","The hull ticks as it adjusts to a new star.","Quiet on every frequency.","Long-range scan: no artificial signals.","The new sky settles into place."],Dc={barren:["Touchdown. No air, no sound, no weather. Your footprints would last a billion years, if you could make any.","Down. The regolith is fine as flour. The horizon is close."],ice:["Touchdown on ice. The surface creaks through the landing struts, then stops.","Down. Everything here is white, and very old."],desert:["Touchdown. Thin wind hisses across the hull.","Down. Dust settles slowly around the landing legs."],lava:["Touchdown. The ground is warm. The hull temperature climbs.","Down. Somewhere beneath you, the planet is still molten."],venus:["Touchdown. Crushing pressure, dim orange light. Hull stress rising.","Down. The air outside would dissolve you."],titan:["Touchdown. A slow orange haze, and the smell of nothing you will ever smell.","Down. Methane drizzle beads on the canopy."],terran:["Touchdown. Wind, and the sound of it. Somewhere, water.","Down. An atmosphere you could almost breathe."]};function td(s,t){let e=(s.gravity/9.81).toFixed(2),n=Math.round(s.tempK),i=[];switch(s.type){case"barren":i.push(`Airless rock. Surface gravity ${e} g, ${n} K. Cratered by four billion years of impacts and nothing else.`);break;case"ice":i.push(`Ice-shelled world, ${n} K. Fracture lines suggest liquid water far below. Nothing reaches the surface but light.`);break;case"desert":i.push(`Arid world under a thin, dusty sky, ${(s.pressure*1e3).toFixed(0)} millibar. ${e} g. Old riverbeds, long dry.`);break;case"lava":i.push(`Molten surface, ${n} K. The crust reforms and breaks every few hours. Tidal heating, or simply young.`);break;case"venus":i.push(`Runaway greenhouse. ${Math.round(s.pressure)} atmospheres at the surface, ${n} K. Sulphuric cloud deck. Not a place for anyone.`);break;case"titan":i.push(`Cold world under orange haze, ${n} K. Hydrocarbon lakes, dunes of organic sand. Chemistry, waiting.`);break;case"terran":i.push(s.life?`Temperate world, ${n} K, ${s.pressure.toFixed(1)} atm. Biosignatures confirmed: photosynthetic pigments and a seasonal oxygen cycle. No animals, no cities, no radio. Just life, minding its own business.`:`Temperate world, ${n} K, ${s.pressure.toFixed(1)} atm. Liquid water. Everything life would need. No sign that it ever started.`);break;case"gas":i.push(`Gas giant, ${(s.mass/1898e24).toFixed(2)} Jupiter masses. Storm systems larger than Earth${s.rings?". A wide ring system of ice and rock":""}.`);break;case"icegiant":i.push(`Ice giant, methane-blue, ${n} K. Winds above two thousand kilometres an hour, and no one to feel them.`);break;default:i.push("Surveyed.")}return s.restingPlace&&i.push("A vessel transponder answers from the surface: PETREL."),i.join(" ")}var Ct=s=>document.getElementById(s);function ii(s){return String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var ka=class{constructor(t){this.game=t,this.title=Ct("title"),this.intro=Ct("intro"),this.trans=Ct("transmission"),this.survey=Ct("survey"),this.journal=Ct("journal"),this.pause=Ct("pause"),this.help=Ct("help"),this.death=Ct("death"),this.writer=Ct("writer"),this.loading=Ct("loading"),this.queue=[],this.transOpen=!1,this.typing=null,Ct("btn-continue").addEventListener("click",()=>t.continueGame()),Ct("btn-new").addEventListener("click",()=>this.confirmNew()),Ct("btn-new-confirm").addEventListener("click",()=>{Ct("new-confirm").hidden=!0,t.newGame()}),Ct("btn-new-cancel").addEventListener("click",()=>{Ct("new-confirm").hidden=!0}),Ct("btn-controls").addEventListener("click",()=>this.toggleHelp(!0)),Ct("btn-settings-title").addEventListener("click",()=>this.openSettings()),Ct("trans-close").addEventListener("click",()=>this.closeTransmission()),Ct("survey-close").addEventListener("click",()=>{this.survey.hidden=!0}),Ct("journal-close").addEventListener("click",()=>this.toggleJournal(!1)),Ct("help-close").addEventListener("click",()=>this.toggleHelp(!1)),Ct("btn-resume").addEventListener("click",()=>this.togglePause(!1)),Ct("btn-settings").addEventListener("click",()=>this.openSettings()),Ct("btn-help").addEventListener("click",()=>this.toggleHelp(!0)),Ct("btn-quit").addEventListener("click",()=>{this.togglePause(!1),t.saveGame(),t.toTitle()}),Ct("btn-reload").addEventListener("click",()=>{this.death.hidden=!0,t.continueGame()}),Ct("btn-death-title").addEventListener("click",()=>{this.death.hidden=!0,t.toTitle()}),Ct("settings-close").addEventListener("click",()=>{Ct("settings").hidden=!0}),Ct("writer-save").addEventListener("click",()=>this.saveWriter()),Ct("writer-skip").addEventListener("click",()=>{this.writer.hidden=!0}),this.journal.querySelectorAll("[data-jtab]").forEach(e=>e.addEventListener("click",()=>this.renderJournal(e.dataset.jtab))),this.bindSettings()}get modalOpen(){return!this.journal.hidden||!this.pause.hidden||!this.help.hidden||!Ct("settings").hidden||!this.writer.hidden||!this.death.hidden}showTitle(t){this.title.hidden=!1,Ct("btn-continue").hidden=!t,Ct("btn-new").textContent=t?"New voyage":"Begin",Ct("btn-new").classList.toggle("primary",!t),Ct("btn-continue").classList.toggle("primary",t)}hideTitle(){this.title.hidden=!0,Ct("new-confirm").hidden=!0}confirmNew(){this.game.hasSave()?Ct("new-confirm").hidden=!1:this.game.newGame()}async playIntro(t){let e=Ct("intro-lines");e.innerHTML="",this.intro.hidden=!1,this.intro.classList.remove("out");let n=!1,i=()=>{n=!0};window.addEventListener("keydown",i,{once:!0}),this.intro.addEventListener("click",i,{once:!0});for(let r=0;r<t.length&&!n;r++){let a=document.createElement("p");a.textContent=t[r],r===0&&(a.className="meta"),e.appendChild(a),requestAnimationFrame(()=>a.classList.add("in")),await this.sleep(r===0?2200:3200,()=>n)}n||await this.sleep(1500,()=>n),this.intro.classList.add("out"),await this.sleep(1600,()=>!1),this.intro.hidden=!0,window.removeEventListener("keydown",i)}sleep(t,e){return new Promise(n=>{let i=performance.now(),r=()=>{e()||performance.now()-i>=t?n():setTimeout(r,50)};r()})}transmission({kicker:t,title:e,body:n,meta:i,after:r}){this.queue.push({kicker:t,title:e,body:n,meta:i,after:r}),this.transOpen||this.nextTransmission()}nextTransmission(){let t=this.queue.shift();if(!t){this.transOpen=!1,this.trans.hidden=!0;return}this.transOpen=!0,this.trans.hidden=!1,Ct("trans-kicker").textContent=t.kicker,Ct("trans-title").textContent=t.title,Ct("trans-meta").textContent=t.meta||"";let e=Ct("trans-body");e.textContent="",this.current=t;let n=t.body,i=0;clearInterval(this.typing),this.typing=setInterval(()=>{i+=2,e.textContent=n.slice(0,i),i%6===0&&this.game.audio.tone(2400+Math.random()*200,.015,.004),i>=n.length&&(clearInterval(this.typing),e.textContent=n)},22),this.game.audio.message()}closeTransmission(){clearInterval(this.typing);let t=this.current?.after;this.current=null,this.nextTransmission(),t&&t()}surveyCard(t,e,n){this.survey.hidden=!1,Ct("survey-name").textContent=t.name,Ct("survey-type").textContent=n.typeLabel,Ct("survey-note").textContent=e;let i=[["Radius",`${Math.round(t.radius/1e3).toLocaleString("en-US")} km`],["Gravity",`${(t.gravity/9.81).toFixed(2)} g`],["Surface",`${Math.round(t.tempK)} K`],["Atmosphere",t.atmosphere&&t.solid?`${t.pressure<.1?(t.pressure*1e3).toFixed(0)+" mbar":t.pressure.toFixed(1)+" atm"}`:t.solid?"None":"Deep"],["Day",t.spin.locked?"Tidally locked":`${(Math.abs(t.spin.period)/3600).toFixed(1)} h`],["Landing",t.solid?t.landable?t.type==="venus"||t.type==="lava"?"Hazardous":"Possible":"Gravity too high":"No surface"]];Ct("survey-data").innerHTML=i.map(([r,a])=>`<dt>${r}</dt><dd>${a}</dd>`).join(""),clearTimeout(this.surveyTimer),this.surveyTimer=setTimeout(()=>{this.survey.hidden=!0},16e3)}toggleJournal(t){let e=t??this.journal.hidden;this.journal.hidden=!e,e&&(this.game.input.releaseLock(),this.renderJournal(this.jtab||"log")),this.game.audio.blip()}renderJournal(t){this.jtab=t;let e=this.game;this.journal.querySelectorAll("[data-jtab]").forEach(i=>i.setAttribute("aria-selected",i.dataset.jtab===t?"true":"false"));let n=Ct("journal-body");if(t==="log"){let i=e.logs.filter(r=>r.kind!=="home").slice().reverse();n.innerHTML=i.length?i.map(r=>`<article><p class="eyebrow">${ii(r.where)} \xB7 ${ii(r.when)}</p><h4>${ii(r.title)}</h4><p class="${r.kind==="own"?"own":""}">${ii(r.text)}</p></article>`).join(""):'<p class="dim">Nothing recorded yet. Scan signals to read what others left behind.</p>'}else if(t==="home"){let i=e.logs.filter(r=>r.kind==="home").slice().reverse();n.innerHTML=i.length?i.map(r=>`<article class="letter"><p class="eyebrow">${ii(r.title)} \xB7 ${ii(r.when)}</p><p>${ii(r.text)}</p></article>`).join(""):'<p class="dim">No messages have caught up with you yet. Light from home is slow.</p>',n.innerHTML+='<p class="dim small">Messages travel at the speed of light. One sent N years after you left reaches you only when the years elapsed at home, minus your distance from Sol in light-years, add up to N.</p>'}else if(t==="survey"){let i=e.stats();n.innerHTML=`<dl class="stats">
        <dt>Systems visited</dt><dd>${i.systems}</dd>
        <dt>Bodies surveyed</dt><dd>${i.bodies}</dd>
        <dt>Worlds with life</dt><dd>${i.life}</dd>
        <dt>Signals found</dt><dd>${i.signals}</dd>
        <dt>Beacons on Marrow's route</dt><dd>${i.trail} of ${i.trailTotal}</dd>
        </dl>
        <h4>Surveyed</h4>
        <ul class="plain">${i.list.map(r=>`<li><span>${ii(r.name)}</span><span class="dim">${ii(r.type)}${r.life?" \xB7 life":""}</span></li>`).join("")||'<li class="dim">None yet.</li>'}</ul>`}else{let i=e.stats();n.innerHTML=`<dl class="stats">
        <dt>Distance from Sol</dt><dd>${i.fromSol.toFixed(1)} ly</dd>
        <dt>Distance travelled</dt><dd>${i.travelled.toFixed(1)} ly</dd>
        <dt>Jumps</dt><dd>${i.jumps}</dd>
        <dt>Time aboard</dt><dd>${i.shipTime}</dd>
        <dt>Year at home</dt><dd>${i.homeYear}</dd>
        <dt>Galactic radius</dt><dd>${Math.round(i.galR).toLocaleString("en-US")} ly from the core</dd>
        </dl>
        <p class="dim small">The galaxy is about 100,000 light-years across. You will not see most of it. Nobody will.</p>`}}togglePause(t){let e=t??this.pause.hidden;this.pause.hidden=!e,e&&this.game.input.releaseLock()}toggleHelp(t){let e=t??this.help.hidden;this.help.hidden=!e,e&&this.game.input.releaseLock()}openSettings(){Ct("settings").hidden=!1,this.game.input.releaseLock()}bindSettings(){let t=this.game,e=t.settings,n=Ct("set-quality"),i=Ct("set-invert"),r=Ct("set-sens"),a=Ct("set-volume"),o=Ct("set-music"),l=Ct("set-fov");n.value=e.quality,i.checked=e.invertY,r.value=e.sensitivity,a.value=e.volume,o.value=e.music,l.value=e.fov,n.addEventListener("change",()=>{e.qualityLocked=!0});let c=()=>{e.quality=n.value,e.invertY=i.checked,e.sensitivity=Number(r.value),e.volume=Number(a.value),e.music=Number(o.value),e.fov=Number(l.value),t.applySettings()};[n,i,r,a,o,l].forEach(h=>h.addEventListener("input",c)),n.addEventListener("change",c)}showDeath(t,e){this.death.hidden=!1,this.game.input.releaseLock(),Ct("death-cause").textContent=t,Ct("death-stats").textContent=`${e.systems} systems \xB7 ${e.bodies} worlds surveyed \xB7 ${e.fromSol.toFixed(1)} ly from Sol \xB7 year ${e.homeYear} at home`}openWriter(){this.writer.hidden=!1,this.game.input.releaseLock(),Ct("writer-text").value="",setTimeout(()=>Ct("writer-text").focus(),50)}saveWriter(){let t=Ct("writer-text").value.trim();this.writer.hidden=!0,t&&this.game.leaveBeacon(t)}loadingText(t){if(!t){this.loading.hidden=!0;return}this.loading.hidden=!1,this.loading.textContent=t}};function Nn(s){let t=2291+s;return`${Math.floor(t)}.${String(Math.floor(t%1*10)).padStart(1,"0")}`}var Ha="the-long-quiet/v1",ed="the-long-quiet/settings",ur=15,nd=30,za=[1,10,100,1e3,1e4];function id(s){let t=.2126*s[0]+.7152*s[1]+.0722*s[2];return[s[0]/t,s[1]/t,s[2]/t]}var Va=class{constructor(){zc(this,"heightAt",(t,e)=>this.view.planets[t].heightAt(e));this.canvas=document.getElementById("scene"),this.settings=this.loadSettings(),this.engine=new Ea(this.canvas,{quality:this.settings.quality}),this.input=new Ua(this.canvas),this.audio=new Na,this.hud=new Fa(document.getElementById("hud")),this.universe=new Pa,this.maps=new Ba(this),this.panels=new ka(this),this.jump=new Da(this),this.ship=new cr,this.shipModel=new Ns,this.engine.scene.add(this.shipModel.group),this.setupLights(),this.state="boot",this.time=0,this.camMode="chase",this.camQ=[0,0,0,1],this.freeYaw=0,this.freePitch=.12,this.camZoom=1,this.warpIndex=0,this.scan=0,this.saveTimer=0,this.pmrem=new bs(this.engine.renderer),this.exposure=2,this.applySettings(),this.world={sys:null,positions:[],orient:[],velocity:t=>(this._velCache[t]||(this._velCache[t]=Lu(this.sys,t,this.time)),this._velCache[t])},this._velCache=[],window.__game=this}loadSettings(){let t={quality:"high",invertY:!1,sensitivity:1,volume:.8,music:.7,fov:62};try{let e=JSON.parse(localStorage.getItem(ed)||"{}");return{...t,...e}}catch{return t}}applySettings(){let t=this.settings;this.engine.quality!==t.quality&&(this.engine.setQuality(t.quality),this.engine.sky.starUniforms.uPx.value=this.engine.pixelRatio),this.input.invertY=t.invertY,this.input.sensitivity=t.sensitivity,this.audio.setVolumes({master:t.volume,music:t.music}),this.baseFov=t.fov;try{localStorage.setItem(ed,JSON.stringify(t))}catch{}}setupLights(){this.sun=new nr(16777215,1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let t=this.sun.shadow.camera;t.left=-24,t.right=24,t.top=24,t.bottom=-24,t.near=1,t.far=400,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,this.engine.scene.add(this.sun,this.sun.target),this.fillLight=new nr(16777215,0),this.engine.scene.add(this.fillLight,this.fillLight.target),this.ambient=new fa(16777215,.002),this.engine.scene.add(this.ambient)}hasSave(){try{return!!localStorage.getItem(Ha)}catch{return!1}}async boot(){this.resetVoyage();let t=this.readSave();t?this.applySave(t):this.placeAtStart(),this.panels.loadingText("Charting the neighbourhood\u2026"),await new Promise(e=>setTimeout(e,30)),this.enterSystem(this.star,!0),this.panels.loadingText(null),this.state="title",this.panels.showTitle(!!t),this.titleT=0,this.last=performance.now(),requestAnimationFrame(e=>this.frame(e))}resetVoyage(){this.star=this.universe.start,this.homeYears=9.8,this.shipYears=.06,this.time=12e5,this.visited=new Set,this.scannedSystems=new Set,this.surveyed=new Set,this.readSignals=new Set,this.logs=[],this.received=new Set,this.trailFound=-1,this.jumpTarget=null,this.route=null,this.target=null,this.travelled=0,this.jumps=0,this.lifeFound=new Set,this.ownBeacons=[],this.ship=new cr,this.ship.fuel=.86,this.ship.gearDown=!1,this.shipModel.gear=0}placeAtStart(){let t=this.universe.system(this.star),e=t.signals.find(i=>i.trail===0),n=t.bodies[e.body];this.time=12e5,this.pendingPlacement={kind:"near",body:n.index,dist:n.radius*7.5}}newGame(){try{localStorage.removeItem(Ha)}catch{}this.resetVoyage(),this.placeAtStart(),this.enterSystem(this.star,!0),this.panels.hideTitle(),this.audio.start(),this.state="intro",this.engine.post.fade=1,this.panels.playIntro($u).then(()=>{this.state="play",this.fadeIn=1,this.hud.note(`${this.star.name}. ${this.sys.bodies.length} bodies, unresolved.`),setTimeout(()=>this.hud.note("Press Space to pulse-scan the system.","good",10),2500),this.objective="scan",this.saveGame()})}continueGame(){let t=this.readSave();this.panels.hideTitle(),this.audio.start(),t&&this.state==="dead"&&(this.resetVoyage(),this.applySave(t),this.enterSystem(this.star,!0)),this.state="play",this.fadeIn=1,this.engine.post.fade=1,this.hud.note(`${this.star.name} \xB7 ${Nn(this.homeYears)} at home`)}toTitle(){this.state="title",this.titleT=0,this.maps.toggle(!1),this.panels.toggleJournal(!1),this.input.releaseLock(),this.panels.showTitle(this.hasSave())}enterSystem(t,e=!1){let n=this.universe.galaxy;this.view&&this.view.dispose(),this.signalView&&this.signalView.dispose(),this.star=t,this.sys=this.universe.system(t),this.world.sys=this.sys,this.view=new Ca(this.engine,this.sys),this.world.positions=this.view.positions,this.world.orient=this.view.orient,this.view.computeKinematics(this.time),this.signalView=new Ia(this.engine.scene,this.sys,this.view.planets),this.target=null,this.autopilot=!1,this.warpIndex=0,this.scan=0,this.engine.sky.regenerate(t.pos,e),this.envDirty=!0;let i=n.starsInRadius(t.pos,100),r=[];for(let{star:o,d:l}of i){if(o.id===t.id||o.kind==="blackhole"||l<.01)continue;let c=Math.max(o.lum,1e-6)/(l*l);c<25e-7&&o.id!=="SOL"||r.push({dir:[(o.pos[0]-t.pos[0])/l,(o.pos[1]-t.pos[1])/l,(o.pos[2]-t.pos[2])/l],color:id(o.color).map(h=>h*.6),flux:c})}this.engine.sky.setStars(r);let a=i.filter(o=>o.star.kind==="blackhole").sort((o,l)=>o.d-l.d)[0];this.nearBH=a?a.star:null,this.audio.setMood(t.seed,t.cls),this.visited.add(t.id),this.pendingPlacement&&(this.applyPlacement(this.pendingPlacement),this.pendingPlacement=null)}applyPlacement(t){let e=this.ship;if(this.view.computeKinematics(this.time),t.kind==="near"){let n=this.sys.bodies[t.body],i=this.view.positions[t.body],r=et.nrm(et.scl(i,-1)),a=et.nrm(et.cross(r,[0,1,0])),o=et.add(et.add(et.scl(r,.55),et.scl(a,.75)),[0,.22,0]),l=et.scl(et.nrm(o),t.dist);e.frame=t.body,e.rot=!1,e.p=l,e.v=[0,0,0],e.q=this.qLookDir(et.nrm(et.scl(l,-1))),e.mode="flight"}else t.kind==="saved"&&(e.frame=t.frame,e.rot=t.rot,e.p=t.p,e.v=t.v,e.q=t.q,e.mode=t.mode==="landed"?"landed":(t.mode==="cruise","flight"),e.mode==="landed"&&(e.landQ=e.q.slice(),e.gearDown=!0,this.shipModel.gear=1));this.camQ=e.q.slice()}arriveSystem(t,e,n){let i=Math.max(t.lum,.001),r=t.radius*6957e5,a=pe(Math.sqrt(i)*.32*fe,r*45,3*fe);t.kind==="blackhole"&&(a=.4*fe),t.kind==="neutron"&&(a=.05*fe),this.arrivalDistance=a,this.enterSystem(t),this.ship.frame=-1,this.ship.rot=!1,this.ship.p=et.scl(e,-(a+n)),this.ship.q=this.qLookDir(e),this.camQ=this.ship.q.slice()}onArrived(t,e){if(this.jumps++,this.travelled+=e,this.jumpTarget=null,this.maps.selected=null,this.route){let o=this.route.path.findIndex(c=>c.id===this.star.id),l=o>=0?this.route.path.slice(o+1):[];l.length?(this.route.path=l,this.jumpTarget=l[0],this.maps.selected=l[0],setTimeout(()=>this.hud.note(`Next on route: ${l[0].name} \xB7 ${l.length} to go`,"info",7),3500)):this.route=null}let n=this.sys,i=this.star;this.audio.arrive();let r=new xe(Dn(i.seed,this.jumps));this.hud.note(`Arrived: ${i.name}, ${i.spectral}.`),this.hud.note(`${n.bodies.length} ${n.bodies.length===1?"body":"bodies"} detected. ${r.pick(Qu)}`);let a=this.universe.trailIndex(i.id);a>0&&a===this.trailFound+1&&setTimeout(()=>this.hud.note("A faint beacon is broadcasting in this system.","good",9),2500),i.id==="SOL"&&setTimeout(()=>this.panels.transmission({kicker:"Sol",title:"Home",body:`Home, or what the word still means. ${Math.round(this.homeYears)} years have passed here since you left. The old Outer Survey relay at Earth does not answer. Nobody uses these frequencies anymore, or nobody is listening on them. The Sun looks exactly the same.`}),3e3),i.scoopable||setTimeout(()=>this.hud.note("This star cannot be scooped. Gas giants can be skimmed for fuel.","warn",9),4e3),this.checkMessages(!0),this.saveGame()}qLookDir(t){let e=new se,n=new P(t[0],t[1],t[2]).normalize(),i=new P(0,1,0);Math.abs(n.dot(i))>.98&&(i=new P(1,0,0)),e.lookAt(new P(0,0,0),n,i);let r=new Ge().setFromRotationMatrix(e);return[r.x,r.y,r.z,r.w]}dirToFrame(t){let e=this.ship.frameState(this.world);return Yt(un(e.q),t)}jumpRange(){return Math.min(ur,this.ship.fuel*nd)}jumpCost(t){return t/nd}setJumpTarget(t,e=!1){this.jumpTarget=t,e||(this.route=null),t&&this.hud.note(`Jump target: ${t.name} \xB7 ${me(t.pos,this.star.pos).toFixed(1)} ly`,"info",5)}planRoute(t){let e=this.universe.galaxy,n=this.star,i=ur*.98,r=c=>c.id,a=new Map([[r(n),{s:n,g:0,f:me(n.pos,t.pos),prev:null}]]),o=new Map,l=0;for(;a.size&&l++<4e3;){let c=null;for(let h of a.values())(!c||h.f<c.f)&&(c=h);if(a.delete(r(c.s)),o.set(r(c.s),c),c.s.id===t.id){let h=[];for(let u=c;u&&u.s.id!==n.id;u=u.prev)h.unshift(u.s);return h}for(let{star:h,d:u}of e.starsInRadius(c.s.pos,i)){if(h.id===c.s.id||o.has(r(h))||!h.scoopable&&h.id!==t.id)continue;let d=c.g+u+3,f=a.get(r(h));(!f||d<f.g)&&a.set(r(h),{s:h,g:d,f:d+me(h.pos,t.pos),prev:c})}}return null}setRoute(t){let e=this.planRoute(t);return!e||!e.length?(this.hud.note(`No route to ${t.name} found.`,"warn",5),!1):(this.route={dest:t,path:e},this.setJumpTarget(e[0],!0),this.hud.note(`Route to ${t.name}: ${e.length} ${e.length===1?"jump":"jumps"}.`,"good",6),!0)}setTarget(t){this.target=t,this.scan=0,this.maps.renderInfo?.()}signalLabel(t){let e=this.readSignals.has(this.signalKey(t));return t.type==="beacon"?e?"Marrow beacon":"Faint beacon":t.type==="petrel"?e?"PETREL":"Vessel transponder":e?Rc[t.type].label:"Unidentified signal"}signalKey(t){return`${this.star.id}/${this.sys.signals.indexOf(t)}`}trailKnown(){let t=[],e=this.universe.trail;for(let n=0;n<=Math.min(this.trailFound+1,e.length-1);n++)n!==0&&t.push({star:e[n],found:n<=this.trailFound});return t}nearestSurface(t){let e=Math.hypot(t[0],t[1],t[2])-this.sys.star.radius*1.05,n=-1;for(let i of this.sys.bodies){let r=this.view.positions[i.index],a=i.solid?i.radius+i.terrain.amp:i.radius*1.01,o=Math.hypot(t[0]-r[0],t[1]-r[1],t[2]-r[2])-a;o<e&&(e=o,n=i.index)}if(this.target&&this.target.kind==="signal"){let i=this.signalView.items[this.target.index];if(i){let r=Math.hypot(t[0]-i.worldPos[0],t[1]-i.worldPos[1],t[2]-i.worldPos[2])-i.model.userData.radius-900;r<e&&(e=r,n=-2)}}return this.nearestWho=n,Math.max(e,1)}massLock(t){let e=this.sys.star.radius;if(Math.hypot(t[0],t[1],t[2])<e*12)return this.sys.star.name;for(let n of this.sys.bodies){let i=this.view.positions[n.index];if(Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])<Math.max(n.radius*8,2e7))return n.name}return null}frame(t){requestAnimationFrame(n=>this.frame(n));let e=(t-this.last)/1e3;this.last=t,e>0||(e=.016),e=Math.min(e,.1);try{this.step(e)}catch(n){console.error(n)}this.input.endFrame()}watchPerformance(t){if(this.state!=="play"||this.perfDone||this.settings.qualityLocked||window.__TLQ_TEST)return;if(this.perf=this.perf||{t:0,frames:0,skip:2},this.perf.skip>0){this.perf.skip-=t;return}if(this.perf.t+=t,this.perf.frames++,this.perf.t<6)return;let e=this.perf.frames/this.perf.t;this.perfDone=!0;let n=["low","medium","high","ultra"],i=n.indexOf(this.settings.quality);if(e<38&&i>0){let r=n[Math.max(0,i-(e<22?2:1))];this.settings.quality=r,this.applySettings(),document.getElementById("set-quality").value=r,this.hud.note(`Render quality lowered to ${r} to keep things smooth. Change it in Settings.`,"info",8),this.perfDone=!1,this.perf={t:0,frames:0,skip:2},r==="low"&&(this.perfDone=!0)}}step(t){this.watchPerformance(t),this._velCache=[];let e=this.input;e.enabled=this.state==="play"&&!this.maps.open&&!this.panels.modalOpen,this.state==="play"&&this.handleKeys(t);let n=this.state==="play"?za[this.warpIndex]:1,i=t*n;this.state==="play"||this.state==="intro"?(this.time+=i,this.jump.active||(this.homeYears+=i/Hi,this.shipYears+=i/Hi)):this.time+=t*20,this.view.computeKinematics(this.time),this.state==="play"?this.updateShip(t,i):this.idleShip(t),this.updateCamera(t),this.render(t)}handleKeys(t){let e=this.input,n=this.ship,i=a=>a.some(o=>this.input.pressed.has(o));if(i(["Escape"])&&(this.maps.open?this.maps.toggle(!1):this.panels.journal.hidden?this.panels.help.hidden?document.getElementById("settings").hidden?this.panels.transOpen?this.panels.closeTransmission():this.panels.togglePause():document.getElementById("settings").hidden=!0:this.panels.toggleHelp(!1):this.panels.toggleJournal(!1)),i(["KeyM"])&&this.maps.toggle(void 0,"galaxy"),i(["KeyN"])&&this.maps.toggle(!(this.maps.open&&this.maps.tab==="system"),"system"),i(["KeyK"])&&this.panels.toggleJournal(),i(["KeyH","F1"])&&this.panels.toggleHelp(),i(["Enter"])&&this.panels.transOpen&&this.panels.closeTransmission(),!e.enabled)return;e.hit("KeyC")&&(this.camMode=this.camMode==="chase"?"cockpit":"chase",this.audio.blip()),e.hit("KeyG")&&(n.mode==="landed"?this.hud.note("Gear stays down while landed.","warn",3):(n.gearDown=!n.gearDown,this.audio.servo(),this.hud.note(n.gearDown?"Landing gear down":"Landing gear up","info",3))),e.hit("KeyL")&&(n.lights=!n.lights,this.audio.blip()),e.hit("KeyX")&&(n.throttle=0),e.hit("KeyT")&&this.targetAhead(),e.hit("KeyP")&&(this.autopilot=!this.autopilot&&!!this.target,this.hud.note(this.autopilot?"Autopilot: approaching target":"Autopilot off","info",4),this.audio.blip()),e.hit("Tab")&&this.toggleCruise(),e.hit("KeyJ")&&this.tryJump(),e.hit("Space")&&this.spacePressed(),e.hit("Period")&&this.changeWarp(1),e.hit("Comma")&&this.changeWarp(-1),e.wheel&&(this.camZoom=pe(this.camZoom*(e.wheel>0?1.12:.89),.45,6));let r=n.mode==="cruise"?.45:.6;e.down("KeyW")&&(n.throttle=Math.min(1,n.throttle+r*t)),e.down("KeyS")&&(n.throttle=Math.max(0,n.throttle-r*t))}changeWarp(t){let e=this.ship,n=e.mode==="landed"||e.mode==="flight"&&et.len(e.v)<1&&this.nearestSurface(this.shipWorld)>5e6;if(t>0&&!n){this.hud.note("Time compression only while landed, or stationary in open space.","warn",4),this.warpIndex=0;return}this.warpIndex=pe(this.warpIndex+t,0,za.length-1),this.hud.note(this.warpIndex?`Time \xD7${za[this.warpIndex]}`:"Time normal","info",2)}toggleCruise(){let t=this.ship;if(t.mode==="cruise"){t.mode="flight",t.v=et.scl(t.forward,Math.min(t.cruiseV,300)),t.throttle=Math.min(t.throttle,.4),this.audio.disengage(),this.hud.note("Cruise drive disengaged","info",3);return}if(t.mode==="landed"){this.hud.note("Take off first.","warn",3);return}if(t.mode==="flight"){if(t.alt<2e3){this.hud.note("Too close to the surface for cruise.","warn",3);return}t.mode="cruise",t.cruiseV=Math.max(et.len(t.v),500),t.throttle<.25&&(t.throttle=.75),t.gearDown&&(t.gearDown=!1,this.audio.servo()),this.warpIndex=0,this.audio.engage(),this.hud.note("Cruise drive engaged","info",3),this.objective==="cruise"&&(this.objective="approach")}}tryJump(){let t=this.ship;if(this.jump.active){this.jump.phase==="charge"&&this.jump.cancel("Jump cancelled");return}let e=this.jumpTarget;if(!e){this.hud.note("No jump target. Open the galaxy map (M) and pick a star.","warn",5),this.audio.deny();return}let n=me(e.pos,this.star.pos);if(n>ur){this.hud.note(`${e.name} is beyond the drive's ${ur} ly limit.`,"warn",5),this.audio.deny();return}if(this.jumpCost(n)>t.fuel){this.hud.note("Not enough fuel. Skim a star or a gas giant.","warn",5),this.audio.deny();return}if(t.mode==="landed"){this.hud.note("Take off before jumping.","warn",4),this.audio.deny();return}let i=this.massLock(this.shipWorld);if(i){this.hud.note(`Mass lock: too close to ${i}. Move further out.`,"warn",5),this.audio.deny();return}t.fuel-=this.jumpCost(n),this.warpIndex=0,this.autopilot=!1,this.jump.start(e)}targetAhead(){let t=new P(0,0,-1).applyQuaternion(this.engine.camera.quaternion),e=null,n=.2,i=(a,o,l=0)=>{let c=Math.hypot(o[0],o[1],o[2]),h=Math.acos(pe((o[0]*t.x+o[1]*t.y+o[2]*t.z)/c,-1,1))-l;h<n&&(n=h,e=a)},r=this.camWorld;i({kind:"star"},[-r[0],-r[1],-r[2]]),this.sys.bodies.forEach((a,o)=>{if(!this.scanned&&a.parent>=0)return;let l=this.view.positions[o],c=[l[0]-r[0],l[1]-r[1],l[2]-r[2]];i({kind:"body",index:o},c,Math.asin(Math.min(1,a.radius/Math.hypot(...c))))}),this.scanned&&this.signalView.items.forEach((a,o)=>i({kind:"signal",index:o},a.rel||[1,0,0])),e?(this.setTarget(e),this.audio.select()):(this.setTarget(null),this.audio.blip())}get scanned(){return this.scannedSystems.has(this.star.id)}spacePressed(){if((!this.scanned||!this.targetInScanRange())&&(this.hud.pulse=0,this.audio.pulse(),!this.scanned)){this.scannedSystems.add(this.star.id);let t=this.sys.bodies.length,e=this.sys.signals.length;setTimeout(()=>{this.hud.note(`Pulse scan: ${t} ${t===1?"body":"bodies"} resolved${e?`, ${e} unidentified ${e===1?"signal":"signals"}`:""}.`,e?"good":"info",8),this.objective==="scan"&&e&&(setTimeout(()=>this.hud.note("Open the system map (N) and click the signal to target it.","good",10),1800),this.objective="target")},1400),this.saveGame()}}targetInScanRange(){let t=this.target;if(!t||t.kind==="star")return!1;let e=this.targetInfo();return e&&e.inRange}get shipWorld(){return this._shipWorld||[0,0,0]}updateShip(t,e){let n=this.ship,i=this.input,r=this.world,a=(i.buttons&2)!==0||n.mode==="landed";i.updateStick(t,a),this._shipWorld=n.worldPos(r),n.measureGround(r,this.heightAt),n.gearReady=this.shipModel.gear>.85,n.bottom=this.shipModel.bottom;let o=0;if(this.jump.active)o=this.jump.update(t);else if(n.mode==="landed")n.updateLanded(e,r,this.heightAt),(i.down("KeyR")||i.down("KeyW")&&n.throttle>.05)&&(n.takeoff(),this.warpIndex=0,this.audio.thud(.15),this.hud.note("Lifting off","info",3));else{if(this.autopilot)this.runAutopilot(t);else if(this.faceTarget>0){this.faceTarget-=t;let l=this.targetInfo();l&&n.turnToward(this.dirToFrame(et.nrm(et.sub(l.worldPos,this._shipWorld))),t,.9),Math.hypot(i.stick.x,i.stick.y)>.2&&(this.faceTarget=0)}if(n.steer(t,i,a&&n.mode!=="landed"?(i.buttons&2)!==0:!1),n.mode==="cruise"){let l=this.nearestSurface(this._shipWorld);n.updateCruise(t,l),(l<1500||n.frame>=0&&n.alt<1500)&&(n.mode="flight",n.v=et.scl(n.forward,Math.min(n.cruiseV,250)),n.throttle=.3,this.audio.disengage(),this.hud.note("Cruise drive disengaged: proximity","warn",4))}else if(n.mode==="flight"){let l=e>.05?Math.ceil(e/.05):1;for(let c=0;c<l;c++){n.updateFlight(e/l,i,r,this.heightAt);let h=n.collide(r,this.heightAt);if(h&&this.handleContact(h),n.mode!=="flight")break}}}(!this.jump.active||this.jump.phase==="charge")&&n.chooseFrame(r),this._shipWorld=n.worldPos(r),n.measureGround(r,this.heightAt),n.speed=this.jump.active?this.jump.beta()*299792458:n.mode==="cruise"?n.cruiseV:et.len(n.v),n.frame>=0&&n.mode==="flight"&&(n.vertSpeed=et.dot(n.v,et.nrm(n.p))),this.environment(e,t),this.updateScan(t),this.checkMessages(!1),this.saveTimer+=t,this.saveTimer>45&&!this.jump.active&&(this.saveTimer=0,this.saveGame()),this.warpIndex&&!(n.mode==="landed"||n.mode==="flight"&&et.len(n.v)<1)&&(this.warpIndex=0),this.jumpLevel=o}runAutopilot(t){let e=this.ship,n=this.targetInfo();if(!n){this.autopilot=!1;return}let i=this._shipWorld,r=n.worldPos,a=this.sys.bodies.map(u=>{let d=this.view.positions[u.index],f=(u.rings?u.rings.outer:u.radius)*1.6+2e5,p=u.radius*1.2+5e4,v=et.len(et.sub(n.worldPos,d))<f;return{pos:d,clear:v?p:f,idx:u.index}});a.push({pos:[0,0,0],clear:this.sys.star.radius*4,idx:-1});for(let u=0;u<2;u++){let d=et.sub(r,i),f=et.len(d),p=et.scl(d,1/f),v=null;for(let m of a){if(n.kind==="body"&&m.idx===n.body.index||et.len(et.sub(n.worldPos,m.pos))<m.clear||n.surfaceDist<3e4)continue;let _=et.dot(et.sub(m.pos,i),p);if(_<=0||_>=f)continue;let x=et.add(i,et.scl(p,_)),y=et.len(et.sub(x,m.pos));y<m.clear&&(!v||_<v.t)&&(v={o:m,t:_,closest:x,miss:y})}if(!v)break;let g=et.sub(v.closest,v.o.pos);et.len(g)<1&&(g=et.cross(p,[0,1,0])),r=et.add(v.o.pos,et.scl(et.nrm(g),v.o.clear*1.25))}let o=et.nrm(et.sub(r,i)),l=this.dirToFrame(o),c=e.turnToward(l,t,e.mode==="cruise"?.5:.8),h=n.kind==="signal"?2500:n.kind==="star"?n.radius*8:Math.max(n.radius*.1,15e3);if(n.surfaceDist<h){e.mode==="cruise"&&this.toggleCruise(),e.throttle=0,this.autopilot=!1,this.faceTarget=6,this.hud.note(`Arrived at ${n.name}`,"good",5);return}e.mode==="flight"&&c>.995&&n.surfaceDist>2e4&&e.alt>2e3&&this.toggleCruise(),e.mode==="cruise"&&(e.throttle=c>.98?1:.15)}handleContact(t){let e=this.ship;if(t.type==="land"){e.land(this.world,t.normal),this.audio.thud(.35);let n=this.sys.bodies[e.frame],i=Dc[n.type]||Dc.barren;this.hud.note(`${n.name}. ${i[Math.floor(Math.random()*i.length)]}`,"info",9),setTimeout(()=>this.hud.note("Comma and period compress time. Watch the sky turn.","info",8),4e3),this.saveGame();return}t.type==="scrape"&&(t.damage>.002&&(e.hull-=t.damage,this.audio.thud(Math.min(.6,.15+t.damage*4)),this.shake=Math.min(1.5,(this.shake||0)+t.damage*10),this.hud.note(t.damage>.1?"Hull impact!":"Hull scraped","warn",3),!e.gearReady&&t.impact<6&&this.hud.note("Lower the landing gear (G) to set down.","warn",4)),e.hull<=0&&this.die("The hull gave way on impact.")),t.type}environment(t,e){let n=this.ship,i=this._shipWorld,r=this.sys,a=Math.hypot(i[0],i[1],i[2]),l=17e-6*this.view.irradianceAt(i),c=0,h=r.star.radius;r.star.starKind!=="blackhole"&&a<h*6&&this.star.scoopable&&n.mode!=="jump"&&(c=.22*Math.min(4,(2*h/a)**2),l+=c*.05),a<h*1.02&&r.star.starKind!=="blackhole"&&this.die(`Flew into ${r.star.name}.`),r.star.starKind==="blackhole"&&a<h*3&&this.die("Crossed the event horizon. Nothing you know of comes back.");let u=n.frame>=0?r.bodies[n.frame]:null,d=0;if(u){if(!u.solid&&u.atmosphere&&n.alt<u.atmosphere.top){let f=(u.atmosphere.top-n.alt)/u.atmosphere.top;n.alt>u.atmosphere.top*.3&&n.speed<3e3&&(c=Math.max(c,.02*f)),d=Math.min(1,f*1.5),n.alt<0&&(n.hull-=t*.03*(1+-n.alt/5e3),l+=.03,n.hull<=0&&this.die(`Crushed in the depths of ${u.name}.`))}if(u.solid&&u.atmosphere){let f=Math.exp(-Math.max(n.alt,0)/u.atmosphere.H)*Math.min(1,u.pressure);d=Math.min(1,f*1.2),u.type==="venus"&&n.alt<3e4&&(l+=.03*(1-n.alt/3e4))}u.solid&&u.type==="lava"&&n.alt<2e3&&(l+=.012*(1-n.alt/2e3))}n.heat+=(l-.075*n.heat)*t,n.heat=Math.max(0,n.heat),n.heat>1&&(n.hull-=(n.heat-1)*.06*t,n.hull<=0&&this.die("Overheated. The radiators could not shed it fast enough.")),c>0&&(n.fuel=Math.min(1,n.fuel+c*t*.5)),this.scooping=c>.001&&n.fuel<.999,n.mode==="landed"&&n.hull<1&&(n.hull=Math.min(1,n.hull+t/3600*.25)),this.windDensity=d}die(t){this.state!=="dead"&&(this.state="dead",this.ship.mode="dead",this.ship.hull=0,this.jump.phase="idle",Cs(this.engine.sky.uniforms,0),this.audio.thud(.7),this.engine.post.flash=.5,setTimeout(()=>this.panels.showDeath(t,this.stats()),2200))}targetInfo(){let t=this.target;if(!t)return null;let e=this._shipWorld||[0,0,0];if(t.kind==="star"){let r=Math.hypot(e[0],e[1],e[2]);return{kind:"star",name:this.sys.star.name,worldPos:[0,0,0],radius:this.sys.star.radius,dist:r,surfaceDist:r-this.sys.star.radius,inRange:!1}}if(t.kind==="body"){let r=this.sys.bodies[t.index],a=this.view.positions[t.index],o=Math.hypot(e[0]-a[0],e[1]-a[1],e[2]-a[2]);return{kind:"body",name:r.name,body:r,worldPos:a,radius:r.radius,dist:o,surfaceDist:o-r.radius,inRange:o<r.radius*30+5e6}}let n=this.signalView.items[t.index];if(!n)return null;let i=Math.hypot(e[0]-n.worldPos[0],e[1]-n.worldPos[1],e[2]-n.worldPos[2]);return{kind:"signal",name:this.signalLabel(n.sig),sig:n.sig,worldPos:n.worldPos,radius:n.model.userData.radius,dist:i,surfaceDist:i-n.model.userData.radius,inRange:i<Rc[n.sig.type].range}}updateScan(t){let e=this.targetInfo(),n=this.input.down("Space");if(!e||!n||!e.inRange||e.kind==="star"){this.scan=Math.max(0,this.scan-t*2);return}if((e.kind==="body"?this.surveyed.has(e.body.id):this.readSignals.has(this.signalKey(e.sig)))&&this.scan===0)return;let r=et.sub(e.worldPos,this.camWorld),a=new P(0,0,-1).applyQuaternion(this.engine.camera.quaternion),o=(r[0]*a.x+r[1]*a.y+r[2]*a.z)/et.len(r),l=et.nrm(et.sub(e.worldPos,this._shipWorld)),c=Yt(this.ship.worldQ(this.world),[0,0,-1]);if(o<Math.cos(.75)&&et.dot(l,c)<Math.cos(.75)){this.centerMsg="Turn toward the target to scan";return}this.scan+=t/(e.kind==="body"?2.6:2),this.scan>=1&&(this.scan=0,e.kind==="body"?this.completeSurvey(e.body):this.readSignal(e.sig))}completeSurvey(t){if(this.surveyed.has(t.id))return;this.surveyed.add(t.id),this.audio.surveyed();let e=td(t,this.sys.star);this.panels.surveyCard(t,e,{typeLabel:Us[t.type]}),t.life&&(this.lifeFound.add(t.id),this.addLog({kind:"survey",title:`Life on ${t.name}`,text:e}),this.hud.note("Biosignatures confirmed.","good",8)),this.saveGame()}readSignal(t){let e=this.signalKey(t);if(this.readSignals.has(e))return;this.readSignals.add(e),this.audio.surveyed();let n=new xe(t.seed),i=new Set(this.logs.map(u=>u.text)),r=u=>{let d=n.int(0,u.length-1);for(let f=0;f<u.length;f++){let p=u[(d+f)%u.length];if(!i.has(p))return p}return u[d]},a,o,l,c=this.sys.bodies[t.body];if(t.type==="beacon"||t.type==="petrel"){let u=t.trail,d=this.universe.trail[u+1];if(l=Lc[Math.min(u,Lc.length-1)],d){let f=me(d.pos,this.star.pos);l=l.replace("{next}",d.name).replace("{dist}",Math.round(f))}o=u===_i?"Vessel PETREL \xB7 Surveyor Seven":`Survey beacon \xB7 Surveyor Seven \xB7 ${u+1} of ${_i+1}`,a=u===_i?"Ilse Marrow":`Beacon at ${this.star.name}`,this.trailFound=Math.max(this.trailFound,u),d&&setTimeout(()=>{this.hud.note(`Beacon coordinates logged: ${d.name}. Marked on the galaxy map.`,"good",10);let f=me(d.pos,this.star.pos);!this.jumpTarget&&f<=ur?this.setJumpTarget(d):!this.jumpTarget&&this.setRoute(d)&&setTimeout(()=>this.hud.note(`${d.name} is ${Math.round(f)} ly away, beyond one jump. A route has been plotted.`,"info",9),1500)},600)}else t.type==="probe"?(o="Derelict probe",a=`In orbit of ${c.name}`,l=r(Zu)):t.type==="wreck"?(o="Wreckage",a=`On ${c.name}`,l=r(ju)):t.type==="monolith"?(o="Unidentified structure",a=`On ${c.name}`,l=r(Ju)):(o="Orbital structure",a=`Around ${c.name}`,l=r(Ku));this.addLog({kind:t.type,title:`${o}: ${a}`,text:l});let h=t.type==="petrel";this.panels.transmission({kicker:o,title:a,body:l,meta:`${this.star.name} \xB7 ${Nn(this.homeYears)}`,after:h?()=>setTimeout(()=>this.panels.openWriter(),600):void 0}),(this.objective==="target"||this.objective==="approach")&&(this.objective="done"),this.saveGame()}leaveBeacon(t){this.ownBeacons.push({star:this.star.name,text:t,year:Nn(this.homeYears)}),this.addLog({kind:"own",title:`Your beacon at ${this.star.name}`,text:t}),this.hud.note("Your beacon is transmitting. Someone, someday.","good",10),setTimeout(()=>this.hud.note("Marrow's route ends here. Yours doesn't have to.","info",10),4e3),this.saveGame()}addLog(t){this.logs.push({...t,where:this.star.name,when:Nn(this.homeYears)})}checkMessages(t){if(this.msgTimer=(this.msgTimer||0)-1,!t&&this.msgTimer>0)return;this.msgTimer=120;let e=me(this.star.pos,we),n=this.homeYears-e;Yu.forEach((i,r)=>{if(this.received.has(r)||i.year>n)return;this.received.add(r);let a=this.homeYears-i.year;this.logs.push({kind:"home",title:i.from,text:i.text,where:this.star.name,when:`sent ${Nn(i.year)}, received ${Nn(this.homeYears)}`}),setTimeout(()=>this.panels.transmission({kicker:"Transmission from Sol",title:i.from,body:i.text,meta:`Sent ${Nn(i.year)} \xB7 in transit ${a.toFixed(1)} years`}),1500+r*50)})}stats(){let t=[];for(let n of this.surveyed){let[i,r]=n.split("/"),a=this.universe.galaxy.starById(i);if(!a)continue;let l=this.universe.system(a).bodies[Number(r)];l&&t.push({name:l.name,type:Us[l.type],life:l.life})}let e=this.star.pos;return{systems:this.visited.size,bodies:this.surveyed.size,life:this.lifeFound.size,signals:this.readSignals.size,trail:this.trailFound+1,trailTotal:_i+1,list:t,fromSol:me(e,we),travelled:this.travelled,jumps:this.jumps,shipTime:`${Math.floor(this.shipYears)} yr ${Math.floor(this.shipYears%1*365)} d`,homeYear:Nn(this.homeYears),galR:Math.hypot(e[0],e[2])}}idleShip(t){let e=this.ship;this.titleT=(this.titleT||0)+t,this._shipWorld=e.worldPos(this.world),e.measureGround(this.world,this.heightAt),e.mode==="landed"&&e.updateLanded(t,this.world,this.heightAt)}updateCamera(t){let e=this.ship,n=this.world,i=e.frameState(n),r=this.input;r.buttons&2||e.mode==="landed"&&r.locked||this.state==="title"?(this.freeYaw-=r.mouseDelta.x*.004,this.freePitch=pe(this.freePitch+r.mouseDelta.y*.004,-1.3,1.3)):e.mode!=="landed"&&(this.freeYaw*=Math.exp(-t*1.5),this.freePitch+=(.1-this.freePitch)*(1-Math.exp(-t*1.5))),this.state==="title"&&(this.freeYaw+=t*.02);let a=Ue([0,Math.sin(this.freeYaw/2),0,Math.cos(this.freeYaw/2)],[Math.sin(-this.freePitch/2),0,0,Math.cos(-this.freePitch/2)]),o,l,c=this.camMode==="chase"||this.state!=="play";if(c){let p=e.mode==="cruise"?7:5;this.camQ=Ic.qSlerp(this.camQ,e.q,1-Math.exp(-t*p));let v=Ue(this.camQ,a),g=36*this.camZoom*(this.state==="title"?1.6:1),m=Yt(v,[0,4+g*.12,g]);if(o=et.add(e.p,m),l=Ue(v,[Math.sin(-.05),0,0,Math.cos(-.05)]),e.frame>=0&&n.sys.bodies[e.frame].solid){let _=n.sys.bodies[e.frame],x=et.len(o);if(x<_.radius*1.2){let y=e.rot?et.scl(o,1/x):Yt(un(n.orient[e.frame]),et.scl(o,1/x)),R=_.radius+this.heightAt(e.frame,y)+2.5;x<R&&(o=et.scl(o,R/x))}}}else o=et.add(e.p,Yt(e.q,[0,.95,-12.2])),l=Ue(e.q,a);let h=(this.shake||0)+(this.jumpLevel||0)*.25+Math.min(.4,(this.windDensity||0)*Math.min(1,e.speed/400));if(this.shake=Math.max(0,(this.shake||0)-t*1.5),h>.001){let p=performance.now()/1e3,v=h*.004;l=Ue(l,[Math.sin(p*37)*v,Math.sin(p*29+1)*v,Math.sin(p*23+2)*v*.5,1]),l=Ic.qNormalize(l)}let u=Ue(i.q,l);this.camWorld=et.add(i.pos,Yt(i.q,o));let d=this.engine.camera;d.quaternion.set(u[0],u[1],u[2],u[3]),d.position.set(0,0,0);let f=this.baseFov+(e.mode==="cruise"?Math.min(8,Math.log10(Math.max(e.cruiseV,1e3)/1e3)*1.6):0);d.fov+=(f-d.fov)*(1-Math.exp(-t*2)),d.near=c?.5:.08,d.updateProjectionMatrix(),d.updateMatrixWorld()}render(t){let e=this.engine,n=this.ship,i=this.world,r=this.camWorld,a=e.updateFrustum(),o=this._shipWorld||n.worldPos(i),l=n.worldQ(i),c=et.add(o,Yt(l,[0,-2.15,-11.6])),h=Yt(l,et.nrm([0,-.45,-1])),u={time:this.time,camWorld:r,pixelAngle:e.pixelAngle,projScale:e.projScale,pxRatio:e.pixelRatio,frustum:a,spot:{pos:et.sub(c,r),dir:h,on:n.lights,intensity:3e3/this.exposure,cos:Math.cos(.42)}};u.extraGlints=this.signalView.update(u,this.time,r,this.exposure),this.view.update(u);let d=this.shipModel;d.group.position.set(o[0]-r[0],o[1]-r[1],o[2]-r[2]),d.group.quaternion.set(l[0],l[1],l[2],l[3]),d.group.visible=this.camMode==="chase"||this.state!=="play";let f=et.nrm(et.sub(we,this.star.pos)),p=Yt(un(l),f);d.animate(this.time,t,{gear:n.gearDown||n.mode==="landed"?1:0,thrust:n.mode==="jump"?0:n.thrust,jumpGlow:n.mode==="jump"?Math.min(1,(this.jumpLevel||0)*1.5):0,heat:n.heat,lights:n.lights,cruise:n.mode==="cruise",solDirLocal:p,cabinLight:!0,expo:this.exposure*1.6});let v=this.view.irradianceAt(o),g=id(this.sys.star.color),m=1;for(let A of this.sys.bodies){let I=this.view.positions[A.index],w=et.sub(I,o),M=et.nrm(et.scl(o,-1)),C=et.dot(w,M);if(C<=0)continue;let k=et.len(et.sub(w,et.scl(M,C)));k<A.radius&&(m=Math.min(m,pe((k-A.radius*.995)/(A.radius*.01)+.5,0,1)))}if(n.frame>=0&&this.sys.bodies[n.frame].atmosphere&&this.sys.bodies[n.frame].solid){let A=et.nrm(et.sub(o,this.view.positions[n.frame])),I=et.nrm(et.scl(o,-1));m*=pe(et.dot(A,I)*6+.3,0,1)}this.shipLit=m;let _=et.nrm(et.scl(o,-1)),x=d.group.position;this.sun.position.set(x.x+_[0]*150,x.y+_[1]*150,x.z+_[2]*150),this.sun.target.position.copy(x),this.sun.color.setRGB(g[0],g[1],g[2]),this.sun.intensity=v*m,this.sun.target.updateMatrixWorld();let y=0;if(n.frame>=0){let A=this.sys.bodies[n.frame],I=this.view.positions[n.frame],w=et.sub(I,o),M=et.len(w),C=et.scl(w,1/M),k=this.view.irradianceAt(I),B=.5*(1+et.dot(et.scl(C,-1),et.nrm(et.scl(I,-1))));y=k*this.view.planets[n.frame].albedo*Math.min(1,(A.radius/M)**2)*B*.8,this.fillLight.position.set(x.x-C[0]*100,x.y-C[1]*100,x.z-C[2]*100),this.fillLight.target.position.copy(x),this.fillLight.target.updateMatrixWorld()}if(this.fillLight.intensity=y,this.ambient.intensity=8e-4+(n.lights?.002:0),this.envDirty&&!e.sky.pending&&(this.envTex&&this.envTex.dispose(),this.envTex=this.pmrem.fromCubemap(e.sky.cubeTarget.texture).texture,d.setEnvMap(this.envTex),this.signalView.root.traverse(A=>{A.material&&A.material.isMeshStandardMaterial&&(A.material.envMap=this.envTex,A.material.needsUpdate=!0)}),this.envDirty=!1),e.sky.step(),this.nearBH){let A=me(this.nearBH.pos,this.star.pos),I=this.nearBH.pos.map((M,C)=>(M-this.star.pos[C])/A),w=this.nearBH.radius*6957e5;e.sky.uniforms.uBH.value.set(I[0],I[1],I[2],Math.min(.02,w/(A*sr)*4e7))}else if(this.sys.star.starKind==="blackhole"){let A=et.scl(r,-1),I=et.len(A);e.sky.uniforms.uBH.value.set(A[0]/I,A[1]/I,A[2]/I,this.sys.star.radius/I)}else e.sky.uniforms.uBH.value.set(0,0,0,0);let R=Math.max(this.view.irradianceAt(r)*Math.max(m,.02),.0015),T=.2*Math.PI/(.3*R);this.exposure=Math.exp(Math.log(this.exposure)+(Math.log(T)-Math.log(this.exposure))*(1-Math.exp(-t*1.2))),e.post.exposure=this.exposure,e.post.maxAdapt=1.7,e.sky.uniforms.uIntensity.value=1,this.fadeIn>0?(this.fadeIn=Math.max(0,this.fadeIn-t*.5),e.post.fade=this.fadeIn):this.state==="intro"?e.post.fade=1:this.state==="dead"?e.post.fade=Math.min(.9,e.post.fade+t*.35):e.post.fade=0,e.post.flash>0&&(e.post.flash=Math.max(0,e.post.flash-t*1.2)),e.render(t,performance.now()/1e3),this.drawHud(t),this.maps.draw(),this.audio.update({thrust:n.thrust,cruise:n.mode==="cruise",speed:n.speed||0,windDensity:this.windDensity||0,airSpeed:n.mode==="landed"?15:n.speed||0,scoop:this.scooping?1:0,heat:n.heat,jump:this.jumpLevel||0,music:this.state!=="boot",musicDrone:!0,rcs:!1})}drawHud(t){let e=this.ship,n=this.hud;if(n.visible=this.state==="play",this.state!=="play"){n.draw(t,null),this.drawCockpitFrame(!1);return}let i=this.camWorld,r=this._shipWorld,a=e.worldQ(this.world),o=Yt(a,[0,0,-1]),l=et.add(et.sub(r,i),et.scl(o,5e3)),c=e.worldVel(this.world),h=e.frameState(this.world),u=Yt(h.q,e.v),d=[];if(this.scanned){for(let M of this.sys.bodies){let C=this.view.positions[M.index],k=et.sub(C,i),B=et.len(k);this.target&&this.target.kind==="body"&&this.target.index===M.index||M.parent>=0&&B>M.orbit.a*40||Math.asin(Math.min(1,M.radius/B))>.6||d.push({rel:k,name:M.name,sub:yi(B-M.radius),alpha:M.parent<0?.55:.4})}this.signalView.items.forEach((M,C)=>{if(this.target&&this.target.kind==="signal"&&this.target.index===C||!M.rel)return;let k=this.view.positions[M.sig.body],B=et.sub(k,i);Math.acos(pe(et.dot(et.nrm(B),et.nrm(M.rel)),-1,1))<.04&&M.dist>2e6||d.push({rel:M.rel,name:this.signalLabel(M.sig),sub:yi(M.dist),alpha:.65,kind:"signal"})})}let f=null,p=this.targetInfo();if(p){let M=et.sub(p.worldPos,i),C=-et.dot(et.sub(c,this.targetVel(p)),et.nrm(M)),k=C>1&&e.mode==="cruise"?` \xB7 ETA ${xu(Math.max(0,p.surfaceDist)/Math.max(C,1)*1.6)}`:"",B=p.kind==="body"?this.surveyed.has(p.body.id)?" \xB7 surveyed":p.inRange?" \xB7 hold Space to survey":"":p.kind==="signal"?this.readSignals.has(this.signalKey(p.sig))?" \xB7 read":p.inRange?" \xB7 hold Space to scan":"":"";f={rel:M,name:p.name,angR:Math.asin(Math.min(1,p.radius/Math.max(p.dist,p.radius))),info:`${yi(Math.max(0,p.surfaceDist))}${k}${B}`,scan:this.scan}}let v=[],g=me(we,this.star.pos);g>.01&&v.push({dir:we.map((M,C)=>M-this.star.pos[C]),name:"SOL",color:"rgba(232,210,150,0.55)"}),this.jumpTarget&&v.push({dir:this.jumpTarget.pos.map((M,C)=>M-this.star.pos[C]),name:this.jumpTarget.name.toUpperCase(),color:"rgba(160,210,190,0.85)"});let m={flight:"FLIGHT \xB7 ASSISTED",cruise:"CRUISE DRIVE",landed:"LANDED",jump:"JUMP DRIVE",dead:"SIGNAL LOST"},_="";e.mode==="landed"?_="R or W  LIFT OFF   \xB7   , .  TIME   \xB7   MOUSE  LOOK AROUND   \xB7   L  FLOODLIGHT":e.mode==="cruise"?_=this.target?"P  AUTOPILOT   \xB7   TAB  DROP TO FLIGHT   \xB7   W S  THROTTLE":"T  TARGET AHEAD   \xB7   N  SYSTEM MAP   \xB7   TAB  DROP TO FLIGHT":e.mode==="flight"&&(e.alt<3e3&&e.frame>=0&&this.sys.bodies[e.frame].solid?_=e.gearDown?"F  DESCEND   \xB7   R  CLIMB   \xB7   X  HOLD   \xB7   SET DOWN SLOWLY":"G  LANDING GEAR   \xB7   F  DESCEND   \xB7   R  CLIMB":_=this.target?"P  AUTOPILOT   \xB7   TAB  CRUISE   \xB7   SPACE  SCAN   \xB7   M  GALAXY MAP   \xB7   H  HELP":"TAB  CRUISE   \xB7   T  TARGET   \xB7   SPACE  SCAN   \xB7   M  GALAXY MAP   \xB7   H  HELP"),!this.input.locked&&this.state==="play"&&!this.maps.open&&!this.panels.modalOpen&&(_="CLICK TO TAKE THE CONTROLS   \xB7   H  HELP");let x=null,y=null,R=null;e.heat>.85?(x="HEAT CRITICAL",y="Move away from the heat source",R="#e0674c"):this.centerMsg&&(x=this.centerMsg,this.centerMsg=null),e.mode==="flight"&&e.frame>=0&&e.canHover===!1&&e.alt<2e4&&(x="GRAVITY EXCEEDS LIFT",y="This world is too heavy to hover over",R="#e3a54b");let T=this.jumpRange(),A=null,I=!1;if(this.jumpTarget){let M=me(this.jumpTarget.pos,this.star.pos);I=M<=T,A=`JUMP ${this.jumpTarget.name.toUpperCase()} \xB7 ${M.toFixed(1)} LY${I?" \xB7 J":this.jumpCost(M)>e.fuel?" \xB7 NEED FUEL":" \xB7 OUT OF RANGE"}`,this.route&&this.route.path.length>1&&(A+=`  \xB7  ROUTE TO ${this.route.dest.name.toUpperCase()}, ${this.route.path.length} JUMPS`)}let w=this.sys.star;n.draw(t,{camera:this.engine.camera,pixelAngle:this.engine.pixelAngle,mode:e.mode,modeLabel:m[e.mode]+(this.autopilot?" \xB7 AUTOPILOT":"")+(this.warpIndex?` \xB7 TIME \xD7${za[this.warpIndex]}`:""),modeColor:e.mode==="cruise"?"rgba(160,210,190,0.9)":null,noseDir:l,velDir:et.len(u)>0?u:null,speed:e.speed||0,cruiseCap:e.cruiseCap,gLine:e.frame>=0&&isFinite(e.alt)&&e.alt<5e6?`${(e.gmag/9.81||0).toFixed(2)} g`:"",throttle:e.throttle,alt:e.frame>=0&&this.sys.bodies[e.frame]?e.alt-(this.sys.bodies[e.frame].solid?e.bottom:0):1/0,vs:e.vertSpeed||0,gear:e.mode==="flight"||e.mode==="landed",gearLabel:e.mode==="landed"?"ON THE GROUND":e.gearDown?this.shipModel.gear>.85?"GEAR DOWN":"GEAR MOVING":"GEAR UP",gearWarn:!e.gearDown&&e.alt<500,fuel:e.fuel,heat:e.heat,hull:Math.max(0,e.hull),rangeLy:T,scooping:this.scooping,systemName:this.star.name,systemSub:`${w.spectral}${this.star.scoopable?"":" \xB7 no scoop"}  \xB7  ${this.sys.bodies.length} bodies${this.scanned?"":" \xB7 unscanned"}`,timeLine:`ABOARD ${Math.floor(this.shipYears)} YR ${Math.floor(this.shipYears%1*365)} D  \xB7  HOME ${Nn(this.homeYears)}`,objective:this.objectiveText(),homeLine:`SOL ${g.toFixed(1)} LY`,jumpLine:A,jumpOk:I,labels:d,target:f,skyMarkers:v,hint:_,centerText:x,centerSub:y,centerColor:R,jump:this.jump.active?this.jump.hudInfo():null}),this.drawCockpitFrame(this.camMode==="cockpit")}objectiveText(){let t=this.universe.trail;if(this.trailFound<0)return this.star.id!==this.universe.start.id?`Return to ${this.universe.start.name}: a faint signal waits there`:this.scanned?"Find the faint signal: system map (N), then autopilot (P)":"Pulse-scan the system: press Space";if(this.trailFound>=t.length-1)return"Marrow's route ends here. Yours does not have to.";let e=t[this.trailFound+1];return e.id===this.star.id?this.scanned?"A beacon broadcasts here: find it on the system map (N)":"Pulse-scan the system: press Space":`Follow Marrow's beacons: ${e.name}, ${me(e.pos,this.star.pos).toFixed(1)} ly`}targetVel(t){return t.kind==="body"?this.world.velocity(t.body.index):t.kind==="signal"?this.world.velocity(t.sig.body):[0,0,0]}drawCockpitFrame(t){let e=document.getElementById("cockpit");e.hasAttribute("hidden")!==!t&&e.toggleAttribute("hidden",!t)}saveGame(){if(this.state==="dead"||this.jump.active)return;let t=this.ship,e={v:1,star:this.star.id,time:this.time,homeYears:this.homeYears,shipYears:this.shipYears,ship:{frame:t.frame,rot:t.rot,p:t.p,v:t.v,q:t.q,mode:t.mode==="cruise"?"flight":t.mode,fuel:t.fuel,heat:t.heat,hull:t.hull,gear:t.gearDown,lights:t.lights},visited:[...this.visited],scanned:[...this.scannedSystems],surveyed:[...this.surveyed],read:[...this.readSignals],logs:this.logs,received:[...this.received],trailFound:this.trailFound,jumpTarget:this.jumpTarget?this.jumpTarget.id:null,route:this.route?{dest:this.route.dest.id,path:this.route.path.map(n=>n.id)}:null,travelled:this.travelled,jumps:this.jumps,life:[...this.lifeFound],own:this.ownBeacons};t.mode==="cruise"&&(e.ship.v=et.scl(t.forward,Math.min(t.cruiseV,200)));try{localStorage.setItem(Ha,JSON.stringify(e))}catch{}}readSave(){try{let t=localStorage.getItem(Ha);if(!t)return null;let e=JSON.parse(t);return e&&e.v===1?e:null}catch{return null}}applySave(t){let e=this.universe.galaxy,n=e.starById(t.star)||this.universe.start;this.star=n,this.time=t.time,this.homeYears=t.homeYears,this.shipYears=t.shipYears;let i=this.ship;i.fuel=t.ship.fuel,i.heat=t.ship.heat,i.hull=t.ship.hull,i.gearDown=t.ship.gear,i.lights=t.ship.lights,this.shipModel.gear=i.gearDown?1:0,this.visited=new Set(t.visited),this.scannedSystems=new Set(t.scanned),this.surveyed=new Set(t.surveyed),this.readSignals=new Set(t.read),this.logs=t.logs||[],this.received=new Set(t.received),this.trailFound=t.trailFound??-1,this.jumpTarget=t.jumpTarget?e.starById(t.jumpTarget):null,this.route=t.route?{dest:e.starById(t.route.dest),path:t.route.path.map(r=>e.starById(r)).filter(Boolean)}:null,this.route&&!this.route.dest&&(this.route=null),this.travelled=t.travelled||0,this.jumps=t.jumps||0,this.lifeFound=new Set(t.life||[]),this.ownBeacons=t.own||[],this.pendingPlacement={kind:"saved",...t.ship}}};function wx(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}async function Ex(){if(!wx()){document.getElementById("nowebgl").hidden=!1;return}try{await Promise.race([document.fonts?.ready,new Promise(e=>setTimeout(e,1500))])}catch{}document.getElementById("scene").addEventListener("webglcontextlost",e=>{e.preventDefault();let n=document.getElementById("nowebgl");n.textContent="The graphics context was lost (the GPU reset or ran out of memory). Your voyage autosaves; reload the page to continue.",n.hidden=!1}),await new Va().boot()}Ex();})();
