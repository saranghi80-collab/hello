(()=>{var Md=Object.defineProperty;var bd=(s,t,e)=>t in s?Md(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var qc=(s,t,e)=>bd(s,typeof t!="symbol"?t+"":t,e);var Sd=0,Xc=1,wd=2;var Kh=1,Zl=2,Xi=3,Ye=0,be=1,Me=2,gn=0,ps=1,$c=2,Yc=3,jc=4,Re=5,Yi=100,Ed=101,Td=102,Ad=103,Rd=104,Cd=200,ce=201,Id=202,Pd=203,xs=204,vn=205,Ld=206,Dd=207,Nd=208,Ud=209,Fd=210,Od=211,kd=212,Bd=213,Hd=214,Po=0,Lo=1,Do=2,ys=3,No=4,Uo=5,Fo=6,Oo=7,Qh=0,zd=1,Vd=2,Pi=0,Gd=1,Wd=2,qd=3,Xd=4,$d=5,Yd=6,jd=7;var tu=300,_s=301,Ms=302,ko=303,Bo=304,va=306,bs=1e3,ji=1001,Ho=1002,Fe=1003,Zd=1004;var xr=1005;var we=1006,Za=1007;var On=1008;var Ki=1009,eu=1010,iu=1011,tr=1012,Jl=1013,kn=1014,gi=1015,Ti=1016,Kl=1017,Ql=1018,Ss=1020,nu=35902,su=1021,ru=1022,ze=1023,au=1024,ou=1025,ms=1026,ws=1027,lu=1028,tc=1029,cu=1030,ec=1031;var ic=1033,Gr=33776,Wr=33777,qr=33778,Xr=33779,zo=35840,Vo=35841,Go=35842,Wo=35843,qo=36196,Xo=37492,$o=37496,Yo=37808,jo=37809,Zo=37810,Jo=37811,Ko=37812,Qo=37813,tl=37814,el=37815,il=37816,nl=37817,sl=37818,rl=37819,al=37820,ol=37821,$r=36492,ll=36494,cl=36495,hu=36283,hl=36284,ul=36285,dl=36286;var Yr=2300,fl=2301,Ja=2302,Zc=2400,Jc=2401,Kc=2402;var Jd=3200,Kd=3201;var uu=0,Qd=1,mn="",Ke="srgb",bn="srgb-linear",xa="linear",he="srgb";var Qn=7680;var Qc=519,tf=512,ef=513,nf=514,du=515,sf=516,rf=517,af=518,of=519,th=35044,or=35048;var eh="300 es",Zi=2e3,jr=2001,xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ka=Math.PI/180,pl=180/Math.PI;function lr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function He(s,t,e){return Math.max(t,Math.min(e,s))}function lf(s,t){return(s%t+t)%t}function Qa(s,t,e){return(1-e)*s+e*t}function Ws(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function si(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var xt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class s{constructor(t,e,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],v=n[0],g=n[3],m=n[6],_=n[1],y=n[4],x=n[7],R=n[2],E=n[5],A=n[8];return r[0]=a*v+o*_+l*R,r[3]=a*g+o*y+l*E,r[6]=a*m+o*x+l*A,r[1]=c*v+h*_+u*R,r[4]=c*g+h*y+u*E,r[7]=c*m+h*x+u*A,r[2]=d*v+p*_+f*R,r[5]=d*g+p*y+f*E,r[8]=d*m+p*x+f*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,f=e*u+i*d+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return t[0]=u*v,t[1]=(n*c-h*i)*v,t[2]=(o*i-n*a)*v,t[3]=d*v,t[4]=(h*e-n*l)*v,t[5]=(n*r-o*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(to.makeScale(t,e)),this}rotate(t){return this.premultiply(to.makeRotation(-t)),this}translate(t,e){return this.premultiply(to.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},to=new Bt;function fu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cf(){let s=Zr("canvas");return s.style.display="block",s}var ih={};function js(s){s in ih||(ih[s]=!0,console.warn(s))}function hf(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function uf(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function df(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mn?xa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var nh=[.64,.33,.3,.6,.15,.06],sh=[.2126,.7152,.0722],rh=[.3127,.329],ah=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oh=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[bn]:{primaries:nh,whitePoint:rh,transfer:xa,toXYZ:ah,fromXYZ:oh,luminanceCoefficients:sh,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:nh,whitePoint:rh,transfer:he,toXYZ:ah,fromXYZ:oh,luminanceCoefficients:sh,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});var ts,ml=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=Zr("canvas")),ts.width=t.width,ts.height=t.height;let i=ts.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Zr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ji(e[i]/255)*255):e[i]=Ji(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ff=0,Jr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=lr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(eo(n[a].image)):r.push(eo(n[a]))}else r=eo(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function eo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ml.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pf=0,ri=class s extends xn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=ji,n=ji,r=we,a=On,o=ze,l=Ki,c=s.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=lr(),this.name="",this.source=new Jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bs:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bs:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=tu;ri.DEFAULT_ANISOTROPY=1;var Jt=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(p+1)/2,R=(m+1)/2,E=(h+d)/4,A=(u+v)/4,P=(f+g)/4;return y>x&&y>R?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=E/i,r=A/i):x>R?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=E/n,r=P/n):R<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(R),i=A/r,n=P/r),this.set(i,n,r,e),this}let _=Math.sqrt((g-f)*(g-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-f)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gl=class extends xn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ri(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Jr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends gl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Kr=class extends ri{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends ri{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ie=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],p=r[a+1],f=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=f,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==f){let g=1-o,m=l*d+c*p+h*f+u*v,_=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let R=Math.sqrt(y),E=Math.atan2(R,m*_);g=Math.sin(g*E)/R,o=Math.sin(o*E)/R}let x=o*_;if(l=l*g+d*x,c=c*g+p*x,h=h*g+f*x,u=u*g+v*x,g===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],p=r[a+2],f=r[a+3];return t[e]=o*f+h*u+l*p-c*d,t[e+1]=l*f+h*d+c*u-o*p,t[e+2]=c*f+h*p+o*d-l*u,t[e+3]=h*f-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),p=l(n/2),f=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new C,lh=new Ie,Bn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bi):bi.fromBufferAttribute(r,a),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yr.copy(i.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),_r.subVectors(this.max,qs),es.subVectors(t.a,qs),is.subVectors(t.b,qs),ns.subVectors(t.c,qs),cn.subVectors(is,es),hn.subVectors(ns,is),Rn.subVectors(es,ns);let e=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-Rn.z,Rn.y,cn.z,0,-cn.x,hn.z,0,-hn.x,Rn.z,0,-Rn.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-Rn.y,Rn.x,0];return!no(e,es,is,ns,_r)||(e=[1,0,0,0,1,0,0,0,1],!no(e,es,is,ns,_r))?!1:(Mr.crossVectors(cn,hn),e=[Mr.x,Mr.y,Mr.z],no(e,es,is,ns,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},zi=[new C,new C,new C,new C,new C,new C,new C,new C],bi=new C,yr=new Bn,es=new C,is=new C,ns=new C,cn=new C,hn=new C,Rn=new C,qs=new C,_r=new C,Mr=new C,Cn=new C;function no(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Cn.fromArray(s,r);let o=n.x*Math.abs(Cn.x)+n.y*Math.abs(Cn.y)+n.z*Math.abs(Cn.z),l=t.dot(Cn),c=e.dot(Cn),h=i.dot(Cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var mf=new Bn,Xs=new C,so=new C,yn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):mf.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Xs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(so)),this.expandByPoint(Xs.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vi=new C,ro=new C,br=new C,un=new C,ao=new C,Sr=new C,oo=new C,Qr=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vi.copy(this.origin).addScaledVector(this.direction,e),Vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){ro.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),un.copy(this.origin).sub(ro);let r=t.distanceTo(e)*.5,a=-this.direction.dot(br),o=un.dot(this.direction),l=-un.dot(br),c=un.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=r*h,u>=0)if(d>=-f)if(d<=f){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ro).addScaledVector(br,d),p}intersectSphere(t,e){Vi.subVectors(t.center,this.origin);let i=Vi.dot(this.direction),n=Vi.dot(Vi)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Vi)!==null}intersectTriangle(t,e,i,n,r){ao.subVectors(e,t),Sr.subVectors(i,t),oo.crossVectors(ao,Sr);let a=this.direction.dot(oo),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,t);let l=o*this.direction.dot(Sr.crossVectors(un,Sr));if(l<0)return null;let c=o*this.direction.dot(ao.cross(un));if(c<0||l+c>a)return null;let h=-o*un.dot(oo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class s{constructor(t,e,i,n,r,a,o,l,c,h,u,d,p,f,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,d,p,f,v,g)}set(t,e,i,n,r,a,o,l,c,h,u,d,p,f,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=f,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,f=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+f*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=f+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,f=c*h,v=c*u;e[0]=d+v*o,e[4]=f*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-f,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,f=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=f+p*o,e[1]=p+f*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,f=o*h,v=o*u;e[0]=l*h,e[4]=f*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-f,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,f=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=f*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+f,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*l,p=a*c,f=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=p*u-f,e[2]=f*u-p,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gf,t,vf)}lookAt(t,e,i){let n=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),dn.crossVectors(i,li),dn.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),dn.crossVectors(i,li)),dn.normalize(),wr.crossVectors(li,dn),n[0]=dn.x,n[4]=wr.x,n[8]=li.x,n[1]=dn.y,n[5]=wr.y,n[9]=li.y,n[2]=dn.z,n[6]=wr.z,n[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],v=i[6],g=i[10],m=i[14],_=i[3],y=i[7],x=i[11],R=i[15],E=n[0],A=n[4],P=n[8],w=n[12],M=n[1],I=n[5],D=n[9],k=n[13],H=n[2],q=n[6],V=n[10],nt=n[14],z=n[3],rt=n[7],ct=n[11],$=n[15];return r[0]=a*E+o*M+l*H+c*z,r[4]=a*A+o*I+l*q+c*rt,r[8]=a*P+o*D+l*V+c*ct,r[12]=a*w+o*k+l*nt+c*$,r[1]=h*E+u*M+d*H+p*z,r[5]=h*A+u*I+d*q+p*rt,r[9]=h*P+u*D+d*V+p*ct,r[13]=h*w+u*k+d*nt+p*$,r[2]=f*E+v*M+g*H+m*z,r[6]=f*A+v*I+g*q+m*rt,r[10]=f*P+v*D+g*V+m*ct,r[14]=f*w+v*k+g*nt+m*$,r[3]=_*E+y*M+x*H+R*z,r[7]=_*A+y*I+x*q+R*rt,r[11]=_*P+y*D+x*V+R*ct,r[15]=_*w+y*k+x*nt+R*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],f=t[3],v=t[7],g=t[11],m=t[15];return f*(+r*l*u-n*c*u-r*o*d+i*c*d+n*o*p-i*l*p)+v*(+e*l*p-e*c*d+r*a*d-n*a*p+n*c*h-r*l*h)+g*(+e*c*u-e*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+m*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],f=t[12],v=t[13],g=t[14],m=t[15],_=u*g*c-v*d*c+v*l*p-o*g*p-u*l*m+o*d*m,y=f*d*c-h*g*c-f*l*p+a*g*p+h*l*m-a*d*m,x=h*v*c-f*u*c+f*o*p-a*v*p-h*o*m+a*u*m,R=f*u*l-h*v*l-f*o*d+a*v*d+h*o*g-a*u*g,E=e*_+i*y+n*x+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=_*A,t[1]=(v*d*r-u*g*r-v*n*p+i*g*p+u*n*m-i*d*m)*A,t[2]=(o*g*r-v*l*r+v*n*c-i*g*c-o*n*m+i*l*m)*A,t[3]=(u*l*r-o*d*r-u*n*c+i*d*c+o*n*p-i*l*p)*A,t[4]=y*A,t[5]=(h*g*r-f*d*r+f*n*p-e*g*p-h*n*m+e*d*m)*A,t[6]=(f*l*r-a*g*r-f*n*c+e*g*c+a*n*m-e*l*m)*A,t[7]=(a*d*r-h*l*r+h*n*c-e*d*c-a*n*p+e*l*p)*A,t[8]=x*A,t[9]=(f*u*r-h*v*r-f*i*p+e*v*p+h*i*m-e*u*m)*A,t[10]=(a*v*r-f*o*r+f*i*c-e*v*c-a*i*m+e*o*m)*A,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*p-e*o*p)*A,t[12]=R*A,t[13]=(h*v*n-f*u*n+f*i*d-e*v*d-h*i*g+e*u*g)*A,t[14]=(f*o*n-a*v*n-f*i*l+e*v*l+a*i*g-e*o*g)*A,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*A,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,f=r*u,v=a*h,g=a*u,m=o*u,_=l*c,y=l*h,x=l*u,R=i.x,E=i.y,A=i.z;return n[0]=(1-(v+m))*R,n[1]=(p+x)*R,n[2]=(f-y)*R,n[3]=0,n[4]=(p-x)*E,n[5]=(1-(d+m))*E,n[6]=(g+_)*E,n[7]=0,n[8]=(f+y)*A,n[9]=(g-_)*A,n[10]=(1-(d+v))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=ss.set(n[0],n[1],n[2]).length(),a=ss.set(n[4],n[5],n[6]).length(),o=ss.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Si.copy(this);let c=1/r,h=1/a,u=1/o;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=h,Si.elements[5]*=h,Si.elements[6]*=h,Si.elements[8]*=u,Si.elements[9]*=u,Si.elements[10]*=u,e.setFromRotationMatrix(Si),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=Zi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),p,f;if(o===Zi)p=-(a+r)/(a-r),f=-2*a*r/(a-r);else if(o===jr)p=-a/(a-r),f=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Zi){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-r),d=(e+t)*c,p=(i+n)*h,f,v;if(o===Zi)f=(a+r)*u,v=-2*u;else if(o===jr)f=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ss=new C,Si=new ie,gf=new C(0,0,0),vf=new C(1,1,1),dn=new C,wr=new C,li=new C,ch=new ie,hh=new Ie,Li=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ch,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hh.setFromEuler(this),this.setFromQuaternion(hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var ta=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xf=0,uh=new C,rs=new Ie,Gi=new ie,Er=new C,$s=new C,yf=new C,_f=new Ie,dh=new C(1,0,0),fh=new C(0,1,0),ph=new C(0,0,1),mh={type:"added"},Mf={type:"removed"},as={type:"childadded",child:null},lo={type:"childremoved",child:null},ei=class s extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new Li,i=new Ie,n=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ie},normalMatrix:{value:new Bt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(dh,t)}rotateY(t){return this.rotateOnAxis(fh,t)}rotateZ(t){return this.rotateOnAxis(ph,t)}translateOnAxis(t,e){return uh.copy(t).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dh,t)}translateY(t){return this.translateOnAxis(fh,t)}translateZ(t){return this.translateOnAxis(ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Er.copy(t):Er.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt($s,Er,this.up):Gi.lookAt(Er,$s,this.up),this.quaternion.setFromRotationMatrix(Gi),n&&(Gi.extractRotation(n.matrixWorld),rs.setFromRotationMatrix(Gi),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mh),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mf),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mh),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,_f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),f=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};ei.DEFAULT_UP=new C(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=new C,Wi=new C,co=new C,qi=new C,os=new C,ls=new C,gh=new C,ho=new C,uo=new C,fo=new C,po=new Jt,mo=new Jt,go=new Jt,Un=class s{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),wi.subVectors(t,e),n.cross(wi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){wi.subVectors(n,e),Wi.subVectors(i,e),co.subVectors(t,e);let a=wi.dot(wi),o=wi.dot(Wi),l=wi.dot(co),c=Wi.dot(Wi),h=Wi.dot(co),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qi.x),l.addScaledVector(a,qi.y),l.addScaledVector(o,qi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return po.setScalar(0),mo.setScalar(0),go.setScalar(0),po.fromBufferAttribute(t,e),mo.fromBufferAttribute(t,i),go.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(po,r.x),a.addScaledVector(mo,r.y),a.addScaledVector(go,r.z),a}static isFrontFacing(t,e,i,n){return wi.subVectors(i,e),Wi.subVectors(t,e),wi.cross(Wi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),wi.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;os.subVectors(n,i),ls.subVectors(r,i),ho.subVectors(t,i);let l=os.dot(ho),c=ls.dot(ho);if(l<=0&&c<=0)return e.copy(i);uo.subVectors(t,n);let h=os.dot(uo),u=ls.dot(uo);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(os,a);fo.subVectors(t,r);let p=os.dot(fo),f=ls.dot(fo);if(f>=0&&p<=f)return e.copy(r);let v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return o=c/(c-f),e.copy(i).addScaledVector(ls,o);let g=h*f-p*u;if(g<=0&&u-h>=0&&p-f>=0)return gh.subVectors(r,n),o=(u-h)/(u-h+(p-f)),e.copy(n).addScaledVector(gh,o);let m=1/(g+v+d);return a=v*m,o=d*m,e.copy(i).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function vo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ht=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=lf(t,1),e=He(e,0,1),i=He(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=vo(a,r,t+1/3),this.g=vo(a,r,t),this.b=vo(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=Ke){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let i=pu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Qt.fromWorkingColorSpace($e.copy(this),t),Math.round(He($e.r*255,0,255))*65536+Math.round(He($e.g*255,0,255))*256+Math.round(He($e.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace($e.copy(this),e);let i=$e.r,n=$e.g,r=$e.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ke){Qt.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,i=$e.g,n=$e.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(fn),this.setHSL(fn.h+t,fn.s+e,fn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(fn),t.getHSL(Tr);let i=Qa(fn.h,Tr.h,e),n=Qa(fn.s,Tr.s,e),r=Qa(fn.l,Tr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new Ht;Ht.NAMES=pu;var bf=0,_n=class extends xn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=lr(),this.name="",this.blending=ps,this.side=Ye,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xs,this.blendDst=vn,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==Ye&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xs&&(i.blendSrc=this.blendSrc),this.blendDst!==vn&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},hi=class extends _n{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new C,Ar=new xt,le=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=th,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=si(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=si(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=si(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=si(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=si(e,this.array),i=si(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=si(e,this.array),i=si(i,this.array),n=si(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=si(e,this.array),i=si(i,this.array),n=si(n,this.array),r=si(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==th&&(t.usage=this.usage),t}};var ea=class extends le{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ia=class extends le{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var re=class extends le{constructor(t,e,i){super(new Float32Array(t),e,i)}},Sf=0,mi=new ie,xo=new ei,cs=new C,ci=new Bn,Ys=new Bn,Ue=new C,me=class s extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fu(t)?ia:ea)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,e,i){return mi.makeTranslation(t,e,i),this.applyMatrix4(mi),this}scale(t,e,i){return mi.makeScale(t,e,i),this.applyMatrix4(mi),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(i,3))}else{for(let i=0,n=e.count;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(ci.min,Ys.min),ci.expandByPoint(Ue),Ue.addVectors(ci.max,Ys.max),ci.expandByPoint(Ue)):(ci.expandByPoint(Ys.min),ci.expandByPoint(Ys.max))}ci.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ue.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(t,c),Ue.add(cs)),n=Math.max(n,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new C,l[P]=new C;let c=new C,h=new C,u=new C,d=new xt,p=new xt,f=new xt,v=new C,g=new C;function m(P,w,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,w),f.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let I=1/(p.x*f.y-f.x*p.y);isFinite(I)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(I),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(I),o[P].add(v),o[w].add(v),o[M].add(v),l[P].add(g),l[w].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let P=0,w=_.length;P<w;++P){let M=_[P],I=M.start,D=M.count;for(let k=I,H=I+D;k<H;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let y=new C,x=new C,R=new C,E=new C;function A(P){R.fromBufferAttribute(n,P),E.copy(R);let w=o[P];y.copy(w),y.sub(R.multiplyScalar(R.dot(w))).normalize(),x.crossVectors(E,w);let I=x.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,w=_.length;P<w;++P){let M=_[P],I=M.start,D=M.count;for(let k=I,H=I+D;k<H;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){let f=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,f),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let m=0;m<h;m++)d[f++]=c[p++]}return new le(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vh=new ie,In=new Qr,Rr=new yn,xh=new C,Cr=new C,Ir=new C,Pr=new C,yo=new C,Lr=new C,yh=new C,Dr=new C,yt=class extends ei{constructor(t=new me,e=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(yo.fromBufferAttribute(u,t),a?Lr.addScaledVector(yo,h):Lr.addScaledVector(yo.sub(e),h))}e.add(Lr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(r),In.copy(t.ray).recast(t.near),!(Rr.containsPoint(In.origin)===!1&&(In.intersectSphere(Rr,xh)===null||In.origin.distanceToSquared(xh)>(t.far-t.near)**2))&&(vh.copy(r).invert(),In.copy(t.ray).applyMatrix4(vh),!(i.boundingBox!==null&&In.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,In)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let g=d[f],m=a[g.materialIndex],_=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=_,R=y;x<R;x+=3){let E=o.getX(x),A=o.getX(x+1),P=o.getX(x+2);n=Nr(this,m,t,i,c,h,u,E,A,P),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=f,m=v;g<m;g+=3){let _=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);n=Nr(this,a,t,i,c,h,u,_,y,x),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let g=d[f],m=a[g.materialIndex],_=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=_,R=y;x<R;x+=3){let E=x,A=x+1,P=x+2;n=Nr(this,m,t,i,c,h,u,E,A,P),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=f,m=v;g<m;g+=3){let _=g,y=g+1,x=g+2;n=Nr(this,a,t,i,c,h,u,_,y,x),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function wf(s,t,e,i,n,r,a,o){let l;if(t.side===be?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Ye,o),l===null)return null;Dr.copy(o),Dr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:s}}function Nr(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Cr),s.getVertexPosition(l,Ir),s.getVertexPosition(c,Pr);let h=wf(s,t,e,i,Cr,Ir,Pr,yh);if(h){let u=new C;Un.getBarycoord(yh,Cr,Ir,Pr,u),n&&(h.uv=Un.getInterpolatedAttribute(n,o,l,c,u,new xt)),r&&(h.uv1=Un.getInterpolatedAttribute(r,o,l,c,u,new xt)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};Un.getNormal(Cr,Ir,Pr,d.normal),h.face=d,h.barycoord=u}return h}var Oe=class s extends me{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;f("z","y","x",-1,-1,i,e,t,a,r,0),f("z","y","x",1,-1,i,e,-t,a,r,1),f("x","z","y",1,1,t,i,e,n,a,2),f("x","z","y",1,-1,t,i,-e,n,a,3),f("x","y","z",1,-1,t,e,i,n,r,4),f("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function f(v,g,m,_,y,x,R,E,A,P,w){let M=x/A,I=R/P,D=x/2,k=R/2,H=E/2,q=A+1,V=P+1,nt=0,z=0,rt=new C;for(let ct=0;ct<V;ct++){let $=ct*I-k;for(let tt=0;tt<q;tt++){let st=tt*M-D;rt[v]=st*_,rt[g]=$*y,rt[m]=H,c.push(rt.x,rt.y,rt.z),rt[v]=0,rt[g]=0,rt[m]=E>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(tt/A),u.push(1-ct/P),nt+=1}}for(let ct=0;ct<P;ct++)for(let $=0;$<A;$++){let tt=d+$+q*ct,st=d+$+q*(ct+1),B=d+($+1)+q*(ct+1),Q=d+($+1)+q*ct;l.push(tt,st,Q),l.push(st,B,Q),z+=6}o.addGroup(p,z,w),p+=z,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Es(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Je(s){let t={};for(let e=0;e<s.length;e++){let i=Es(s[e]);for(let n in i)t[n]=i[n]}return t}function Ef(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function mu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Tf={clone:Es,merge:Je},Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yt=class extends _n{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},na=class extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pn=new C,_h=new xt,Mh=new xt,Qe=class extends na{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pl*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,_h,Mh),e.subVectors(Mh,_h)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ka*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},hs=-90,us=1,er=class extends ei{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Qe(hs,us,t,e);n.layers=this.layers,this.add(n);let r=new Qe(hs,us,t,e);r.layers=this.layers,this.add(r);let a=new Qe(hs,us,t,e);a.layers=this.layers,this.add(a);let o=new Qe(hs,us,t,e);o.layers=this.layers,this.add(o);let l=new Qe(hs,us,t,e);l.layers=this.layers,this.add(l);let c=new Qe(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},sa=class extends ri{constructor(t,e,i,n,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ir=class extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new sa(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:we}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Oe(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:be,blending:gn});r.uniforms.tEquirect.value=e;let a=new yt(n,r),o=e.minFilter;return e.minFilter===On&&(e.minFilter=we),new er(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},_o=new C,Cf=new C,If=new Bt,$i=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=_o.subVectors(i,e).cross(Cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(_o),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||If.getNormalMatrix(t),n=this.coplanarPoint(_o).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pn=new yn,Ur=new C,Hn=class{constructor(t=new $i,e=new $i,i=new $i,n=new $i,r=new $i,a=new $i){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Zi){let i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],f=n[9],v=n[10],g=n[11],m=n[12],_=n[13],y=n[14],x=n[15];if(i[0].setComponents(l-r,d-c,g-p,x-m).normalize(),i[1].setComponents(l+r,d+c,g+p,x+m).normalize(),i[2].setComponents(l+a,d+h,g+f,x+_).normalize(),i[3].setComponents(l-a,d-h,g-f,x-_).normalize(),i[4].setComponents(l-o,d-u,g-v,x-y).normalize(),e===Zi)i[5].setComponents(l+o,d+u,g+v,x+y).normalize();else if(e===jr)i[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Ur.x=n.normal.x>0?t.max.x:t.min.x,Ur.y=n.normal.y>0?t.max.y:t.min.y,Ur.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gu(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Pf(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<u.length;p++){let f=u[d],v=u[p];v.start<=f.start+f.count+1?f.count=Math.max(f.count,v.start+v.count-f.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,f=u.length;p<f;p++){let v=u[p];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Ts=class s extends me{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,p=[],f=[],v=[],g=[];for(let m=0;m<h;m++){let _=m*d-a;for(let y=0;y<c;y++){let x=y*u-r;f.push(x,-_,0),v.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let y=_+c*m,x=_+c*(m+1),R=_+1+c*(m+1),E=_+1+c*m;p.push(y,x,E),p.push(x,R,E)}this.setIndex(p),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Df=`#ifdef USE_ALPHAHASH
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
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
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
#endif`,Bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf=`#ifdef USE_BATCHING
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
#endif`,zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qf=`#ifdef USE_IRIDESCENCE
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
#endif`,Xf=`#ifdef USE_BUMPMAP
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ep=`#define PI 3.141592653589793
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
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,np=`vec3 transformedNormal = objectNormal;
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
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
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
}`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
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
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
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
#endif`,Ip=`struct PhysicalMaterial {
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
}`,Pp=`
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zp=`#if defined( USE_POINTS_UV )
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
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
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
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
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
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gm=`float getShadowMask() {
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
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,Mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
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
}`,km=`#if DEPTH_PACKING == 3200
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
}`,Bm=`#define DISTANCE
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
}`,Hm=`#define DISTANCE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Xm=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
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
}`,Ym=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,Zm=`#define MATCAP
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
}`,Jm=`#define NORMAL
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
}`,Km=`#define NORMAL
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
}`,Qm=`#define PHONG
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
}`,t0=`#define PHONG
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
}`,e0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,s0=`#define TOON
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
}`,r0=`uniform float size;
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,l0=`uniform vec3 color;
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
}`,c0=`uniform float rotation;
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
}`,h0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Lf,alphahash_pars_fragment:Df,alphamap_fragment:Nf,alphamap_pars_fragment:Uf,alphatest_fragment:Ff,alphatest_pars_fragment:Of,aomap_fragment:kf,aomap_pars_fragment:Bf,batching_pars_vertex:Hf,batching_vertex:zf,begin_vertex:Vf,beginnormal_vertex:Gf,bsdfs:Wf,iridescence_fragment:qf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:Yf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:Zf,color_fragment:Jf,color_pars_fragment:Kf,color_pars_vertex:Qf,color_vertex:tp,common:ep,cube_uv_reflection_fragment:ip,defaultnormal_vertex:np,displacementmap_pars_vertex:sp,displacementmap_vertex:rp,emissivemap_fragment:ap,emissivemap_pars_fragment:op,colorspace_fragment:lp,colorspace_pars_fragment:cp,envmap_fragment:hp,envmap_common_pars_fragment:up,envmap_pars_fragment:dp,envmap_pars_vertex:fp,envmap_physical_pars_fragment:wp,envmap_vertex:pp,fog_vertex:mp,fog_pars_vertex:gp,fog_fragment:vp,fog_pars_fragment:xp,gradientmap_pars_fragment:yp,lightmap_pars_fragment:_p,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:bp,lights_pars_begin:Sp,lights_toon_fragment:Ep,lights_toon_pars_fragment:Tp,lights_phong_fragment:Ap,lights_phong_pars_fragment:Rp,lights_physical_fragment:Cp,lights_physical_pars_fragment:Ip,lights_fragment_begin:Pp,lights_fragment_maps:Lp,lights_fragment_end:Dp,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Fp,logdepthbuf_vertex:Op,map_fragment:kp,map_pars_fragment:Bp,map_particle_fragment:Hp,map_particle_pars_fragment:zp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Wp,morphcolor_vertex:qp,morphnormal_vertex:Xp,morphtarget_pars_vertex:$p,morphtarget_vertex:Yp,normal_fragment_begin:jp,normal_fragment_maps:Zp,normal_pars_fragment:Jp,normal_pars_vertex:Kp,normal_vertex:Qp,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:nm,iridescence_pars_fragment:sm,opaque_fragment:rm,packing:am,premultiplied_alpha_fragment:om,project_vertex:lm,dithering_fragment:cm,dithering_pars_fragment:hm,roughnessmap_fragment:um,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:pm,shadowmap_vertex:mm,shadowmask_pars_fragment:gm,skinbase_vertex:vm,skinning_pars_vertex:xm,skinning_vertex:ym,skinnormal_vertex:_m,specularmap_fragment:Mm,specularmap_pars_fragment:bm,tonemapping_fragment:Sm,tonemapping_pars_fragment:wm,transmission_fragment:Em,transmission_pars_fragment:Tm,uv_pars_fragment:Am,uv_pars_vertex:Rm,uv_vertex:Cm,worldpos_vertex:Im,background_vert:Pm,background_frag:Lm,backgroundCube_vert:Dm,backgroundCube_frag:Nm,cube_vert:Um,cube_frag:Fm,depth_vert:Om,depth_frag:km,distanceRGBA_vert:Bm,distanceRGBA_frag:Hm,equirect_vert:zm,equirect_frag:Vm,linedashed_vert:Gm,linedashed_frag:Wm,meshbasic_vert:qm,meshbasic_frag:Xm,meshlambert_vert:$m,meshlambert_frag:Ym,meshmatcap_vert:jm,meshmatcap_frag:Zm,meshnormal_vert:Jm,meshnormal_frag:Km,meshphong_vert:Qm,meshphong_frag:t0,meshphysical_vert:e0,meshphysical_frag:i0,meshtoon_vert:n0,meshtoon_frag:s0,points_vert:r0,points_frag:a0,shadow_vert:o0,shadow_frag:l0,sprite_vert:c0,sprite_frag:h0},vt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ii={basic:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Je([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Je([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Je([vt.points,vt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Je([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Je([vt.common,vt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Je([vt.sprite,vt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Je([vt.common,vt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Je([vt.lights,vt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Ii.physical={uniforms:Je([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Fr={r:0,b:0,g:0},Ln=new Li,u0=new ie;function d0(s,t,e,i,n,r,a){let o=new Ht(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function f(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function v(_){let y=!1,x=f(_);x===null?m(o,l):x&&x.isColor&&(m(x,1),y=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,y){let x=f(y);x&&(x.isCubeTexture||x.mapping===va)?(h===void 0&&(h=new yt(new Oe(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Es(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Ln.copy(y.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(u0.makeRotationFromEuler(Ln)),h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==he,(u!==x||d!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new yt(new Ts(2,2),new Yt({name:"BackgroundMaterial",uniforms:Es(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,y){_.getRGB(Fr,mu(s)),i.buffers.color.setClear(Fr.r,Fr.g,Fr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(o,l)},render:v,addToRenderList:g}}function f0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(M,I,D,k,H){let q=!1,V=u(k,D,I);r!==V&&(r=V,c(r.object)),q=p(M,k,D,H),q&&f(M,k,D,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(M,I,D,k),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,I,D){let k=D.wireframe===!0,H=i[M.id];H===void 0&&(H={},i[M.id]=H);let q=H[I.id];q===void 0&&(q={},H[I.id]=q);let V=q[k];return V===void 0&&(V=d(l()),q[k]=V),V}function d(M){let I=[],D=[],k=[];for(let H=0;H<e;H++)I[H]=0,D[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,I,D,k){let H=r.attributes,q=I.attributes,V=0,nt=D.getAttributes();for(let z in nt)if(nt[z].location>=0){let ct=H[z],$=q[z];if($===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),ct===void 0||ct.attribute!==$||$&&ct.data!==$.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function f(M,I,D,k){let H={},q=I.attributes,V=0,nt=D.getAttributes();for(let z in nt)if(nt[z].location>=0){let ct=q[z];ct===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));let $={};$.attribute=ct,ct&&ct.data&&($.data=ct.data),H[z]=$,V++}r.attributes=H,r.attributesNum=V,r.index=k}function v(){let M=r.newAttributes;for(let I=0,D=M.length;I<D;I++)M[I]=0}function g(M){m(M,0)}function m(M,I){let D=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;D[M]=1,k[M]===0&&(s.enableVertexAttribArray(M),k[M]=1),H[M]!==I&&(s.vertexAttribDivisor(M,I),H[M]=I)}function _(){let M=r.newAttributes,I=r.enabledAttributes;for(let D=0,k=I.length;D<k;D++)I[D]!==M[D]&&(s.disableVertexAttribArray(D),I[D]=0)}function y(M,I,D,k,H,q,V){V===!0?s.vertexAttribIPointer(M,I,D,H,q):s.vertexAttribPointer(M,I,D,k,H,q)}function x(M,I,D,k){v();let H=k.attributes,q=D.getAttributes(),V=I.defaultAttributeValues;for(let nt in q){let z=q[nt];if(z.location>=0){let rt=H[nt];if(rt===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){let ct=rt.normalized,$=rt.itemSize,tt=t.get(rt);if(tt===void 0)continue;let st=tt.buffer,B=tt.type,Q=tt.bytesPerElement,lt=B===s.INT||B===s.UNSIGNED_INT||rt.gpuType===Jl;if(rt.isInterleavedBufferAttribute){let it=rt.data,dt=it.stride,ot=rt.offset;if(it.isInstancedInterleavedBuffer){for(let ut=0;ut<z.locationSize;ut++)m(z.location+ut,it.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ut=0;ut<z.locationSize;ut++)g(z.location+ut);s.bindBuffer(s.ARRAY_BUFFER,st);for(let ut=0;ut<z.locationSize;ut++)y(z.location+ut,$/z.locationSize,B,ct,dt*Q,(ot+$/z.locationSize*ut)*Q,lt)}else{if(rt.isInstancedBufferAttribute){for(let it=0;it<z.locationSize;it++)m(z.location+it,rt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let it=0;it<z.locationSize;it++)g(z.location+it);s.bindBuffer(s.ARRAY_BUFFER,st);for(let it=0;it<z.locationSize;it++)y(z.location+it,$/z.locationSize,B,ct,$*Q,$/z.locationSize*it*Q,lt)}}else if(V!==void 0){let ct=V[nt];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(z.location,ct);break;case 3:s.vertexAttrib3fv(z.location,ct);break;case 4:s.vertexAttrib4fv(z.location,ct);break;default:s.vertexAttrib1fv(z.location,ct)}}}}_()}function R(){P();for(let M in i){let I=i[M];for(let D in I){let k=I[D];for(let H in k)h(k[H].object),delete k[H];delete I[D]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;let I=i[M.id];for(let D in I){let k=I[D];for(let H in k)h(k[H].object),delete k[H];delete I[D]}delete i[M.id]}function A(M){for(let I in i){let D=i[I];if(D[M.id]===void 0)continue;let k=D[M.id];for(let H in k)h(k[H].object),delete k[H];delete D[M.id]}}function P(){w(),a=!0,r!==n&&(r=n,c(r.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function p0(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let f=0;f<u;f++)p+=h[f];e.update(p,i,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<c.length;f++)a(c[f],h[f],d[f]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let f=0;for(let v=0;v<u;v++)f+=h[v]*d[v];e.update(f,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function m0(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==ze&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let P=A===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ki&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gi&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=f>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:E}}function g0(s){let t=this,e=null,i=0,n=!1,r=!1,a=new $i,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let f=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!n||f===null||f.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,y=_*4,x=m.clippingState||null;l.value=x,x=h(f,d,y,p);for(let R=0;R!==y;++R)x[R]=e[R];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,f){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,f!==!0||g===null){let m=p+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=p;y!==v;++y,x+=4)a.copy(u[y]).applyMatrix4(_,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function v0(s){let t=new WeakMap;function e(a,o){return o===ko?a.mapping=_s:o===Bo&&(a.mapping=Ms),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===ko||o===Bo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ir(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var As=class extends na{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fs=4,bh=[.125,.215,.35,.446,.526,.582],Fn=20,Mo=new As,Sh=new Ht,bo=null,So=0,wo=0,Eo=!1,Nn=(1+Math.sqrt(5))/2,ds=1/Nn,wh=[new C(-Nn,ds,0),new C(Nn,ds,0),new C(-ds,0,Nn),new C(ds,0,Nn),new C(0,Nn,-ds),new C(0,Nn,ds),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Rs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){bo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bo,So,wo),this._renderer.xr.enabled=Eo,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),Eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:we,minFilter:we,generateMipmaps:!1,type:Ti,format:ze,colorSpace:bn,depthBuffer:!1},n=Eh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x0(r)),this._blurMaterial=y0(r,t,e)}return n}_compileMaterial(t){let e=new yt(this._lodPlanes[0],t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,i,n){let o=new Qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Sh),h.toneMapping=Pi,h.autoClear=!1;let p=new hi({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),f=new yt(new Oe,p),v=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,v=!0):(p.color.copy(Sh),v=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):_===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let y=this._cubeSize;Or(n,_*y,m>2?y:0,y,y),h.setRenderTarget(n),v&&h.render(f,o),h.render(t,o)}f.geometry.dispose(),f.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===_s||t.mapping===Ms;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Or(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Mo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wh[(n-r-1)%wh.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new yt(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,f=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fn-1),v=r/f,g=isFinite(r)?1+Math.floor(h*v):Fn;g>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fn}`);let m=[],_=0;for(let A=0;A<Fn;++A){let P=A/v,w=Math.exp(-P*P/2);m.push(w),A===0?_+=w:A<g&&(_+=2*w)}for(let A=0;A<m.length;A++)m[A]=m[A]/_;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=f,d.mipInt.value=y-i;let x=this._sizeLods[n],R=3*x*(n>y-fs?n-y+fs:0),E=4*(this._cubeSize-x);Or(e,R,E,3*x,2*x),l.setRenderTarget(e),l.render(u,Mo)}};function x0(s){let t=[],e=[],i=[],n=s,r=s-fs+1+bh.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>s-fs?l=bh[a-s+fs-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,f=6,v=3,g=2,m=1,_=new Float32Array(v*f*p),y=new Float32Array(g*f*p),x=new Float32Array(m*f*p);for(let E=0;E<p;E++){let A=E%3*2/3-1,P=E>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];_.set(w,v*f*E),y.set(d,g*f*E);let M=[E,E,E,E,E,E];x.set(M,m*f*E)}let R=new me;R.setAttribute("position",new le(_,v)),R.setAttribute("uv",new le(y,g)),R.setAttribute("faceIndex",new le(x,m)),t.push(R),n>fs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Eh(s,t,e){let i=new ti(s,t,e);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Or(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function y0(s,t,e){let i=new Float32Array(Fn),n=new C(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:nc(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Th(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ah(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function _0(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===ko||l===Bo,h=l===_s||l===Ms;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Rs(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&n(p)?(e===null&&(e=new Rs(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function M0(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&js("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function b0(s,t,e,i){let n={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let f in d.attributes)t.remove(d.attributes[f]);for(let f in d.morphAttributes){let v=d.morphAttributes[f];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}d.removeEventListener("dispose",a),delete n[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let f in p){let v=p[f];for(let g=0,m=v.length;g<m;g++)t.update(v[g],s.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,f=u.attributes.position,v=0;if(p!==null){let _=p.array;v=p.version;for(let y=0,x=_.length;y<x;y+=3){let R=_[y+0],E=_[y+1],A=_[y+2];d.push(R,E,E,A,A,R)}}else if(f!==void 0){let _=f.array;v=f.version;for(let y=0,x=_.length/3-1;y<x;y+=3){let R=y+0,E=y+1,A=y+2;d.push(R,E,E,A,A,R)}}else return;let g=new(fu(d)?ia:ea)(d,1);g.version=v;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function S0(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(i,p,r,d*a),e.update(p,i,1)}function c(d,p,f){f!==0&&(s.drawElementsInstanced(i,p,r,d*a,f),e.update(p,i,f))}function h(d,p,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,f);let g=0;for(let m=0;m<f;m++)g+=p[m];e.update(g,i,1)}function u(d,p,f,v){if(f===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,p[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,f);let m=0;for(let _=0;_<f;_++)m+=p[_]*v[_];e.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function w0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function E0(s,t,e){let i=new WeakMap,n=new Jt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let w=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],y=0;p===!0&&(y=1),f===!0&&(y=2),v===!0&&(y=3);let x=o.attributes.position.count*y,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*R*4*u),A=new Kr(E,x,R,u);A.type=gi,A.needsUpdate=!0;let P=y*4;for(let M=0;M<u;M++){let I=g[M],D=m[M],k=_[M],H=x*R*4*M;for(let q=0;q<I.count;q++){let V=q*P;p===!0&&(n.fromBufferAttribute(I,q),E[H+V+0]=n.x,E[H+V+1]=n.y,E[H+V+2]=n.z,E[H+V+3]=0),f===!0&&(n.fromBufferAttribute(D,q),E[H+V+4]=n.x,E[H+V+5]=n.y,E[H+V+6]=n.z,E[H+V+7]=0),v===!0&&(n.fromBufferAttribute(k,q),E[H+V+8]=n.x,E[H+V+9]=n.y,E[H+V+10]=n.z,E[H+V+11]=k.itemSize===4?n.w:1)}}d={count:u,texture:A,size:new xt(x,R)},i.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let f=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",f),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function T0(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ra=class extends ri{constructor(t,e,i,n,r,a,o,l,c,h=ms){if(h!==ms&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ms&&(i=kn),i===void 0&&h===ws&&(i=Ss),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Fe,this.minFilter=l!==void 0?l:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},vu=new ri,Rh=new ra(1,1),xu=new Kr,yu=new vl,_u=new sa,Ch=[],Ih=[],Ph=new Float32Array(16),Lh=new Float32Array(9),Dh=new Float32Array(4);function Ps(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Ch[n];if(r===void 0&&(r=new Float32Array(n),Ch[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Pe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Le(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ya(s,t){let e=Ih[t];e===void 0&&(e=new Int32Array(t),Ih[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function A0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function R0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2fv(this.addr,t),Le(e,t)}}function C0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;s.uniform3fv(this.addr,t),Le(e,t)}}function I0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4fv(this.addr,t),Le(e,t)}}function P0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,i))return;Dh.set(i),s.uniformMatrix2fv(this.addr,!1,Dh),Le(e,i)}}function L0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,i))return;Lh.set(i),s.uniformMatrix3fv(this.addr,!1,Lh),Le(e,i)}}function D0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,i))return;Ph.set(i),s.uniformMatrix4fv(this.addr,!1,Ph),Le(e,i)}}function N0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function U0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2iv(this.addr,t),Le(e,t)}}function F0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3iv(this.addr,t),Le(e,t)}}function O0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4iv(this.addr,t),Le(e,t)}}function k0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function B0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2uiv(this.addr,t),Le(e,t)}}function H0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3uiv(this.addr,t),Le(e,t)}}function z0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4uiv(this.addr,t),Le(e,t)}}function V0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Rh.compareFunction=du,r=Rh):r=vu,e.setTexture2D(t||r,n)}function G0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||yu,n)}function W0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||_u,n)}function q0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||xu,n)}function X0(s){switch(s){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return I0;case 35674:return P0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return N0;case 35667:case 35671:return U0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return k0;case 36294:return B0;case 36295:return H0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return q0}}function $0(s,t){s.uniform1fv(this.addr,t)}function Y0(s,t){let e=Ps(t,this.size,2);s.uniform2fv(this.addr,e)}function j0(s,t){let e=Ps(t,this.size,3);s.uniform3fv(this.addr,e)}function Z0(s,t){let e=Ps(t,this.size,4);s.uniform4fv(this.addr,e)}function J0(s,t){let e=Ps(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function K0(s,t){let e=Ps(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Q0(s,t){let e=Ps(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function tg(s,t){s.uniform1iv(this.addr,t)}function eg(s,t){s.uniform2iv(this.addr,t)}function ig(s,t){s.uniform3iv(this.addr,t)}function ng(s,t){s.uniform4iv(this.addr,t)}function sg(s,t){s.uniform1uiv(this.addr,t)}function rg(s,t){s.uniform2uiv(this.addr,t)}function ag(s,t){s.uniform3uiv(this.addr,t)}function og(s,t){s.uniform4uiv(this.addr,t)}function lg(s,t,e){let i=this.cache,n=t.length,r=ya(e,n);Pe(i,r)||(s.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||vu,r[a])}function cg(s,t,e){let i=this.cache,n=t.length,r=ya(e,n);Pe(i,r)||(s.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||yu,r[a])}function hg(s,t,e){let i=this.cache,n=t.length,r=ya(e,n);Pe(i,r)||(s.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||_u,r[a])}function ug(s,t,e){let i=this.cache,n=t.length,r=ya(e,n);Pe(i,r)||(s.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||xu,r[a])}function dg(s){switch(s){case 5126:return $0;case 35664:return Y0;case 35665:return j0;case 35666:return Z0;case 35674:return J0;case 35675:return K0;case 35676:return Q0;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ig;case 35669:case 35673:return ng;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}var xl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=X0(e.type)}},yl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}},_l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},To=/(\w+)(\])?(\[|\.)?/g;function Nh(s,t){s.seq.push(t),s.map[t.id]=t}function fg(s,t,e){let i=s.name,n=i.length;for(To.lastIndex=0;;){let r=To.exec(i),a=To.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Nh(e,c===void 0?new xl(o,s,t):new yl(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new _l(o),Nh(e,u)),e=u}}}var vs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);fg(r,a,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Uh(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var pg=37297,mg=0;function gg(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Fh=new Bt;function vg(s){Qt._getMatrix(Fh,Qt.workingColorSpace,s);let t=`mat3( ${Fh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case xa:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Oh(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+gg(s.getShaderSource(t),a)}else return n}function xg(s,t){let e=vg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yg(s,t){let e;switch(t){case Gd:e="Linear";break;case Wd:e="Reinhard";break;case qd:e="Cineon";break;case Xd:e="ACESFilmic";break;case Yd:e="AgX";break;case jd:e="Neutral";break;case $d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var kr=new C;function _g(){Qt.getLuminanceCoefficients(kr);let s=kr.x.toFixed(4),t=kr.y.toFixed(4),e=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function bg(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Sg(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Zs(s){return s!==""}function kh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(s){return s.replace(wg,Tg)}var Eg=new Map;function Tg(s,t){let e=$t[t];if(e===void 0){let i=Eg.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ml(e)}var Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(s){return s.replace(Ag,Rg)}function Rg(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function zh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Cg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Xi&&(t="SHADOWMAP_TYPE_VSM"),t}function Ig(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _s:case Ms:t="ENVMAP_TYPE_CUBE";break;case va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ms&&(t="ENVMAP_MODE_REFRACTION"),t}function Lg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qh:t="ENVMAP_BLENDING_MULTIPLY";break;case zd:t="ENVMAP_BLENDING_MIX";break;case Vd:t="ENVMAP_BLENDING_ADD";break}return t}function Dg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ng(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Cg(e),c=Ig(e),h=Pg(e),u=Lg(e),d=Dg(e),p=Mg(e),f=bg(r),v=n.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Zs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Zs).join(`
`),m.length>0&&(m+=`
`)):(g=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),m=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?$t.tonemapping_pars_fragment:"",e.toneMapping!==Pi?yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,xg("linearToOutputTexel",e.outputColorSpace),_g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Ml(a),a=kh(a,e),a=Bh(a,e),o=Ml(o),o=kh(o,e),o=Bh(o,e),a=Hh(a),o=Hh(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=_+g+a,x=_+m+o,R=Uh(n,n.VERTEX_SHADER,y),E=Uh(n,n.FRAGMENT_SHADER,x);n.attachShader(v,R),n.attachShader(v,E),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function A(I){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(v).trim(),k=n.getShaderInfoLog(R).trim(),H=n.getShaderInfoLog(E).trim(),q=!0,V=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,R,E);else{let nt=Oh(n,R,"vertex"),z=Oh(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+nt+`
`+z)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(k===""||H==="")&&(V=!1);V&&(I.diagnostics={runnable:q,programLog:D,vertexShader:{log:k,prefix:g},fragmentShader:{log:H,prefix:m}})}n.deleteShader(R),n.deleteShader(E),P=new vs(n,v),w=Sg(n,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,pg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=E,this}var Ug=0,bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sl(t),e.set(t,i)),i}},Sl=class{constructor(t){this.id=Ug++,this.code=t,this.usedTimes=0}};function Fg(s,t,e,i,n,r,a){let o=new ta,l=new bl,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,M,I,D,k){let H=D.fog,q=k.geometry,V=w.isMeshStandardMaterial?D.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||V),z=nt&&nt.mapping===va?nt.image.height:null,rt=f[w.type];w.precision!==null&&(p=n.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,$=ct!==void 0?ct.length:0,tt=0;q.morphAttributes.position!==void 0&&(tt=1),q.morphAttributes.normal!==void 0&&(tt=2),q.morphAttributes.color!==void 0&&(tt=3);let st,B,Q,lt;if(rt){let ee=Ii[rt];st=ee.vertexShader,B=ee.fragmentShader}else st=w.vertexShader,B=w.fragmentShader,l.update(w),Q=l.getVertexShaderID(w),lt=l.getFragmentShaderID(w);let it=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),ot=k.isInstancedMesh===!0,ut=k.isBatchedMesh===!0,mt=!!w.map,Rt=!!w.matcap,It=!!nt,L=!!w.aoMap,Kt=!!w.lightMap,Ft=!!w.bumpMap,Ot=!!w.normalMap,et=!!w.displacementMap,wt=!!w.emissiveMap,_t=!!w.metalnessMap,T=!!w.roughnessMap,b=w.anisotropy>0,U=w.clearcoat>0,j=w.dispersion>0,Z=w.iridescence>0,Y=w.sheen>0,Ct=w.transmission>0,pt=b&&!!w.anisotropyMap,At=U&&!!w.clearcoatMap,Xt=U&&!!w.clearcoatNormalMap,at=U&&!!w.clearcoatRoughnessMap,St=Z&&!!w.iridescenceMap,Nt=Z&&!!w.iridescenceThicknessMap,kt=Y&&!!w.sheenColorMap,Et=Y&&!!w.sheenRoughnessMap,jt=!!w.specularMap,Vt=!!w.specularColorMap,ae=!!w.specularIntensityMap,N=Ct&&!!w.transmissionMap,gt=Ct&&!!w.thicknessMap,X=!!w.gradientMap,J=!!w.alphaMap,Mt=w.alphaTest>0,bt=!!w.alphaHash,Gt=!!w.extensions,ye=Pi;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ye=s.toneMapping);let Ce={shaderID:rt,shaderType:w.type,shaderName:w.name,vertexShader:st,fragmentShader:B,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:lt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ut,batchingColor:ut&&k._colorsTexture!==null,instancing:ot,instancingColor:ot&&k.instanceColor!==null,instancingMorph:ot&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:bn,alphaToCoverage:!!w.alphaToCoverage,map:mt,matcap:Rt,envMap:It,envMapMode:It&&nt.mapping,envMapCubeUVHeight:z,aoMap:L,lightMap:Kt,bumpMap:Ft,normalMap:Ot,displacementMap:d&&et,emissiveMap:wt,normalMapObjectSpace:Ot&&w.normalMapType===Qd,normalMapTangentSpace:Ot&&w.normalMapType===uu,metalnessMap:_t,roughnessMap:T,anisotropy:b,anisotropyMap:pt,clearcoat:U,clearcoatMap:At,clearcoatNormalMap:Xt,clearcoatRoughnessMap:at,dispersion:j,iridescence:Z,iridescenceMap:St,iridescenceThicknessMap:Nt,sheen:Y,sheenColorMap:kt,sheenRoughnessMap:Et,specularMap:jt,specularColorMap:Vt,specularIntensityMap:ae,transmission:Ct,transmissionMap:N,thicknessMap:gt,gradientMap:X,opaque:w.transparent===!1&&w.blending===ps&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:Mt,alphaHash:bt,combine:w.combine,mapUv:mt&&v(w.map.channel),aoMapUv:L&&v(w.aoMap.channel),lightMapUv:Kt&&v(w.lightMap.channel),bumpMapUv:Ft&&v(w.bumpMap.channel),normalMapUv:Ot&&v(w.normalMap.channel),displacementMapUv:et&&v(w.displacementMap.channel),emissiveMapUv:wt&&v(w.emissiveMap.channel),metalnessMapUv:_t&&v(w.metalnessMap.channel),roughnessMapUv:T&&v(w.roughnessMap.channel),anisotropyMapUv:pt&&v(w.anisotropyMap.channel),clearcoatMapUv:At&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(w.sheenRoughnessMap.channel),specularMapUv:jt&&v(w.specularMap.channel),specularColorMapUv:Vt&&v(w.specularColorMap.channel),specularIntensityMapUv:ae&&v(w.specularIntensityMap.channel),transmissionMapUv:N&&v(w.transmissionMap.channel),thicknessMapUv:gt&&v(w.thicknessMap.channel),alphaMapUv:J&&v(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ot||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(mt||J),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:dt,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:mt&&w.map.isVideoTexture===!0&&Qt.getTransfer(w.map.colorSpace)===he,decodeVideoTextureEmissive:wt&&w.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(w.emissiveMap.colorSpace)===he,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Me,flipSided:w.side===be,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function m(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)M.push(I),M.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(_(M,w),y(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){let M=f[w.type],I;if(M){let D=Ii[M];I=Tf.clone(D.uniforms)}else I=w.uniforms;return I}function R(w,M){let I;for(let D=0,k=h.length;D<k;D++){let H=h[D];if(H.cacheKey===M){I=H,++I.usedTimes;break}}return I===void 0&&(I=new Ng(s,M,w,r),h.push(I)),I}function E(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:P}}function Og(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function kg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Vh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Gh(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,p,f,v,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:f,renderOrder:u.renderOrder,z:v,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=f,m.renderOrder=u.renderOrder,m.z=v,m.group=g),t++,m}function o(u,d,p,f,v,g){let m=a(u,d,p,f,v,g);p.transmission>0?i.push(m):p.transparent===!0?n.push(m):e.push(m)}function l(u,d,p,f,v,g){let m=a(u,d,p,f,v,g);p.transmission>0?i.unshift(m):p.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||kg),i.length>1&&i.sort(d||Vh),n.length>1&&n.sort(d||Vh)}function h(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function Bg(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Gh,s.set(i,[a])):n>=r.length?(a=new Gh,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Hg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ht};break;case"SpotLight":e={position:new C,direction:new C,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function zg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Vg=0;function Gg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Wg(s){let t=new Hg,e=zg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let n=new C,r=new ie,a=new ie;function o(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,f=0,v=0,g=0,m=0,_=0,y=0,x=0,R=0,E=0,A=0;c.sort(Gg);for(let w=0,M=c.length;w<M;w++){let I=c[w],D=I.color,k=I.intensity,H=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=D.r*k,u+=D.g*k,d+=D.b*k;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],k);A++}else if(I.isDirectionalLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,z=e.get(I);z.shadowIntensity=nt.intensity,z.shadowBias=nt.bias,z.shadowNormalBias=nt.normalBias,z.shadowRadius=nt.radius,z.shadowMapSize=nt.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=I.shadow.matrix,_++}i.directional[p]=V,p++}else if(I.isSpotLight){let V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(D).multiplyScalar(k),V.distance=H,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[v]=V;let nt=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,nt.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[v]=nt.matrix,I.castShadow){let z=e.get(I);z.shadowIntensity=nt.intensity,z.shadowBias=nt.bias,z.shadowNormalBias=nt.normalBias,z.shadowRadius=nt.radius,z.shadowMapSize=nt.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=q,x++}v++}else if(I.isRectAreaLight){let V=t.get(I);V.color.copy(D).multiplyScalar(k),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=V,g++}else if(I.isPointLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let nt=I.shadow,z=e.get(I);z.shadowIntensity=nt.intensity,z.shadowBias=nt.bias,z.shadowNormalBias=nt.normalBias,z.shadowRadius=nt.radius,z.shadowMapSize=nt.mapSize,z.shadowCameraNear=nt.camera.near,z.shadowCameraFar=nt.camera.far,i.pointShadow[f]=z,i.pointShadowMap[f]=q,i.pointShadowMatrix[f]=I.shadow.matrix,y++}i.point[f]=V,f++}else if(I.isHemisphereLight){let V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(k),V.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[m]=V,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==p||P.pointLength!==f||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==_||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=f,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,P.directionalLength=p,P.pointLength=f,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=_,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=A,i.version=Vg++)}function l(c,h){let u=0,d=0,p=0,f=0,v=0,g=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let y=c[m];if(y.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(g),u++}else if(y.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let x=i.rectArea[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),f++}else if(y.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Wh(s){let t=new Wg(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function qg(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new Wh(s),t.set(n,[o])):r>=a.length?(o=new Wh(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var wl=class extends _n{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends _n{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`;function Yg(s,t,e){let i=new Hn,n=new xt,r=new xt,a=new Jt,o=new wl({depthPacking:Kd}),l=new El,c={},h=e.maxTextureSize,u={[Ye]:be,[be]:Ye,[Me]:Me},d=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Xg,fragmentShader:$g}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new me;f.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new yt(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let m=this.type;this.render=function(E,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let w=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),D=s.state;D.setBlending(gn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=m!==Xi&&this.type===Xi,H=m===Xi&&this.type!==Xi;for(let q=0,V=E.length;q<V;q++){let nt=E[q],z=nt.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);let rt=z.getFrameExtents();if(n.multiply(rt),r.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/rt.x),n.x=r.x*rt.x,z.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/rt.y),n.y=r.y*rt.y,z.mapSize.y=r.y)),z.map===null||k===!0||H===!0){let $=this.type!==Xi?{minFilter:Fe,magFilter:Fe}:{};z.map!==null&&z.map.dispose(),z.map=new ti(n.x,n.y,$),z.map.texture.name=nt.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();let ct=z.getViewportCount();for(let $=0;$<ct;$++){let tt=z.getViewport($);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),D.viewport(a),z.updateMatrices(nt,$),i=z.getFrustum(),x(A,P,z.camera,nt,this.type)}z.isPointLightShadow!==!0&&this.type===Xi&&_(z,P),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,M,I)};function _(E,A){let P=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ti(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,P,d,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,P,p,v,null)}function y(E,A,P,w){let M=null,I=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let D=M.uuid,k=A.uuid,H=c[D];H===void 0&&(H={},c[D]=H);let q=H[k];q===void 0&&(q=M.clone(),H[k]=q,A.addEventListener("dispose",R)),M=q}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Xi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=s.properties.get(M);D.light=P}return M}function x(E,A,P,w,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Xi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let k=t.update(E),H=E.material;if(Array.isArray(H)){let q=k.groups;for(let V=0,nt=q.length;V<nt;V++){let z=q[V],rt=H[z.materialIndex];if(rt&&rt.visible){let ct=y(E,rt,w,M);E.onBeforeShadow(s,E,A,P,k,ct,z),s.renderBufferDirect(P,null,k,ct,E,z),E.onAfterShadow(s,E,A,P,k,ct,z)}}}else if(H.visible){let q=y(E,H,w,M);E.onBeforeShadow(s,E,A,P,k,q,null),s.renderBufferDirect(P,null,k,q,E,null),E.onAfterShadow(s,E,A,P,k,q,null)}}let D=E.children;for(let k=0,H=D.length;k<H;k++)x(D[k],A,P,w,M)}function R(E){E.target.removeEventListener("dispose",R);for(let P in c){let w=c[P],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var jg={[Po]:Lo,[Do]:Fo,[No]:Oo,[ys]:Uo,[Lo]:Po,[Fo]:Do,[Oo]:No,[Uo]:ys};function Zg(s,t){function e(){let N=!1,gt=new Jt,X=null,J=new Jt(0,0,0,0);return{setMask:function(Mt){X!==Mt&&!N&&(s.colorMask(Mt,Mt,Mt,Mt),X=Mt)},setLocked:function(Mt){N=Mt},setClear:function(Mt,bt,Gt,ye,Ce){Ce===!0&&(Mt*=ye,bt*=ye,Gt*=ye),gt.set(Mt,bt,Gt,ye),J.equals(gt)===!1&&(s.clearColor(Mt,bt,Gt,ye),J.copy(gt))},reset:function(){N=!1,X=null,J.set(-1,0,0,0)}}}function i(){let N=!1,gt=!1,X=null,J=null,Mt=null;return{setReversed:function(bt){if(gt!==bt){let Gt=t.get("EXT_clip_control");gt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let ye=Mt;Mt=null,this.setClear(ye)}gt=bt},getReversed:function(){return gt},setTest:function(bt){bt?it(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(bt){X!==bt&&!N&&(s.depthMask(bt),X=bt)},setFunc:function(bt){if(gt&&(bt=jg[bt]),J!==bt){switch(bt){case Po:s.depthFunc(s.NEVER);break;case Lo:s.depthFunc(s.ALWAYS);break;case Do:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case No:s.depthFunc(s.EQUAL);break;case Uo:s.depthFunc(s.GEQUAL);break;case Fo:s.depthFunc(s.GREATER);break;case Oo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=bt}},setLocked:function(bt){N=bt},setClear:function(bt){Mt!==bt&&(gt&&(bt=1-bt),s.clearDepth(bt),Mt=bt)},reset:function(){N=!1,X=null,J=null,Mt=null,gt=!1}}}function n(){let N=!1,gt=null,X=null,J=null,Mt=null,bt=null,Gt=null,ye=null,Ce=null;return{setTest:function(ee){N||(ee?it(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function(ee){gt!==ee&&!N&&(s.stencilMask(ee),gt=ee)},setFunc:function(ee,qe,ai){(X!==ee||J!==qe||Mt!==ai)&&(s.stencilFunc(ee,qe,ai),X=ee,J=qe,Mt=ai)},setOp:function(ee,qe,ai){(bt!==ee||Gt!==qe||ye!==ai)&&(s.stencilOp(ee,qe,ai),bt=ee,Gt=qe,ye=ai)},setLocked:function(ee){N=ee},setClear:function(ee){Ce!==ee&&(s.clearStencil(ee),Ce=ee)},reset:function(){N=!1,gt=null,X=null,J=null,Mt=null,bt=null,Gt=null,ye=null,Ce=null}}}let r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],f=null,v=!1,g=null,m=null,_=null,y=null,x=null,R=null,E=null,A=new Ht(0,0,0),P=0,w=!1,M=null,I=null,D=null,k=null,H=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,nt=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=nt>=1):z.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=nt>=2);let rt=null,ct={},$=s.getParameter(s.SCISSOR_BOX),tt=s.getParameter(s.VIEWPORT),st=new Jt().fromArray($),B=new Jt().fromArray(tt);function Q(N,gt,X,J){let Mt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(N,bt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<X;Gt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(gt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return bt}let lt={};lt[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),lt[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),lt[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(s.DEPTH_TEST),a.setFunc(ys),Ft(!1),Ot(Xc),it(s.CULL_FACE),L(gn);function it(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function dt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function ot(N,gt){return u[N]!==gt?(s.bindFramebuffer(N,gt),u[N]=gt,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=gt),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function ut(N,gt){let X=p,J=!1;if(N){X=d.get(gt),X===void 0&&(X=[],d.set(gt,X));let Mt=N.textures;if(X.length!==Mt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,Gt=Mt.length;bt<Gt;bt++)X[bt]=s.COLOR_ATTACHMENT0+bt;X.length=Mt.length,J=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,J=!0);J&&s.drawBuffers(X)}function mt(N){return f!==N?(s.useProgram(N),f=N,!0):!1}let Rt={[Yi]:s.FUNC_ADD,[Ed]:s.FUNC_SUBTRACT,[Td]:s.FUNC_REVERSE_SUBTRACT};Rt[Ad]=s.MIN,Rt[Rd]=s.MAX;let It={[Cd]:s.ZERO,[ce]:s.ONE,[Id]:s.SRC_COLOR,[xs]:s.SRC_ALPHA,[Fd]:s.SRC_ALPHA_SATURATE,[Nd]:s.DST_COLOR,[Ld]:s.DST_ALPHA,[Pd]:s.ONE_MINUS_SRC_COLOR,[vn]:s.ONE_MINUS_SRC_ALPHA,[Ud]:s.ONE_MINUS_DST_COLOR,[Dd]:s.ONE_MINUS_DST_ALPHA,[Od]:s.CONSTANT_COLOR,[kd]:s.ONE_MINUS_CONSTANT_COLOR,[Bd]:s.CONSTANT_ALPHA,[Hd]:s.ONE_MINUS_CONSTANT_ALPHA};function L(N,gt,X,J,Mt,bt,Gt,ye,Ce,ee){if(N===gn){v===!0&&(dt(s.BLEND),v=!1);return}if(v===!1&&(it(s.BLEND),v=!0),N!==Re){if(N!==g||ee!==w){if((m!==Yi||x!==Yi)&&(s.blendEquation(s.FUNC_ADD),m=Yi,x=Yi),ee)switch(N){case ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFunc(s.ONE,s.ONE);break;case Yc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,y=null,R=null,E=null,A.set(0,0,0),P=0,g=N,w=ee}return}Mt=Mt||gt,bt=bt||X,Gt=Gt||J,(gt!==m||Mt!==x)&&(s.blendEquationSeparate(Rt[gt],Rt[Mt]),m=gt,x=Mt),(X!==_||J!==y||bt!==R||Gt!==E)&&(s.blendFuncSeparate(It[X],It[J],It[bt],It[Gt]),_=X,y=J,R=bt,E=Gt),(ye.equals(A)===!1||Ce!==P)&&(s.blendColor(ye.r,ye.g,ye.b,Ce),A.copy(ye),P=Ce),g=N,w=!1}function Kt(N,gt){N.side===Me?dt(s.CULL_FACE):it(s.CULL_FACE);let X=N.side===be;gt&&(X=!X),Ft(X),N.blending===ps&&N.transparent===!1?L(gn):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let J=N.stencilWrite;o.setTest(J),J&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),wt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function Ot(N){N!==Sd?(it(s.CULL_FACE),N!==I&&(N===Xc?s.cullFace(s.BACK):N===wd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),I=N}function et(N){N!==D&&(V&&s.lineWidth(N),D=N)}function wt(N,gt,X){N?(it(s.POLYGON_OFFSET_FILL),(k!==gt||H!==X)&&(s.polygonOffset(gt,X),k=gt,H=X)):dt(s.POLYGON_OFFSET_FILL)}function _t(N){N?it(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function T(N){N===void 0&&(N=s.TEXTURE0+q-1),rt!==N&&(s.activeTexture(N),rt=N)}function b(N,gt,X){X===void 0&&(rt===null?X=s.TEXTURE0+q-1:X=rt);let J=ct[X];J===void 0&&(J={type:void 0,texture:void 0},ct[X]=J),(J.type!==N||J.texture!==gt)&&(rt!==X&&(s.activeTexture(X),rt=X),s.bindTexture(N,gt||lt[N]),J.type=N,J.texture=gt)}function U(){let N=ct[rt];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(N){st.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),st.copy(N))}function Et(N){B.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),B.copy(N))}function jt(N,gt){let X=c.get(gt);X===void 0&&(X=new WeakMap,c.set(gt,X));let J=X.get(N);J===void 0&&(J=s.getUniformBlockIndex(gt,N.name),X.set(N,J))}function Vt(N,gt){let J=c.get(gt).get(N);l.get(gt)!==J&&(s.uniformBlockBinding(gt,J,N.__bindingPointIndex),l.set(gt,J))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,ct={},u={},d=new WeakMap,p=[],f=null,v=!1,g=null,m=null,_=null,y=null,x=null,R=null,E=null,A=new Ht(0,0,0),P=0,w=!1,M=null,I=null,D=null,k=null,H=null,st.set(0,0,s.canvas.width,s.canvas.height),B.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:dt,bindFramebuffer:ot,drawBuffers:ut,useProgram:mt,setBlending:L,setMaterial:Kt,setFlipSided:Ft,setCullFace:Ot,setLineWidth:et,setPolygonOffset:wt,setScissorTest:_t,activeTexture:T,bindTexture:b,unbindTexture:U,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:St,texImage3D:Nt,updateUBOMapping:jt,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:at,texSubImage2D:Y,texSubImage3D:Ct,compressedTexSubImage2D:pt,compressedTexSubImage3D:At,scissor:kt,viewport:Et,reset:ae}}function qh(s,t,e,i){let n=Jg(i);switch(e){case su:return s*t;case au:return s*t;case ou:return s*t*2;case lu:return s*t/n.components*n.byteLength;case tc:return s*t/n.components*n.byteLength;case cu:return s*t*2/n.components*n.byteLength;case ec:return s*t*2/n.components*n.byteLength;case ru:return s*t*3/n.components*n.byteLength;case ze:return s*t*4/n.components*n.byteLength;case ic:return s*t*4/n.components*n.byteLength;case Gr:case Wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qr:case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vo:case Wo:return Math.max(s,16)*Math.max(t,8)/4;case zo:case Go:return Math.max(s,8)*Math.max(t,8)/2;case qo:case Xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $o:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case il:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case nl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ol:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $r:case ll:case cl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hu:case hl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ul:case dl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jg(s){switch(s){case Ki:case eu:return{byteLength:1,components:1};case tr:case iu:case Ti:return{byteLength:2,components:1};case Kl:case Ql:return{byteLength:2,components:4};case kn:case Jl:case gi:return{byteLength:4,components:1};case nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Kg(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(T,b){return p?new OffscreenCanvas(T,b):Zr("canvas")}function v(T,b,U){let j=1,Z=_t(T);if((Z.width>U||Z.height>U)&&(j=U/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Y=Math.floor(j*Z.width),Ct=Math.floor(j*Z.height);u===void 0&&(u=f(Y,Ct));let pt=b?f(Y,Ct):u;return pt.width=Y,pt.height=Ct,pt.getContext("2d").drawImage(T,0,0,Y,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Ct+")."),pt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function g(T){return T.generateMipmaps}function m(T){s.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(T,b,U,j,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=b;if(b===s.RED&&(U===s.FLOAT&&(Y=s.R32F),U===s.HALF_FLOAT&&(Y=s.R16F),U===s.UNSIGNED_BYTE&&(Y=s.R8)),b===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.R8UI),U===s.UNSIGNED_SHORT&&(Y=s.R16UI),U===s.UNSIGNED_INT&&(Y=s.R32UI),U===s.BYTE&&(Y=s.R8I),U===s.SHORT&&(Y=s.R16I),U===s.INT&&(Y=s.R32I)),b===s.RG&&(U===s.FLOAT&&(Y=s.RG32F),U===s.HALF_FLOAT&&(Y=s.RG16F),U===s.UNSIGNED_BYTE&&(Y=s.RG8)),b===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.RG8UI),U===s.UNSIGNED_SHORT&&(Y=s.RG16UI),U===s.UNSIGNED_INT&&(Y=s.RG32UI),U===s.BYTE&&(Y=s.RG8I),U===s.SHORT&&(Y=s.RG16I),U===s.INT&&(Y=s.RG32I)),b===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),U===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),U===s.UNSIGNED_INT&&(Y=s.RGB32UI),U===s.BYTE&&(Y=s.RGB8I),U===s.SHORT&&(Y=s.RGB16I),U===s.INT&&(Y=s.RGB32I)),b===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),U===s.UNSIGNED_INT&&(Y=s.RGBA32UI),U===s.BYTE&&(Y=s.RGBA8I),U===s.SHORT&&(Y=s.RGBA16I),U===s.INT&&(Y=s.RGBA32I)),b===s.RGB&&U===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),b===s.RGBA){let Ct=Z?xa:Qt.getTransfer(j);U===s.FLOAT&&(Y=s.RGBA32F),U===s.HALF_FLOAT&&(Y=s.RGBA16F),U===s.UNSIGNED_BYTE&&(Y=Ct===he?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(T,b){let U;return T?b===null||b===kn||b===Ss?U=s.DEPTH24_STENCIL8:b===gi?U=s.DEPTH32F_STENCIL8:b===tr&&(U=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===kn||b===Ss?U=s.DEPTH_COMPONENT24:b===gi?U=s.DEPTH_COMPONENT32F:b===tr&&(U=s.DEPTH_COMPONENT16),U}function R(T,b){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Fe&&T.minFilter!==we?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function E(T){let b=T.target;b.removeEventListener("dispose",E),P(b),b.isVideoTexture&&h.delete(b)}function A(T){let b=T.target;b.removeEventListener("dispose",A),M(b)}function P(T){let b=i.get(T);if(b.__webglInit===void 0)return;let U=T.source,j=d.get(U);if(j){let Z=j[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(T),Object.keys(j).length===0&&d.delete(U)}i.remove(T)}function w(T){let b=i.get(T);s.deleteTexture(b.__webglTexture);let U=T.source,j=d.get(U);delete j[b.__cacheKey],a.memory.textures--}function M(T){let b=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let Z=0;Z<b.__webglFramebuffer[j].length;Z++)s.deleteFramebuffer(b.__webglFramebuffer[j][Z]);else s.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)s.deleteFramebuffer(b.__webglFramebuffer[j]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let U=T.textures;for(let j=0,Z=U.length;j<Z;j++){let Y=i.get(U[j]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(U[j])}i.remove(T)}let I=0;function D(){I=0}function k(){let T=I;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),I+=1,T}function H(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function q(T,b){let U=i.get(T);if(T.isVideoTexture&&et(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){let j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(U,T,b);return}}e.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+b)}function V(T,b){let U=i.get(T);if(T.version>0&&U.__version!==T.version){B(U,T,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+b)}function nt(T,b){let U=i.get(T);if(T.version>0&&U.__version!==T.version){B(U,T,b);return}e.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+b)}function z(T,b){let U=i.get(T);if(T.version>0&&U.__version!==T.version){Q(U,T,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+b)}let rt={[bs]:s.REPEAT,[ji]:s.CLAMP_TO_EDGE,[Ho]:s.MIRRORED_REPEAT},ct={[Fe]:s.NEAREST,[Zd]:s.NEAREST_MIPMAP_NEAREST,[xr]:s.NEAREST_MIPMAP_LINEAR,[we]:s.LINEAR,[Za]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},$={[tf]:s.NEVER,[of]:s.ALWAYS,[ef]:s.LESS,[du]:s.LEQUAL,[nf]:s.EQUAL,[af]:s.GEQUAL,[sf]:s.GREATER,[rf]:s.NOTEQUAL};function tt(T,b){if(b.type===gi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===we||b.magFilter===Za||b.magFilter===xr||b.magFilter===On||b.minFilter===we||b.minFilter===Za||b.minFilter===xr||b.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,rt[b.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,rt[b.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,rt[b.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ct[b.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Fe||b.minFilter!==xr&&b.minFilter!==On||b.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function st(T,b){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",E));let j=b.source,Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));let Y=H(b);if(Y!==T.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[Y].usedTimes++;let Ct=Z[T.__cacheKey];Ct!==void 0&&(Z[T.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(b)),T.__cacheKey=Y,T.__webglTexture=Z[Y].texture}return U}function B(T,b,U){let j=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=s.TEXTURE_3D);let Z=st(T,b),Y=b.source;e.bindTexture(j,T.__webglTexture,s.TEXTURE0+U);let Ct=i.get(Y);if(Y.version!==Ct.__version||Z===!0){e.activeTexture(s.TEXTURE0+U);let pt=Qt.getPrimaries(Qt.workingColorSpace),At=b.colorSpace===mn?null:Qt.getPrimaries(b.colorSpace),Xt=b.colorSpace===mn||pt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let at=v(b.image,!1,n.maxTextureSize);at=wt(b,at);let St=r.convert(b.format,b.colorSpace),Nt=r.convert(b.type),kt=y(b.internalFormat,St,Nt,b.colorSpace,b.isVideoTexture);tt(j,b);let Et,jt=b.mipmaps,Vt=b.isVideoTexture!==!0,ae=Ct.__version===void 0||Z===!0,N=Y.dataReady,gt=R(b,at);if(b.isDepthTexture)kt=x(b.format===ws,b.type),ae&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,kt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,kt,at.width,at.height,0,St,Nt,null));else if(b.isDataTexture)if(jt.length>0){Vt&&ae&&e.texStorage2D(s.TEXTURE_2D,gt,kt,jt[0].width,jt[0].height);for(let X=0,J=jt.length;X<J;X++)Et=jt[X],Vt?N&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,Et.width,Et.height,St,Nt,Et.data):e.texImage2D(s.TEXTURE_2D,X,kt,Et.width,Et.height,0,St,Nt,Et.data);b.generateMipmaps=!1}else Vt?(ae&&e.texStorage2D(s.TEXTURE_2D,gt,kt,at.width,at.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,St,Nt,at.data)):e.texImage2D(s.TEXTURE_2D,0,kt,at.width,at.height,0,St,Nt,at.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Vt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,kt,jt[0].width,jt[0].height,at.depth);for(let X=0,J=jt.length;X<J;X++)if(Et=jt[X],b.format!==ze)if(St!==null)if(Vt){if(N)if(b.layerUpdates.size>0){let Mt=qh(Et.width,Et.height,b.format,b.type);for(let bt of b.layerUpdates){let Gt=Et.data.subarray(bt*Mt/Et.data.BYTES_PER_ELEMENT,(bt+1)*Mt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,bt,Et.width,Et.height,1,St,Gt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,at.depth,St,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,kt,Et.width,Et.height,at.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,at.depth,St,Nt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,kt,Et.width,Et.height,at.depth,0,St,Nt,Et.data)}else{Vt&&ae&&e.texStorage2D(s.TEXTURE_2D,gt,kt,jt[0].width,jt[0].height);for(let X=0,J=jt.length;X<J;X++)Et=jt[X],b.format!==ze?St!==null?Vt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,X,kt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?N&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,Et.width,Et.height,St,Nt,Et.data):e.texImage2D(s.TEXTURE_2D,X,kt,Et.width,Et.height,0,St,Nt,Et.data)}else if(b.isDataArrayTexture)if(Vt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,kt,at.width,at.height,at.depth),N)if(b.layerUpdates.size>0){let X=qh(at.width,at.height,b.format,b.type);for(let J of b.layerUpdates){let Mt=at.data.subarray(J*X/at.data.BYTES_PER_ELEMENT,(J+1)*X/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,at.width,at.height,1,St,Nt,Mt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,St,Nt,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,at.width,at.height,at.depth,0,St,Nt,at.data);else if(b.isData3DTexture)Vt?(ae&&e.texStorage3D(s.TEXTURE_3D,gt,kt,at.width,at.height,at.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,St,Nt,at.data)):e.texImage3D(s.TEXTURE_3D,0,kt,at.width,at.height,at.depth,0,St,Nt,at.data);else if(b.isFramebufferTexture){if(ae)if(Vt)e.texStorage2D(s.TEXTURE_2D,gt,kt,at.width,at.height);else{let X=at.width,J=at.height;for(let Mt=0;Mt<gt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,kt,X,J,0,St,Nt,null),X>>=1,J>>=1}}else if(jt.length>0){if(Vt&&ae){let X=_t(jt[0]);e.texStorage2D(s.TEXTURE_2D,gt,kt,X.width,X.height)}for(let X=0,J=jt.length;X<J;X++)Et=jt[X],Vt?N&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,St,Nt,Et):e.texImage2D(s.TEXTURE_2D,X,kt,St,Nt,Et);b.generateMipmaps=!1}else if(Vt){if(ae){let X=_t(at);e.texStorage2D(s.TEXTURE_2D,gt,kt,X.width,X.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Nt,at)}else e.texImage2D(s.TEXTURE_2D,0,kt,St,Nt,at);g(b)&&m(j),Ct.__version=Y.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Q(T,b,U){if(b.image.length!==6)return;let j=st(T,b),Z=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+U);let Y=i.get(Z);if(Z.version!==Y.__version||j===!0){e.activeTexture(s.TEXTURE0+U);let Ct=Qt.getPrimaries(Qt.workingColorSpace),pt=b.colorSpace===mn?null:Qt.getPrimaries(b.colorSpace),At=b.colorSpace===mn||Ct===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Xt=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,St=[];for(let J=0;J<6;J++)!Xt&&!at?St[J]=v(b.image[J],!0,n.maxCubemapSize):St[J]=at?b.image[J].image:b.image[J],St[J]=wt(b,St[J]);let Nt=St[0],kt=r.convert(b.format,b.colorSpace),Et=r.convert(b.type),jt=y(b.internalFormat,kt,Et,b.colorSpace),Vt=b.isVideoTexture!==!0,ae=Y.__version===void 0||j===!0,N=Z.dataReady,gt=R(b,Nt);tt(s.TEXTURE_CUBE_MAP,b);let X;if(Xt){Vt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,jt,Nt.width,Nt.height);for(let J=0;J<6;J++){X=St[J].mipmaps;for(let Mt=0;Mt<X.length;Mt++){let bt=X[Mt];b.format!==ze?kt!==null?Vt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,0,0,bt.width,bt.height,kt,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,jt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,0,0,bt.width,bt.height,kt,Et,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,jt,bt.width,bt.height,0,kt,Et,bt.data)}}}else{if(X=b.mipmaps,Vt&&ae){X.length>0&&gt++;let J=_t(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,jt,J.width,J.height)}for(let J=0;J<6;J++)if(at){Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St[J].width,St[J].height,kt,Et,St[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,St[J].width,St[J].height,0,kt,Et,St[J].data);for(let Mt=0;Mt<X.length;Mt++){let Gt=X[Mt].image[J].image;Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,0,0,Gt.width,Gt.height,kt,Et,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,jt,Gt.width,Gt.height,0,kt,Et,Gt.data)}}else{Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,kt,Et,St[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,kt,Et,St[J]);for(let Mt=0;Mt<X.length;Mt++){let bt=X[Mt];Vt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,0,0,kt,Et,bt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,jt,kt,Et,bt.image[J])}}}g(b)&&m(s.TEXTURE_CUBE_MAP),Y.__version=Z.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function lt(T,b,U,j,Z,Y){let Ct=r.convert(U.format,U.colorSpace),pt=r.convert(U.type),At=y(U.internalFormat,Ct,pt,U.colorSpace),Xt=i.get(b),at=i.get(U);if(at.__renderTarget=b,!Xt.__hasExternalTextures){let St=Math.max(1,b.width>>Y),Nt=Math.max(1,b.height>>Y);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,At,St,Nt,b.depth,0,Ct,pt,null):e.texImage2D(Z,Y,At,St,Nt,0,Ct,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Ot(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Z,at.__webglTexture,0,Ft(b)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Z,at.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(T,b,U){if(s.bindRenderbuffer(s.RENDERBUFFER,T),b.depthBuffer){let j=b.depthTexture,Z=j&&j.isDepthTexture?j.type:null,Y=x(b.stencilBuffer,Z),Ct=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=Ft(b);Ot(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Y,b.width,b.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Y,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Y,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,T)}else{let j=b.textures;for(let Z=0;Z<j.length;Z++){let Y=j[Z],Ct=r.convert(Y.format,Y.colorSpace),pt=r.convert(Y.type),At=y(Y.internalFormat,Ct,pt,Y.colorSpace),Xt=Ft(b);U&&Ot(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,At,b.width,b.height):Ot(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,At,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,At,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);let Z=j.__webglTexture,Y=Ft(b);if(b.depthTexture.format===ms)Ot(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(b.depthTexture.format===ws)Ot(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ot(T){let b=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let j=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){let Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=j}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");dt(b.__webglFramebuffer,T)}else if(U){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=s.createRenderbuffer(),it(b.__webglDepthbuffer[j],T,!1);else{let Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),it(b.__webglDepthbuffer,T,!1);else{let j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Z)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(T,b,U){let j=i.get(T);b!==void 0&&lt(j.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&ot(T)}function mt(T){let b=T.texture,U=i.get(T),j=i.get(b);T.addEventListener("dispose",A);let Z=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Ct=Z.length>1;if(Ct||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=b.version,a.memory.textures++),Y){U.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[pt]=[];for(let At=0;At<b.mipmaps.length;At++)U.__webglFramebuffer[pt][At]=s.createFramebuffer()}else U.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)U.__webglFramebuffer[pt]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let pt=0,At=Z.length;pt<At;pt++){let Xt=i.get(Z[pt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Ot(T)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let pt=0;pt<Z.length;pt++){let At=Z[pt];U.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[pt]);let Xt=r.convert(At.format,At.colorSpace),at=r.convert(At.type),St=y(At.internalFormat,Xt,at,At.colorSpace,T.isXRRenderTarget===!0),Nt=Ft(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,St,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,U.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),it(U.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),tt(s.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)lt(U.__webglFramebuffer[pt][At],T,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At);else lt(U.__webglFramebuffer[pt],T,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(b)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let pt=0,At=Z.length;pt<At;pt++){let Xt=Z[pt],at=i.get(Xt);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),tt(s.TEXTURE_2D,Xt),lt(U.__webglFramebuffer,T,Xt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),g(Xt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,j.__webglTexture),tt(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)lt(U.__webglFramebuffer[At],T,b,s.COLOR_ATTACHMENT0,pt,At);else lt(U.__webglFramebuffer,T,b,s.COLOR_ATTACHMENT0,pt,0);g(b)&&m(pt),e.unbindTexture()}T.depthBuffer&&ot(T)}function Rt(T){let b=T.textures;for(let U=0,j=b.length;U<j;U++){let Z=b[U];if(g(Z)){let Y=_(T),Ct=i.get(Z).__webglTexture;e.bindTexture(Y,Ct),m(Y),e.unbindTexture()}}}let It=[],L=[];function Kt(T){if(T.samples>0){if(Ot(T)===!1){let b=T.textures,U=T.width,j=T.height,Z=s.COLOR_BUFFER_BIT,Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=i.get(T),pt=b.length>1;if(pt)for(let At=0;At<b.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let At=0;At<b.length;At++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);let Xt=i.get(b[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,U,j,0,0,U,j,Z,s.NEAREST),l===!0&&(It.length=0,L.length=0,It.push(s.COLOR_ATTACHMENT0+At),T.depthBuffer&&T.resolveDepthBuffer===!1&&(It.push(Y),L.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let At=0;At<b.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);let Xt=i.get(b[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let b=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ft(T){return Math.min(n.maxSamples,T.samples)}function Ot(T){let b=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function et(T){let b=a.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function wt(T,b){let U=T.colorSpace,j=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==bn&&U!==mn&&(Qt.getTransfer(U)===he?(j!==ze||Z!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),b}function _t(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=nt,this.setTextureCube=z,this.rebindTextures=ut,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ot}function Qg(s,t){function e(i,n=mn){let r,a=Qt.getTransfer(n);if(i===Ki)return s.UNSIGNED_BYTE;if(i===Kl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ql)return s.UNSIGNED_SHORT_5_5_5_1;if(i===nu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===eu)return s.BYTE;if(i===iu)return s.SHORT;if(i===tr)return s.UNSIGNED_SHORT;if(i===Jl)return s.INT;if(i===kn)return s.UNSIGNED_INT;if(i===gi)return s.FLOAT;if(i===Ti)return s.HALF_FLOAT;if(i===su)return s.ALPHA;if(i===ru)return s.RGB;if(i===ze)return s.RGBA;if(i===au)return s.LUMINANCE;if(i===ou)return s.LUMINANCE_ALPHA;if(i===ms)return s.DEPTH_COMPONENT;if(i===ws)return s.DEPTH_STENCIL;if(i===lu)return s.RED;if(i===tc)return s.RED_INTEGER;if(i===cu)return s.RG;if(i===ec)return s.RG_INTEGER;if(i===ic)return s.RGBA_INTEGER;if(i===Gr||i===Wr||i===qr||i===Xr)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zo||i===Vo||i===Go||i===Wo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qo||i===Xo||i===$o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qo||i===Xo)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$o)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yo||i===jo||i===Zo||i===Jo||i===Ko||i===Qo||i===tl||i===el||i===il||i===nl||i===sl||i===rl||i===al||i===ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ko)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===el)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===al)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ol)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$r||i===ll||i===cl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===$r)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hu||i===hl||i===ul||i===dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===$r)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Tl=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},oe=class extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}},tv={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tv)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new oe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`,Al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new ri,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Yt({vertexShader:ev,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yt(new Ts(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rl=class extends xn{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,v=new Al,g=e.getContextAttributes(),m=null,_=null,y=[],x=[],R=new xt,E=null,A=new Qe;A.viewport=new Jt;let P=new Qe;P.viewport=new Jt;let w=[A,P],M=new Tl,I=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Q=y[B];return Q===void 0&&(Q=new Js,y[B]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(B){let Q=y[B];return Q===void 0&&(Q=new Js,y[B]=Q),Q.getGripSpace()},this.getHand=function(B){let Q=y[B];return Q===void 0&&(Q=new Js,y[B]=Q),Q.getHandSpace()};function k(B){let Q=x.indexOf(B.inputSource);if(Q===-1)return;let lt=y[Q];lt!==void 0&&(lt.update(B.inputSource,B.frame,c||a),lt.dispatchEvent({type:B.type,data:B.inputSource}))}function H(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",q);for(let B=0;B<y.length;B++){let Q=x[B];Q!==null&&(x[B]=null,y[B].disconnect(Q))}I=null,D=null,v.reset(),t.setRenderTarget(m),p=null,d=null,u=null,n=null,_=null,st.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",H),n.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),n.renderState.layers===void 0){let Q={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,e,Q),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ti(p.framebufferWidth,p.framebufferHeight,{format:ze,type:Ki,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,lt=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?ws:ms,lt=g.stencil?Ss:kn);let dt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(dt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new ti(d.textureWidth,d.textureHeight,{format:ze,type:Ki,depthTexture:new ra(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),st.setContext(n),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(B){for(let Q=0;Q<B.removed.length;Q++){let lt=B.removed[Q],it=x.indexOf(lt);it>=0&&(x[it]=null,y[it].disconnect(lt))}for(let Q=0;Q<B.added.length;Q++){let lt=B.added[Q],it=x.indexOf(lt);if(it===-1){for(let ot=0;ot<y.length;ot++)if(ot>=x.length){x.push(lt),it=ot;break}else if(x[ot]===null){x[ot]=lt,it=ot;break}if(it===-1)break}let dt=y[it];dt&&dt.connect(lt)}}let V=new C,nt=new C;function z(B,Q,lt){V.setFromMatrixPosition(Q.matrixWorld),nt.setFromMatrixPosition(lt.matrixWorld);let it=V.distanceTo(nt),dt=Q.projectionMatrix.elements,ot=lt.projectionMatrix.elements,ut=dt[14]/(dt[10]-1),mt=dt[14]/(dt[10]+1),Rt=(dt[9]+1)/dt[5],It=(dt[9]-1)/dt[5],L=(dt[8]-1)/dt[0],Kt=(ot[8]+1)/ot[0],Ft=ut*L,Ot=ut*Kt,et=it/(-L+Kt),wt=et*-L;if(Q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(wt),B.translateZ(et),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),dt[10]===-1)B.projectionMatrix.copy(Q.projectionMatrix),B.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let _t=ut+et,T=mt+et,b=Ft-wt,U=Ot+(it-wt),j=Rt*mt/T*_t,Z=It*mt/T*_t;B.projectionMatrix.makePerspective(b,U,j,Z,_t,T),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function rt(B,Q){Q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;let Q=B.near,lt=B.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(lt=v.depthFar)),M.near=P.near=A.near=Q,M.far=P.far=A.far=lt,(I!==M.near||D!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,D=M.far),A.layers.mask=B.layers.mask|2,P.layers.mask=B.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;let it=B.parent,dt=M.cameras;rt(M,it);for(let ot=0;ot<dt.length;ot++)rt(dt[ot],it);dt.length===2?z(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),ct(B,M,it)};function ct(B,Q,lt){lt===null?B.matrix.copy(Q.matrixWorld):(B.matrix.copy(lt.matrixWorld),B.matrix.invert(),B.matrix.multiply(Q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Q.projectionMatrix),B.projectionMatrixInverse.copy(Q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=pl*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let $=null;function tt(B,Q){if(h=Q.getViewerPose(c||a),f=Q,h!==null){let lt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let it=!1;lt.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let ot=0;ot<lt.length;ot++){let ut=lt[ot],mt=null;if(p!==null)mt=p.getViewport(ut);else{let It=u.getViewSubImage(d,ut);mt=It.viewport,ot===0&&(t.setRenderTargetTextures(_,It.colorTexture,d.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(_))}let Rt=w[ot];Rt===void 0&&(Rt=new Qe,Rt.layers.enable(ot),Rt.viewport=new Jt,w[ot]=Rt),Rt.matrix.fromArray(ut.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(ut.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(mt.x,mt.y,mt.width,mt.height),ot===0&&(M.matrix.copy(Rt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(Rt)}let dt=n.enabledFeatures;if(dt&&dt.includes("depth-sensing")){let ot=u.getDepthInformation(lt[0]);ot&&ot.isValid&&ot.texture&&v.init(t,ot,n.renderState)}}for(let lt=0;lt<y.length;lt++){let it=x[lt],dt=y[lt];it!==null&&dt!==void 0&&dt.update(it,Q,c||a)}$&&$(B,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),f=null}let st=new gu;st.setAnimationLoop(tt),this.setAnimationLoop=function(B){$=B},this.dispose=function(){}}},Dn=new Li,nv=new ie;function sv(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,mu(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,_,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===be&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===be&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),y=_.envMap,x=_.envMapRotation;y&&(g.envMap.value=y,Dn.copy(x),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),g.envMapRotation.value.setFromMatrix4(nv.makeRotationFromEuler(Dn)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===be&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function rv(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let x=y.program;i.uniformBlockBinding(_,x)}function c(_,y){let x=n[_.id];x===void 0&&(f(_),x=h(_),n[_.id]=x,_.addEventListener("dispose",g));let R=y.program;i.updateUBOMapping(_,R);let E=t.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function h(_){let y=u();_.__bindingPointIndex=y;let x=s.createBuffer(),R=_.__size,E=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,R,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=n[_.id],x=_.uniforms,R=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,A=x.length;E<A;E++){let P=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,M=P.length;w<M;w++){let I=P[w];if(p(I,E,w,R)===!0){let D=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],H=0;for(let q=0;q<k.length;q++){let V=k[q],nt=v(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,D+H,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,H),H+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,y,x,R){let E=_.value,A=y+"_"+x;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{let P=R[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return R[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function f(_){let y=_.uniforms,x=0,R=16;for(let A=0,P=y.length;A<P;A++){let w=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,I=w.length;M<I;M++){let D=w[M],k=Array.isArray(D.value)?D.value:[D.value];for(let H=0,q=k.length;H<q;H++){let V=k[H],nt=v(V),z=x%R,rt=z%nt.boundary,ct=z+rt;x+=rt,ct!==0&&R-ct<nt.storage&&(x+=R-ct),D.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=nt.storage}}}let E=x%R;return E>0&&(x+=R-E),_.__size=x,_.__cache={},this}function v(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){let y=_.target;y.removeEventListener("dispose",g);let x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function m(){for(let _ in n)s.deleteBuffer(n[_]);a=[],n={},r={}}return{bind:l,update:c,dispose:m}}var aa=class{constructor(t={}){let{canvas:e=cf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,_=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=Pi,this.toneMappingExposure=1;let x=this,R=!1,E=0,A=0,P=null,w=-1,M=null,I=new Jt,D=new Jt,k=null,H=new Ht(0),q=0,V=e.width,nt=e.height,z=1,rt=null,ct=null,$=new Jt(0,0,V,nt),tt=new Jt(0,0,V,nt),st=!1,B=new Hn,Q=!1,lt=!1,it=new ie,dt=new ie,ot=new C,ut=new Jt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function It(){return P===null?z:1}let L=i;function Kt(S,F){return e.getContext(S,F)}try{let S={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),L===null){let F="webgl2";if(L=Kt(F,S),L===null)throw Kt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ft,Ot,et,wt,_t,T,b,U,j,Z,Y,Ct,pt,At,Xt,at,St,Nt,kt,Et,jt,Vt,ae,N;function gt(){Ft=new M0(L),Ft.init(),Vt=new Qg(L,Ft),Ot=new m0(L,Ft,t,Vt),et=new Zg(L,Ft),Ot.reverseDepthBuffer&&d&&et.buffers.depth.setReversed(!0),wt=new w0(L),_t=new Og,T=new Kg(L,Ft,et,_t,Ot,Vt,wt),b=new v0(x),U=new _0(x),j=new Pf(L),ae=new f0(L,j),Z=new b0(L,j,wt,ae),Y=new T0(L,Z,j,wt),kt=new E0(L,Ot,T),at=new g0(_t),Ct=new Fg(x,b,U,Ft,Ot,ae,at),pt=new sv(x,_t),At=new Bg,Xt=new qg(Ft),Nt=new d0(x,b,U,et,Y,p,l),St=new Yg(x,Y,Ot),N=new rv(L,wt,Ot,et),Et=new p0(L,Ft,wt),jt=new S0(L,Ft,wt),wt.programs=Ct.programs,x.capabilities=Ot,x.extensions=Ft,x.properties=_t,x.renderLists=At,x.shadowMap=St,x.state=et,x.info=wt}gt();let X=new Rl(x,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=Ft.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ft.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(V,nt,!1))},this.getSize=function(S){return S.set(V,nt)},this.setSize=function(S,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,nt=F,e.width=Math.floor(S*z),e.height=Math.floor(F*z),G===!0&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(V*z,nt*z).floor()},this.setDrawingBufferSize=function(S,F,G){V=S,nt=F,z=G,e.width=Math.floor(S*G),e.height=Math.floor(F*G),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,F,G,W){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,F,G,W),et.viewport(I.copy($).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(tt)},this.setScissor=function(S,F,G,W){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,F,G,W),et.scissor(D.copy(tt).multiplyScalar(z).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){et.setScissorTest(st=S)},this.setOpaqueSort=function(S){rt=S},this.setTransparentSort=function(S){ct=S},this.getClearColor=function(S){return S.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(S=!0,F=!0,G=!0){let W=0;if(S){let O=!1;if(P!==null){let ht=P.texture.format;O=ht===ic||ht===ec||ht===tc}if(O){let ht=P.texture.type,Tt=ht===Ki||ht===kn||ht===tr||ht===Ss||ht===Kl||ht===Ql,Pt=Nt.getClearColor(),Lt=Nt.getClearAlpha(),zt=Pt.r,qt=Pt.g,Dt=Pt.b;Tt?(f[0]=zt,f[1]=qt,f[2]=Dt,f[3]=Lt,L.clearBufferuiv(L.COLOR,0,f)):(v[0]=zt,v[1]=qt,v[2]=Dt,v[3]=Lt,L.clearBufferiv(L.COLOR,0,v))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),At.dispose(),Xt.dispose(),_t.dispose(),b.dispose(),U.dispose(),Y.dispose(),ae.dispose(),N.dispose(),Ct.dispose(),X.dispose(),X.removeEventListener("sessionstart",mr),X.removeEventListener("sessionend",kc),An.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let S=wt.autoReset,F=St.enabled,G=St.autoUpdate,W=St.needsUpdate,O=St.type;gt(),wt.autoReset=S,St.enabled=F,St.autoUpdate=G,St.needsUpdate=W,St.type=O}function bt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Gt(S){let F=S.target;F.removeEventListener("dispose",Gt),ye(F)}function ye(S){Ce(S),_t.remove(S)}function Ce(S){let F=_t.get(S).programs;F!==void 0&&(F.forEach(function(G){Ct.releaseProgram(G)}),S.isShaderMaterial&&Ct.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,G,W,O,ht){F===null&&(F=mt);let Tt=O.isMesh&&O.matrixWorld.determinant()<0,Pt=xd(S,F,G,W,O);et.setMaterial(W,Tt);let Lt=G.index,zt=1;if(W.wireframe===!0){if(Lt=Z.getWireframeAttribute(G),Lt===void 0)return;zt=2}let qt=G.drawRange,Dt=G.attributes.position,te=qt.start*zt,de=(qt.start+qt.count)*zt;ht!==null&&(te=Math.max(te,ht.start*zt),de=Math.min(de,(ht.start+ht.count)*zt)),Lt!==null?(te=Math.max(te,0),de=Math.min(de,Lt.count)):Dt!=null&&(te=Math.max(te,0),de=Math.min(de,Dt.count));let fe=de-te;if(fe<0||fe===1/0)return;ae.setup(O,W,Pt,G,Lt);let ni,ne=Et;if(Lt!==null&&(ni=j.get(Lt),ne=jt,ne.setIndex(ni)),O.isMesh)W.wireframe===!0?(et.setLineWidth(W.wireframeLinewidth*It()),ne.setMode(L.LINES)):ne.setMode(L.TRIANGLES);else if(O.isLine){let Ut=W.linewidth;Ut===void 0&&(Ut=1),et.setLineWidth(Ut*It()),O.isLineSegments?ne.setMode(L.LINES):O.isLineLoop?ne.setMode(L.LINE_LOOP):ne.setMode(L.LINE_STRIP)}else O.isPoints?ne.setMode(L.POINTS):O.isSprite&&ne.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ne.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))ne.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ut=O._multiDrawStarts,Hi=O._multiDrawCounts,se=O._multiDrawCount,Mi=Lt?j.get(Lt).bytesPerElement:1,Kn=_t.get(W).currentProgram.getUniforms();for(let oi=0;oi<se;oi++)Kn.setValue(L,"_gl_DrawID",oi),ne.render(Ut[oi]/Mi,Hi[oi])}else if(O.isInstancedMesh)ne.renderInstances(te,fe,O.count);else if(G.isInstancedBufferGeometry){let Ut=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Hi=Math.min(G.instanceCount,Ut);ne.renderInstances(te,fe,Hi)}else ne.render(te,fe)};function ee(S,F,G){S.transparent===!0&&S.side===Me&&S.forceSinglePass===!1?(S.side=be,S.needsUpdate=!0,vr(S,F,G),S.side=Ye,S.needsUpdate=!0,vr(S,F,G),S.side=Me):vr(S,F,G)}this.compile=function(S,F,G=null){G===null&&(G=S),m=Xt.get(G),m.init(F),y.push(m),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),S!==G&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();let W=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ht=O.material;if(ht)if(Array.isArray(ht))for(let Tt=0;Tt<ht.length;Tt++){let Pt=ht[Tt];ee(Pt,G,O),W.add(Pt)}else ee(ht,G,O),W.add(ht)}),y.pop(),m=null,W},this.compileAsync=function(S,F,G=null){let W=this.compile(S,F,G);return new Promise(O=>{function ht(){if(W.forEach(function(Tt){_t.get(Tt).currentProgram.isReady()&&W.delete(Tt)}),W.size===0){O(S);return}setTimeout(ht,10)}Ft.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let qe=null;function ai(S){qe&&qe(S)}function mr(){An.stop()}function kc(){An.start()}let An=new gu;An.setAnimationLoop(ai),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(S){qe=S,X.setAnimationLoop(S),S===null?An.stop():An.start()},X.addEventListener("sessionstart",mr),X.addEventListener("sessionend",kc),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,F,P),m=Xt.get(S,y.length),m.init(F),y.push(m),dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B.setFromProjectionMatrix(dt),lt=this.localClippingEnabled,Q=at.init(this.clippingPlanes,lt),g=At.get(S,_.length),g.init(),_.push(g),X.enabled===!0&&X.isPresenting===!0){let ht=x.xr.getDepthSensingMesh();ht!==null&&ja(ht,F,-1/0,x.sortObjects)}ja(S,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(rt,ct),Rt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Rt&&Nt.addToRenderList(g,S),this.info.render.frame++,Q===!0&&at.beginShadows();let G=m.state.shadowsArray;St.render(G,S,F),Q===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,O=g.transmissive;if(m.setupLights(),F.isArrayCamera){let ht=F.cameras;if(O.length>0)for(let Tt=0,Pt=ht.length;Tt<Pt;Tt++){let Lt=ht[Tt];Hc(W,O,S,Lt)}Rt&&Nt.render(S);for(let Tt=0,Pt=ht.length;Tt<Pt;Tt++){let Lt=ht[Tt];Bc(g,S,Lt,Lt.viewport)}}else O.length>0&&Hc(W,O,S,F),Rt&&Nt.render(S),Bc(g,S,F);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(x,S,F),ae.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],Q===!0&&at.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function ja(S,F,G,W){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||B.intersectsSprite(S)){W&&ut.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);let Tt=Y.update(S),Pt=S.material;Pt.visible&&g.push(S,Tt,Pt,G,ut.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||B.intersectsObject(S))){let Tt=Y.update(S),Pt=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ut.copy(S.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),ut.copy(Tt.boundingSphere.center)),ut.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(Pt)){let Lt=Tt.groups;for(let zt=0,qt=Lt.length;zt<qt;zt++){let Dt=Lt[zt],te=Pt[Dt.materialIndex];te&&te.visible&&g.push(S,Tt,te,G,ut.z,Dt)}}else Pt.visible&&g.push(S,Tt,Pt,G,ut.z,null)}}let ht=S.children;for(let Tt=0,Pt=ht.length;Tt<Pt;Tt++)ja(ht[Tt],F,G,W)}function Bc(S,F,G,W){let O=S.opaque,ht=S.transmissive,Tt=S.transparent;m.setupLightsView(G),Q===!0&&at.setGlobalState(x.clippingPlanes,G),W&&et.viewport(I.copy(W)),O.length>0&&gr(O,F,G),ht.length>0&&gr(ht,F,G),Tt.length>0&&gr(Tt,F,G),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Hc(S,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new ti(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Ti:Ki,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let ht=m.state.transmissionRenderTarget[W.id],Tt=W.viewport||I;ht.setSize(Tt.z,Tt.w);let Pt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(H),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Rt&&Nt.render(G);let Lt=x.toneMapping;x.toneMapping=Pi;let zt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),Q===!0&&at.setGlobalState(x.clippingPlanes,W),gr(S,G,W),T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Dt=0,te=F.length;Dt<te;Dt++){let de=F[Dt],fe=de.object,ni=de.geometry,ne=de.material,Ut=de.group;if(ne.side===Me&&fe.layers.test(W.layers)){let Hi=ne.side;ne.side=be,ne.needsUpdate=!0,zc(fe,G,W,ni,ne,Ut),ne.side=Hi,ne.needsUpdate=!0,qt=!0}}qt===!0&&(T.updateMultisampleRenderTarget(ht),T.updateRenderTargetMipmap(ht))}x.setRenderTarget(Pt),x.setClearColor(H,q),zt!==void 0&&(W.viewport=zt),x.toneMapping=Lt}function gr(S,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ht=S.length;O<ht;O++){let Tt=S[O],Pt=Tt.object,Lt=Tt.geometry,zt=W===null?Tt.material:W,qt=Tt.group;Pt.layers.test(G.layers)&&zc(Pt,F,G,Lt,zt,qt)}}function zc(S,F,G,W,O,ht){S.onBeforeRender(x,F,G,W,O,ht),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(x,F,G,W,S,ht),O.transparent===!0&&O.side===Me&&O.forceSinglePass===!1?(O.side=be,O.needsUpdate=!0,x.renderBufferDirect(G,F,W,O,S,ht),O.side=Ye,O.needsUpdate=!0,x.renderBufferDirect(G,F,W,O,S,ht),O.side=Me):x.renderBufferDirect(G,F,W,O,S,ht),S.onAfterRender(x,F,G,W,O,ht)}function vr(S,F,G){F.isScene!==!0&&(F=mt);let W=_t.get(S),O=m.state.lights,ht=m.state.shadowsArray,Tt=O.state.version,Pt=Ct.getParameters(S,O.state,ht,F,G),Lt=Ct.getProgramCacheKey(Pt),zt=W.programs;W.environment=S.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(S.isMeshStandardMaterial?U:b).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,zt===void 0&&(S.addEventListener("dispose",Gt),zt=new Map,W.programs=zt);let qt=zt.get(Lt);if(qt!==void 0){if(W.currentProgram===qt&&W.lightsStateVersion===Tt)return Gc(S,Pt),qt}else Pt.uniforms=Ct.getUniforms(S),S.onBeforeCompile(Pt,x),qt=Ct.acquireProgram(Pt,Lt),zt.set(Lt,qt),W.uniforms=Pt.uniforms;let Dt=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Dt.clippingPlanes=at.uniform),Gc(S,Pt),W.needsLights=_d(S),W.lightsStateVersion=Tt,W.needsLights&&(Dt.ambientLightColor.value=O.state.ambient,Dt.lightProbe.value=O.state.probe,Dt.directionalLights.value=O.state.directional,Dt.directionalLightShadows.value=O.state.directionalShadow,Dt.spotLights.value=O.state.spot,Dt.spotLightShadows.value=O.state.spotShadow,Dt.rectAreaLights.value=O.state.rectArea,Dt.ltc_1.value=O.state.rectAreaLTC1,Dt.ltc_2.value=O.state.rectAreaLTC2,Dt.pointLights.value=O.state.point,Dt.pointLightShadows.value=O.state.pointShadow,Dt.hemisphereLights.value=O.state.hemi,Dt.directionalShadowMap.value=O.state.directionalShadowMap,Dt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Dt.spotShadowMap.value=O.state.spotShadowMap,Dt.spotLightMatrix.value=O.state.spotLightMatrix,Dt.spotLightMap.value=O.state.spotLightMap,Dt.pointShadowMap.value=O.state.pointShadowMap,Dt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=qt,W.uniformsList=null,qt}function Vc(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=vs.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Gc(S,F){let G=_t.get(S);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function xd(S,F,G,W,O){F.isScene!==!0&&(F=mt),T.resetTextureUnits();let ht=F.fog,Tt=W.isMeshStandardMaterial?F.environment:null,Pt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:bn,Lt=(W.isMeshStandardMaterial?U:b).get(W.envMap||Tt),zt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Dt=!!G.morphAttributes.position,te=!!G.morphAttributes.normal,de=!!G.morphAttributes.color,fe=Pi;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(fe=x.toneMapping);let ni=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ne=ni!==void 0?ni.length:0,Ut=_t.get(W),Hi=m.state.lights;if(Q===!0&&(lt===!0||S!==M)){let pi=S===M&&W.id===w;at.setState(W,S,pi)}let se=!1;W.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Hi.state.version||Ut.outputColorSpace!==Pt||O.isBatchedMesh&&Ut.batching===!1||!O.isBatchedMesh&&Ut.batching===!0||O.isBatchedMesh&&Ut.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ut.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ut.instancing===!1||!O.isInstancedMesh&&Ut.instancing===!0||O.isSkinnedMesh&&Ut.skinning===!1||!O.isSkinnedMesh&&Ut.skinning===!0||O.isInstancedMesh&&Ut.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ut.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ut.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ut.instancingMorph===!1&&O.morphTexture!==null||Ut.envMap!==Lt||W.fog===!0&&Ut.fog!==ht||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==at.numPlanes||Ut.numIntersection!==at.numIntersection)||Ut.vertexAlphas!==zt||Ut.vertexTangents!==qt||Ut.morphTargets!==Dt||Ut.morphNormals!==te||Ut.morphColors!==de||Ut.toneMapping!==fe||Ut.morphTargetsCount!==ne)&&(se=!0):(se=!0,Ut.__version=W.version);let Mi=Ut.currentProgram;se===!0&&(Mi=vr(W,F,O));let Kn=!1,oi=!1,Vs=!1,pe=Mi.getUniforms(),Ci=Ut.uniforms;if(et.useProgram(Mi.program)&&(Kn=!0,oi=!0,Vs=!0),W.id!==w&&(w=W.id,oi=!0),Kn||M!==S){et.buffers.depth.getReversed()?(it.copy(S.projectionMatrix),uf(it),df(it),pe.setValue(L,"projectionMatrix",it)):pe.setValue(L,"projectionMatrix",S.projectionMatrix),pe.setValue(L,"viewMatrix",S.matrixWorldInverse);let on=pe.map.cameraPosition;on!==void 0&&on.setValue(L,ot.setFromMatrixPosition(S.matrixWorld)),Ot.logarithmicDepthBuffer&&pe.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pe.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,oi=!0,Vs=!0)}if(O.isSkinnedMesh){pe.setOptional(L,O,"bindMatrix"),pe.setOptional(L,O,"bindMatrixInverse");let pi=O.skeleton;pi&&(pi.boneTexture===null&&pi.computeBoneTexture(),pe.setValue(L,"boneTexture",pi.boneTexture,T))}O.isBatchedMesh&&(pe.setOptional(L,O,"batchingTexture"),pe.setValue(L,"batchingTexture",O._matricesTexture,T),pe.setOptional(L,O,"batchingIdTexture"),pe.setValue(L,"batchingIdTexture",O._indirectTexture,T),pe.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&pe.setValue(L,"batchingColorTexture",O._colorsTexture,T));let Gs=G.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&kt.update(O,G,Mi),(oi||Ut.receiveShadow!==O.receiveShadow)&&(Ut.receiveShadow=O.receiveShadow,pe.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ci.envMap.value=Lt,Ci.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Ci.envMapIntensity.value=F.environmentIntensity),oi&&(pe.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&yd(Ci,Vs),ht&&W.fog===!0&&pt.refreshFogUniforms(Ci,ht),pt.refreshMaterialUniforms(Ci,W,z,nt,m.state.transmissionRenderTarget[S.id]),vs.upload(L,Vc(Ut),Ci,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(vs.upload(L,Vc(Ut),Ci,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pe.setValue(L,"center",O.center),pe.setValue(L,"modelViewMatrix",O.modelViewMatrix),pe.setValue(L,"normalMatrix",O.normalMatrix),pe.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let pi=W.uniformsGroups;for(let on=0,ln=pi.length;on<ln;on++){let Wc=pi[on];N.update(Wc,Mi),N.bind(Wc,Mi)}}return Mi}function yd(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function _d(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,F,G){_t.get(S.texture).__webglTexture=F,_t.get(S.depthTexture).__webglTexture=G;let W=_t.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){let G=_t.get(S);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,G=0){P=S,E=F,A=G;let W=!0,O=null,ht=!1,Tt=!1;if(S){let Lt=_t.get(S);if(Lt.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Lt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Lt.__hasExternalTextures)T.rebindTextures(S,_t.get(S.texture).__webglTexture,_t.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Dt=S.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&_t.has(Dt)&&(S.width!==Dt.image.width||S.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let zt=S.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Tt=!0);let qt=_t.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qt[F])?O=qt[F][G]:O=qt[F],ht=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?O=_t.get(S).__webglMultisampledFramebuffer:Array.isArray(qt)?O=qt[G]:O=qt,I.copy(S.viewport),D.copy(S.scissor),k=S.scissorTest}else I.copy($).multiplyScalar(z).floor(),D.copy(tt).multiplyScalar(z).floor(),k=st;if(et.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&et.drawBuffers(S,O),et.viewport(I),et.scissor(D),et.setScissorTest(k),ht){let Lt=_t.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Lt.__webglTexture,G)}else if(Tt){let Lt=_t.get(S.texture),zt=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.__webglTexture,G||0,zt)}w=-1},this.readRenderTargetPixels=function(S,F,G,W,O,ht,Tt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=_t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){et.bindFramebuffer(L.FRAMEBUFFER,Pt);try{let Lt=S.texture,zt=Lt.format,qt=Lt.type;if(!Ot.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-W&&G>=0&&G<=S.height-O&&L.readPixels(F,G,W,O,Vt.convert(zt),Vt.convert(qt),ht)}finally{let Lt=P!==null?_t.get(P).__webglFramebuffer:null;et.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(S,F,G,W,O,ht,Tt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=_t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){let Lt=S.texture,zt=Lt.format,qt=Lt.type;if(!Ot.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-W&&G>=0&&G<=S.height-O){et.bindFramebuffer(L.FRAMEBUFFER,Pt);let Dt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Dt),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),L.readPixels(F,G,W,O,Vt.convert(zt),Vt.convert(qt),0);let te=P!==null?_t.get(P).__webglFramebuffer:null;et.bindFramebuffer(L.FRAMEBUFFER,te);let de=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await hf(L,de,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Dt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.deleteBuffer(Dt),L.deleteSync(de),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,G=0){S.isTexture!==!0&&(js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);let W=Math.pow(2,-G),O=Math.floor(S.image.width*W),ht=Math.floor(S.image.height*W),Tt=F!==null?F.x:0,Pt=F!==null?F.y:0;T.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,Tt,Pt,O,ht),et.unbindTexture()},this.copyTextureToTexture=function(S,F,G=null,W=null,O=0){S.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let ht,Tt,Pt,Lt,zt,qt,Dt,te,de,fe=S.isCompressedTexture?S.mipmaps[O]:S.image;G!==null?(ht=G.max.x-G.min.x,Tt=G.max.y-G.min.y,Pt=G.isBox3?G.max.z-G.min.z:1,Lt=G.min.x,zt=G.min.y,qt=G.isBox3?G.min.z:0):(ht=fe.width,Tt=fe.height,Pt=fe.depth||1,Lt=0,zt=0,qt=0),W!==null?(Dt=W.x,te=W.y,de=W.z):(Dt=0,te=0,de=0);let ni=Vt.convert(F.format),ne=Vt.convert(F.type),Ut;F.isData3DTexture?(T.setTexture3D(F,0),Ut=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),Ut=L.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),Ut=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let Hi=L.getParameter(L.UNPACK_ROW_LENGTH),se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mi=L.getParameter(L.UNPACK_SKIP_PIXELS),Kn=L.getParameter(L.UNPACK_SKIP_ROWS),oi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,fe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,fe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);let Vs=S.isDataArrayTexture||S.isData3DTexture,pe=F.isDataArrayTexture||F.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Ci=_t.get(S),Gs=_t.get(F),pi=_t.get(Ci.__renderTarget),on=_t.get(Gs.__renderTarget);et.bindFramebuffer(L.READ_FRAMEBUFFER,pi.__webglFramebuffer),et.bindFramebuffer(L.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let ln=0;ln<Pt;ln++)Vs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.get(S).__webglTexture,O,qt+ln),S.isDepthTexture?(pe&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.get(F).__webglTexture,O,de+ln),L.blitFramebuffer(Lt,zt,ht,Tt,Dt,te,ht,Tt,L.DEPTH_BUFFER_BIT,L.NEAREST)):pe?L.copyTexSubImage3D(Ut,O,Dt,te,de+ln,Lt,zt,ht,Tt):L.copyTexSubImage2D(Ut,O,Dt,te,de+ln,Lt,zt,ht,Tt);et.bindFramebuffer(L.READ_FRAMEBUFFER,null),et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pe?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Ut,O,Dt,te,de,ht,Tt,Pt,ni,ne,fe.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Ut,O,Dt,te,de,ht,Tt,Pt,ni,fe.data):L.texSubImage3D(Ut,O,Dt,te,de,ht,Tt,Pt,ni,ne,fe):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Dt,te,ht,Tt,ni,ne,fe.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Dt,te,fe.width,fe.height,ni,fe.data):L.texSubImage2D(L.TEXTURE_2D,O,Dt,te,ht,Tt,ni,ne,fe);L.pixelStorei(L.UNPACK_ROW_LENGTH,Hi),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,oi),O===0&&F.generateMipmaps&&L.generateMipmap(Ut),et.unbindTexture()},this.copyTextureToTexture3D=function(S,F,G=null,W=null,O=0){return S.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,S=arguments[2],F=arguments[3],O=arguments[4]||0),js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,G,W,O)},this.initRenderTarget=function(S){_t.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),et.unbindTexture()},this.resetState=function(){E=0,A=0,P=null,et.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var Qi=class extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var oa=class extends ri{constructor(t=null,e=1,i=1,n,r,a,o,l,c=Fe,h=Fe,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cl=class extends _n{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xh=new ie,Il=new Qr,Br=new yn,Hr=new C,Mn=class extends ei{constructor(t=new me,e=new Cl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(n),Br.radius+=r,t.ray.intersectsSphere(Br)===!1)return;Xh.copy(n).invert(),Il.copy(t.ray).applyMatrix4(Xh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let f=d,v=p;f<v;f++){let g=c.getX(f);Hr.fromBufferAttribute(u,g),$h(Hr,g,l,n,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,v=p;f<v;f++)Hr.fromBufferAttribute(u,f),$h(Hr,f,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $h(s,t,e,i,n,r,a){let o=Il.distanceSqToPoint(s);if(o<e){let l=new C;Il.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Cs=class extends ri{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],d=i[n+1]-h,p=(a-h)/d;return(n+p)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new xt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new C,n=[],r=[],a=[],o=new C,l=new ie;for(let p=0;p<=t;p++){let f=p/t;n[p]=this.getTangentAt(f,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(He(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(n[p],r[p])}if(e===!0){let p=Math.acos(He(r[0].dot(r[t]),-1,1));p/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],r[f])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},nr=class extends vi{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new xt){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pl=class extends nr{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sc(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,n(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var zr=new C,Ao=new sc,Ro=new sc,Co=new sc,Ll=class extends vi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new C){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(zr.subVectors(n[0],n[1]).add(n[0]),c=zr);let u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(zr.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=zr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),f<1e-4&&(f=v),g<1e-4&&(g=v),Ao.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,f,v,g),Ro.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,f,v,g),Co.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,f,v,g)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ro.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Co.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Ao.calc(l),Ro.calc(l),Co.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new C().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yh(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function av(s,t){let e=1-s;return e*e*t}function ov(s,t){return 2*(1-s)*s*t}function lv(s,t){return s*s*t}function Ks(s,t,e,i){return av(s,t)+ov(s,e)+lv(s,i)}function cv(s,t){let e=1-s;return e*e*e*t}function hv(s,t){let e=1-s;return 3*e*e*s*t}function uv(s,t){return 3*(1-s)*s*s*t}function dv(s,t){return s*s*s*t}function Qs(s,t,e,i,n){return cv(s,t)+hv(s,e)+uv(s,i)+dv(s,n)}var la=class extends vi{constructor(t=new xt,e=new xt,i=new xt,n=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new xt){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qs(t,n.x,r.x,a.x,o.x),Qs(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dl=class extends vi{constructor(t=new C,e=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new C){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qs(t,n.x,r.x,a.x,o.x),Qs(t,n.y,r.y,a.y,o.y),Qs(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ca=class extends vi{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nl=class extends vi{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends vi{constructor(t=new xt,e=new xt,i=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new xt){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Ks(t,n.x,r.x,a.x),Ks(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ul=class extends vi{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Ks(t,n.x,r.x,a.x),Ks(t,n.y,r.y,a.y),Ks(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ua=class extends vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Yh(o,l.x,c.x,h.x,u.x),Yh(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new xt().fromArray(n))}return this}},jh=Object.freeze({__proto__:null,ArcCurve:Pl,CatmullRomCurve3:Ll,CubicBezierCurve:la,CubicBezierCurve3:Dl,EllipseCurve:nr,LineCurve:ca,LineCurve3:Nl,QuadraticBezierCurve:ha,QuadraticBezierCurve3:Ul,SplineCurve:ua}),Fl=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new jh[n.type]().fromJSON(n))}return this}},Ol=class extends Fl{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ca(this.currentPoint.clone(),new xt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new ha(this.currentPoint.clone(),new xt(t,e),new xt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new la(this.currentPoint.clone(),new xt(t,e),new xt(i,n),new xt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ua(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){let c=new nr(t,e,i,n,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Di=class s extends me{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=He(n,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new xt,p=new C,f=new C,v=new C,g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,p.x=m*1,p.y=-g,p.z=m*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,p.x=m*1,p.y=-g,p.z=m*0,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let _=0;_<=e;_++){let y=i+_*h*n,x=Math.sin(y),R=Math.cos(y);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*x,u.y=t[E].y,u.z=t[E].x*R,a.push(u.x,u.y,u.z),d.x=_/e,d.y=E/(t.length-1),o.push(d.x,d.y);let A=l[3*E+0]*x,P=l[3*E+1],w=l[3*E+0]*R;c.push(A,P,w)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let x=y+_*t.length,R=x,E=x+t.length,A=x+t.length+1,P=x+1;r.push(R,E,P),r.push(A,P,E)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},da=class s extends Di{constructor(t=1,e=1,i=4,n=8){let r=new Ol;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},sr=class s extends me{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new xt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=i+u/e*n;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ee=class s extends me{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],p=[],f=0,v=[],g=i/2,m=0;_(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function _(){let x=new C,R=new C,E=0,A=(e-t)/i;for(let P=0;P<=r;P++){let w=[],M=P/r,I=M*(e-t)+t;for(let D=0;D<=n;D++){let k=D/n,H=k*l+o,q=Math.sin(H),V=Math.cos(H);R.x=I*q,R.y=-M*i+g,R.z=I*V,u.push(R.x,R.y,R.z),x.set(q,A,V).normalize(),d.push(x.x,x.y,x.z),p.push(k,1-M),w.push(f++)}v.push(w)}for(let P=0;P<n;P++)for(let w=0;w<r;w++){let M=v[w][P],I=v[w+1][P],D=v[w+1][P+1],k=v[w][P+1];(t>0||w!==0)&&(h.push(M,I,k),E+=3),(e>0||w!==r-1)&&(h.push(I,D,k),E+=3)}c.addGroup(m,E,0),m+=E}function y(x){let R=f,E=new xt,A=new C,P=0,w=x===!0?t:e,M=x===!0?1:-1;for(let D=1;D<=n;D++)u.push(0,g*M,0),d.push(0,M,0),p.push(.5,.5),f++;let I=f;for(let D=0;D<=n;D++){let H=D/n*l+o,q=Math.cos(H),V=Math.sin(H);A.x=w*V,A.y=g*M,A.z=w*q,u.push(A.x,A.y,A.z),d.push(0,M,0),E.x=q*.5+.5,E.y=V*.5*M+.5,p.push(E.x,E.y),f++}for(let D=0;D<n;D++){let k=R+D,H=I+D;x===!0?h.push(H,H+1,k):h.push(H+1,H,k),P+=3}c.addGroup(m,P,x===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fa=class s extends Ee{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var rr=class s extends me{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/n,p=new C,f=new xt;for(let v=0;v<=n;v++){for(let g=0;g<=i;g++){let m=r+g/i*a;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/e+1)/2,f.y=(p.y/e+1)/2,h.push(f.x,f.y)}u+=d}for(let v=0;v<n;v++){let g=v*(i+1);for(let m=0;m<i;m++){let _=m+g,y=_,x=_+i+1,R=_+i+2,E=_+1;o.push(y,x,E),o.push(x,R,E)}}this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ke=class s extends me{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,p=[],f=[],v=[],g=[];for(let m=0;m<=i;m++){let _=[],y=m/i,x=0;m===0&&a===0?x=.5/e:m===i&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){let E=R/e;u.x=-t*Math.cos(n+E*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(n+E*r)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(E+x,1-y),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let y=h[m][_+1],x=h[m][_],R=h[m+1][_],E=h[m+1][_+1];(m!==0||a>0)&&p.push(y,x,E),(m!==i-1||l<Math.PI)&&p.push(x,R,E)}this.setIndex(p),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zn=class s extends me{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let v=f/n*r,g=p/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let v=(n+1)*p+f-1,g=(n+1)*(p-1)+f-1,m=(n+1)*(p-1)+f,_=(n+1)*p+f;a.push(v,g,_),a.push(g,m,_)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ve=class extends _n{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function fv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Is=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kl=class extends Is{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jc:r=t,o=2*e-i;break;case Kc:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:a=t,l=2*i-e;break;case Kc:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-e)/(n-e),v=f*f,g=v*f,m=-d*g+2*d*v-d*f,_=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*f+1,y=(-1-p)*g+(1.5+p)*v+.5*f,x=p*g-p*v;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+_*a[c+R]+y*a[l+R]+x*a[u+R];return r}},Bl=class extends Is{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Hl=class extends Is{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ei=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Yr:e=this.InterpolantFactoryMethodDiscrete;break;case fl:e=this.InterpolantFactoryMethodLinear;break;case Ja:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return Ja}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&fv(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ja,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,p=u+i;for(let f=0;f!==i;++f){let v=e[u+f];if(v!==e[d+f]||v!==e[p+f]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let p=0;p!==i;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=fl;var Vn=class extends Ei{constructor(t,e,i){super(t,e,i)}};Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=Yr;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends Ei{};zl.prototype.ValueTypeName="color";var Vl=class extends Ei{};Vl.prototype.ValueTypeName="number";var Gl=class extends Is{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ie.slerpFlat(r,0,a,c-o,a,c,l);return r}},pa=class extends Ei{InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}};pa.prototype.ValueTypeName="quaternion";pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Ei{constructor(t,e,i){super(t,e,i)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=Yr;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends Ei{};Wl.prototype.ValueTypeName="vector";var ql=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},pv=new ql,Xl=class{constructor(t){this.manager=t!==void 0?t:pv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ma=class extends ei{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Io=new ie,Zh=new C,Jh=new C,$l=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hn,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Yl=class extends $l{constructor(){super(new As(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends ma{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.target=new ei,this.shadow=new Yl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ga=class extends ma{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var rc="\\[\\]\\.:\\/",mv=new RegExp("["+rc+"]","g"),ac="[^"+rc+"]",gv="[^"+rc.replace("\\.","")+"]",vv=/((?:WC+[\/:])*)/.source.replace("WC",ac),xv=/(WCOD+)?/.source.replace("WCOD",gv),yv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),_v=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),Mv=new RegExp("^"+vv+xv+yv+_v+"$"),bv=["material","materials","bones","map"],jl=class{constructor(t,e,i){let n=i||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},_e=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mv,"")}static parseTrackName(t){let e=Mv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);bv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=jl;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var _a=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Sv=`
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
`,wv=`
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
`,Ev=`
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
`,Tv=`
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
`;function Av(){let s=new me;return s.setAttribute("position",new re([-1,-1,0,3,-1,0,-1,3,0],3)),s.setAttribute("uv",new re([0,0,2,0,0,2],2)),s}var Ma=class{constructor(t){this.renderer=t,this.scene=new Qi,this.cam=new As(-1,1,1,-1,0,1),this.quad=new yt(Av()),this.quad.frustumCulled=!1,this.scene.add(this.quad);let e={type:Ti,format:ze,minFilter:we,magFilter:we,depthBuffer:!1};this.levels=6,this.mips=[];for(let i=0;i<this.levels;i++)this.mips.push(new ti(4,4,e));this.adapt=[new ti(1,1,{...e,type:gi,minFilter:Fe,magFilter:Fe}),new ti(1,1,{...e,type:gi,minFilter:Fe,magFilter:Fe})],this.adaptIndex=0,this.resetAdapt=!0,this.downMat=new Yt({vertexShader:_a,fragmentShader:Sv,depthTest:!1,depthWrite:!1,uniforms:{tSrc:{value:null},uTexel:{value:new xt},uClamp:{value:6e4}}}),this.upMat=new Yt({vertexShader:_a,fragmentShader:wv,depthTest:!1,depthWrite:!1,blending:Re,blendSrc:ce,blendDst:ce,blendEquation:Yi,uniforms:{tSrc:{value:null},uTexel:{value:new xt},uWeight:{value:1}}}),this.adaptMat=new Yt({vertexShader:_a,fragmentShader:Ev,depthTest:!1,depthWrite:!1,uniforms:{tLum:{value:null},tPrev:{value:null},uExposure:{value:1},uDt:{value:.016},uMaxAdapt:{value:6},uReset:{value:1}}}),this.compMat=new Yt({vertexShader:_a,fragmentShader:Tv,depthTest:!1,depthWrite:!1,uniforms:{tHdr:{value:null},tBloom:{value:null},tAdapt:{value:null},uExposure:{value:1},uBloom:{value:.05},uTime:{value:0},uFade:{value:0},uFadeColor:{value:new Ht(0,0,0)},uFlash:{value:0},uAberration:{value:.0015},uNoise:{value:.35},uRes:{value:new xt(1,1)}}}),this.exposure=1,this.bloom=.04,this.fade=0,this.flash=0,this.maxAdapt=6}setSize(t,e){let i=Math.max(1,t>>1),n=Math.max(1,e>>1);for(let r of this.mips)r.setSize(i,n),i=Math.max(1,i>>1),n=Math.max(1,n>>1);this.compMat.uniforms.uRes.value.set(t,e)}pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.cam)}render(t,e,i){let n=this.renderer,r=n.autoClear;n.autoClear=!1;let a=t.texture,o=t.width,l=t.height;for(let d=0;d<this.levels;d++){let p=this.mips[d];this.downMat.uniforms.tSrc.value=a,this.downMat.uniforms.uTexel.value.set(1/o,1/l),this.downMat.uniforms.uClamp.value=d===0?70/Math.max(this.exposure,1e-6):1e9,n.setRenderTarget(p),n.clear(!0,!1,!1),this.pass(this.downMat,p),a=p.texture,o=p.width,l=p.height}let c=this.adapt[this.adaptIndex],h=this.adapt[1-this.adaptIndex];this.adaptMat.uniforms.tLum.value=this.mips[3].texture,this.adaptMat.uniforms.tPrev.value=c.texture,this.adaptMat.uniforms.uExposure.value=this.exposure,this.adaptMat.uniforms.uDt.value=e,this.adaptMat.uniforms.uMaxAdapt.value=this.maxAdapt,this.adaptMat.uniforms.uReset.value=this.resetAdapt?1:0,this.resetAdapt=!1,this.pass(this.adaptMat,h),this.adaptIndex=1-this.adaptIndex;for(let d=this.levels-1;d>0;d--){let p=this.mips[d],f=this.mips[d-1];this.upMat.uniforms.tSrc.value=p.texture,this.upMat.uniforms.uTexel.value.set(1/p.width,1/p.height),this.upMat.uniforms.uWeight.value=.72,this.pass(this.upMat,f)}let u=this.compMat.uniforms;u.tHdr.value=t.texture,u.tBloom.value=this.mips[0].texture,u.tAdapt.value=h.texture,u.uExposure.value=this.exposure,u.uBloom.value=this.bloom/this.levels*1.6,u.uTime.value=i,u.uFade.value=this.fade,u.uFlash.value=this.flash,n.setRenderTarget(null),this.pass(this.compMat,null),n.autoClear=r}};var Ni=`
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
`,ba=`
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
`,Sa=`
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
`;var Ls=`
uniform mat3 uCamRot;
uniform vec2 uTanFov;
uniform vec2 uRes;
vec3 viewRay() {
  vec2 ndc = gl_FragCoord.xy / uRes * 2.0 - 1.0;
  return normalize(uCamRot * vec3(ndc.x * uTanFov.x, ndc.y * uTanFov.y, -1.0));
}
`;function Ui(...s){let t=2166136261^s.length;for(let e of s)e=Math.floor(e)|0,t=Math.imul(t^e&65535,16777619),t=Math.imul(t^e>>>16,16777619),t^=t>>>13,t=Math.imul(t,1540483477),t^=t>>>15;return t>>>0}var ge=class{constructor(t){this.s=t>>>0||2654435769}next(){let t=this.s=this.s+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return t+Math.floor((e-t+1)*this.next())}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}gauss(){let t=Math.max(1e-12,this.next());return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*this.next())}logRange(t,e){return Math.exp(this.range(Math.log(t),Math.log(e)))}poisson(t){if(t>30)return Math.max(0,Math.round(t+Math.sqrt(t)*this.gauss()));let e=Math.exp(-t),i=0,n=1;do i++,n*=this.next();while(n>e);return i-1}weighted(t,e="w"){let i=0;for(let r of t)i+=r[e];let n=this.next()*i;for(let r of t)if(n-=r[e],n<=0)return r;return t[t.length-1]}};function Wn(s,t,e,i){let n=(s-t)/(s<t?e:i);return Math.exp(-.5*n*n)}function Rv(s){return 1.056*Wn(s,599.8,37.9,31)+.362*Wn(s,442,16,26.7)-.065*Wn(s,501.1,20.4,26.2)}function Cv(s){return .821*Wn(s,568.8,46.9,40.5)+.286*Wn(s,530.9,16.3,31.1)}function Iv(s){return 1.217*Wn(s,437,11.8,36)+.681*Wn(s,459,26,13.8)}var oc=new Map;function cr(s){let t=Math.round(s/25);if(oc.has(t))return oc.get(t).slice();let e=0,i=0,n=0;for(let h=380;h<=780;h+=5){let u=h*1e-9,d=1/(Math.pow(u,5)*(Math.exp(.014387769/(u*s))-1));e+=d*Rv(h),i+=d*Cv(h),n+=d*Iv(h)}let r=3.2406*e-1.5372*i-.4986*n,a=-.9689*e+1.8758*i+.0415*n,o=.0557*e-.204*i+1.057*n;r=Math.max(r,0),a=Math.max(a,0),o=Math.max(o,0);let l=Math.max(r,a,o)||1,c=[r/l,a/l,o/l];return oc.set(t,c),c.slice()}function lc(s){return s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4)}function ui(s){let t=parseInt(s.replace("#",""),16);return[lc((t>>16&255)/255),lc((t>>8&255)/255),lc((t&255)/255)]}function cc(s,t,e){return[s[0]+(t[0]-s[0])*e,s[1]+(t[1]-s[1])*e,s[2]+(t[2]-s[2])*e]}function wa(s,t){return[s[0]*t,s[1]*t,s[2]*t]}var Sn=6674e-14,hc=94607e11,ve=149597870700,qn=31557600,Ds=86400,Mu=6957e5,bu=1989e27;var wn=6371e3,De=5972e21,Xn=69911e3,$n=1898e24,ue=(s,t,e)=>s<t?t:s>e?e:s;var uc=(s,t,e)=>{let i=ue((e-s)/(t-s),0,1);return i*i*(3-2*i)};function xi(s){let t=Math.abs(s);return t<1e3?`${t.toFixed(0)} m`:t<1e6?`${(t/1e3).toFixed(t<1e4?2:1)} km`:t<.05*ve?`${Math.round(t/1e3).toLocaleString("en-US")} km`:t<.2*hc?`${(t/ve).toFixed(t<10*ve?2:1)} AU`:`${(t/hc).toFixed(2)} ly`}function tn(s){let t=Math.abs(s);return t<1e3?`${t.toFixed(t<10?1:0)} m/s`:t<.01*299792458?`${(t/1e3).toFixed(t<1e4?2:1)} km/s`:t>=1e4*299792458?`${Math.round(t/299792458).toLocaleString("en-US")} c`:`${(t/299792458).toFixed(t<10*299792458?2:t<100*299792458?1:0)} c`}function Su(s){return s<60?`${s.toFixed(0)} s`:s<3600?`${(s/60).toFixed(0)} min`:s<2*Ds?`${(s/3600).toFixed(1)} h`:s<qn?`${(s/Ds).toFixed(1)} days`:`${(s/qn).toFixed(2)} yr`}var Pv=["","","b","br","c","d","dr","f","g","h","k","kh","l","m","n","p","r","s","sh","st","t","th","tr","v","z","ess","or","al","ul","y","w","sk","vh"],Lv=["a","a","e","e","i","o","o","u","ae","ei","ia","io","au","y"],Dv=["","","","n","r","s","l","th","m","nd","rn","sk","ll","ss","x","nt","rd"];function wu(s){return s.charAt(0).toUpperCase()+s.slice(1)}function Eu(s){let t=new ge(s^1374496523);for(let e=0;e<8;e++){let i=t.chance(.55)?2:t.chance(.7)?3:1,n="";for(let r=0;r<i;r++)n+=t.pick(Pv)+t.pick(Lv)+(r===i-1||t.chance(.3)?t.pick(Dv):"");if(n=n.replace(/(.)\1\1+/g,"$1$1"),n.length>=4&&n.length<=10&&!/[aeiouy]{3}/.test(n))return wu(n)}return wu("ostra")}var Nv=["OSC","OSC","OSC","HVK","Lund","TSR"];function Tu(s){let t=new ge(s^739982445),e=t.pick(Nv),i=t.int(1e3,99999);return e==="Lund"?`Lund ${t.int(2,900)}`:`${e} ${i}`}var Uv=["I","II","III","IV","V","VI","VII","VIII","IX","X"];function Au(s){return"bcdefghijklmnop"[s]||`p${s}`}function Ru(s){return Uv[s]||`${s+1}`}var Fv=132479505,Fi=10,Te=[0,18,26e3],Ge={R0:26e3,Rd:9e3,h0:330,pitch:12.5*Math.PI/180,arms:4,armOffset:.6,bulgeR:2600};function Ta(s,t,e){let i=Math.hypot(s,e),n=Math.atan2(e,s),r=Math.exp(-(i-Ge.R0)/Ge.Rd)*uc(52e3,38e3,i),a=Ge.h0+i*.006,o=Math.cosh(t/a),l=1/(o*o),c=1/Math.tan(Ge.pitch),h=n-c*Math.log(Math.max(i,400)/Ge.R0),u=.5+.5*Math.cos(Ge.arms*h+Ge.armOffset),d=u*u*u*u*uc(2500,7e3,i),p=r*l*(.42+1.25*d),f=(i*i+t*t*3.2)/(2*Ge.bulgeR*Ge.bulgeR),v=18*Math.exp(-f);return p+v}var Ov=.004,kv=Ov/Ta(Te[0],Te[1],Te[2]);function Bv(s,t,e){return Ta(s,t,e)*kv}var dc=[{cls:"M",kind:"main",w:.55,T:[2400,3700],M:[.08,.47],R:[.12,.62]},{cls:"K",kind:"main",w:.17,T:[3700,5200],M:[.47,.8],R:[.66,.93]},{cls:"G",kind:"main",w:.095,T:[5200,6e3],M:[.8,1.05],R:[.93,1.16]},{cls:"F",kind:"main",w:.05,T:[6e3,7500],M:[1.05,1.4],R:[1.16,1.5]},{cls:"A",kind:"main",w:.022,T:[7500,1e4],M:[1.4,2.1],R:[1.5,2.2]},{cls:"B",kind:"main",w:.006,T:[1e4,28e3],M:[2.1,14],R:[2.2,6.5]},{cls:"O",kind:"main",w:5e-4,T:[3e4,42e3],M:[16,40],R:[6.6,12]},{cls:"K",kind:"giant",w:.007,T:[3900,4800],M:[1,2.5],R:[10,40]},{cls:"M",kind:"giant",w:.003,T:[3100,3800],M:[1,3],R:[40,160]},{cls:"D",kind:"dwarf",w:.045,T:[5500,32e3],M:[.5,1.2],R:[.008,.015]},{cls:"L",kind:"brown",w:.03,T:[900,2200],M:[.03,.075],R:[.08,.11]},{cls:"N",kind:"neutron",w:.0012,T:[4e5,9e5],M:[1.3,2],R:[16e-6,19e-6]},{cls:"X",kind:"blackhole",w:4e-4,T:[0,0],M:[5,18],R:[0,0]}];function Cu(s,t,e,i){let n=new ge(e),r=i?.classDef||n.weighted(dc),a=i?.u??n.next(),o=x=>x[0]+(x[1]-x[0])*a,l=r.kind==="blackhole"?0:o(r.T)*(.97+.06*n.next()),c=i?.mass??r.M[0]*Math.pow(r.M[1]/r.M[0],a),h=o(r.R);r.kind==="blackhole"&&(h=2*6674e-14*c*1989e27/299792458**2/6957e5);let u=r.kind==="blackhole"?0:h*h*Math.pow(l/5772,4),d=r.kind==="blackhole"||r.kind==="neutron"?0:Math.min(9,Math.floor(10*(1-a))),p={main:"V",giant:"III",dwarf:"",brown:"",neutron:"",blackhole:""}[r.kind],f=`${r.cls}${d}${p}`;r.kind==="dwarf"&&(f=`DA${Math.max(1,Math.min(9,Math.round(50400/l)))}`),r.kind==="brown"&&(f=l<1300?`T${d}`:`L${d}`),r.kind==="neutron"&&(f="Neutron star"),r.kind==="blackhole"&&(f="Black hole");let v=u>4||r.kind==="giant",g=i?.name||(v||n.chance(.28)?Eu(e):Tu(e)),m=r.kind==="blackhole"?[0,0,0]:cr(Math.min(l,4e4)),_=r.kind==="main"||r.kind==="giant",y=r.kind==="blackhole"?i?.diskLum??.002+.02*new ge(e^119).next():0;return r.kind==="blackhole"&&i?.mass&&(f=`Black hole \xB7 ${Math.round(c).toLocaleString("en-US")} solar masses`),{id:s,name:g,pos:t,seed:e,cls:r.cls,kind:r.kind,spectral:f,temp:l,mass:c,radius:h,lum:u,color:m,scoopable:_,diskLum:y}}var Ea=class{constructor(t=Fv){this.seed=t,this.sectors=new Map,this.overrides=new Map,this.sol=Cu("SOL",Te.slice(),Ui(t,1),{classDef:dc[2],u:.72,name:"Sol"}),this.sol.temp=5772,this.sol.mass=1,this.sol.radius=1,this.sol.lum=1,this.sol.spectral="G2V",this.sol.color=cr(5772),this.solSector=this.sectorOf(Te)}sectorOf(t){return[Math.floor(t[0]/Fi),Math.floor(t[1]/Fi),Math.floor(t[2]/Fi)]}sectorStars(t,e,i){let n=`${t},${e},${i}`,r=this.sectors.get(n);if(r)return r;let a=Ui(this.seed,t,e,i),o=new ge(a),l=(t+.5)*Fi,c=(e+.5)*Fi,h=(i+.5)*Fi,u=Bv(l,c,h)*Fi**3,d=Math.min(o.poisson(u),400);r=[];let p=t===this.solSector[0]&&e===this.solSector[1]&&i===this.solSector[2];for(let f=0;f<d;f++){let v=[(t+o.next())*Fi,(e+o.next())*Fi,(i+o.next())*Fi];if(p&&Math.hypot(v[0]-Te[0],v[1]-Te[1],v[2]-Te[2])<4)continue;let g=`${t}.${e}.${i}.${f}`,m=Cu(g,v,Ui(a,f,77),this.overrides.get(g));r.push(m)}return p&&r.push(this.sol),this.sectors.size>6e4&&this.sectors.clear(),this.sectors.set(n,r),r}starsInRadius(t,e){let i=[],n=e*e,r=this.sectorOf([t[0]-e,t[1]-e,t[2]-e]),a=this.sectorOf([t[0]+e,t[1]+e,t[2]+e]);for(let o=r[0];o<=a[0];o++)for(let l=r[1];l<=a[1];l++)for(let c=r[2];c<=a[2];c++)for(let h of this.sectorStars(o,l,c)){let u=h.pos[0]-t[0],d=h.pos[1]-t[1],p=h.pos[2]-t[2],f=u*u+d*d+p*p;f<=n&&i.push({star:h,d:Math.sqrt(f)})}return i}starById(t){if(t==="SOL")return this.sol;let[e,i,n]=t.split(".").map(Number);return this.sectorStars(e,i,n).find(r=>r.id===t)||null}forceStar(t,e){this.overrides.set(t,e);let[i,n,r]=t.split(".").map(Number);return this.sectors.delete(`${i},${n},${r}`),this.starById(t)}classDef(t,e="main"){return dc.find(i=>i.cls===t&&i.kind===e)}};function xe(s,t){return Math.hypot(s[0]-t[0],s[1]-t[1],s[2]-t[2])}var Hv=`
const float R0 = ${Ge.R0.toFixed(1)};
const float RD = ${Ge.Rd.toFixed(1)};
const float H0 = ${Ge.h0.toFixed(1)};
const float PITCHK = ${(1/Math.tan(Ge.pitch)).toFixed(6)};
const float ARMS = ${Ge.arms.toFixed(1)};
const float ARMOFF = ${Ge.armOffset.toFixed(4)};
const float BULGER = ${Ge.bulgeR.toFixed(1)};

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
`,zv=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Vv=`
uniform vec3 uObs;
uniform float uFace;
uniform float uSize;
varying vec3 vDir;
${Ni}
${Hv}
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
`,Gv=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * vec4((viewMatrix * vec4(position, 0.0)).xyz, 1.0);
  gl_Position = p.xyww;
  gl_Position.z = gl_Position.w * 0.99999;
}
`,Iu=`
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
`,Wv=`
uniform samplerCube tSky;
uniform float uIntensity;
uniform vec4 uBH;        // direction to black hole, angular Schwarzschild radius
varying vec3 vDir;
${Iu}
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
`,qv=`
attribute vec3 aColor;
attribute float aFlux;
uniform float uScale;
uniform float uPx;
uniform vec4 uBH;
varying vec3 vColor;
${Iu}
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
`,Xv=`
varying vec3 vColor;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  float g = exp(-r2 * 4.5);
  gl_FragColor = vec4(vColor * g, 1.0);
}
`,$v=40;function Ns(s,t){let e=1/Math.sqrt(Math.max(1-t*t,1e-18)),i=Math.min(e,$v),n=1-Math.sqrt(1-1/(i*i)),r=t<=0?0:1-Math.max(n,1-t);s.uBeta.value=r,s.uOneMinusBeta.value=t<=0?1:Math.max(n,1-t)}var Aa=class{constructor(t,e=1024){this.renderer=t,this.size=e,this.cubeTarget=new ir(e,{type:Ti,generateMipmaps:!1,minFilter:we,magFilter:we}),this.cubeCamera=new er(.1,10,this.cubeTarget),this.cubeCamera.coordinateSystem=t.coordinateSystem,this.cubeCamera.updateCoordinateSystem(),this.cubeCamera.updateMatrixWorld(!0),this.genScene=new Qi,this.genMat=new Yt({vertexShader:zv,fragmentShader:Vv,side:be,depthTest:!1,depthWrite:!1,uniforms:{uObs:{value:new C},uFace:{value:0},uSize:{value:e}}}),this.genScene.add(new yt(new Oe(2,2,2),this.genMat)),this.uniforms={tSky:{value:this.cubeTarget.texture},uIntensity:{value:1},uBeta:{value:0},uOneMinusBeta:{value:1},uVelDir:{value:new C(0,0,-1)},uBH:{value:new Jt(0,0,0,0)}},this.mesh=new yt(new Oe(2,2,2),new Yt({vertexShader:Gv,fragmentShader:Wv,side:be,depthTest:!1,depthWrite:!1,uniforms:this.uniforms})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.starUniforms={uScale:{value:3},uPx:{value:1},uBeta:this.uniforms.uBeta,uOneMinusBeta:this.uniforms.uOneMinusBeta,uVelDir:this.uniforms.uVelDir,uBH:this.uniforms.uBH},this.starMat=new Yt({vertexShader:qv,fragmentShader:Xv,depthTest:!1,depthWrite:!1,blending:Re,blendSrc:ce,blendDst:ce,transparent:!1,uniforms:this.starUniforms}),this.points=new Mn(new me,this.starMat),this.points.frustumCulled=!1,this.points.renderOrder=-999,this.pending=null}regenerate(t,e=!1){if(this.genMat.uniforms.uObs.value.set(t[0],t[1],t[2]),this.tile=Math.min(256,this.size),this.tilesPerSide=Math.ceil(this.size/this.tile),this.pending={face:0,tile:0},e)for(;this.pending;)this.step(64)}step(t=6){if(!this.pending)return!1;let e=this.renderer,i=this.cubeCamera.children,n=e.getRenderTarget(),r=e.getScissorTest(),a=this.tilesPerSide,o=!1;for(let l=0;l<t&&!o;l++){let{face:c,tile:h}=this.pending,u=h%a,d=Math.floor(h/a),p=u*this.tile,f=d*this.tile,v=Math.min(this.tile,this.size-p),g=Math.min(this.tile,this.size-f);this.genMat.uniforms.uFace.value=c,this.cubeTarget.viewport.set(0,0,this.size,this.size),this.cubeTarget.scissor.set(p,f,v,g),this.cubeTarget.scissorTest=!0,e.setRenderTarget(this.cubeTarget,c),e.render(this.genScene,i[c]),this.cubeTarget.scissorTest=!1,this.pending.tile++,this.pending.tile>=a*a&&(this.pending.tile=0,this.pending.face++,this.pending.face>=6&&(this.pending=null,o=!0))}return e.setRenderTarget(n),e.setScissorTest(r),o}setStars(t){let e=t.length,i=new Float32Array(e*3),n=new Float32Array(e*3),r=new Float32Array(e);t.forEach((o,l)=>{i.set(o.dir,l*3),n.set(o.color,l*3),r[l]=o.flux});let a=new me;a.setAttribute("position",new le(i,3)),a.setAttribute("aColor",new le(n,3)),a.setAttribute("aFlux",new le(r,1)),this.points.geometry.dispose(),this.points.geometry=a}};var en={uCamRot:{value:new Bt},uTanFov:{value:new xt(1,1)},uRes:{value:new xt(1,1)}},Ra=class{constructor(t,{quality:e="high"}={}){this.canvas=t;let i=new aa({canvas:t,antialias:!1,logarithmicDepthBuffer:!0,powerPreference:"high-performance",alpha:!1,stencil:!1});i.outputColorSpace=bn,i.toneMapping=Pi,i.shadowMap.enabled=!0,i.shadowMap.type=Zl,i.autoClear=!1,this.renderer=i,this.camera=new Qe(60,1,.15,1e15),this.camera.position.set(0,0,0),this.bgScene=new Qi,this.scene=new Qi,this.setQuality(e,!0),this.sky=new Aa(i,this.skySize),this.bgScene.add(this.sky.mesh,this.sky.points),this.post=new Ma(i),this.hdr=null,this.frustum=new Hn,this.projScreenMatrix=new ie,this.resize(),window.addEventListener("resize",()=>this.resize())}setQuality(t,e=!1){this.quality=t;let i={low:{scale:.7,samples:0,sky:512,maxPixels:1e6},medium:{scale:.9,samples:2,sky:768,maxPixels:16e5},high:{scale:1,samples:4,sky:1024,maxPixels:24e5},ultra:{scale:1.35,samples:4,sky:1536,maxPixels:45e5}},n={...i[t]||i.high};window.__TLQ_TEST&&(n.sky=window.__TLQ_SKY||128,n.samples=0,n.scale=window.__TLQ_SCALE||.5),this.renderScale=n.scale,this.samples=n.samples,this.skySize=n.sky,this.maxPixels=window.__TLQ_TEST?1e9:n.maxPixels,e||this.resize(!0)}resize(t=!1){let e=Math.max(1,this.canvas.clientWidth||window.innerWidth),i=Math.max(1,this.canvas.clientHeight||window.innerHeight),n=Math.min(window.devicePixelRatio||1,2)*this.renderScale;e*i*n*n>this.maxPixels&&(n=Math.sqrt(this.maxPixels/(e*i)));let r=Math.round(e*n),a=Math.round(i*n);!t&&this.hdr&&this.width===r&&this.height===a||(this.width=r,this.height=a,this.pixelRatio=n,this.renderer.setPixelRatio(1),this.renderer.setSize(r,a,!1),this.camera.aspect=e/i,this.camera.updateProjectionMatrix(),this.hdr&&this.hdr.dispose(),this.hdr=new ti(r,a,{type:Ti,format:ze,samples:this.samples,minFilter:we,magFilter:we,depthBuffer:!0}),this.post.setSize(r,a),this.post.resetAdapt=!0)}get pixelAngle(){return 2*Math.tan(this.camera.fov*Math.PI/360)/this.height}get projScale(){return this.height/(2*Math.tan(this.camera.fov*Math.PI/360))}updateFrustum(){let t=this.camera;return t.updateMatrixWorld(),this.projScreenMatrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projScreenMatrix),this.frustum}updateCameraUniforms(){let t=this.camera;en.uCamRot.value.setFromMatrix4(new ie().makeRotationFromQuaternion(t.quaternion));let e=Math.tan(t.fov*Math.PI/360);en.uTanFov.value.set(e*t.aspect,e),en.uRes.value.set(this.width,this.height)}render(t,e){let i=this.renderer;this.updateCameraUniforms(),this.sky.starUniforms.uPx.value=this.pixelRatio,i.setRenderTarget(this.hdr),i.setClearColor(0,1),i.clear(!0,!0,!1),i.render(this.bgScene,this.camera),i.clearDepth(),i.render(this.scene,this.camera),this.post.render(this.hdr,t,e)}};function fc(){let s=[{n:[1,0,0],u:[0,0,-1],v:[0,1,0]},{n:[-1,0,0],u:[0,0,1],v:[0,1,0]},{n:[0,1,0],u:[1,0,0],v:[0,0,-1]},{n:[0,-1,0],u:[1,0,0],v:[0,0,1]},{n:[0,0,1],u:[1,0,0],v:[0,1,0]},{n:[0,0,-1],u:[-1,0,0],v:[0,1,0]}],t=Math.PI/4;function e(f,v,g,m){let _=s[f],y=Math.tan(v*t),x=Math.tan(g*t),R=_.n[0]+_.u[0]*y+_.v[0]*x,E=_.n[1]+_.u[1]*y+_.v[1]*x,A=_.n[2]+_.u[2]*y+_.v[2]*x,P=1/Math.sqrt(R*R+E*E+A*A);return m[0]=R*P,m[1]=E*P,m[2]=A*P,m}let i=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function n(f){let v=f>>>0;return()=>{v=v+1831565813>>>0;let g=v;return g=Math.imul(g^g>>>15,g|1),g^=g+Math.imul(g^g>>>7,g|61),((g^g>>>14)>>>0)/4294967296}}function r(f){let v=n(f),g=new Uint8Array(256);for(let R=0;R<256;R++)g[R]=R;for(let R=255;R>0;R--){let E=Math.floor(v()*(R+1)),A=g[R];g[R]=g[E],g[E]=A}let m=new Uint8Array(512),_=new Uint8Array(512);for(let R=0;R<512;R++)m[R]=g[R&255],_[R]=m[R]%12;let y=1/3,x=1/6;return function(E,A,P){let w=0,M=0,I=0,D=0,k=(E+A+P)*y,H=Math.floor(E+k),q=Math.floor(A+k),V=Math.floor(P+k),nt=(H+q+V)*x,z=E-(H-nt),rt=A-(q-nt),ct=P-(V-nt),$,tt,st,B,Q,lt;z>=rt?rt>=ct?($=1,tt=0,st=0,B=1,Q=1,lt=0):z>=ct?($=1,tt=0,st=0,B=1,Q=0,lt=1):($=0,tt=0,st=1,B=1,Q=0,lt=1):rt<ct?($=0,tt=0,st=1,B=0,Q=1,lt=1):z<ct?($=0,tt=1,st=0,B=0,Q=1,lt=1):($=0,tt=1,st=0,B=1,Q=1,lt=0);let it=z-$+x,dt=rt-tt+x,ot=ct-st+x,ut=z-B+2*x,mt=rt-Q+2*x,Rt=ct-lt+2*x,It=z-1+.5,L=rt-1+.5,Kt=ct-1+.5,Ft=H&255,Ot=q&255,et=V&255,wt=.6-z*z-rt*rt-ct*ct;if(wt>0){let U=_[Ft+m[Ot+m[et]]]*3;wt*=wt,w=wt*wt*(i[U]*z+i[U+1]*rt+i[U+2]*ct)}let _t=.6-it*it-dt*dt-ot*ot;if(_t>0){let U=_[Ft+$+m[Ot+tt+m[et+st]]]*3;_t*=_t,M=_t*_t*(i[U]*it+i[U+1]*dt+i[U+2]*ot)}let T=.6-ut*ut-mt*mt-Rt*Rt;if(T>0){let U=_[Ft+B+m[Ot+Q+m[et+lt]]]*3;T*=T,I=T*T*(i[U]*ut+i[U+1]*mt+i[U+2]*Rt)}let b=.6-It*It-L*L-Kt*Kt;if(b>0){let U=_[Ft+1+m[Ot+1+m[et+1]]]*3;b*=b,D=b*b*(i[U]*It+i[U+1]*L+i[U+2]*Kt)}return 32*(w+M+I+D)}}function a(f,v,g,m){let _=Math.imul(f|0,668265261)^Math.imul(v|0,374761393)^Math.imul(g|0,2654435761)^Math.imul(m|0,2246822519);return _=Math.imul(_^_>>>15,739982445),_=Math.imul(_^_>>>12,695872825),_^=_>>>15,_>>>0}let o=(f,v,g)=>f<v?v:f>g?g:f,l=(f,v,g)=>{let m=o((g-f)/(v-f),0,1);return m*m*(3-2*m)};function c(f,v,g){let m=o(.5+.5*(v-f)/g,0,1);return v*(1-m)+f*m-g*m*(1-m)}function h(f,v,g){return-c(-f,-v,g)}function u(f){let v=f.radius,g=f.amp,m=f.type,_=f.seed|0,y=r(_),x=r(_+101),R=r(_+202),E=r(_+303),A=f.craters||0,P=f.mare||0,w=m==="terran"?0:m==="titan"?-.32*g:null,M=m==="terran"?f.sea??.05:0,I=!!f.life,D=Math.cos(_%7),k=Math.sin(_%7);function H($,tt,st,B,Q,lt,it,dt){let ot=0,ut=1,mt=Q;for(let Rt=0;Rt<lt;Rt++){let It=v/mt;if(It<dt){It*2>dt&&(ot+=ut*$(tt*mt,st*mt,B*mt)*((It*2-dt)/dt));break}ot+=ut*$(tt*mt,st*mt,B*mt),ut*=it,mt*=2.02}return ot}function q($,tt,st,B,Q,lt,it){let dt=0,ot=.5,ut=Q,mt=1;for(let Rt=0;Rt<lt&&!(v/ut<it);Rt++){let It=1-Math.abs($(tt*ut,st*ut,B*ut));It*=It,dt+=It*ot*mt,mt=o(It*1.6,0,1),ot*=.5,ut*=2.05}return dt}function V($,tt,st,B,Q,lt){let it=0,dt=B,ot=0;for(;dt>Q&&dt>.7&&ot<14;){let ut=v/dt;it+=E($*ut+ot*3.1,tt*ut,st*ut)*lt*Math.pow(dt,.92),dt*=.5,ot++}return it}let nt=.28,z=[0,0];function rt($,tt,st,B,Q,lt,it){if(Q<=0)return 0;let dt=0,ot=nt,ut=0;for(let mt=0;mt<22;mt++,ot*=.5){let Rt=.42*ot*v;if(Rt<B*.7||Rt<1.5)break;let It=$/ot,L=tt/ot,Kt=st/ot,Ft=Math.floor(It),Ot=Math.floor(L),et=Math.floor(Kt),wt=It-Ft>.5?1:-1,_t=L-Ot>.5?1:-1,T=Kt-et>.5?1:-1,b=Q*(mt<2?.35:.55);for(let U=0;U<8;U++){let j=Ft+(U&1?wt:0),Z=Ot+(U&2?_t:0),Y=et+(U&4?T:0),Ct=a(j,Z,Y,mt*7919+_);if((Ct&65535)/65536>b)continue;let pt=(Ct>>>16&255)/255,At=(Ct>>>24&255)/255,Xt=a(Y,j,Z,mt+_*3),at=(Xt&65535)/65536,St=(Xt>>>16)/65536,Nt=(j+.25+.5*pt)*ot,kt=(Z+.25+.5*At)*ot,Et=(Y+.25+.5*at)*ot,jt=ot*(.12+.3*St*St),Vt=$-Nt,ae=tt-kt,N=st-Et,gt=Vt*Vt+ae*ae+N*N,X=jt*1.7;if(gt>X*X)continue;let J=Math.sqrt(gt)/jt,Mt=jt*v,bt=Mt>5e3,Gt=bt?.42*Math.pow(5e3/Mt,.55):.42,ye=J*J-1,Ce=Math.min(J-1.7,0),ee=.3*Ce*Ce,qe=h(ye,bt?-.32:-.78,.35);qe=c(qe,ee,.22),Mt>9e3&&(qe+=.3*Math.exp(-J*J*45));let ai=(Xt&255)/255,mr=lt*(ai<.15?1:.55+.45*(1-ai));dt+=qe*Mt*Gt*mr,ai<.07&&J<2.4&&(ut=Math.max(ut,(1-J/2.4)*(mt>2?1:.6)))}}return it&&(it[0]=ut),dt}function ct($,tt,st,B,Q){let lt=0,it=0,dt=0;switch(m){case"barren":{let ot=H(y,$,tt,st,1.3,9,.52,B)*g*.38,ut=H(x,$,tt,st,.9,4,.5,B),mt=l(.05,.32,ut)*P,Rt=q(R,$,tt,st,2.2,5,B)*g*.25*(1-mt),It=rt($,tt,st,B,A*(1-.65*mt),1,z);lt=ot+Rt-mt*g*.32+It+V($,tt,st,1600,B,.045*(1-.5*mt)),it=mt,dt=z[0];break}case"ice":{let ot=H(y,$,tt,st,1.2,8,.5,B)*g*.3,ut=0,mt=0;for(let It=0;It<3;It++){let L=3.5*Math.pow(2.3,It);if(v/L<B*4)break;let Kt=R($*2.1+It,tt*2.1,st*2.1)*.25,Ft=1-Math.abs(x($*L+Kt,tt*L+Kt,st*L-Kt)),Ot=Math.pow(Ft,14),et=Math.pow(Ft,70);ut+=(Ot-et*1.3)*(1/(1+It)),mt=Math.max(mt,Math.pow(Ft,9))}let Rt=rt($,tt,st,B,A,.7,z);lt=ot+ut*g*.12+Rt+V($,tt,st,900,B,.022),it=mt,dt=l(-.2,.6,H(E,$,tt,st,2,4,.5,B));break}case"desert":{let ot=H(y,$,tt,st,1.1,9,.5,B),ut=q(x,$,tt,st,2.6,7,B)*l(0,.4,ot),mt=Math.abs(R($*2.6,tt*2.6,st*2.6)+.35*E($*9,tt*9,st*9)),Rt=(1-l(0,.07,mt))*l(-.1,.25,ot),It=rt($,tt,st,B,A,.45,z),L=1-l(-.2,.2,ot),Kt=0;if(v/3e3>B*.5){let Ft=v/650,Ot=E($*40,tt*40,st*40)*6,et=($*D+st*k+tt*.3)*Ft+Ot,wt=et-Math.floor(et);Kt=Math.pow(wt<.7?wt/.7:(1-wt)/.3,1.6)*38*L}lt=ot*g*.55+ut*g*.7-Rt*g*.5+It+Kt+V($,tt,st,1200,B,.03),it=L,dt=Rt;break}case"lava":{let ot=H(y,$,tt,st,1.4,8,.5,B)*g*.35,ut=q(x,$,tt,st,3,6,B)*g*.2,mt=0;for(let It=0;It<3;It++){let L=9*Math.pow(2.4,It);if(v/L<B*3)break;let Kt=Math.abs(R($*L+It*11,tt*L,st*L));mt=Math.max(mt,(1-l(0,.05/(1+It*.3),Kt))/(1+It*.6))}let Rt=rt($,tt,st,B,A,.5,z);lt=ot+ut-mt*60+Rt+V($,tt,st,900,B,.04),it=mt,dt=l(-.3,.5,E($*3,tt*3,st*3));break}case"venus":{let ot=H(y,$,tt,st,1,9,.5,B),ut=q(x,$,tt,st,2.2,6,B)*l(.1,.5,ot),mt=rt($,tt,st,B,A,.6,z);lt=ot*g*.45+ut*g*.6+mt+V($,tt,st,1e3,B,.03),it=l(-.2,.4,ot),dt=ut;break}case"titan":{let ot=H(y,$,tt,st,1.2,9,.5,B),ut=Math.abs(tt),mt=0,Rt=1-l(.25,.5,ut);if(v/3e3>B*.5){let L=v/900,Kt=E($*30,tt*30,st*30)*4,Ft=($*D+st*k)*L+Kt,Ot=Ft-Math.floor(Ft);mt=Math.pow(Ot<.75?Ot/.75:(1-Ot)/.25,1.5)*60*Rt}let It=rt($,tt,st,B,A,.5,z);lt=ot*g*.5-l(.55,.85,ut)*g*.3+mt+It+V($,tt,st,900,B,.02),it=Rt,dt=0;break}case"terran":{let ot=E($*1.5,tt*1.5,st*1.5)*.35,ut=H(y,$+ot,tt-ot,st+ot,1.15,10,.52,B)+M,mt=l(-.02,.18,ut),Rt=q(x,$,tt,st,2.4,8,B)*l(.08,.45,ut),It=H(R,$,tt,st,6,7,.5,B)*.12;ut<0?lt=ut*g*.9:lt=ut*g*.35+Rt*g*.9+It*g*mt,lt+=rt($,tt,st,B,A,.3,z)*mt,lt+=V($,tt,st,900,B,.025)*mt,it=.5+.5*H(E,$*1.7,tt*1.7,st*1.7,1,5,.55,B),dt=Rt;break}default:lt=H(y,$,tt,st,1.3,8,.5,B)*g*.4}return Q&&(Q[0]=lt,Q[1]=it,Q[2]=dt),lt}return{R:v,amp:g,type:m,seaLevel:w,life:I,sample:ct,height($,tt,st){let B=ct($,tt,st,.6,null);return w!==null?Math.max(B,w):B}}}function d(f,v,g,m,_,y){let x=f.R,R=2/(1<<g),E=-1+m*R,A=-1+_*R,P=y+3,w=x*(Math.PI/2)*(R/2)/y,M=w*1.6,I=new Float64Array(P*P*3),D=new Float64Array(P*P*3),k=new Float32Array(P*P),H=new Float32Array(P*P*2),q=[0,0,0],V=[0,0,0],nt=f.seaLevel,z=1e9,rt=-1e9;for(let et=0;et<P;et++)for(let wt=0;wt<P;wt++){let _t=E+(wt-1)/y*R,T=A+(et-1)/y*R;e(v,_t,T,q),f.sample(q[0],q[1],q[2],M,V);let b=V[0],U=nt!==null&&b<nt?nt:b,j=x+U,Z=et*P+wt;I[Z*3]=q[0]*j,I[Z*3+1]=q[1]*j,I[Z*3+2]=q[2]*j,D[Z*3]=q[0],D[Z*3+1]=q[1],D[Z*3+2]=q[2],k[Z]=b,H[Z*2]=V[1],H[Z*2+1]=V[2],wt>0&&et>0&&wt<P-1&&et<P-1&&(U<z&&(z=U),U>rt&&(rt=U))}let ct=y+1,$=ct*ct,tt=4*ct,st=$+tt,B=new Float32Array(st*3),Q=new Float32Array(st*3),lt=new Float32Array(st),it=new Float32Array(st*2),dt=new Float32Array(st*3),ot=((y>>1)+1)*P+(y>>1)+1,ut=I[ot*3],mt=I[ot*3+1],Rt=I[ot*3+2],It=w*1.5+(rt-z)*.03;function L(et,wt,_t){let T=D[wt*3],b=D[wt*3+1],U=D[wt*3+2];B[et*3]=I[wt*3]-ut-T*_t,B[et*3+1]=I[wt*3+1]-mt-b*_t,B[et*3+2]=I[wt*3+2]-Rt-U*_t,dt[et*3]=T,dt[et*3+1]=b,dt[et*3+2]=U,lt[et]=k[wt],it[et*2]=H[wt*2],it[et*2+1]=H[wt*2+1]}function Kt(et,wt,_t){let T=wt*P+et-1,b=wt*P+et+1,U=(wt-1)*P+et,j=(wt+1)*P+et,Z=I[b*3]-I[T*3],Y=I[b*3+1]-I[T*3+1],Ct=I[b*3+2]-I[T*3+2],pt=I[j*3]-I[U*3],At=I[j*3+1]-I[U*3+1],Xt=I[j*3+2]-I[U*3+2],at=Y*Xt-Ct*At,St=Ct*pt-Z*Xt,Nt=Z*At-Y*pt,kt=1/Math.sqrt(at*at+St*St+Nt*Nt);at*=kt,St*=kt,Nt*=kt;let Et=wt*P+et;nt!==null&&k[Et]<nt&&(at=D[Et*3],St=D[Et*3+1],Nt=D[Et*3+2]),Q[_t*3]=at,Q[_t*3+1]=St,Q[_t*3+2]=Nt}for(let et=0;et<ct;et++)for(let wt=0;wt<ct;wt++){let _t=et*ct+wt;L(_t,(et+1)*P+(wt+1),0),Kt(wt+1,et+1,_t)}let Ft=$,Ot=[et=>[et,0],et=>[et,y],et=>[0,et],et=>[y,et]];for(let et of Ot)for(let wt=0;wt<ct;wt++){let[_t,T]=et(wt);L(Ft,(T+1)*P+(_t+1),It),Kt(_t+1,T+1,Ft),Ft++}return{pos:B,nor:Q,hgt:lt,mat:it,unit:dt,center:[ut,mt,Rt],minH:z,maxH:rt,spacing:w}}function p(f){let v=f+1,g=[];for(let y=0;y<f;y++)for(let x=0;x<f;x++){let R=y*v+x,E=R+1,A=R+v,P=A+1;g.push(R,E,A,E,P,A)}let m=v*v,_=[y=>y,y=>f*v+y,y=>y*v,y=>y*v+f];for(let y=0;y<4;y++)for(let x=0;x<f;x++){let R=_[y](x),E=_[y](x+1),A=m+y*v+x,P=A+1;g.push(R,A,E,E,A,P),g.push(R,E,A,E,P,A)}return new Uint32Array(g)}return{FACES:s,cubeToSphere:e,makeGenerator:u,buildPatch:d,buildIndex:p}}var hr=32,Us=fc(),pc=null;function Yv(){return pc||(pc=new le(Us.buildIndex(hr),1)),pc}var gc=class{constructor(){this.workers=[],this.queue=[],this.inflight=new Map,this.nextId=1,this.inits=new Map,this.syncGens=new Map;let t=Math.max(1,Math.min(4,(navigator.hardwareConcurrency||4)-1));try{let e=`const LIB = (${fc.toString()})();
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
};`,i=URL.createObjectURL(new Blob([e],{type:"text/javascript"}));for(let n=0;n<t;n++){let r=new Worker(i);r.busy=0,r.onmessage=a=>this.onResult(r,a.data),r.onerror=()=>{this.failed=!0},this.workers.push(r)}}catch{this.workers=[]}}init(t,e){this.inits.set(t,e);for(let i of this.workers)i.postMessage({type:"init",planet:t,params:e});this.workers.length||this.syncGens.set(t,Us.makeGenerator(e))}drop(t){this.inits.delete(t),this.syncGens.delete(t);for(let e of this.workers)e.postMessage({type:"drop",planet:t});this.queue=this.queue.filter(e=>e.planet!==t);for(let[e,i]of this.inflight)i.planet===t&&(i.cancelled=!0)}request(t){this.queue.push(t)}pump(){if(this.queue.length)if(this.queue.sort((t,e)=>e.priority-t.priority),this.workers.length&&!this.failed){for(let t of this.workers)for(;t.busy<2&&this.queue.length;){let e=this.queue.shift();if(e.cancelled)continue;let i=this.nextId++;e.id=i,e.worker=t,this.inflight.set(i,e),t.busy++,t.postMessage({type:"build",id:i,planet:e.planet,face:e.face,level:e.level,ix:e.ix,iy:e.iy,N:hr})}for(let t of this.queue)t.node.pending=!1;this.queue.length=0}else{let t=performance.now();for(;this.queue.length&&performance.now()-t<6;){let e=this.queue.shift();if(e.cancelled)continue;let i=this.syncGens.get(e.planet);i||(i=Us.makeGenerator(this.inits.get(e.planet)),this.syncGens.set(e.planet,i)),e.done(Us.buildPatch(i,e.face,e.level,e.ix,e.iy,hr))}for(let e of this.queue)e.node.pending=!1;this.queue.length=0}}onResult(t,e){t.busy=Math.max(0,t.busy-1);let i=this.inflight.get(e.id);if(this.inflight.delete(e.id),!!i){if(i.cancelled){i.node.pending=!1;return}if(e.missing){let n=this.inits.get(i.planet);n&&t.postMessage({type:"init",planet:i.planet,params:n}),i.node.pending=!1;return}i.done(e)}}},mc=null;function jv(){return mc||(mc=new gc),mc}var Yn=class{constructor(t,e,i,n,r){this.face=t,this.level=e,this.ix=i,this.iy=n,this.parent=r,this.key=`${t}/${e}/${i}/${n}`,this.children=null,this.data=null,this.mesh=null,this.pending=!1,this.lastUsed=0;let a=2/(1<<e),o=Us.cubeToSphere(t,-1+(i+.5)*a,-1+(n+.5)*a,[0,0,0]);this.unitCenter=o,this.arc=Math.PI/2*(a/2)*1.25}},Zv=0,Ca=class{constructor(t,e,i){this.params=t,this.R=t.radius,this.material=e,this.group=i,this.planetKey=`p${++Zv}`,this.pool=jv(),this.pool.init(this.planetKey,t),this.gen=Us.makeGenerator(t),this.roots=[];for(let n=0;n<6;n++)this.roots.push(new Yn(n,0,0,0,null));this.frame=0,this.loaded=0,this.budget=900,this.maxLevel=Math.max(4,Math.min(19,Math.floor(Math.log2(this.R*.785/(1.2*hr))))),this.threshold=5,this.drawn=0,this.minPossible=-t.amp*1.4+(this.gen.seaLevel??-1e9)*0;for(let n of this.roots)this.requestNode(n,1e9)}get ready(){return this.roots.every(t=>t.data)}requestNode(t,e){t.pending||t.data||(t.pending=!0,this.pool.request({planet:this.planetKey,face:t.face,level:t.level,ix:t.ix,iy:t.iy,priority:e,node:t,done:i=>this.onData(t,i)}))}onData(t,e){if(t.pending=!1,this.disposed)return;let i=new me;i.setAttribute("position",new le(e.pos,3)),i.setAttribute("normal",new le(e.nor,3)),i.setAttribute("aHeight",new le(e.hgt,1)),i.setAttribute("aMat",new le(e.mat,2)),i.setAttribute("aUnit",new le(e.unit,3)),i.setIndex(Yv());let n=Math.max(this.R*t.arc*.75,e.maxH-e.minH);i.boundingSphere=new yn(new C,n);let r=new yt(i,this.material);r.position.set(e.center[0],e.center[1],e.center[2]),r.frustumCulled=!1,r.visible=!1,r.matrixAutoUpdate=!0,this.group.add(r),t.mesh=r,t.data={center:e.center,minH:e.minH,maxH:e.maxH,radius:n},t.lastUsed=this.frame,this.loaded++}update(t,e,i,n){this.frame++,this.drawn=0,this.cam=t,this.frustum=e,this.bodyToCam=i,this.projScale=n;let r=Math.hypot(t[0],t[1],t[2]),a=this.R-this.params.amp*1.2;this.horizonBase=r>a?Math.sqrt(r*r-a*a):0,this.Rm=a,this.camD=r;for(let o of this.visibleList||[])o.visible=!1;this.visibleList=[];for(let o of this.roots)this.select(o);this.evict(),this.pool.pump()}nodeBounds(t){if(t.data){let r=t.data.center;return{x:r[0],y:r[1],z:r[2],r:t.data.radius,top:this.R+t.data.maxH}}let e=t.unitCenter,i=t.parent?.data,n=this.R+(i?i.maxH:this.params.amp);return{x:e[0]*this.R,y:e[1]*this.R,z:e[2]*this.R,r:this.R*t.arc*.75+this.params.amp,top:n}}visible(t){let e=this.cam,i=t.x-e[0],n=t.y-e[1],r=t.z-e[2],a=Math.sqrt(i*i+n*n+r*r);if(this.camD>this.Rm){let l=Math.max(t.top,this.Rm+1),c=this.horizonBase+Math.sqrt(l*l-this.Rm*this.Rm);if(a-t.r>c)return{vis:!1,dist:a}}let o=this.bodyToCam(i,n,r);for(let l of this.frustum.planes)if(l.normal.x*o[0]+l.normal.y*o[1]+l.normal.z*o[2]+l.constant<-t.r)return{vis:!1,dist:a};return{vis:!0,dist:a}}select(t){let e=this.nodeBounds(t),{vis:i,dist:n}=this.visible(e);if(t.lastUsed=this.frame,!i)return!t.data&&t.level===0&&this.requestNode(t,1e8),!1;let r=Math.max(n-e.r*.5,1),a=this.R*t.arc/hr/r*this.projScale;if(a>this.threshold&&t.level<this.maxLevel){if(!t.children){let c=t.level+1,h=t.ix*2,u=t.iy*2;t.children=[new Yn(t.face,c,h,u,t),new Yn(t.face,c,h+1,u,t),new Yn(t.face,c,h,u+1,t),new Yn(t.face,c,h+1,u+1,t)]}let l=!0;for(let c of t.children)c.data||(l=!1,this.requestNode(c,a));if(l){for(let c of t.children)this.select(c);return!0}}return t.data?(t.mesh.visible=!0,this.visibleList.push(t.mesh),this.drawn++):this.requestNode(t,a+1e6),!0}evict(){if(this.loaded<=this.budget)return;let t=[],e=r=>{if(r.data&&r.level>0&&this.frame-r.lastUsed>30&&t.push(r),r.children)for(let a of r.children)e(a)};for(let r of this.roots)e(r);t.sort((r,a)=>r.lastUsed-a.lastUsed);let i=0;for(;this.loaded>this.budget*.8&&i<t.length;)this.freeNode(t[i++]);let n=r=>{if(!r.children)return!r.data&&!r.pending;let a=!0;for(let o of r.children)n(o)||(a=!1);return a&&this.frame-r.lastUsed>120&&(r.children=null),a&&!r.data&&!r.pending};for(let r of this.roots)n(r)}freeNode(t){t.mesh&&(this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh=null),t.data&&this.loaded--,t.data=null}dispose(){this.disposed=!0,this.pool.drop(this.planetKey);let t=e=>{this.freeNode(e),e.children&&e.children.forEach(t)};this.roots.forEach(t)}heightAt(t,e,i){let n=Math.hypot(t,e,i);return this.gen.height(t/n,e/n,i/n)}};var Jv={barren:0,ice:1,desert:2,lava:3,venus:4,titan:5,terran:6},Kv=`
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
`,Qv=`
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
${Ni}
${ba}
${Sa}

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
`;function Pu(s){let t=s.terrain,e=t.palette,i={uSunDir:{value:new C(1,0,0)},uSunColor:{value:new C(1,1,1)},uFillDir:{value:new C(0,1,0)},uFillColor:{value:new C},uAmbient:{value:new C(4e-4,4e-4,5e-4)},uLo:{value:new C(...e.lo)},uHi:{value:new C(...e.hi)},uAcc:{value:new C(...e.acc)},uType:{value:Jv[t.type]??0},uSea:{value:t.type==="terran"?0:t.type==="titan"?-.32*t.amp:-1e9},uAmp:{value:t.amp},uRadius:{value:s.radius},uLife:{value:t.life?1:0},uLunar:{value:{barren:1,ice:.35,lava:.5,desert:.25}[t.type]??0},uTime:{value:0},uProj:{value:800},uPatchOffset:{value:new C},uSpotPos:{value:new C},uSpotDir:{value:new C(0,0,-1)},uSpotColor:{value:new C},uSpotCos:{value:.9},uOcc:{value:[new Jt,new Jt,new Jt,new Jt]},uOccCount:{value:0},uSunAngR:{value:.005},...vc()};return new Yt({vertexShader:Kv,fragmentShader:Qv,uniforms:i})}function vc(){return{aCenter:{value:new C},aR:{value:1},aRa:{value:1.02},aBetaR:{value:new C},aBetaM:{value:new C},aHR:{value:.001},aHM:{value:2e-4},aG:{value:.76},aSunDir:{value:new C(1,0,0)},aSunColor:{value:new C(1,1,1)},aEnabled:{value:0}}}function xc(s,t){let e=t.atmosphere;if(!e){s.aEnabled.value=0;return}let i=t.radius;s.aR.value=i,s.aRa.value=1+e.top/i;let n=e.H/i,r=e.Hm/i;s.aHR.value=n,s.aHM.value=r,s.aBetaR.value.set(e.tauR[0]/n,e.tauR[1]/n,e.tauR[2]/n);let a=e.mieColor;s.aBetaM.value.set(e.tauM*a[0]/r,e.tauM*a[1]/r,e.tauM*a[2]/r),s.aG.value=e.g,s.aEnabled.value=1}var di=Math.PI*2;function Ne(s,t){return[s[3]*t[0]+s[0]*t[3]+s[1]*t[2]-s[2]*t[1],s[3]*t[1]-s[0]*t[2]+s[1]*t[3]+s[2]*t[0],s[3]*t[2]+s[0]*t[1]-s[1]*t[0]+s[2]*t[3],s[3]*t[3]-s[0]*t[0]-s[1]*t[1]-s[2]*t[2]]}function ii(s,t,e,i){let n=Math.sin(i/2);return[s*n,t*n,e*n,Math.cos(i/2)]}function Wt(s,t){let[e,i,n,r]=s,a=r*t[0]+i*t[2]-n*t[1],o=r*t[1]+n*t[0]-e*t[2],l=r*t[2]+e*t[1]-i*t[0],c=-e*t[0]-i*t[1]-n*t[2];return[a*r+c*-e+o*-n-l*-i,o*r+c*-i+l*-e-a*-n,l*r+c*-n+a*-i-o*-e]}function je(s){return[-s[0],-s[1],-s[2],s[3]]}var Ia={barren:[{lo:"#4a4744",hi:"#8b8781",acc:"#2c2a28"},{lo:"#5a5048",hi:"#9c8f80",acc:"#3a332c"},{lo:"#3d3a38",hi:"#77726b",acc:"#26221f"},{lo:"#5f4b3e",hi:"#a08672",acc:"#3b2c22"},{lo:"#545354",hi:"#a3a19f",acc:"#2f2e30"}],ice:[{lo:"#a9b4bb",hi:"#e8ecee",acc:"#8a6f5a"},{lo:"#b8b0a2",hi:"#efe8dc",acc:"#7d5b45"},{lo:"#9fb0bf",hi:"#dfe9f0",acc:"#6a7d8f"}],desert:[{lo:"#6e3b22",hi:"#b8784c",acc:"#4a2817"},{lo:"#7b5a3c",hi:"#c49a6c",acc:"#4f3826"},{lo:"#5b4537",hi:"#a28468",acc:"#3a2a20"},{lo:"#80452c",hi:"#c98d5e",acc:"#5a2e1c"}],lava:[{lo:"#1c1716",hi:"#3a302b",acc:"#ff6a1a"},{lo:"#211a17",hi:"#453832",acc:"#ff8a2a"}],sulfur:[{lo:"#7a5a24",hi:"#d9c27a",acc:"#3a2414"},{lo:"#8a6428",hi:"#e2cf8a",acc:"#4a2c18"}],venus:[{lo:"#5a3d22",hi:"#9a7448",acc:"#3a2814"}],titan:[{lo:"#3a2a1a",hi:"#6e5232",acc:"#120d08"}],terran:[{lo:"#4b4033",hi:"#8c7a63",acc:"#2d3b22"},{lo:"#57493b",hi:"#9a8b76",acc:"#3a3a24"},{lo:"#4a4440",hi:"#8a8178",acc:"#33281f"}]},nn={cold:["#9fb4b9","#c9d6d2","#7d989f","#e1e6de"],jovian:["#c8a27a","#e9dcc4","#9b6a45","#f2e7d2","#7a4a33"],saturnian:["#d8c49a","#efe2c0","#b39b6e","#e8d5a8"],water:["#e8e6e0","#cfd4d6","#f4f2ea","#b9c1c4"],azure:["#3e6fa8","#5d8cc0","#2b5486","#88aad0"],hot:["#3a2a2a","#5a3a30","#22181a","#7a4a32"],icegiant:["#8fc7d1","#a9d8de","#76b2c0","#c3e4e6"],neptunian:["#3f6fc4","#5a86d4","#2d58a8","#7ea2e0"]};function tx(s,t){let e=t.pick(s),i=n=>{let r=ui(n),a=.85+.3*t.next();return r.map(o=>ue(o*a,0,1))};return{lo:i(e.lo),hi:i(e.hi),acc:i(e.acc)}}function Fs(s,t,e,i,n){let r=ue(8e3*(9.81/e)*(i/288),3e3,6e4),a=r*9,o=[.0464,.108,.265],l,c,h,u=.76,d=r*.15,p=0;switch(s){case"terran":l=wa(o,t),c=.02*t,h=[1,1,1];break;case"desert":l=wa(o,t*.6),c=.25+.6*n.next(),h=[1,.62,.38],d=r*.8,u=.65;break;case"venus":l=[3.2,3,2.2],c=6,h=[1,.86,.55],d=r*1.4,u=.7;break;case"titan":l=[.25,.35,.45],c=3.5,h=[1,.55,.22],d=r*1.2,u=.6;break;case"gas":l=[.08,.12,.2],c=.05,h=[1,1,1];break;default:return null}return{P:t,H:r,Hm:d,top:a,tauR:l,tauM:c,mieColor:h,g:u,sunsetTint:p}}function ex(s){let t=s.kind==="blackhole";return{kind:"star",name:s.name,radius:s.radius*Mu,mass:s.mass*bu,lum:t?s.diskLum||.002:s.lum,temp:t?6e3:s.temp,color:t?cr(5200):s.color,starKind:s.kind,spectral:s.spectral}}function Nu(s,t,e){return s*Math.cbrt(t/(3*e))}function yc(s,t,e,i){let n=s.range(-i,i),r=s.range(0,di),a=Ne(ii(0,1,0,r),ii(1,0,0,n));return{a:t,q:a,phase0:s.range(0,di),period:di*Math.sqrt(t*t*t/(Sn*e))}}function ix(s,t,e,i){if(s>750)return"lava";if(s>400)return t>.6&&!i&&e.chance(.65)?"venus":"barren";if(s>=235&&s<=330&&t>.35&&t<4&&!i){let n=e.next();return n<.4?"terran":n<.7?"desert":"barren"}return s>=170&&s<420&&t>.25?e.chance(.55)?"desert":"barren":s<170&&e.chance(.6)?"ice":"barren"}function nx(s,t,e){return t?s<60&&e.chance(.6)?nn.neptunian:nn.icegiant:s<80?nn.cold:s<170?e.chance(.6)?nn.jovian:nn.saturnian:s<360?nn.water:s<850?nn.azure:nn.hot}function _c(s,t,e,i,n,r,a={}){let o=Sn*n/(i*i),l=t.int(1,2**31-1),c=tx(e==="lava"&&a.moon?Ia.sulfur:Ia[e]||Ia.barren,t),h=null,u=0,d=!1;e==="terran"&&(u=t.range(.5,2.2),h=Fs("terran",u,o,r,t),d=a.life??t.chance(.3)),e==="desert"&&(u=t.logRange(.004,.25),h=Fs("desert",u,o,r,t)),e==="venus"&&(u=t.range(40,95),h=Fs("venus",u,o,r,t)),e==="titan"&&(u=t.range(1.2,1.8),h=Fs("titan",u,o,r,t));let p={barren:.0045,ice:.0022,desert:.0032,lava:.0022,venus:.0018,titan:.0013,terran:.0028}[e],f=ue(i*p*(i<12e5?1.6:1),1500,14e3),v=r+(e==="venus"?420+t.range(0,60):e==="terran"?14*u:e==="titan"?6:0),g={seed:l,type:e,radius:i,amp:f,craters:{barren:1,ice:.45,desert:.45,lava:.05,venus:.08,titan:.12,terran:.06}[e]*t.range(.7,1.2),sea:e==="terran"?t.range(-.18,.1):e==="titan"?-.35:null,mare:e==="barren"?t.range(0,.9):0,life:d,palette:c};return{solid:!0,type:e,radius:i,mass:n,gravity:o,tempK:v,atmosphere:h,pressure:u,terrain:g,life:d,landable:o<26,oceans:g.sea!==null&&e==="terran"}}function Uu(s,t){let e=new ge(Ui(s.seed,11588069)),i=ex(s),n={starData:s,star:i,bodies:[],signals:[],seed:s.seed},r=Math.max(s.lum,1e-5),a=i.mass;if(t?.build)return t.build(n,e,Du),Lu(n),n;let o;switch(s.kind){case"main":o=s.cls==="O"?e.int(0,3):s.cls==="M"?e.int(1,6):e.int(2,9);break;case"giant":o=e.int(1,5);break;case"dwarf":o=e.int(0,3);break;case"brown":o=e.int(0,4);break;case"neutron":o=e.int(0,2);break;default:o=e.int(0,3)}t?.minPlanets&&(o=Math.max(o,t.minPlanets));let l=4.85*Math.sqrt(r),c=Math.max(e.logRange(.12,.45)*Math.sqrt(r),i.radius*6/ve,.012);s.kind==="giant"&&(c=Math.max(c,i.radius*8/ve)*1.5),(s.kind==="brown"||s.kind==="dwarf")&&(c=e.logRange(.004,.02)),(s.kind==="blackhole"||s.kind==="neutron")&&(c=e.logRange(.3,2));for(let h=0;h<o;h++){let u=c;c*=e.range(1.45,2.15);let d=278*Math.pow(r,.25)/Math.sqrt(u),p,f=u>l,v=e.next();if(f&&v<.5&&s.kind!=="brown"){let x=e.logRange(.12,6)*$n,R=Xn*e.range(.82,1.08)*(d>800?1.25:1);p=Pa(e,!1,R,x,d)}else if(f&&v<.78&&s.kind!=="brown"){let x=e.range(10,24)*De,R=wn*e.range(3.5,4.2);p=Pa(e,!0,R,x,d)}else if(!f&&v<.04&&s.cls!=="M"&&s.kind==="main"){let x=e.logRange(.4,3)*$n;p=Pa(e,!1,Xn*e.range(1.1,1.4),x,d)}else{let x=f?e.logRange(.005,.6):e.logRange(.02,4.5),R=wn*Math.pow(x,x<1?.3:.27)*e.range(.95,1.05),E=ix(d,x,e,!1);p=_c(n,e,E,R,x*De,d)}p.kind="planet",p.parent=-1,p.index=n.bodies.length,p.name=`${s.name} ${Au(h)}`,p.orbit=yc(e,u*ve,a,.06),p.eqTemp=d,Fu(p,e,u<.11*Math.sqrt(r)||s.kind==="brown"),n.bodies.push(p);let g=p.index,m=Nu(p.orbit.a,p.mass,a),_=0;p.type==="gas"||p.type==="icegiant"?_=e.int(1,p.type==="gas"?5:3):p.radius>3e6&&e.chance(.35)&&(_=e.int(1,2));let y=p.radius*e.range(2.8,4.5);p.rings&&(y=Math.max(y,p.rings.outer*1.25));for(let x=0;x<_&&!(y>m*.35);x++){let R=p.type==="gas"||p.type==="icegiant",E=R?e.logRange(.0015,.03):e.logRange(4e-4,.012),A=wn*Math.pow(E,.3)*e.range(.95,1.08),P=d<170&&e.chance(.65)?"ice":"barren";R&&x===0&&e.chance(.25)&&(P="lava"),R&&d<130&&E>.012&&e.chance(.3)&&(P="titan");let w=P==="lava"?900:d*.98,M=_c(n,e,P,A,E*De,w,{moon:!0});M.kind="moon",M.parent=g,M.index=n.bodies.length,M.name=`${p.name} ${Ru(x)}`,M.orbit=yc(e,y,p.mass,.04),M.eqTemp=d,M.spin={locked:!0,tilt:[0,0,0,1],period:M.orbit.period,phase0:0},n.bodies.push(M),y*=e.range(1.5,2.3)}}return t?.after&&t.after(n,e,Du),Lu(n),sx(n,e,t),n}function Pa(s,t,e,i,n){let r=nx(n,t,s).map(ui),a=Sn*i/(e*e),o={solid:!1,type:t?"icegiant":"gas",radius:e,mass:i,gravity:a,tempK:n,landable:!1,atmosphere:Fs("gas",1,a,Math.max(n,60),s),gas:{seed:s.int(1,2**31-1),palette:r,bands:t?s.range(4,9):s.range(10,22),turbulence:t?s.range(.15,.4):s.range(.5,1),storms:s.range(0,1),glow:n>850?ue((n-850)/900,0,1):0}};o.atmosphere.top=e*.012,o.atmosphere.H=o.atmosphere.top/8,o.atmosphere.Hm=o.atmosphere.H*.5;let l=cc(r[1],[.6,.75,1],t?.6:.35);if(o.atmosphere.tauR=wa([.15/l[0],.15/l[1],.15/l[2]],.6).map((c,h)=>c*[.5,.8,1.4][h]),s.chance(t?.3:.38)){let c=e*s.range(1.22,1.5),h=e*s.range(1.85,2.6);o.rings={inner:c,outer:h,seed:s.int(1,2**31-1),color:n<170?cc(ui("#d9cfbf"),ui("#b8a58a"),s.next()):ui("#6b5f55"),opacity:t?s.range(.15,.5):s.range(.5,.95)}}return o}function Fu(s,t,e){let i=t.chance(.06)?t.range(.5,1.6):t.range(0,.5),n=Ne(ii(0,1,0,t.range(0,di)),ii(1,0,0,i));if(e)s.spin={locked:!0,tilt:[0,0,0,1],period:s.orbit.period,phase0:0};else{let r=s.solid?t.logRange(9,90)*3600:t.range(9,18)*3600;s.spin={locked:!1,tilt:n,period:t.chance(.1)?-r:r,phase0:t.range(0,di),tiltAngle:i}}}function Lu(s){for(let t of s.bodies){let e=t.parent<0?s.star.mass:s.bodies[t.parent].mass;t.soi=Math.max(t.radius*3,t.orbit.a*Math.pow(t.mass/e,.4)),t.parent>=0&&(t.soi=Math.min(t.soi,t.orbit.a*.45)),t.children=s.bodies.filter(i=>i.parent===t.index).map(i=>i.index),t.id=`${s.starData.id}/${t.index}`}s.extent=s.bodies.reduce((t,e)=>Math.max(t,e.parent<0?e.orbit.a:0),0)||ve}function sx(s,t,e){let i=s.bodies;if(!i.length)return;let n=i.filter(a=>a.solid&&a.landable&&a.type!=="venus"),r=t.next();if(!e?.noRandomSignals){if(r<.11){let a=t.pick(i);s.signals.push(Mc("probe",a,t))}else if(r<.16&&n.length)s.signals.push(bc("wreck",t.pick(n),t));else if(r<.185&&n.length)s.signals.push(bc("monolith",t.pick(n),t));else if(r<.2){let a=i.filter(o=>o.kind==="planet").sort((o,l)=>l.radius-o.radius)[0];a&&s.signals.push(Mc("ring",a,t,t.range(1.8,3.2)))}}}function Mc(s,t,e,i){let n=i??e.range(1.12,1.6),r=t.radius*n+(t.rings,0);return{type:s,body:t.index,placement:"orbit",orbit:{a:t.rings&&n<t.rings.outer/t.radius+.1?t.rings.outer*1.15:r,inc:e.range(-.5,.5),phase0:e.range(0,di),lan:e.range(0,di)},seed:e.int(1,2**31-1)}}function bc(s,t,e,i,n){return{type:s,body:t.index,placement:"surface",lat:i??e.range(-.9,.9),lon:n??e.range(-Math.PI,Math.PI),seed:e.int(1,2**31-1)}}var Du={makeSolid:_c,makeGas:Pa,makeOrbit:yc,spinFor:Fu,orbitSignal:Mc,surfaceSignal:bc,hillRadius:Nu,PAL:Ia,GAS_PALETTES:nn,atmosphere:Fs};function Os(s,t,e,i=[0,0,0]){let n=s.bodies[t],r=n.orbit,a=r.phase0+di*e/r.period,o=Wt(r.q,[r.a*Math.cos(a),0,r.a*Math.sin(a)]);if(n.parent>=0){let l=Os(s,n.parent,e);i[0]=l[0]+o[0],i[1]=l[1]+o[1],i[2]=l[2]+o[2]}else i[0]=o[0],i[1]=o[1],i[2]=o[2];return i}function Ou(s,t,e){let n=Os(s,t,e-1),r=Os(s,t,e+1);return[(r[0]-n[0])/2,(r[1]-n[1])/2,(r[2]-n[2])/2]}function ur(s,t,e){let i=s.bodies[t],n=i.spin;if(n.locked){let r=i.orbit,a=r.phase0+di*e/r.period;return Ne(r.q,ii(0,1,0,Math.PI-a))}return Ne(n.tilt,ii(0,1,0,n.phase0+di*e/n.period))}function ku(s,t){let e=s.bodies[t],i=di/e.spin.period,n=e.spin.locked?Wt(e.orbit.q,[0,-1,0]):Wt(e.spin.tilt,[0,1,0]);return[n[0]*i,n[1]*i,n[2]*i]}function Bu(s,t,e,i){let n=s.bodies[t.body],r=i||Os(s,t.body,e);if(t.placement==="orbit"){let c=t.orbit,h=di*Math.sqrt(c.a**3/(Sn*n.mass))*6e4,u=c.phase0+di*e/h,d=Ne(ii(0,1,0,c.lan),ii(1,0,0,c.inc)),p=Wt(d,[c.a*Math.cos(u),0,c.a*Math.sin(u)]);return[r[0]+p[0],r[1]+p[1],r[2]+p[2]]}let a=ur(s,t.body,e),o=t.local||Sc(t.lat,t.lon,n.radius),l=Wt(a,o);return[r[0]+l[0],r[1]+l[1],r[2]+l[2]]}function Sc(s,t,e){return[e*Math.cos(s)*Math.cos(t),e*Math.sin(s),e*Math.cos(s)*Math.sin(t)]}var ks={barren:"Airless rock",ice:"Ice world",desert:"Arid world",lava:"Molten world",venus:"Greenhouse world",titan:"Hazy world",terran:"Temperate world",gas:"Gas giant",icegiant:"Ice giant"};var sn=`#include <common>
#include <logdepthbuf_pars_vertex>
`,Oi=`#include <common>
#include <logdepthbuf_pars_fragment>
`;function Hu(s){let t=.2126*s[0]+.7152*s[1]+.0722*s[2];return[s[0]/t,s[1]/t,s[2]/t]}var rx=`${sn}
varying vec3 vObj; varying vec3 vN; varying vec3 vV;
void main() {
  vObj = position;
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vV = -wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
  #include <logdepthbuf_vertex>
}`,ax=`${Oi}
uniform vec3 uColor; uniform float uRadiance; uniform float uTime; uniform float uGran; uniform float uSpots; uniform float uSeed;
varying vec3 vObj; varying vec3 vN; varying vec3 vV;
${Ni}
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
}`,ox=`${sn}
varying vec2 vQ;
uniform float uScale;
void main() {
  vQ = position.xy * uScale;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float r = length(mv.xyz);
  mv.xy += position.xy * uScale * uRad;
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}`.replace("uniform float uScale;","uniform float uScale; uniform float uRad;"),lx=`${Oi}
uniform vec3 uColor; uniform float uIntensity; uniform float uTime; uniform float uSeed;
varying vec2 vQ;
${Ni}
void main() {
  #include <logdepthbuf_fragment>
  float r = length(vQ);
  if (r < 0.98) discard;
  float a = atan(vQ.y, vQ.x);
  float streak = 0.6 + 0.4 * fbm3(vec3(cos(a) * 3.0, sin(a) * 3.0, uSeed + uTime * 0.002), 4);
  float fall = pow(1.0 / r, 6.0) * 0.6 + pow(1.0 / r, 2.5) * 0.04 * streak;
  fall *= smoothstep(0.98, 1.02, r);
  gl_FragColor = vec4(uColor * uIntensity * fall, 1.0);
}`,wc=class{constructor(t){this.star=t,this.group=new oe;let e=Hu(t.color);this.color=e;let i=t.starKind!=="blackhole",n=t.starKind==="giant"?9:t.starKind==="dwarf"?80:40;this.mat=new Yt({vertexShader:rx,fragmentShader:ax,uniforms:{uColor:{value:new C(...e)},uRadiance:{value:1},uTime:{value:0},uGran:{value:n},uSpots:{value:t.temp<6200?.8:.1},uSeed:{value:t.radius%97}}}),this.mesh=new yt(new ke(1,128,64),this.mat),this.mesh.frustumCulled=!1,this.mesh.visible=i,this.group.add(this.mesh),this.coronaMat=new Yt({vertexShader:ox,fragmentShader:lx,transparent:!0,depthWrite:!1,blending:Re,blendSrc:ce,blendDst:ce,uniforms:{uColor:{value:new C(...e)},uIntensity:{value:1},uTime:{value:0},uSeed:{value:3.7},uScale:{value:7},uRad:{value:1}}}),this.corona=new yt(new Ts(2,2),this.coronaMat),this.corona.frustumCulled=!1,this.corona.visible=i&&t.starKind!=="neutron",this.group.add(this.corona),this.radiance=Math.max(t.lum,1e-6)*ve*ve/(Math.PI*t.radius*t.radius),t.starKind==="neutron"&&this.buildPulsar()}buildAccretion(){let t=this.star.radius,e=new rr(t*3,t*14,256,1),i=new Yt({vertexShader:`${sn} varying vec3 vP; varying vec3 vW; void main(){ vP = position; vec4 wp = modelMatrix*vec4(position,1.0); vW = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp; 
#include <logdepthbuf_vertex>
}`,fragmentShader:`${Oi} uniform float uTime; uniform float uRs; uniform vec3 uAxisX; varying vec3 vP; varying vec3 vW; ${Ni}
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
      }`,uniforms:{uTime:{value:0},uRs:{value:t},uAxisX:{value:new C(1,0,0)}},side:Me,transparent:!0,depthWrite:!1,blending:Re,blendSrc:ce,blendDst:ce});this.accretion=new yt(e,i),this.accretion.rotation.x=Math.PI/2+.25,this.accretion.frustumCulled=!1,this.group.add(this.accretion)}buildPulsar(){let e=new fa(24e7,4e9,32,1,!0);e.translate(0,4e9/2,0);let i=new Yt({vertexShader:`${sn} varying float vT; varying vec3 vN; varying vec3 vW; void main(){ vT = position.y / ${4e9.toExponential()}; vN = normalize(mat3(modelMatrix)*normal); vec4 wp = modelMatrix*vec4(position,1.0); vW = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp; 
#include <logdepthbuf_vertex>
}`,fragmentShader:`${Oi} varying float vT; varying vec3 vN; varying vec3 vW; void main(){ 
#include <logdepthbuf_fragment>
 float edge = pow(1.0 - abs(dot(normalize(vN), normalize(-vW))), 2.0); float f = (1.0 - edge) * pow(1.0 - vT, 3.0); gl_FragColor = vec4(vec3(0.55, 0.7, 1.0) * f * 0.6, 1.0); }`,side:Me,transparent:!0,depthWrite:!1,blending:Re,blendSrc:ce,blendDst:ce});this.beams=new oe;let n=new yt(e,i),r=new yt(e,i);r.rotation.z=Math.PI,n.frustumCulled=r.frustumCulled=!1,this.beams.add(n,r),this.beams.rotation.z=.5,this.spinner=new oe,this.spinner.add(this.beams),this.group.add(this.spinner)}update(t,e,i,n){this.group.position.set(e[0],e[1],e[2]),this.mesh.scale.setScalar(this.star.radius),this.mat.uniforms.uRadiance.value=this.radiance,this.mat.uniforms.uTime.value=t.time,this.coronaMat.uniforms.uRad.value=this.star.radius,this.coronaMat.uniforms.uIntensity.value=this.radiance*.02,this.coronaMat.uniforms.uTime.value=t.time;let r=n<t.pixelAngle*.7;return this.mesh.visible=this.star.starKind!=="blackhole"&&!r,this.corona.visible=this.mesh.visible&&this.star.starKind!=="neutron",this.accretion&&(this.accretion.material.uniforms.uTime.value=t.time),this.spinner&&(this.spinner.rotation.y=t.time*2*Math.PI*1.3),r}dispose(){this.group.traverse(t=>{t.geometry?.dispose?.(),t.material?.dispose?.()})}};function cx(s){let e=new Uint8Array(4096),i=new ge(s.seed),n=[];for(let o=0;o<i.int(1,4);o++)n.push({x:i.range(.15,.85),w:i.range(.004,.03)});let r=[];for(let o=0;o<18;o++)r.push({f:i.logRange(6,260),p:i.range(0,6.28),a:i.range(.1,1)/(1+o*.2)});for(let o=0;o<1024;o++){let l=o/1023,c=.55;for(let u of r)c+=.18*u.a*Math.sin(l*u.f+u.p);c=Math.max(0,Math.min(1,c));for(let u of n)c*=Math.min(1,Math.abs(l-u.x)/u.w);c*=Math.min(1,l/.04)*Math.min(1,(1-l)/.02);let h=.85+.15*Math.sin(l*9+s.seed);e[o*4]=Math.round(c*255),e[o*4+1]=Math.round(h*255),e[o*4+2]=0,e[o*4+3]=255}let a=new oa(e,1024,1,ze);return a.minFilter=we,a.magFilter=we,a.wrapS=ji,a.needsUpdate=!0,a}var zu=`
uniform sampler2D tRing; uniform float uInner; uniform float uOuter; uniform float uOpacity;
float ringDensity(float r) {
  if (r < uInner || r > uOuter) return 0.0;
  return texture2D(tRing, vec2((r - uInner) / (uOuter - uInner), 0.5)).r * uOpacity;
}`,hx=`${sn}
varying vec3 vObj; varying vec3 vW;
void main() { vObj = position; vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,ux=`${Oi}
uniform vec3 uColor; uniform vec3 uSunColor; uniform vec3 uSunLocal; uniform vec3 uCamLocal; uniform float uR;
varying vec3 vObj; varying vec3 vW;
${zu}
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
}`,Ec=class{constructor(t){let e=t.rings;this.body=t,this.tex=cx(e);let i=new rr(e.inner,e.outer,256,4);i.rotateX(-Math.PI/2),this.mat=new Yt({vertexShader:hx,fragmentShader:ux,transparent:!0,depthWrite:!1,side:Me,blending:Re,blendSrc:ce,blendDst:xs,uniforms:{tRing:{value:this.tex},uInner:{value:e.inner/t.radius},uOuter:{value:e.outer/t.radius},uOpacity:{value:e.opacity},uColor:{value:new C(...e.color)},uSunColor:{value:new C},uSunLocal:{value:new C},uCamLocal:{value:new C},uR:{value:t.radius}}}),this.mesh=new yt(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2}},dx=`${sn}
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
void main() {
  vObj = position; vN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
  #include <logdepthbuf_vertex>
}`,fx=`#include <common>
#include <logdepthbuf_pars_fragment>
uniform vec3 uP0; uniform vec3 uP1; uniform vec3 uP2; uniform vec3 uP3; uniform vec3 uP4;
uniform float uBands; uniform float uTurb; uniform float uStorms; uniform float uSeed; uniform float uTime; uniform float uGlow;
uniform vec3 uSunDir; uniform vec3 uSunColor; uniform vec3 uSunLocal; uniform vec3 uFillDir; uniform vec3 uFillColor;
uniform float uHasRings; uniform float uDist; uniform float uProj; uniform float uR; uniform vec4 uSpot;
uniform vec3 uCenterRel; uniform mat3 uToBody; uniform vec3 uCamFwd;
varying vec3 vObj; varying vec3 vN; varying vec3 vW;
${Ni}
${Sa}
${zu}
${Ls}
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
  // The mesh is only a proxy; the cloud tops are found by intersecting the true sphere,
  // so they stay smooth and correct even a few kilometres above them.
  vec3 rd = viewRay();
  vec3 ro = -uCenterRel / uR;
  float tc = -dot(ro, rd);
  vec3 pc = ro + rd * tc;
  float h2 = dot(pc, pc);
  if (h2 > 1.0) discard;
  float th = tc - sqrt(1.0 - h2);
  if (th <= 0.0) discard;
  vec3 hitW = rd * th * uR;
  vec3 nW = normalize(hitW - uCenterRel);
  #if defined( USE_LOGDEPTHBUF )
    gl_FragDepth = log2(1.0 + th * uR * dot(rd, uCamFwd)) * logDepthBufFC * 0.5;
  #endif
  vec3 vNh = nW;
  vec3 vWh = hitW;
  vec3 p = uToBody * nW;
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
  vec3 N = vNh;
  vec3 V = -rd;
  float NdL = dot(N, uSunDir);
  float mu = max(dot(N, V), 0.0);
  float diff = smoothstep(-0.08, 0.3, NdL) * (0.6 * max(NdL, 0.0) + 0.4 * smoothstep(-0.05, 0.4, NdL));
  float limb = 0.75 + 0.25 * pow(mu, 0.4);
  float sh = eclipse(vWh, uSunDir);
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
}`,Lc=`${sn}
varying vec3 vW;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,px=`${Oi}
uniform float uSolid;
varying vec3 vW;
${ba}
${Ls}
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
}`,Tc=class{constructor(t){this.body=t,this.uniforms={...vc(),...en,uSolid:{value:t.solid?1:0}},xc(this.uniforms,t),this.mat=new Yt({vertexShader:Lc,fragmentShader:px,uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:Re,blendSrc:ce,blendDst:xs,side:Ye});let e=t.radius*this.uniforms.aRa.value;this.mesh=new yt(new ke(e,128,64),this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1}},mx=`${sn}
varying vec3 vW;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
#include <logdepthbuf_vertex>
}`,gx=`${Oi}
uniform vec3 cCenter; uniform float cRadius; uniform float cGround; uniform mat3 cToBody;
uniform vec3 cSunDir; uniform vec3 cSunColor; uniform vec3 cColor; uniform float cCover; uniform float cOpacity;
uniform float cSeed; uniform float cTime; uniform float cVenus; uniform float cProj;
varying vec3 vW;
${Ni}
${Ls}
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
}`,Ac=class{constructor(t){this.body=t;let e=t.type==="venus";this.alt=e?62e3:9e3;let i=t.radius+this.alt;this.uniforms={cCenter:{value:new C},cRadius:{value:i},cGround:{value:t.radius+(t.terrain?.sea===null,0)},cToBody:{value:new Bt},cSunDir:{value:new C},cSunColor:{value:new C},cColor:{value:new C(...e?[.92,.84,.62]:[.95,.96,.98])},cCover:{value:e?1:.42+(t.terrain?.seed||0)%100/100*.2},cOpacity:{value:e?1:.92},cSeed:{value:(t.terrain?.seed||7)%997/31},cTime:{value:0},cVenus:{value:e?1:0},cProj:{value:800},...en},this.mat=new Yt({vertexShader:mx,fragmentShader:gx,uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:Re,blendSrc:ce,blendDst:vn,side:Ye}),this.mesh=new yt(new ke(i*1.003,96,48),this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=.5}update(t,e,i,n,r){let a=this.uniforms;a.cCenter.value.set(e[0],e[1],e[2]),a.cSunDir.value.set(n.sunDir[0],n.sunDir[1],n.sunDir[2]),a.cSunColor.value.set(n.sun[0],n.sun[1],n.sun[2]),a.cTime.value=t.time,a.cProj.value=t.projScale;let o=new ie().makeRotationFromQuaternion(new Ie(i[0],i[1],i[2],i[3])).invert();a.cToBody.value.setFromMatrix4(o);let l=r<a.cRadius.value*1.002;this.mat.side=l?be:Ye}},vx=`${Oi}
uniform vec3 iUp; uniform vec3 iSunDir; uniform vec3 iSunColor; uniform vec3 iHaze;
uniform float iLight; uniform float iTauUp; uniform float iFlash; uniform vec3 iFlashDir; uniform float iThermal;
uniform vec3 iLampDir; uniform float iLamp;
varying vec3 vW;
${Ls}
void main() {
  #include <logdepthbuf_fragment>
  vec3 rd = viewRay();
  float mu = dot(rd, iUp);
  float alpha = mu > 0.0 ? 1.0 - exp(-iTauUp / max(mu, 0.03)) : 1.0;
  float glow = iLight * (0.2 + 0.8 * smoothstep(-0.6, 1.0, mu));
  vec3 col = iHaze * iSunColor * glow / 3.14159;
  col += iSunColor * pow(max(dot(rd, iSunDir), 0.0), 6.0) * iLight * 0.12;
  col += iHaze * iFlash * (0.25 + 0.75 * pow(max(dot(rd, iFlashDir), 0.0), 3.0));
  col += vec3(1.0, 0.33, 0.1) * iThermal * (0.55 + 0.45 * (1.0 - mu));
  // the floodlight lights up the gas in front of the ship
  float beam = max(dot(rd, iLampDir), 0.0);
  col += iHaze * iLamp * (pow(beam, 24.0) * 1.2 + pow(beam, 4.0) * 0.15);
  gl_FragColor = vec4(col * alpha, alpha);
}`,Rc=class{constructor(t){this.body=t,this.uniforms={iUp:{value:new C(0,1,0)},iSunDir:{value:new C},iSunColor:{value:new C},iHaze:{value:new C(.8,.7,.6)},iLight:{value:1},iTauUp:{value:0},iFlash:{value:0},iFlashDir:{value:new C(0,-1,0)},iThermal:{value:0},iLampDir:{value:new C(0,0,-1)},iLamp:{value:0},...en},this.mat=new Yt({vertexShader:Lc,fragmentShader:vx,uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:Re,blendSrc:ce,blendDst:vn,side:be}),this.mesh=new yt(new ke(t.radius*1.0004,96,48),this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1.5,this.mesh.visible=!1}},xx=`${Oi}
uniform vec3 bCenter;
uniform mat3 bToDisk;
uniform float bRb;
uniform float bIn;
uniform float bOut;
uniform float bEmit;
uniform float bTime;
uniform float bSkyI;
uniform float bInside;
uniform samplerCube tSky;
varying vec3 vW;
${Ls}
float hh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hh(i), hh(i + vec2(1.0, 0.0)), f.x), mix(hh(i + vec2(0.0, 1.0)), hh(i + vec2(1.0, 1.0)), f.x), f.y); }
vec3 ramp(float t) {
  vec3 c0 = vec3(0.35, 0.05, 0.01), c1 = vec3(1.0, 0.28, 0.06), c2 = vec3(1.0, 0.62, 0.28), c3 = vec3(1.0, 0.93, 0.82), c4 = vec3(0.72, 0.84, 1.0);
  if (t < 0.5) return mix(c0, c1, t / 0.5);
  if (t < 1.0) return mix(c1, c2, (t - 0.5) / 0.5);
  if (t < 1.6) return mix(c2, c3, (t - 1.0) / 0.6);
  return mix(c3, c4, clamp((t - 1.6) / 1.0, 0.0, 1.0));
}
vec3 sky(vec3 dDisk) { return textureLod(tSky, transpose(bToDisk) * dDisk, 0.0).rgb * bSkyI; }
// cheap point stars for the squeezed sky seen from inside (the cube holds only the glow)
vec3 pointStars(vec3 d) {
  vec3 p = d * 160.0;
  vec3 i = floor(p);
  vec3 f = fract(p) - 0.5;
  float h = fract(sin(dot(i, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  float s = step(0.975, h) * exp(-dot(f, f) * 40.0) * (h - 0.975) * 40.0;
  return s * mix(vec3(1.0, 0.82, 0.66), vec3(0.72, 0.84, 1.0), fract(h * 91.7));
}
void main() {
  #include <logdepthbuf_fragment>
  vec3 rd = bToDisk * viewRay();
  vec3 ro = bToDisk * (-bCenter);
  if (bInside > 0.0) {
    // Inside the horizon every path leads inward. Behind you, the outside universe
    // shrinks to a bright, blueshifted circle as the singularity approaches.
    vec3 outw = normalize(ro);
    float a = acos(clamp(dot(rd, outw), -1.0, 1.0));
    float halfA = mix(1.3, 0.015, bInside);
    float m = smoothstep(halfA, halfA * 0.92, a);
    vec3 perp = rd - outw * dot(rd, outw);
    float pl = length(perp);
    float sa = min(a / halfA, 1.0) * 1.5707963;
    vec3 sd = pl > 1e-5 ? normalize(outw * cos(sa) + perp / pl * sin(sa)) : outw;
    vec3 col = (sky(sd) * (3.0 + 40.0 * bInside * bInside) + pointStars(sd) * bEmit * (0.25 + bInside)) * m;
    col *= mix(vec3(1.0), vec3(0.75, 0.9, 1.25), bInside);
    col += vec3(1.0, 0.4, 0.15) * bEmit * 0.6 * exp(-pow((a - halfA) / (halfA * 0.08 + 0.004), 2.0));
    gl_FragColor = vec4(min(col, vec3(6e4)), 1.0);
    return;
  }
  vec3 pos = ro;
  float camR = length(ro);
  if (camR > bRb) {
    float tc = -dot(ro, rd);
    vec3 pc = ro + rd * tc;
    float h2c = dot(pc, pc);
    if (h2c > bRb * bRb) { gl_FragColor = vec4(sky(rd), 1.0); return; }
    pos = ro + rd * max(tc - sqrt(bRb * bRb - h2c), 0.0);
  }
  vec3 vel = rd;
  vec3 hv = cross(pos, vel);
  float h2 = dot(hv, hv);
  vec3 col = vec3(0.0);
  float trans = 1.0;
  bool lost = false;
  for (int i = 0; i < 260; i++) {
    float r2 = dot(pos, pos);
    float r = sqrt(r2);
    if (r < 1.0) { lost = true; break; }
    if (r > bRb * 1.02 && dot(pos, vel) > 0.0) break;
    float dt = clamp(0.07 * (r - 0.9), 0.012, 2.5);
    vec3 acc = -1.5 * h2 * pos / (r2 * r2 * r);
    vec3 pm = pos + vel * (0.5 * dt);
    vec3 vm = vel + acc * (0.5 * dt);
    float rm2 = dot(pm, pm);
    vec3 accm = -1.5 * h2 * pm / (rm2 * rm2 * sqrt(rm2));
    vec3 np = pos + vm * dt;
    vec3 nv = vel + accm * dt;
    if (pos.y * np.y < 0.0) {
      float f = pos.y / (pos.y - np.y);
      vec3 hp = mix(pos, np, f);
      float rr = length(hp.xz);
      if (rr > bIn && rr < bOut) {
        float x = bIn / rr;
        float prof = pow(x, 0.75) * pow(max(1.0 - sqrt(x), 0.0), 0.25) * 2.4;
        float beta = min(sqrt(0.5 / max(rr - 1.0, 0.2)), 0.75);
        vec3 vdir = normalize(vec3(-hp.z, 0.0, hp.x));
        vec3 toObs = -normalize(vm);
        float gam = inversesqrt(1.0 - beta * beta);
        float D = 1.0 / (gam * (1.0 - beta * dot(vdir, toObs)));
        float g = D * sqrt(max(1.0 - 1.0 / rr, 0.02));
        float phi = atan(hp.z, hp.x) + bTime * 1.2 * pow(rr, -1.5);
        vec2 q = vec2(cos(phi), sin(phi)) * rr;
        float n = 0.55 + 0.45 * vn(q * 1.1 + 3.0) * (0.6 + 0.4 * vn(q * 3.7 - 7.0));
        float lanes = 0.75 + 0.25 * sin(rr * 5.0 + vn(q * 0.6) * 4.0);
        float a = 0.92 * smoothstep(bIn, bIn * 1.12, rr) * smoothstep(bOut, bOut * 0.65, rr) * (0.55 + 0.45 * n);
        vec3 em = ramp(prof * g) * pow(g, 3.0) * prof * prof * n * lanes * bEmit;
        col += trans * a * em;
        trans *= 1.0 - a;
      }
    }
    pos = np; vel = nv;
    if (trans < 0.01) break;
  }
  if (!lost) col += trans * sky(normalize(vel));
  // stay inside half-float range: an Inf here becomes a black hole in the bloom
  gl_FragColor = vec4(min(col, vec3(6e4)), 1.0);
}`,Cc=class{constructor(t,e){this.star=t,this.Rs=t.radius,this.Rb=60;let i=new C(.28,1,.42).normalize(),n=new C(1,0,0).sub(i.clone().multiplyScalar(i.x)).normalize(),r=new C().crossVectors(n,i),a=new Bt().set(n.x,n.y,n.z,i.x,i.y,i.z,r.x,r.y,r.z);this.diskNormal=[i.x,i.y,i.z],this.uniforms={bCenter:{value:new C},bToDisk:{value:a},bRb:{value:this.Rb},bIn:{value:3},bOut:{value:22},bEmit:{value:1},bTime:{value:0},bSkyI:{value:1},bInside:{value:0},tSky:{value:e},...en},this.mat=new Yt({vertexShader:Lc,fragmentShader:xx,uniforms:this.uniforms,side:Ye}),this.mesh=new yt(new ke(this.Rs*this.Rb,96,48),this.mat),this.mesh.frustumCulled=!1,this.group=new oe,this.group.add(this.mesh)}update(t,e,i,n,r){this.group.position.set(e[0],e[1],e[2]);let a=this.uniforms;a.bCenter.value.set(e[0]/this.Rs,e[1]/this.Rs,e[2]/this.Rs),a.bEmit.value=7/Math.max(n,1e-9),a.bTime.value=t.time*Math.min(1,3e8/this.Rs),a.bInside.value=r||0,a.bSkyI.value=r>0?2/Math.max(n,1e-9):1;let o=i<this.Rs*this.Rb*1.001||r>0;this.mat.side=o?be:Ye;let l=Math.atan(this.Rs*this.Rb/i)<t.pixelAngle*3&&!r;return this.mesh.visible=!l,l}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}},yx=`${sn}
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
}`,_x=`${Oi}
varying vec3 vCol;
void main() {
  #include <logdepthbuf_fragment>
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  gl_FragColor = vec4(vCol * exp(-r2 * 4.5), 1.0);
}`,Ic=class{constructor(t=96){this.max=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3);let e=new me;e.setAttribute("position",new le(this.pos,3).setUsage(or)),e.setAttribute("aCol",new le(this.col,3).setUsage(or)),e.setDrawRange(0,0),this.mat=new Yt({vertexShader:yx,fragmentShader:_x,transparent:!0,depthWrite:!1,blending:Re,blendSrc:ce,blendDst:ce,uniforms:{uPx:{value:1},uPixOmega:{value:1e-6}}}),this.points=new Mn(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,this.n=0}begin(){this.n=0}add(t,e,i){if(this.n>=this.max)return;let n=Math.min(e,1e12)/e,r=this.n++;this.pos[r*3]=t[0]*n,this.pos[r*3+1]=t[1]*n,this.pos[r*3+2]=t[2]*n,this.col[r*3]=i[0],this.col[r*3+1]=i[1],this.col[r*3+2]=i[2]}end(){let t=this.points.geometry;t.attributes.position.needsUpdate=!0,t.attributes.aCol.needsUpdate=!0,t.setDrawRange(0,this.n)}},Vu={barren:.12,ice:.6,desert:.25,lava:.08,venus:.75,titan:.22,terran:.3,gas:.5,icegiant:.5},Pc=class{constructor(t,e){if(this.body=t,this.sys=e,this.group=new oe,this.inertial=new oe,this.albedo=Vu[t.type]??.3,t.solid)this.material=Pu(t),xc(this.material.uniforms,t),this.terrain=new Ca({...t.terrain,palette:void 0,radius:t.radius},this.material,this.group),this.detailOrigin=null;else{let i=t.gas.palette,n=r=>new C(...i[r%i.length]);this.material=new Yt({vertexShader:dx,fragmentShader:fx,uniforms:{uP0:{value:n(0)},uP1:{value:n(1)},uP2:{value:n(2)},uP3:{value:n(3)},uP4:{value:n(4)},uBands:{value:t.gas.bands},uTurb:{value:t.gas.turbulence},uStorms:{value:t.gas.storms},uSeed:{value:t.gas.seed%1e3/37},uTime:{value:0},uGlow:{value:t.gas.glow},uSunDir:{value:new C},uSunColor:{value:new C},uSunLocal:{value:new C},uFillDir:{value:new C},uFillColor:{value:new C},uHasRings:{value:t.rings?1:0},uDist:{value:1},uProj:{value:800},uR:{value:t.radius},uOcc:{value:[new Jt,new Jt,new Jt,new Jt]},uOccCount:{value:0},uSunAngR:{value:.005},tRing:{value:null},uInner:{value:1},uOuter:{value:1},uOpacity:{value:0},uSpot:{value:new Jt(t.gas.seed%6.28,-.38,.11,t.type==="gas"&&t.gas.storms>.45&&t.tempK<200?1:0)},uCenterRel:{value:new C},uToBody:{value:new Bt},uCamFwd:{value:new C(0,0,-1)},...en}}),this.sphere=new yt(new ke(t.radius*1.02,160,96),this.material),this.sphere.frustumCulled=!1,this.group.add(this.sphere),this.interior=new Rc(t),this.inertial.add(this.interior.mesh)}if(t.atmosphere&&(this.atmo=new Tc(t),this.inertial.add(this.atmo.mesh)),t.solid&&(t.type==="venus"||t.type==="terran")&&(this.clouds=new Ac(t),this.inertial.add(this.clouds.mesh)),t.rings&&(this.rings=new Ec(t),this.ringFrame=new oe,this.ringFrame.add(this.rings.mesh),this.inertial.add(this.ringFrame),!t.solid)){let i=this.material.uniforms;i.tRing.value=this.rings.tex,i.uInner.value=this.rings.mat.uniforms.uInner.value,i.uOuter.value=this.rings.mat.uniforms.uOuter.value,i.uOpacity.value=t.rings.opacity}}update(t,e,i,n,r,a){let o=this.body,l=r<t.pixelAngle*.8;if(this.group.visible=!l,this.inertial.visible=!l||this.rings&&r*(o.rings.outer/o.radius)>t.pixelAngle,this.group.position.set(e[0],e[1],e[2]),this.group.quaternion.set(i[0],i[1],i[2],i[3]),this.inertial.position.copy(this.group.position),this.ringFrame){let u=o.spin.locked?o.orbit.q:o.spin.tilt;this.ringFrame.quaternion.set(u[0],u[1],u[2],u[3])}if(l)return!0;let c=a.sunDir,h=this.material.uniforms;h.uSunDir.value.set(c[0],c[1],c[2]),h.uSunColor.value.set(a.sun[0],a.sun[1],a.sun[2]),h.uFillDir.value.set(a.fillDir[0],a.fillDir[1],a.fillDir[2]),h.uFillColor.value.set(a.fill[0],a.fill[1],a.fill[2]),h.uSunAngR.value=a.sunAngR,h.uOccCount.value=a.occ.length;for(let u=0;u<4;u++){let d=a.occ[u];d&&h.uOcc.value[u].set(d[0],d[1],d[2],d[3])}if(o.solid){h.uTime.value=t.time,h.uProj.value=t.projScale,h.aCenter.value.set(e[0],e[1],e[2]),h.aSunDir.value.copy(h.uSunDir.value),h.aSunColor.value.copy(h.uSunColor.value);let u=t.spot;h.uSpotPos.value.set(u.pos[0],u.pos[1],u.pos[2]),h.uSpotDir.value.set(u.dir[0],u.dir[1],u.dir[2]),h.uSpotColor.value.setScalar(u.on?u.intensity:0),h.uSpotCos.value=u.cos;let d=je(i),p=Wt(d,[-e[0],-e[1],-e[2]]);(!this.detailOrigin||Math.hypot(p[0]-this.detailOrigin[0],p[1]-this.detailOrigin[1],p[2]-this.detailOrigin[2])>2e4)&&(this.detailOrigin=p.slice());let f=this.detailOrigin,v=this.material,g=new C;this.terrain.update(p,t.frustum,(m,_,y)=>Wt(i,[m,_,y]),t.projScale);for(let m of this.terrain.visibleList)if(!m.onBeforeRender.__set){let _=m.position;m.onBeforeRender=()=>{let y=this.detailOrigin;v.uniforms.uPatchOffset.value.set(_.x-y[0],_.y-y[1],_.z-y[2]),v.uniformsNeedUpdate=!0},m.onBeforeRender.__set=!0}}else{let u=this.interior,d=o.radius-n;if(u.mesh.visible=d>0,d>0&&t.air){let f=u.uniforms,v=[-e[0]/n,-e[1]/n,-e[2]/n];f.iUp.value.set(v[0],v[1],v[2]),f.iSunDir.value.set(c[0],c[1],c[2]),f.iSunColor.value.set(a.sun[0],a.sun[1],a.sun[2]),f.iLight.value=t.air.light,f.iTauUp.value=4*Math.max(t.air.P/1e5-1,0)+.02,f.iFlash.value=t.lightning||0,t.lightningDir&&f.iFlashDir.value.set(...t.lightningDir);let g=t.air.T;f.iThermal.value=Math.max(0,Math.min(1,(g-900)/1600))*.5/Math.max(t.exposure,1e-9),f.iLampDir.value.set(t.spot.dir[0],t.spot.dir[1],t.spot.dir[2]),f.iLamp.value=t.spot.on?.25/Math.max(t.exposure,1e-9):0;let m=Wt(je(o.spin.locked?o.orbit.q:o.spin.tilt),v)[1],_=o.gas.palette,y=.5+.5*Math.sin(m*o.gas.bands*Math.PI*.5),x=Math.min(1,d/6e4),R=_[1].map((E,A)=>(E*y+_[0][A]*(1-y))*(1-x*.5)+_[2%_.length][A]*x*.5);f.iHaze.value.set(R[0],R[1],R[2])}h.uTime.value=t.time,h.uDist.value=n,h.uProj.value=t.projScale,h.uCenterRel.value.set(e[0],e[1],e[2]),h.uToBody.value.setFromMatrix4(new ie().makeRotationFromQuaternion(new Ie(i[0],i[1],i[2],i[3])).invert()),t.camFwd&&h.uCamFwd.value.copy(t.camFwd),this.material.side=n<o.radius*1.021?be:Ye,this.sphere.visible=n>o.radius;let p=Wt(je(o.spin.locked?o.orbit.q:o.spin.tilt),c);h.uSunLocal.value.set(p[0],p[1],p[2])}if(this.clouds&&this.clouds.update(t,e,i,a,n),this.atmo){let u=this.atmo.uniforms;u.aCenter.value.set(e[0],e[1],e[2]),u.aSunDir.value.set(c[0],c[1],c[2]),u.aSunColor.value.set(a.sun[0],a.sun[1],a.sun[2]);let d=n<o.radius*u.aRa.value*1.0005;this.atmo.mat.side=d?be:Ye}if(this.rings){let u=this.rings.mat.uniforms,d=o.spin.locked?o.orbit.q:o.spin.tilt,p=je(d),f=Wt(p,c),v=Wt(p,[-e[0]/o.radius,-e[1]/o.radius,-e[2]/o.radius]);u.uSunLocal.value.set(f[0],f[1],f[2]),u.uCamLocal.value.set(v[0],v[1],v[2]),u.uSunColor.value.set(a.sun[0],a.sun[1],a.sun[2])}return!1}heightAt(t){return this.body.solid?this.terrain.heightAt(t[0],t[1],t[2]):0}get ready(){return this.body.solid?this.terrain.ready:!0}dispose(){this.terrain&&this.terrain.dispose(),this.group.traverse(t=>{t.isMesh&&t.geometry&&!this.terrain&&t.geometry.dispose()}),this.material.dispose(),this.atmo&&(this.atmo.mesh.geometry.dispose(),this.atmo.mat.dispose()),this.clouds&&(this.clouds.mesh.geometry.dispose(),this.clouds.mat.dispose()),this.interior&&(this.interior.mesh.geometry.dispose(),this.interior.mat.dispose()),this.rings&&(this.rings.mesh.geometry.dispose(),this.rings.mat.dispose(),this.rings.tex.dispose())}},La=class{constructor(t,e){this.engine=t,this.sys=e,this.root=new oe,this.star=new wc(e.star),this.root.add(this.star.group),e.star.starKind==="blackhole"&&(this.blackHole=new Cc(e.star,t.sky.cubeTarget.texture),this.root.add(this.blackHole.group)),this.planets=e.bodies.map(i=>{let n=new Pc(i,e);return this.root.add(n.group,n.inertial),n}),this.glints=new Ic,this.root.add(this.glints.points),t.scene.add(this.root),this.positions=e.bodies.map(()=>[0,0,0]),this.orient=e.bodies.map(()=>[0,0,0,1]),this.starColor=Hu(e.star.color)}get ready(){return this.planets.every(t=>t.ready)}irradianceAt(t){let e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];return this.blackHole&&(e=Math.max(e,(this.sys.star.radius*20)**2)),Math.max(this.sys.star.lum,0)*ve*ve/Math.max(e,1)}computeKinematics(t){for(let e=0;e<this.sys.bodies.length;e++)Os(this.sys,e,t,this.positions[e]),this.orient[e]=ur(this.sys,e,t)}update(t){let e=this.sys,i=t.camWorld,n=t.time;this.computeKinematics(n),this.glints.begin();let r=[-i[0],-i[1],-i[2]],a=Math.hypot(r[0],r[1],r[2]),o=Math.atan(e.star.radius/a);if(this.star.update(t,r,a,o)&&e.star.starKind!=="blackhole"){let h=this.irradianceAt(i);this.glints.add(r,a,this.starColor.map(u=>u*h))}if(this.blackHole&&this.blackHole.update(t,r,a,t.exposure||1,t.inside||0)){let u=this.irradianceAt(i);this.glints.add(r,a,this.starColor.map(d=>d*u))}let c=h=>Math.atan(e.star.radius/Math.max(Math.hypot(h[0],h[1],h[2]),1));for(let h=0;h<e.bodies.length;h++){let u=e.bodies[h],d=this.positions[h],p=[d[0]-i[0],d[1]-i[1],d[2]-i[2]],f=Math.hypot(p[0],p[1],p[2]),v=Math.asin(Math.min(1,u.radius/f)),g=Math.hypot(d[0],d[1],d[2]),m=[-d[0]/g,-d[1]/g,-d[2]/g],_=this.irradianceAt(d),y=this.starColor.map(M=>M*_),x=[0,0,0],R=[0,1,0];if(u.parent>=0){let M=this.positions[u.parent],I=e.bodies[u.parent],D=M[0]-d[0],k=M[1]-d[1],H=M[2]-d[2],q=Math.hypot(D,k,H);R=[D/q,k/q,H/q];let V=.5*(1-(R[0]*m[0]+R[1]*m[1]+R[2]*m[2])),nt=(Vu[I.type]??.3)*(I.radius/q)**2*V*.7;x=y.map(z=>z*nt)}let E=[],A=[];u.parent>=0&&A.push(u.parent);for(let M of u.children)A.push(M);if(u.parent>=0)for(let M of e.bodies[u.parent].children)M!==h&&A.push(M);for(let M of A.slice(0,4)){let I=this.positions[M];E.push([I[0]-i[0],I[1]-i[1],I[2]-i[2],e.bodies[M].radius])}let P={sunDir:m,sun:y,fill:x,fillDir:R,occ:E,sunAngR:c(d)};if(this.planets[h].update(t,p,this.orient[h],f,v,P)){let I=.5*(1+-(p[0]*m[0]+p[1]*m[1]+p[2]*m[2])/f),D=this.planets[h].albedo*(u.radius/f)**2*I*.67;D*_>1e-14&&this.glints.add(p,f,y.map(k=>k*D))}}if(t.extraGlints)for(let h of t.extraGlints)this.glints.add(h.rel,h.dist,h.flux);this.glints.end(),this.glints.mat.uniforms.uPx.value=t.pxRatio,this.glints.mat.uniforms.uPixOmega.value=t.pixelAngle*t.pixelAngle}dispose(){this.engine.scene.remove(this.root),this.star.dispose(),this.blackHole&&this.blackHole.dispose();for(let t of this.planets)t.dispose();this.glints.points.geometry.dispose()}};function dr(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function Mx(s,t,e){let n=new ge(1171),r=dr(1024,1024),a=dr(1024,1024),o=dr(1024,1024),l=r.getContext("2d"),c=a.getContext("2d"),h=o.getContext("2d");l.fillStyle="#cfccc4",l.fillRect(0,0,1024,1024),c.fillStyle="#8a8a8a",c.fillRect(0,0,1024,1024),h.fillStyle="#808080",h.fillRect(0,0,1024,1024);let u=14;for(let p=0;p<u;p++){let f=p/u*1024,v=(p+1)/u*1024,g=0;for(;g<1024;){let m=n.range(40,160),y=204+n.range(-14,10);l.fillStyle=`rgb(${y+2},${y},${y-6})`,l.fillRect(g,f,m,v-f);let x=130+n.range(-25,30);c.fillStyle=`rgb(${x},${x},${x})`,c.fillRect(g,f,m,v-f),n.chance(.08)&&(l.fillStyle="rgba(60,62,66,0.85)",l.fillRect(g+4,f+4,m-8,v-f-8)),l.fillStyle="rgba(40,40,40,0.55)",l.fillRect(g,f,2,v-f),h.fillStyle="#2a2a2a",h.fillRect(g,f,2,v-f),l.fillStyle="rgba(90,90,90,0.5)";for(let R=6;R<v-f-4;R+=12)l.fillRect(g+5,f+R,2,2);g+=m}l.fillStyle="rgba(30,30,30,0.6)",l.fillRect(0,f,1024,2),h.fillStyle="#202020",h.fillRect(0,f,1024,2)}for(let p=0;p<2600*e;p++){let f=n.range(0,1024),v=n.range(0,1024),g=n.range(1,6);l.fillStyle=`rgba(70,60,50,${n.range(.02,.07)})`,l.fillRect(f,v,g,g*n.range(1,6))}l.save(),l.fillStyle="#2b2d31",l.font='600 46px "IBM Plex Mono", monospace',l.translate(1024*.18,1024*.47),l.fillText(s,0,0),l.font='500 18px "IBM Plex Mono", monospace',l.fillText(`OUTER SURVEY PROGRAM  \xB7  ${t}`,0,30),l.restore(),l.fillStyle="#9c3a2a",l.fillRect(1024*.18,1024*.53,180,6);for(let p=0;p<6;p++)l.fillStyle=p%2?"#d8b03a":"#26272a",l.fillRect(1024*.62+p*14,1024*.44,14,40);let d=(p,f)=>{let v=new Cs(p);return v.wrapS=v.wrapT=bs,v.anisotropy=8,f&&(v.colorSpace=Ke),v};return{map:d(r,!0),roughnessMap:d(a,!1),bumpMap:d(o,!1)}}function bx(){let t=new ge(77),e=dr(512,512),i=e.getContext("2d");i.fillStyle="#808080",i.fillRect(0,0,512,512);for(let r=0;r<1400;r++){let a=t.range(0,512),o=t.range(0,512),l=Math.round(t.range(70,190));i.fillStyle=`rgba(${l},${l},${l},0.35)`,i.beginPath();let c=t.int(3,6);for(let h=0;h<c;h++){let u=h/c*Math.PI*2+t.range(-.3,.3),d=t.range(6,30),p=a+Math.cos(u)*d,f=o+Math.sin(u)*d;h?i.lineTo(p,f):i.moveTo(p,f)}i.closePath(),i.fill()}let n=new Cs(e);return n.wrapS=n.wrapT=bs,n.repeat.set(3,2),n}function Sx(){let s=dr(256,512),t=s.getContext("2d");t.fillStyle="#56585c",t.fillRect(0,0,256,512);for(let i=0;i<512;i+=8)t.fillStyle="rgba(20,20,22,0.7)",t.fillRect(0,i,256,2),t.fillStyle="rgba(140,140,145,0.25)",t.fillRect(0,i+2,256,1);t.fillStyle="rgba(25,25,28,0.9)",t.fillRect(0,0,8,512),t.fillRect(248,0,8,512);let e=new Cs(s);return e.colorSpace=Ke,e}var Bs=class{constructor(t="TERN"){this.group=new oe;let e=t!=="TERN",i=Mx(t,e?"S-7":"S-11",e?3:1);this.hull=new Ve({map:i.map,roughnessMap:i.roughnessMap,bumpMap:i.bumpMap,bumpScale:1.2,roughness:1,metalness:.05,envMapIntensity:.6}),this.foil=new Ve({color:13145650,metalness:1,roughness:.32,bumpMap:bx(),bumpScale:2.5,envMapIntensity:1}),this.dark=new Ve({color:2895152,metalness:.7,roughness:.42,envMapIntensity:.8}),this.steel=new Ve({color:9277590,metalness:.9,roughness:.3,envMapIntensity:1}),this.radiator=new Ve({map:Sx(),metalness:.3,roughness:.55,emissive:new Ht(0,0,0),envMapIntensity:.5}),this.glass=new Ve({color:461068,metalness:.1,roughness:.04,envMapIntensity:2}),this.glow=new hi({color:new Ht(0,0,0),side:Me}),this.navRed=new hi({color:new Ht(0,0,0)}),this.navGreen=new hi({color:new Ht(0,0,0)}),this.strobe=new hi({color:new Ht(0,0,0)}),this.cabin=new hi({color:new Ht(0,0,0)}),this.build(),this.group.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),this.gear=1,this.length=30,this.bottom=3.9}lathe(t,e,i=64){let n=t.map(([o,l])=>new xt(o,l));n[0].y>n[n.length-1].y&&n.reverse();let r=new Di(n,i);r.rotateX(-Math.PI/2);let a=new yt(r,e);return this.group.add(a),a}build(){let t=(y,x=1)=>y.map(([R,E])=>[R*x,E]);this.lathe(t([[0,15.2],[.5,15.1],[1.15,14.7],[1.7,14],[2.1,13],[2.38,11.8],[2.5,10.6],[2.52,9],[2.4,8.4],[2.2,8.2]]),this.hull,72);let e=new yt(new Ee(2.43,2.27,1.5,48,1,!0,-Math.PI*.42,Math.PI*.84),this.glass);e.rotation.x=-Math.PI/2,e.rotation.y=0,e.position.set(0,0,-12.3),e.rotateY(Math.PI),this.group.add(e);let i=new yt(new Ee(2.41,2.25,1.3,48,1,!0,-Math.PI*.36,Math.PI*.72),this.cabin);i.rotation.x=-Math.PI/2,i.position.set(0,0,-12.3),i.rotateY(Math.PI),i.scale.setScalar(.995),this.group.add(i);let n=new yt(new Ee(2.05,2.05,9.8,48,1,!0),this.foil);n.rotation.x=Math.PI/2,n.position.z=-3.2,this.group.add(n);for(let y of[-8.1,-3.2,1.7]){let x=new yt(new zn(2.12,.12,8,64),this.dark);x.position.z=y,this.group.add(x)}for(let y of[-1,1]){let x=new yt(new da(.85,6.5,8,24),this.hull);x.rotation.x=Math.PI/2,x.position.set(y*2.75,-.5,-3),this.group.add(x);for(let R of[-6,-.2]){let E=new yt(new Oe(1,.18,.4),this.dark);E.position.set(y*2.2,-.45,R),this.group.add(E)}}this.lathe([[2.2,1.9],[2.55,1.6],[2.62,-1],[2.5,-3.8],[2.05,-5],[1.2,-5.6],[0,-5.7]],this.hull,64).position.z=3.6;let r=[];for(let y=0;y<=16;y++){let x=y/16;r.push(new xt(.75+1.65*Math.pow(x,1.6),-x*4.4))}let a=new Di(r.reverse(),64);a.rotateX(-Math.PI/2);let o=new yt(a,new Ve({color:6971223,metalness:.55,roughness:.5,side:Me,envMapIntensity:.7}));o.position.z=9,this.group.add(o);let l=new yt(new sr(.78,32),this.glow);l.position.z=9.45,this.group.add(l),this.plumeMat=new Yt({uniforms:{uI:{value:0},uT:{value:0}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
varying vec3 vP; varying vec3 vN; varying vec3 vW; void main(){ vP = position; vN = normalize(normalMatrix*normal); vec4 mv = modelViewMatrix*vec4(position,1.0); vW = mv.xyz; gl_Position = projectionMatrix*mv; 
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
uniform float uI; uniform float uT; varying vec3 vP; varying vec3 vN; varying vec3 vW; void main(){ 
#include <logdepthbuf_fragment>
 float t = clamp(vP.z / 14.0, 0.0, 1.0); float rim = pow(1.0 - abs(dot(normalize(vN), normalize(-vW))), 0.5) * pow(abs(dot(normalize(vN), normalize(-vW))), 1.2); float flick = 0.85 + 0.15 * sin(uT * 60.0 + vP.y * 3.0); vec3 c = mix(vec3(0.75, 0.82, 1.0), vec3(0.45, 0.35, 1.0), t) * (1.0 - t) * (1.0 - t) * rim * uI * flick * 3.0; gl_FragColor = vec4(c, 1.0); }`,transparent:!0,depthWrite:!1,blending:Re,blendSrc:ce,blendDst:ce,side:Me});let c=new Ee(.9,2.2,14,32,6,!0);c.translate(0,-7,0),c.rotateX(-Math.PI/2),this.plume=new yt(c,this.plumeMat),this.plume.position.z=13.3,this.plume.castShadow=!1,this.plume.visible=!1,this.group.add(this.plume),this.radiators=[];for(let y of[-1,1]){let x=new oe;x.position.set(y*2.3,.9,.2);let R=new yt(new Oe(8.5,.07,3.6),this.radiator);R.position.x=y*4.6,x.add(R);let E=new yt(new Oe(.9,.16,.3),this.dark);E.position.x=y*.35,x.add(E),x.rotation.z=y*.12;let A=new yt(new ke(.09,8,6),y<0?this.navRed:this.navGreen);A.position.set(y*8.9,.07,0),x.add(A),this.group.add(x),this.radiators.push(x)}this.antenna=new oe,this.antenna.position.set(0,2.25,.5);let h=new yt(new Ee(.07,.09,1.6,8),this.steel);h.position.y=.8,this.antenna.add(h),this.dish=new oe,this.dish.position.y=1.65;let u=[];for(let y=0;y<=12;y++){let x=y/12;u.push(new xt(x*1.35,x*x*.42))}let d=new yt(new Di(u,40),new Ve({color:14868698,roughness:.6,metalness:.05,side:Me}));d.rotation.x=Math.PI/2,this.dish.add(d);let p=new yt(new Ee(.04,.04,.9,6),this.steel);p.rotation.x=Math.PI/2,p.position.z=-.45,this.dish.add(p),this.antenna.add(this.dish),this.group.add(this.antenna);for(let[y,x]of[[1.95,1],[-1.95,1],[1.95,-1],[-1.95,-1]]){let R=new yt(new Oe(.35,.35,.5),this.dark);R.position.set(y,x,-10.4),this.group.add(R)}this.legs=[];let f=[Math.PI*.25,Math.PI*.75,Math.PI*1.25,Math.PI*1.75];for(let y of f){let x=new oe,R=Math.sin(y)>0?-7.5:4.5;x.position.set(Math.cos(y)>0?2:-2,-1.4,R);let E=new yt(new Ee(.11,.14,2.6,10),this.steel);E.position.y=-1.3,x.add(E);let A=new yt(new Ee(.55,.62,.14,20),this.dark);A.position.y=-2.62,x.add(A),x.userData.side=Math.cos(y)>0?1:-1,this.group.add(x),this.legs.push(x)}let v=new ke(.09,8,6),g=new yt(v,this.strobe);g.position.set(0,2.55,4.6),this.group.add(g);let m=new yt(v,this.strobe);m.position.set(0,-2.1,-9),this.group.add(m);let _=new yt(new Ee(.22,.28,.3,12),this.dark);_.rotation.x=Math.PI/2,_.position.set(0,-2.15,-11.4),this.group.add(_),this.lampLens=new yt(new sr(.2,16),new hi({color:new Ht(0,0,0)})),this.lampLens.position.set(0,-2.15,-11.56),this.lampLens.rotation.y=Math.PI,this.group.add(this.lampLens),this.lampPos=new C(0,-2.15,-11.6),this.buildPlasma()}buildPlasma(){this.plasmaLen=48,this.plasmaMat=new Yt({uniforms:{uI:{value:0},uT:{value:0},uHot:{value:0},uL:{value:48}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
varying vec3 vP; varying vec3 vN; varying vec3 vV;
void main() {
  vP = position; vN = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = -mv.xyz;
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}`,fragmentShader:`#include <common>
#include <logdepthbuf_pars_fragment>
uniform float uI; uniform float uT; uniform float uHot; uniform float uL;
varying vec3 vP; varying vec3 vN; varying vec3 vV;
float h(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
void main() {
  #include <logdepthbuf_fragment>
  float t = clamp(vP.z / uL, 0.0, 1.0);
  float a = atan(vP.y, vP.x);
  float facing = abs(dot(normalize(vN), normalize(vV)));
  float rim = pow(1.0 - facing, 1.2) * (1.0 - pow(1.0 - facing, 8.0));
  float cap = exp(-t * 6.5);
  // long thin streaks running with the flow
  float sa = a * 1.9099;
  float st = n2(vec2(sa * 2.0, t * 1.6 - uT * 3.5)) * 0.6 + n2(vec2(sa * 5.0, t * 3.5 - uT * 6.0)) * 0.4;
  float streak = smoothstep(0.42, 0.9, st);
  float sides = streak * (1.0 - t) * (0.25 + rim) * 0.7;
  float end = 1.0 - smoothstep(0.55, 1.0, t);
  float flick = 0.9 + 0.1 * sin(uT * 53.0 + sa * 3.0 + t * 20.0);
  float k = (cap * (1.5 + 1.0 * rim) + sides) * end * flick;
  vec3 cool = vec3(1.0, 0.28, 0.06), warm = vec3(1.0, 0.55, 0.22), hot = vec3(0.95, 0.62, 1.0);
  vec3 c = mix(mix(cool, warm, clamp(uHot * 2.0, 0.0, 1.0)), hot, clamp(uHot * 2.0 - 1.0, 0.0, 1.0));
  // white-hot right at the stagnation point
  c = mix(c, vec3(1.0, 0.95, 0.88), cap * cap * 0.7);
  gl_FragColor = vec4(c * k * uI, 1.0);
}`,transparent:!0,depthWrite:!1,side:Me,blending:Re,blendSrc:ce,blendDst:ce});let e=[];for(let n=0;n<=40;n++){let r=Math.pow(n/40,1.8)*48;e.push(new xt(2.6*Math.sqrt(r+.6),r))}let i=new Di(e,48);i.rotateX(Math.PI/2),this.plasma=new yt(i,this.plasmaMat),this.plasma.position.z=-20,this.plasma.visible=!1,this.plasma.castShadow=!1,this.plasma.receiveShadow=!1,this.plasma.frustumCulled=!1,this.plasmaPivot=new oe,this.plasmaPivot.add(this.plasma),this.group.add(this.plasmaPivot)}setPlasma(t,e,i,n){let r=e>.05&&i;if(this.plasma.visible=!!r,!r)return;let a=new Ie().setFromUnitVectors(new C(0,0,1),new C(i[0],i[1],i[2]));this.plasmaPivot.quaternion.copy(a),this.plasmaMat.uniforms.uI.value=Math.min(8,Math.sqrt(e)*1.6)*1.8/Math.max(n,1e-6),this.plasmaMat.uniforms.uT.value=t,this.plasmaMat.uniforms.uHot.value=Math.min(1,e/8)}animate(t,e,{gear:i,thrust:n,heat:r,lights:a,cruise:o,solDirLocal:l,cabinLight:c,expo:h=1,jumpGlow:u=0}){let d=1/Math.max(h,1e-6);this.gear+=(i-this.gear)*Math.min(1,e*1.6);for(let _ of this.legs){let y=_.userData.side;_.rotation.z=y*(this.gear*.38-(1-this.gear)*1.45)}this.bottom=2.65+this.gear*1.25;for(let _ of this.radiators)_.rotation.z=Math.sign(_.position.x)*(.12-this.gear*.2);let p=n,f=u;this.glow.color.setRGB(3*p+.15*(o?1:0)+4*f,4*p+.22*(o?1:0)+5*f,9*p+.5*(o?1:0)+9*f).multiplyScalar(2.5*d),this.plume.visible=p>.05,this.plumeMat.uniforms.uI.value=p*.25*d,this.plumeMat.uniforms.uT.value=t;let v=Math.max(0,r-.35);this.radiator.emissive.setRGB(v*1.6,v*.45,v*.12).multiplyScalar(.8*d);let g=t%1.6<.08,m=a?1:.4;if(this.navRed.color.setRGB(6,.25,.1).multiplyScalar(m*d),this.navGreen.color.setRGB(.15,5,1.4).multiplyScalar(m*d),this.strobe.color.setScalar(g?14*d:0),this.cabin.color.setRGB(.9,.62,.35).multiplyScalar((c?.35:.08)*d),this.lampLens.material.color.setScalar(a?25*d:0),l){let _=l,y=Math.atan2(-_[0],-_[2]),x=Math.asin(Math.max(-1,Math.min(1,_[1])));this.antenna.rotation.y=y,this.dish.rotation.x=Math.max(-.4,Math.min(1.4,x))}}setEnvMap(t){for(let e of[this.hull,this.foil,this.dark,this.steel,this.radiator,this.glass])e.envMap=t,e.needsUpdate=!0}};function rn(s,t=.3,e=.6){return new Ve({color:s,metalness:t,roughness:e,envMapIntensity:.7})}function Gu(s){let t=new oe,e=rn(12170668,.2,.7),i=rn(2763566,.6,.45),n=new yt(new Ee(.7,.7,1.6,8),e);t.add(n);let r=new yt(new Ee(.05,.05,4.2,6),i);r.position.y=2.9,t.add(r);let a=new Ve({color:1712694,metalness:.5,roughness:.25});for(let h of[-1,1]){let u=new yt(new Oe(3.4,.05,1.1),a);u.position.set(h*2.4,.2,0),t.add(u)}let o=new yt(new ke(.8,20,8,0,Math.PI*2,0,.7),rn(14210768,.1,.6));o.material.side=Me,o.position.set(0,-1.2,0),o.rotation.x=Math.PI,t.add(o);let l=new hi({color:new Ht(0,0,0)}),c=new yt(new ke(.16,10,8),l);return c.position.y=5.05,t.add(c),t.userData.lamp=l,t.userData.radius=6,t}function wx(s){let t=new ge(s),e=new oe,i=new Ve({color:10123834,metalness:.9,roughness:.45}),n=rn(3355443,.5,.6),r=new yt(new Ee(1,1,.8,6),i);e.add(r);let a=[];for(let u=0;u<=10;u++){let d=u/10;a.push(new xt(d*1.9,d*d*.5))}let o=new yt(new Di(a,32),rn(13618372,.05,.75));o.material.side=Me,o.position.y=.4,e.add(o);let l=new yt(new Ee(.04,.04,6.5,5),n);l.rotation.z=Math.PI/2,l.position.set(3.3,-.1,0),e.add(l);let c=new yt(new Ee(.22,.22,1.1,10),n);c.rotation.z=Math.PI/2,c.position.set(-1.9,-.2,0),e.add(c);let h=new yt(new Ee(.02,.02,9,4),n);return h.rotation.x=Math.PI/2,h.rotation.z=.4,h.position.set(0,-.3,4.4),e.add(h),e.userData.radius=6,e.userData.tumble=[t.range(-.03,.03),t.range(-.05,.05),t.range(-.02,.02)],e}function Ex(s){let t=new ge(s),e=new oe,i=rn(3946547,.35,.85),n=rn(9407104,.2,.8),r=new yt(new Ee(2.4,2.4,14,20,1,!0,0,Math.PI*1.4),n);r.material.side=Me,r.rotation.set(Math.PI/2-.2,.3,.4),r.position.y=.6,e.add(r);let a=new yt(new ke(2.4,16,10,0,Math.PI*2,0,Math.PI/2),i);a.position.set(9,.5,4),a.rotation.set(1.2,.4,.2),e.add(a);for(let l=0;l<26;l++){let c=t.range(.3,2.2),h=new yt(new Oe(c,c*t.range(.05,.4),c*t.range(.3,1.4)),t.chance(.5)?i:n),u=t.range(0,Math.PI*2),d=t.range(4,40);h.position.set(Math.cos(u)*d,c*.05,Math.sin(u)*d*.6+6),h.rotation.set(t.range(-.4,.4),t.range(0,6),t.range(-.4,.4)),e.add(h)}let o=new yt(new Oe(7,.08,3),rn(4540236,.3,.6));return o.position.set(-8,1.2,-6),o.rotation.set(.3,.5,.9),e.add(o),e.userData.radius=30,e}function Tx(){let s=new oe,t=new Ve({color:131587,metalness:.9,roughness:.12,envMapIntensity:.25}),e=new yt(new Oe(12,54,3),t);return e.position.y=22,e.rotation.y=.4,s.add(e),s.userData.radius=60,s}function Ax(s){let t=new oe,e=new ge(s),i=38e3,n=1600,r=new zn(i,n,24,220,Math.PI*e.range(.25,.42)),a=new Ve({color:3881528,metalness:.8,roughness:.5,envMapIntensity:.4}),o=new yt(r,a);t.add(o);let l=rn(1907999,.7,.5),c=r.parameters.arc;for(let h=0;h<=40;h++){let u=h/40*c,d=new yt(new zn(n*1.08,120,6,24),l);d.position.set(Math.cos(u)*i,Math.sin(u)*i,0),d.rotation.y=Math.PI/2,d.rotation.x=u,d.lookAt(new C(Math.cos(u)*i-Math.sin(u),Math.sin(u)*i+Math.cos(u),0)),t.add(d)}return t.userData.radius=i+n,t.userData.spin=4e-4,t}var Dc={beacon:{label:"Survey beacon",range:4e3},probe:{label:"Derelict probe",range:3e3},wreck:{label:"Wreckage",range:5e3},monolith:{label:"Unidentified structure",range:6e3},ring:{label:"Orbital structure",range:12e4},petrel:{label:"Vessel PETREL",range:4e3}},Da=class{constructor(t,e,i){this.sys=e,this.root=new oe,t.add(this.root),this.scene=t,this.items=e.signals.map((n,r)=>{let a;switch(n.type){case"beacon":a=Gu(n.seed);break;case"probe":a=wx(n.seed);break;case"wreck":a=Ex(n.seed);break;case"monolith":a=Tx();break;case"ring":a=Ax(n.seed);break;case"petrel":{let o=new Bs("PETREL");o.animate(0,10,{gear:1,thrust:0,heat:0,lights:!1,cruise:!1}),a=o.group,a.userData.radius=20,a.userData.ship=o;break}default:a=Gu(n.seed)}return a.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)}),this.root.add(a),{sig:n,model:a,index:r,worldPos:[0,0,0],local:null,settled:!1}}),this.planetViews=i}settle(t){let e=t.sig;if(e.placement!=="surface"||t.settled)return;let i=this.sys.bodies[e.body],n=Sc(e.lat,e.lon,1),a=this.planetViews[e.body].heightAt(n),o=e.type==="petrel"?3.6:e.type==="monolith"?-1:.2;e.local=n.map(l=>l*(i.radius+a+o)),t.up=n,t.settled=!0}update(t,e,i,n=1){let r=[];for(let a of this.items){let o=a.sig;this.settle(a);let l=Bu(this.sys,o,e);a.worldPos=l;let c=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=Math.hypot(c[0],c[1],c[2]);a.rel=c,a.dist=h;let u=a.model.userData.radius,d=Math.atan(u/h)<t.pixelAngle*1.5;if(a.model.visible=!d&&h<4e8,a.model.position.set(c[0],c[1],c[2]),o.placement==="surface"){let v=ur(this.sys,o.body,e),g=a.up,m=new Ie().setFromUnitVectors(new C(0,1,0),new C(g[0],g[1],g[2])),_=new Ie().setFromAxisAngle(new C(0,1,0),o.seed%628/100),y=new Ie(v[0],v[1],v[2],v[3]);a.model.quaternion.copy(y).multiply(m).multiply(_)}else{let v=a.model.userData.tumble;v&&a.model.rotation.set(e*v[0],e*v[1],e*v[2]),a.model.userData.spin&&(a.model.rotation.z=e*a.model.userData.spin)}let p=a.model.userData.lamp,f=(e*.7+o.seed%10)%2.2<.18;if(p&&p.color.setRGB(f?9/n:0,f?2.5/n:0,f?.8/n:0),d&&h<3e7){let v=o.type==="beacon"&&f?.02/n:0;v>0&&r.push({rel:c,dist:h,flux:[v*(6e3/h)**2,v*.3*(6e3/h)**2,v*.1*(6e3/h)**2]})}}return r}dispose(){this.scene.remove(this.root),this.root.traverse(t=>{t.geometry?.dispose?.()})}};var Rx=["Wren","Halloran","Ostrey","Calder","Mirrin","Saelith","Tamsin","Lowe"],En=8,Ua=class{constructor(){this.galaxy=new Ea,this.special=new Map,this.systemCache=new Map,this.buildStory()}buildStory(){let t=this.galaxy,e=new ge(Ui(t.seed,22273)),i=t.starsInRadius(Te,13).filter(u=>u.d>7&&u.star.kind==="main"&&"KGF".includes(u.star.cls)).sort((u,d)=>u.star.id.localeCompare(d.star.id)),n;if(i.length)n=i[0].star;else{let u=t.starsInRadius(Te,13).filter(d=>d.d>6&&d.star.id!=="SOL").sort((d,p)=>p.d-d.d)[0];n=t.forceStar(u.star.id,{classDef:t.classDef("K"),u:.4})}n=t.forceStar(n.id,{classDef:t.classDef(n.cls),u:.45,name:"Vesper"}),this.start=n;let r=Hs(Na(n.pos,Te));r=Hs([r[0],r[1]*.2,r[2]]);let a=[n],o=n;for(let u=0;u<En;u++){let d=e.range(18,27),p=e.range(-.55,.55);r=Hs([r[0]*Math.cos(p)-r[2]*Math.sin(p),r[1]*.5+e.range(-.08,.08),r[0]*Math.sin(p)+r[2]*Math.cos(p)]);let f=Cx(o.pos,Ix(r,d)),g=t.starsInRadius(f,9).filter(_=>_.star.kind==="main"&&_.star.cls!=="O"&&_.star.cls!=="B"&&!a.includes(_.star)&&xe(_.star.pos,o.pos)>12).sort((_,y)=>_.d-y.d)[0]?.star;g||(g=t.starsInRadius(f,14).filter(y=>!a.includes(y.star)&&y.star.id!=="SOL").sort((y,x)=>y.d-x.d)[0].star);let m=u===En-1||g.cls==="M"||g.kind!=="main"?"K":g.cls;g=t.forceStar(g.id,{classDef:t.classDef(m),u:e.range(.2,.8),name:Rx[u]}),a.push(g),o=g}this.trail=a,this.special.set(n.id,{minPlanets:5,noRandomSignals:!0,after:(u,d,p)=>Dx(u,d,p)});for(let u=1;u<a.length;u++){let d=u===a.length-1;this.special.set(a[u].id,{minPlanets:3,noRandomSignals:!0,after:(p,f,v)=>d?Nx(p,f,v):Lx(p,f,v,u)})}this.special.set("SOL",{build:Ux,noRandomSignals:!0});let l=new Set(a.map(u=>u.id)),c=Hs(Na(n.pos,a[1].pos)),h=t.starsInRadius(n.pos,13.5).filter(u=>u.d>8&&u.star.id!=="SOL"&&!l.has(u.star.id)).sort((u,d)=>{let p=Wu(Hs(Na(u.star.pos,n.pos)),c);return Wu(Hs(Na(d.star.pos,n.pos)),c)-p});if(h.length){let u=t.forceStar(h[0].star.id,{classDef:t.classDef("X","blackhole"),u:.5,name:"Erebus",mass:6e4,diskLum:.6});this.erebus=u,this.special.set(u.id,{build:Fx,noRandomSignals:!0})}}trailIndex(t){return this.trail.findIndex(e=>e.id===t)}system(t){let e=this.systemCache.get(t.id);return e||(e=Uu(t,this.special.get(t.id)),this.systemCache.size>24&&this.systemCache.clear(),this.systemCache.set(t.id,e)),e}};function Na(s,t){return[s[0]-t[0],s[1]-t[1],s[2]-t[2]]}function Cx(s,t){return[s[0]+t[0],s[1]+t[1],s[2]+t[2]]}function Ix(s,t){return[s[0]*t,s[1]*t,s[2]*t]}function Hs(s){let t=Math.hypot(s[0],s[1],s[2])||1;return[s[0]/t,s[1]/t,s[2]/t]}function Wu(s,t){return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]}function jn(s,t,e,i,n,r){return i.kind="planet",i.parent=-1,i.index=s.bodies.length,i.name=r,i.orbit=t.makeOrbit(e,n*ve,s.star.mass,.03),i.eqTemp=278*Math.pow(Math.max(s.star.lum,1e-5),.25)/Math.sqrt(n),t.spinFor(i,e,!1),s.bodies.push(i),i}function ki(s,t,e,i,n,r,a){return n.kind="moon",n.parent=i.index,n.index=s.bodies.length,n.name=a,n.orbit=t.makeOrbit(e,r,i.mass,.03),n.eqTemp=i.eqTemp,n.spin={locked:!0,tilt:[0,0,0,1],period:n.orbit.period,phase0:0},s.bodies.push(n),n}function Px(s,t){return s.bodies.filter(i=>i.rings).concat(s.bodies.filter(i=>i.kind==="moon"&&i.parent>=0&&s.bodies[i.parent].rings)).concat(s.bodies.filter(i=>i.type==="gas"||i.type==="icegiant")).concat(s.bodies)[0]}function Lx(s,t,e,i){s.bodies.length||jn(s,e,t,e.makeSolid(s,t,"barren",wn*.4,De*.06,200),1.2*Math.sqrt(s.star.lum),`${s.starData.name} b`);let n=Px(s,t),r=e.orbitSignal("beacon",n,t,n.rings?1:t.range(1.25,1.6));r.trail=i,s.signals.push(r)}function Dx(s,t,e){let i=s.bodies.find(r=>r.type==="gas"&&r.parent<0);if(!i){let r=Math.max(s.star.lum,.001),a=5.2*Math.sqrt(r)*1.1;i=jn(s,e,t,e.makeGas(t,!1,Xn*.92,$n*.8,278*Math.pow(r,.25)/Math.sqrt(a)),a,`${s.starData.name} ${"bcdefghij"[s.bodies.filter(o=>o.parent<0).length]}`)}i.rings||(i.rings={inner:i.radius*1.3,outer:i.radius*2.25,seed:t.int(1,1e9),color:ui("#d4c6ad"),opacity:.85});for(let r of s.bodies)r.parent===i.index&&r.orbit.a<i.rings.outer*1.2&&(r.orbit.a=i.rings.outer*1.3+r.radius*4);let n=s.bodies.find(r=>r.parent===i.index&&r.solid);n||(n=ki(s,e,t,i,e.makeSolid(s,t,"ice",13e5,.011*De,i.eqTemp),i.radius*4.2,`${i.name} I`)),s.signals.push({...e.orbitSignal("beacon",i,t,1),trail:0}),s.signals[s.signals.length-1].orbit.a=i.rings.outer*1.12}function Nx(s,t,e){let i=Math.max(s.star.lum,.001),n=3.4*Math.sqrt(i),r=278*Math.pow(i,.25)/Math.sqrt(n),a=jn(s,e,t,e.makeGas(t,!1,Xn*1.02,$n*1.4,r),n,`${s.starData.name} ${"bcdefghij"[s.bodies.filter(c=>c.parent<0).length]}`);a.rings={inner:a.radius*1.35,outer:a.radius*2.4,seed:t.int(1,1e9),color:ui("#d8ccb6"),opacity:.9},a.spin.tilt=ii(1,0,0,.42);let o=ki(s,e,t,a,e.makeSolid(s,t,"barren",105e4,.0075*De,r),a.radius*5.5,`${a.name} I`);o.terrain.mare=.3,o.restingPlace=!0;let l=e.surfaceSignal("petrel",o,t,.22,-.18);l.trail=En,s.signals.push(l)}function Ux(s,t,e){let i=(u,d,p,f,v,g={})=>{let m=278/Math.sqrt(f),_=e.makeSolid(s,t,u,d*wn,p*De,m,g);return jn(s,e,t,_,f,v)},n=(u,d,p,f,v,g)=>{let m=278/Math.sqrt(f),_=e.makeGas(t,u,d*Xn,p*$n,m);return g&&(_.gas.palette=g.map(ui)),jn(s,e,t,_,f,v)};i("barren",.383,.055,.387,"Mercury"),i("venus",.949,.815,.723,"Venus");let r=i("terran",1,1,1,"Earth",{life:!0});r.terrain.sea=-.06,r.life=!0,r.terrain.life=!0,r.home=!0,r.atmosphere=e.atmosphere("terran",1,9.81,288,t),ki(s,e,t,r,e.makeSolid(s,t,"barren",1737e3,.0123*De,270),3844e5,"Moon");let a=i("desert",.532,.107,1.524,"Mars"),o=n(!1,1,1,5.2,"Jupiter",["#c8a27a","#ebdfc8","#9b6a45","#f2e7d2","#7a4a33"]);ki(s,e,t,o,e.makeSolid(s,t,"lava",1821600,.015*De,900,{moon:!0}),4217e5,"Io"),ki(s,e,t,o,e.makeSolid(s,t,"ice",1560800,.008*De,102),6709e5,"Europa"),ki(s,e,t,o,e.makeSolid(s,t,"ice",2634100,.025*De,110),10704e5,"Ganymede"),ki(s,e,t,o,e.makeSolid(s,t,"barren",2410300,.018*De,134),18827e5,"Callisto");let l=n(!1,.832,.299,9.54,"Saturn",["#d8c49a","#efe2c0","#b39b6e","#e8d5a8"]);l.rings={inner:l.radius*1.24,outer:l.radius*2.27,seed:4242,color:ui("#d9cdb4"),opacity:.92},l.spin.tilt=ii(1,0,0,.466),ki(s,e,t,l,e.makeSolid(s,t,"titan",2574700,.0225*De,94),12219e5,"Titan");let c=n(!0,.362,.0457,19.2,"Uranus",["#a6d8de","#b7e0e3","#98ced6","#c6e7e8"]);c.spin.tilt=ii(1,0,0,1.706),c.rings={inner:c.radius*1.6,outer:c.radius*2,seed:77,color:ui("#3a3a3a"),opacity:.25};let h=n(!0,.352,.054,30.07,"Neptune",["#3f6fc4","#5a86d4","#2d58a8","#7ea2e0"]);ki(s,e,t,h,e.makeSolid(s,t,"ice",1353400,.0036*De,38),3548e5,"Triton"),s.home=!0}function Fx(s,t,e){let n=jn(s,e,t,e.makeGas(t,!0,wn*3.9,17*De,30),42,"Erebus b");n.rings={inner:n.radius*1.5,outer:n.radius*2.1,seed:9177,color:ui("#5a5a5e"),opacity:.3},ki(s,e,t,n,e.makeSolid(s,t,"ice",12e5,.008*De,30),n.radius*6,"Erebus b I"),jn(s,e,t,e.makeSolid(s,t,"barren",22e5,.04*De,30),74,"Erebus c")}function Ox(s){if(!s.atmosphere)return null;if(s._atmoModel)return s._atmoModel;let t;if(s.solid){let e=s.pressure*101325,i=s.atmosphere.H;t={gas:!1,P0:e,H:i,T0:s.tempK,rho0:e/(s.gravity*i),top:i*14}}else{let e=Math.max(s.tempK,50),i=3614*e/s.gravity;t={gas:!0,P0:1e5,H:i,T0:e,rho0:1e5/(s.gravity*i),top:i*16}}return s._atmoModel=t,t}function qu(s,t){let e=Ox(s);if(!e||!isFinite(t)||t>e.top)return{rho:0,P:0,T:0,light:1,depth:0,gas:e?e.gas:!1};let i=Math.exp(Math.min(-t/e.H,60)),n=e.P0*i,r=e.T0,a=e.rho0*i,o=1,l=0;if(e.gas&&t<0){l=-t,r=e.T0+s.gravity/12e3*l;let c=Math.pow(r/e.T0,3.5);return a=c*1e5/(3615*r),o=Math.exp(-1.3*Math.pow(c,.8)),{rho:a,P:c*1e5,T:r,light:o,depth:l,gas:!0}}else!e.gas&&s.pressure>20&&(o=Math.max(.03,Math.exp(-3*Math.min(1,n/e.P0))));return{rho:a,P:n,T:r,light:o,depth:l,gas:e.gas}}function Xu(s){return s<=1e-9?1/0:1e3*Math.cbrt(1.1/Math.sqrt(s))}function $u(s,t){let e=t/1e3;return .035*Math.sqrt(s)*e*e*e}var Nc=30/(2*4e4);var Yu=[0,0,0,1],fi=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],Ri=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],Se=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],Zn=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],We=s=>Math.hypot(s[0],s[1],s[2]),_i=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],yi=s=>{let t=We(s)||1;return[s[0]/t,s[1]/t,s[2]/t]};function Jn(s){let t=Math.hypot(s[0],s[1],s[2],s[3])||1;return[s[0]/t,s[1]/t,s[2]/t,s[3]/t]}function ju(s,t,e){let i=s[0]*t[0]+s[1]*t[1]+s[2]*t[2]+s[3]*t[3],n=t;if(i<0&&(i=-i,n=[-t[0],-t[1],-t[2],-t[3]]),i>.9995)return Jn([s[0]+(n[0]-s[0])*e,s[1]+(n[1]-s[1])*e,s[2]+(n[2]-s[2])*e,s[3]+(n[3]-s[3])*e]);let r=Math.acos(i),a=Math.sin(r),o=Math.sin((1-e)*r)/a,l=Math.sin(e*r)/a;return[s[0]*o+n[0]*l,s[1]*o+n[1]*l,s[2]*o+n[2]*l,s[3]*o+n[3]*l]}function Zu(s,t){let e=Zn(s,t);if(e<-.999999){let n=_i([1,0,0],s);return We(n)<1e-6&&(n=_i([0,1,0],s)),n=yi(n),[n[0],n[1],n[2],0]}let i=_i(s,t);return Jn([i[0],i[1],i[2],1+e])}var K={sub:fi,add:Ri,scl:Se,dot:Zn,len:We,cross:_i,nrm:yi},zs={qNormalize:Jn,qSlerp:ju,qFromTo:Zu},fr=class{constructor(){this.frame=-1,this.rot=!1,this.p=[0,0,0],this.v=[0,0,0],this.q=[0,0,0,1],this.w=[0,0,0],this.mode="flight",this.throttle=0,this.cruiseV=0,this.cruiseCharge=0,this.fuel=1,this.heat=0,this.hull=1,this.gearDown=!1,this.lights=!1,this.thrust=0,this.alt=1/0,this.ground=null,this.groundNormal=[0,1,0],this.vertSpeed=0,this.events=[],this.bottom=3.9,this.landBody=-1,this.autoLevel=0,this.speed=0}frameState(t,e=this.frame,i=this.rot){if(e<0)return{pos:[0,0,0],q:Yu,vel:[0,0,0],omega:[0,0,0]};let n=t.positions[e],r=t.velocity(e);return{pos:n,vel:r,q:i?t.orient[e]:Yu,omega:i?ku(t.sys,e):[0,0,0]}}worldPos(t){let e=this.frameState(t);return Ri(e.pos,Wt(e.q,this.p))}worldQ(t){let e=this.frameState(t);return Ne(e.q,this.q)}worldVel(t){let e=this.frameState(t),i=Wt(e.q,this.p);return Ri(Ri(e.vel,Wt(e.q,this.v)),_i(e.omega,i))}setFrame(t,e,i){if(e===this.frame&&i===this.rot)return;let n=this.worldPos(t),r=this.worldVel(t),a=this.worldQ(t),o=this.frameState(t,e,i),l=je(o.q),c=fi(n,o.pos);this.p=Wt(l,c),this.v=Wt(l,fi(fi(r,o.vel),_i(o.omega,c))),this.q=Jn(Ne(l,a)),this.frame=e,this.rot=i}chooseFrame(t){let e=this.worldPos(t),i=t.sys,n=-1;for(let a of i.bodies){if(a.parent>=0)continue;let o=t.positions[a.index];if(We(fi(e,o))<a.soi){n=a.index;for(let l of a.children){let c=i.bodies[l];We(fi(e,t.positions[l]))<c.soi&&(n=l)}}}let r=!1;if(n>=0){let a=i.bodies[n],o=We(fi(e,t.positions[n])),l=a.radius*1.5+(a.atmosphere?a.atmosphere.top:0);r=this.frame===n&&this.rot?o<l*1.08:o<l}this.mode==="landed"&&(n=this.frame,r=!0),this.setFrame(t,n,r)}get forward(){return Wt(this.q,[0,0,-1])}get up(){return Wt(this.q,[0,1,0])}get right(){return Wt(this.q,[1,0,0])}measureGround(t,e){if(this.ground=null,this.alt=1/0,this.frame<0)return;let i=t.sys.bodies[this.frame],n=We(this.p),r=this.rot?Se(this.p,1/n):Wt(je(t.orient[this.frame]),Se(this.p,1/n)),a=i.solid?e(this.frame,r):0;this.groundH=a,this.alt=n-(i.radius+a),this.ground={body:i,local:r,h:a,d:n}}terrainNormal(t,e){let i=this.ground;if(!i||!i.body.solid)return this.rot?yi(this.p):yi(this.p);let n=i.local,r=_i(n,[0,1,0]);We(r)<.001&&(r=_i(n,[1,0,0])),r=yi(r);let a=_i(n,r),o=2.5/i.body.radius,l=i.body.radius,c=(v,g)=>{let m=yi(Ri(n,Ri(Se(r,v*o),Se(a,g*o)))),_=e(this.frame,m);return Se(m,l+_)},h=c(-1,0),u=c(1,0),d=c(0,-1),p=c(0,1),f=yi(_i(fi(u,h),fi(p,d)));return Zn(f,n)<0&&(f=Se(f,-1)),this.rot||(f=Wt(t.orient[this.frame],f)),f}steer(t,e,i){let n=e.stick,r=this.mode==="cruise"||this.mode==="jump",a=this.mode==="landed",o=r?.42:1,l=r?.8:1.5,c=0,h=0,u=0;if(!a&&!i&&this.mode!=="jump"&&(c=-n.y*o,h=-n.x*o),!a&&this.mode!=="jump"&&(e.down("ArrowUp")&&(c-=o*.7),e.down("ArrowDown")&&(c+=o*.7),e.down("ArrowLeft")&&(h+=o*.7),e.down("ArrowRight")&&(h-=o*.7),e.down("KeyA")&&(u+=l),e.down("KeyD")&&(u-=l)),this.mode==="flight"&&this.alt<600&&this.frame>=0){let f=yi(this.p),v=this.up,g=_i(v,f),m=Wt(je(this.q),g),_=ue(1-Math.hypot(n.x,n.y)*2,0,1)*ue((600-this.alt)/400,0,1)*1.2;c+=m[0]*_,u+=m[2]*_}let d=1-Math.exp(-t*(r?3:5));this.w[0]+=(c-this.w[0])*d,this.w[1]+=(h-this.w[1])*d,this.w[2]+=(u-this.w[2])*d;let p=We(this.w)*t;if(p>1e-9){let f=yi(this.w);this.q=Jn(Ne(this.q,ii(f[0],f[1],f[2],p)))}}turnToward(t,e,i=.8){let n=this.forward,r=Zn(n,t),a=_i(n,t),o=We(a);if(o<1e-6&&r>0)return 1;let l=Math.atan2(o,r),c=Math.min(l,i*e),h=o>1e-6?Se(a,1/o):this.up;return this.q=Jn(Ne(ii(h[0],h[1],h[2],c),this.q)),this.w=[0,0,0],r}updateFlight(t,e,i,n){let r=this.frame>=0?i.sys.bodies[this.frame]:null,a=[0,0,0],o=r?r.mass:i.sys.star.mass,l=We(this.p);l>1&&(a=Se(this.p,-Sn*o/(l*l*l))),r||(a=Se(this.p,-Sn*i.sys.star.mass/Math.max(l*l*l,1)));let c=We(a),h=this.alt,u=r&&r.solid?h:1e9,d=this.boost||1,p=ue((60+(isFinite(u)?u:1e9)*.35)*Math.min(d,10),60,2500*d),f=this.air?this.air.rho:0,v=We(this.v),g=f>0?Se(this.v,-Nc*f*v):[0,0,0],m=[0,0,0];e.down("KeyQ")&&(m[0]-=1),e.down("KeyE")&&(m[0]+=1),e.down("KeyR")&&(m[1]+=1),e.down("KeyF")&&(m[1]-=1);let _=ue(15+(isFinite(u)?u:1e4)*.05,15,80),y=[m[0]*_,m[1]*_*.8,-this.throttle*p],x=Wt(this.q,y),E=fi(fi(Se(fi(x,this.v),1/.9),a),g),A=Wt(je(this.q),E),P=d>1?d*6:1,w={fwd:34*P,back:16*P,lat:12*Math.sqrt(P),up:26*Math.sqrt(P),down:12*Math.sqrt(P)};A[0]=ue(A[0],-w.lat,w.lat),A[1]=ue(A[1],-w.down,w.up),A[2]=ue(A[2],-w.fwd,w.back),this.thrust=ue(Math.max(-A[2],0)/w.fwd+Math.abs(A[1])/w.up*.25,0,1),d>1&&(this.thrust=Math.max(this.thrust,ue(Math.max(-A[2],0)/34,0,1)));let M=Ri(Wt(this.q,A),a);this.v=Se(Ri(this.v,Se(M,t)),1/(1+Nc*f*v*t));let I=We(this.v);I>.995*299792458&&(this.v=Se(this.v,.995*299792458/I)),this.p=Ri(this.p,Se(this.v,t)),this.gmag=c,this.dragG=We(g)/9.81,this.canHover=w.up>c*1.02}updateCruise(t,e,i=1/0){let n=this.boost||1,r=Math.min(ue(.38*e*n,400,2400*299792458*n),i,.9*e/Math.max(t,.001)),a=this.throttle*r,o=1.15*(1+Math.log10(n)*.9);this.cruiseV<a?this.cruiseV=Math.min(a,this.cruiseV*Math.exp(o*t)+300*t):this.cruiseV=a+(this.cruiseV-a)*Math.exp(-5*t),this.cruiseV=Math.min(this.cruiseV,r),this.cruiseCap=r,this.v=Se(this.forward,this.cruiseV),this.p=Ri(this.p,Se(this.v,t)),this.thrust=0}collide(t,e){if(this.frame<0||this.mode!=="flight")return null;this.measureGround(t,e);let i=this.ground;if(!i)return null;let n=i.body;if(!n.solid)return this.alt<0?{type:"gas",depth:-this.alt}:null;let r=this.alt-this.bottom;if(r>0)return null;let a=this.terrainNormal(t,e),o=yi(this.p),l=Zn(this.v,a),c=We(this.v),h=Zn(a,o)>.82,u=Zn(this.up,a)>.8,d=this.gearReady;if(this.p=Ri(this.p,Se(o,-r)),d&&c<7.5&&h&&u&&n.landable)return{type:"land",normal:a,speed:c};let p=0,f=Math.max(-l,0);return f>(d?6:2.5)&&(p=(f-(d?6:2.5))*(d?.025:.05)),!n.landable&&f>1&&(p+=.05),l<0&&(this.v=fi(this.v,Se(a,l*1.35))),this.v=Se(this.v,.92),{type:"scrape",damage:p,impact:f,normal:a}}land(t,e){this.mode="landed",this.v=[0,0,0],this.w=[0,0,0],this.throttle=0,this.landNormal=e,this.landBody=this.frame;let i=Zu(this.up,e);this.landQ=Jn(Ne(i,this.q))}updateLanded(t,e,i){if(this.landQ&&(this.q=ju(this.q,this.landQ,1-Math.exp(-t*4))),this.measureGround(e,i),this.ground){let n=yi(this.p),r=this.ground.body.radius+this.groundH+this.bottom,a=We(this.p);this.p=Se(n,a+(r-a)*(1-Math.exp(-t*6)))}this.v=[0,0,0],this.thrust=0}takeoff(){this.mode="flight",this.v=Se(yi(this.p),4),this.landQ=null,this.events.push("takeoff")}};var Ju=`#include <common>
#include <logdepthbuf_pars_vertex>
`,Ku=`#include <common>
#include <logdepthbuf_pars_fragment>
`,Fa=class{constructor(t=420,e=360){this.count=t,this.size=e,this.pos=new Float32Array(t*3),this.seed=new Float32Array(t);for(let n=0;n<t;n++)this.pos[n*3]=(Math.random()-.5)*e,this.pos[n*3+1]=(Math.random()-.5)*e,this.pos[n*3+2]=(Math.random()-.5)*e,this.seed[n]=Math.random();let i=new me;this.attr=new le(this.pos,3).setUsage(or),i.setAttribute("position",this.attr),i.setAttribute("aSeed",new le(this.seed,1)),this.mat=new Yt({uniforms:{uColor:{value:new C(1,1,1)},uI:{value:0},uPx:{value:1},uHalf:{value:e/2}},vertexShader:`${Ju}
attribute float aSeed;
uniform float uPx; uniform float uHalf;
varying float vA;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float d = length(mv.xyz);
  gl_PointSize = clamp((14.0 + 30.0 * aSeed) * 120.0 / d, 1.0, 90.0) * uPx;
  // fade toward the edges of the box so wrapping is invisible
  vA = (1.0 - smoothstep(uHalf * 0.6, uHalf, d)) * smoothstep(6.0, 30.0, d) * (0.4 + 0.6 * aSeed);
  #include <logdepthbuf_vertex>
}`,fragmentShader:`${Ku}
uniform vec3 uColor; uniform float uI;
varying float vA;
void main() {
  #include <logdepthbuf_fragment>
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  float a = exp(-r2 * 3.0) * vA * uI;
  gl_FragColor = vec4(uColor * a, a);
}`,transparent:!0,depthWrite:!1,blending:Re,blendSrc:ce,blendDst:vn}),this.points=new Mn(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=4,this.points.visible=!1}update(t,e,i,n,r){if(this.points.visible=i>.01,!this.points.visible)return;let a=this.size/2,o=e[0]*t,l=e[1]*t,c=e[2]*t,h=Math.hypot(o,l,c),u=h>a*.5?a*.5/h:1;for(let d=0;d<this.count;d++){let p=this.pos[d*3]+o*u,f=this.pos[d*3+1]+l*u,v=this.pos[d*3+2]+c*u;p>a?p-=this.size:p<-a&&(p+=this.size),f>a?f-=this.size:f<-a&&(f+=this.size),v>a?v-=this.size:v<-a&&(v+=this.size),this.pos[d*3]=p,this.pos[d*3+1]=f,this.pos[d*3+2]=v}this.attr.needsUpdate=!0,this.mat.uniforms.uI.value=i,this.mat.uniforms.uColor.value.set(n[0],n[1],n[2]),this.mat.uniforms.uPx.value=r}},Oa=class{constructor(t){this.scene=t,this.mat=new Yt({uniforms:{uT:{value:0},uI:{value:0}},vertexShader:`${Ju} varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ vP = position; vN = normalize(normalMatrix*normal); vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; gl_Position = projectionMatrix*mv;
#include <logdepthbuf_vertex>
}`,fragmentShader:`${Ku} uniform float uT; uniform float uI; varying vec3 vN; varying vec3 vV; varying vec3 vP;
float h(vec3 p){ return fract(sin(dot(p, vec3(12.9, 78.2, 37.7))) * 43758.5); }
void main(){
#include <logdepthbuf_fragment>
  float mu = abs(dot(normalize(vN), normalize(vV)));
  float core = pow(mu, 1.5);
  float t = clamp(uT, 0.0, 1.0);
  vec3 hot = mix(vec3(1.0, 0.95, 0.85), vec3(1.0, 0.45, 0.12), t);
  vec3 c = mix(hot, vec3(0.2, 0.08, 0.04), smoothstep(0.4, 1.0, t));
  float grain = 0.75 + 0.25 * h(floor(vP * 6.0 + uT * 3.0));
  gl_FragColor = vec4(c * core * grain * uI, 1.0);
}`,transparent:!0,depthWrite:!1,blending:Re,blendSrc:ce,blendDst:ce}),this.mesh=new yt(new ke(1,32,24),this.mat),this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh),this.active=!1}start(t,e){this.world=t.slice(),this.radius=e,this.t=0,this.active=!0}update(t,e,i){if(!this.active){this.mesh.visible=!1;return}this.t+=t;let n=this.t/2.5;if(n>1){this.active=!1,this.mesh.visible=!1;return}this.mesh.visible=!0,this.mesh.position.set(this.world[0]-e[0],this.world[1]-e[1],this.world[2]-e[2]),this.mesh.scale.setScalar(this.radius*(.15+Math.pow(n,.4))),this.mat.uniforms.uT.value=n,this.mat.uniforms.uI.value=(1-n)*(1-n)*30/Math.max(i,1e-6)}};var id=1e3,nd=Math.acosh(id),Qu=6,td=7,kx=4.5,ed=7.5,Uc=s=>nd*Math.pow(Math.max(0,Math.min(1,s)),2.4),ka=class{constructor(t){this.game=t,this.phase="idle"}get active(){return this.phase!=="idle"}start(t){let e=this.game;this.target=t,this.origin=e.star,this.distLy=xe(t.pos,this.origin.pos);let i=this.distLy;this.dir=[(t.pos[0]-this.origin.pos[0])/i,(t.pos[1]-this.origin.pos[1])/i,(t.pos[2]-this.origin.pos[2])/i];let n=e.cheats&&e.cheats.fastJump?.25:1;this.Tc=Qu*n,this.Ta=td*n,this.Tt=Math.max(1.2,kx*n),this.Td=ed*n,this.turnRate=n<1?2.5:.7,this.phase="charge",this.t=0,this.swapped=!1,this.homeAdded=0,this.homeTotal=i+.35,this.shipTotal=i/id+(td+ed)*2*Ds/qn,this.shipAdded=0,e.ship.mode="jump",e.ship.throttle=0,e.audio.engage()}cancel(t){let e=this.game;this.phase="idle",e.ship.mode="flight",Ns(e.engine.sky.uniforms,0),t&&e.hud.note(t,"warn")}beta(){return this.phase==="accel"?Math.tanh(Uc(this.t/this.Ta)):this.phase==="transit"?Math.tanh(nd):this.phase==="decel"?Math.tanh(Uc(1-this.t/this.Td)):0}remaining(t){let e=0,i=400,n=(this.Td-t)/i;for(let r=0;r<i;r++){let a=t+(r+.5)*n;e+=Math.tanh(Uc(1-a/this.Td))*299792458*n}return e}update(t){let e=this.game,i=e.ship;this.t+=t;let n=e.engine.sky,r=0;if(this.phase==="charge"){let o=i.frame>=0&&i.rot?e.dirToFrame(this.dir):e.dirToFrame(this.dir),l=i.turnToward(o,t,this.turnRate);r=this.t/this.Tc*.5,this.t>=this.Tc&&(l<.9995?this.t=this.Tc-.5*this.Tc/Qu:(i.setFrame(e.world,-1,!1),i.v=[0,0,0],this.phase="accel",this.t=0,e.audio.jumpBoom(),e.engine.post.flash=.6))}else if(this.phase==="accel"){let o=this.beta();i.p=[i.p[0]+this.dir[0]*o*299792458*t,i.p[1]+this.dir[1]*o*299792458*t,i.p[2]+this.dir[2]*o*299792458*t],i.q=e.qLookDir(this.dir),r=.5+.5*(this.t/this.Ta),this.advanceClocks(t,.03),this.t>=this.Ta&&(this.phase="transit",this.t=0)}else if(this.phase==="transit")r=1,this.advanceClocks(t,.94),!this.swapped&&this.t>.6&&(this.swapped=!0,this.decelDistance=this.remaining(0),e.arriveSystem(this.target,this.dir,this.decelDistance)),this.t>=this.Tt&&!e.engine.sky.pending&&(this.phase="decel",this.t=0);else if(this.phase==="decel"){let o=this.remaining(Math.min(this.t,this.Td)),l=e.arrivalDistance;i.p=[-this.dir[0]*(l+o),-this.dir[1]*(l+o),-this.dir[2]*(l+o)],i.q=e.qLookDir(this.dir),r=1-this.t/this.Td,this.advanceClocks(t,.03),this.t>=this.Td&&this.finish()}let a=this.beta();return Ns(n.uniforms,a),n.uniforms.uVelDir.value.set(this.dir[0],this.dir[1],this.dir[2]),this.jumpLevel=r,r}advanceClocks(t,e){let i=this.game,n=this.phase==="transit"?this.Tt:this.phase==="accel"?this.Ta:this.Td,r=Math.min(this.homeTotal-this.homeAdded,this.homeTotal*e*t/n);this.homeAdded+=r,i.homeYears+=r;let a=Math.min(this.shipTotal-this.shipAdded,this.shipTotal*e*t/n);this.shipAdded+=a,i.shipYears+=a}finish(){let t=this.game;t.homeYears+=this.homeTotal-this.homeAdded,t.shipYears+=this.shipTotal-this.shipAdded,this.phase="idle",Ns(t.engine.sky.uniforms,0),t.ship.mode="flight",t.ship.v=[0,0,0],t.ship.throttle=0,t.onArrived(this.origin,this.distLy)}hudInfo(){let t=this.beta(),e=1/Math.sqrt(Math.max(1-t*t,1e-12));return{title:{charge:`JUMP DRIVE CHARGING \xB7 ${Math.max(0,this.Tc-this.t).toFixed(1)} s`,accel:"ACCELERATING",transit:`IN TRANSIT TO ${this.target.name.toUpperCase()}`,decel:"DECELERATING"}[this.phase],beta:this.phase==="charge"?0:t,gamma:e,clock:`Aboard +${(this.shipAdded*365.25).toFixed(1)} days   \xB7   At home +${this.homeAdded.toFixed(2)} years`}}};var Ba=class{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.stick={x:0,y:0},this.mouseDelta={x:0,y:0},this.wheel=0,this.buttons=0,this.locked=!1,this.invertY=!1,this.sensitivity=1,this.enabled=!0,window.addEventListener("keydown",e=>{e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")||(["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code))}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.buttons=0}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||(this.stick.x=0,this.stick.y=0)}),window.addEventListener("mousemove",e=>{this.locked?(this.mouseDelta.x+=e.movementX,this.mouseDelta.y+=e.movementY):this.buttons&3&&(this.mouseDelta.x+=e.movementX,this.mouseDelta.y+=e.movementY)}),t.addEventListener("mousedown",e=>{this.buttons|=1<<e.button,e.button===0&&!this.locked&&this.enabled&&this.requestLock()}),window.addEventListener("mouseup",e=>{this.buttons&=~(1<<e.button)}),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("wheel",e=>{this.wheel+=Math.sign(e.deltaY),e.preventDefault()},{passive:!1})}requestLock(){try{let t=this.canvas.requestPointerLock?.();t&&t.catch&&t.catch(()=>{})}catch{}}releaseLock(){document.pointerLockElement&&document.exitPointerLock()}down(t){return this.enabled&&this.keys.has(t)}hit(t){return this.enabled&&this.pressed.has(t)}updateStick(t,e){let i=.0045*this.sensitivity;e||(this.stick.x+=this.mouseDelta.x*i,this.stick.y+=this.mouseDelta.y*i*(this.invertY?-1:1));let n=Math.hypot(this.stick.x,this.stick.y);n>1&&(this.stick.x/=n,this.stick.y/=n);let r=Math.exp(-t*1.6);return this.stick.x*=r,this.stick.y*=r,this.stick}endFrame(){this.pressed.clear(),this.mouseDelta.x=0,this.mouseDelta.y=0,this.wheel=0}};var sd={aeolian:[0,2,3,5,7,8,10],dorian:[0,2,3,5,7,9,10],lydian:[0,2,4,6,7,9,11],phrygian:[0,1,3,5,7,8,10],pentatonic:[0,3,5,7,10],mixolydian:[0,2,4,5,7,9,10]};function Bx(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ha=class{constructor(){this.ctx=null,this.volume={master:.8,music:.7,sfx:.8},this.nextChord=0,this.nextBell=0,this.mood={root:55,mode:sd.aeolian,seed:1}}start(){if(this.ctx){this.ctx.resume?.();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.volume.master;let i=e.createDynamicsCompressor();i.threshold.value=-18,i.ratio.value=3,i.attack.value=.02,i.release.value=.4,this.master.connect(i).connect(e.destination),this.reverb=e.createConvolver(),this.reverb.buffer=this.impulse(6.5,2.6),this.reverbOut=e.createGain(),this.reverbOut.gain.value=.9,this.reverb.connect(this.reverbOut).connect(this.master),this.music=e.createGain(),this.music.gain.value=this.volume.music,this.music.connect(this.master),this.musicSend=e.createGain(),this.musicSend.gain.value=1,this.music.connect(this.musicSend).connect(this.reverb),this.sfx=e.createGain(),this.sfx.gain.value=this.volume.sfx,this.sfx.connect(this.master),this.sfxSend=e.createGain(),this.sfxSend.gain.value=.35,this.sfx.connect(this.sfxSend).connect(this.reverb),this.noiseBuf=this.noise(4,!1),this.brownBuf=this.noise(4,!0),this.buildContinuous(),this.nextChord=e.currentTime+1.5,this.nextBell=e.currentTime+6}setVolumes(t){if(Object.assign(this.volume,t),!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.volume.master,e,.1),this.music.gain.setTargetAtTime(this.volume.music,e,.1),this.sfx.gain.setTargetAtTime(this.volume.sfx,e,.1)}impulse(t,e){let i=this.ctx,n=Math.floor(i.sampleRate*t),r=i.createBuffer(2,n,i.sampleRate);for(let a=0;a<2;a++){let o=r.getChannelData(a),l=0;for(let c=0;c<n;c++){let h=c/n;l+=(Math.random()*2-1-l)*(.35-.25*h),o[c]=l*Math.pow(1-h,e)*(c<200?c/200:1)}}return r}noise(t,e){let i=this.ctx,n=Math.floor(i.sampleRate*t),r=i.createBuffer(1,n,i.sampleRate),a=r.getChannelData(0),o=0;for(let l=0;l<n;l++){let c=Math.random()*2-1;e?(o=(o+.02*c)/1.02,a[l]=o*3.5):a[l]=c}return r}loop(t){let e=this.ctx.createBufferSource();return e.buffer=t,e.loop=!0,e.start(),e}buildContinuous(){let t=this.ctx;this.hum=t.createOscillator(),this.hum.type="sawtooth",this.hum.frequency.value=46,this.humF=t.createBiquadFilter(),this.humF.type="lowpass",this.humF.frequency.value=160,this.humG=t.createGain(),this.humG.gain.value=0,this.hum.connect(this.humF).connect(this.humG).connect(this.sfx),this.hum.start(),this.room=this.loop(this.brownBuf),this.roomF=t.createBiquadFilter(),this.roomF.type="lowpass",this.roomF.frequency.value=220,this.roomG=t.createGain(),this.roomG.gain.value=.05,this.room.connect(this.roomF).connect(this.roomG).connect(this.sfx),this.thr=this.loop(this.noiseBuf),this.thrF=t.createBiquadFilter(),this.thrF.type="bandpass",this.thrF.frequency.value=500,this.thrF.Q.value=.7,this.thrG=t.createGain(),this.thrG.gain.value=0,this.thr.connect(this.thrF).connect(this.thrG).connect(this.sfx),this.cru=this.loop(this.brownBuf),this.cruF=t.createBiquadFilter(),this.cruF.type="lowpass",this.cruF.frequency.value=200,this.cruG=t.createGain(),this.cruG.gain.value=0,this.cru.connect(this.cruF).connect(this.cruG).connect(this.sfx),this.cruTone=t.createOscillator(),this.cruTone.type="sine",this.cruTone.frequency.value=33,this.cruToneG=t.createGain(),this.cruToneG.gain.value=0,this.cruTone.connect(this.cruToneG).connect(this.sfx),this.cruTone.start(),this.wind=this.loop(this.noiseBuf),this.windF=t.createBiquadFilter(),this.windF.type="bandpass",this.windF.frequency.value=400,this.windF.Q.value=.5,this.windG=t.createGain(),this.windG.gain.value=0,this.wind.connect(this.windF).connect(this.windG).connect(this.sfx),this.scoop=this.loop(this.brownBuf),this.scoopF=t.createBiquadFilter(),this.scoopF.type="lowpass",this.scoopF.frequency.value=600,this.scoopG=t.createGain(),this.scoopG.gain.value=0,this.scoop.connect(this.scoopF).connect(this.scoopG).connect(this.sfx),this.jmp=t.createOscillator(),this.jmp.type="sawtooth",this.jmp.frequency.value=40,this.jmpF=t.createBiquadFilter(),this.jmpF.type="lowpass",this.jmpF.frequency.value=300,this.jmpF.Q.value=6,this.jmpG=t.createGain(),this.jmpG.gain.value=0,this.jmp.connect(this.jmpF).connect(this.jmpG).connect(this.sfx),this.jmp.start(),this.drone=t.createOscillator(),this.drone.type="sine",this.drone.frequency.value=55,this.drone2=t.createOscillator(),this.drone2.type="sine",this.drone2.frequency.value=82.5,this.droneG=t.createGain(),this.droneG.gain.value=0,this.drone.connect(this.droneG),this.drone2.connect(this.droneG),this.droneG.connect(this.music),this.drone.start(),this.drone2.start(),this.alarmT=0}setMood(t,e){let i=Bx(t),n=e==="M"||e==="L"?i()<.5?"phrygian":"aeolian":e==="A"||e==="B"||e==="O"||e==="F"?i()<.5?"lydian":"mixolydian":e==="D"||e==="N"||e==="X"?"pentatonic":i()<.5?"dorian":"aeolian",r=41.2*Math.pow(2,Math.floor(i()*7)/12);if(this.mood={root:r,mode:sd[n],seed:t,rand:i},this.ctx){let a=this.ctx.currentTime;this.drone.frequency.setTargetAtTime(r,a,4),this.drone2.frequency.setTargetAtTime(r*1.5,a,4)}}freq(t,e){let i=this.mood.mode,n=Math.floor(t/i.length),r=(t%i.length+i.length)%i.length;return this.mood.root*Math.pow(2,e+n+i[r]/12)}padChord(t){let e=this.ctx,i=this.mood.rand||Math.random,n=Math.floor(i()*7),r=[n,n+2,n+4,n+(i()<.5?6:7)],a=26+i()*14;for(let o=0;o<r.length;o++){let l=this.freq(r[o],1+(o>1?1:0)),c=e.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(.022/(1+o*.3),t+7+i()*3),c.gain.setValueAtTime(.022/(1+o*.3),t+a-10),c.gain.linearRampToValueAtTime(0,t+a);let h=e.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(380,t),h.frequency.linearRampToValueAtTime(900+i()*700,t+a*.5),h.frequency.linearRampToValueAtTime(420,t+a);for(let u of[-6,5]){let d=e.createOscillator();d.type=o===0?"triangle":"sawtooth",d.frequency.value=l,d.detune.value=u+(i()-.5)*4,d.connect(h),d.start(t),d.stop(t+a+.1)}h.connect(c).connect(this.music)}return a}bell(t,e,i=.05){let n=this.ctx,r=n.createOscillator();r.type="sine",r.frequency.value=e;let a=n.createOscillator();a.type="sine",a.frequency.value=e*3.5;let o=n.createGain();o.gain.setValueAtTime(e*2.2,t),o.gain.exponentialRampToValueAtTime(e*.05,t+2.5),a.connect(o).connect(r.frequency);let l=n.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(i,t+.008),l.gain.exponentialRampToValueAtTime(1e-4,t+6);let c=n.createStereoPanner?n.createStereoPanner():null;c&&(c.pan.value=(Math.random()-.5)*.8),r.connect(l),(c?l.connect(c):l).connect(this.music),r.start(t),a.start(t),r.stop(t+6.2),a.stop(t+6.2)}updateMusic(){let t=this.ctx.currentTime,e=this.mood.rand||Math.random;if(t>=this.nextChord){let i=this.padChord(t+.05);this.nextChord=t+i*(.55+e()*.25)+(e()<.25?20:0)}if(t>=this.nextBell){let i=e()<.6?1:e()<.7?2:3,n=Math.floor(e()*10);for(let r=0;r<i;r++)this.bell(t+r*(.9+e()*.8),this.freq(n,3+(e()<.3?1:0)),.03+e()*.025),n+=e()<.5?2:-1;this.nextBell=t+7+e()*16}}update(t){if(!this.ctx)return;let e=this.ctx.currentTime,i=.15;this.humG.gain.setTargetAtTime(.018+t.thrust*.05,e,i),this.humF.frequency.setTargetAtTime(140+t.thrust*260,e,i),this.thrG.gain.setTargetAtTime(t.thrust*.09+(t.rcs?.02:0),e,.08),this.thrF.frequency.setTargetAtTime(380+t.thrust*600,e,i);let n=t.cruise?Math.min(1,Math.log10(Math.max(t.speed,1e3)/1e3)/6):0;this.cruG.gain.setTargetAtTime(t.cruise?.06+n*.12:0,e,.4),this.cruF.frequency.setTargetAtTime(120+n*600,e,.4),this.cruToneG.gain.setTargetAtTime(t.cruise?.03+n*.03:0,e,.5);let r=Math.min(1,t.windDensity*(.15+Math.min(t.airSpeed/300,1.5))),a=Math.min(1,(t.plasma||0)/3);this.windG.gain.setTargetAtTime(Math.max(r*.16,a*.3),e,.3),this.windF.frequency.setTargetAtTime(250+500*Math.min(t.airSpeed/300,1)+150*Math.sin(e*.37)*Math.sin(e*.13),e,.3),this.scoopG.gain.setTargetAtTime(t.scoop*.18+Math.max(0,t.heat-.6)*.1,e,.3),this.scoopF.frequency.setTargetAtTime(300+t.scoop*900,e,.3),this.jmpG.gain.setTargetAtTime(t.jump*.06,e,.2),this.jmp.frequency.setTargetAtTime(38+t.jump*70,e,.3),this.jmpF.frequency.setTargetAtTime(200+t.jump*1600,e,.3),this.roomG.gain.setTargetAtTime(.035,e,1),this.droneG.gain.setTargetAtTime(t.musicDrone?.012:0,e,3),(t.pressure||0)>0&&e-(this.groanT||0)>1.5+Math.random()*3&&(this.groanT=e,this.sweep(60+Math.random()*50,28,2.2,.04+.09*t.pressure,"sawtooth")),t.heat>.85&&e-this.alarmT>1.2&&(this.alarmT=e,this.tone(880,.08,.04,"square"),this.tone(660,.08,.04,"square",.14)),t.music&&this.updateMusic()}tone(t,e,i,n="sine",r=0,a=null){if(!this.ctx)return;let o=this.ctx,l=o.currentTime+r,c=o.createOscillator();c.type=n,c.frequency.value=t;let h=o.createGain();h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(i,l+.005),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h).connect(a||this.sfx),c.start(l),c.stop(l+e+.05)}sweep(t,e,i,n,r="sine"){if(!this.ctx)return;let a=this.ctx,o=a.currentTime,l=a.createOscillator();l.type=r,l.frequency.setValueAtTime(t,o),l.frequency.exponentialRampToValueAtTime(e,o+i);let c=a.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(n,o+.02),c.gain.exponentialRampToValueAtTime(1e-4,o+i),l.connect(c).connect(this.sfx),l.start(o),l.stop(o+i+.05)}thud(t=.3){if(!this.ctx)return;let e=this.ctx,i=e.currentTime,n=e.createBufferSource();n.buffer=this.brownBuf;let r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=160;let a=e.createGain();a.gain.setValueAtTime(t,i),a.gain.exponentialRampToValueAtTime(1e-4,i+.9),n.connect(r).connect(a).connect(this.sfx),n.start(i,Math.random()*2),n.stop(i+1),this.tone(55,.5,t*.4)}servo(t=1.4){if(!this.ctx)return;let e=this.ctx,i=e.currentTime,n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(140,i),n.frequency.linearRampToValueAtTime(190,i+t);let r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=3;let a=e.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.025,i+.1),a.gain.setValueAtTime(.025,i+t-.2),a.gain.linearRampToValueAtTime(0,i+t),n.connect(r).connect(a).connect(this.sfx),n.start(i),n.stop(i+t+.05),this.tone(320,.12,.05,"triangle",t)}thunder(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,i=t.createBufferSource();i.buffer=this.brownBuf;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=220;let r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.25,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+3.5),i.connect(n).connect(r).connect(this.sfx),i.start(e,Math.random()*2),i.stop(e+3.6)}blip(){this.tone(1760,.06,.025)}select(){this.tone(1320,.05,.02),this.tone(1980,.08,.018,"sine",.05)}deny(){this.tone(220,.15,.04,"triangle")}pulse(){this.sweep(180,1400,1.6,.06),this.tone(90,2.5,.05,"sine",0,this.music)}surveyed(){[0,4,7].forEach((t,e)=>this.bell(this.ctx?this.ctx.currentTime+e*.18:0,this.freq(t+7,3),.035))}message(){this.ctx&&(this.tone(988,.25,.03),this.tone(1318,.4,.025,"sine",.22))}engage(){this.sweep(60,220,1.2,.08,"triangle")}disengage(){this.sweep(260,60,.9,.07,"triangle")}jumpBoom(){this.thud(.5),this.sweep(800,30,3,.08)}arrive(){this.sweep(1200,140,3.5,.05),this.ctx&&this.bell(this.ctx.currentTime+1.5,this.freq(0,3),.05)}};var Zt="rgba(232,228,218,",Tn="#e3a54b",rd="#e0674c",za=class{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.notes=[],this.v=new C,this.pulse=-1,this.visible=!0,this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.dpr=t,this.w=window.innerWidth,this.h=window.innerHeight,this.canvas.width=Math.round(this.w*t),this.canvas.height=Math.round(this.h*t)}note(t,e="info",i=7){this.notes.push({text:t,kind:e,t:0,life:i}),this.notes.length>6&&this.notes.shift()}project(t,e){let i=Math.hypot(e[0],e[1],e[2]);if(i===0)return null;this.v.set(e[0]/i,e[1]/i,e[2]/i).applyQuaternion(t.quaternion.clone().invert());let n=this.v.z>0,r=this.v.clone().applyMatrix4(t.projectionMatrix),a=(r.x*.5+.5)*this.w,o=(-r.y*.5+.5)*this.h;return n&&(a=this.w-a,o=this.h-o),{x:a,y:o,behind:n,on:!n&&a>=0&&a<=this.w&&o>=0&&o<=this.h}}text(t,e,i,{size:n=11,color:r=Zt+"0.82)",align:a="left",weight:o=500,spacing:l=.08}={}){let c=this.ctx;c.font=`${o} ${n}px "IBM Plex Mono", ui-monospace, Menlo, monospace`,c.fillStyle=r,c.textAlign=a,c.textBaseline="alphabetic","letterSpacing"in c&&(c.letterSpacing=`${l}em`),c.fillText(t,e,i)}bar(t,e,i,n,r,a,o){let l=this.ctx;this.text(a,t,e-6,{size:10,color:Zt+"0.55)",spacing:.16}),this.text(o,t+i,e-6,{size:10,color:r,align:"right"}),l.fillStyle=Zt+"0.12)",l.fillRect(t,e,i,3),l.fillStyle=r,l.fillRect(t,e,Math.max(0,Math.min(1,n))*i,3)}draw(t,e){let i=this.ctx;if(i.setTransform(this.dpr,0,0,this.dpr,0,0),i.clearRect(0,0,this.w,this.h),!this.visible||!e)return;let n=this.w,r=this.h,a=e.camera,o=Math.max(16,Math.min(n,r)*.035),l=this.project(a,e.noseDir);if(l&&l.on&&e.mode!=="landed"&&(i.strokeStyle=Zt+"0.55)",i.lineWidth=1,i.beginPath(),i.arc(l.x,l.y,9,.25,Math.PI-.25),i.moveTo(l.x+9*Math.cos(Math.PI+.25),l.y+9*Math.sin(Math.PI+.25)),i.arc(l.x,l.y,9,Math.PI+.25,Math.PI*2-.25),i.stroke(),i.beginPath(),i.moveTo(l.x-16,l.y),i.lineTo(l.x-12,l.y),i.moveTo(l.x+12,l.y),i.lineTo(l.x+16,l.y),i.stroke()),e.velDir&&e.mode==="flight"&&e.speed>3){let f=this.project(a,e.velDir);f&&f.on&&(i.strokeStyle="rgba(160,210,190,0.7)",i.beginPath(),i.arc(f.x,f.y,5,0,Math.PI*2),i.moveTo(f.x-5,f.y),i.lineTo(f.x-11,f.y),i.moveTo(f.x+5,f.y),i.lineTo(f.x+11,f.y),i.moveTo(f.x,f.y-5),i.lineTo(f.x,f.y-10),i.stroke())}for(let f of e.labels||[]){let v=this.project(a,f.rel);if(!v||!v.on)continue;let g=f.alpha??.5;i.strokeStyle=Zt+g*.6+")",i.beginPath(),f.kind==="signal"?(i.moveTo(v.x,v.y-5),i.lineTo(v.x+5,v.y),i.lineTo(v.x,v.y+5),i.lineTo(v.x-5,v.y),i.closePath()):(i.moveTo(v.x+4,v.y-4),i.lineTo(v.x+12,v.y-12)),i.stroke(),this.text(f.name,v.x+14,v.y-14,{size:10,color:Zt+g+")"}),f.sub&&this.text(f.sub,v.x+14,v.y-3,{size:9,color:Zt+g*.7+")"})}if(e.target){let f=e.target,v=this.project(a,f.rel);if(v&&v.on){let g=Math.max(14,Math.min(220,f.angR/e.pixelAngle*1.15+8));i.strokeStyle=Zt+"0.85)",i.lineWidth=1.2;let m=Math.min(10,g*.5);i.beginPath();for(let[_,y]of[[-1,-1],[1,-1],[1,1],[-1,1]])i.moveTo(v.x+_*g,v.y+y*(g-m)),i.lineTo(v.x+_*g,v.y+y*g),i.lineTo(v.x+_*(g-m),v.y+y*g);i.stroke(),this.text(f.name.toUpperCase(),v.x+g+8,v.y-4,{size:11,weight:600,spacing:.12}),this.text(f.info,v.x+g+8,v.y+10,{size:10,color:Zt+"0.6)"}),f.scan>0&&(i.strokeStyle="rgba(160,210,190,0.9)",i.lineWidth=2,i.beginPath(),i.arc(v.x,v.y,g+6,-Math.PI/2,-Math.PI/2+f.scan*Math.PI*2),i.stroke())}else if(v){let g=n/2,m=r/2,_=v.x-g,y=v.y-m,x=Math.hypot(_,y)||1;_/=x,y/=x;let R=Math.min((n/2-40)/Math.abs(_||1e-6),(r/2-40)/Math.abs(y||1e-6)),E=g+_*R,A=m+y*R;i.fillStyle=Zt+"0.8)",i.beginPath(),i.moveTo(E+_*10,A+y*10),i.lineTo(E-y*6,A+_*6),i.lineTo(E+y*6,A-_*6),i.closePath(),i.fill(),this.text(f.name.toUpperCase(),E-_*18,A-y*18+4,{size:10,align:_>0?"right":"left",color:Zt+"0.7)"})}}for(let f of e.skyMarkers||[]){let v=this.project(a,f.dir);!v||!v.on||(i.strokeStyle=f.color||Zt+"0.5)",i.lineWidth=1,i.beginPath(),i.arc(v.x,v.y,7,0,Math.PI*2),i.stroke(),this.text(f.name,v.x+11,v.y+4,{size:10,color:f.color||Zt+"0.6)"}))}this.text(e.systemName.toUpperCase(),o,o+6,{size:12,weight:600,spacing:.22}),this.text(e.systemSub,o,o+22,{size:10,color:Zt+"0.55)"}),this.text(e.timeLine,o,o+38,{size:10,color:Zt+"0.55)"}),e.objective&&this.text(e.objective.toUpperCase(),o,o+58,{size:10,color:"rgba(160,210,190,0.75)",spacing:.12}),this.text(e.homeLine,n-o,o+6,{size:10,align:"right",color:Zt+"0.6)",spacing:.14}),e.jumpLine&&this.text(e.jumpLine,n-o,o+22,{size:10,align:"right",color:e.jumpOk?Zt+"0.75)":Tn});let c=o,h=r-o;this.text(e.modeLabel,c,h-92,{size:10,color:e.modeColor||Zt+"0.6)",spacing:.24,weight:600}),e.boostLabel&&this.text(e.boostLabel,c,h-108,{size:10,color:Tn,spacing:.24,weight:600}),this.text(tn(e.speed),c,h-66,{size:22,weight:500,spacing:.02}),e.mode==="cruise"&&e.cruiseCap?this.text(`LIMIT ${tn(e.cruiseCap)}`,c,h-50,{size:10,color:Zt+"0.5)"}):e.mode==="flight"&&this.text(e.gLine||"",c,h-50,{size:10,color:Zt+"0.5)"});let u=150;if(i.fillStyle=Zt+"0.12)",i.fillRect(c,h-36,u,3),i.fillStyle=Zt+"0.8)",i.fillRect(c,h-36,u*e.throttle,3),this.text("THROTTLE",c,h-42+26,{size:9,color:Zt+"0.45)",spacing:.2}),this.text(`${Math.round(e.throttle*100)}%`,c+u,h-42+26,{size:9,align:"right",color:Zt+"0.6)"}),isFinite(e.alt)&&e.alt<2e6){let f=e.altLabel==="DEPTH";this.text(e.altLabel||"ALT",c+190,h-92,{size:10,color:f?Tn:Zt+"0.5)",spacing:.24}),this.text(xi(f?e.depth:Math.max(0,e.alt)),c+190,h-66,{size:16}),e.airLine&&this.text(e.airLine.toUpperCase(),c+330,h-66,{size:10,color:Zt+"0.6)"}),e.mode==="flight"&&e.alt<5e4&&this.text(`${e.vs>=0?"+":""}${e.vs.toFixed(1)} m/s`,c+190,h-50,{size:10,color:e.vs<-8&&e.alt<300?Tn:Zt+"0.55)"})}e.gear&&this.text(e.gearLabel,c+190,h-30,{size:9,color:e.gearWarn?Tn:Zt+"0.5)",spacing:.18});let d=n-o-170;this.bar(d,h-80,170,e.fuel,e.fuel<.2?Tn:Zt+"0.8)","FUEL",`${Math.round(e.fuel*100)}%  \xB7  ${e.rangeLy>=1e3?"ANY":`${e.rangeLy.toFixed(1)} LY`}`),this.bar(d,h-50,170,e.heat,e.heat>.85?rd:e.heat>.6?Tn:Zt+"0.8)","HEAT",`${Math.round(e.heat*100)}%`),this.bar(d,h-20,170,e.hull,e.hull<.3?rd:e.hull<.6?Tn:Zt+"0.8)","HULL",`${Math.round(e.hull*100)}%`),e.scooping&&this.text("FUEL SCOOP ACTIVE",d,h-102,{size:10,color:"rgba(160,210,190,0.9)",spacing:.18});let p=r*.3+10;for(let f=this.notes.length-1;f>=0;f--){let v=this.notes[f];if(v.t+=t,v.t>v.life){this.notes.splice(f,1);continue}}for(let f of this.notes){let v=Math.min(1,f.t*3)*Math.min(1,(f.life-f.t)/1.2),g=f.kind==="warn"?`rgba(227,165,75,${v})`:f.kind==="good"?`rgba(160,210,190,${v})`:Zt+v*.85+")";this.text(f.text,o,p,{size:11,color:g}),p+=18}if(e.hint&&this.text(e.hint,n/2,r-o-4,{size:10,align:"center",color:Zt+"0.55)",spacing:.14}),e.centerText&&(this.text(e.centerText,n/2,r*.62,{size:12,align:"center",color:e.centerColor||Zt+"0.85)",spacing:.2,weight:600}),e.centerSub&&this.text(e.centerSub,n/2,r*.62+18,{size:10,align:"center",color:Zt+"0.6)",spacing:.12})),this.pulse>=0){this.pulse+=t;let f=this.pulse/2.2;f>1?this.pulse=-1:(i.strokeStyle=`rgba(160,210,190,${(1-f)*.5})`,i.lineWidth=1,i.beginPath(),i.arc(n/2,r/2,f*Math.hypot(n,r)*.6,0,Math.PI*2),i.stroke())}if(e.jump){let f=e.jump;this.text(f.title,n/2,r*.2,{size:12,align:"center",spacing:.3,weight:600}),f.beta>0&&this.text(`\u03B2 ${f.beta.toFixed(f.beta>.999?7:4)}   \u03B3 ${f.gamma.toFixed(f.gamma>100?0:2)}`,n/2,r*.2+20,{size:11,align:"center",color:Zt+"0.7)"}),this.text(f.clock,n/2,r*.2+38,{size:10,align:"center",color:Zt+"0.55)"})}}};var Be="rgba(232,228,218,";function Va(s,t=1,e=1){let i=n=>Math.round(Math.min(1,Math.pow(Math.max(n*e,0),.45454545454545453))*255);return`rgba(${i(s[0])},${i(s[1])},${i(s[2])},${t})`}var Ga=class{constructor(t){this.game=t,this.el=document.getElementById("map"),this.canvas=document.getElementById("map-canvas"),this.ctx=this.canvas.getContext("2d"),this.info=document.getElementById("map-info"),this.tabs=[...this.el.querySelectorAll("[data-maptab]")],this.tab="galaxy",this.open=!1,this.yaw=.6,this.pitch=.55,this.zoom=32,this.center=null,this.selected=null,this.hover=null,this.drag=null,this.stars=[],this.inset=document.getElementById("map-inset"),this.insetDrawn=!1,this.tabs.forEach(e=>e.addEventListener("click",()=>this.setTab(e.dataset.maptab))),document.getElementById("map-close").addEventListener("click",()=>this.toggle(!1)),this.canvas.addEventListener("mousedown",e=>{this.drag={x:e.clientX,y:e.clientY,moved:!1}}),window.addEventListener("mouseup",e=>{this.drag&&!this.drag.moved&&this.open&&this.click(e),this.drag=null}),window.addEventListener("mousemove",e=>{if(!this.open)return;let i=this.canvas.getBoundingClientRect();if(this.mouse={x:e.clientX-i.left,y:e.clientY-i.top},this.drag){let n=e.clientX-this.drag.x,r=e.clientY-this.drag.y;Math.abs(n)+Math.abs(r)>3&&(this.drag.moved=!0),this.tab==="galaxy"?(this.yaw+=n*.006,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch+r*.006))):(this.sysPan.x+=n,this.sysPan.y+=r),this.drag.x=e.clientX,this.drag.y=e.clientY}}),this.canvas.addEventListener("wheel",e=>{e.preventDefault(),this.tab==="galaxy"?this.zoom=Math.max(8,Math.min(70,this.zoom*(e.deltaY>0?1.12:.89))):this.sysZoom=Math.max(.4,Math.min(8,this.sysZoom*(e.deltaY>0?.89:1.12)))},{passive:!1}),this.sysPan={x:0,y:0},this.sysZoom=1}toggle(t,e){let i=t??!this.open;i===this.open&&!e||(this.open=i,this.el.hidden=!i,i&&(this.game.input.releaseLock(),e&&(this.tab=e),this.setTab(this.tab),this.refresh()),this.game.audio.blip())}setTab(t){this.tab=t,this.tabs.forEach(e=>e.setAttribute("aria-selected",e.dataset.maptab===t?"true":"false")),this.inset.hidden=t!=="galaxy",this.renderInfo()}refresh(){let t=this.game,e=t.star.pos;this.center=e,this.stars=t.universe.galaxy.starsInRadius(e,52).map(i=>i.star),!this.selected&&t.jumpTarget&&(this.selected=t.jumpTarget),this.renderInfo()}resize(){let t=this.canvas.getBoundingClientRect(),e=Math.min(window.devicePixelRatio||1,2);(this.canvas.width!==Math.round(t.width*e)||this.canvas.height!==Math.round(t.height*e))&&(this.canvas.width=Math.round(t.width*e),this.canvas.height=Math.round(t.height*e)),this.cw=t.width,this.ch=t.height,this.dpr=e}projectLy(t){let e=this.center,i=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2],a=Math.cos(this.yaw),o=Math.sin(this.yaw);[i,r]=[i*a-r*o,i*o+r*a];let l=Math.cos(this.pitch),c=Math.sin(this.pitch);[n,r]=[n*l-r*c,n*c+r*l];let h=this.zoom*2.6,d=Math.min(this.cw,this.ch)*.9/(r+h);return r+h<1?null:{x:this.cw/2+i*d*(h/this.zoom)*.5,y:this.ch/2-n*d*(h/this.zoom)*.5,depth:r,k:d}}draw(){if(!this.open)return;this.resize();let t=this.ctx;t.setTransform(this.dpr,0,0,this.dpr,0,0),t.clearRect(0,0,this.cw,this.ch),this.tab==="galaxy"?this.drawGalaxy(t):this.drawSystem(t)}drawGalaxy(t){let e=this.game,i=e.star.pos;t.lineWidth=1;for(let h=10;h<=50;h+=10){t.strokeStyle=Be+(h===50?.06:.09)+")",t.beginPath();for(let d=0;d<=96;d++){let p=d/96*Math.PI*2,f=this.projectLy([i[0]+Math.cos(p)*h,i[1],i[2]+Math.sin(p)*h]);f&&(d?t.lineTo(f.x,f.y):t.moveTo(f.x,f.y))}t.stroke();let u=this.projectLy([i[0]+h,i[1],i[2]]);u&&this.label(t,`${h} ly`,u.x+4,u.y-3,9,Be+"0.3)")}let n=e.jumpRange();if(n<1e3){t.strokeStyle="rgba(160,210,190,0.35)",t.setLineDash([3,4]),t.beginPath();for(let h=0;h<=96;h++){let u=h/96*Math.PI*2,d=this.projectLy([i[0]+Math.cos(u)*n,i[1],i[2]+Math.sin(u)*n]);d&&(h?t.lineTo(d.x,d.y):t.moveTo(d.x,d.y))}t.stroke(),t.setLineDash([])}this.edgeMarker(t,Te,"SOL","rgba(232,210,150,0.8)"),this.edgeMarker(t,[0,0,0],"GALACTIC CORE",Be+"0.35)",!0);let r=[];for(let h of this.stars){let u=this.projectLy(h.pos);u&&r.push({s:h,p:u})}r.sort((h,u)=>u.p.depth-h.p.depth);let a=null,o=12;for(let{s:h,p:u}of r){let d=xe(h.pos,i),p=Math.max(h.lum,1e-4),f=Math.max(1.1,Math.min(5,1.6+Math.log10(p)*.75))*Math.min(1.6,u.k/14+.4),v=d<=n,g=this.projectLy([h.pos[0],i[1],h.pos[2]]);if(g&&Math.abs(h.pos[1]-i[1])>.5&&(d<=n*1.2||h===this.selected)&&(t.strokeStyle=Be+"0.08)",t.beginPath(),t.moveTo(u.x,u.y),t.lineTo(g.x,g.y),t.stroke()),t.fillStyle=h.kind==="blackhole"?"rgba(180,140,255,0.9)":Va(h.color,v?.95:.45,1),t.beginPath(),t.arc(u.x,u.y,f,0,Math.PI*2),t.fill(),h.kind==="blackhole"&&(t.strokeStyle="rgba(180,140,255,0.8)",t.beginPath(),t.arc(u.x,u.y,f+6,0,Math.PI*2),t.stroke(),d<40&&this.label(t,`BLACK HOLE \xB7 ${h.name.toUpperCase()}`,u.x+12,u.y-8,9,"rgba(190,160,255,0.9)")),e.visited.has(h.id)&&(t.strokeStyle=Be+"0.45)",t.beginPath(),t.arc(u.x,u.y,f+3,0,Math.PI*2),t.stroke()),this.mouse){let m=Math.hypot(this.mouse.x-u.x,this.mouse.y-u.y);m<o&&(o=m,a={s:h,p:u})}}this.hover=a;let l=e.trailKnown();for(let h of l){let u=this.projectLy(h.star.pos);u&&(t.strokeStyle=h.found?"rgba(160,210,190,0.5)":"rgba(160,210,190,0.95)",t.lineWidth=1.2,t.beginPath(),t.moveTo(u.x,u.y-9),t.lineTo(u.x+9,u.y),t.lineTo(u.x,u.y+9),t.lineTo(u.x-9,u.y),t.closePath(),t.stroke(),h.found||this.label(t,`BEACON \xB7 ${h.star.name.toUpperCase()}`,u.x+13,u.y+3,10,"rgba(160,210,190,0.95)"))}let c=this.projectLy(i);if(c&&(t.strokeStyle=Be+"0.9)",t.lineWidth=1,t.beginPath(),t.moveTo(c.x-14,c.y),t.lineTo(c.x-6,c.y),t.moveTo(c.x+6,c.y),t.lineTo(c.x+14,c.y),t.moveTo(c.x,c.y-14),t.lineTo(c.x,c.y-6),t.moveTo(c.x,c.y+6),t.lineTo(c.x,c.y+14),t.stroke(),this.label(t,e.star.name.toUpperCase(),c.x+16,c.y-8,10,Be+"0.9)")),e.route&&c){t.strokeStyle="rgba(160,210,190,0.55)",t.setLineDash([2,4]),t.beginPath(),t.moveTo(c.x,c.y);for(let h of e.route.path){let u=this.projectLy(h.pos);u&&t.lineTo(u.x,u.y)}t.stroke(),t.setLineDash([]);for(let h of e.route.path){let u=this.projectLy(h.pos);u&&(t.beginPath(),t.arc(u.x,u.y,4,0,Math.PI*2),t.stroke())}}if(this.selected){let h=this.projectLy(this.selected.pos);if(h&&c){let u=xe(this.selected.pos,i)<=n;t.strokeStyle=u?"rgba(160,210,190,0.8)":"rgba(227,165,75,0.8)",t.setLineDash([5,4]),t.beginPath(),t.moveTo(c.x,c.y),t.lineTo(h.x,h.y),t.stroke(),t.setLineDash([]),t.beginPath(),t.arc(h.x,h.y,9,0,Math.PI*2),t.stroke(),this.label(t,this.selected.name.toUpperCase(),h.x+13,h.y-6,11,Be+"0.95)")}}if(a&&a.s!==this.selected){let h=a.s;this.label(t,`${h.name}  \xB7  ${h.spectral}  \xB7  ${xe(h.pos,i).toFixed(1)} ly`,a.p.x+12,a.p.y+16,10,Be+"0.75)")}this.drawInset(),this.label(t,"DRAG TO ROTATE  \xB7  SCROLL TO ZOOM  \xB7  CLICK A STAR TO PLOT A JUMP",18,this.ch-18,9,Be+"0.4)")}edgeMarker(t,e,i,n,r){let a=this.game.star.pos,o=xe(e,a),l=[(e[0]-a[0])/o,(e[1]-a[1])/o,(e[2]-a[2])/o],c=Math.min(o,this.zoom*1.4),h=this.projectLy([a[0]+l[0]*c,a[1]+l[1]*c,a[2]+l[2]*c]);if(!h)return;t.strokeStyle=n,t.lineWidth=1,t.beginPath(),t.arc(h.x,h.y,4,0,Math.PI*2),t.stroke();let u=o>1e3?`${Math.round(o).toLocaleString("en-US")} ly`:`${o.toFixed(1)} ly`;this.label(t,`${i} \xB7 ${u}`,h.x+8,h.y+3,9,n)}drawInset(){if(this.insetDrawn){this.updateInsetMarker();return}let t=this.inset,e=180;t.width=e*2,t.height=e*2;let i=t.getContext("2d"),n=i.createImageData(e*2,e*2),r=52e3;for(let a=0;a<e*2;a++)for(let o=0;o<e*2;o++){let l=(o/(e*2)*2-1)*r,c=(a/(e*2)*2-1)*r,h=Ta(l,0,c),u=Math.min(1,Math.pow(h*.55,.45)),d=(a*e*2+o)*4;n.data[d]=235*u,n.data[d+1]=220*u,n.data[d+2]=200*u,n.data[d+3]=255}i.putImageData(n,0,0),this.insetBase=i.getImageData(0,0,e*2,e*2),this.insetDrawn=!0,this.updateInsetMarker()}updateInsetMarker(){let t=this.inset,e=t.getContext("2d");e.putImageData(this.insetBase,0,0);let i=52e3,n=this.game.star.pos,r=(n[0]/i*.5+.5)*t.width,a=(n[2]/i*.5+.5)*t.height;e.strokeStyle="rgba(160,210,190,1)",e.lineWidth=2,e.beginPath(),e.arc(r,a,7,0,Math.PI*2),e.stroke()}click(){if(this.tab==="galaxy"){if(this.hover){let t=this.hover.s;if(t.id===this.game.star.id)return;this.selected=t,xe(t.pos,this.game.star.pos)<=15&&this.game.setJumpTarget(t),this.game.audio.select(),this.renderInfo()}}else this.sysHover!=null&&(this.game.setTarget(this.sysHover),this.game.audio.select(),this.renderInfo())}renderInfo(){let t=this.game;if(t.star)if(this.tab==="galaxy"){let e=this.selected,i=t.star.pos,n=`<p class="eyebrow">Current system</p><h3>${t.star.name}</h3><p class="dim">${t.star.spectral} \xB7 ${xe(i,Te).toFixed(1)} ly from Sol</p>`;if(e){let a=xe(e.pos,i),o=t.jumpCost(a),l=a<=t.jumpRange(),c=t.trailKnown().find(h=>h.star.id===e.id&&!h.found);n+=`<hr><p class="eyebrow">Jump target</p><h3>${e.name}</h3>
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
          ${e.kind==="blackhole"?'<p class="warn">A black hole. There is no star to scoop here, and time near it runs slow: every hour close to the horizon is many at home. Fall in, and nothing comes back.</p>':""}
          <p class="dim small">${l?"Close the map, then press J to begin the jump.":a>t.maxJump()?"Too far for one jump. Plot a route through stars on the way.":"Not enough fuel for this jump. Skim a star or a gas giant first."}</p>
          ${a>t.maxJump()?'<button class="link primary" id="btn-route">Plot route</button>':""}
          ${t.route&&t.route.dest.id===e.id?`<p class="good small">Route plotted: ${t.route.path.length} jumps. Press J at each star.</p>`:""}`}else n+='<hr><p class="dim">Select a star to plot a jump. Its distance in light-years is also the number of years that will pass at home.</p>';this.info.innerHTML=n;let r=this.info.querySelector("#btn-route");r&&r.addEventListener("click",()=>{t.setRoute(e)&&(this.selected=e,t.audio.select(),this.renderInfo())})}else{let e=t.sys,i=[];i.push(`<p class="eyebrow">${t.scanned?"System survey":"Unscanned system"}</p><h3>${t.star.name}</h3><p class="dim">${t.star.spectral}${t.star.scoopable?" \xB7 scoopable":""}</p><hr>`),t.scanned?(i.push('<ul class="bodylist">'),e.bodies.forEach((n,r)=>{let a=t.surveyed.has(n.id);i.push(`<li data-body="${r}" class="${t.target&&t.target.kind==="body"&&t.target.index===r?"sel":""}">
            <span class="${n.kind==="moon"?"moon":""}">${n.name}</span>
            <span class="dim">${ks[n.type]}${a?"":" \xB7 ?"}${n.life&&a?" \xB7 life":""}</span></li>`)}),e.signals.forEach((n,r)=>{i.push(`<li data-signal="${r}" class="sig ${t.target&&t.target.kind==="signal"&&t.target.index===r?"sel":""}"><span>\u25C7 ${t.signalLabel(n)}</span><span class="dim">${e.bodies[n.body].name}</span></li>`)}),i.push("</ul>")):i.push('<p class="dim">Press <kbd>Space</kbd> to pulse-scan the system and resolve its bodies.</p>'),this.info.innerHTML=i.join(""),this.info.querySelectorAll("li[data-body]").forEach(n=>n.addEventListener("click",()=>{t.setTarget({kind:"body",index:Number(n.dataset.body)}),t.audio.select(),this.renderInfo()})),this.info.querySelectorAll("li[data-signal]").forEach(n=>n.addEventListener("click",()=>{t.setTarget({kind:"signal",index:Number(n.dataset.signal)}),t.audio.select(),this.renderInfo()}))}}drawSystem(t){let e=this.game,i=e.sys,n=this.cw/2+this.sysPan.x,r=this.ch/2+this.sysPan.y,a=Math.max(...i.bodies.filter(f=>f.parent<0).map(f=>f.orbit.a),ve*.5),o=Math.min(this.cw,this.ch)*.44*this.sysZoom/Math.log(1+a/(ve*.05)),l=f=>Math.log(1+f/(ve*.05))*o,c=f=>{let v=Math.hypot(f[0],f[2]),g=l(v),m=Math.atan2(f[2],f[0]);return{x:n+Math.cos(m)*g,y:r+Math.sin(m)*g}};t.fillStyle=Va(i.star.color,1,1),t.beginPath(),t.arc(n,r,6,0,Math.PI*2),t.fill(),this.label(t,i.star.name.toUpperCase(),n+10,r-8,10,Be+"0.8)");let h=null,u=14,d=e.view.positions;e.scanned||this.label(t,"UNSCANNED  \xB7  PRESS SPACE IN FLIGHT TO PULSE-SCAN",n-150,r+40,10,Be+"0.5)");for(let f of i.bodies){if(!e.scanned)break;f.parent<0&&(t.strokeStyle=Be+"0.1)",t.beginPath(),t.arc(n,r,l(f.orbit.a),0,Math.PI*2),t.stroke())}if(e.scanned){for(let f of i.bodies){let v;if(f.parent<0)v=c(d[f.index]);else{let y=c(d[f.parent]),x=i.bodies[f.parent].children.indexOf(f.index),R=[d[f.index][0]-d[f.parent][0],d[f.index][2]-d[f.parent][2]],E=Math.atan2(R[1],R[0]),A=12+x*7;t.strokeStyle=Be+"0.07)",t.beginPath(),t.arc(y.x,y.y,A,0,Math.PI*2),t.stroke(),v={x:y.x+Math.cos(E)*A,y:y.y+Math.sin(E)*A}}let g=Math.max(1.5,Math.min(7,Math.log10(f.radius/2e5)*2.4)),m={gas:[.9,.75,.55],icegiant:[.55,.8,.9],terran:[.45,.65,.9],ice:[.85,.9,.95],lava:[1,.45,.2],desert:[.85,.55,.35],venus:[.95,.85,.6],titan:[.85,.6,.3],barren:[.65,.63,.6]}[f.type];t.fillStyle=Va(m,e.surveyed.has(f.id)?1:.6,.8),t.beginPath(),t.arc(v.x,v.y,g,0,Math.PI*2),t.fill(),f.rings&&(t.strokeStyle=Va(m,.6,.8),t.beginPath(),t.ellipse(v.x,v.y,g*2,g*.7,-.3,0,Math.PI*2),t.stroke());let _=e.target&&e.target.kind==="body"&&e.target.index===f.index;if(_&&(t.strokeStyle=Be+"0.9)",t.beginPath(),t.arc(v.x,v.y,g+5,0,Math.PI*2),t.stroke()),(f.parent<0||_||this.sysZoom>2.5)&&this.label(t,f.name,v.x+g+5,v.y+3,9,Be+(_?"0.95)":"0.6)")),this.mouse){let y=Math.hypot(this.mouse.x-v.x,this.mouse.y-v.y);y<u&&(u=y,h={kind:"body",index:f.index})}}i.signals.forEach((f,v)=>{let g=d[f.body],m=i.bodies[f.body].parent<0?c(g):c(d[i.bodies[f.body].parent]),_=m.x+10,y=m.y-10;t.strokeStyle="rgba(160,210,190,0.9)",t.beginPath(),t.moveTo(_,y-5),t.lineTo(_+5,y),t.lineTo(_,y+5),t.lineTo(_-5,y),t.closePath(),t.stroke(),this.mouse&&Math.hypot(this.mouse.x-_,this.mouse.y-y)<u&&(u=0,h={kind:"signal",index:v})})}let p=c(e.shipWorld||[0,0,0]);if(t.strokeStyle="rgba(160,210,190,1)",t.beginPath(),t.moveTo(p.x,p.y-6),t.lineTo(p.x+5,p.y+4),t.lineTo(p.x-5,p.y+4),t.closePath(),t.stroke(),this.label(t,"TERN",p.x+8,p.y+12,9,"rgba(160,210,190,0.9)"),this.sysHover=h,h&&h.kind==="body"){let f=i.bodies[h.index],v=Math.hypot(d[f.index][0]-e.shipWorld[0],d[f.index][1]-e.shipWorld[1],d[f.index][2]-e.shipWorld[2]);this.label(t,`${f.name} \xB7 ${ks[f.type]} \xB7 ${xi(v)}`,this.mouse.x+12,this.mouse.y+18,10,Be+"0.85)")}this.label(t,"DISTANCES ARE LOGARITHMIC  \xB7  DRAG TO PAN  \xB7  SCROLL TO ZOOM  \xB7  CLICK TO TARGET",18,this.ch-18,9,Be+"0.4)")}label(t,e,i,n,r,a){t.font=`500 ${r}px "IBM Plex Mono", ui-monospace, monospace`,t.fillStyle=a,t.textAlign="left","letterSpacing"in t&&(t.letterSpacing="0.08em"),t.fillText(e,i,n)}};var ad=["Outer Survey Program \xB7 Vessel TERN \xB7 Surveyor Eleven","You left Sol in 2291.","You slept while the ship crossed nine light-years. At home, almost ten years went by.","This is the first star on your list. There will be many more.","No one is coming. No one was ever meant to."],od=[{year:.05,from:"Outer Survey Operations",text:"TERN, this is Ops. Clean telemetry through the boost phase, and your sleep cycle started on schedule. Half the night shift stayed late to watch you go. Good luck, Eleven."},{year:.4,from:"Mara",text:"I keep writing these and deleting them. It's raining here. I walked past your old flat and somebody has put a red bicycle on the balcony. I hope it's cold and quiet where you are, the way you like it. I hope you sleep well."},{year:1.5,from:"Outer Survey Operations",text:"Routine traffic. Surveyor Nine reports a completed route and a frozen water world worth a second look. Surveyor Seven, Marrow, is still silent. Her last relay reached us in 2240. We are keeping her channel open."},{year:4,from:"Mara",text:"I had a daughter. Her name is June. She has your ears, which seems unfair to her. I told her you were out mapping stars, and she asked if you'd be back for her birthday. I said probably not this one."},{year:9,from:"Mara",text:"June is nine and has decided you keep a lighthouse somewhere very far away. I haven't corrected her. Dad died in the autumn. It was peaceful. He asked whether the signal had reached you yet. I said it would, eventually. So here it is, eventually."},{year:16,from:"Outer Survey Operations",text:"The funding review is over. The program continues with fewer staff. Some of us are new. We've read your file and all of your reports. We are still here."},{year:24,from:"June",text:"Hi. It's June. Mum says I'm old enough to write to you myself. I'm studying orbital mechanics, which she says is your fault. I don't know what to say to someone who might read this in fifty years. The sea is very blue today. That's what I wanted to tell you."},{year:33,from:"Outer Survey Operations",text:"Notice: Outer Survey Operations moves to automated relay at the end of this fiscal year. Your data will still be received and archived. Thank you for everything you have sent us."},{year:41,from:"June",text:"Mum died this spring. She kept your picture on the kitchen wall, the one from the launch where you're squinting. I've left it there. I hope the light where you are is kind. I hope you found something out there worth the trip."},{year:58,from:"OSP Automated Relay",text:"OUTER SURVEY RELAY \xB7 AUTOMATED \xB7 NO OPERATOR ON DUTY. TELEMETRY RECEIVED AND ARCHIVED. NEXT SCHEDULED MAINTENANCE: NONE."},{year:77,from:"June",text:"I'm older now than Mum ever got. I don't know if you're alive, or if you'll read these all at once. I read your survey reports sometimes. You write about planets as if they were people you'd met. I don't think you're lonely in the way we used to worry about. I hope that's true."},{year:105,from:"Sol Archive",text:"This is the Sol Archive, Long Memory Project. We found the Outer Survey records during a migration. Eleven surveyors, and one still transmitting: you. We don't know if this will reach you. We are listening on your frequency. Whatever you find, we would like to hear it."},{year:160,from:"Sol Archive",text:"The Archive again. Your reports from the outer beacons arrived. A class of students reads them aloud every year on the day you launched. They asked me to tell you the names they've given your planets. I'm not going to. You'll have your own."},{year:260,from:"OSP Automated Relay",text:"CARRIER ONLY. NO MESSAGE."}],Fc=["Surveyor Seven, Ilse Marrow, vessel PETREL. Year eleven of my route. If you can hear this, you came out here too, and you're probably on your own. I've started leaving these behind me. I don't really know why. Maybe so the route has a voice in it. The next one is at {next}, about {dist} light-years on. I'll leave the light on.","The first year out I talked to the ship all the time. The second year, less. Now I mostly talk to the planets. The one here has a ring you could get lost in. I watched a shadow cross it for an hour, which is not survey work, and I don't care. Next beacon: {next}, {dist} light-years.","I did the arithmetic today. Everyone I knew when I left is old now, or gone. That should feel like grief, and some days it does. Other days it feels like a door closing quietly behind me, and the room I'm standing in is enormous and full of light. On to {next}.","The relay from home stopped reaching me three systems back. I'm moving faster than the news. It's strange to outrun your own people. The silence isn't empty, though. It hums. You'll know what I mean by now. {next} is next, {dist} light-years.","I landed today and went nowhere. There's no airlock on these ships, so you sit in the cockpit and look. So I sat. The horizon was very close. The stars didn't twinkle. For six hours nothing moved except the light. It might have been the best day I've had in years. {next}, when you're ready.","There's an old probe a few systems from here, one of the early automated ones, still tumbling. Somebody built it in a lab with windows and coffee and arguments. It came all this way to be the only made thing for light-years in any direction. I know how it feels. Keep heading for {next}.","My scoop is running hot. The repairs are holding, mostly. I'm not frightened, which surprises me. I keep thinking someone will come after me. Maybe you. If you're reading this: hello. I'm glad it was you. {next} is {dist} light-years on. I'll try to make it.","Last beacon before the end, I think. At {next} there's a moon around a ringed giant, with a hill on the near side where the planet never sets. I'm going to land there. If the drive holds, I'll keep going. If it doesn't, that's not a bad place to stop. Come and see the view.","PETREL here. If you're reading this, you found me, and you came the whole long way. The drive didn't hold, and that's all right. I've had a lot of time to sit with the view, and here's what I learned, for what it's worth: it's a long quiet, but it isn't empty. You're part of what's out here now. Sit for a while. Look up. Then go on, or don't. Either is fine. \u2014 I. M."],ld=["LANTERN-4 \xB7 AUTONOMOUS SURVEY PROBE \xB7 LAUNCHED 2187. POWER CRITICAL. FINAL CATALOGUE ENTRY: THREE PLANETS, NO BIOSIGNATURES. TRANSMITTER DEGRADED. TRANSMITTING ANYWAY.","WAYFARER-11 \xB7 DEEP PROBE. ATTITUDE CONTROL LOST IN 2231. IMAGING CONTINUES. 41,207 IMAGES QUEUED FOR TRANSMISSION. NONE SENT.","HERON-2 \xB7 RECORDED GREETING, PLAYING ON LOOP: 'Hello from the people of Earth. We made this to say we were here. We hope whoever finds it is well.'","CORVID-6 \xB7 SPECTROMETER ONLINE \xB7 REPORTING TO NO ONE. ATMOSPHERE OF NEAREST BODY ANALYSED. ADDED TO CATALOGUE. CATALOGUE SIZE: 1,904 ENTRIES.","PATHWARD-9 \xB7 AUTONOMY CORE NOTE: NO COMMAND RECEIVED IN 61 YEARS. SURVEY CONTINUED AS LAST INSTRUCTED. PLEASE ADVISE.","LANTERN-12 \xB7 MICROMETEOROID DAMAGE, 2219. THREE OF FOUR SOLAR ARRAYS OFFLINE. TOO FAR FROM ITS STAR TO MAKE USEFUL POWER. STILL LISTENING.","ARIADNE-3 \xB7 DATA RELAY. BUFFER FULL SINCE 2244. OLDEST STORED PACKET: A BIRTHDAY MESSAGE ADDRESSED TO A TECHNICIAN AT TSIOLKOVSKY STATION. UNDELIVERED.","MERIDIAN-5 \xB7 CLOCK DRIFT 4.2 SECONDS. HAS COUNTED EVERY SECOND SINCE LAUNCH: 3,417,055,912. COUNTING."],cd=["Flight recorder, vessel GANNET, Surveyor Three. Landing strut failed on contact. Cockpit intact. Air for nine months, food for longer. I'll keep surveying from here. It's a good view. ... Day 214. Still a good view.","Vessel KESTREL, Surveyor Five. Reactor shutdown during descent. Last recorder entry: 'Funny. You spend twelve years alone and the last thing you want is company. I just wanted to say that to someone.'","Colony tender BRIGHTWATER, uncrewed. Cargo manifest: seed vault, 40,000 species. Destination never reached. Vault temperature nominal. Seeds viable.","Vessel TEAL, Surveyor Eight. Recorder: 'Decided to stop here. Nothing is broken. I just decided. The planet's shadow crosses the plain every eleven hours and I like to be awake for it.'","Unregistered hull, pre-survey era. No recorder. Someone scratched a tally into the cockpit frame: 1,312 marks, grouped in fives. The last group has three."],hd=["Structure is artificial. Material composition: unknown. Surface erosion suggests an age of four to six million years. No markings, no power, no signal. Nothing else in this system was made by anyone.","Analysis: artificial, older than the human species. Whoever placed it here left nothing else, or nothing else survived. At local noon its shadow points straight at the star. It has done that every day for six million years.","No signal. No inscriptions. Just the fact of it, standing in the dust, facing nothing. The ship cannot estimate its purpose. Neither can you."],ud=["An arc of something enormous, thirty-eight kilometres in radius. The rest of the ring is missing, or was never finished. Spectra show refined metals pitted by millions of years of dust. It is cold all the way through. There is no one home.","Megastructure fragment. Rotation stopped. Interior volume could hold a city. Thermal scan: ambient, everywhere, for a very long time."],dd=["Instruments nominal. Nothing to report but light.","No transmissions on any band.","The hull ticks as it adjusts to a new star.","Quiet on every frequency.","Long-range scan: no artificial signals.","The new sky settles into place."],Oc={barren:["Touchdown. No air, no sound, no weather. Your footprints would last a billion years, if you could make any.","Down. The regolith is fine as flour. The horizon is close."],ice:["Touchdown on ice. The surface creaks through the landing struts, then stops.","Down. Everything here is white, and very old."],desert:["Touchdown. Thin wind hisses across the hull.","Down. Dust settles slowly around the landing legs."],lava:["Touchdown. The ground is warm. The hull temperature climbs.","Down. Somewhere beneath you, the planet is still molten."],venus:["Touchdown. Crushing pressure, dim orange light. Hull stress rising.","Down. The air outside would dissolve you."],titan:["Touchdown. A slow orange haze, and the smell of nothing you will ever smell.","Down. Methane drizzle beads on the canopy."],terran:["Touchdown. Wind, and the sound of it. Somewhere, water.","Down. An atmosphere you could almost breathe."]};function fd(s,t){let e=(s.gravity/9.81).toFixed(2),i=Math.round(s.tempK),n=[];switch(s.type){case"barren":n.push(`Airless rock. Surface gravity ${e} g, ${i} K. Cratered by four billion years of impacts and nothing else.`);break;case"ice":n.push(`Ice-shelled world, ${i} K. Fracture lines suggest liquid water far below. Nothing reaches the surface but light.`);break;case"desert":n.push(`Arid world under a thin, dusty sky, ${(s.pressure*1e3).toFixed(0)} millibar. ${e} g. Old riverbeds, long dry.`);break;case"lava":n.push(`Molten surface, ${i} K. The crust reforms and breaks every few hours. Tidal heating, or simply young.`);break;case"venus":n.push(`Runaway greenhouse. ${Math.round(s.pressure)} atmospheres at the surface, ${i} K. Sulphuric cloud deck. Not a place for anyone.`);break;case"titan":n.push(`Cold world under orange haze, ${i} K. Hydrocarbon lakes, dunes of organic sand. Chemistry, waiting.`);break;case"terran":n.push(s.life?`Temperate world, ${i} K, ${s.pressure.toFixed(1)} atm. Biosignatures confirmed: photosynthetic pigments and a seasonal oxygen cycle. No animals, no cities, no radio. Just life, minding its own business.`:`Temperate world, ${i} K, ${s.pressure.toFixed(1)} atm. Liquid water. Everything life would need. No sign that it ever started.`);break;case"gas":n.push(`Gas giant, ${(s.mass/1898e24).toFixed(2)} Jupiter masses. Storm systems larger than Earth${s.rings?". A wide ring system of ice and rock":""}.`);break;case"icegiant":n.push(`Ice giant, methane-blue, ${i} K. Winds above two thousand kilometres an hour, and no one to feel them.`);break;default:n.push("Surveyed.")}return s.restingPlace&&n.push("A vessel transponder answers from the surface: PETREL."),n.join(" ")}var ft=s=>document.getElementById(s);function an(s){return String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var Wa=class{constructor(t){this.game=t,this.title=ft("title"),this.intro=ft("intro"),this.trans=ft("transmission"),this.survey=ft("survey"),this.journal=ft("journal"),this.pause=ft("pause"),this.help=ft("help"),this.death=ft("death"),this.writer=ft("writer"),this.loading=ft("loading"),this.queue=[],this.transOpen=!1,this.typing=null,ft("btn-continue").addEventListener("click",()=>t.continueGame()),ft("btn-new").addEventListener("click",()=>this.confirmNew()),ft("btn-new-confirm").addEventListener("click",()=>{ft("new-confirm").hidden=!0,t.newGame()}),ft("btn-new-cancel").addEventListener("click",()=>{ft("new-confirm").hidden=!0}),ft("btn-controls").addEventListener("click",()=>this.toggleHelp(!0)),ft("btn-settings-title").addEventListener("click",()=>this.openSettings()),ft("trans-close").addEventListener("click",()=>this.closeTransmission()),ft("survey-close").addEventListener("click",()=>{this.survey.hidden=!0}),ft("journal-close").addEventListener("click",()=>this.toggleJournal(!1)),ft("help-close").addEventListener("click",()=>this.toggleHelp(!1)),ft("btn-resume").addEventListener("click",()=>this.togglePause(!1)),ft("btn-settings").addEventListener("click",()=>this.openSettings()),ft("btn-help").addEventListener("click",()=>this.toggleHelp(!0)),ft("btn-quit").addEventListener("click",()=>{this.togglePause(!1),t.saveGame(),t.toTitle()}),ft("btn-reload").addEventListener("click",()=>{this.death.hidden=!0,t.continueGame()}),ft("btn-death-title").addEventListener("click",()=>{this.death.hidden=!0,t.toTitle()}),ft("settings-close").addEventListener("click",()=>{ft("settings").hidden=!0}),ft("btn-cheats").addEventListener("click",()=>{this.togglePause(!1),this.toggleCheats(!0)}),ft("cheats-close").addEventListener("click",()=>this.toggleCheats(!1)),ft("writer-save").addEventListener("click",()=>this.saveWriter()),ft("writer-skip").addEventListener("click",()=>{this.writer.hidden=!0}),this.journal.querySelectorAll("[data-jtab]").forEach(e=>e.addEventListener("click",()=>this.renderJournal(e.dataset.jtab))),this.bindSettings(),this.bindCheats()}get modalOpen(){return!this.journal.hidden||!this.pause.hidden||!this.help.hidden||!ft("settings").hidden||!ft("cheats").hidden||!this.writer.hidden||!this.death.hidden}showTitle(t){this.title.hidden=!1,ft("btn-continue").hidden=!t,ft("btn-new").textContent=t?"New voyage":"Begin",ft("btn-new").classList.toggle("primary",!t),ft("btn-continue").classList.toggle("primary",t)}hideTitle(){this.title.hidden=!0,ft("new-confirm").hidden=!0}confirmNew(){this.game.hasSave()?ft("new-confirm").hidden=!1:this.game.newGame()}async playIntro(t){let e=ft("intro-lines");e.innerHTML="",this.intro.hidden=!1,this.intro.classList.remove("out");let i=!1,n=()=>{i=!0};window.addEventListener("keydown",n,{once:!0}),this.intro.addEventListener("click",n,{once:!0});for(let r=0;r<t.length&&!i;r++){let a=document.createElement("p");a.textContent=t[r],r===0&&(a.className="meta"),e.appendChild(a),requestAnimationFrame(()=>a.classList.add("in")),await this.sleep(r===0?2200:3200,()=>i)}i||await this.sleep(1500,()=>i),this.intro.classList.add("out"),await this.sleep(1600,()=>!1),this.intro.hidden=!0,window.removeEventListener("keydown",n)}sleep(t,e){return new Promise(i=>{let n=performance.now(),r=()=>{e()||performance.now()-n>=t?i():setTimeout(r,50)};r()})}transmission({kicker:t,title:e,body:i,meta:n,after:r}){this.queue.push({kicker:t,title:e,body:i,meta:n,after:r}),this.transOpen||this.nextTransmission()}nextTransmission(){let t=this.queue.shift();if(!t){this.transOpen=!1,this.trans.hidden=!0;return}this.transOpen=!0,this.trans.hidden=!1,ft("trans-kicker").textContent=t.kicker,ft("trans-title").textContent=t.title,ft("trans-meta").textContent=t.meta||"";let e=ft("trans-body");e.textContent="",this.current=t;let i=t.body,n=0;clearInterval(this.typing),this.typing=setInterval(()=>{n+=2,e.textContent=i.slice(0,n),n%6===0&&this.game.audio.tone(2400+Math.random()*200,.015,.004),n>=i.length&&(clearInterval(this.typing),e.textContent=i)},22),this.game.audio.message()}closeTransmission(){clearInterval(this.typing);let t=this.current?.after;this.current=null,this.nextTransmission(),t&&t()}surveyCard(t,e,i){this.survey.hidden=!1,ft("survey-name").textContent=t.name,ft("survey-type").textContent=i.typeLabel,ft("survey-note").textContent=e;let n=[["Radius",`${Math.round(t.radius/1e3).toLocaleString("en-US")} km`],["Gravity",`${(t.gravity/9.81).toFixed(2)} g`],["Surface",`${Math.round(t.tempK)} K`],["Atmosphere",t.atmosphere&&t.solid?`${t.pressure<.1?(t.pressure*1e3).toFixed(0)+" mbar":t.pressure.toFixed(1)+" atm"}`:t.solid?"None":"Deep"],["Day",t.spin.locked?"Tidally locked":`${(Math.abs(t.spin.period)/3600).toFixed(1)} h`],["Landing",t.solid?t.landable?t.type==="venus"||t.type==="lava"?"Hazardous":"Possible":"Gravity too high":"No surface"]];ft("survey-data").innerHTML=n.map(([r,a])=>`<dt>${r}</dt><dd>${a}</dd>`).join(""),clearTimeout(this.surveyTimer),this.surveyTimer=setTimeout(()=>{this.survey.hidden=!0},16e3)}toggleJournal(t){let e=t??this.journal.hidden;this.journal.hidden=!e,e&&(this.game.input.releaseLock(),this.renderJournal(this.jtab||"log")),this.game.audio.blip()}renderJournal(t){this.jtab=t;let e=this.game;this.journal.querySelectorAll("[data-jtab]").forEach(n=>n.setAttribute("aria-selected",n.dataset.jtab===t?"true":"false"));let i=ft("journal-body");if(t==="log"){let n=e.logs.filter(r=>r.kind!=="home").slice().reverse();i.innerHTML=n.length?n.map(r=>`<article><p class="eyebrow">${an(r.where)} \xB7 ${an(r.when)}</p><h4>${an(r.title)}</h4><p class="${r.kind==="own"?"own":""}">${an(r.text)}</p></article>`).join(""):'<p class="dim">Nothing recorded yet. Scan signals to read what others left behind.</p>'}else if(t==="home"){let n=e.logs.filter(r=>r.kind==="home").slice().reverse();i.innerHTML=n.length?n.map(r=>`<article class="letter"><p class="eyebrow">${an(r.title)} \xB7 ${an(r.when)}</p><p>${an(r.text)}</p></article>`).join(""):'<p class="dim">No messages have caught up with you yet. Light from home is slow.</p>',i.innerHTML+='<p class="dim small">Messages travel at the speed of light. One sent N years after you left reaches you only when the years elapsed at home, minus your distance from Sol in light-years, add up to N.</p>'}else if(t==="survey"){let n=e.stats();i.innerHTML=`<dl class="stats">
        <dt>Systems visited</dt><dd>${n.systems}</dd>
        <dt>Bodies surveyed</dt><dd>${n.bodies}</dd>
        <dt>Worlds with life</dt><dd>${n.life}</dd>
        <dt>Signals found</dt><dd>${n.signals}</dd>
        <dt>Beacons on Marrow's route</dt><dd>${n.trail} of ${n.trailTotal}</dd>
        </dl>
        <h4>Surveyed</h4>
        <ul class="plain">${n.list.map(r=>`<li><span>${an(r.name)}</span><span class="dim">${an(r.type)}${r.life?" \xB7 life":""}</span></li>`).join("")||'<li class="dim">None yet.</li>'}</ul>`}else{let n=e.stats();i.innerHTML=`<dl class="stats">
        <dt>Distance from Sol</dt><dd>${n.fromSol.toFixed(1)} ly</dd>
        <dt>Distance travelled</dt><dd>${n.travelled.toFixed(1)} ly</dd>
        <dt>Jumps</dt><dd>${n.jumps}</dd>
        <dt>Time aboard</dt><dd>${n.shipTime}</dd>
        <dt>Year at home</dt><dd>${n.homeYear}</dd>
        <dt>Galactic radius</dt><dd>${Math.round(n.galR).toLocaleString("en-US")} ly from the core</dd>
        </dl>
        <p class="dim small">The galaxy is about 100,000 light-years across. You will not see most of it. Nobody will.</p>`}}togglePause(t){let e=t??this.pause.hidden;this.pause.hidden=!e,e&&this.game.input.releaseLock()}toggleHelp(t){let e=t??this.help.hidden;this.help.hidden=!e,e&&this.game.input.releaseLock()}openSettings(){ft("settings").hidden=!1,this.game.input.releaseLock()}bindSettings(){let t=this.game,e=t.settings,i=ft("set-quality"),n=ft("set-invert"),r=ft("set-sens"),a=ft("set-volume"),o=ft("set-music"),l=ft("set-fov");i.value=e.quality,n.checked=e.invertY,r.value=e.sensitivity,a.value=e.volume,o.value=e.music,l.value=e.fov,i.addEventListener("change",()=>{e.qualityLocked=!0});let c=()=>{e.quality=i.value,e.invertY=n.checked,e.sensitivity=Number(r.value),e.volume=Number(a.value),e.music=Number(o.value),e.fov=Number(l.value),t.applySettings()};[i,n,r,a,o,l].forEach(h=>h.addEventListener("input",c)),i.addEventListener("change",c)}toggleCheats(t){let e=ft("cheats"),i=t??e.hidden;e.hidden=!i,i&&(this.syncCheats(),this.game.input.releaseLock())}get cheatsOpen(){return!ft("cheats").hidden}syncCheats(){let t=this.game.cheats;ft("cheat-boost").value=String(t.boost),ft("cheat-jump").checked=t.jumpAnywhere,ft("cheat-fastjump").checked=t.fastJump,ft("cheat-fuel").checked=t.infiniteFuel,ft("cheat-invincible").checked=t.invincible}bindCheats(){let t=this.game,e=["cheat-boost","cheat-jump","cheat-fastjump","cheat-fuel","cheat-invincible"].map(ft),i=()=>{let n=t.cheats;n.boost=Number(ft("cheat-boost").value)||1,n.jumpAnywhere=ft("cheat-jump").checked,n.fastJump=ft("cheat-fastjump").checked,n.infiniteFuel=ft("cheat-fuel").checked,n.invincible=ft("cheat-invincible").checked,t.applySettings()};e.forEach(n=>n.addEventListener("change",i)),this.syncCheats()}showDeath(t,e){this.death.hidden=!1,this.game.input.releaseLock(),ft("death-cause").textContent=t,ft("death-stats").textContent=`${e.systems} systems \xB7 ${e.bodies} worlds surveyed \xB7 ${e.fromSol.toFixed(1)} ly from Sol \xB7 year ${e.homeYear} at home`}openWriter(){this.writer.hidden=!1,this.game.input.releaseLock(),ft("writer-text").value="",setTimeout(()=>ft("writer-text").focus(),50)}saveWriter(){let t=ft("writer-text").value.trim();this.writer.hidden=!0,t&&this.game.leaveBeacon(t)}loadingText(t){if(!t){this.loading.hidden=!0;return}this.loading.hidden=!1,this.loading.textContent=t}};function Bi(s){let t=2291+s;return`${Math.floor(t)}.${String(Math.floor(t%1*10)).padStart(1,"0")}`}var qa="the-long-quiet/v1",pd="the-long-quiet/settings",pr=15,Xa=[1,10,100,1e3,1e4,1e5],zx={boost:1,jumpAnywhere:!1,fastJump:!1,infiniteFuel:!1,invincible:!1},md=30,$a=[1,10,100,1e3,1e4],gd={rho:0,P:0,T:0,light:1,depth:0,gas:!1},Vx=4e4;function vd(s){let t=.2126*s[0]+.7152*s[1]+.0722*s[2];return[s[0]/t,s[1]/t,s[2]/t]}var Ya=class{constructor(){qc(this,"heightAt",(t,e)=>this.view.planets[t].heightAt(e));this.canvas=document.getElementById("scene"),this.settings=this.loadSettings(),this.engine=new Ra(this.canvas,{quality:this.settings.quality}),this.input=new Ba(this.canvas),this.audio=new Ha,this.hud=new za(document.getElementById("hud")),this.universe=new Ua,this.maps=new Ga(this),this.panels=new Wa(this),this.jump=new ka(this),this.ship=new fr,this.shipModel=new Bs,this.engine.scene.add(this.shipModel.group),this.air=gd,this.airParticles=new Fa,this.engine.scene.add(this.airParticles.points),this.fireball=new Oa(this.engine.scene),this.lightning=0,this.timeDilation=1,this.setupLights(),this.state="boot",this.time=0,this.camMode="chase",this.camQ=[0,0,0,1],this.freeYaw=0,this.freePitch=.12,this.camZoom=1,this.warpIndex=0,this.scan=0,this.saveTimer=0,this.pmrem=new Rs(this.engine.renderer),this.exposure=2,this.applySettings(),this.world={sys:null,positions:[],orient:[],velocity:t=>(this._velCache[t]||(this._velCache[t]=Ou(this.sys,t,this.time)),this._velCache[t])},this._velCache=[],window.__game=this}loadSettings(){let t={quality:"high",invertY:!1,sensitivity:1,volume:.8,music:.7,fov:62},e={};try{e=JSON.parse(localStorage.getItem(pd)||"{}")||{}}catch{}let i={...t,...e};return i.cheats={...zx,...e.cheats||{}},Xa.includes(i.cheats.boost)||(i.cheats.boost=1),i}get cheats(){return this.settings.cheats}applySettings(){let t=this.settings;this.engine.quality!==t.quality&&(this.engine.setQuality(t.quality),this.engine.sky.starUniforms.uPx.value=this.engine.pixelRatio),this.input.invertY=t.invertY,this.input.sensitivity=t.sensitivity,this.audio.setVolumes({master:t.volume,music:t.music}),this.baseFov=t.fov;try{localStorage.setItem(pd,JSON.stringify(t))}catch{}}setupLights(){this.sun=new ar(16777215,1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let t=this.sun.shadow.camera;t.left=-24,t.right=24,t.top=24,t.bottom=-24,t.near=1,t.far=400,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,this.engine.scene.add(this.sun,this.sun.target),this.fillLight=new ar(16777215,0),this.engine.scene.add(this.fillLight,this.fillLight.target),this.ambient=new ga(16777215,.002),this.engine.scene.add(this.ambient)}hasSave(){try{return!!localStorage.getItem(qa)}catch{return!1}}async boot(){this.resetVoyage();let t=this.readSave();t?this.applySave(t):this.placeAtStart(),this.panels.loadingText("Charting the neighbourhood\u2026"),await new Promise(e=>setTimeout(e,30)),this.enterSystem(this.star,!0),this.panels.loadingText(null),this.state="title",this.panels.showTitle(!!t),this.titleT=0,this.last=performance.now(),requestAnimationFrame(e=>this.frame(e))}resetVoyage(){this.star=this.universe.start,this.homeYears=9.8,this.shipYears=.06,this.time=12e5,this.visited=new Set,this.scannedSystems=new Set,this.surveyed=new Set,this.readSignals=new Set,this.logs=[],this.received=new Set,this.trailFound=-1,this.jumpTarget=null,this.route=null,this.target=null,this.travelled=0,this.jumps=0,this.lifeFound=new Set,this.ownBeacons=[],this.ship=new fr,this.ship.fuel=.86,this.ship.gearDown=!1,this.shipModel.gear=0}placeAtStart(){let t=this.universe.system(this.star),e=t.signals.find(n=>n.trail===0),i=t.bodies[e.body];this.time=12e5,this.pendingPlacement={kind:"near",body:i.index,dist:i.radius*7.5}}newGame(){try{localStorage.removeItem(qa)}catch{}this.resetVoyage(),this.placeAtStart(),this.enterSystem(this.star,!0),this.panels.hideTitle(),this.audio.start(),this.state="intro",this.engine.post.fade=1,this.panels.playIntro(ad).then(()=>{this.state="play",this.fadeIn=1,this.hud.note(`${this.star.name}. ${this.sys.bodies.length} bodies, unresolved.`),setTimeout(()=>this.hud.note("Press Space to pulse-scan the system.","good",10),2500),this.objective="scan",this.noteBlackHole(16e3),this.saveGame()})}continueGame(){let t=this.readSave();this.panels.hideTitle(),this.audio.start(),t&&this.state==="dead"&&(this.resetVoyage(),this.applySave(t),this.enterSystem(this.star,!0)),this.state="play",this.fadeIn=1,this.engine.post.fade=1,this.hud.note(`${this.star.name} \xB7 ${Bi(this.homeYears)} at home`),this.noteBlackHole(6e3)}noteBlackHole(t){let e=this.universe.erebus;!e||this.bhNoted||setTimeout(()=>{if(this.state!=="play")return;this.bhNoted=!0;let i=xe(e.pos,this.star.pos);this.hud.note(`Gravimetry: something massive and dark, ${i.toFixed(1)} ly away. Marked on the galaxy map: Erebus.`,"good",12)},t)}toTitle(){this.state="title",this.titleT=0,this.maps.toggle(!1),this.panels.toggleJournal(!1),this.input.releaseLock(),this.panels.showTitle(this.hasSave())}enterSystem(t,e=!1){let i=this.universe.galaxy;this.view&&this.view.dispose(),this.signalView&&this.signalView.dispose(),this.star=t,this.sys=this.universe.system(t),this.world.sys=this.sys,this.view=new La(this.engine,this.sys),this.world.positions=this.view.positions,this.world.orient=this.view.orient,this.view.computeKinematics(this.time),this.signalView=new Da(this.engine.scene,this.sys,this.view.planets),this.target=null,this.autopilot=!1,this.warpIndex=0,this.scan=0,this.engine.sky.regenerate(t.pos,e),this.envDirty=!0;let n=i.starsInRadius(t.pos,100),r=[];for(let{star:o,d:l}of n){if(o.id===t.id||o.kind==="blackhole"||l<.01)continue;let c=Math.max(o.lum,1e-6)/(l*l);c<25e-7&&o.id!=="SOL"||r.push({dir:[(o.pos[0]-t.pos[0])/l,(o.pos[1]-t.pos[1])/l,(o.pos[2]-t.pos[2])/l],color:vd(o.color).map(h=>h*.6),flux:c})}this.engine.sky.setStars(r);let a=n.filter(o=>o.star.kind==="blackhole").sort((o,l)=>o.d-l.d)[0];this.nearBH=a?a.star:null,this.audio.setMood(t.seed,t.cls),this.visited.add(t.id),this.pendingPlacement&&(this.applyPlacement(this.pendingPlacement),this.pendingPlacement=null)}applyPlacement(t){let e=this.ship;if(this.view.computeKinematics(this.time),t.kind==="near"){let i=this.sys.bodies[t.body],n=this.view.positions[t.body],r=K.nrm(K.scl(n,-1)),a=K.nrm(K.cross(r,[0,1,0])),o=K.add(K.add(K.scl(r,.55),K.scl(a,.75)),[0,.22,0]),l=K.scl(K.nrm(o),t.dist);e.frame=t.body,e.rot=!1,e.p=l,e.v=[0,0,0],e.q=this.qLookDir(K.nrm(K.scl(l,-1))),e.mode="flight"}else t.kind==="saved"&&(e.frame=t.frame,e.rot=t.rot,e.p=t.p,e.v=t.v,e.q=t.q,e.mode=t.mode==="landed"?"landed":(t.mode==="cruise","flight"),e.mode==="landed"&&(e.landQ=e.q.slice(),e.gearDown=!0,this.shipModel.gear=1));this.camQ=e.q.slice()}arriveSystem(t,e,i){let n=Math.max(t.lum,.001),r=t.radius*6957e5,a=ue(Math.sqrt(n)*.32*ve,r*45,3*ve);t.kind==="blackhole"&&(a=Math.max(.4*ve,Math.sqrt(6674e-14*t.mass*1989e27/9))),t.kind==="neutron"&&(a=.05*ve),this.arrivalDistance=a,this.enterSystem(t),this.ship.frame=-1,this.ship.rot=!1,this.ship.p=K.scl(e,-(a+i)),this.ship.q=this.qLookDir(e),this.camQ=this.ship.q.slice()}onArrived(t,e){if(this.jumps++,this.travelled+=e,this.jumpTarget=null,this.maps.selected=null,this.route){let o=this.route.path.findIndex(c=>c.id===this.star.id),l=o>=0?this.route.path.slice(o+1):[];l.length?(this.route.path=l,this.jumpTarget=l[0],this.maps.selected=l[0],setTimeout(()=>this.hud.note(`Next on route: ${l[0].name} \xB7 ${l.length} to go`,"info",7),3500)):this.route=null}let i=this.sys,n=this.star;this.audio.arrive();let r=new ge(Ui(n.seed,this.jumps));this.hud.note(`Arrived: ${n.name}, ${n.spectral}.`),this.hud.note(`${i.bodies.length} ${i.bodies.length===1?"body":"bodies"} detected. ${r.pick(dd)}`);let a=this.universe.trailIndex(n.id);a>0&&a===this.trailFound+1&&setTimeout(()=>this.hud.note("A faint beacon is broadcasting in this system.","good",9),2500),n.id==="SOL"&&setTimeout(()=>this.panels.transmission({kicker:"Sol",title:"Home",body:`Home, or what the word still means. ${Math.round(this.homeYears)} years have passed here since you left. The old Outer Survey relay at Earth does not answer. Nobody uses these frequencies anymore, or nobody is listening on them. The Sun looks exactly the same.`}),3e3),n.scoopable||setTimeout(()=>this.hud.note("This star cannot be scooped. Gas giants can be skimmed for fuel.","warn",9),4e3),this.checkMessages(!0),this.saveGame()}qLookDir(t){let e=new ie,i=new C(t[0],t[1],t[2]).normalize(),n=new C(0,1,0);Math.abs(i.dot(n))>.98&&(n=new C(1,0,0)),e.lookAt(new C(0,0,0),i,n);let r=new Ie().setFromRotationMatrix(e);return[r.x,r.y,r.z,r.w]}dirToFrame(t){let e=this.ship.frameState(this.world);return Wt(je(e.q),t)}maxJump(){return this.cheats.jumpAnywhere?1e6:pr}jumpRange(){return this.cheats.jumpAnywhere?1e6:Math.min(pr,this.ship.fuel*md)}jumpCost(t){return t/md}setJumpTarget(t,e=!1){this.jumpTarget=t,e||(this.route=null),t&&this.hud.note(`Jump target: ${t.name} \xB7 ${xe(t.pos,this.star.pos).toFixed(1)} ly`,"info",5)}planRoute(t){let e=this.universe.galaxy,i=this.star,n=pr*.98,r=c=>c.id,a=new Map([[r(i),{s:i,g:0,f:xe(i.pos,t.pos),prev:null}]]),o=new Map,l=0;for(;a.size&&l++<4e3;){let c=null;for(let h of a.values())(!c||h.f<c.f)&&(c=h);if(a.delete(r(c.s)),o.set(r(c.s),c),c.s.id===t.id){let h=[];for(let u=c;u&&u.s.id!==i.id;u=u.prev)h.unshift(u.s);return h}for(let{star:h,d:u}of e.starsInRadius(c.s.pos,n)){if(h.id===c.s.id||o.has(r(h))||!h.scoopable&&h.id!==t.id)continue;let d=c.g+u+3,p=a.get(r(h));(!p||d<p.g)&&a.set(r(h),{s:h,g:d,f:d+xe(h.pos,t.pos),prev:c})}}return null}setRoute(t){let e=this.planRoute(t);return!e||!e.length?(this.hud.note(`No route to ${t.name} found.`,"warn",5),!1):(this.route={dest:t,path:e},this.setJumpTarget(e[0],!0),this.hud.note(`Route to ${t.name}: ${e.length} ${e.length===1?"jump":"jumps"}.`,"good",6),!0)}setTarget(t){this.target=t,this.scan=0,this.maps.renderInfo?.()}signalLabel(t){let e=this.readSignals.has(this.signalKey(t));return t.type==="beacon"?e?"Marrow beacon":"Faint beacon":t.type==="petrel"?e?"PETREL":"Vessel transponder":e?Dc[t.type].label:"Unidentified signal"}signalKey(t){return`${this.star.id}/${this.sys.signals.indexOf(t)}`}trailKnown(){let t=[],e=this.universe.trail;for(let i=0;i<=Math.min(this.trailFound+1,e.length-1);i++)i!==0&&t.push({star:e[i],found:i<=this.trailFound});return t}nearestSurface(t){let e=Math.hypot(t[0],t[1],t[2])-this.sys.star.radius*1.05,i=-1;for(let n of this.sys.bodies){let r=this.view.positions[n.index],a=n.solid?n.radius+n.terrain.amp:n.radius*1.01,o=Math.hypot(t[0]-r[0],t[1]-r[1],t[2]-r[2])-a;o<e&&(e=o,i=n.index)}if(this.target&&this.target.kind==="signal"){let n=this.signalView.items[this.target.index];if(n){let r=Math.hypot(t[0]-n.worldPos[0],t[1]-n.worldPos[1],t[2]-n.worldPos[2])-n.model.userData.radius-900;r<e&&(e=r,i=-2)}}return this.nearestWho=i,Math.max(e,1)}massLock(t){let e=this.sys.star.radius;if(Math.hypot(t[0],t[1],t[2])<e*12)return this.sys.star.name;for(let i of this.sys.bodies){let n=this.view.positions[i.index];if(Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2])<Math.max(i.radius*8,2e7))return i.name}return null}frame(t){requestAnimationFrame(i=>this.frame(i));let e=(t-this.last)/1e3;this.last=t,e>0||(e=.016),e=Math.min(e,.1);try{this.step(e)}catch(i){console.error(i)}this.input.endFrame()}watchPerformance(t){if(this.state!=="play"||this.perfDone||this.settings.qualityLocked||window.__TLQ_TEST)return;if(this.perf=this.perf||{t:0,frames:0,skip:2},this.perf.skip>0){this.perf.skip-=t;return}if(this.perf.t+=t,this.perf.frames++,this.perf.t<6)return;let e=this.perf.frames/this.perf.t;this.perfDone=!0;let i=["low","medium","high","ultra"],n=i.indexOf(this.settings.quality);if(e<38&&n>0){let r=i[Math.max(0,n-(e<22?2:1))];this.settings.quality=r,this.applySettings(),document.getElementById("set-quality").value=r,this.hud.note(`Render quality lowered to ${r} to keep things smooth. Change it in Settings.`,"info",8),this.perfDone=!1,this.perf={t:0,frames:0,skip:2},r==="low"&&(this.perfDone=!0)}}step(t){this.watchPerformance(t),this._velCache=[];let e=this.input;e.enabled=this.state==="play"&&!this.maps.open&&!this.panels.modalOpen,this.state==="play"&&this.handleKeys(t);let i=this.state==="play"?$a[this.warpIndex]:1,n=t*i;this.state==="play"||this.state==="intro"?(this.time+=n,this.jump.active||(this.homeYears+=n*Math.min(this.timeDilation||1,40)/qn,this.shipYears+=n/qn)):this.state!=="horizon"&&(this.time+=t*20),this.view.computeKinematics(this.time),this.state==="play"?this.updateShip(t,n):this.state==="horizon"?this.updateHorizon(t):this.idleShip(t),this.updateCamera(t),this.render(t)}handleKeys(t){let e=this.input,i=this.ship,n=a=>a.some(o=>this.input.pressed.has(o));if(n(["Escape"])&&(this.maps.open?this.maps.toggle(!1):this.panels.journal.hidden?this.panels.help.hidden?document.getElementById("settings").hidden?this.panels.cheatsOpen?this.panels.toggleCheats(!1):this.panels.transOpen?this.panels.closeTransmission():this.panels.togglePause():document.getElementById("settings").hidden=!0:this.panels.toggleHelp(!1):this.panels.toggleJournal(!1)),n(["KeyM"])&&this.maps.toggle(void 0,"galaxy"),n(["KeyN"])&&this.maps.toggle(!(this.maps.open&&this.maps.tab==="system"),"system"),n(["KeyK"])&&this.panels.toggleJournal(),n(["KeyH","F1"])&&this.panels.toggleHelp(),n(["Backquote","F2"])&&this.panels.toggleCheats(),n(["Enter"])&&this.panels.transOpen&&this.panels.closeTransmission(),!e.enabled)return;e.hit("KeyC")&&(this.camMode=this.camMode==="chase"?"cockpit":"chase",this.audio.blip()),e.hit("KeyG")&&(i.mode==="landed"?this.hud.note("Gear stays down while landed.","warn",3):(i.gearDown=!i.gearDown,this.audio.servo(),this.hud.note(i.gearDown?"Landing gear down":"Landing gear up","info",3))),e.hit("KeyL")&&(i.lights=!i.lights,this.audio.blip()),e.hit("KeyX")&&(i.throttle=0),e.hit("KeyT")&&this.targetAhead(),e.hit("KeyP")&&(this.autopilot=!this.autopilot&&!!this.target,this.hud.note(this.autopilot?"Autopilot: approaching target":"Autopilot off","info",4),this.audio.blip()),e.hit("Tab")&&this.toggleCruise(),e.hit("KeyJ")&&this.tryJump(),e.hit("Space")&&this.spacePressed(),e.hit("Period")&&this.changeWarp(1),e.hit("Comma")&&this.changeWarp(-1),(e.hit("Equal")||e.hit("NumpadAdd"))&&this.changeBoost(1),(e.hit("Minus")||e.hit("NumpadSubtract"))&&this.changeBoost(-1),e.wheel&&(this.camZoom=ue(this.camZoom*(e.wheel>0?1.12:.89),.45,6));let r=i.mode==="cruise"?.45:.6;e.down("KeyW")&&(i.throttle=Math.min(1,i.throttle+r*t)),e.down("KeyS")&&(i.throttle=Math.max(0,i.throttle-r*t))}changeWarp(t){let e=this.ship,i=e.mode==="landed"||e.mode==="flight"&&K.len(e.v)<1&&this.nearestSurface(this.shipWorld)>5e6;if(t>0&&!i){this.hud.note("Time compression only while landed, or stationary in open space.","warn",4),this.warpIndex=0;return}this.warpIndex=ue(this.warpIndex+t,0,$a.length-1),this.hud.note(this.warpIndex?`Time \xD7${$a[this.warpIndex]}`:"Time normal","info",2)}changeBoost(t){let e=this.cheats,i=ue(Xa.indexOf(e.boost)+t,0,Xa.length-1);e.boost=Xa[i],this.applySettings(),this.audio.blip(),this.hud.note(e.boost>1?`Speed boost \xD7${e.boost.toLocaleString("en-US")} \xB7 cheat`:"Speed boost off","info",3)}toggleCruise(){let t=this.ship;if(t.mode==="cruise"){t.mode="flight",t.v=K.scl(t.forward,Math.min(t.cruiseV,this.air.rho>1e-7?9e3:300)),t.throttle=Math.min(t.throttle,.4),this.audio.disengage(),this.hud.note("Cruise drive disengaged","info",3);return}if(t.mode==="landed"){this.hud.note("Take off first.","warn",3);return}if(t.mode==="flight"){if(t.alt<2e3){this.hud.note("Too close to the surface for cruise.","warn",3);return}t.mode="cruise",t.cruiseV=Math.max(K.len(t.v),500),t.throttle<.25&&(t.throttle=.75),t.gearDown&&(t.gearDown=!1,this.audio.servo()),this.warpIndex=0,this.audio.engage(),this.hud.note("Cruise drive engaged","info",3),this.objective==="cruise"&&(this.objective="approach")}}tryJump(){let t=this.ship;if(this.jump.active){this.jump.phase==="charge"&&this.jump.cancel("Jump cancelled");return}let e=this.jumpTarget;if(!e){this.hud.note("No jump target. Open the galaxy map (M) and pick a star.","warn",5),this.audio.deny();return}let i=xe(e.pos,this.star.pos),n=this.cheats;if(i>this.maxJump()){this.hud.note(`${e.name} is beyond the drive's ${pr} ly limit.`,"warn",5),this.audio.deny();return}if(!n.jumpAnywhere&&!n.infiniteFuel&&this.jumpCost(i)>t.fuel){this.hud.note("Not enough fuel. Skim a star or a gas giant.","warn",5),this.audio.deny();return}if(t.mode==="landed"){this.hud.note("Take off before jumping.","warn",4),this.audio.deny();return}let r=n.jumpAnywhere?null:this.massLock(this.shipWorld);if(r){this.hud.note(`Mass lock: too close to ${r}. Move further out.`,"warn",5),this.audio.deny();return}!n.jumpAnywhere&&!n.infiniteFuel&&(t.fuel-=this.jumpCost(i)),this.warpIndex=0,this.autopilot=!1,this.jump.start(e)}targetAhead(){let t=new C(0,0,-1).applyQuaternion(this.engine.camera.quaternion),e=null,i=.2,n=(a,o,l=0)=>{let c=Math.hypot(o[0],o[1],o[2]),h=Math.acos(ue((o[0]*t.x+o[1]*t.y+o[2]*t.z)/c,-1,1))-l;h<i&&(i=h,e=a)},r=this.camWorld;n({kind:"star"},[-r[0],-r[1],-r[2]]),this.sys.bodies.forEach((a,o)=>{if(!this.scanned&&a.parent>=0)return;let l=this.view.positions[o],c=[l[0]-r[0],l[1]-r[1],l[2]-r[2]];n({kind:"body",index:o},c,Math.asin(Math.min(1,a.radius/Math.hypot(...c))))}),this.scanned&&this.signalView.items.forEach((a,o)=>n({kind:"signal",index:o},a.rel||[1,0,0])),e?(this.setTarget(e),this.audio.select()):(this.setTarget(null),this.audio.blip())}get scanned(){return this.scannedSystems.has(this.star.id)}spacePressed(){if((!this.scanned||!this.targetInScanRange())&&(this.hud.pulse=0,this.audio.pulse(),!this.scanned)){this.scannedSystems.add(this.star.id);let t=this.sys.bodies.length,e=this.sys.signals.length;setTimeout(()=>{this.hud.note(`Pulse scan: ${t} ${t===1?"body":"bodies"} resolved${e?`, ${e} unidentified ${e===1?"signal":"signals"}`:""}.`,e?"good":"info",8),this.objective==="scan"&&e&&(setTimeout(()=>this.hud.note("Open the system map (N) and click the signal to target it.","good",10),1800),this.objective="target")},1400),this.saveGame()}}targetInScanRange(){let t=this.target;if(!t||t.kind==="star")return!1;let e=this.targetInfo();return e&&e.inRange}get shipWorld(){return this._shipWorld||[0,0,0]}updateShip(t,e){let i=this.ship,n=this.input,r=this.world,a=(n.buttons&2)!==0||i.mode==="landed";n.updateStick(t,a),this._shipWorld=i.worldPos(r),i.measureGround(r,this.heightAt),i.gearReady=this.shipModel.gear>.85,i.bottom=this.shipModel.bottom,this.air=i.frame>=0?qu(this.sys.bodies[i.frame],i.alt):gd,i.air=this.air,i.boost=this.cheats.boost,this.cheats.infiniteFuel&&(i.fuel=1);let o=0;if(this.jump.active)o=this.jump.update(t);else if(i.mode==="landed")i.updateLanded(e,r,this.heightAt),(n.down("KeyR")||n.down("KeyW")&&i.throttle>.05)&&(i.takeoff(),this.warpIndex=0,this.audio.thud(.15),this.hud.note("Lifting off","info",3));else{if(this.autopilot)this.runAutopilot(t);else if(this.faceTarget>0){this.faceTarget-=t;let l=this.targetInfo();l&&i.turnToward(this.dirToFrame(K.nrm(K.sub(l.worldPos,this._shipWorld))),t,.9),Math.hypot(n.stick.x,n.stick.y)>.2&&(this.faceTarget=0)}if(i.steer(t,n,a&&i.mode!=="landed"?(n.buttons&2)!==0:!1),i.mode==="cruise"){let l=this.nearestSurface(this._shipWorld),c=this.air.rho>1e-9?Xu(this.air.rho)*.8*i.boost:1/0;i.updateCruise(t,l,c);let h=i.frame>=0?this.sys.bodies[i.frame]:null,u=this.sys.star.starKind==="blackhole"?K.len(this._shipWorld)/this.sys.star.radius:1/0;l<1500||h&&h.solid&&i.alt<1500?this.dropCruise(Math.min(i.cruiseV,this.air.rho>1e-6?2e3:250),"Cruise drive disengaged: proximity"):h&&!h.solid&&this.air.P>4e4?this.dropCruise(Math.min(i.cruiseV,900),`Cruise drive disengaged: the air of ${h.name} is too dense`):u<3&&this.dropCruise(i.cruiseV,"Cruise drive failure: spacetime is too steep this close to the hole")}else if(i.mode==="flight"){let l=e>.05?Math.ceil(e/.05):1;for(let c=0;c<l;c++){i.updateFlight(e/l,n,r,this.heightAt),this.impactSpeed=K.len(i.v);let h=i.collide(r,this.heightAt);if(h&&this.handleContact(h),i.mode!=="flight")break}}}(!this.jump.active||this.jump.phase==="charge")&&i.chooseFrame(r),this._shipWorld=i.worldPos(r),i.measureGround(r,this.heightAt),i.speed=this.jump.active?this.jump.beta()*299792458:i.mode==="cruise"?i.cruiseV:K.len(i.v),i.frame>=0&&i.mode==="flight"&&(i.vertSpeed=K.dot(i.v,K.nrm(i.p))),this.environment(e,t),this.updateScan(t),this.checkMessages(!1),this.saveTimer+=t,this.saveTimer>45&&!this.jump.active&&(this.saveTimer=0,this.saveGame()),this.warpIndex&&!(i.mode==="landed"||i.mode==="flight"&&K.len(i.v)<1)&&(this.warpIndex=0),this.jumpLevel=o}dropCruise(t,e){let i=this.ship;i.mode="flight",i.v=K.scl(i.forward,t),i.throttle=Math.min(i.throttle,.3),this.autopilot=!1,this.audio.disengage(),this.hud.note(e,"warn",5)}runAutopilot(t){let e=this.ship,i=this.targetInfo();if(!i){this.autopilot=!1;return}let n=this._shipWorld,r=i.worldPos,a=this.sys.bodies.map(u=>{let d=this.view.positions[u.index],p=(u.rings?u.rings.outer:u.radius)*1.6+2e5,f=u.radius*1.2+5e4,v=K.len(K.sub(i.worldPos,d))<p;return{pos:d,clear:v?f:p,idx:u.index}});a.push({pos:[0,0,0],clear:this.sys.star.radius*4,idx:-1});for(let u=0;u<2;u++){let d=K.sub(r,n),p=K.len(d),f=K.scl(d,1/p),v=null;for(let m of a){if(i.kind==="body"&&m.idx===i.body.index||K.len(K.sub(i.worldPos,m.pos))<m.clear||i.surfaceDist<3e4)continue;let _=K.dot(K.sub(m.pos,n),f);if(_<=0||_>=p)continue;let y=K.add(n,K.scl(f,_)),x=K.len(K.sub(y,m.pos));x<m.clear&&(!v||_<v.t)&&(v={o:m,t:_,closest:y,miss:x})}if(!v)break;let g=K.sub(v.closest,v.o.pos);K.len(g)<1&&(g=K.cross(f,[0,1,0])),r=K.add(v.o.pos,K.scl(K.nrm(g),v.o.clear*1.25))}let o=K.nrm(K.sub(r,n)),l=this.dirToFrame(o),c=e.turnToward(l,t,e.mode==="cruise"?.5:.8),h=i.kind==="signal"?2500:i.kind==="star"?i.radius*8:Math.max(i.radius*.1,15e3);if(i.surfaceDist<h){e.mode==="cruise"&&this.toggleCruise(),e.throttle=0,this.autopilot=!1,this.faceTarget=6,this.hud.note(`Arrived at ${i.name}`,"good",5);return}e.mode==="flight"&&c>.995&&i.surfaceDist>2e4&&e.alt>2e3&&this.toggleCruise(),e.mode==="cruise"&&(e.throttle=c>.98?1:.15/(e.boost||1))}handleContact(t){let e=this.ship;if(t.type==="land"){e.land(this.world,t.normal),this.audio.thud(.35);let i=this.sys.bodies[e.frame],n=Oc[i.type]||Oc.barren;this.hud.note(`${i.name}. ${n[Math.floor(Math.random()*n.length)]}`,"info",9),setTimeout(()=>this.hud.note("Comma and period compress time. Watch the sky turn.","info",8),4e3),this.saveGame();return}if(t.type==="scrape"&&this.cheats.invincible){t.impact>6&&(e.v=[0,0,0],e.throttle=0,this.audio.thud(Math.min(.6,.15+t.impact/400)),this.shake=Math.min(1.5,(this.shake||0)+Math.min(1,t.impact/200)),t.impact>70&&this.hud.note(`Impact at ${tn(t.impact)} absorbed \xB7 invincible`,"warn",3));return}t.type==="scrape"&&(t.damage>.002&&(e.hull-=t.damage,this.audio.thud(Math.min(.6,.15+t.damage*4)),this.shake=Math.min(1.5,(this.shake||0)+t.damage*10),this.hud.note(t.damage>.1?"Hull impact!":"Hull scraped","warn",3),!e.gearReady&&t.impact<6&&this.hud.note("Lower the landing gear (G) to set down.","warn",4)),(t.impact>70||e.hull<=0)&&this.crash(t))}crash(t){let e=this.ship,i=this.sys.bodies[e.frame],n=Math.max(this.impactSpeed||0,t.impact||0),r=.5*Vx*n*n,a=r/4184e6,o=Math.max(3,9*Math.cbrt(Math.max(a,.001))),l=i.oceans&&e.groundH<=.5,c=a>=1?`${a.toFixed(a<10?1:0)} tonnes`:`${Math.round(a*1e3)} kilograms`,h=r>1e9?`${(r/1e9).toFixed(1)} gigajoules`:`${(r/1e6).toFixed(0)} megajoules`,u;l?u=`Hit the ocean of ${i.name} at ${tn(n)}. At that speed water is as hard as stone.`:n<70?u=`The hull gave way against the ground of ${i.name}.`:u=`Struck ${i.name} at ${tn(n)}. The impact released ${h}, about ${c} of TNT, and left a crater perhaps ${Math.round(o)} metres across.`,n>40&&this.fireball.start(this._shipWorld,Math.max(20,o*1.4)),this.shake=2,this.die(u)}environment(t,e){let i=this.ship,n=this._shipWorld,r=this.sys,a=r.star,o=Math.hypot(n[0],n[1],n[2]),l=this.view.irradianceAt(n),c=a.radius,h=a.starKind==="blackhole",u=h?0:17e-6*l,d=0,p="star";if(!h&&o<c*6&&this.star.scoopable&&i.mode!=="jump"&&(d=.22*Math.min(4,(2*c/o)**2),u+=d*.05),!h&&o<c*1.02&&!this.cheats.invincible){this.die(`Flew into ${a.name}. The hull was gone long before it reached the photosphere; what was left of it became part of the star.`);return}let f=i.frame>=0?r.bodies[i.frame]:null,v=this.air,g=0;if(this.plasma=0,this.pressureStress=0,f&&v.rho>0){g=Math.min(1,Math.sqrt(v.rho/1.2));let _=i.mode==="landed"?0:i.speed,y=$u(v.rho,_);if(this.plasma=y/.035,y>17e-6*l&&(p="entry"),u+=y,v.T>450){let R=(v.T-450)/1e3*Math.min(1,v.rho)*.05;u+=R,R>y&&(p="air")}!f.solid&&v.P>2e3&&v.P<8e4&&i.speed<3e3&&(d=Math.max(d,.03));let x=v.P/1e5;x>30&&(this.pressureStress=Math.min(1,(x-30)/200),this.harm((x/30-1)*.012*t,"pressure"))}f&&f.solid&&f.type==="venus"&&i.alt<3e4&&(u+=.03*(1-i.alt/3e4),p="air"),f&&f.solid&&f.type==="lava"&&i.alt<2e3&&(u+=.012*(1-i.alt/2e3),p="ground");let m=2*6674e-14*a.mass/(299792458*299792458);if(this.timeDilation=o>m*1.0005?1/Math.sqrt(1-m/o):40,this.tidal=0,h||a.starKind==="neutron"){if(this.tidal=2*6674e-14*a.mass*30/(o*o*o),this.tidal>40&&this.harm((this.tidal-40)/600*t,"tidal"),this.tidal>3e3&&!this.cheats.invincible){this.die(this.deathText("tidal"));return}if(h&&o<c&&this.state==="play"){this.enterHorizon();return}}i.heat+=(u-.075*i.heat)*t,i.heat=Math.max(0,i.heat),this.cheats.invincible&&(i.heat=Math.min(i.heat,.95)),this.heatCause=p,i.heat>1&&this.harm((i.heat-1)*.06*t,"heat"),d>0&&(i.fuel=Math.min(1,i.fuel+d*t*.5)),this.scooping=d>.001&&i.fuel<.999,i.mode==="landed"&&i.hull<1&&(i.hull=Math.min(1,i.hull+t/3600*.25)),this.windDensity=g}harm(t,e){let i=this.ship;t<=0||this.state!=="play"||this.cheats.invincible||(i.hull-=t,t>.002&&(this.shake=Math.min(1.2,(this.shake||0)+t*4)),i.hull<=0&&this.die(this.deathText(e)))}deathText(t){let e=this.ship,i=this.sys.star,n=e.frame>=0?this.sys.bodies[e.frame]:null,r=this.air,a=this._shipWorld,o=Math.hypot(a[0],a[1],a[2]);switch(t==="heat"&&(t=this.heatCause==="entry"?"entry":this.heatCause==="air"?"hotair":this.heatCause==="ground"?"ground":"starheat"),t){case"pressure":return`The hull gave way at ${Math.round(r.P/1e5)} bar, ${xi(r.depth)} below the cloud tops of ${n.name}. It was ${Math.round(r.T)} K outside and completely dark. The wreck will keep sinking for days, until the pressure turns it into something that is no longer quite metal.`;case"entry":return`Entry heating at ${tn(e.speed)} overwhelmed the hull ${xi(Math.max(0,e.alt))} above ${n?n.name:"the surface"}. From the ground it would have looked like a falling star.`;case"hotair":return`Outside it was ${Math.round(r.T)} K, and the radiators had nothing cooler to shed the heat into. ${n?n.name:"The planet"} cooked the TERN slowly, from the outside in.`;case"ground":return`The ground of ${n.name} was molten a few metres down. The TERN's hull reached the same temperature.`;case"tidal":return`Torn apart by tides ${xi(o-i.radius)} from ${i.name}: the pull on the nose was ${Math.round(this.tidal).toLocaleString("en-US")} m/s\xB2 stronger than on the tail. Nothing built by people could have held together.`;default:return`The light of ${i.name} did what nothing else out here could. ${xi(Math.max(0,o-i.radius))} above its surface, the hull softened and failed.`}}enterHorizon(){if(this.state!=="play")return;this.state="horizon",this.horizonT=0,this.autopilot=!1,this.input.releaseLock();let t=this.sys.star,e=Math.PI*6674e-14*t.mass/(299792458*299792458*299792458);this.horizonTau=e,this.audio.thud(.25),this.horizonFrom=this.homeYears}updateHorizon(t){this.horizonT+=t;let e=Math.min(1,this.horizonT/9);this.horizonP=e,this.shake=.4+e*1.5;let i=this.ship,n=i.frameState(this.world),r=Wt(je(n.q),K.nrm(this._shipWorld)),a=zs.qFromTo(Wt(i.q,[0,0,-1]),r),o=1.4*Math.min(1,this.horizonT/1.2);if(i.q=zs.qNormalize(zs.qSlerp(i.q,Ne(a,i.q),1-Math.exp(-t*o))),e>=1&&this.state==="horizon"){let l=this.sys.star;this.state="play",this.die(`You crossed the event horizon of ${l.name}. From inside, every direction leads to the same place, and the singularity came ${this.horizonTau<1?this.horizonTau.toFixed(2):this.horizonTau.toFixed(1)} seconds later by your clock. Outside, it will never happen. To anyone watching, the TERN hangs at the edge forever, reddening and dimming, until there is nothing left to see.`)}}die(t){this.state!=="dead"&&(this.state="dead",this.ship.mode="dead",this.ship.hull=0,this.jump.phase="idle",Ns(this.engine.sky.uniforms,0),this.audio.thud(.7),this.engine.post.flash=.5,setTimeout(()=>this.panels.showDeath(t,this.stats()),2200))}targetInfo(){let t=this.target;if(!t)return null;let e=this._shipWorld||[0,0,0];if(t.kind==="star"){let r=Math.hypot(e[0],e[1],e[2]);return{kind:"star",name:this.sys.star.name,worldPos:[0,0,0],radius:this.sys.star.radius,dist:r,surfaceDist:r-this.sys.star.radius,inRange:!1}}if(t.kind==="body"){let r=this.sys.bodies[t.index],a=this.view.positions[t.index],o=Math.hypot(e[0]-a[0],e[1]-a[1],e[2]-a[2]);return{kind:"body",name:r.name,body:r,worldPos:a,radius:r.radius,dist:o,surfaceDist:o-r.radius,inRange:o<r.radius*30+5e6}}let i=this.signalView.items[t.index];if(!i)return null;let n=Math.hypot(e[0]-i.worldPos[0],e[1]-i.worldPos[1],e[2]-i.worldPos[2]);return{kind:"signal",name:this.signalLabel(i.sig),sig:i.sig,worldPos:i.worldPos,radius:i.model.userData.radius,dist:n,surfaceDist:n-i.model.userData.radius,inRange:n<Dc[i.sig.type].range}}updateScan(t){let e=this.targetInfo(),i=this.input.down("Space");if(!e||!i||!e.inRange||e.kind==="star"){this.scan=Math.max(0,this.scan-t*2);return}if((e.kind==="body"?this.surveyed.has(e.body.id):this.readSignals.has(this.signalKey(e.sig)))&&this.scan===0)return;let r=K.sub(e.worldPos,this.camWorld),a=new C(0,0,-1).applyQuaternion(this.engine.camera.quaternion),o=(r[0]*a.x+r[1]*a.y+r[2]*a.z)/K.len(r),l=K.nrm(K.sub(e.worldPos,this._shipWorld)),c=Wt(this.ship.worldQ(this.world),[0,0,-1]);if(o<Math.cos(.75)&&K.dot(l,c)<Math.cos(.75)){this.centerMsg="Turn toward the target to scan";return}this.scan+=t/(e.kind==="body"?2.6:2),this.scan>=1&&(this.scan=0,e.kind==="body"?this.completeSurvey(e.body):this.readSignal(e.sig))}completeSurvey(t){if(this.surveyed.has(t.id))return;this.surveyed.add(t.id),this.audio.surveyed();let e=fd(t,this.sys.star);this.panels.surveyCard(t,e,{typeLabel:ks[t.type]}),t.life&&(this.lifeFound.add(t.id),this.addLog({kind:"survey",title:`Life on ${t.name}`,text:e}),this.hud.note("Biosignatures confirmed.","good",8)),this.saveGame()}readSignal(t){let e=this.signalKey(t);if(this.readSignals.has(e))return;this.readSignals.add(e),this.audio.surveyed();let i=new ge(t.seed),n=new Set(this.logs.map(u=>u.text)),r=u=>{let d=i.int(0,u.length-1);for(let p=0;p<u.length;p++){let f=u[(d+p)%u.length];if(!n.has(f))return f}return u[d]},a,o,l,c=this.sys.bodies[t.body];if(t.type==="beacon"||t.type==="petrel"){let u=t.trail,d=this.universe.trail[u+1];if(l=Fc[Math.min(u,Fc.length-1)],d){let p=xe(d.pos,this.star.pos);l=l.replace("{next}",d.name).replace("{dist}",Math.round(p))}o=u===En?"Vessel PETREL \xB7 Surveyor Seven":`Survey beacon \xB7 Surveyor Seven \xB7 ${u+1} of ${En+1}`,a=u===En?"Ilse Marrow":`Beacon at ${this.star.name}`,this.trailFound=Math.max(this.trailFound,u),d&&setTimeout(()=>{this.hud.note(`Beacon coordinates logged: ${d.name}. Marked on the galaxy map.`,"good",10);let p=xe(d.pos,this.star.pos);!this.jumpTarget&&p<=pr?this.setJumpTarget(d):!this.jumpTarget&&this.setRoute(d)&&setTimeout(()=>this.hud.note(`${d.name} is ${Math.round(p)} ly away, beyond one jump. A route has been plotted.`,"info",9),1500)},600)}else t.type==="probe"?(o="Derelict probe",a=`In orbit of ${c.name}`,l=r(ld)):t.type==="wreck"?(o="Wreckage",a=`On ${c.name}`,l=r(cd)):t.type==="monolith"?(o="Unidentified structure",a=`On ${c.name}`,l=r(hd)):(o="Orbital structure",a=`Around ${c.name}`,l=r(ud));this.addLog({kind:t.type,title:`${o}: ${a}`,text:l});let h=t.type==="petrel";this.panels.transmission({kicker:o,title:a,body:l,meta:`${this.star.name} \xB7 ${Bi(this.homeYears)}`,after:h?()=>setTimeout(()=>this.panels.openWriter(),600):void 0}),(this.objective==="target"||this.objective==="approach")&&(this.objective="done"),this.saveGame()}leaveBeacon(t){this.ownBeacons.push({star:this.star.name,text:t,year:Bi(this.homeYears)}),this.addLog({kind:"own",title:`Your beacon at ${this.star.name}`,text:t}),this.hud.note("Your beacon is transmitting. Someone, someday.","good",10),setTimeout(()=>this.hud.note("Marrow's route ends here. Yours doesn't have to.","info",10),4e3),this.saveGame()}addLog(t){this.logs.push({...t,where:this.star.name,when:Bi(this.homeYears)})}checkMessages(t){if(this.msgTimer=(this.msgTimer||0)-1,!t&&this.msgTimer>0)return;this.msgTimer=120;let e=xe(this.star.pos,Te),i=this.homeYears-e;od.forEach((n,r)=>{if(this.received.has(r)||n.year>i)return;this.received.add(r);let a=this.homeYears-n.year;this.logs.push({kind:"home",title:n.from,text:n.text,where:this.star.name,when:`sent ${Bi(n.year)}, received ${Bi(this.homeYears)}`}),setTimeout(()=>this.panels.transmission({kicker:"Transmission from Sol",title:n.from,body:n.text,meta:`Sent ${Bi(n.year)} \xB7 in transit ${a.toFixed(1)} years`}),1500+r*50)})}stats(){let t=[];for(let i of this.surveyed){let[n,r]=i.split("/"),a=this.universe.galaxy.starById(n);if(!a)continue;let l=this.universe.system(a).bodies[Number(r)];l&&t.push({name:l.name,type:ks[l.type],life:l.life})}let e=this.star.pos;return{systems:this.visited.size,bodies:this.surveyed.size,life:this.lifeFound.size,signals:this.readSignals.size,trail:this.trailFound+1,trailTotal:En+1,list:t,fromSol:xe(e,Te),travelled:this.travelled,jumps:this.jumps,shipTime:`${Math.floor(this.shipYears)} yr ${Math.floor(this.shipYears%1*365)} d`,homeYear:Bi(this.homeYears),galR:Math.hypot(e[0],e[2])}}idleShip(t){let e=this.ship;this.titleT=(this.titleT||0)+t,this._shipWorld=e.worldPos(this.world),e.measureGround(this.world,this.heightAt),e.mode==="landed"&&e.updateLanded(t,this.world,this.heightAt)}updateCamera(t){let e=this.ship,i=this.world,n=e.frameState(i),r=this.input;r.buttons&2||e.mode==="landed"&&r.locked||this.state==="title"?(this.freeYaw-=r.mouseDelta.x*.004,this.freePitch=ue(this.freePitch+r.mouseDelta.y*.004,-1.3,1.3)):e.mode!=="landed"&&(this.freeYaw*=Math.exp(-t*1.5),this.freePitch+=(.1-this.freePitch)*(1-Math.exp(-t*1.5))),this.state==="title"&&(this.freeYaw+=t*.02);let a=Ne([0,Math.sin(this.freeYaw/2),0,Math.cos(this.freeYaw/2)],[Math.sin(-this.freePitch/2),0,0,Math.cos(-this.freePitch/2)]),o,l,c=this.state==="horizon"?!1:this.camMode==="chase"||this.state!=="play";if(c){let f=e.mode==="cruise"?7:5;this.camQ=zs.qSlerp(this.camQ,e.q,1-Math.exp(-t*f));let v=Ne(this.camQ,a),g=36*this.camZoom*(this.state==="title"?1.6:1),m=Wt(v,[0,4+g*.12,g]);if(o=K.add(e.p,m),l=Ne(v,[Math.sin(-.05),0,0,Math.cos(-.05)]),e.frame>=0&&i.sys.bodies[e.frame].solid){let _=i.sys.bodies[e.frame],y=K.len(o);if(y<_.radius*1.2){let x=e.rot?K.scl(o,1/y):Wt(je(i.orient[e.frame]),K.scl(o,1/y)),R=_.radius+this.heightAt(e.frame,x)+2.5;y<R&&(o=K.scl(o,R/y))}}}else o=K.add(e.p,Wt(e.q,[0,.95,-12.2])),l=Ne(e.q,a);let h=(this.shake||0)+(this.jumpLevel||0)*.25+Math.min(.4,(this.windDensity||0)*Math.min(1,e.speed/400));if(this.shake=Math.max(0,(this.shake||0)-t*1.5),h>.001){let f=performance.now()/1e3,v=h*.004;l=Ne(l,[Math.sin(f*37)*v,Math.sin(f*29+1)*v,Math.sin(f*23+2)*v*.5,1]),l=zs.qNormalize(l)}let u=Ne(n.q,l);this.camWorld=K.add(n.pos,Wt(n.q,o));let d=this.engine.camera;d.quaternion.set(u[0],u[1],u[2],u[3]),d.position.set(0,0,0);let p=this.baseFov+(e.mode==="cruise"?Math.min(8,Math.log10(Math.max(e.cruiseV,1e3)/1e3)*1.6):0);d.fov+=(p-d.fov)*(1-Math.exp(-t*2)),d.near=c?.5:.08,d.updateProjectionMatrix(),d.updateMatrixWorld()}render(t){let e=this.engine,i=this.ship,n=this.world,r=this.camWorld,a=e.updateFrustum(),o=this._shipWorld||i.worldPos(n),l=i.worldQ(n),c=K.add(o,Wt(l,[0,-2.15,-11.6])),h=Wt(l,K.nrm([0,-.45,-1])),u={time:this.time,camWorld:r,pixelAngle:e.pixelAngle,projScale:e.projScale,pxRatio:e.pixelRatio,frustum:a,spot:{pos:K.sub(c,r),dir:h,on:i.lights,intensity:3e3/this.exposure,cos:Math.cos(.42)},air:this.air,exposure:this.exposure,lightning:this.lightning,lightningDir:this.lightningDir,inside:this.state==="horizon"?.02+.98*Math.pow(this.horizonP||0,1.6):0,camFwd:new C(0,0,-1).applyQuaternion(e.camera.quaternion)};u.extraGlints=this.signalView.update(u,this.time,r,this.exposure),this.view.update(u);let d=this.shipModel;d.group.position.set(o[0]-r[0],o[1]-r[1],o[2]-r[2]),d.group.quaternion.set(l[0],l[1],l[2],l[3]),d.group.visible=this.camMode==="chase"||this.state!=="play";let p=K.nrm(K.sub(Te,this.star.pos)),f=Wt(je(l),p),v=i.frameState(n).q,g=K.len(i.v),m=g>1?Wt(je(i.q),K.scl(i.v,-1/g)):null;d.setPlasma(this.time,this.state==="play"&&this.plasma||0,m,this.exposure*1.6),this.updateAirFx(t,v,u),this.fireball.update(t,r,this.exposure),d.animate(this.time,t,{gear:i.gearDown||i.mode==="landed"?1:0,thrust:i.mode==="jump"?0:i.thrust,jumpGlow:i.mode==="jump"?Math.min(1,(this.jumpLevel||0)*1.5):0,heat:i.heat,lights:i.lights,cruise:i.mode==="cruise",solDirLocal:f,cabinLight:!0,expo:this.exposure*1.6});let _=this.view.irradianceAt(o),y=vd(this.sys.star.color),x=1;for(let M of this.sys.bodies){let I=this.view.positions[M.index],D=K.sub(I,o),k=K.nrm(K.scl(o,-1)),H=K.dot(D,k);if(H<=0)continue;let q=K.len(K.sub(D,K.scl(k,H)));q<M.radius&&(x=Math.min(x,ue((q-M.radius*.995)/(M.radius*.01)+.5,0,1)))}if(i.frame>=0&&this.sys.bodies[i.frame].atmosphere&&this.sys.bodies[i.frame].solid){let M=K.nrm(K.sub(o,this.view.positions[i.frame])),I=K.nrm(K.scl(o,-1));x*=ue(K.dot(M,I)*6+.3,0,1)}x*=Math.max(this.air.light??1,0),this.shipLit=x;let R=K.nrm(K.scl(o,-1)),E=d.group.position;this.sun.position.set(E.x+R[0]*150,E.y+R[1]*150,E.z+R[2]*150),this.sun.target.position.copy(E),this.sun.color.setRGB(y[0],y[1],y[2]),this.sun.intensity=_*x,this.sun.target.updateMatrixWorld();let A=0;if(i.frame>=0){let M=this.sys.bodies[i.frame],I=this.view.positions[i.frame],D=K.sub(I,o),k=K.len(D),H=K.scl(D,1/k),q=this.view.irradianceAt(I),V=.5*(1+K.dot(K.scl(H,-1),K.nrm(K.scl(I,-1))));A=q*this.view.planets[i.frame].albedo*Math.min(1,(M.radius/k)**2)*V*.8,this.fillLight.position.set(E.x-H[0]*100,E.y-H[1]*100,E.z-H[2]*100),this.fillLight.target.position.copy(E),this.fillLight.target.updateMatrixWorld()}if(this.fillLight.intensity=A,this.ambient.intensity=8e-4+(i.lights?.002:0),this.envDirty&&!e.sky.pending&&(this.envTex&&this.envTex.dispose(),this.envTex=this.pmrem.fromCubemap(e.sky.cubeTarget.texture).texture,d.setEnvMap(this.envTex),this.signalView.root.traverse(M=>{M.material&&M.material.isMeshStandardMaterial&&(M.material.envMap=this.envTex,M.material.needsUpdate=!0)}),this.envDirty=!1),e.sky.step(),this.sys.star.starKind==="blackhole"){let M=K.scl(r,-1),I=K.len(M);e.sky.uniforms.uBH.value.set(M[0]/I,M[1]/I,M[2]/I,this.sys.star.radius/I)}else e.sky.uniforms.uBH.value.set(0,0,0,0);let P=Math.max(this.view.irradianceAt(r)*Math.max(x,.02)*Math.max(this.air.light??1,.01),.0015),w=.2*Math.PI/(.3*P);this.exposure=Math.exp(Math.log(this.exposure)+(Math.log(w)-Math.log(this.exposure))*(1-Math.exp(-t*1.2))),e.post.exposure=this.exposure,e.post.maxAdapt=1.7,e.sky.uniforms.uIntensity.value=1,this.fadeIn>0?(this.fadeIn=Math.max(0,this.fadeIn-t*.5),e.post.fade=this.fadeIn):this.state==="intro"?e.post.fade=1:this.state==="dead"?e.post.fade=Math.min(.9,e.post.fade+t*.35):e.post.fade=0,e.post.flash>0&&(e.post.flash=Math.max(0,e.post.flash-t*1.2)),e.render(t,performance.now()/1e3),this.drawHud(t),this.maps.draw(),this.audio.update({thrust:i.thrust,cruise:i.mode==="cruise",speed:i.speed||0,windDensity:this.windDensity||0,airSpeed:i.mode==="landed"?15:i.speed||0,scoop:this.scooping?1:0,heat:i.heat,jump:this.jumpLevel||0,music:this.state!=="boot",musicDrone:!0,rcs:!1,plasma:this.state==="play"&&this.plasma||0,pressure:this.state==="play"&&this.pressureStress||0})}updateAirFx(t,e,i){let n=this.ship,r=this.air,a=n.frame>=0?this.sys.bodies[n.frame]:null,o=0,l=[1,1,1],c=this.view.irradianceAt(this._shipWorld||[1,0,0]);if(a&&r.rho>1e-5&&this.state==="play"){o=r.gas&&r.depth>0?.9:Math.min(.55,Math.sqrt(r.rho)*.5)*(n.speed>20?1:.35);let d=a.solid?a.type==="venus"?[.9,.75,.5]:a.type==="titan"?[.85,.55,.3]:a.type==="desert"?[.8,.6,.45]:[.75,.8,.9]:a.gas.palette[1],p=c*Math.max(r.light,.002)*.6/Math.PI;l=d.map(f=>f*p),this.lightning>0&&(l=l.map((f,v)=>f+d[v]*this.lightning*.6)),this.plasma>.5&&(l=l.map((f,v)=>f+[1,.4,.12][v]*Math.min(3,this.plasma)*.3/this.exposure))}let h=Wt(e,K.scl(n.v,-1));if(this.airParticles.update(t,h,o,l,this.engine.pixelRatio),this.lightning*=Math.exp(-t*7),a&&r.gas&&r.P>2e5&&r.P<8e6&&this.state==="play"&&Math.random()<t*.35){this.lightning=(1.5+Math.random()*3)/this.exposure;let u=K.nrm(K.sub(this._shipWorld,this.view.positions[a.index])),d=[Math.random()-.5,Math.random()-.5,Math.random()-.5];this.lightningDir=K.nrm(K.add(K.scl(u,-.6),d)),setTimeout(()=>this.audio.thunder?.(),300+Math.random()*2500)}}drawHud(t){let e=this.ship,i=this.hud;if(i.visible=this.state==="play"||this.state==="horizon",!i.visible){i.draw(t,null),this.drawCockpitFrame(!1);return}let n=this.camWorld,r=this._shipWorld,a=e.worldQ(this.world),o=Wt(a,[0,0,-1]),l=K.add(K.sub(r,n),K.scl(o,5e3)),c=e.worldVel(this.world),h=e.frameState(this.world),u=Wt(h.q,e.v),d=[];if(this.scanned){for(let D of this.sys.bodies){let k=this.view.positions[D.index],H=K.sub(k,n),q=K.len(H);this.target&&this.target.kind==="body"&&this.target.index===D.index||D.parent>=0&&q>D.orbit.a*40||Math.asin(Math.min(1,D.radius/q))>.6||d.push({rel:H,name:D.name,sub:xi(q-D.radius),alpha:D.parent<0?.55:.4})}this.signalView.items.forEach((D,k)=>{if(this.target&&this.target.kind==="signal"&&this.target.index===k||!D.rel)return;let H=this.view.positions[D.sig.body],q=K.sub(H,n);Math.acos(ue(K.dot(K.nrm(q),K.nrm(D.rel)),-1,1))<.04&&D.dist>2e6||d.push({rel:D.rel,name:this.signalLabel(D.sig),sub:xi(D.dist),alpha:.65,kind:"signal"})})}let p=null,f=this.targetInfo();if(f){let D=K.sub(f.worldPos,n),k=-K.dot(K.sub(c,this.targetVel(f)),K.nrm(D)),H=k>1&&e.mode==="cruise"?` \xB7 ETA ${Su(Math.max(0,f.surfaceDist)/Math.max(k,1)*1.6)}`:"",q=f.kind==="body"?this.surveyed.has(f.body.id)?" \xB7 surveyed":f.inRange?" \xB7 hold Space to survey":"":f.kind==="signal"?this.readSignals.has(this.signalKey(f.sig))?" \xB7 read":f.inRange?" \xB7 hold Space to scan":"":"";p={rel:D,name:f.name,angR:Math.asin(Math.min(1,f.radius/Math.max(f.dist,f.radius))),info:`${xi(Math.max(0,f.surfaceDist))}${H}${q}`,scan:this.scan}}let v=[],g=xe(Te,this.star.pos);g>.01&&v.push({dir:Te.map((D,k)=>D-this.star.pos[k]),name:"SOL",color:"rgba(232,210,150,0.55)"}),this.jumpTarget&&v.push({dir:this.jumpTarget.pos.map((D,k)=>D-this.star.pos[k]),name:this.jumpTarget.name.toUpperCase(),color:"rgba(160,210,190,0.85)"});let m={flight:"FLIGHT \xB7 ASSISTED",cruise:"CRUISE DRIVE",landed:"LANDED",jump:"JUMP DRIVE",dead:"SIGNAL LOST"},_="";e.mode==="landed"?_="R or W  LIFT OFF   \xB7   , .  TIME   \xB7   MOUSE  LOOK AROUND   \xB7   L  FLOODLIGHT":e.mode==="cruise"?_=this.target?"P  AUTOPILOT   \xB7   TAB  DROP TO FLIGHT   \xB7   W S  THROTTLE":"T  TARGET AHEAD   \xB7   N  SYSTEM MAP   \xB7   TAB  DROP TO FLIGHT":e.mode==="flight"&&(e.alt<3e3&&e.frame>=0&&this.sys.bodies[e.frame].solid?_=e.gearDown?"F  DESCEND   \xB7   R  CLIMB   \xB7   X  HOLD   \xB7   SET DOWN SLOWLY":"G  LANDING GEAR   \xB7   F  DESCEND   \xB7   R  CLIMB":_=this.target?"P  AUTOPILOT   \xB7   TAB  CRUISE   \xB7   SPACE  SCAN   \xB7   M  GALAXY MAP   \xB7   H  HELP":"TAB  CRUISE   \xB7   T  TARGET   \xB7   SPACE  SCAN   \xB7   M  GALAXY MAP   \xB7   H  HELP"),!this.input.locked&&this.state==="play"&&!this.maps.open&&!this.panels.modalOpen&&(_="CLICK TO TAKE THE CONTROLS   \xB7   H  HELP");let y=null,x=null,R=null;e.heat>.85?(y="HEAT CRITICAL",x="Move away from the heat source",R="#e0674c"):this.centerMsg&&(y=this.centerMsg,this.centerMsg=null),e.mode==="flight"&&e.frame>=0&&e.canHover===!1&&e.alt<2e4&&(y="GRAVITY EXCEEDS LIFT",x="This world is too heavy to hover over",R="#e3a54b");let E=this.air,A=E.P/1e5;if((this.plasma||0)>1.2&&(y="ENTRY HEATING",x=`${tn(e.speed)} through the air \xB7 slow down or climb`,R="#e3a54b"),A>30&&(y=`HULL PRESSURE ${Math.round(A)} BAR`,x="Rated to 30 bar \xB7 climb (R) while you still can",R="#e0674c"),this.sys.star.starKind==="blackhole"&&e.mode==="flight"&&(e.gmag||0)>30){let D=K.len(this._shipWorld)/this.sys.star.radius;y=`FALLING TOWARD ${this.sys.star.name.toUpperCase()}`,x=D>3?"Gravity exceeds thrust \xB7 Tab to engage the cruise drive":"No drive can hold this close",R="#e0674c"}if((this.tidal||0)>20&&(y=`TIDAL STRESS ${Math.round(this.tidal)} M/S\xB2`,x="The nose is pulled harder than the tail",R="#e0674c"),this.state==="horizon"){let D=Math.max(0,this.horizonTau*(1-(this.horizonP||0)));y="EVENT HORIZON CROSSED",x=`Singularity in ${D.toFixed(2)} s ship time \xB7 at home, forever`,R="#e0674c"}let P=this.jumpRange(),w=null,M=!1;if(this.jumpTarget){let D=xe(this.jumpTarget.pos,this.star.pos);M=D<=P,w=`JUMP ${this.jumpTarget.name.toUpperCase()} \xB7 ${D.toFixed(1)} LY${M?" \xB7 J":this.jumpCost(D)>e.fuel?" \xB7 NEED FUEL":" \xB7 OUT OF RANGE"}`,this.route&&this.route.path.length>1&&(w+=`  \xB7  ROUTE TO ${this.route.dest.name.toUpperCase()}, ${this.route.path.length} JUMPS`)}let I=this.sys.star;i.draw(t,{camera:this.engine.camera,pixelAngle:this.engine.pixelAngle,mode:e.mode,modeLabel:m[e.mode]+(this.autopilot?" \xB7 AUTOPILOT":"")+(this.warpIndex?` \xB7 TIME \xD7${$a[this.warpIndex]}`:""),boostLabel:this.cheats.boost>1&&(e.mode==="cruise"||e.mode==="flight")?`SPEED BOOST \xD7${this.cheats.boost.toLocaleString("en-US")}`:null,modeColor:e.mode==="cruise"?"rgba(160,210,190,0.9)":null,noseDir:l,velDir:K.len(u)>0?u:null,speed:e.speed||0,cruiseCap:e.cruiseCap,gLine:e.frame>=0&&isFinite(e.alt)&&e.alt<5e6?`${(e.gmag/9.81||0).toFixed(2)} g`:"",throttle:e.throttle,alt:e.frame>=0&&this.sys.bodies[e.frame]?e.alt-(this.sys.bodies[e.frame].solid?e.bottom:0):1/0,vs:e.vertSpeed||0,gear:e.mode==="flight"||e.mode==="landed",gearLabel:e.mode==="landed"?"ON THE GROUND":e.gearDown?this.shipModel.gear>.85?"GEAR DOWN":"GEAR MOVING":"GEAR UP",gearWarn:!e.gearDown&&e.alt<500,fuel:e.fuel,heat:e.heat,hull:Math.max(0,e.hull),rangeLy:P,scooping:this.scooping,systemName:this.star.name,systemSub:`${I.spectral}${this.star.scoopable?"":" \xB7 no scoop"}  \xB7  ${this.sys.bodies.length} bodies${this.scanned?"":" \xB7 unscanned"}`,timeLine:`ABOARD ${Math.floor(this.shipYears)} YR ${Math.floor(this.shipYears%1*365)} D  \xB7  HOME ${Bi(this.homeYears)}`,objective:this.objectiveText(),homeLine:`SOL ${g.toFixed(1)} LY${(this.timeDilation||1)>1.02?`  \xB7  TIME AT HOME \xD7${this.timeDilation.toFixed(this.timeDilation<10?2:0)}`:""}`,airLine:E.rho>1e-6?`${A>=.1?`${A.toFixed(A<10?2:0)} bar`:`${(A*1e3).toFixed(A<.01?2:0)} mbar`} \xB7 ${Math.round(E.T)} K`:null,altLabel:E.gas&&E.depth>0?"DEPTH":"ALT",depth:E.gas?E.depth:0,jumpLine:w,jumpOk:M,labels:d,target:p,skyMarkers:v,hint:_,centerText:y,centerSub:x,centerColor:R,jump:this.jump.active?this.jump.hudInfo():null}),this.drawCockpitFrame(this.camMode==="cockpit")}objectiveText(){let t=this.universe.trail;if(this.trailFound<0)return this.star.id!==this.universe.start.id?`Return to ${this.universe.start.name}: a faint signal waits there`:this.scanned?"Find the faint signal: system map (N), then autopilot (P)":"Pulse-scan the system: press Space";if(this.trailFound>=t.length-1)return"Marrow's route ends here. Yours does not have to.";let e=t[this.trailFound+1];return e.id===this.star.id?this.scanned?"A beacon broadcasts here: find it on the system map (N)":"Pulse-scan the system: press Space":`Follow Marrow's beacons: ${e.name}, ${xe(e.pos,this.star.pos).toFixed(1)} ly`}targetVel(t){return t.kind==="body"?this.world.velocity(t.body.index):t.kind==="signal"?this.world.velocity(t.sig.body):[0,0,0]}drawCockpitFrame(t){let e=document.getElementById("cockpit");e.hasAttribute("hidden")!==!t&&e.toggleAttribute("hidden",!t)}saveGame(){if(this.state==="dead"||this.jump.active)return;let t=this.ship,e={v:1,star:this.star.id,time:this.time,homeYears:this.homeYears,shipYears:this.shipYears,ship:{frame:t.frame,rot:t.rot,p:t.p,v:t.v,q:t.q,mode:t.mode==="cruise"?"flight":t.mode,fuel:t.fuel,heat:t.heat,hull:t.hull,gear:t.gearDown,lights:t.lights},visited:[...this.visited],scanned:[...this.scannedSystems],surveyed:[...this.surveyed],read:[...this.readSignals],logs:this.logs,received:[...this.received],trailFound:this.trailFound,jumpTarget:this.jumpTarget?this.jumpTarget.id:null,route:this.route?{dest:this.route.dest.id,path:this.route.path.map(i=>i.id)}:null,travelled:this.travelled,jumps:this.jumps,life:[...this.lifeFound],own:this.ownBeacons,bhNoted:!!this.bhNoted};t.mode==="cruise"&&(e.ship.v=K.scl(t.forward,Math.min(t.cruiseV,200)));try{localStorage.setItem(qa,JSON.stringify(e))}catch{}}readSave(){try{let t=localStorage.getItem(qa);if(!t)return null;let e=JSON.parse(t);return e&&e.v===1?e:null}catch{return null}}applySave(t){let e=this.universe.galaxy,i=e.starById(t.star)||this.universe.start;this.star=i,this.time=t.time,this.homeYears=t.homeYears,this.shipYears=t.shipYears;let n=this.ship;n.fuel=t.ship.fuel,n.heat=t.ship.heat,n.hull=t.ship.hull,n.gearDown=t.ship.gear,n.lights=t.ship.lights,this.shipModel.gear=n.gearDown?1:0,this.visited=new Set(t.visited),this.scannedSystems=new Set(t.scanned),this.surveyed=new Set(t.surveyed),this.readSignals=new Set(t.read),this.logs=t.logs||[],this.received=new Set(t.received),this.trailFound=t.trailFound??-1,this.jumpTarget=t.jumpTarget?e.starById(t.jumpTarget):null,this.route=t.route?{dest:e.starById(t.route.dest),path:t.route.path.map(r=>e.starById(r)).filter(Boolean)}:null,this.route&&!this.route.dest&&(this.route=null),this.travelled=t.travelled||0,this.jumps=t.jumps||0,this.lifeFound=new Set(t.life||[]),this.ownBeacons=t.own||[],this.bhNoted=!!t.bhNoted,this.pendingPlacement={kind:"saved",...t.ship}}};function Gx(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}async function Wx(){if(!Gx()){document.getElementById("nowebgl").hidden=!1;return}try{await Promise.race([document.fonts?.ready,new Promise(e=>setTimeout(e,1500))])}catch{}document.getElementById("scene").addEventListener("webglcontextlost",e=>{e.preventDefault();let i=document.getElementById("nowebgl");i.textContent="The graphics context was lost (the GPU reset or ran out of memory). Your voyage autosaves; reload the page to continue.",i.hidden=!1}),await new Ya().boot()}Wx();})();
