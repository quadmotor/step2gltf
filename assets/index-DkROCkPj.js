(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ko="169",yd=0,Dc=1,Md=2,sh=1,Sd=2,ei=3,ri=0,fn=1,Nn=2,Ti=0,ar=1,Ic=2,Nc=3,Uc=4,Ed=5,Fi=100,Td=101,bd=102,wd=103,Ad=104,Rd=200,Cd=201,Pd=202,Ld=203,to=204,no=205,Dd=206,Id=207,Nd=208,Ud=209,Fd=210,Od=211,Bd=212,zd=213,kd=214,io=0,ro=1,so=2,dr=3,ao=4,oo=5,co=6,lo=7,ea=0,Hd=1,Gd=2,bi=0,Vd=1,Wd=2,Xd=3,jd=4,qd=5,Yd=6,Kd=7,Fc="attached",$d="detached",ah=300,fr=301,pr=302,ho=303,uo=304,ta=306,mr=1e3,Mi=1001,qs=1002,dn=1003,oh=1004,Hr=1005,xn=1006,Bs=1007,ni=1008,si=1009,ch=1010,lh=1011,jr=1012,$r=1013,zi=1014,On=1015,Zr=1016,$o=1017,Zo=1018,_r=1020,hh=35902,uh=1021,dh=1022,Tn=1023,fh=1024,ph=1025,or=1026,gr=1027,Jo=1028,Qo=1029,mh=1030,ec=1031,na=1033,zs=33776,ks=33777,Hs=33778,Gs=33779,fo=35840,po=35841,mo=35842,_o=35843,go=36196,vo=37492,xo=37496,yo=37808,Mo=37809,So=37810,Eo=37811,To=37812,bo=37813,wo=37814,Ao=37815,Ro=37816,Co=37817,Po=37818,Lo=37819,Do=37820,Io=37821,Vs=36492,No=36494,Uo=36495,_h=36283,Fo=36284,Oo=36285,Bo=36286,qr=2300,Yr=2301,ga=2302,Oc=2400,Bc=2401,zc=2402,Zd=2500,Jd=0,gh=1,zo=2,Qd=3200,ef=3201,ia=0,tf=1,yi="",hn="srgb",nn="srgb-linear",tc="display-p3",ra="display-p3-linear",Ys="linear",Lt="srgb",Ks="rec709",$s="p3",Wi=7680,kc=519,nf=512,rf=513,sf=514,vh=515,af=516,of=517,cf=518,lf=519,ko=35044,Ho="300 es",ii=2e3,Zs=2001;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hc=1234567;const Vr=Math.PI/180,vr=180/Math.PI;function Bn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Yt(r,e,t){return Math.max(e,Math.min(t,r))}function nc(r,e){return(r%e+e)%e}function hf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function uf(r,e,t){return r!==e?(t-r)/(e-r):0}function Wr(r,e,t){return(1-t)*r+t*e}function df(r,e,t,n){return Wr(r,e,1-Math.exp(-t*n))}function ff(r,e=1){return e-Math.abs(nc(r,e*2)-e)}function pf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function mf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function _f(r,e){return r+Math.floor(Math.random()*(e-r+1))}function gf(r,e){return r+Math.random()*(e-r)}function vf(r){return r*(.5-Math.random())}function xf(r){r!==void 0&&(Hc=r);let e=Hc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yf(r){return r*Vr}function Mf(r){return r*vr}function Sf(r){return(r&r-1)===0&&r!==0}function Ef(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Tf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bf(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),h=s((e+n)/2),d=a((e+n)/2),f=s((e-n)/2),m=a((e-n)/2),_=s((n-e)/2),y=a((n-e)/2);switch(i){case"XYX":r.set(o*d,l*f,l*m,o*h);break;case"YZY":r.set(l*m,o*d,l*f,o*h);break;case"ZXZ":r.set(l*f,l*m,o*d,o*h);break;case"XZX":r.set(o*d,l*y,l*_,o*h);break;case"YXY":r.set(l*_,o*d,l*y,o*h);break;case"ZYZ":r.set(l*y,l*_,o*d,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Nt={DEG2RAD:Vr,RAD2DEG:vr,generateUUID:Bn,clamp:Yt,euclideanModulo:nc,mapLinear:hf,inverseLerp:uf,lerp:Wr,damp:df,pingpong:ff,smoothstep:pf,smootherstep:mf,randInt:_f,randFloat:gf,randFloatSpread:vf,seededRandom:xf,degToRad:yf,radToDeg:Mf,isPowerOfTwo:Sf,ceilPowerOfTwo:Ef,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:bf,normalize:Tt,denormalize:Un};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,i,s,a,o,l,h){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,h)}set(e,t,n,i,s,a,o,l,h){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],d=n[4],f=n[7],m=n[2],_=n[5],y=n[8],E=i[0],g=i[3],x=i[6],D=i[1],A=i[4],P=i[7],V=i[2],B=i[5],N=i[8];return s[0]=a*E+o*D+l*V,s[3]=a*g+o*A+l*B,s[6]=a*x+o*P+l*N,s[1]=h*E+d*D+f*V,s[4]=h*g+d*A+f*B,s[7]=h*x+d*P+f*N,s[2]=m*E+_*D+y*V,s[5]=m*g+_*A+y*B,s[8]=m*x+_*P+y*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8];return t*a*d-t*o*h-n*s*d+n*o*l+i*s*h-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8],f=d*a-o*h,m=o*l-d*s,_=h*s-a*l,y=t*f+n*m+i*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=f*E,e[1]=(i*h-d*n)*E,e[2]=(o*n-i*a)*E,e[3]=m*E,e[4]=(d*t-i*l)*E,e[5]=(i*s-o*t)*E,e[6]=_*E,e[7]=(n*l-h*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-i*h,i*l,-i*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(va.makeScale(e,t)),this}rotate(e){return this.premultiply(va.makeRotation(-e)),this}translate(e,t){return this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const va=new tt;function xh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Kr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wf(){const r=Kr("canvas");return r.style.display="block",r}const Gc={};function Ws(r){r in Gc||(Gc[r]=!0,console.warn(r))}function Af(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Rf(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cf(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Vc=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wc=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lr={[nn]:{transfer:Ys,primaries:Ks,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[hn]:{transfer:Lt,primaries:Ks,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ra]:{transfer:Ys,primaries:$s,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Wc),fromReference:r=>r.applyMatrix3(Vc)},[tc]:{transfer:Lt,primaries:$s,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Wc),fromReference:r=>r.applyMatrix3(Vc).convertLinearToSRGB()}},Pf=new Set([nn,ra]),vt={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Pf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Lr[e].toReference,i=Lr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Lr[r].primaries},getTransfer:function(r){return r===yi?Ys:Lr[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Lr[e].luminanceCoefficients)}};function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xi;class Lf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=Kr("canvas")),Xi.width=e.width,Xi.height=e.height;const n=Xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Df=0;class yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ya(i[a].image)):s.push(ya(i[a]))}else s=ya(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ya(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Lf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let If=0;class Kt extends ki{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Mi,i=Mi,s=xn,a=ni,o=Tn,l=si,h=Kt.DEFAULT_ANISOTROPY,d=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Bn(),this.name="",this.source=new yh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mr:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mr:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=ah;Kt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,h=l[0],d=l[4],f=l[8],m=l[1],_=l[5],y=l[9],E=l[2],g=l[6],x=l[10];if(Math.abs(d-m)<.01&&Math.abs(f-E)<.01&&Math.abs(y-g)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+E)<.1&&Math.abs(y+g)<.1&&Math.abs(h+_+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,P=(_+1)/2,V=(x+1)/2,B=(d+m)/4,N=(f+E)/4,X=(y+g)/4;return A>P&&A>V?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=B/n,s=N/n):P>V?P<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(P),n=B/i,s=X/i):V<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(V),n=N/s,i=X/s),this.set(n,i,s,t),this}let D=Math.sqrt((g-y)*(g-y)+(f-E)*(f-E)+(m-d)*(m-d));return Math.abs(D)<.001&&(D=1),this.x=(g-y)/D,this.y=(f-E)/D,this.z=(m-d)/D,this.w=Math.acos((h+_+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nf extends ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Nf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Mh extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uf extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],h=n[i+1],d=n[i+2],f=n[i+3];const m=s[a+0],_=s[a+1],y=s[a+2],E=s[a+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=m,e[t+1]=_,e[t+2]=y,e[t+3]=E;return}if(f!==E||l!==m||h!==_||d!==y){let g=1-o;const x=l*m+h*_+d*y+f*E,D=x>=0?1:-1,A=1-x*x;if(A>Number.EPSILON){const V=Math.sqrt(A),B=Math.atan2(V,x*D);g=Math.sin(g*B)/V,o=Math.sin(o*B)/V}const P=o*D;if(l=l*g+m*P,h=h*g+_*P,d=d*g+y*P,f=f*g+E*P,g===1-o){const V=1/Math.sqrt(l*l+h*h+d*d+f*f);l*=V,h*=V,d*=V,f*=V}}e[t]=l,e[t+1]=h,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],h=n[i+2],d=n[i+3],f=s[a],m=s[a+1],_=s[a+2],y=s[a+3];return e[t]=o*y+d*f+l*_-h*m,e[t+1]=l*y+d*m+h*f-o*_,e[t+2]=h*y+d*_+o*m-l*f,e[t+3]=d*y-o*f-l*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),d=o(i/2),f=o(s/2),m=l(n/2),_=l(i/2),y=l(s/2);switch(a){case"XYZ":this._x=m*d*f+h*_*y,this._y=h*_*f-m*d*y,this._z=h*d*y+m*_*f,this._w=h*d*f-m*_*y;break;case"YXZ":this._x=m*d*f+h*_*y,this._y=h*_*f-m*d*y,this._z=h*d*y-m*_*f,this._w=h*d*f+m*_*y;break;case"ZXY":this._x=m*d*f-h*_*y,this._y=h*_*f+m*d*y,this._z=h*d*y+m*_*f,this._w=h*d*f-m*_*y;break;case"ZYX":this._x=m*d*f-h*_*y,this._y=h*_*f+m*d*y,this._z=h*d*y-m*_*f,this._w=h*d*f+m*_*y;break;case"YZX":this._x=m*d*f+h*_*y,this._y=h*_*f+m*d*y,this._z=h*d*y-m*_*f,this._w=h*d*f-m*_*y;break;case"XZY":this._x=m*d*f-h*_*y,this._y=h*_*f-m*d*y,this._z=h*d*y+m*_*f,this._w=h*d*f+m*_*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],h=t[2],d=t[6],f=t[10],m=n+o+f;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(d-l)*_,this._y=(s-h)*_,this._z=(a-i)*_}else if(n>o&&n>f){const _=2*Math.sqrt(1+n-o-f);this._w=(d-l)/_,this._x=.25*_,this._y=(i+a)/_,this._z=(s+h)/_}else if(o>f){const _=2*Math.sqrt(1+o-n-f);this._w=(s-h)/_,this._x=(i+a)/_,this._y=.25*_,this._z=(l+d)/_}else{const _=2*Math.sqrt(1+f-n-o);this._w=(a-i)/_,this._x=(s+h)/_,this._y=(l+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,h=t._z,d=t._w;return this._x=n*d+a*o+i*h-s*l,this._y=i*d+a*l+s*o-n*h,this._z=s*d+a*h+n*l-i*o,this._w=a*d-n*o-i*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*n+t*this._x,this._y=_*i+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,o),f=Math.sin((1-t)*d)/h,m=Math.sin(t*d)/h;return this._w=a*f+this._w*m,this._x=n*f+this._x*m,this._y=i*f+this._y*m,this._z=s*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*i-o*n),d=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*h+a*f-o*d,this.y=n+l*d+o*h-s*f,this.z=i+l*f+s*d-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new O,Xc=new oi;class Vn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),ds.subVectors(this.max,Dr),ji.subVectors(e.a,Dr),qi.subVectors(e.b,Dr),Yi.subVectors(e.c,Dr),di.subVectors(qi,ji),fi.subVectors(Yi,qi),Ai.subVectors(ji,Yi);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ai.z,Ai.y,di.z,0,-di.x,fi.z,0,-fi.x,Ai.z,0,-Ai.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ai.y,Ai.x,0];return!Sa(t,ji,qi,Yi,ds)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,ji,qi,Yi,ds))?!1:(fs.crossVectors(di,fi),t=[fs.x,fs.y,fs.z],Sa(t,ji,qi,Yi,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new O,new O,new O,new O,new O,new O,new O,new O],Cn=new O,us=new Vn,ji=new O,qi=new O,Yi=new O,di=new O,fi=new O,Ai=new O,Dr=new O,ds=new O,fs=new O,Ri=new O;function Sa(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ri.fromArray(r,s);const o=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),l=e.dot(Ri),h=t.dot(Ri),d=n.dot(Ri);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}const Ff=new Vn,Ir=new O,Ea=new O;class kn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ff.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ir,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Ea)),this.expandByPoint(Ir.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new O,Ta=new O,ps=new O,pi=new O,ba=new O,ms=new O,wa=new O;class Jr{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ta.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Ta);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ps),o=pi.dot(this.direction),l=-pi.dot(ps),h=pi.lengthSq(),d=Math.abs(1-a*a);let f,m,_,y;if(d>0)if(f=a*l-o,m=a*o-l,y=s*d,f>=0)if(m>=-y)if(m<=y){const E=1/d;f*=E,m*=E,_=f*(f+a*m+2*o)+m*(a*f+m+2*l)+h}else m=s,f=Math.max(0,-(a*m+o)),_=-f*f+m*(m+2*l)+h;else m=-s,f=Math.max(0,-(a*m+o)),_=-f*f+m*(m+2*l)+h;else m<=-y?(f=Math.max(0,-(-a*s+o)),m=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+m*(m+2*l)+h):m<=y?(f=0,m=Math.min(Math.max(-s,-l),s),_=m*(m+2*l)+h):(f=Math.max(0,-(a*s+o)),m=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+m*(m+2*l)+h);else m=a>0?-s:s,f=Math.max(0,-(a*m+o)),_=-f*f+m*(m+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ta).addScaledVector(ps,m),_}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),d>=0?(s=(e.min.y-m.y)*d,a=(e.max.y-m.y)*d):(s=(e.max.y-m.y)*d,a=(e.min.y-m.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-m.z)*f,l=(e.max.z-m.z)*f):(o=(e.max.z-m.z)*f,l=(e.min.z-m.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,i,s){ba.subVectors(t,e),ms.subVectors(n,e),wa.crossVectors(ba,ms);let a=this.direction.dot(wa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);const l=o*this.direction.dot(ms.crossVectors(pi,ms));if(l<0)return null;const h=o*this.direction.dot(ba.cross(pi));if(h<0||l+h>a)return null;const d=-o*pi.dot(wa);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,n,i,s,a,o,l,h,d,f,m,_,y,E,g){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,h,d,f,m,_,y,E,g)}set(e,t,n,i,s,a,o,l,h,d,f,m,_,y,E,g){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=h,x[6]=d,x[10]=f,x[14]=m,x[3]=_,x[7]=y,x[11]=E,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),h=Math.sin(i),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const m=a*d,_=a*f,y=o*d,E=o*f;t[0]=l*d,t[4]=-l*f,t[8]=h,t[1]=_+y*h,t[5]=m-E*h,t[9]=-o*l,t[2]=E-m*h,t[6]=y+_*h,t[10]=a*l}else if(e.order==="YXZ"){const m=l*d,_=l*f,y=h*d,E=h*f;t[0]=m+E*o,t[4]=y*o-_,t[8]=a*h,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=_*o-y,t[6]=E+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*d,_=l*f,y=h*d,E=h*f;t[0]=m-E*o,t[4]=-a*f,t[8]=y+_*o,t[1]=_+y*o,t[5]=a*d,t[9]=E-m*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*d,_=a*f,y=o*d,E=o*f;t[0]=l*d,t[4]=y*h-_,t[8]=m*h+E,t[1]=l*f,t[5]=E*h+m,t[9]=_*h-y,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,_=a*h,y=o*l,E=o*h;t[0]=l*d,t[4]=E-m*f,t[8]=y*f+_,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-h*d,t[6]=_*f+y,t[10]=m-E*f}else if(e.order==="XZY"){const m=a*l,_=a*h,y=o*l,E=o*h;t[0]=l*d,t[4]=-f,t[8]=h*d,t[1]=m*f+E,t[5]=a*d,t[9]=_*f-y,t[2]=y*f-_,t[6]=o*d,t[10]=E*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Of,e,Bf)}lookAt(e,t,n){const i=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),mi.crossVectors(n,_n),mi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),mi.crossVectors(n,_n)),mi.normalize(),_s.crossVectors(_n,mi),i[0]=mi.x,i[4]=_s.x,i[8]=_n.x,i[1]=mi.y,i[5]=_s.y,i[9]=_n.y,i[2]=mi.z,i[6]=_s.z,i[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],d=n[1],f=n[5],m=n[9],_=n[13],y=n[2],E=n[6],g=n[10],x=n[14],D=n[3],A=n[7],P=n[11],V=n[15],B=i[0],N=i[4],X=i[8],ce=i[12],T=i[1],R=i[5],J=i[9],Z=i[13],Q=i[2],ne=i[6],K=i[10],oe=i[14],k=i[3],ue=i[7],we=i[11],Ie=i[15];return s[0]=a*B+o*T+l*Q+h*k,s[4]=a*N+o*R+l*ne+h*ue,s[8]=a*X+o*J+l*K+h*we,s[12]=a*ce+o*Z+l*oe+h*Ie,s[1]=d*B+f*T+m*Q+_*k,s[5]=d*N+f*R+m*ne+_*ue,s[9]=d*X+f*J+m*K+_*we,s[13]=d*ce+f*Z+m*oe+_*Ie,s[2]=y*B+E*T+g*Q+x*k,s[6]=y*N+E*R+g*ne+x*ue,s[10]=y*X+E*J+g*K+x*we,s[14]=y*ce+E*Z+g*oe+x*Ie,s[3]=D*B+A*T+P*Q+V*k,s[7]=D*N+A*R+P*ne+V*ue,s[11]=D*X+A*J+P*K+V*we,s[15]=D*ce+A*Z+P*oe+V*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],d=e[2],f=e[6],m=e[10],_=e[14],y=e[3],E=e[7],g=e[11],x=e[15];return y*(+s*l*f-i*h*f-s*o*m+n*h*m+i*o*_-n*l*_)+E*(+t*l*_-t*h*m+s*a*m-i*a*_+i*h*d-s*l*d)+g*(+t*h*f-t*o*_-s*a*f+n*a*_+s*o*d-n*h*d)+x*(-i*o*d-t*l*f+t*o*m+i*a*f-n*a*m+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8],f=e[9],m=e[10],_=e[11],y=e[12],E=e[13],g=e[14],x=e[15],D=f*g*h-E*m*h+E*l*_-o*g*_-f*l*x+o*m*x,A=y*m*h-d*g*h-y*l*_+a*g*_+d*l*x-a*m*x,P=d*E*h-y*f*h+y*o*_-a*E*_-d*o*x+a*f*x,V=y*f*l-d*E*l-y*o*m+a*E*m+d*o*g-a*f*g,B=t*D+n*A+i*P+s*V;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/B;return e[0]=D*N,e[1]=(E*m*s-f*g*s-E*i*_+n*g*_+f*i*x-n*m*x)*N,e[2]=(o*g*s-E*l*s+E*i*h-n*g*h-o*i*x+n*l*x)*N,e[3]=(f*l*s-o*m*s-f*i*h+n*m*h+o*i*_-n*l*_)*N,e[4]=A*N,e[5]=(d*g*s-y*m*s+y*i*_-t*g*_-d*i*x+t*m*x)*N,e[6]=(y*l*s-a*g*s-y*i*h+t*g*h+a*i*x-t*l*x)*N,e[7]=(a*m*s-d*l*s+d*i*h-t*m*h-a*i*_+t*l*_)*N,e[8]=P*N,e[9]=(y*f*s-d*E*s-y*n*_+t*E*_+d*n*x-t*f*x)*N,e[10]=(a*E*s-y*o*s+y*n*h-t*E*h-a*n*x+t*o*x)*N,e[11]=(d*o*s-a*f*s-d*n*h+t*f*h+a*n*_-t*o*_)*N,e[12]=V*N,e[13]=(d*E*i-y*f*i+y*n*m-t*E*m-d*n*g+t*f*g)*N,e[14]=(y*o*i-a*E*i-y*n*l+t*E*l+a*n*g-t*o*g)*N,e[15]=(a*f*i-d*o*i+d*n*l-t*f*l-a*n*m+t*o*m)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,h=s*a,d=s*o;return this.set(h*a+n,h*o-i*l,h*l+i*o,0,h*o+i*l,d*o+n,d*l-i*a,0,h*l-i*o,d*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,h=s+s,d=a+a,f=o+o,m=s*h,_=s*d,y=s*f,E=a*d,g=a*f,x=o*f,D=l*h,A=l*d,P=l*f,V=n.x,B=n.y,N=n.z;return i[0]=(1-(E+x))*V,i[1]=(_+P)*V,i[2]=(y-A)*V,i[3]=0,i[4]=(_-P)*B,i[5]=(1-(m+x))*B,i[6]=(g+D)*B,i[7]=0,i[8]=(y+A)*N,i[9]=(g-D)*N,i[10]=(1-(m+E))*N,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ki.set(i[0],i[1],i[2]).length();const a=Ki.set(i[4],i[5],i[6]).length(),o=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Pn.copy(this);const h=1/s,d=1/a,f=1/o;return Pn.elements[0]*=h,Pn.elements[1]*=h,Pn.elements[2]*=h,Pn.elements[4]*=d,Pn.elements[5]*=d,Pn.elements[6]*=d,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,t.setFromRotationMatrix(Pn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=ii){const l=this.elements,h=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),m=(n+i)/(n-i);let _,y;if(o===ii)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Zs)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ii){const l=this.elements,h=1/(t-e),d=1/(n-i),f=1/(a-s),m=(t+e)*h,_=(n+i)*d;let y,E;if(o===ii)y=(a+s)*f,E=-2*f;else if(o===Zs)y=s*f,E=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=E,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new O,Pn=new Oe,Of=new O(0,0,0),Bf=new O(1,1,1),mi=new O,_s=new O,_n=new O,jc=new Oe,qc=new oi;class wn{constructor(e=0,t=0,n=0,i=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],h=i[5],d=i[9],f=i[2],m=i[6],_=i[10];switch(t){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qc.setFromEuler(this),this.setFromQuaternion(qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zf=0;const Yc=new O,$i=new oi,$n=new Oe,gs=new O,Nr=new O,kf=new O,Hf=new oi,Kc=new O(1,0,0),$c=new O(0,1,0),Zc=new O(0,0,1),Jc={type:"added"},Gf={type:"removed"},Zi={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Ut extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new O,t=new wn,n=new oi,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new tt}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Kc,e)}rotateY(e){return this.rotateOnAxis($c,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return Yc.copy(e).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kc,e)}translateY(e){return this.translateOnAxis($c,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Nr,gs,this.up):$n.lookAt(gs,Nr,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),$i.setFromRotationMatrix($n),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gf),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const f=l[h];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),d=a(e.images),f=a(e.shapes),m=a(e.skeletons),_=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),y.length>0&&(n.nodes=y)}return n.object=i,n;function a(o){const l=[];for(const h in o){const d=o[h];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ut.DEFAULT_UP=new O(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new O,Zn=new O,Ra=new O,Jn=new O,Ji=new O,Qi=new O,Qc=new O,Ca=new O,Pa=new O,La=new O,Da=new Mt,Ia=new Mt,Na=new Mt;class Fn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ln.subVectors(i,t),Zn.subVectors(n,t),Ra.subVectors(e,t);const a=Ln.dot(Ln),o=Ln.dot(Zn),l=Ln.dot(Ra),h=Zn.dot(Zn),d=Zn.dot(Ra),f=a*h-o*o;if(f===0)return s.set(0,0,0),null;const m=1/f,_=(h*l-o*d)*m,y=(a*d-o*l)*m;return s.set(1-_-y,y,_)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Da.setScalar(0),Ia.setScalar(0),Na.setScalar(0),Da.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Na.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Da,s.x),a.addScaledVector(Ia,s.y),a.addScaledVector(Na,s.z),a}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),Zn.subVectors(e,t),Ln.cross(Zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Ln.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ji.subVectors(i,n),Qi.subVectors(s,n),Ca.subVectors(e,n);const l=Ji.dot(Ca),h=Qi.dot(Ca);if(l<=0&&h<=0)return t.copy(n);Pa.subVectors(e,i);const d=Ji.dot(Pa),f=Qi.dot(Pa);if(d>=0&&f<=d)return t.copy(i);const m=l*f-d*h;if(m<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Ji,a);La.subVectors(e,s);const _=Ji.dot(La),y=Qi.dot(La);if(y>=0&&_<=y)return t.copy(s);const E=_*h-l*y;if(E<=0&&h>=0&&y<=0)return o=h/(h-y),t.copy(n).addScaledVector(Qi,o);const g=d*y-_*f;if(g<=0&&f-d>=0&&_-y>=0)return Qc.subVectors(s,i),o=(f-d)/(f-d+(_-y)),t.copy(i).addScaledVector(Qc,o);const x=1/(g+E+m);return a=E*x,o=m*x,t.copy(n).addScaledVector(Ji,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Ua(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=nc(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ua(a,s,e+1/3),this.g=Ua(a,s,e),this.b=Ua(a,s,e-1/3)}return vt.toWorkingColorSpace(this,i),this}setStyle(e,t=hn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=Sh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return vt.fromWorkingColorSpace(on.copy(this),e),Math.round(Yt(on.r*255,0,255))*65536+Math.round(Yt(on.g*255,0,255))*256+Math.round(Yt(on.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(on.copy(this),t);const n=on.r,i=on.g,s=on.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,h;const d=(o+a)/2;if(o===a)l=0,h=0;else{const f=a-o;switch(h=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=h,e.l=d,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=hn){vt.fromWorkingColorSpace(on.copy(this),e);const t=on.r,n=on.g,i=on.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(vs);const n=Wr(_i.h,vs.h,t),i=Wr(_i.s,vs.s,t),s=Wr(_i.l,vs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new He;He.NAMES=Sh;let Vf=0;class bn extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=ar,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=no,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bi extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new O,xs=new nt;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ko,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ko&&(e.usage=this.usage),e}}class Eh extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wf extends $t{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Th extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zn extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xf=0;const Mn=new Oe,Fa=new Ut,er=new O,gn=new Vn,Ur=new Vn,jt=new O;class tn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xh(e)?Th:Eh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(gn.min,Ur.min),gn.expandByPoint(jt),jt.addVectors(gn.max,Ur.max),gn.expandByPoint(jt)):(gn.expandByPoint(Ur.min),gn.expandByPoint(Ur.max))}gn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)jt.fromBufferAttribute(o,h),l&&(er.fromBufferAttribute(e,h),jt.add(er)),i=Math.max(i,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let X=0;X<n.count;X++)o[X]=new O,l[X]=new O;const h=new O,d=new O,f=new O,m=new nt,_=new nt,y=new nt,E=new O,g=new O;function x(X,ce,T){h.fromBufferAttribute(n,X),d.fromBufferAttribute(n,ce),f.fromBufferAttribute(n,T),m.fromBufferAttribute(s,X),_.fromBufferAttribute(s,ce),y.fromBufferAttribute(s,T),d.sub(h),f.sub(h),_.sub(m),y.sub(m);const R=1/(_.x*y.y-y.x*_.y);isFinite(R)&&(E.copy(d).multiplyScalar(y.y).addScaledVector(f,-_.y).multiplyScalar(R),g.copy(f).multiplyScalar(_.x).addScaledVector(d,-y.x).multiplyScalar(R),o[X].add(E),o[ce].add(E),o[T].add(E),l[X].add(g),l[ce].add(g),l[T].add(g))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let X=0,ce=D.length;X<ce;++X){const T=D[X],R=T.start,J=T.count;for(let Z=R,Q=R+J;Z<Q;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const A=new O,P=new O,V=new O,B=new O;function N(X){V.fromBufferAttribute(i,X),B.copy(V);const ce=o[X];A.copy(ce),A.sub(V.multiplyScalar(V.dot(ce))).normalize(),P.crossVectors(B,ce);const R=P.dot(l[X])<0?-1:1;a.setXYZW(X,A.x,A.y,A.z,R)}for(let X=0,ce=D.length;X<ce;++X){const T=D[X],R=T.start,J=T.count;for(let Z=R,Q=R+J;Z<Q;Z+=3)N(e.getX(Z+0)),N(e.getX(Z+1)),N(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const i=new O,s=new O,a=new O,o=new O,l=new O,h=new O,d=new O,f=new O;if(e)for(let m=0,_=e.count;m<_;m+=3){const y=e.getX(m+0),E=e.getX(m+1),g=e.getX(m+2);i.fromBufferAttribute(t,y),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,g),d.subVectors(a,s),f.subVectors(i,s),d.cross(f),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,g),o.add(d),l.add(d),h.add(d),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),d.subVectors(a,s),f.subVectors(i,s),d.cross(f),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const h=o.array,d=o.itemSize,f=o.normalized,m=new h.constructor(l.length*d);let _=0,y=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?_=l[E]*o.data.stride+o.offset:_=l[E]*d;for(let x=0;x<d;x++)m[y++]=h[_++]}return new $t(m,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],h=e(l,n);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const l=[],h=s[o];for(let d=0,f=h.length;d<f;d++){const m=h[d],_=e(m,n);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let f=0,m=h.length;f<m;f++){const _=h[f];d.push(_.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(t))}const s=e.morphAttributes;for(const h in s){const d=[],f=s[h];for(let m=0,_=f.length;m<_;m++)d.push(f[m].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const el=new Oe,Ci=new Jr,ys=new kn,tl=new O,Ms=new O,Ss=new O,Es=new O,Oa=new O,Ts=new O,nl=new O,bs=new O;class en extends Ut{constructor(e=new tn,t=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ts.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const d=o[l],f=s[l];d!==0&&(Oa.fromBufferAttribute(f,e),a?Ts.addScaledVector(Oa,d):Ts.addScaledVector(Oa.sub(t),d))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(ys.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(ys,tl)===null||Ci.origin.distanceToSquared(tl)>(e.far-e.near)**2))&&(el.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(el),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,m=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,E=m.length;y<E;y++){const g=m[y],x=a[g.materialIndex],D=Math.max(g.start,_.start),A=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let P=D,V=A;P<V;P+=3){const B=o.getX(P),N=o.getX(P+1),X=o.getX(P+2);i=ws(this,x,e,n,h,d,f,B,N,X),i&&(i.faceIndex=Math.floor(P/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const y=Math.max(0,_.start),E=Math.min(o.count,_.start+_.count);for(let g=y,x=E;g<x;g+=3){const D=o.getX(g),A=o.getX(g+1),P=o.getX(g+2);i=ws(this,a,e,n,h,d,f,D,A,P),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,E=m.length;y<E;y++){const g=m[y],x=a[g.materialIndex],D=Math.max(g.start,_.start),A=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let P=D,V=A;P<V;P+=3){const B=P,N=P+1,X=P+2;i=ws(this,x,e,n,h,d,f,B,N,X),i&&(i.faceIndex=Math.floor(P/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const y=Math.max(0,_.start),E=Math.min(l.count,_.start+_.count);for(let g=y,x=E;g<x;g+=3){const D=g,A=g+1,P=g+2;i=ws(this,a,e,n,h,d,f,D,A,P),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function jf(r,e,t,n,i,s,a,o){let l;if(e.side===fn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===ri,o),l===null)return null;bs.copy(o),bs.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(bs);return h<t.near||h>t.far?null:{distance:h,point:bs.clone(),object:r}}function ws(r,e,t,n,i,s,a,o,l,h){r.getVertexPosition(o,Ms),r.getVertexPosition(l,Ss),r.getVertexPosition(h,Es);const d=jf(r,e,t,n,Ms,Ss,Es,nl);if(d){const f=new O;Fn.getBarycoord(nl,Ms,Ss,Es,f),i&&(d.uv=Fn.getInterpolatedAttribute(i,o,l,h,f,new nt)),s&&(d.uv1=Fn.getInterpolatedAttribute(s,o,l,h,f,new nt)),a&&(d.normal=Fn.getInterpolatedAttribute(a,o,l,h,f,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const m={a:o,b:l,c:h,normal:new O,materialIndex:0};Fn.getNormal(Ms,Ss,Es,m.normal),d.face=m,d.barycoord=f}return d}class Qr extends tn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],d=[],f=[];let m=0,_=0;y("z","y","x",-1,-1,n,t,e,a,s,0),y("z","y","x",1,-1,n,t,-e,a,s,1),y("x","z","y",1,1,e,n,t,i,a,2),y("x","z","y",1,-1,e,n,-t,i,a,3),y("x","y","z",1,-1,e,t,n,i,s,4),y("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new zn(h,3)),this.setAttribute("normal",new zn(d,3)),this.setAttribute("uv",new zn(f,2));function y(E,g,x,D,A,P,V,B,N,X,ce){const T=P/N,R=V/X,J=P/2,Z=V/2,Q=B/2,ne=N+1,K=X+1;let oe=0,k=0;const ue=new O;for(let we=0;we<K;we++){const Ie=we*R-Z;for(let ut=0;ut<ne;ut++){const _t=ut*T-J;ue[E]=_t*D,ue[g]=Ie*A,ue[x]=Q,h.push(ue.x,ue.y,ue.z),ue[E]=0,ue[g]=0,ue[x]=B>0?1:-1,d.push(ue.x,ue.y,ue.z),f.push(ut/N),f.push(1-we/X),oe+=1}}for(let we=0;we<X;we++)for(let Ie=0;Ie<N;Ie++){const ut=m+Ie+ne*we,_t=m+Ie+ne*(we+1),ee=m+(Ie+1)+ne*(we+1),fe=m+(Ie+1)+ne*we;l.push(ut,_t,fe),l.push(_t,ee,fe),k+=6}o.addGroup(_,k,ce),_+=k,m+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ln(r){const e={};for(let t=0;t<r.length;t++){const n=xr(r[t]);for(const i in n)e[i]=n[i]}return e}function qf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function bh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Yf={clone:xr,merge:ln};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=qf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wh extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new O,il=new nt,rl=new nt;class un extends wh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,il,rl),t.subVectors(rl,il)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class Zf extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(tr,nr,e,t);i.layers=this.layers,this.add(i);const s=new un(tr,nr,e,t);s.layers=this.layers,this.add(s);const a=new un(tr,nr,e,t);a.layers=this.layers,this.add(a);const o=new un(tr,nr,e,t);o.layers=this.layers,this.add(o);const l=new un(tr,nr,e,t);l.layers=this.layers,this.add(l);const h=new un(tr,nr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const h of t)this.remove(h);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,h,d]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(f,m,_),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Ah extends Kt{constructor(e,t,n,i,s,a,o,l,h,d){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,n,i,s,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jf extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ah(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qr(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Ti});s.uniforms.tEquirect.value=t;const a=new en(i,s),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=xn),new Zf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ba=new O,Qf=new O,ep=new tt;class Ni{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ba.subVectors(n,t).cross(Qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ba),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ep.getNormalMatrix(e),i=this.coplanarPoint(Ba).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new kn,As=new O;class rc{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,s=new Ni,a=new Ni){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],h=i[4],d=i[5],f=i[6],m=i[7],_=i[8],y=i[9],E=i[10],g=i[11],x=i[12],D=i[13],A=i[14],P=i[15];if(n[0].setComponents(l-s,m-h,g-_,P-x).normalize(),n[1].setComponents(l+s,m+h,g+_,P+x).normalize(),n[2].setComponents(l+a,m+d,g+y,P+D).normalize(),n[3].setComponents(l-a,m-d,g-y,P-D).normalize(),n[4].setComponents(l-o,m-f,g-E,P-A).normalize(),t===ii)n[5].setComponents(l+o,m+f,g+E,P+A).normalize();else if(t===Zs)n[5].setComponents(o,f,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(As.x=i.normal.x>0?e.max.x:e.min.x,As.y=i.normal.y>0?e.max.y:e.min.y,As.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function tp(r){const e=new WeakMap;function t(o,l){const h=o.array,d=o.usage,f=h.byteLength,m=r.createBuffer();r.bindBuffer(l,m),r.bufferData(l,h,d),o.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?_=r.HALF_FLOAT:_=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,h){const d=l.array,f=l.updateRanges;if(r.bindBuffer(h,o),f.length===0)r.bufferSubData(h,0,d);else{f.sort((_,y)=>_.start-y.start);let m=0;for(let _=1;_<f.length;_++){const y=f[m],E=f[_];E.start<=y.start+y.count+1?y.count=Math.max(y.count,E.start+E.count-y.start):(++m,f[m]=E)}f.length=m+1;for(let _=0,y=f.length;_<y;_++){const E=f[_];r.bufferSubData(h,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:i,remove:s,update:a}}class es extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),h=o+1,d=l+1,f=e/o,m=t/l,_=[],y=[],E=[],g=[];for(let x=0;x<d;x++){const D=x*m-a;for(let A=0;A<h;A++){const P=A*f-s;y.push(P,-D,0),E.push(0,0,1),g.push(A/o),g.push(1-x/l)}}for(let x=0;x<l;x++)for(let D=0;D<o;D++){const A=D+h*x,P=D+h*(x+1),V=D+1+h*(x+1),B=D+1+h*x;_.push(A,P,B),_.push(P,V,B)}this.setIndex(_),this.setAttribute("position",new zn(y,3)),this.setAttribute("normal",new zn(E,3)),this.setAttribute("uv",new zn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}var np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
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
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hp=`#ifdef USE_BATCHING
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
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mp=`#ifdef USE_IRIDESCENCE
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
#endif`,_p=`#ifdef USE_BUMPMAP
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bp=`#define PI 3.141592653589793
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
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ap=`vec3 transformedNormal = objectNormal;
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
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
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
}`,Wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
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
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
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
#endif`,em=`struct PhysicalMaterial {
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
}`,tm=`
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,um=`#if defined( USE_POINTS_UV )
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
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n_=`uniform sampler2D t2D;
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`#include <common>
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
}`,c_=`#if DEPTH_PACKING == 3200
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
}`,l_=`#define DISTANCE
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
}`,h_=`#define DISTANCE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`uniform float scale;
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#include <common>
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
}`,__=`uniform vec3 diffuse;
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
}`,g_=`#define LAMBERT
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
}`,v_=`#define LAMBERT
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
}`,x_=`#define MATCAP
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
}`,y_=`#define MATCAP
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
}`,M_=`#define NORMAL
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
}`,S_=`#define NORMAL
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
}`,E_=`#define PHONG
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
}`,T_=`#define PHONG
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
}`,b_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
}`,A_=`#define TOON
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
}`,R_=`#define TOON
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
}`,C_=`uniform float size;
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#include <common>
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
}`,D_=`uniform vec3 color;
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
}`,I_=`uniform float rotation;
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
}`,N_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:rp,alphamap_pars_fragment:sp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:cp,aomap_pars_fragment:lp,batching_pars_vertex:hp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:_p,clipping_planes_fragment:gp,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:yp,color_fragment:Mp,color_pars_fragment:Sp,color_pars_vertex:Ep,color_vertex:Tp,common:bp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Rp,displacementmap_vertex:Cp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Dp,colorspace_pars_fragment:Ip,envmap_fragment:Np,envmap_common_pars_fragment:Up,envmap_pars_fragment:Fp,envmap_pars_vertex:Op,envmap_physical_pars_fragment:Yp,envmap_vertex:Bp,fog_vertex:zp,fog_pars_vertex:kp,fog_fragment:Hp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Wp,lights_lambert_fragment:Xp,lights_lambert_pars_fragment:jp,lights_pars_begin:qp,lights_toon_fragment:Kp,lights_toon_pars_fragment:$p,lights_phong_fragment:Zp,lights_phong_pars_fragment:Jp,lights_physical_fragment:Qp,lights_physical_pars_fragment:em,lights_fragment_begin:tm,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:om,map_fragment:cm,map_pars_fragment:lm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:dm,metalnessmap_pars_fragment:fm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:_m,morphtarget_pars_vertex:gm,morphtarget_vertex:vm,normal_fragment_begin:xm,normal_fragment_maps:ym,normal_pars_fragment:Mm,normal_pars_vertex:Sm,normal_vertex:Em,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Lm,project_vertex:Dm,dithering_fragment:Im,dithering_pars_fragment:Nm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:km,skinbase_vertex:Hm,skinning_pars_vertex:Gm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:jm,tonemapping_fragment:qm,tonemapping_pars_fragment:Ym,transmission_fragment:Km,transmission_pars_fragment:$m,uv_pars_fragment:Zm,uv_pars_vertex:Jm,uv_vertex:Qm,worldpos_vertex:e_,background_vert:t_,background_frag:n_,backgroundCube_vert:i_,backgroundCube_frag:r_,cube_vert:s_,cube_frag:a_,depth_vert:o_,depth_frag:c_,distanceRGBA_vert:l_,distanceRGBA_frag:h_,equirect_vert:u_,equirect_frag:d_,linedashed_vert:f_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:__,meshlambert_vert:g_,meshlambert_frag:v_,meshmatcap_vert:x_,meshmatcap_frag:y_,meshnormal_vert:M_,meshnormal_frag:S_,meshphong_vert:E_,meshphong_frag:T_,meshphysical_vert:b_,meshphysical_frag:w_,meshtoon_vert:A_,meshtoon_frag:R_,points_vert:C_,points_frag:P_,shadow_vert:L_,shadow_frag:D_,sprite_vert:I_,sprite_frag:N_},_e={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Gn={basic:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new He(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:ln([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:ln([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new He(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:ln([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:ln([_e.points,_e.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:ln([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:ln([_e.common,_e.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:ln([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:ln([_e.sprite,_e.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:ln([_e.common,_e.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:ln([_e.lights,_e.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Gn.physical={uniforms:ln([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Rs={r:0,b:0,g:0},Li=new wn,U_=new Oe;function F_(r,e,t,n,i,s,a){const o=new He(0);let l=s===!0?0:1,h,d,f=null,m=0,_=null;function y(D){let A=D.isScene===!0?D.background:null;return A&&A.isTexture&&(A=(D.backgroundBlurriness>0?t:e).get(A)),A}function E(D){let A=!1;const P=y(D);P===null?x(o,l):P&&P.isColor&&(x(P,1),A=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,a):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(D,A){const P=y(A);P&&(P.isCubeTexture||P.mapping===ta)?(d===void 0&&(d=new en(new Qr(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:xr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(V,B,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Li.copy(A.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(U_.makeRotationFromEuler(Li)),d.material.toneMapped=vt.getTransfer(P.colorSpace)!==Lt,(f!==P||m!==P.version||_!==r.toneMapping)&&(d.material.needsUpdate=!0,f=P,m=P.version,_=r.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new en(new es(2,2),new ai({name:"BackgroundMaterial",uniforms:xr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=vt.getTransfer(P.colorSpace)!==Lt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||m!==P.version||_!==r.toneMapping)&&(h.material.needsUpdate=!0,f=P,m=P.version,_=r.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function x(D,A){D.getRGB(Rs,bh(r)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(D,A=1){o.set(D),l=A,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(D){l=D,x(o,l)},render:E,addToRenderList:g}}function O_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,a=!1;function o(T,R,J,Z,Q){let ne=!1;const K=f(Z,J,R);s!==K&&(s=K,h(s.object)),ne=_(T,Z,J,Q),ne&&y(T,Z,J,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,P(T,R,J,Z),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return r.createVertexArray()}function h(T){return r.bindVertexArray(T)}function d(T){return r.deleteVertexArray(T)}function f(T,R,J){const Z=J.wireframe===!0;let Q=n[T.id];Q===void 0&&(Q={},n[T.id]=Q);let ne=Q[R.id];ne===void 0&&(ne={},Q[R.id]=ne);let K=ne[Z];return K===void 0&&(K=m(l()),ne[Z]=K),K}function m(T){const R=[],J=[],Z=[];for(let Q=0;Q<t;Q++)R[Q]=0,J[Q]=0,Z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:J,attributeDivisors:Z,object:T,attributes:{},index:null}}function _(T,R,J,Z){const Q=s.attributes,ne=R.attributes;let K=0;const oe=J.getAttributes();for(const k in oe)if(oe[k].location>=0){const we=Q[k];let Ie=ne[k];if(Ie===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(Ie=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(Ie=T.instanceColor)),we===void 0||we.attribute!==Ie||Ie&&we.data!==Ie.data)return!0;K++}return s.attributesNum!==K||s.index!==Z}function y(T,R,J,Z){const Q={},ne=R.attributes;let K=0;const oe=J.getAttributes();for(const k in oe)if(oe[k].location>=0){let we=ne[k];we===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(we=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(we=T.instanceColor));const Ie={};Ie.attribute=we,we&&we.data&&(Ie.data=we.data),Q[k]=Ie,K++}s.attributes=Q,s.attributesNum=K,s.index=Z}function E(){const T=s.newAttributes;for(let R=0,J=T.length;R<J;R++)T[R]=0}function g(T){x(T,0)}function x(T,R){const J=s.newAttributes,Z=s.enabledAttributes,Q=s.attributeDivisors;J[T]=1,Z[T]===0&&(r.enableVertexAttribArray(T),Z[T]=1),Q[T]!==R&&(r.vertexAttribDivisor(T,R),Q[T]=R)}function D(){const T=s.newAttributes,R=s.enabledAttributes;for(let J=0,Z=R.length;J<Z;J++)R[J]!==T[J]&&(r.disableVertexAttribArray(J),R[J]=0)}function A(T,R,J,Z,Q,ne,K){K===!0?r.vertexAttribIPointer(T,R,J,Q,ne):r.vertexAttribPointer(T,R,J,Z,Q,ne)}function P(T,R,J,Z){E();const Q=Z.attributes,ne=J.getAttributes(),K=R.defaultAttributeValues;for(const oe in ne){const k=ne[oe];if(k.location>=0){let ue=Q[oe];if(ue===void 0&&(oe==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),oe==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor)),ue!==void 0){const we=ue.normalized,Ie=ue.itemSize,ut=e.get(ue);if(ut===void 0)continue;const _t=ut.buffer,ee=ut.type,fe=ut.bytesPerElement,Pe=ee===r.INT||ee===r.UNSIGNED_INT||ue.gpuType===$r;if(ue.isInterleavedBufferAttribute){const Ae=ue.data,Ze=Ae.stride,Xe=ue.offset;if(Ae.isInstancedInterleavedBuffer){for(let ot=0;ot<k.locationSize;ot++)x(k.location+ot,Ae.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let ot=0;ot<k.locationSize;ot++)g(k.location+ot);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let ot=0;ot<k.locationSize;ot++)A(k.location+ot,Ie/k.locationSize,ee,we,Ze*fe,(Xe+Ie/k.locationSize*ot)*fe,Pe)}else{if(ue.isInstancedBufferAttribute){for(let Ae=0;Ae<k.locationSize;Ae++)x(k.location+Ae,ue.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ae=0;Ae<k.locationSize;Ae++)g(k.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let Ae=0;Ae<k.locationSize;Ae++)A(k.location+Ae,Ie/k.locationSize,ee,we,Ie*fe,Ie/k.locationSize*Ae*fe,Pe)}}else if(K!==void 0){const we=K[oe];if(we!==void 0)switch(we.length){case 2:r.vertexAttrib2fv(k.location,we);break;case 3:r.vertexAttrib3fv(k.location,we);break;case 4:r.vertexAttrib4fv(k.location,we);break;default:r.vertexAttrib1fv(k.location,we)}}}}D()}function V(){X();for(const T in n){const R=n[T];for(const J in R){const Z=R[J];for(const Q in Z)d(Z[Q].object),delete Z[Q];delete R[J]}delete n[T]}}function B(T){if(n[T.id]===void 0)return;const R=n[T.id];for(const J in R){const Z=R[J];for(const Q in Z)d(Z[Q].object),delete Z[Q];delete R[J]}delete n[T.id]}function N(T){for(const R in n){const J=n[R];if(J[T.id]===void 0)continue;const Z=J[T.id];for(const Q in Z)d(Z[Q].object),delete Z[Q];delete J[T.id]}}function X(){ce(),a=!0,s!==i&&(s=i,h(s.object))}function ce(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:X,resetDefaultState:ce,dispose:V,releaseStatesOfGeometry:B,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:g,disableUnusedAttributes:D}}function B_(r,e,t){let n;function i(h){n=h}function s(h,d){r.drawArrays(n,h,d),t.update(d,n,1)}function a(h,d,f){f!==0&&(r.drawArraysInstanced(n,h,d,f),t.update(d,n,f))}function o(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,f);let _=0;for(let y=0;y<f;y++)_+=d[y];t.update(_,n,1)}function l(h,d,f,m){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<h.length;y++)a(h[y],d[y],m[y]);else{_.multiDrawArraysInstancedWEBGL(n,h,0,d,0,m,0,f);let y=0;for(let E=0;E<f;E++)y+=d[E];for(let E=0;E<m.length;E++)t.update(y,n,m[E])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function z_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(N){return!(N!==Tn&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const X=N===Zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==si&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==On&&!X)}function l(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const f=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(m===!0){const N=e.get("EXT_clip_control");N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT)}const _=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=y>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:m,maxTextures:_,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:D,maxVaryings:A,maxFragmentUniforms:P,vertexTextures:V,maxSamples:B}}function k_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ni,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const _=f.length!==0||m||n!==0||i;return i=m,n=f.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,m){t=d(f,m,0)},this.setState=function(f,m,_){const y=f.clippingPlanes,E=f.clipIntersection,g=f.clipShadows,x=r.get(f);if(!i||y===null||y.length===0||s&&!g)s?d(null):h();else{const D=s?0:n,A=D*4;let P=x.clippingState||null;l.value=P,P=d(y,m,A,_);for(let V=0;V!==A;++V)P[V]=t[V];x.clippingState=P,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,m,_,y){const E=f!==null?f.length:0;let g=null;if(E!==0){if(g=l.value,y!==!0||g===null){const x=_+E*4,D=m.matrixWorldInverse;o.getNormalMatrix(D),(g===null||g.length<x)&&(g=new Float32Array(x));for(let A=0,P=_;A!==E;++A,P+=4)a.copy(f[A]).applyMatrix4(D,o),a.normal.toArray(g,P),g[P+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}function H_(r){let e=new WeakMap;function t(a,o){return o===ho?a.mapping=fr:o===uo&&(a.mapping=pr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ho||o===uo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new Jf(l.height);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class sc extends wh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sr=4,sl=[.125,.215,.35,.446,.526,.582],Oi=20,za=new sc,al=new He;let ka=null,Ha=0,Ga=0,Va=!1;const Ui=(1+Math.sqrt(5))/2,ir=1/Ui,ol=[new O(-Ui,ir,0),new O(Ui,ir,0),new O(-ir,0,Ui),new O(ir,0,Ui),new O(0,Ui,-ir),new O(0,Ui,ir),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class cl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ka=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,Ha,Ga),this._renderer.xr.enabled=Va,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Zr,format:Tn,colorSpace:nn,depthBuffer:!1},i=ll(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G_(s)),this._blurMaterial=V_(s,e,t)}return i}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,i){const o=new un(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(al),d.toneMapping=bi,d.autoClear=!1;const _=new Bi({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),y=new en(new Qr,_);let E=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,E=!0):(_.color.copy(al),E=!0);for(let x=0;x<6;x++){const D=x%3;D===0?(o.up.set(0,l[x],0),o.lookAt(h[x],0,0)):D===1?(o.up.set(0,0,l[x]),o.lookAt(0,h[x],0)):(o.up.set(0,l[x],0),o.lookAt(0,0,h[x]));const A=this._cubeSize;Cs(i,D*A,x>2?A:0,A,A),d.setRenderTarget(i),E&&d.render(y,o),d.render(e,o)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fr||e.mapping===pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ol[(i-s-1)%ol.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new en(this._lodPlanes[i],h),m=h.uniforms,_=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Oi-1),E=s/y,g=isFinite(s)?1+Math.floor(d*E):Oi;g>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Oi}`);const x=[];let D=0;for(let N=0;N<Oi;++N){const X=N/E,ce=Math.exp(-X*X/2);x.push(ce),N===0?D+=ce:N<g&&(D+=2*ce)}for(let N=0;N<x.length;N++)x[N]=x[N]/D;m.envMap.value=e.texture,m.samples.value=g,m.weights.value=x,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:A}=this;m.dTheta.value=y,m.mipInt.value=A-n;const P=this._sizeLods[i],V=3*P*(i>A-sr?i-A+sr:0),B=4*(this._cubeSize-P);Cs(t,V,B,3*P,2*P),l.setRenderTarget(t),l.render(f,za)}}function G_(r){const e=[],t=[],n=[];let i=r;const s=r-sr+1+sl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-sr?l=sl[a-r+sr-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),d=-h,f=1+h,m=[d,d,f,d,f,f,d,d,f,f,d,f],_=6,y=6,E=3,g=2,x=1,D=new Float32Array(E*y*_),A=new Float32Array(g*y*_),P=new Float32Array(x*y*_);for(let B=0;B<_;B++){const N=B%3*2/3-1,X=B>2?0:-1,ce=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];D.set(ce,E*y*B),A.set(m,g*y*B);const T=[B,B,B,B,B,B];P.set(T,x*y*B)}const V=new tn;V.setAttribute("position",new $t(D,E)),V.setAttribute("uv",new $t(A,g)),V.setAttribute("faceIndex",new $t(P,x)),e.push(V),i>sr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ll(r,e,t){const n=new wi(r,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function V_(r,e,t){const n=new Float32Array(Oi),i=new O(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hl(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ul(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function W_(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===ho||l===uo,d=l===fr||l===pr;if(h||d){let f=e.get(o);const m=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new cl(r)),f=h?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const _=o.image;return h&&_&&_.height>0||d&&_&&i(_)?(t===null&&(t=new cl(r)),f=h?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const h=6;for(let d=0;d<h;d++)o[d]!==void 0&&l++;return l===h}function s(o){const l=o.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function X_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function j_(r,e,t,n){const i={},s=new WeakMap;function a(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const E=m.morphAttributes[y];for(let g=0,x=E.length;g<x;g++)e.remove(E[g])}m.removeEventListener("dispose",a),delete i[m.id];const _=s.get(m);_&&(e.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(f,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,t.memory.geometries++),m}function l(f){const m=f.attributes;for(const y in m)e.update(m[y],r.ARRAY_BUFFER);const _=f.morphAttributes;for(const y in _){const E=_[y];for(let g=0,x=E.length;g<x;g++)e.update(E[g],r.ARRAY_BUFFER)}}function h(f){const m=[],_=f.index,y=f.attributes.position;let E=0;if(_!==null){const D=_.array;E=_.version;for(let A=0,P=D.length;A<P;A+=3){const V=D[A+0],B=D[A+1],N=D[A+2];m.push(V,B,B,N,N,V)}}else if(y!==void 0){const D=y.array;E=y.version;for(let A=0,P=D.length/3-1;A<P;A+=3){const V=A+0,B=A+1,N=A+2;m.push(V,B,B,N,N,V)}}else return;const g=new(xh(m)?Th:Eh)(m,1);g.version=E;const x=s.get(f);x&&e.remove(x),s.set(f,g)}function d(f){const m=s.get(f);if(m){const _=f.index;_!==null&&m.version<_.version&&h(f)}else h(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function q_(r,e,t){let n;function i(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,_){r.drawElements(n,_,s,m*a),t.update(_,n,1)}function h(m,_,y){y!==0&&(r.drawElementsInstanced(n,_,s,m*a,y),t.update(_,n,y))}function d(m,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,m,0,y);let g=0;for(let x=0;x<y;x++)g+=_[x];t.update(g,n,1)}function f(m,_,y,E){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<m.length;x++)h(m[x]/a,_[x],E[x]);else{g.multiDrawElementsInstancedWEBGL(n,_,0,s,m,0,E,0,y);let x=0;for(let D=0;D<y;D++)x+=_[D];for(let D=0;D<E.length;D++)t.update(x,n,E[D])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Y_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function K_(r,e,t){const n=new WeakMap,i=new Mt;function s(a,o,l){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let m=n.get(o);if(m===void 0||m.count!==f){let T=function(){X.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var _=T;m!==void 0&&m.texture.dispose();const y=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],D=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let P=0;y===!0&&(P=1),E===!0&&(P=2),g===!0&&(P=3);let V=o.attributes.position.count*P,B=1;V>e.maxTextureSize&&(B=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const N=new Float32Array(V*B*4*f),X=new Mh(N,V,B,f);X.type=On,X.needsUpdate=!0;const ce=P*4;for(let R=0;R<f;R++){const J=x[R],Z=D[R],Q=A[R],ne=V*B*4*R;for(let K=0;K<J.count;K++){const oe=K*ce;y===!0&&(i.fromBufferAttribute(J,K),N[ne+oe+0]=i.x,N[ne+oe+1]=i.y,N[ne+oe+2]=i.z,N[ne+oe+3]=0),E===!0&&(i.fromBufferAttribute(Z,K),N[ne+oe+4]=i.x,N[ne+oe+5]=i.y,N[ne+oe+6]=i.z,N[ne+oe+7]=0),g===!0&&(i.fromBufferAttribute(Q,K),N[ne+oe+8]=i.x,N[ne+oe+9]=i.y,N[ne+oe+10]=i.z,N[ne+oe+11]=Q.itemSize===4?i.w:1)}}m={count:f,texture:X,size:new nt(V,B)},n.set(o,m),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let y=0;for(let g=0;g<h.length;g++)y+=h[g];const E=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(r,"morphTargetBaseInfluence",E),l.getUniforms().setValue(r,"morphTargetInfluences",h)}l.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function $_(r,e,t,n){let i=new WeakMap;function s(l){const h=n.render.frame,d=l.geometry,f=e.get(l,d);if(i.get(f)!==h&&(e.update(f),i.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return f}function a(){i=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class Ch extends Kt{constructor(e,t,n,i,s,a,o,l,h,d=or){if(d!==or&&d!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===or&&(n=zi),n===void 0&&d===gr&&(n=_r),super(null,i,s,a,o,l,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ph=new Kt,dl=new Ch(1,1),Lh=new Mh,Dh=new Uf,Ih=new Ah,fl=[],pl=[],ml=new Float32Array(16),_l=new Float32Array(9),gl=new Float32Array(4);function Er(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=fl[i];if(s===void 0&&(s=new Float32Array(i),fl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Gt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Vt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function sa(r,e){let t=pl[e];t===void 0&&(t=new Int32Array(e),pl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Z_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function J_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2fv(this.addr,e),Vt(t,e)}}function Q_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;r.uniform3fv(this.addr,e),Vt(t,e)}}function eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4fv(this.addr,e),Vt(t,e)}}function tg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;gl.set(n),r.uniformMatrix2fv(this.addr,!1,gl),Vt(t,n)}}function ng(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;_l.set(n),r.uniformMatrix3fv(this.addr,!1,_l),Vt(t,n)}}function ig(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;ml.set(n),r.uniformMatrix4fv(this.addr,!1,ml),Vt(t,n)}}function rg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2iv(this.addr,e),Vt(t,e)}}function ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3iv(this.addr,e),Vt(t,e)}}function og(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4iv(this.addr,e),Vt(t,e)}}function cg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function lg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2uiv(this.addr,e),Vt(t,e)}}function hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3uiv(this.addr,e),Vt(t,e)}}function ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4uiv(this.addr,e),Vt(t,e)}}function dg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(dl.compareFunction=vh,s=dl):s=Ph,t.setTexture2D(e||s,i)}function fg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dh,i)}function pg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ih,i)}function mg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lh,i)}function _g(r){switch(r){case 5126:return Z_;case 35664:return J_;case 35665:return Q_;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return rg;case 35667:case 35671:return sg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return cg;case 36294:return lg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function gg(r,e){r.uniform1fv(this.addr,e)}function vg(r,e){const t=Er(e,this.size,2);r.uniform2fv(this.addr,t)}function xg(r,e){const t=Er(e,this.size,3);r.uniform3fv(this.addr,t)}function yg(r,e){const t=Er(e,this.size,4);r.uniform4fv(this.addr,t)}function Mg(r,e){const t=Er(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Sg(r,e){const t=Er(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Eg(r,e){const t=Er(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Tg(r,e){r.uniform1iv(this.addr,e)}function bg(r,e){r.uniform2iv(this.addr,e)}function wg(r,e){r.uniform3iv(this.addr,e)}function Ag(r,e){r.uniform4iv(this.addr,e)}function Rg(r,e){r.uniform1uiv(this.addr,e)}function Cg(r,e){r.uniform2uiv(this.addr,e)}function Pg(r,e){r.uniform3uiv(this.addr,e)}function Lg(r,e){r.uniform4uiv(this.addr,e)}function Dg(r,e,t){const n=this.cache,i=e.length,s=sa(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ph,s[a])}function Ig(r,e,t){const n=this.cache,i=e.length,s=sa(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Dh,s[a])}function Ng(r,e,t){const n=this.cache,i=e.length,s=sa(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ih,s[a])}function Ug(r,e,t){const n=this.cache,i=e.length,s=sa(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Lh,s[a])}function Fg(r){switch(r){case 5126:return gg;case 35664:return vg;case 35665:return xg;case 35666:return yg;case 35674:return Mg;case 35675:return Sg;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return bg;case 35668:case 35672:return wg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Ug}}class Og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_g(t.type)}}class Bg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fg(t.type)}}class zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function vl(r,e){r.seq.push(e),r.map[e.id]=e}function kg(r,e,t){const n=r.name,i=n.length;for(Wa.lastIndex=0;;){const s=Wa.exec(n),a=Wa.lastIndex;let o=s[1];const l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===i){vl(t,h===void 0?new Og(o,r,e):new Bg(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new zg(o),vl(t,f)),t=f}}}class Xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);kg(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function xl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Hg=37297;let Gg=0;function Vg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Wg(r){const e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(r);let n;switch(e===t?n="":e===$s&&t===Ks?n="LinearDisplayP3ToLinearSRGB":e===Ks&&t===$s&&(n="LinearSRGBToLinearDisplayP3"),r){case nn:case ra:return[n,"LinearTransferOETF"];case hn:case tc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function yl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Vg(r.getShaderSource(e),a)}else return i}function Xg(r,e){const t=Wg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jg(r,e){let t;switch(e){case Vd:t="Linear";break;case Wd:t="Reinhard";break;case Xd:t="Cineon";break;case jd:t="ACESFilmic";break;case Yd:t="AgX";break;case Kd:t="Neutral";break;case qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ps=new O;function qg(){vt.getLuminanceCoefficients(Ps);const r=Ps.x.toFixed(4),e=Ps.y.toFixed(4),t=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function Kg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $g(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Gr(r){return r!==""}function Ml(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(r){return r.replace(Zg,Qg)}const Jg=new Map;function Qg(r,e){let t=et[e];if(t===void 0){const n=Jg.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Go(t)}const ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(r){return r.replace(ev,tv)}function tv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Tl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===sh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function iv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fr:case pr:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function sv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ea:e="ENVMAP_BLENDING_MULTIPLY";break;case Hd:e="ENVMAP_BLENDING_MIX";break;case Gd:e="ENVMAP_BLENDING_ADD";break}return e}function av(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ov(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=nv(t),h=iv(t),d=rv(t),f=sv(t),m=av(t),_=Yg(t),y=Kg(s),E=i.createProgram();let g,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Gr).join(`
`),g.length>0&&(g+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Gr).join(`
`),x.length>0&&(x+=`
`)):(g=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),x=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?et.tonemapping_pars_fragment:"",t.toneMapping!==bi?jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Xg("linearToOutputTexel",t.outputColorSpace),qg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),a=Go(a),a=Ml(a,t),a=Sl(a,t),o=Go(o),o=Ml(o,t),o=Sl(o,t),a=El(a),o=El(o),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["#define varying in",t.glslVersion===Ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const A=D+g+a,P=D+x+o,V=xl(i,i.VERTEX_SHADER,A),B=xl(i,i.FRAGMENT_SHADER,P);i.attachShader(E,V),i.attachShader(E,B),t.index0AttributeName!==void 0?i.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(E,0,"position"),i.linkProgram(E);function N(R){if(r.debug.checkShaderErrors){const J=i.getProgramInfoLog(E).trim(),Z=i.getShaderInfoLog(V).trim(),Q=i.getShaderInfoLog(B).trim();let ne=!0,K=!0;if(i.getProgramParameter(E,i.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,E,V,B);else{const oe=yl(i,V,"vertex"),k=yl(i,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(E,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+J+`
`+oe+`
`+k)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Z===""||Q==="")&&(K=!1);K&&(R.diagnostics={runnable:ne,programLog:J,vertexShader:{log:Z,prefix:g},fragmentShader:{log:Q,prefix:x}})}i.deleteShader(V),i.deleteShader(B),X=new Xs(i,E),ce=$g(i,E)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let ce;this.getAttributes=function(){return ce===void 0&&N(this),ce};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(E,Hg)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gg++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=V,this.fragmentShader=B,this}let cv=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hv(e),t.set(e,n)),n}}class hv{constructor(e){this.id=cv++,this.code=e,this.usedTimes=0}}function uv(r,e,t,n,i,s,a){const o=new ic,l=new lv,h=new Set,d=[],f=i.logarithmicDepthBuffer,m=i.reverseDepthBuffer,_=i.vertexTextures;let y=i.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return h.add(T),T===0?"uv":`uv${T}`}function x(T,R,J,Z,Q){const ne=Z.fog,K=Q.geometry,oe=T.isMeshStandardMaterial?Z.environment:null,k=(T.isMeshStandardMaterial?t:e).get(T.envMap||oe),ue=k&&k.mapping===ta?k.image.height:null,we=E[T.type];T.precision!==null&&(y=i.getMaxPrecision(T.precision),y!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const Ie=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ut=Ie!==void 0?Ie.length:0;let _t=0;K.morphAttributes.position!==void 0&&(_t=1),K.morphAttributes.normal!==void 0&&(_t=2),K.morphAttributes.color!==void 0&&(_t=3);let ee,fe,Pe,Ae;if(we){const Zt=Gn[we];ee=Zt.vertexShader,fe=Zt.fragmentShader}else ee=T.vertexShader,fe=T.fragmentShader,l.update(T),Pe=l.getVertexShaderID(T),Ae=l.getFragmentShaderID(T);const Ze=r.getRenderTarget(),Xe=Q.isInstancedMesh===!0,ot=Q.isBatchedMesh===!0,St=!!T.map,ct=!!T.matcap,F=!!k,kt=!!T.aoMap,lt=!!T.lightMap,rt=!!T.bumpMap,Ge=!!T.normalMap,xt=!!T.displacementMap,Ke=!!T.emissiveMap,L=!!T.metalnessMap,b=!!T.roughnessMap,W=T.anisotropy>0,ie=T.clearcoat>0,le=T.dispersion>0,te=T.iridescence>0,Fe=T.sheen>0,ge=T.transmission>0,Re=W&&!!T.anisotropyMap,Se=ie&&!!T.clearcoatMap,ae=ie&&!!T.clearcoatNormalMap,Ce=ie&&!!T.clearcoatRoughnessMap,Ve=te&&!!T.iridescenceMap,qe=te&&!!T.iridescenceThicknessMap,de=Fe&&!!T.sheenColorMap,st=Fe&&!!T.sheenRoughnessMap,$e=!!T.specularMap,at=!!T.specularColorMap,z=!!T.specularIntensityMap,ve=ge&&!!T.transmissionMap,$=ge&&!!T.thicknessMap,re=!!T.gradientMap,xe=!!T.alphaMap,ye=T.alphaTest>0,ht=!!T.alphaHash,At=!!T.extensions;let rn=bi;T.toneMapped&&(Ze===null||Ze.isXRRenderTarget===!0)&&(rn=r.toneMapping);const ft={shaderID:we,shaderType:T.type,shaderName:T.name,vertexShader:ee,fragmentShader:fe,defines:T.defines,customVertexShaderID:Pe,customFragmentShaderID:Ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:ot,batchingColor:ot&&Q._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&Q.instanceColor!==null,instancingMorph:Xe&&Q.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Ze===null?r.outputColorSpace:Ze.isXRRenderTarget===!0?Ze.texture.colorSpace:nn,alphaToCoverage:!!T.alphaToCoverage,map:St,matcap:ct,envMap:F,envMapMode:F&&k.mapping,envMapCubeUVHeight:ue,aoMap:kt,lightMap:lt,bumpMap:rt,normalMap:Ge,displacementMap:_&&xt,emissiveMap:Ke,normalMapObjectSpace:Ge&&T.normalMapType===tf,normalMapTangentSpace:Ge&&T.normalMapType===ia,metalnessMap:L,roughnessMap:b,anisotropy:W,anisotropyMap:Re,clearcoat:ie,clearcoatMap:Se,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ce,dispersion:le,iridescence:te,iridescenceMap:Ve,iridescenceThicknessMap:qe,sheen:Fe,sheenColorMap:de,sheenRoughnessMap:st,specularMap:$e,specularColorMap:at,specularIntensityMap:z,transmission:ge,transmissionMap:ve,thicknessMap:$,gradientMap:re,opaque:T.transparent===!1&&T.blending===ar&&T.alphaToCoverage===!1,alphaMap:xe,alphaTest:ye,alphaHash:ht,combine:T.combine,mapUv:St&&g(T.map.channel),aoMapUv:kt&&g(T.aoMap.channel),lightMapUv:lt&&g(T.lightMap.channel),bumpMapUv:rt&&g(T.bumpMap.channel),normalMapUv:Ge&&g(T.normalMap.channel),displacementMapUv:xt&&g(T.displacementMap.channel),emissiveMapUv:Ke&&g(T.emissiveMap.channel),metalnessMapUv:L&&g(T.metalnessMap.channel),roughnessMapUv:b&&g(T.roughnessMap.channel),anisotropyMapUv:Re&&g(T.anisotropyMap.channel),clearcoatMapUv:Se&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:st&&g(T.sheenRoughnessMap.channel),specularMapUv:$e&&g(T.specularMap.channel),specularColorMapUv:at&&g(T.specularColorMap.channel),specularIntensityMapUv:z&&g(T.specularIntensityMap.channel),transmissionMapUv:ve&&g(T.transmissionMap.channel),thicknessMapUv:$&&g(T.thicknessMap.channel),alphaMapUv:xe&&g(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ge||W),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!K.attributes.uv&&(St||xe),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:m,skinning:Q.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:_t,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&J.length>0,shadowMapType:r.shadowMap.type,toneMapping:rn,decodeVideoTexture:St&&T.map.isVideoTexture===!0&&vt.getTransfer(T.map.colorSpace)===Lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Nn,flipSided:T.side===fn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:At&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&T.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ft.vertexUv1s=h.has(1),ft.vertexUv2s=h.has(2),ft.vertexUv3s=h.has(3),h.clear(),ft}function D(T){const R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(const J in T.defines)R.push(J),R.push(T.defines[J]);return T.isRawShaderMaterial===!1&&(A(R,T),P(R,T),R.push(r.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function A(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function P(T,R){o.disableAll(),R.supportsVertexTextures&&o.enable(0),R.instancing&&o.enable(1),R.instancingColor&&o.enable(2),R.instancingMorph&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),R.dispersion&&o.enable(20),R.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reverseDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),T.push(o.mask)}function V(T){const R=E[T.type];let J;if(R){const Z=Gn[R];J=Yf.clone(Z.uniforms)}else J=T.uniforms;return J}function B(T,R){let J;for(let Z=0,Q=d.length;Z<Q;Z++){const ne=d[Z];if(ne.cacheKey===R){J=ne,++J.usedTimes;break}}return J===void 0&&(J=new ov(r,R,T,s),d.push(J)),J}function N(T){if(--T.usedTimes===0){const R=d.indexOf(T);d[R]=d[d.length-1],d.pop(),T.destroy()}}function X(T){l.remove(T)}function ce(){l.dispose()}return{getParameters:x,getProgramCacheKey:D,getUniforms:V,acquireProgram:B,releaseProgram:N,releaseShaderCache:X,programs:d,dispose:ce}}function dv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function fv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function bl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,m,_,y,E,g){let x=r[e];return x===void 0?(x={id:f.id,object:f,geometry:m,material:_,groupOrder:y,renderOrder:f.renderOrder,z:E,group:g},r[e]=x):(x.id=f.id,x.object=f,x.geometry=m,x.material=_,x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=E,x.group=g),e++,x}function o(f,m,_,y,E,g){const x=a(f,m,_,y,E,g);_.transmission>0?n.push(x):_.transparent===!0?i.push(x):t.push(x)}function l(f,m,_,y,E,g){const x=a(f,m,_,y,E,g);_.transmission>0?n.unshift(x):_.transparent===!0?i.unshift(x):t.unshift(x)}function h(f,m){t.length>1&&t.sort(f||fv),n.length>1&&n.sort(m||bl),i.length>1&&i.sort(m||bl)}function d(){for(let f=e,m=r.length;f<m;f++){const _=r[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:d,sort:h}}function pv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new wl,r.set(n,[a])):i>=s.length?(a=new wl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function mv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new He};break;case"SpotLight":t={position:new O,direction:new O,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function _v(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let gv=0;function vv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function xv(r){const e=new mv,t=_v(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new O);const i=new O,s=new Oe,a=new Oe;function o(h){let d=0,f=0,m=0;for(let ce=0;ce<9;ce++)n.probe[ce].set(0,0,0);let _=0,y=0,E=0,g=0,x=0,D=0,A=0,P=0,V=0,B=0,N=0;h.sort(vv);for(let ce=0,T=h.length;ce<T;ce++){const R=h[ce],J=R.color,Z=R.intensity,Q=R.distance,ne=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=J.r*Z,f+=J.g*Z,m+=J.b*Z;else if(R.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(R.sh.coefficients[K],Z);N++}else if(R.isDirectionalLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const oe=R.shadow,k=t.get(R);k.shadowIntensity=oe.intensity,k.shadowBias=oe.bias,k.shadowNormalBias=oe.normalBias,k.shadowRadius=oe.radius,k.shadowMapSize=oe.mapSize,n.directionalShadow[_]=k,n.directionalShadowMap[_]=ne,n.directionalShadowMatrix[_]=R.shadow.matrix,D++}n.directional[_]=K,_++}else if(R.isSpotLight){const K=e.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(J).multiplyScalar(Z),K.distance=Q,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,n.spot[E]=K;const oe=R.shadow;if(R.map&&(n.spotLightMap[V]=R.map,V++,oe.updateMatrices(R),R.castShadow&&B++),n.spotLightMatrix[E]=oe.matrix,R.castShadow){const k=t.get(R);k.shadowIntensity=oe.intensity,k.shadowBias=oe.bias,k.shadowNormalBias=oe.normalBias,k.shadowRadius=oe.radius,k.shadowMapSize=oe.mapSize,n.spotShadow[E]=k,n.spotShadowMap[E]=ne,P++}E++}else if(R.isRectAreaLight){const K=e.get(R);K.color.copy(J).multiplyScalar(Z),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=K,g++}else if(R.isPointLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),K.distance=R.distance,K.decay=R.decay,R.castShadow){const oe=R.shadow,k=t.get(R);k.shadowIntensity=oe.intensity,k.shadowBias=oe.bias,k.shadowNormalBias=oe.normalBias,k.shadowRadius=oe.radius,k.shadowMapSize=oe.mapSize,k.shadowCameraNear=oe.camera.near,k.shadowCameraFar=oe.camera.far,n.pointShadow[y]=k,n.pointShadowMap[y]=ne,n.pointShadowMatrix[y]=R.shadow.matrix,A++}n.point[y]=K,y++}else if(R.isHemisphereLight){const K=e.get(R);K.skyColor.copy(R.color).multiplyScalar(Z),K.groundColor.copy(R.groundColor).multiplyScalar(Z),n.hemi[x]=K,x++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;const X=n.hash;(X.directionalLength!==_||X.pointLength!==y||X.spotLength!==E||X.rectAreaLength!==g||X.hemiLength!==x||X.numDirectionalShadows!==D||X.numPointShadows!==A||X.numSpotShadows!==P||X.numSpotMaps!==V||X.numLightProbes!==N)&&(n.directional.length=_,n.spot.length=E,n.rectArea.length=g,n.point.length=y,n.hemi.length=x,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=P+V-B,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=N,X.directionalLength=_,X.pointLength=y,X.spotLength=E,X.rectAreaLength=g,X.hemiLength=x,X.numDirectionalShadows=D,X.numPointShadows=A,X.numSpotShadows=P,X.numSpotMaps=V,X.numLightProbes=N,n.version=gv++)}function l(h,d){let f=0,m=0,_=0,y=0,E=0;const g=d.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const A=h[x];if(A.isDirectionalLight){const P=n.directional[f];P.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(i),P.direction.transformDirection(g),f++}else if(A.isSpotLight){const P=n.spot[_];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(g),P.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(i),P.direction.transformDirection(g),_++}else if(A.isRectAreaLight){const P=n.rectArea[y];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(g),a.identity(),s.copy(A.matrixWorld),s.premultiply(g),a.extractRotation(s),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),y++}else if(A.isPointLight){const P=n.point[m];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(g),m++}else if(A.isHemisphereLight){const P=n.hemi[E];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:n}}function Al(r){const e=new xv(r),t=[],n=[];function i(d){h.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function yv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Al(r),e.set(i,[o])):s>=a.length?(o=new Al(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Mv extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sv extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
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
}`;function bv(r,e,t){let n=new rc;const i=new nt,s=new nt,a=new Mt,o=new Mv({depthPacking:ef}),l=new Sv,h={},d=t.maxTextureSize,f={[ri]:fn,[fn]:ri,[Nn]:Nn},m=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Ev,fragmentShader:Tv}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const y=new tn;y.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new en(y,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sh;let x=this.type;this.render=function(B,N,X){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||B.length===0)return;const ce=r.getRenderTarget(),T=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Ti),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Z=x!==ei&&this.type===ei,Q=x===ei&&this.type!==ei;for(let ne=0,K=B.length;ne<K;ne++){const oe=B[ne],k=oe.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const ue=k.getFrameExtents();if(i.multiply(ue),s.copy(k.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/ue.x),i.x=s.x*ue.x,k.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/ue.y),i.y=s.y*ue.y,k.mapSize.y=s.y)),k.map===null||Z===!0||Q===!0){const Ie=this.type!==ei?{minFilter:dn,magFilter:dn}:{};k.map!==null&&k.map.dispose(),k.map=new wi(i.x,i.y,Ie),k.map.texture.name=oe.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const we=k.getViewportCount();for(let Ie=0;Ie<we;Ie++){const ut=k.getViewport(Ie);a.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),J.viewport(a),k.updateMatrices(oe,Ie),n=k.getFrustum(),P(N,X,k.camera,oe,this.type)}k.isPointLightShadow!==!0&&this.type===ei&&D(k,X),k.needsUpdate=!1}x=this.type,g.needsUpdate=!1,r.setRenderTarget(ce,T,R)};function D(B,N){const X=e.update(E);m.defines.VSM_SAMPLES!==B.blurSamples&&(m.defines.VSM_SAMPLES=B.blurSamples,_.defines.VSM_SAMPLES=B.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new wi(i.x,i.y)),m.uniforms.shadow_pass.value=B.map.texture,m.uniforms.resolution.value=B.mapSize,m.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(N,null,X,m,E,null),_.uniforms.shadow_pass.value=B.mapPass.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(N,null,X,_,E,null)}function A(B,N,X,ce){let T=null;const R=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(R!==void 0)T=R;else if(T=X.isPointLight===!0?l:o,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const J=T.uuid,Z=N.uuid;let Q=h[J];Q===void 0&&(Q={},h[J]=Q);let ne=Q[Z];ne===void 0&&(ne=T.clone(),Q[Z]=ne,N.addEventListener("dispose",V)),T=ne}if(T.visible=N.visible,T.wireframe=N.wireframe,ce===ei?T.side=N.shadowSide!==null?N.shadowSide:N.side:T.side=N.shadowSide!==null?N.shadowSide:f[N.side],T.alphaMap=N.alphaMap,T.alphaTest=N.alphaTest,T.map=N.map,T.clipShadows=N.clipShadows,T.clippingPlanes=N.clippingPlanes,T.clipIntersection=N.clipIntersection,T.displacementMap=N.displacementMap,T.displacementScale=N.displacementScale,T.displacementBias=N.displacementBias,T.wireframeLinewidth=N.wireframeLinewidth,T.linewidth=N.linewidth,X.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const J=r.properties.get(T);J.light=X}return T}function P(B,N,X,ce,T){if(B.visible===!1)return;if(B.layers.test(N.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&T===ei)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const Z=e.update(B),Q=B.material;if(Array.isArray(Q)){const ne=Z.groups;for(let K=0,oe=ne.length;K<oe;K++){const k=ne[K],ue=Q[k.materialIndex];if(ue&&ue.visible){const we=A(B,ue,ce,T);B.onBeforeShadow(r,B,N,X,Z,we,k),r.renderBufferDirect(X,null,Z,we,B,k),B.onAfterShadow(r,B,N,X,Z,we,k)}}}else if(Q.visible){const ne=A(B,Q,ce,T);B.onBeforeShadow(r,B,N,X,Z,ne,null),r.renderBufferDirect(X,null,Z,ne,B,null),B.onAfterShadow(r,B,N,X,Z,ne,null)}}const J=B.children;for(let Z=0,Q=J.length;Z<Q;Z++)P(J[Z],N,X,ce,T)}function V(B){B.target.removeEventListener("dispose",V);for(const X in h){const ce=h[X],T=B.target.uuid;T in ce&&(ce[T].dispose(),delete ce[T])}}}const wv={[io]:ro,[so]:co,[ao]:lo,[dr]:oo,[ro]:io,[co]:so,[lo]:ao,[oo]:dr};function Av(r){function e(){let z=!1;const ve=new Mt;let $=null;const re=new Mt(0,0,0,0);return{setMask:function(xe){$!==xe&&!z&&(r.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){z=xe},setClear:function(xe,ye,ht,At,rn){rn===!0&&(xe*=At,ye*=At,ht*=At),ve.set(xe,ye,ht,At),re.equals(ve)===!1&&(r.clearColor(xe,ye,ht,At),re.copy(ve))},reset:function(){z=!1,$=null,re.set(-1,0,0,0)}}}function t(){let z=!1,ve=!1,$=null,re=null,xe=null;return{setReversed:function(ye){ve=ye},setTest:function(ye){ye?Pe(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(ye){$!==ye&&!z&&(r.depthMask(ye),$=ye)},setFunc:function(ye){if(ve&&(ye=wv[ye]),re!==ye){switch(ye){case io:r.depthFunc(r.NEVER);break;case ro:r.depthFunc(r.ALWAYS);break;case so:r.depthFunc(r.LESS);break;case dr:r.depthFunc(r.LEQUAL);break;case ao:r.depthFunc(r.EQUAL);break;case oo:r.depthFunc(r.GEQUAL);break;case co:r.depthFunc(r.GREATER);break;case lo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}re=ye}},setLocked:function(ye){z=ye},setClear:function(ye){xe!==ye&&(r.clearDepth(ye),xe=ye)},reset:function(){z=!1,$=null,re=null,xe=null}}}function n(){let z=!1,ve=null,$=null,re=null,xe=null,ye=null,ht=null,At=null,rn=null;return{setTest:function(ft){z||(ft?Pe(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(ft){ve!==ft&&!z&&(r.stencilMask(ft),ve=ft)},setFunc:function(ft,Zt,ke){($!==ft||re!==Zt||xe!==ke)&&(r.stencilFunc(ft,Zt,ke),$=ft,re=Zt,xe=ke)},setOp:function(ft,Zt,ke){(ye!==ft||ht!==Zt||At!==ke)&&(r.stencilOp(ft,Zt,ke),ye=ft,ht=Zt,At=ke)},setLocked:function(ft){z=ft},setClear:function(ft){rn!==ft&&(r.clearStencil(ft),rn=ft)},reset:function(){z=!1,ve=null,$=null,re=null,xe=null,ye=null,ht=null,At=null,rn=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,m=[],_=null,y=!1,E=null,g=null,x=null,D=null,A=null,P=null,V=null,B=new He(0,0,0),N=0,X=!1,ce=null,T=null,R=null,J=null,Z=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,K=0;const oe=r.getParameter(r.VERSION);oe.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ne=K>=1):oe.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ne=K>=2);let k=null,ue={};const we=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),ut=new Mt().fromArray(we),_t=new Mt().fromArray(Ie);function ee(z,ve,$,re){const xe=new Uint8Array(4),ye=r.createTexture();r.bindTexture(z,ye),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<$;ht++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(ve,0,r.RGBA,1,1,re,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(ve+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return ye}const fe={};fe[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Pe(r.DEPTH_TEST),s.setFunc(dr),lt(!1),rt(Dc),Pe(r.CULL_FACE),F(Ti);function Pe(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function Ae(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function Ze(z,ve){return d[z]!==ve?(r.bindFramebuffer(z,ve),d[z]=ve,z===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ve),z===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ve),!0):!1}function Xe(z,ve){let $=m,re=!1;if(z){$=f.get(ve),$===void 0&&($=[],f.set(ve,$));const xe=z.textures;if($.length!==xe.length||$[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,ht=xe.length;ye<ht;ye++)$[ye]=r.COLOR_ATTACHMENT0+ye;$.length=xe.length,re=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,re=!0);re&&r.drawBuffers($)}function ot(z){return _!==z?(r.useProgram(z),_=z,!0):!1}const St={[Fi]:r.FUNC_ADD,[Td]:r.FUNC_SUBTRACT,[bd]:r.FUNC_REVERSE_SUBTRACT};St[wd]=r.MIN,St[Ad]=r.MAX;const ct={[Rd]:r.ZERO,[Cd]:r.ONE,[Pd]:r.SRC_COLOR,[to]:r.SRC_ALPHA,[Fd]:r.SRC_ALPHA_SATURATE,[Nd]:r.DST_COLOR,[Dd]:r.DST_ALPHA,[Ld]:r.ONE_MINUS_SRC_COLOR,[no]:r.ONE_MINUS_SRC_ALPHA,[Ud]:r.ONE_MINUS_DST_COLOR,[Id]:r.ONE_MINUS_DST_ALPHA,[Od]:r.CONSTANT_COLOR,[Bd]:r.ONE_MINUS_CONSTANT_COLOR,[zd]:r.CONSTANT_ALPHA,[kd]:r.ONE_MINUS_CONSTANT_ALPHA};function F(z,ve,$,re,xe,ye,ht,At,rn,ft){if(z===Ti){y===!0&&(Ae(r.BLEND),y=!1);return}if(y===!1&&(Pe(r.BLEND),y=!0),z!==Ed){if(z!==E||ft!==X){if((g!==Fi||A!==Fi)&&(r.blendEquation(r.FUNC_ADD),g=Fi,A=Fi),ft)switch(z){case ar:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ic:r.blendFunc(r.ONE,r.ONE);break;case Nc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ic:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Nc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,D=null,P=null,V=null,B.set(0,0,0),N=0,E=z,X=ft}return}xe=xe||ve,ye=ye||$,ht=ht||re,(ve!==g||xe!==A)&&(r.blendEquationSeparate(St[ve],St[xe]),g=ve,A=xe),($!==x||re!==D||ye!==P||ht!==V)&&(r.blendFuncSeparate(ct[$],ct[re],ct[ye],ct[ht]),x=$,D=re,P=ye,V=ht),(At.equals(B)===!1||rn!==N)&&(r.blendColor(At.r,At.g,At.b,rn),B.copy(At),N=rn),E=z,X=!1}function kt(z,ve){z.side===Nn?Ae(r.CULL_FACE):Pe(r.CULL_FACE);let $=z.side===fn;ve&&($=!$),lt($),z.blending===ar&&z.transparent===!1?F(Ti):F(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),i.setMask(z.colorWrite);const re=z.stencilWrite;a.setTest(re),re&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),xt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(z){ce!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),ce=z)}function rt(z){z!==yd?(Pe(r.CULL_FACE),z!==T&&(z===Dc?r.cullFace(r.BACK):z===Md?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),T=z}function Ge(z){z!==R&&(ne&&r.lineWidth(z),R=z)}function xt(z,ve,$){z?(Pe(r.POLYGON_OFFSET_FILL),(J!==ve||Z!==$)&&(r.polygonOffset(ve,$),J=ve,Z=$)):Ae(r.POLYGON_OFFSET_FILL)}function Ke(z){z?Pe(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function L(z){z===void 0&&(z=r.TEXTURE0+Q-1),k!==z&&(r.activeTexture(z),k=z)}function b(z,ve,$){$===void 0&&(k===null?$=r.TEXTURE0+Q-1:$=k);let re=ue[$];re===void 0&&(re={type:void 0,texture:void 0},ue[$]=re),(re.type!==z||re.texture!==ve)&&(k!==$&&(r.activeTexture($),k=$),r.bindTexture(z,ve||fe[z]),re.type=z,re.texture=ve)}function W(){const z=ue[k];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ie(){try{r.compressedTexImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{r.compressedTexImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{r.texSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{r.texStorage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{r.texStorage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{r.texImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ve(){try{r.texImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qe(z){ut.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),ut.copy(z))}function de(z){_t.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),_t.copy(z))}function st(z,ve){let $=l.get(ve);$===void 0&&($=new WeakMap,l.set(ve,$));let re=$.get(z);re===void 0&&(re=r.getUniformBlockIndex(ve,z.name),$.set(z,re))}function $e(z,ve){const re=l.get(ve).get(z);o.get(ve)!==re&&(r.uniformBlockBinding(ve,re,z.__bindingPointIndex),o.set(ve,re))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},k=null,ue={},d={},f=new WeakMap,m=[],_=null,y=!1,E=null,g=null,x=null,D=null,A=null,P=null,V=null,B=new He(0,0,0),N=0,X=!1,ce=null,T=null,R=null,J=null,Z=null,ut.set(0,0,r.canvas.width,r.canvas.height),_t.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:Pe,disable:Ae,bindFramebuffer:Ze,drawBuffers:Xe,useProgram:ot,setBlending:F,setMaterial:kt,setFlipSided:lt,setCullFace:rt,setLineWidth:Ge,setPolygonOffset:xt,setScissorTest:Ke,activeTexture:L,bindTexture:b,unbindTexture:W,compressedTexImage2D:ie,compressedTexImage3D:le,texImage2D:Ce,texImage3D:Ve,updateUBOMapping:st,uniformBlockBinding:$e,texStorage2D:Se,texStorage3D:ae,texSubImage2D:te,texSubImage3D:Fe,compressedTexSubImage2D:ge,compressedTexSubImage3D:Re,scissor:qe,viewport:de,reset:at}}function Rl(r,e,t,n){const i=Rv(n);switch(t){case uh:return r*e;case fh:return r*e;case ph:return r*e*2;case Jo:return r*e/i.components*i.byteLength;case Qo:return r*e/i.components*i.byteLength;case mh:return r*e*2/i.components*i.byteLength;case ec:return r*e*2/i.components*i.byteLength;case dh:return r*e*3/i.components*i.byteLength;case Tn:return r*e*4/i.components*i.byteLength;case na:return r*e*4/i.components*i.byteLength;case zs:case ks:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hs:case Gs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case po:case _o:return Math.max(r,16)*Math.max(e,8)/4;case fo:case mo:return Math.max(r,8)*Math.max(e,8)/2;case go:case vo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case So:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case To:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Co:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Po:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Do:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Io:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Vs:case No:case Uo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case _h:case Fo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Oo:case Bo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rv(r){switch(r){case si:case ch:return{byteLength:1,components:1};case jr:case lh:case Zr:return{byteLength:2,components:1};case $o:case Zo:return{byteLength:2,components:4};case zi:case $r:case On:return{byteLength:4,components:1};case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Cv(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new nt,d=new WeakMap;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,b){return _?new OffscreenCanvas(L,b):Kr("canvas")}function E(L,b,W){let ie=1;const le=Ke(L);if((le.width>W||le.height>W)&&(ie=W/Math.max(le.width,le.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const te=Math.floor(ie*le.width),Fe=Math.floor(ie*le.height);f===void 0&&(f=y(te,Fe));const ge=b?y(te,Fe):f;return ge.width=te,ge.height=Fe,ge.getContext("2d").drawImage(L,0,0,te,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+te+"x"+Fe+")."),ge}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==dn&&L.minFilter!==xn}function x(L){r.generateMipmap(L)}function D(L,b,W,ie,le=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=b;if(b===r.RED&&(W===r.FLOAT&&(te=r.R32F),W===r.HALF_FLOAT&&(te=r.R16F),W===r.UNSIGNED_BYTE&&(te=r.R8)),b===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(te=r.R8UI),W===r.UNSIGNED_SHORT&&(te=r.R16UI),W===r.UNSIGNED_INT&&(te=r.R32UI),W===r.BYTE&&(te=r.R8I),W===r.SHORT&&(te=r.R16I),W===r.INT&&(te=r.R32I)),b===r.RG&&(W===r.FLOAT&&(te=r.RG32F),W===r.HALF_FLOAT&&(te=r.RG16F),W===r.UNSIGNED_BYTE&&(te=r.RG8)),b===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(te=r.RG8UI),W===r.UNSIGNED_SHORT&&(te=r.RG16UI),W===r.UNSIGNED_INT&&(te=r.RG32UI),W===r.BYTE&&(te=r.RG8I),W===r.SHORT&&(te=r.RG16I),W===r.INT&&(te=r.RG32I)),b===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(te=r.RGB8UI),W===r.UNSIGNED_SHORT&&(te=r.RGB16UI),W===r.UNSIGNED_INT&&(te=r.RGB32UI),W===r.BYTE&&(te=r.RGB8I),W===r.SHORT&&(te=r.RGB16I),W===r.INT&&(te=r.RGB32I)),b===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(te=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(te=r.RGBA16UI),W===r.UNSIGNED_INT&&(te=r.RGBA32UI),W===r.BYTE&&(te=r.RGBA8I),W===r.SHORT&&(te=r.RGBA16I),W===r.INT&&(te=r.RGBA32I)),b===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(te=r.RGB9_E5),b===r.RGBA){const Fe=le?Ys:vt.getTransfer(ie);W===r.FLOAT&&(te=r.RGBA32F),W===r.HALF_FLOAT&&(te=r.RGBA16F),W===r.UNSIGNED_BYTE&&(te=Fe===Lt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function A(L,b){let W;return L?b===null||b===zi||b===_r?W=r.DEPTH24_STENCIL8:b===On?W=r.DEPTH32F_STENCIL8:b===jr&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===zi||b===_r?W=r.DEPTH_COMPONENT24:b===On?W=r.DEPTH_COMPONENT32F:b===jr&&(W=r.DEPTH_COMPONENT16),W}function P(L,b){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==dn&&L.minFilter!==xn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function V(L){const b=L.target;b.removeEventListener("dispose",V),N(b),b.isVideoTexture&&d.delete(b)}function B(L){const b=L.target;b.removeEventListener("dispose",B),ce(b)}function N(L){const b=n.get(L);if(b.__webglInit===void 0)return;const W=L.source,ie=m.get(W);if(ie){const le=ie[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&X(L),Object.keys(ie).length===0&&m.delete(W)}n.remove(L)}function X(L){const b=n.get(L);r.deleteTexture(b.__webglTexture);const W=L.source,ie=m.get(W);delete ie[b.__cacheKey],a.memory.textures--}function ce(L){const b=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let le=0;le<b.__webglFramebuffer[ie].length;le++)r.deleteFramebuffer(b.__webglFramebuffer[ie][le]);else r.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)r.deleteFramebuffer(b.__webglFramebuffer[ie]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=L.textures;for(let ie=0,le=W.length;ie<le;ie++){const te=n.get(W[ie]);te.__webglTexture&&(r.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(W[ie])}n.remove(L)}let T=0;function R(){T=0}function J(){const L=T;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),T+=1,L}function Z(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function Q(L,b){const W=n.get(L);if(L.isVideoTexture&&Ge(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){const ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(W,L,b);return}}t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+b)}function ne(L,b){const W=n.get(L);if(L.version>0&&W.__version!==L.version){_t(W,L,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+b)}function K(L,b){const W=n.get(L);if(L.version>0&&W.__version!==L.version){_t(W,L,b);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+b)}function oe(L,b){const W=n.get(L);if(L.version>0&&W.__version!==L.version){ee(W,L,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+b)}const k={[mr]:r.REPEAT,[Mi]:r.CLAMP_TO_EDGE,[qs]:r.MIRRORED_REPEAT},ue={[dn]:r.NEAREST,[oh]:r.NEAREST_MIPMAP_NEAREST,[Hr]:r.NEAREST_MIPMAP_LINEAR,[xn]:r.LINEAR,[Bs]:r.LINEAR_MIPMAP_NEAREST,[ni]:r.LINEAR_MIPMAP_LINEAR},we={[nf]:r.NEVER,[lf]:r.ALWAYS,[rf]:r.LESS,[vh]:r.LEQUAL,[sf]:r.EQUAL,[cf]:r.GEQUAL,[af]:r.GREATER,[of]:r.NOTEQUAL};function Ie(L,b){if(b.type===On&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===xn||b.magFilter===Bs||b.magFilter===Hr||b.magFilter===ni||b.minFilter===xn||b.minFilter===Bs||b.minFilter===Hr||b.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,k[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,k[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,k[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ue[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ue[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,we[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==Hr&&b.minFilter!==ni||b.type===On&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ut(L,b){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",V));const ie=b.source;let le=m.get(ie);le===void 0&&(le={},m.set(ie,le));const te=Z(b);if(te!==L.__cacheKey){le[te]===void 0&&(le[te]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),le[te].usedTimes++;const Fe=le[L.__cacheKey];Fe!==void 0&&(le[L.__cacheKey].usedTimes--,Fe.usedTimes===0&&X(b)),L.__cacheKey=te,L.__webglTexture=le[te].texture}return W}function _t(L,b,W){let ie=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=r.TEXTURE_3D);const le=ut(L,b),te=b.source;t.bindTexture(ie,L.__webglTexture,r.TEXTURE0+W);const Fe=n.get(te);if(te.version!==Fe.__version||le===!0){t.activeTexture(r.TEXTURE0+W);const ge=vt.getPrimaries(vt.workingColorSpace),Re=b.colorSpace===yi?null:vt.getPrimaries(b.colorSpace),Se=b.colorSpace===yi||ge===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ae=E(b.image,!1,i.maxTextureSize);ae=xt(b,ae);const Ce=s.convert(b.format,b.colorSpace),Ve=s.convert(b.type);let qe=D(b.internalFormat,Ce,Ve,b.colorSpace,b.isVideoTexture);Ie(ie,b);let de;const st=b.mipmaps,$e=b.isVideoTexture!==!0,at=Fe.__version===void 0||le===!0,z=te.dataReady,ve=P(b,ae);if(b.isDepthTexture)qe=A(b.format===gr,b.type),at&&($e?t.texStorage2D(r.TEXTURE_2D,1,qe,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,qe,ae.width,ae.height,0,Ce,Ve,null));else if(b.isDataTexture)if(st.length>0){$e&&at&&t.texStorage2D(r.TEXTURE_2D,ve,qe,st[0].width,st[0].height);for(let $=0,re=st.length;$<re;$++)de=st[$],$e?z&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,de.width,de.height,Ce,Ve,de.data):t.texImage2D(r.TEXTURE_2D,$,qe,de.width,de.height,0,Ce,Ve,de.data);b.generateMipmaps=!1}else $e?(at&&t.texStorage2D(r.TEXTURE_2D,ve,qe,ae.width,ae.height),z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae.width,ae.height,Ce,Ve,ae.data)):t.texImage2D(r.TEXTURE_2D,0,qe,ae.width,ae.height,0,Ce,Ve,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$e&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,qe,st[0].width,st[0].height,ae.depth);for(let $=0,re=st.length;$<re;$++)if(de=st[$],b.format!==Tn)if(Ce!==null)if($e){if(z)if(b.layerUpdates.size>0){const xe=Rl(de.width,de.height,b.format,b.type);for(const ye of b.layerUpdates){const ht=de.data.subarray(ye*xe/de.data.BYTES_PER_ELEMENT,(ye+1)*xe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,ye,de.width,de.height,1,Ce,ht,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,de.width,de.height,ae.depth,Ce,de.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,qe,de.width,de.height,ae.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,de.width,de.height,ae.depth,Ce,Ve,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,qe,de.width,de.height,ae.depth,0,Ce,Ve,de.data)}else{$e&&at&&t.texStorage2D(r.TEXTURE_2D,ve,qe,st[0].width,st[0].height);for(let $=0,re=st.length;$<re;$++)de=st[$],b.format!==Tn?Ce!==null?$e?z&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,de.width,de.height,Ce,de.data):t.compressedTexImage2D(r.TEXTURE_2D,$,qe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?z&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,de.width,de.height,Ce,Ve,de.data):t.texImage2D(r.TEXTURE_2D,$,qe,de.width,de.height,0,Ce,Ve,de.data)}else if(b.isDataArrayTexture)if($e){if(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,qe,ae.width,ae.height,ae.depth),z)if(b.layerUpdates.size>0){const $=Rl(ae.width,ae.height,b.format,b.type);for(const re of b.layerUpdates){const xe=ae.data.subarray(re*$/ae.data.BYTES_PER_ELEMENT,(re+1)*$/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,re,ae.width,ae.height,1,Ce,Ve,xe)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ce,Ve,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,qe,ae.width,ae.height,ae.depth,0,Ce,Ve,ae.data);else if(b.isData3DTexture)$e?(at&&t.texStorage3D(r.TEXTURE_3D,ve,qe,ae.width,ae.height,ae.depth),z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ce,Ve,ae.data)):t.texImage3D(r.TEXTURE_3D,0,qe,ae.width,ae.height,ae.depth,0,Ce,Ve,ae.data);else if(b.isFramebufferTexture){if(at)if($e)t.texStorage2D(r.TEXTURE_2D,ve,qe,ae.width,ae.height);else{let $=ae.width,re=ae.height;for(let xe=0;xe<ve;xe++)t.texImage2D(r.TEXTURE_2D,xe,qe,$,re,0,Ce,Ve,null),$>>=1,re>>=1}}else if(st.length>0){if($e&&at){const $=Ke(st[0]);t.texStorage2D(r.TEXTURE_2D,ve,qe,$.width,$.height)}for(let $=0,re=st.length;$<re;$++)de=st[$],$e?z&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Ce,Ve,de):t.texImage2D(r.TEXTURE_2D,$,qe,Ce,Ve,de);b.generateMipmaps=!1}else if($e){if(at){const $=Ke(ae);t.texStorage2D(r.TEXTURE_2D,ve,qe,$.width,$.height)}z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,Ve,ae)}else t.texImage2D(r.TEXTURE_2D,0,qe,Ce,Ve,ae);g(b)&&x(ie),Fe.__version=te.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ee(L,b,W){if(b.image.length!==6)return;const ie=ut(L,b),le=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+W);const te=n.get(le);if(le.version!==te.__version||ie===!0){t.activeTexture(r.TEXTURE0+W);const Fe=vt.getPrimaries(vt.workingColorSpace),ge=b.colorSpace===yi?null:vt.getPrimaries(b.colorSpace),Re=b.colorSpace===yi||Fe===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Se=b.isCompressedTexture||b.image[0].isCompressedTexture,ae=b.image[0]&&b.image[0].isDataTexture,Ce=[];for(let re=0;re<6;re++)!Se&&!ae?Ce[re]=E(b.image[re],!0,i.maxCubemapSize):Ce[re]=ae?b.image[re].image:b.image[re],Ce[re]=xt(b,Ce[re]);const Ve=Ce[0],qe=s.convert(b.format,b.colorSpace),de=s.convert(b.type),st=D(b.internalFormat,qe,de,b.colorSpace),$e=b.isVideoTexture!==!0,at=te.__version===void 0||ie===!0,z=le.dataReady;let ve=P(b,Ve);Ie(r.TEXTURE_CUBE_MAP,b);let $;if(Se){$e&&at&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,st,Ve.width,Ve.height);for(let re=0;re<6;re++){$=Ce[re].mipmaps;for(let xe=0;xe<$.length;xe++){const ye=$[xe];b.format!==Tn?qe!==null?$e?z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,0,0,ye.width,ye.height,qe,ye.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,st,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,0,0,ye.width,ye.height,qe,de,ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,st,ye.width,ye.height,0,qe,de,ye.data)}}}else{if($=b.mipmaps,$e&&at){$.length>0&&ve++;const re=Ke(Ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,st,re.width,re.height)}for(let re=0;re<6;re++)if(ae){$e?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ce[re].width,Ce[re].height,qe,de,Ce[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,st,Ce[re].width,Ce[re].height,0,qe,de,Ce[re].data);for(let xe=0;xe<$.length;xe++){const ht=$[xe].image[re].image;$e?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,0,0,ht.width,ht.height,qe,de,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,st,ht.width,ht.height,0,qe,de,ht.data)}}else{$e?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,qe,de,Ce[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,st,qe,de,Ce[re]);for(let xe=0;xe<$.length;xe++){const ye=$[xe];$e?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,0,0,qe,de,ye.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,st,qe,de,ye.image[re])}}}g(b)&&x(r.TEXTURE_CUBE_MAP),te.__version=le.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function fe(L,b,W,ie,le,te){const Fe=s.convert(W.format,W.colorSpace),ge=s.convert(W.type),Re=D(W.internalFormat,Fe,ge,W.colorSpace);if(!n.get(b).__hasExternalTextures){const ae=Math.max(1,b.width>>te),Ce=Math.max(1,b.height>>te);le===r.TEXTURE_3D||le===r.TEXTURE_2D_ARRAY?t.texImage3D(le,te,Re,ae,Ce,b.depth,0,Fe,ge,null):t.texImage2D(le,te,Re,ae,Ce,0,Fe,ge,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),rt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,le,n.get(W).__webglTexture,0,lt(b)):(le===r.TEXTURE_2D||le>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,le,n.get(W).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(L,b,W){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer){const ie=b.depthTexture,le=ie&&ie.isDepthTexture?ie.type:null,te=A(b.stencilBuffer,le),Fe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=lt(b);rt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,te,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,te,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,te,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Fe,r.RENDERBUFFER,L)}else{const ie=b.textures;for(let le=0;le<ie.length;le++){const te=ie[le],Fe=s.convert(te.format,te.colorSpace),ge=s.convert(te.type),Re=D(te.internalFormat,Fe,ge,te.colorSpace),Se=lt(b);W&&rt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,Re,b.width,b.height):rt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,Re,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Re,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q(b.depthTexture,0);const ie=n.get(b.depthTexture).__webglTexture,le=lt(b);if(b.depthTexture.format===or)rt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(b.depthTexture.format===gr)rt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ze(L){const b=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ie=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const le=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",le)};ie.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=ie}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ae(b.__webglFramebuffer,L)}else if(W){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=r.createRenderbuffer(),Pe(b.__webglDepthbuffer[ie],L,!1);else{const le=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer[ie];r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,te)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Pe(b.__webglDepthbuffer,L,!1);else{const ie=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,le)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(L,b,W){const ie=n.get(L);b!==void 0&&fe(ie.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Ze(L)}function ot(L){const b=L.texture,W=n.get(L),ie=n.get(b);L.addEventListener("dispose",B);const le=L.textures,te=L.isWebGLCubeRenderTarget===!0,Fe=le.length>1;if(Fe||(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=b.version,a.memory.textures++),te){W.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[ge]=[];for(let Re=0;Re<b.mipmaps.length;Re++)W.__webglFramebuffer[ge][Re]=r.createFramebuffer()}else W.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)W.__webglFramebuffer[ge]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Fe)for(let ge=0,Re=le.length;ge<Re;ge++){const Se=n.get(le[ge]);Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture(),a.memory.textures++)}if(L.samples>0&&rt(L)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ge=0;ge<le.length;ge++){const Re=le[ge];W.__webglColorRenderbuffer[ge]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[ge]);const Se=s.convert(Re.format,Re.colorSpace),ae=s.convert(Re.type),Ce=D(Re.internalFormat,Se,ae,Re.colorSpace,L.isXRRenderTarget===!0),Ve=lt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,Ce,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,W.__webglColorRenderbuffer[ge])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Pe(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)fe(W.__webglFramebuffer[ge][Re],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Re);else fe(W.__webglFramebuffer[ge],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(b)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let ge=0,Re=le.length;ge<Re;ge++){const Se=le[ge],ae=n.get(Se);t.bindTexture(r.TEXTURE_2D,ae.__webglTexture),Ie(r.TEXTURE_2D,Se),fe(W.__webglFramebuffer,L,Se,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,0),g(Se)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let ge=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ge=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ge,ie.__webglTexture),Ie(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)fe(W.__webglFramebuffer[Re],L,b,r.COLOR_ATTACHMENT0,ge,Re);else fe(W.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,ge,0);g(b)&&x(ge),t.unbindTexture()}L.depthBuffer&&Ze(L)}function St(L){const b=L.textures;for(let W=0,ie=b.length;W<ie;W++){const le=b[W];if(g(le)){const te=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Fe=n.get(le).__webglTexture;t.bindTexture(te,Fe),x(te),t.unbindTexture()}}}const ct=[],F=[];function kt(L){if(L.samples>0){if(rt(L)===!1){const b=L.textures,W=L.width,ie=L.height;let le=r.COLOR_BUFFER_BIT;const te=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Fe=n.get(L),ge=b.length>1;if(ge)for(let Re=0;Re<b.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(le|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(le|=r.STENCIL_BUFFER_BIT)),ge){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Fe.__webglColorRenderbuffer[Re]);const Se=n.get(b[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,W,ie,0,0,W,ie,le,r.NEAREST),l===!0&&(ct.length=0,F.length=0,ct.push(r.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ct.push(te),F.push(te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ge)for(let Re=0;Re<b.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,Fe.__webglColorRenderbuffer[Re]);const Se=n.get(b[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,Se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function lt(L){return Math.min(i.maxSamples,L.samples)}function rt(L){const b=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ge(L){const b=a.render.frame;d.get(L)!==b&&(d.set(L,b),L.update())}function xt(L,b){const W=L.colorSpace,ie=L.format,le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==nn&&W!==yi&&(vt.getTransfer(W)===Lt?(ie!==Tn||le!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function Ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=R,this.setTexture2D=Q,this.setTexture2DArray=ne,this.setTexture3D=K,this.setTextureCube=oe,this.rebindTextures=Xe,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=rt}function Pv(r,e){function t(n,i=yi){let s;const a=vt.getTransfer(i);if(n===si)return r.UNSIGNED_BYTE;if(n===$o)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return r.BYTE;if(n===lh)return r.SHORT;if(n===jr)return r.UNSIGNED_SHORT;if(n===$r)return r.INT;if(n===zi)return r.UNSIGNED_INT;if(n===On)return r.FLOAT;if(n===Zr)return r.HALF_FLOAT;if(n===uh)return r.ALPHA;if(n===dh)return r.RGB;if(n===Tn)return r.RGBA;if(n===fh)return r.LUMINANCE;if(n===ph)return r.LUMINANCE_ALPHA;if(n===or)return r.DEPTH_COMPONENT;if(n===gr)return r.DEPTH_STENCIL;if(n===Jo)return r.RED;if(n===Qo)return r.RED_INTEGER;if(n===mh)return r.RG;if(n===ec)return r.RG_INTEGER;if(n===na)return r.RGBA_INTEGER;if(n===zs||n===ks||n===Hs||n===Gs)if(a===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===po||n===mo||n===_o)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_o)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===go||n===vo||n===xo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===go||n===vo)return a===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yo||n===Mo||n===So||n===Eo||n===To||n===bo||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===yo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===So)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ao)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Po)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vs||n===No||n===Uo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Vs)return a===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===No)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_h||n===Fo||n===Oo||n===Bo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Vs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Lv extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Si extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dv={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const E of e.hand.values()){const g=t.getJointPose(E,n),x=this._getHandJoint(h,E);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],m=d.position.distanceTo(f.position),_=.02,y=.005;h.inputState.pinching&&m>_+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nv=`
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

}`;class Uv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Kt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ai({vertexShader:Iv,fragmentShader:Nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fv extends ki{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,h=null,d=null,f=null,m=null,_=null,y=null;const E=new Uv,g=t.getContextAttributes();let x=null,D=null;const A=[],P=[],V=new nt;let B=null;const N=new un;N.layers.enable(1),N.viewport=new Mt;const X=new un;X.layers.enable(2),X.viewport=new Mt;const ce=[N,X],T=new Lv;T.layers.enable(1),T.layers.enable(2);let R=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=A[ee];return fe===void 0&&(fe=new Xa,A[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=A[ee];return fe===void 0&&(fe=new Xa,A[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=A[ee];return fe===void 0&&(fe=new Xa,A[ee]=fe),fe.getHandSpace()};function Z(ee){const fe=P.indexOf(ee.inputSource);if(fe===-1)return;const Pe=A[fe];Pe!==void 0&&(Pe.update(ee.inputSource,ee.frame,h||a),Pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Q(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<A.length;ee++){const fe=P[ee];fe!==null&&(P[ee]=null,A[ee].disconnect(fe))}R=null,J=null,E.reset(),e.setRenderTarget(x),_=null,m=null,f=null,i=null,D=null,_t.stop(),n.isPresenting=!1,e.setPixelRatio(B),e.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(V),i.renderState.layers===void 0){const fe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),D=new wi(_.framebufferWidth,_.framebufferHeight,{format:Tn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let fe=null,Pe=null,Ae=null;g.depth&&(Ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=g.stencil?gr:or,Pe=g.stencil?_r:zi);const Ze={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=new XRWebGLBinding(i,t),m=f.createProjectionLayer(Ze),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),D=new wi(m.textureWidth,m.textureHeight,{format:Tn,type:si,depthTexture:new Ch(m.textureWidth,m.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await i.requestReferenceSpace(o),_t.setContext(i),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ne(ee){for(let fe=0;fe<ee.removed.length;fe++){const Pe=ee.removed[fe],Ae=P.indexOf(Pe);Ae>=0&&(P[Ae]=null,A[Ae].disconnect(Pe))}for(let fe=0;fe<ee.added.length;fe++){const Pe=ee.added[fe];let Ae=P.indexOf(Pe);if(Ae===-1){for(let Xe=0;Xe<A.length;Xe++)if(Xe>=P.length){P.push(Pe),Ae=Xe;break}else if(P[Xe]===null){P[Xe]=Pe,Ae=Xe;break}if(Ae===-1)break}const Ze=A[Ae];Ze&&Ze.connect(Pe)}}const K=new O,oe=new O;function k(ee,fe,Pe){K.setFromMatrixPosition(fe.matrixWorld),oe.setFromMatrixPosition(Pe.matrixWorld);const Ae=K.distanceTo(oe),Ze=fe.projectionMatrix.elements,Xe=Pe.projectionMatrix.elements,ot=Ze[14]/(Ze[10]-1),St=Ze[14]/(Ze[10]+1),ct=(Ze[9]+1)/Ze[5],F=(Ze[9]-1)/Ze[5],kt=(Ze[8]-1)/Ze[0],lt=(Xe[8]+1)/Xe[0],rt=ot*kt,Ge=ot*lt,xt=Ae/(-kt+lt),Ke=xt*-kt;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ke),ee.translateZ(xt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ze[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const L=ot+xt,b=St+xt,W=rt-Ke,ie=Ge+(Ae-Ke),le=ct*St/b*L,te=F*St/b*L;ee.projectionMatrix.makePerspective(W,ie,le,te,L,b),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let fe=ee.near,Pe=ee.far;E.texture!==null&&(E.depthNear>0&&(fe=E.depthNear),E.depthFar>0&&(Pe=E.depthFar)),T.near=X.near=N.near=fe,T.far=X.far=N.far=Pe,(R!==T.near||J!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,J=T.far);const Ae=ee.parent,Ze=T.cameras;ue(T,Ae);for(let Xe=0;Xe<Ze.length;Xe++)ue(Ze[Xe],Ae);Ze.length===2?k(T,N,X):T.projectionMatrix.copy(N.projectionMatrix),we(ee,T,Ae)};function we(ee,fe,Pe){Pe===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=vr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&_===null))return l},this.setFoveation=function(ee){l=ee,m!==null&&(m.fixedFoveation=ee),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ee)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(T)};let Ie=null;function ut(ee,fe){if(d=fe.getViewerPose(h||a),y=fe,d!==null){const Pe=d.views;_!==null&&(e.setRenderTargetFramebuffer(D,_.framebuffer),e.setRenderTarget(D));let Ae=!1;Pe.length!==T.cameras.length&&(T.cameras.length=0,Ae=!0);for(let Xe=0;Xe<Pe.length;Xe++){const ot=Pe[Xe];let St=null;if(_!==null)St=_.getViewport(ot);else{const F=f.getViewSubImage(m,ot);St=F.viewport,Xe===0&&(e.setRenderTargetTextures(D,F.colorTexture,m.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(D))}let ct=ce[Xe];ct===void 0&&(ct=new un,ct.layers.enable(Xe),ct.viewport=new Mt,ce[Xe]=ct),ct.matrix.fromArray(ot.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(ot.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(St.x,St.y,St.width,St.height),Xe===0&&(T.matrix.copy(ct.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ae===!0&&T.cameras.push(ct)}const Ze=i.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")){const Xe=f.getDepthInformation(Pe[0]);Xe&&Xe.isValid&&Xe.texture&&E.init(e,Xe,i.renderState)}}for(let Pe=0;Pe<A.length;Pe++){const Ae=P[Pe],Ze=A[Pe];Ae!==null&&Ze!==void 0&&Ze.update(Ae,fe,h||a)}Ie&&Ie(ee,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),y=null}const _t=new Rh;_t.setAnimationLoop(ut),this.setAnimationLoop=function(ee){Ie=ee},this.dispose=function(){}}}const Di=new wn,Ov=new Oe;function Bv(r,e){function t(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}function n(g,x){x.color.getRGB(g.fogColor.value,bh(r)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}function i(g,x,D,A,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?s(g,x):x.isMeshToonMaterial?(s(g,x),f(g,x)):x.isMeshPhongMaterial?(s(g,x),d(g,x)):x.isMeshStandardMaterial?(s(g,x),m(g,x),x.isMeshPhysicalMaterial&&_(g,x,P)):x.isMeshMatcapMaterial?(s(g,x),y(g,x)):x.isMeshDepthMaterial?s(g,x):x.isMeshDistanceMaterial?(s(g,x),E(g,x)):x.isMeshNormalMaterial?s(g,x):x.isLineBasicMaterial?(a(g,x),x.isLineDashedMaterial&&o(g,x)):x.isPointsMaterial?l(g,x,D,A):x.isSpriteMaterial?h(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,t(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===fn&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,t(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===fn&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,t(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,t(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);const D=e.get(x),A=D.envMap,P=D.envMapRotation;A&&(g.envMap.value=A,Di.copy(P),Di.x*=-1,Di.y*=-1,Di.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),g.envMapRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(Di)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,g.aoMapTransform))}function a(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform))}function o(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function l(g,x,D,A){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*D,g.scale.value=A*.5,x.map&&(g.map.value=x.map,t(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function h(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function d(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}function f(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}function m(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}function _(g,x,D){g.ior.value=x.ior,x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===fn&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=D.texture,g.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,x){x.matcap&&(g.matcap.value=x.matcap)}function E(g,x){const D=e.get(x).light;g.referencePosition.value.setFromMatrixPosition(D.matrixWorld),g.nearDistance.value=D.shadow.camera.near,g.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zv(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(D,A){const P=A.program;n.uniformBlockBinding(D,P)}function h(D,A){let P=i[D.id];P===void 0&&(y(D),P=d(D),i[D.id]=P,D.addEventListener("dispose",g));const V=A.program;n.updateUBOMapping(D,V);const B=e.render.frame;s[D.id]!==B&&(m(D),s[D.id]=B)}function d(D){const A=f();D.__bindingPointIndex=A;const P=r.createBuffer(),V=D.__size,B=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,V,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,P),P}function f(){for(let D=0;D<o;D++)if(a.indexOf(D)===-1)return a.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(D){const A=i[D.id],P=D.uniforms,V=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let B=0,N=P.length;B<N;B++){const X=Array.isArray(P[B])?P[B]:[P[B]];for(let ce=0,T=X.length;ce<T;ce++){const R=X[ce];if(_(R,B,ce,V)===!0){const J=R.__offset,Z=Array.isArray(R.value)?R.value:[R.value];let Q=0;for(let ne=0;ne<Z.length;ne++){const K=Z[ne],oe=E(K);typeof K=="number"||typeof K=="boolean"?(R.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,J+Q,R.__data)):K.isMatrix3?(R.__data[0]=K.elements[0],R.__data[1]=K.elements[1],R.__data[2]=K.elements[2],R.__data[3]=0,R.__data[4]=K.elements[3],R.__data[5]=K.elements[4],R.__data[6]=K.elements[5],R.__data[7]=0,R.__data[8]=K.elements[6],R.__data[9]=K.elements[7],R.__data[10]=K.elements[8],R.__data[11]=0):(K.toArray(R.__data,Q),Q+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function _(D,A,P,V){const B=D.value,N=A+"_"+P;if(V[N]===void 0)return typeof B=="number"||typeof B=="boolean"?V[N]=B:V[N]=B.clone(),!0;{const X=V[N];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return V[N]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function y(D){const A=D.uniforms;let P=0;const V=16;for(let N=0,X=A.length;N<X;N++){const ce=Array.isArray(A[N])?A[N]:[A[N]];for(let T=0,R=ce.length;T<R;T++){const J=ce[T],Z=Array.isArray(J.value)?J.value:[J.value];for(let Q=0,ne=Z.length;Q<ne;Q++){const K=Z[Q],oe=E(K),k=P%V,ue=k%oe.boundary,we=k+ue;P+=ue,we!==0&&V-we<oe.storage&&(P+=V-we),J.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=P,P+=oe.storage}}}const B=P%V;return B>0&&(P+=V-B),D.__size=P,D.__cache={},this}function E(D){const A={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(A.boundary=4,A.storage=4):D.isVector2?(A.boundary=8,A.storage=8):D.isVector3||D.isColor?(A.boundary=16,A.storage=12):D.isVector4?(A.boundary=16,A.storage=16):D.isMatrix3?(A.boundary=48,A.storage=48):D.isMatrix4?(A.boundary=64,A.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),A}function g(D){const A=D.target;A.removeEventListener("dispose",g);const P=a.indexOf(A.__bindingPointIndex);a.splice(P,1),r.deleteBuffer(i[A.id]),delete i[A.id],delete s[A.id]}function x(){for(const D in i)r.deleteBuffer(i[D]);a=[],i={},s={}}return{bind:l,update:h,dispose:x}}class kv{constructor(e={}){const{canvas:t=wf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),y=new Int32Array(4);let E=null,g=null;const x=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=bi,this.toneMappingExposure=1;const A=this;let P=!1,V=0,B=0,N=null,X=-1,ce=null;const T=new Mt,R=new Mt;let J=null;const Z=new He(0);let Q=0,ne=t.width,K=t.height,oe=1,k=null,ue=null;const we=new Mt(0,0,ne,K),Ie=new Mt(0,0,ne,K);let ut=!1;const _t=new rc;let ee=!1,fe=!1;const Pe=new Oe,Ae=new Oe,Ze=new O,Xe=new Mt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function ct(){return N===null?oe:1}let F=n;function kt(w,H){return t.getContext(w,H)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ko}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ye,!1),F===null){const H="webgl2";if(F=kt(H,w),F===null)throw kt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let lt,rt,Ge,xt,Ke,L,b,W,ie,le,te,Fe,ge,Re,Se,ae,Ce,Ve,qe,de,st,$e,at,z;function ve(){lt=new X_(F),lt.init(),$e=new Pv(F,lt),rt=new z_(F,lt,e,$e),Ge=new Av(F),rt.reverseDepthBuffer&&Ge.buffers.depth.setReversed(!0),xt=new Y_(F),Ke=new dv,L=new Cv(F,lt,Ge,Ke,rt,$e,xt),b=new H_(A),W=new W_(A),ie=new tp(F),at=new O_(F,ie),le=new j_(F,ie,xt,at),te=new $_(F,le,ie,xt),qe=new K_(F,rt,L),ae=new k_(Ke),Fe=new uv(A,b,W,lt,rt,at,ae),ge=new Bv(A,Ke),Re=new pv,Se=new yv(lt),Ve=new F_(A,b,W,Ge,te,m,l),Ce=new bv(A,te,rt),z=new zv(F,xt,rt,Ge),de=new B_(F,lt,xt),st=new q_(F,lt,xt),xt.programs=Fe.programs,A.capabilities=rt,A.extensions=lt,A.properties=Ke,A.renderLists=Re,A.shadowMap=Ce,A.state=Ge,A.info=xt}ve();const $=new Fv(A,F);this.xr=$,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=lt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=lt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(w){w!==void 0&&(oe=w,this.setSize(ne,K,!1))},this.getSize=function(w){return w.set(ne,K)},this.setSize=function(w,H,q=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=w,K=H,t.width=Math.floor(w*oe),t.height=Math.floor(H*oe),q===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(ne*oe,K*oe).floor()},this.setDrawingBufferSize=function(w,H,q){ne=w,K=H,oe=q,t.width=Math.floor(w*q),t.height=Math.floor(H*q),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(we)},this.setViewport=function(w,H,q,Y){w.isVector4?we.set(w.x,w.y,w.z,w.w):we.set(w,H,q,Y),Ge.viewport(T.copy(we).multiplyScalar(oe).round())},this.getScissor=function(w){return w.copy(Ie)},this.setScissor=function(w,H,q,Y){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,H,q,Y),Ge.scissor(R.copy(Ie).multiplyScalar(oe).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(w){Ge.setScissorTest(ut=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){ue=w},this.getClearColor=function(w){return w.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(w=!0,H=!0,q=!0){let Y=0;if(w){let G=!1;if(N!==null){const pe=N.texture.format;G=pe===na||pe===ec||pe===Qo}if(G){const pe=N.texture.type,Me=pe===si||pe===zi||pe===jr||pe===_r||pe===$o||pe===Zo,Le=Ve.getClearColor(),Ne=Ve.getClearAlpha(),We=Le.r,je=Le.g,Ue=Le.b;Me?(_[0]=We,_[1]=je,_[2]=Ue,_[3]=Ne,F.clearBufferuiv(F.COLOR,0,_)):(y[0]=We,y[1]=je,y[2]=Ue,y[3]=Ne,F.clearBufferiv(F.COLOR,0,y))}else Y|=F.COLOR_BUFFER_BIT}H&&(Y|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Re.dispose(),Se.dispose(),Ke.dispose(),b.dispose(),W.dispose(),te.dispose(),at.dispose(),z.dispose(),Fe.dispose(),$.dispose(),$.removeEventListener("sessionstart",ns),$.removeEventListener("sessionend",is),jn.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=xt.autoReset,H=Ce.enabled,q=Ce.autoUpdate,Y=Ce.needsUpdate,G=Ce.type;ve(),xt.autoReset=w,Ce.enabled=H,Ce.autoUpdate=q,Ce.needsUpdate=Y,Ce.type=G}function ye(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ht(w){const H=w.target;H.removeEventListener("dispose",ht),At(H)}function At(w){rn(w),Ke.remove(w)}function rn(w){const H=Ke.get(w).programs;H!==void 0&&(H.forEach(function(q){Fe.releaseProgram(q)}),w.isShaderMaterial&&Fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,q,Y,G,pe){H===null&&(H=ot);const Me=G.isMesh&&G.matrixWorld.determinant()<0,Le=ca(w,H,q,Y,G);Ge.setMaterial(Y,Me);let Ne=q.index,We=1;if(Y.wireframe===!0){if(Ne=le.getWireframeAttribute(q),Ne===void 0)return;We=2}const je=q.drawRange,Ue=q.attributes.position;let Qe=je.start*We,gt=(je.start+je.count)*We;pe!==null&&(Qe=Math.max(Qe,pe.start*We),gt=Math.min(gt,(pe.start+pe.count)*We)),Ne!==null?(Qe=Math.max(Qe,0),gt=Math.min(gt,Ne.count)):Ue!=null&&(Qe=Math.max(Qe,0),gt=Math.min(gt,Ue.count));const Et=gt-Qe;if(Et<0||Et===1/0)return;at.setup(G,Y,Le,q,Ne);let Wt,pt=de;if(Ne!==null&&(Wt=ie.get(Ne),pt=st,pt.setIndex(Wt)),G.isMesh)Y.wireframe===!0?(Ge.setLineWidth(Y.wireframeLinewidth*ct()),pt.setMode(F.LINES)):pt.setMode(F.TRIANGLES);else if(G.isLine){let Ee=Y.linewidth;Ee===void 0&&(Ee=1),Ge.setLineWidth(Ee*ct()),G.isLineSegments?pt.setMode(F.LINES):G.isLineLoop?pt.setMode(F.LINE_LOOP):pt.setMode(F.LINE_STRIP)}else G.isPoints?pt.setMode(F.POINTS):G.isSprite&&pt.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)pt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ee=G._multiDrawStarts,Ot=G._multiDrawCounts,mt=G._multiDrawCount,pn=Ne?ie.get(Ne).bytesPerElement:1,hi=Ke.get(Y).currentProgram.getUniforms();for(let Dt=0;Dt<mt;Dt++)hi.setValue(F,"_gl_DrawID",Dt),pt.render(Ee[Dt]/pn,Ot[Dt])}else if(G.isInstancedMesh)pt.renderInstances(Qe,Et,G.count);else if(q.isInstancedBufferGeometry){const Ee=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ot=Math.min(q.instanceCount,Ee);pt.renderInstances(Qe,Et,Ot)}else pt.render(Qe,Et)};function ft(w,H,q){w.transparent===!0&&w.side===Nn&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,Hn(w,H,q),w.side=ri,w.needsUpdate=!0,Hn(w,H,q),w.side=Nn):Hn(w,H,q)}this.compile=function(w,H,q=null){q===null&&(q=w),g=Se.get(q),g.init(H),D.push(g),q.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),w!==q&&w.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const Y=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let Me=0;Me<pe.length;Me++){const Le=pe[Me];ft(Le,q,G),Y.add(Le)}else ft(pe,q,G),Y.add(pe)}),D.pop(),g=null,Y},this.compileAsync=function(w,H,q=null){const Y=this.compile(w,H,q);return new Promise(G=>{function pe(){if(Y.forEach(function(Me){Ke.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){G(w);return}setTimeout(pe,10)}lt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Zt=null;function ke(w){Zt&&Zt(w)}function ns(){jn.stop()}function is(){jn.start()}const jn=new Rh;jn.setAnimationLoop(ke),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(w){Zt=w,$.setAnimationLoop(w),w===null?jn.stop():jn.start()},$.addEventListener("sessionstart",ns),$.addEventListener("sessionend",is),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(H),H=$.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,H,N),g=Se.get(w,D.length),g.init(H),D.push(g),Ae.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),_t.setFromProjectionMatrix(Ae),fe=this.localClippingEnabled,ee=ae.init(this.clippingPlanes,fe),E=Re.get(w,x.length),E.init(),x.push(E),$.enabled===!0&&$.isPresenting===!0){const pe=A.xr.getDepthSensingMesh();pe!==null&&Ar(pe,H,-1/0,A.sortObjects)}Ar(w,H,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(k,ue),St=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,St&&Ve.addToRenderList(E,w),this.info.render.frame++,ee===!0&&ae.beginShadows();const q=g.state.shadowsArray;Ce.render(q,w,H),ee===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=E.opaque,G=E.transmissive;if(g.setupLights(),H.isArrayCamera){const pe=H.cameras;if(G.length>0)for(let Me=0,Le=pe.length;Me<Le;Me++){const Ne=pe[Me];ss(Y,G,w,Ne)}St&&Ve.render(w);for(let Me=0,Le=pe.length;Me<Le;Me++){const Ne=pe[Me];rs(E,w,Ne,Ne.viewport)}}else G.length>0&&ss(Y,G,w,H),St&&Ve.render(w),rs(E,w,H);N!==null&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(A,w,H),at.resetDefaultState(),X=-1,ce=null,D.pop(),D.length>0?(g=D[D.length-1],ee===!0&&ae.setGlobalState(A.clippingPlanes,g.state.camera)):g=null,x.pop(),x.length>0?E=x[x.length-1]:E=null};function Ar(w,H,q,Y){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||_t.intersectsSprite(w)){Y&&Xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);const Me=te.update(w),Le=w.material;Le.visible&&E.push(w,Me,Le,q,Xe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||_t.intersectsObject(w))){const Me=te.update(w),Le=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xe.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Xe.copy(Me.boundingSphere.center)),Xe.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(Le)){const Ne=Me.groups;for(let We=0,je=Ne.length;We<je;We++){const Ue=Ne[We],Qe=Le[Ue.materialIndex];Qe&&Qe.visible&&E.push(w,Me,Qe,q,Xe.z,Ue)}}else Le.visible&&E.push(w,Me,Le,q,Xe.z,null)}}const pe=w.children;for(let Me=0,Le=pe.length;Me<Le;Me++)Ar(pe[Me],H,q,Y)}function rs(w,H,q,Y){const G=w.opaque,pe=w.transmissive,Me=w.transparent;g.setupLightsView(q),ee===!0&&ae.setGlobalState(A.clippingPlanes,q),Y&&Ge.viewport(T.copy(Y)),G.length>0&&ci(G,H,q),pe.length>0&&ci(pe,H,q),Me.length>0&&ci(Me,H,q),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function ss(w,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new wi(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Zr:si,minFilter:ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const pe=g.state.transmissionRenderTarget[Y.id],Me=Y.viewport||T;pe.setSize(Me.z,Me.w);const Le=A.getRenderTarget();A.setRenderTarget(pe),A.getClearColor(Z),Q=A.getClearAlpha(),Q<1&&A.setClearColor(16777215,.5),A.clear(),St&&Ve.render(q);const Ne=A.toneMapping;A.toneMapping=bi;const We=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),ee===!0&&ae.setGlobalState(A.clippingPlanes,Y),ci(w,q,Y),L.updateMultisampleRenderTarget(pe),L.updateRenderTargetMipmap(pe),lt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ue=0,Qe=H.length;Ue<Qe;Ue++){const gt=H[Ue],Et=gt.object,Wt=gt.geometry,pt=gt.material,Ee=gt.group;if(pt.side===Nn&&Et.layers.test(Y.layers)){const Ot=pt.side;pt.side=fn,pt.needsUpdate=!0,M(Et,q,Y,Wt,pt,Ee),pt.side=Ot,pt.needsUpdate=!0,je=!0}}je===!0&&(L.updateMultisampleRenderTarget(pe),L.updateRenderTargetMipmap(pe))}A.setRenderTarget(Le),A.setClearColor(Z,Q),We!==void 0&&(Y.viewport=We),A.toneMapping=Ne}function ci(w,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let G=0,pe=w.length;G<pe;G++){const Me=w[G],Le=Me.object,Ne=Me.geometry,We=Y===null?Me.material:Y,je=Me.group;Le.layers.test(q.layers)&&M(Le,H,q,Ne,We,je)}}function M(w,H,q,Y,G,pe){w.onBeforeRender(A,H,q,Y,G,pe),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(A,H,q,Y,w,pe),G.transparent===!0&&G.side===Nn&&G.forceSinglePass===!1?(G.side=fn,G.needsUpdate=!0,A.renderBufferDirect(q,H,Y,G,w,pe),G.side=ri,G.needsUpdate=!0,A.renderBufferDirect(q,H,Y,G,w,pe),G.side=Nn):A.renderBufferDirect(q,H,Y,G,w,pe),w.onAfterRender(A,H,q,Y,G,pe)}function Hn(w,H,q){H.isScene!==!0&&(H=ot);const Y=Ke.get(w),G=g.state.lights,pe=g.state.shadowsArray,Me=G.state.version,Le=Fe.getParameters(w,G.state,pe,H,q),Ne=Fe.getProgramCacheKey(Le);let We=Y.programs;Y.environment=w.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(w.isMeshStandardMaterial?W:b).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",ht),We=new Map,Y.programs=We);let je=We.get(Ne);if(je!==void 0){if(Y.currentProgram===je&&Y.lightsStateVersion===Me)return as(w,Le),je}else Le.uniforms=Fe.getUniforms(w),w.onBeforeCompile(Le,A),je=Fe.acquireProgram(Le,Ne),We.set(Ne,je),Y.uniforms=Le.uniforms;const Ue=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=ae.uniform),as(w,Le),Y.needsLights=li(w),Y.lightsStateVersion=Me,Y.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.directionalShadowMap.value=G.state.directionalShadowMap,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotShadowMap.value=G.state.spotShadowMap,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMap.value=G.state.pointShadowMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=je,Y.uniformsList=null,je}function dt(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=Xs.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function as(w,H){const q=Ke.get(w);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function ca(w,H,q,Y,G){H.isScene!==!0&&(H=ot),L.resetTextureUnits();const pe=H.fog,Me=Y.isMeshStandardMaterial?H.environment:null,Le=N===null?A.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:nn,Ne=(Y.isMeshStandardMaterial?W:b).get(Y.envMap||Me),We=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,gt=!!q.morphAttributes.color;let Et=bi;Y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Et=A.toneMapping);const Wt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=Wt!==void 0?Wt.length:0,Ee=Ke.get(Y),Ot=g.state.lights;if(ee===!0&&(fe===!0||w!==ce)){const sn=w===ce&&Y.id===X;ae.setState(Y,w,sn)}let mt=!1;Y.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ot.state.version||Ee.outputColorSpace!==Le||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==Ne||Y.fog===!0&&Ee.fog!==pe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ae.numPlanes||Ee.numIntersection!==ae.numIntersection)||Ee.vertexAlphas!==We||Ee.vertexTangents!==je||Ee.morphTargets!==Ue||Ee.morphNormals!==Qe||Ee.morphColors!==gt||Ee.toneMapping!==Et||Ee.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,Ee.__version=Y.version);let pn=Ee.currentProgram;mt===!0&&(pn=Hn(Y,H,G));let hi=!1,Dt=!1,An=!1;const It=pn.getUniforms(),yn=Ee.uniforms;if(Ge.useProgram(pn.program)&&(hi=!0,Dt=!0,An=!0),Y.id!==X&&(X=Y.id,Dt=!0),hi||ce!==w){rt.reverseDepthBuffer?(Pe.copy(w.projectionMatrix),Rf(Pe),Cf(Pe),It.setValue(F,"projectionMatrix",Pe)):It.setValue(F,"projectionMatrix",w.projectionMatrix),It.setValue(F,"viewMatrix",w.matrixWorldInverse);const sn=It.map.cameraPosition;sn!==void 0&&sn.setValue(F,Ze.setFromMatrixPosition(w.matrixWorld)),rt.logarithmicDepthBuffer&&It.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&It.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),ce!==w&&(ce=w,Dt=!0,An=!0)}if(G.isSkinnedMesh){It.setOptional(F,G,"bindMatrix"),It.setOptional(F,G,"bindMatrixInverse");const sn=G.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),It.setValue(F,"boneTexture",sn.boneTexture,L))}G.isBatchedMesh&&(It.setOptional(F,G,"batchingTexture"),It.setValue(F,"batchingTexture",G._matricesTexture,L),It.setOptional(F,G,"batchingIdTexture"),It.setValue(F,"batchingIdTexture",G._indirectTexture,L),It.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&It.setValue(F,"batchingColorTexture",G._colorsTexture,L));const mn=q.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&qe.update(G,q,pn),(Dt||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,It.setValue(F,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(yn.envMap.value=Ne,yn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(yn.envMapIntensity.value=H.environmentIntensity),Dt&&(It.setValue(F,"toneMappingExposure",A.toneMappingExposure),Ee.needsLights&&Hi(yn,An),pe&&Y.fog===!0&&ge.refreshFogUniforms(yn,pe),ge.refreshMaterialUniforms(yn,Y,oe,K,g.state.transmissionRenderTarget[w.id]),Xs.upload(F,dt(Ee),yn,L)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Xs.upload(F,dt(Ee),yn,L),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&It.setValue(F,"center",G.center),It.setValue(F,"modelViewMatrix",G.modelViewMatrix),It.setValue(F,"normalMatrix",G.normalMatrix),It.setValue(F,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const sn=Y.uniformsGroups;for(let Rr=0,la=sn.length;Rr<la;Rr++){const Ft=sn[Rr];z.update(Ft,pn),z.bind(Ft,pn)}}return pn}function Hi(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function li(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,H,q){Ke.get(w.texture).__webglTexture=H,Ke.get(w.depthTexture).__webglTexture=q;const Y=Ke.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,H){const q=Ke.get(w);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,q=0){N=w,V=H,B=q;let Y=!0,G=null,pe=!1,Me=!1;if(w){const Ne=Ke.get(w);if(Ne.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(Ne.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(Ne.__hasExternalTextures)L.rebindTextures(w,Ke.get(w.texture).__webglTexture,Ke.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ue=w.depthTexture;if(Ne.__boundDepthTexture!==Ue){if(Ue!==null&&Ke.has(Ue)&&(w.width!==Ue.image.width||w.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Me=!0);const je=Ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[H])?G=je[H][q]:G=je[H],pe=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?G=Ke.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?G=je[q]:G=je,T.copy(w.viewport),R.copy(w.scissor),J=w.scissorTest}else T.copy(we).multiplyScalar(oe).floor(),R.copy(Ie).multiplyScalar(oe).floor(),J=ut;if(Ge.bindFramebuffer(F.FRAMEBUFFER,G)&&Y&&Ge.drawBuffers(w,G),Ge.viewport(T),Ge.scissor(R),Ge.setScissorTest(J),pe){const Ne=Ke.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ne.__webglTexture,q)}else if(Me){const Ne=Ke.get(w.texture),We=H||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.__webglTexture,q||0,We)}X=-1},this.readRenderTargetPixels=function(w,H,q,Y,G,pe,Me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){Ge.bindFramebuffer(F.FRAMEBUFFER,Le);try{const Ne=w.texture,We=Ne.format,je=Ne.type;if(!rt.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-Y&&q>=0&&q<=w.height-G&&F.readPixels(H,q,Y,G,$e.convert(We),$e.convert(je),pe)}finally{const Ne=N!==null?Ke.get(N).__webglFramebuffer:null;Ge.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,H,q,Y,G,pe,Me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){const Ne=w.texture,We=Ne.format,je=Ne.type;if(!rt.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=w.width-Y&&q>=0&&q<=w.height-G){Ge.bindFramebuffer(F.FRAMEBUFFER,Le);const Ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ue),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(H,q,Y,G,$e.convert(We),$e.convert(je),0);const Qe=N!==null?Ke.get(N).__webglFramebuffer:null;Ge.bindFramebuffer(F.FRAMEBUFFER,Qe);const gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Af(F,gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.deleteBuffer(Ue),F.deleteSync(gt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,H=null,q=0){w.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1]);const Y=Math.pow(2,-q),G=Math.floor(w.image.width*Y),pe=Math.floor(w.image.height*Y),Me=H!==null?H.x:0,Le=H!==null?H.y:0;L.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Me,Le,G,pe),Ge.unbindTexture()},this.copyTextureToTexture=function(w,H,q=null,Y=null,G=0){w.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],H=arguments[2],G=arguments[3]||0,q=null);let pe,Me,Le,Ne,We,je;q!==null?(pe=q.max.x-q.min.x,Me=q.max.y-q.min.y,Le=q.min.x,Ne=q.min.y):(pe=w.image.width,Me=w.image.height,Le=0,Ne=0),Y!==null?(We=Y.x,je=Y.y):(We=0,je=0);const Ue=$e.convert(H.format),Qe=$e.convert(H.type);L.setTexture2D(H,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const gt=F.getParameter(F.UNPACK_ROW_LENGTH),Et=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Wt=F.getParameter(F.UNPACK_SKIP_PIXELS),pt=F.getParameter(F.UNPACK_SKIP_ROWS),Ee=F.getParameter(F.UNPACK_SKIP_IMAGES),Ot=w.isCompressedTexture?w.mipmaps[G]:w.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ne),w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,We,je,pe,Me,Ue,Qe,Ot.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,We,je,Ot.width,Ot.height,Ue,Ot.data):F.texSubImage2D(F.TEXTURE_2D,G,We,je,pe,Me,Ue,Qe,Ot),F.pixelStorei(F.UNPACK_ROW_LENGTH,gt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Wt),F.pixelStorei(F.UNPACK_SKIP_ROWS,pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ee),G===0&&H.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(w,H,q=null,Y=null,G=0){w.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],H=arguments[3],G=arguments[4]||0);let pe,Me,Le,Ne,We,je,Ue,Qe,gt;const Et=w.isCompressedTexture?w.mipmaps[G]:w.image;q!==null?(pe=q.max.x-q.min.x,Me=q.max.y-q.min.y,Le=q.max.z-q.min.z,Ne=q.min.x,We=q.min.y,je=q.min.z):(pe=Et.width,Me=Et.height,Le=Et.depth,Ne=0,We=0,je=0),Y!==null?(Ue=Y.x,Qe=Y.y,gt=Y.z):(Ue=0,Qe=0,gt=0);const Wt=$e.convert(H.format),pt=$e.convert(H.type);let Ee;if(H.isData3DTexture)L.setTexture3D(H,0),Ee=F.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)L.setTexture2DArray(H,0),Ee=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const Ot=F.getParameter(F.UNPACK_ROW_LENGTH),mt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pn=F.getParameter(F.UNPACK_SKIP_PIXELS),hi=F.getParameter(F.UNPACK_SKIP_ROWS),Dt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Et.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,We),F.pixelStorei(F.UNPACK_SKIP_IMAGES,je),w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ee,G,Ue,Qe,gt,pe,Me,Le,Wt,pt,Et.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,G,Ue,Qe,gt,pe,Me,Le,Wt,Et.data):F.texSubImage3D(Ee,G,Ue,Qe,gt,pe,Me,Le,Wt,pt,Et),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pn),F.pixelStorei(F.UNPACK_SKIP_ROWS,hi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Dt),G===0&&H.generateMipmaps&&F.generateMipmap(Ee),Ge.unbindTexture()},this.initRenderTarget=function(w){Ke.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),Ge.unbindTexture()},this.resetState=function(){V=0,B=0,N=null,Ge.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tc?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===ra?"display-p3":"srgb"}}class Cl extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ko,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new O;class oc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Pl=new O,Ll=new Mt,Dl=new Mt,Gv=new O,Il=new Oe,Ls=new O,ja=new kn,Nl=new Oe,qa=new Jr;class Vv extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fc,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ls),this.boundingBox.expandByPoint(Ls)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ls),this.boundingSphere.expandByPoint(Ls)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ja.copy(this.boundingSphere),ja.applyMatrix4(i),e.ray.intersectsSphere(ja)!==!1&&(Nl.copy(i).invert(),qa.copy(e.ray).applyMatrix4(Nl),!(this.boundingBox!==null&&qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$d?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ll.fromBufferAttribute(i.attributes.skinIndex,e),Dl.fromBufferAttribute(i.attributes.skinWeight,e),Pl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Dl.getComponent(s);if(a!==0){const o=Ll.getComponent(s);Il.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Gv.copy(Pl).applyMatrix4(Il),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Nh extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Uh extends Kt{constructor(e=null,t=1,n=1,i,s,a,o,l,h=dn,d=dn,f,m){super(null,a,o,l,h,d,i,s,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ul=new Oe,Wv=new Oe;class cc{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Wv;Ul.multiplyMatrices(o,t[s]),Ul.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new cc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Uh(t,e,e,Tn,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Nh),this.bones.push(a),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Vo extends $t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rr=new Oe,Fl=new Oe,Ds=[],Ol=new Vn,Xv=new Oe,Fr=new en,Or=new kn;class jv extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),Ol.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(Ol)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),Or.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),e.ray.intersectsSphere(Or)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,rr),Fl.multiplyMatrices(n,rr),Fr.matrixWorld=Fl,Fr.raycast(e,Ds);for(let a=0,o=Ds.length;a<o;a++){const l=Ds[a];l.instanceId=s,l.object=this,t.push(l)}Ds.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uh(new Float32Array(i*this.count),i,this.count,Jo,On));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class lr extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Js=new O,Qs=new O,Bl=new Oe,Br=new Jr,Is=new kn,Ya=new O,zl=new O;class hr extends Ut{constructor(e=new tn,t=new lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Js.fromBufferAttribute(t,i-1),Qs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Js.distanceTo(Qs);e.setAttribute("lineDistance",new zn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(i),Is.radius+=s,e.ray.intersectsSphere(Is)===!1)return;Bl.copy(i).invert(),Br.copy(e.ray).applyMatrix4(Bl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,d=n.index,m=n.attributes.position;if(d!==null){const _=Math.max(0,a.start),y=Math.min(d.count,a.start+a.count);for(let E=_,g=y-1;E<g;E+=h){const x=d.getX(E),D=d.getX(E+1),A=Ns(this,e,Br,l,x,D);A&&t.push(A)}if(this.isLineLoop){const E=d.getX(y-1),g=d.getX(_),x=Ns(this,e,Br,l,E,g);x&&t.push(x)}}else{const _=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let E=_,g=y-1;E<g;E+=h){const x=Ns(this,e,Br,l,E,E+1);x&&t.push(x)}if(this.isLineLoop){const E=Ns(this,e,Br,l,y-1,_);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ns(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(Js.fromBufferAttribute(a,i),Qs.fromBufferAttribute(a,s),t.distanceSqToSegment(Js,Qs,Ya,zl)>n)return;Ya.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Ya);if(!(l<e.near||l>e.far))return{distance:l,point:zl.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const kl=new O,Hl=new O;class lc extends hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)kl.fromBufferAttribute(t,i),Hl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kl.distanceTo(Hl);e.setAttribute("lineDistance",new zn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qv extends hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fh extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gl=new Oe,Wo=new Jr,Us=new kn,Fs=new O;class Yv extends Ut{constructor(e=new tn,t=new Fh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(i),Us.radius+=s,e.ray.intersectsSphere(Us)===!1)return;Gl.copy(i).invert(),Wo.copy(e.ray).applyMatrix4(Gl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=m,E=_;y<E;y++){const g=h.getX(y);Fs.fromBufferAttribute(f,g),Vl(Fs,g,l,i,e,t,this)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let y=m,E=_;y<E;y++)Fs.fromBufferAttribute(f,y),Vl(Fs,y,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vl(r,e,t,n,i,s,a){const o=Wo.distanceSqToPoint(r);if(o<t){const l=new O;Wo.closestPointToPoint(r,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Kv{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,h;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),h=n[i]-a,h<0)o=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const d=n[i],m=n[i+1]-d,_=(a-d)/m;return(i+_)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new nt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new O,i=[],s=[],a=[],o=new O,l=new Oe;for(let _=0;_<=e;_++){const y=_/e;i[_]=this.getTangentAt(y,new O)}s[0]=new O,a[0]=new O;let h=Number.MAX_VALUE;const d=Math.abs(i[0].x),f=Math.abs(i[0].y),m=Math.abs(i[0].z);d<=h&&(h=d,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),m<=h&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let _=1;_<=e;_++){if(s[_]=s[_-1].clone(),a[_]=a[_-1].clone(),o.crossVectors(i[_-1],i[_]),o.length()>Number.EPSILON){o.normalize();const y=Math.acos(Yt(i[_-1].dot(i[_]),-1,1));s[_].applyMatrix4(l.makeRotationAxis(o,y))}a[_].crossVectors(i[_],s[_])}if(t===!0){let _=Math.acos(Yt(s[0].dot(s[e]),-1,1));_/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(_=-_);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(i[y],_*y)),a[y].crossVectors(i[y],s[y])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class js extends Kv{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new nt){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),m=l-this.aX,_=h-this.aY;l=m*d-_*f+this.aX,h=m*f+_*d+this.aY}return n.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class aa extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wn extends aa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $v extends bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zv extends bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Os(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Jv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Qv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Wl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Oh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ts{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class e0 extends ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bc:s=e,o=2*t-n;break;case zc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:a=e,l=2*n-t;break;case zc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,d=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,_=this._weightNext,y=(n-t)/(i-t),E=y*y,g=E*y,x=-m*g+2*m*E-m*y,D=(1+m)*g+(-1.5-2*m)*E+(-.5+m)*y+1,A=(-1-_)*g+(1.5+_)*E+.5*y,P=_*g-_*E;for(let V=0;V!==o;++V)s[V]=x*a[d+V]+D*a[h+V]+A*a[l+V]+P*a[f+V];return s}}class t0 extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,d=(n-t)/(i-t),f=1-d;for(let m=0;m!==o;++m)s[m]=a[h+m]*f+a[l+m]*d;return s}}class n0 extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Os(t,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Os(e.times,Array),values:Os(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new n0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new t0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new e0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Yr:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Jv(i))for(let o=0,l=i.length;o!==l;++o){const h=i[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ga,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const h=e[o],d=e[o+1];if(h!==d&&(o!==1||h!==e[0]))if(i)l=!0;else{const f=o*n,m=f-n,_=f+n;for(let y=0;y!==n;++y){const E=t[f+y];if(E!==t[m+y]||E!==t[_+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,m=a*n;for(let _=0;_!==n;++_)t[m+_]=t[f+_]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,h=0;h!==n;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Yr;class Tr extends Xn{constructor(e,t,n){super(e,t,n)}}Tr.prototype.ValueTypeName="bool";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=qr;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Bh extends Xn{}Bh.prototype.ValueTypeName="color";class yr extends Xn{}yr.prototype.ValueTypeName="number";class i0 extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let h=e*o;for(let d=h+o;h!==d;h+=4)oi.slerpFlat(s,0,a,h-o,a,h,l);return s}}class Mr extends Xn{InterpolantFactoryMethodLinear(e){return new i0(this.times,this.values,this.getValueSize(),e)}}Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class br extends Xn{constructor(e,t,n){super(e,t,n)}}br.prototype.ValueTypeName="string";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=qr;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;class Sr extends Xn{}Sr.prototype.ValueTypeName="vector";class r0{constructor(e="",t=-1,n=[],i=Zd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(a0(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],h=[];l.push((o+s-1)%s,o,(o+1)%s),h.push(0,1,0);const d=Qv(l);l=Wl(l,1,d),h=Wl(h,1,d),!i&&l[0]===0&&(l.push(s),h.push(h[0])),a.push(new yr(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],d=h.name.match(s);if(d&&d.length>1){const f=d[1];let m=i[f];m||(i[f]=m=[]),m.push(h)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,m,_,y,E){if(_.length!==0){const g=[],x=[];Oh(_,g,x,y),g.length!==0&&E.push(new f(m,g,x))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let f=0;f<h.length;f++){const m=h[f].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const _={};let y;for(y=0;y<m.length;y++)if(m[y].morphTargets)for(let E=0;E<m[y].morphTargets.length;E++)_[m[y].morphTargets[E]]=-1;for(const E in _){const g=[],x=[];for(let D=0;D!==m[y].morphTargets.length;++D){const A=m[y];g.push(A.time),x.push(A.morphTarget===E?1:0)}i.push(new yr(".morphTargetInfluence["+E+"]",g,x))}l=_.length*a}else{const _=".bones["+t[f].name+"]";n(Sr,_+".position",m,"pos",i),n(Mr,_+".quaternion",m,"rot",i),n(Sr,_+".scale",m,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function s0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yr;case"vector":case"vector2":case"vector3":case"vector4":return Sr;case"color":return Bh;case"quaternion":return Mr;case"bool":case"boolean":return Tr;case"string":return br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function a0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=s0(r.type);if(r.times===void 0){const t=[],n=[];Oh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ei={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class o0{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return h.push(d,f),this},this.removeHandler=function(d){const f=h.indexOf(d);return f!==-1&&h.splice(f,2),this},this.getHandler=function(d){for(let f=0,m=h.length;f<m;f+=2){const _=h[f],y=h[f+1];if(_.global&&(_.lastIndex=0),_.test(d))return y}return null}}}const c0=new o0;class wr{constructor(e){this.manager=e!==void 0?e:c0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class l0 extends Error{constructor(e,t){super(e),this.response=t}}class zh extends wr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ei.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:i});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=Qn[e],f=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),_=m?parseInt(m):0,y=_!==0;let E=0;const g=new ReadableStream({start(x){D();function D(){f.read().then(({done:A,value:P})=>{if(A)x.close();else{E+=P.byteLength;const V=new ProgressEvent("progress",{lengthComputable:y,loaded:E,total:_});for(let B=0,N=d.length;B<N;B++){const X=d[B];X.onProgress&&X.onProgress(V)}x.enqueue(P),D()}},A=>{x.error(A)})}}});return new Response(g)}else throw new l0(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return h.json();default:if(o===void 0)return h.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),m=f&&f[1]?f[1].toLowerCase():void 0,_=new TextDecoder(m);return h.arrayBuffer().then(y=>_.decode(y))}}}).then(h=>{Ei.add(e,h);const d=Qn[e];delete Qn[e];for(let f=0,m=d.length;f<m;f++){const _=d[f];_.onLoad&&_.onLoad(h)}}).catch(h=>{const d=Qn[e];if(d===void 0)throw this.manager.itemError(e),h;delete Qn[e];for(let f=0,m=d.length;f<m;f++){const _=d[f];_.onError&&_.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class h0 extends wr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ei.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Kr("img");function l(){d(),Ei.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(f){d(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class u0 extends wr{constructor(e){super(e)}load(e,t,n,i){const s=new Kt,a=new h0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class oa extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ka=new Oe,Xl=new O,jl=new O;class hc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xl),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),Ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class d0 extends hc{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class f0 extends oa{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new d0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ql=new Oe,zr=new O,$a=new O;class p0 extends hc{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(zr),$a.copy(n.position),$a.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($a),n.updateMatrixWorld(),i.makeTranslation(-zr.x,-zr.y,-zr.z),ql.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql)}}class m0 extends oa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new p0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _0 extends hc{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kh extends oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new _0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class g0 extends oa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class v0 extends wr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ei.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return Ei.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Ei.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ei.add(e,l),s.manager.itemStart(e)}}const uc="\\[\\]\\.:\\/",x0=new RegExp("["+uc+"]","g"),dc="[^"+uc+"]",y0="[^"+uc.replace("\\.","")+"]",M0=/((?:WC+[\/:])*)/.source.replace("WC",dc),S0=/(WCOD+)?/.source.replace("WCOD",y0),E0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),T0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),b0=new RegExp("^"+M0+S0+E0+T0+"$"),w0=["material","materials","bones","map"];class A0{constructor(e,t,n){const i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(e){const t=b0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);w0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=A0;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Yl=new Oe;class R0{constructor(e,t,n=0,i=1/0){this.ray=new Jr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yl),this}intersectObject(e,t=!0,n=[]){return Xo(e,this,n,t),n.sort(Kl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Xo(e[i],this,n,t);return n.sort(Kl),n}}function Kl(r,e){return r.distance-e.distance}function Xo(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Xo(s[a],e,t,!0)}}class C0 extends lc{constructor(e=10,t=10,n=4473924,i=8947848){n=new He(n),i=new He(i);const s=t/2,a=e/t,o=e/2,l=[],h=[];for(let m=0,_=0,y=-o;m<=t;m++,y+=a){l.push(-o,0,y,o,0,y),l.push(y,0,-o,y,0,o);const E=m===s?n:i;E.toArray(h,_),_+=3,E.toArray(h,_),_+=3,E.toArray(h,_),_+=3,E.toArray(h,_),_+=3}const d=new tn;d.setAttribute("position",new zn(l,3)),d.setAttribute("color",new zn(h,3));const f=new lr({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class P0 extends ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);class L0{constructor(){this.clipPlanes=[],this.planeMesh=void 0,this.pickgeometry=void 0,this.wireframegeo=void 0,this.modelmesh=void 0,this.modellinesegs=void 0,this.objaux=void 0,this.scene=new Cl,this.pickingScene=new Cl,this.renderer=void 0,this.clearColor=new He,this.highlightgeometry=void 0,this.highlightpart=void 0,this.camera=void 0,this.loadevent=new Event("loadstp"),this.pickingTexture=new wi(1,1,{type:$r,format:na,internalFormat:"RGBA32I"}),this.pickingMaterial=new ai({glslVersion:Ho,vertexShader:`
                attribute int id;
                flat varying int vid;
                void main() {

                    vid = id;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

                }
            `,fragmentShader:`
                layout(location = 0) out int out_id;
                flat varying int vid;

                void main() {

                    out_id = vid;

                }
            `});const e=16777215;this.surfmat=new aa({color:e,clippingPlanes:[]}),this.surfmat.polygonOffset=!0,this.surfmat.polygonOffsetUnit=1,this.surfmat.polygonOffsetFactor=1,this.surfmat.side=Nn}dispose(){this.modelmesh&&this.scene.remove(this.modelmesh),this.modellinesegs&&this.scene.remove(this.modellinesegs),this.pickingScene.clear(),this.pickgeometry&&this.pickgeometry.dispose(),this.wireframegeo&&this.wireframegeo.dispose(),this.modelmesh=void 0,this.modellinesegs=void 0,this.pickgeometry=void 0,this.wireframegeo=void 0}}function D0(){return{offset:new O(0,0,0),direction:new O(0,0,-1),up:new O(0,1,0),distance:1.5}}function I0(r){const e=r.max.x-r.min.x,t=r.max.y-r.min.y,n=r.max.z-r.min.z;return Math.sqrt(e*e+t*t+n*n)}function N0(r,e,t,n){let i,s;i=I0(r);const a=(r.max.x+r.min.x)/2,o=(r.max.y+r.min.y)/2,l=(r.max.z+r.min.z)/2;s=new O(a,o,l);const h=new O().addVectors(e.offset,s),d=e.direction,f=e.up,m=e.distance*i;n.rotateSpeed=10,n.dynamicDampingFactor=1,n.target.set(h.x,h.y,h.z),t.position.set(h.x,h.y,h.z),t.up.set(f.x,f.y,f.z),t.lookAt(new O().addVectors(h,d)),t.up.set(f.x,f.y,f.z),t.translateZ(m),n.update()}const ze={IDLE:Symbol(),ROTATE:Symbol(),PAN:Symbol(),SCALE:Symbol(),FOV:Symbol(),FOCUS:Symbol(),ZROTATE:Symbol(),TOUCH_MULTI:Symbol(),ANIMATION_FOCUS:Symbol(),ANIMATION_ROTATE:Symbol()},wt={NONE:Symbol(),ONE_FINGER:Symbol(),ONE_FINGER_SWITCHED:Symbol(),TWO_FINGER:Symbol(),MULT_FINGER:Symbol(),CURSOR:Symbol()},Je={x:0,y:0},vn={camera:new Oe,gizmos:new Oe},Rt={type:"change"},In={type:"start"},Sn={type:"end"},U0=new R0,zt=new O,$l=new Oe,Zl=new Oe,Dn=new O;class F0 extends P0{constructor(e,t=null,n=null){super(e,t),this.scene=n,this.target=new O,this._currentTarget=new O,this.radiusFactor=.67,this.mouseActions=[],this._mouseOp=null,this._v2_1=new nt,this._v3_1=new O,this._v3_2=new O,this._m4_1=new Oe,this._m4_2=new Oe,this._quat=new oi,this._translationMatrix=new Oe,this._rotationMatrix=new Oe,this._scaleMatrix=new Oe,this._rotationAxis=new O,this._cameraMatrixState=new Oe,this._cameraProjectionState=new Oe,this._fovState=1,this._upState=new O,this._zoomState=1,this._nearPos=0,this._farPos=0,this._gizmoMatrixState=new Oe,this._up0=new O,this._zoom0=1,this._fov0=0,this._initialNear=0,this._nearPos0=0,this._initialFar=0,this._farPos0=0,this._cameraMatrixState0=new Oe,this._gizmoMatrixState0=new Oe,this._button=-1,this._touchStart=[],this._touchCurrent=[],this._input=wt.NONE,this._switchSensibility=32,this._startFingerDistance=0,this._currentFingerDistance=0,this._startFingerRotation=0,this._currentFingerRotation=0,this._devPxRatio=0,this._downValid=!0,this._nclicks=0,this._downEvents=[],this._downStart=0,this._clickStart=0,this._maxDownTime=250,this._maxInterval=300,this._posThreshold=24,this._movementThreshold=24,this._currentCursorPosition=new O,this._startCursorPosition=new O,this._grid=null,this._gridPosition=new O,this._gizmos=new Si,this._curvePts=128,this._timeStart=-1,this._animationId=-1,this.focusAnimationTime=500,this._timePrev=0,this._timeCurrent=0,this._anglePrev=0,this._angleCurrent=0,this._cursorPosPrev=new O,this._cursorPosCurr=new O,this._wPrev=0,this._wCurr=0,this.adjustNearFar=!1,this.scaleFactor=1.1,this.dampingFactor=25,this.wMax=20,this.enableAnimations=!0,this.enableGrid=!1,this.cursorZoom=!1,this.minFov=5,this.maxFov=90,this.rotateSpeed=1,this.enablePan=!0,this.enableRotate=!0,this.enableZoom=!0,this.enableGizmos=!0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this._tbRadius=1,this._state=ze.IDLE,this.setCamera(e),this.scene!=null&&this.scene.add(this._gizmos),this.initializeMouseActions(),this._onContextMenu=B0.bind(this),this._onWheel=V0.bind(this),this._onPointerUp=G0.bind(this),this._onPointerMove=H0.bind(this),this._onPointerDown=k0.bind(this),this._onPointerCancel=z0.bind(this),this._onWindowResize=O0.bind(this),t!==null&&this.connect()}connect(){this.domElement.style.touchAction="none",this._devPxRatio=window.devicePixelRatio,this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onWheel),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),window.addEventListener("resize",this._onWindowResize)}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),window.removeEventListener("resize",this._onWindowResize)}onSinglePanStart(e,t){if(this.enabled)switch(this.dispatchEvent(In),this.setCenter(e.clientX,e.clientY),t){case"PAN":if(!this.enablePan)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Rt)),this.updateTbState(ze.PAN,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.object,Je.x,Je.y,this.domElement)),this.enableGrid&&(this.drawGrid(),this.dispatchEvent(Rt));break;case"ROTATE":if(!this.enableRotate)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1),this.updateTbState(ze.ROTATE,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.object,Je.x,Je.y,this.domElement,this._tbRadius)),this.activateGizmos(!0),this.enableAnimations&&(this._timePrev=this._timeCurrent=performance.now(),this._angleCurrent=this._anglePrev=0,this._cursorPosPrev.copy(this._startCursorPosition),this._cursorPosCurr.copy(this._cursorPosPrev),this._wCurr=0,this._wPrev=this._wCurr),this.dispatchEvent(Rt);break;case"FOV":if(!this.object.isPerspectiveCamera||!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Rt)),this.updateTbState(ze.FOV,!0),this._startCursorPosition.setY(this.getCursorNDC(Je.x,Je.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break;case"ZOOM":if(!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Rt)),this.updateTbState(ze.SCALE,!0),this._startCursorPosition.setY(this.getCursorNDC(Je.x,Je.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break}}onSinglePanMove(e,t){if(this.enabled){const n=t!=this._state;switch(this.setCenter(e.clientX,e.clientY),t){case ze.PAN:this.enablePan&&(n?(this.dispatchEvent(Sn),this.dispatchEvent(In),this.updateTbState(t,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.object,Je.x,Je.y,this.domElement)),this.enableGrid&&this.drawGrid(),this.activateGizmos(!1)):(this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.object,Je.x,Je.y,this.domElement)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition))));break;case ze.ROTATE:if(this.enableRotate)if(n)this.dispatchEvent(Sn),this.dispatchEvent(In),this.updateTbState(t,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.object,Je.x,Je.y,this.domElement,this._tbRadius)),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!0);else{this._currentCursorPosition.copy(this.unprojectOnTbSurface(this.object,Je.x,Je.y,this.domElement,this._tbRadius));const i=this._startCursorPosition.distanceTo(this._currentCursorPosition),s=this._startCursorPosition.angleTo(this._currentCursorPosition),a=Math.max(i/this._tbRadius,s)*this.rotateSpeed;this.applyTransformMatrix(this.rotate(this.calculateRotationAxis(this._startCursorPosition,this._currentCursorPosition),a)),this.enableAnimations&&(this._timePrev=this._timeCurrent,this._timeCurrent=performance.now(),this._anglePrev=this._angleCurrent,this._angleCurrent=a,this._cursorPosPrev.copy(this._cursorPosCurr),this._cursorPosCurr.copy(this._currentCursorPosition),this._wPrev=this._wCurr,this._wCurr=this.calculateAngularSpeed(this._anglePrev,this._angleCurrent,this._timePrev,this._timeCurrent))}break;case ze.SCALE:if(this.enableZoom)if(n)this.dispatchEvent(Sn),this.dispatchEvent(In),this.updateTbState(t,!0),this._startCursorPosition.setY(this.getCursorNDC(Je.x,Je.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(Je.x,Je.y,this.domElement).y*.5);const s=this._currentCursorPosition.y-this._startCursorPosition.y;let a=1;s<0?a=1/Math.pow(this.scaleFactor,-s*8):s>0&&(a=Math.pow(this.scaleFactor,s*8)),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this.applyTransformMatrix(this.scale(a,this._v3_1))}break;case ze.FOV:if(this.enableZoom&&this.object.isPerspectiveCamera)if(n)this.dispatchEvent(Sn),this.dispatchEvent(In),this.updateTbState(t,!0),this._startCursorPosition.setY(this.getCursorNDC(Je.x,Je.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(Je.x,Je.y,this.domElement).y*.5);const s=this._currentCursorPosition.y-this._startCursorPosition.y;let a=1;s<0?a=1/Math.pow(this.scaleFactor,-s*8):s>0&&(a=Math.pow(this.scaleFactor,s*8)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const o=this._v3_1.distanceTo(this._gizmos.position);let l=o/a;l=Nt.clamp(l,this.minDistance,this.maxDistance);const h=o*Math.tan(Nt.DEG2RAD*this._fovState*.5);let d=Nt.RAD2DEG*(Math.atan(h/l)*2);d=Nt.clamp(d,this.minFov,this.maxFov);const f=h/Math.tan(Nt.DEG2RAD*(d/2));a=o/f,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(d),this.applyTransformMatrix(this.scale(a,this._v3_2,!1)),zt.copy(this._gizmos.position).sub(this.object.position).normalize().multiplyScalar(f/o),this._m4_1.makeTranslation(zt.x,zt.y,zt.z)}break}this.dispatchEvent(Rt)}}onSinglePanEnd(){if(this._state==ze.ROTATE){if(!this.enableRotate)return;if(this.enableAnimations)if(performance.now()-this._timeCurrent<120){const t=Math.abs((this._wPrev+this._wCurr)/2),n=this;this._animationId=window.requestAnimationFrame(function(i){n.updateTbState(ze.ANIMATION_ROTATE,!0);const s=n.calculateRotationAxis(n._cursorPosPrev,n._cursorPosCurr);n.onRotationAnim(i,s,Math.min(t,n.wMax))})}else this.updateTbState(ze.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Rt);else this.updateTbState(ze.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Rt)}else(this._state==ze.PAN||this._state==ze.IDLE)&&(this.updateTbState(ze.IDLE,!1),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1),this.dispatchEvent(Rt));this.dispatchEvent(Sn)}onDoubleTap(e){if(this.enabled&&this.enablePan&&this.scene!=null){this.dispatchEvent(In),this.setCenter(e.clientX,e.clientY);const t=this.unprojectOnObj(this.getCursorNDC(Je.x,Je.y,this.domElement),this.object);if(t!=null&&this.enableAnimations){const n=this;this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this._timeStart=-1,this._animationId=window.requestAnimationFrame(function(i){n.updateTbState(ze.ANIMATION_FOCUS,!0),n.onFocusAnim(i,t,n._cameraMatrixState,n._gizmoMatrixState)})}else t!=null&&!this.enableAnimations&&(this.updateTbState(ze.FOCUS,!0),this.focus(t,this.scaleFactor),this.updateTbState(ze.IDLE,!1),this.dispatchEvent(Rt))}this.dispatchEvent(Sn)}onDoublePanStart(){this.enabled&&this.enablePan&&(this.dispatchEvent(In),this.updateTbState(ze.PAN,!0),this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.object,Je.x,Je.y,this.domElement,!0)),this._currentCursorPosition.copy(this._startCursorPosition),this.activateGizmos(!1))}onDoublePanMove(){this.enabled&&this.enablePan&&(this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._state!=ze.PAN&&(this.updateTbState(ze.PAN,!0),this._startCursorPosition.copy(this._currentCursorPosition)),this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.object,Je.x,Je.y,this.domElement,!0)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition,!0)),this.dispatchEvent(Rt))}onDoublePanEnd(){this.updateTbState(ze.IDLE,!1),this.dispatchEvent(Sn)}onRotateStart(){this.enabled&&this.enableRotate&&(this.dispatchEvent(In),this.updateTbState(ze.ZROTATE,!0),this._startFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this._currentFingerRotation=this._startFingerRotation,this.object.getWorldDirection(this._rotationAxis),!this.enablePan&&!this.enableZoom&&this.activateGizmos(!0))}onRotateMove(){if(this.enabled&&this.enableRotate){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);let e;this._state!=ze.ZROTATE&&(this.updateTbState(ze.ZROTATE,!0),this._startFingerRotation=this._currentFingerRotation),this._currentFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this.enablePan?(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),e=this.unprojectOnTbPlane(this.object,Je.x,Je.y,this.domElement).applyQuaternion(this.object.quaternion).multiplyScalar(1/this.object.zoom).add(this._v3_2)):e=new O().setFromMatrixPosition(this._gizmoMatrixState);const t=Nt.DEG2RAD*(this._startFingerRotation-this._currentFingerRotation);this.applyTransformMatrix(this.zRotate(e,t)),this.dispatchEvent(Rt)}}onRotateEnd(){this.updateTbState(ze.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Sn)}onPinchStart(){this.enabled&&this.enableZoom&&(this.dispatchEvent(In),this.updateTbState(ze.SCALE,!0),this._startFingerDistance=this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),this._currentFingerDistance=this._startFingerDistance,this.activateGizmos(!1))}onPinchMove(){if(this.enabled&&this.enableZoom){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);const e=12;this._state!=ze.SCALE&&(this._startFingerDistance=this._currentFingerDistance,this.updateTbState(ze.SCALE,!0)),this._currentFingerDistance=Math.max(this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),e*this._devPxRatio);const t=this._currentFingerDistance/this._startFingerDistance;let n;this.enablePan?this.object.isOrthographicCamera?n=this.unprojectOnTbPlane(this.object,Je.x,Je.y,this.domElement).applyQuaternion(this.object.quaternion).multiplyScalar(1/this.object.zoom).add(this._gizmos.position):this.object.isPerspectiveCamera&&(n=this.unprojectOnTbPlane(this.object,Je.x,Je.y,this.domElement).applyQuaternion(this.object.quaternion).add(this._gizmos.position)):n=this._gizmos.position,this.applyTransformMatrix(this.scale(t,n)),this.dispatchEvent(Rt)}}onPinchEnd(){this.updateTbState(ze.IDLE,!1),this.dispatchEvent(Sn)}onTriplePanStart(){if(this.enabled&&this.enableZoom){this.dispatchEvent(In),this.updateTbState(ze.SCALE,!0);let e=0,t=0;const n=this._touchCurrent.length;for(let i=0;i<n;i++)e+=this._touchCurrent[i].clientX,t+=this._touchCurrent[i].clientY;this.setCenter(e/n,t/n),this._startCursorPosition.setY(this.getCursorNDC(Je.x,Je.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition)}}onTriplePanMove(){if(this.enabled&&this.enableZoom){let e=0,t=0;const n=this._touchCurrent.length;for(let m=0;m<n;m++)e+=this._touchCurrent[m].clientX,t+=this._touchCurrent[m].clientY;this.setCenter(e/n,t/n);const i=8;this._currentCursorPosition.setY(this.getCursorNDC(Je.x,Je.y,this.domElement).y*.5);const s=this._currentCursorPosition.y-this._startCursorPosition.y;let a=1;s<0?a=1/Math.pow(this.scaleFactor,-s*i):s>0&&(a=Math.pow(this.scaleFactor,s*i)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const o=this._v3_1.distanceTo(this._gizmos.position);let l=o/a;l=Nt.clamp(l,this.minDistance,this.maxDistance);const h=o*Math.tan(Nt.DEG2RAD*this._fovState*.5);let d=Nt.RAD2DEG*(Math.atan(h/l)*2);d=Nt.clamp(d,this.minFov,this.maxFov);const f=h/Math.tan(Nt.DEG2RAD*(d/2));a=o/f,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(d),this.applyTransformMatrix(this.scale(a,this._v3_2,!1)),zt.copy(this._gizmos.position).sub(this.object.position).normalize().multiplyScalar(f/o),this._m4_1.makeTranslation(zt.x,zt.y,zt.z),this.dispatchEvent(Rt)}}onTriplePanEnd(){this.updateTbState(ze.IDLE,!1),this.dispatchEvent(Sn)}setCenter(e,t){Je.x=e,Je.y=t}initializeMouseActions(){this.setMouseAction("PAN",0,"CTRL"),this.setMouseAction("PAN",2),this.setMouseAction("ROTATE",0),this.setMouseAction("ZOOM","WHEEL"),this.setMouseAction("ZOOM",1),this.setMouseAction("FOV","WHEEL","SHIFT"),this.setMouseAction("FOV",1,"SHIFT")}compareMouseAction(e,t){return e.operation==t.operation?e.mouse==t.mouse&&e.key==t.key:!1}setMouseAction(e,t,n=null){const i=["PAN","ROTATE","ZOOM","FOV"],s=[0,1,2,"WHEEL"],a=["CTRL","SHIFT",null];let o;if(!i.includes(e)||!s.includes(t)||!a.includes(n)||t=="WHEEL"&&e!="ZOOM"&&e!="FOV")return!1;switch(e){case"PAN":o=ze.PAN;break;case"ROTATE":o=ze.ROTATE;break;case"ZOOM":o=ze.SCALE;break;case"FOV":o=ze.FOV;break}const l={operation:e,mouse:t,key:n,state:o};for(let h=0;h<this.mouseActions.length;h++)if(this.mouseActions[h].mouse==l.mouse&&this.mouseActions[h].key==l.key)return this.mouseActions.splice(h,1,l),!0;return this.mouseActions.push(l),!0}unsetMouseAction(e,t=null){for(let n=0;n<this.mouseActions.length;n++)if(this.mouseActions[n].mouse==e&&this.mouseActions[n].key==t)return this.mouseActions.splice(n,1),!0;return!1}getOpFromAction(e,t){let n;for(let i=0;i<this.mouseActions.length;i++)if(n=this.mouseActions[i],n.mouse==e&&n.key==t)return n.operation;if(t!=null){for(let i=0;i<this.mouseActions.length;i++)if(n=this.mouseActions[i],n.mouse==e&&n.key==null)return n.operation}return null}getOpStateFromAction(e,t){let n;for(let i=0;i<this.mouseActions.length;i++)if(n=this.mouseActions[i],n.mouse==e&&n.key==t)return n.state;if(t!=null){for(let i=0;i<this.mouseActions.length;i++)if(n=this.mouseActions[i],n.mouse==e&&n.key==null)return n.state}return null}getAngle(e,t){return Math.atan2(t.clientY-e.clientY,t.clientX-e.clientX)*180/Math.PI}updateTouchEvent(e){for(let t=0;t<this._touchCurrent.length;t++)if(this._touchCurrent[t].pointerId==e.pointerId){this._touchCurrent.splice(t,1,e);break}}applyTransformMatrix(e){if(e.camera!=null&&(this._m4_1.copy(this._cameraMatrixState).premultiply(e.camera),this._m4_1.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.updateMatrix(),(this._state==ze.ROTATE||this._state==ze.ZROTATE||this._state==ze.ANIMATION_ROTATE)&&this.object.up.copy(this._upState).applyQuaternion(this.object.quaternion)),e.gizmos!=null&&(this._m4_1.copy(this._gizmoMatrixState).premultiply(e.gizmos),this._m4_1.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix()),this._state==ze.SCALE||this._state==ze.FOCUS||this._state==ze.ANIMATION_FOCUS)if(this._tbRadius=this.calculateTbRadius(this.object),this.adjustNearFar){const t=this.object.position.distanceTo(this._gizmos.position),n=new Vn;n.setFromObject(this._gizmos);const i=new kn;n.getBoundingSphere(i);const s=Math.max(this._nearPos0,i.radius+i.center.length()),a=t-this._initialNear,o=Math.min(s,a);this.object.near=t-o;const l=Math.min(this._farPos0,-i.radius+i.center.length()),h=t-this._initialFar,d=Math.min(l,h);this.object.far=t-d,this.object.updateProjectionMatrix()}else{let t=!1;this.object.near!=this._initialNear&&(this.object.near=this._initialNear,t=!0),this.object.far!=this._initialFar&&(this.object.far=this._initialFar,t=!0),t&&this.object.updateProjectionMatrix()}}calculateAngularSpeed(e,t,n,i){const s=t-e,a=(i-n)/1e3;return a==0?0:s/a}calculatePointersDistance(e,t){return Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2))}calculateRotationAxis(e,t){return this._rotationMatrix.extractRotation(this._cameraMatrixState),this._quat.setFromRotationMatrix(this._rotationMatrix),this._rotationAxis.crossVectors(e,t).applyQuaternion(this._quat),this._rotationAxis.normalize().clone()}calculateTbRadius(e){const t=e.position.distanceTo(this._gizmos.position);if(e.type=="PerspectiveCamera"){const n=Nt.DEG2RAD*e.fov*.5,i=Math.atan(e.aspect*Math.tan(n));return Math.tan(Math.min(n,i))*t*this.radiusFactor}else if(e.type=="OrthographicCamera")return Math.min(e.top,e.right)*this.radiusFactor}focus(e,t,n=1){zt.copy(e).sub(this._gizmos.position).multiplyScalar(n),this._translationMatrix.makeTranslation(zt.x,zt.y,zt.z),$l.copy(this._gizmoMatrixState),this._gizmoMatrixState.premultiply(this._translationMatrix),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),Zl.copy(this._cameraMatrixState),this._cameraMatrixState.premultiply(this._translationMatrix),this._cameraMatrixState.decompose(this.object.position,this.object.quaternion,this.object.scale),this.enableZoom&&this.applyTransformMatrix(this.scale(t,this._gizmos.position)),this._gizmoMatrixState.copy($l),this._cameraMatrixState.copy(Zl)}drawGrid(){if(this.scene!=null){let n,i,s,a;if(this.object.isOrthographicCamera){const o=this.object.right-this.object.left,l=this.object.bottom-this.object.top;s=Math.max(o,l),a=s/20,n=s/this.object.zoom*3,i=n/a*this.object.zoom}else if(this.object.isPerspectiveCamera){const o=this.object.position.distanceTo(this._gizmos.position),l=Nt.DEG2RAD*this.object.fov*.5,h=Math.atan(this.object.aspect*Math.tan(l));s=Math.tan(Math.max(l,h))*o*2,a=s/20,n=s*3,i=n/a}this._grid==null&&(this._grid=new C0(n,i,8947848,8947848),this._grid.position.copy(this._gizmos.position),this._gridPosition.copy(this._grid.position),this._grid.quaternion.copy(this.object.quaternion),this._grid.rotateX(Math.PI*.5),this.scene.add(this._grid))}}dispose(){this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this.disconnect(),this.scene!==null&&this.scene.remove(this._gizmos),this.disposeGrid()}disposeGrid(){this._grid!=null&&this.scene!=null&&(this.scene.remove(this._grid),this._grid=null)}easeOutCubic(e){return 1-Math.pow(1-e,3)}activateGizmos(e){const t=this._gizmos.children[0],n=this._gizmos.children[1],i=this._gizmos.children[2];e?(t.material.setValues({opacity:1}),n.material.setValues({opacity:1}),i.material.setValues({opacity:1})):(t.material.setValues({opacity:.6}),n.material.setValues({opacity:.6}),i.material.setValues({opacity:.6}))}getCursorNDC(e,t,n){const i=n.getBoundingClientRect();return this._v2_1.setX((e-i.left)/i.width*2-1),this._v2_1.setY((i.bottom-t)/i.height*2-1),this._v2_1.clone()}getCursorPosition(e,t,n){return this._v2_1.copy(this.getCursorNDC(e,t,n)),this._v2_1.x*=(this.object.right-this.object.left)*.5,this._v2_1.y*=(this.object.top-this.object.bottom)*.5,this._v2_1.clone()}setCamera(e){e.lookAt(this.target),e.updateMatrix(),e.type=="PerspectiveCamera"&&(this._fov0=e.fov,this._fovState=e.fov),this._cameraMatrixState0.copy(e.matrix),this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraProjectionState.copy(e.projectionMatrix),this._zoom0=e.zoom,this._zoomState=this._zoom0,this._initialNear=e.near,this._nearPos0=e.position.distanceTo(this.target)-e.near,this._nearPos=this._initialNear,this._initialFar=e.far,this._farPos0=e.position.distanceTo(this.target)-e.far,this._farPos=this._initialFar,this._up0.copy(e.up),this._upState.copy(e.up),this.object=e,this.object.updateProjectionMatrix(),this._tbRadius=this.calculateTbRadius(e),this.makeGizmos(this.target,this._tbRadius)}setGizmosVisible(e){this._gizmos.visible=e,this.dispatchEvent(Rt)}setTbRadius(e){this.radiusFactor=e,this._tbRadius=this.calculateTbRadius(this.object);const n=new js(0,0,this._tbRadius,this._tbRadius).getPoints(this._curvePts),i=new tn().setFromPoints(n);for(const s in this._gizmos.children)this._gizmos.children[s].geometry=i;this.dispatchEvent(Rt)}makeGizmos(e,t){const i=new js(0,0,t,t).getPoints(this._curvePts),s=new tn().setFromPoints(i),a=new lr({color:16744576,fog:!1,transparent:!0,opacity:.6}),o=new lr({color:8454016,fog:!1,transparent:!0,opacity:.6}),l=new lr({color:8421631,fog:!1,transparent:!0,opacity:.6}),h=new hr(s,a),d=new hr(s,o),f=new hr(s,l),m=Math.PI*.5;if(h.rotation.x=m,d.rotation.y=m,this._gizmoMatrixState0.identity().setPosition(e),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this.object.zoom!==1){const _=1/this.object.zoom;this._scaleMatrix.makeScale(_,_,_),this._translationMatrix.makeTranslation(-e.x,-e.y,-e.z),this._gizmoMatrixState.premultiply(this._translationMatrix).premultiply(this._scaleMatrix),this._translationMatrix.makeTranslation(e.x,e.y,e.z),this._gizmoMatrixState.premultiply(this._translationMatrix)}this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.traverse(function(_){_.isLine&&(_.geometry.dispose(),_.material.dispose())}),this._gizmos.clear(),this._gizmos.add(h),this._gizmos.add(d),this._gizmos.add(f)}onFocusAnim(e,t,n,i){if(this._timeStart==-1&&(this._timeStart=e),this._state==ze.ANIMATION_FOCUS){const a=(e-this._timeStart)/this.focusAnimationTime;if(this._gizmoMatrixState.copy(i),a>=1)this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(t,this.scaleFactor),this._timeStart=-1,this.updateTbState(ze.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Rt);else{const o=this.easeOutCubic(a),l=1-o+this.scaleFactor*o;this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(t,l,o),this.dispatchEvent(Rt);const h=this;this._animationId=window.requestAnimationFrame(function(d){h.onFocusAnim(d,t,n,i.clone())})}}else this._animationId=-1,this._timeStart=-1}onRotationAnim(e,t,n){if(this._timeStart==-1&&(this._anglePrev=0,this._angleCurrent=0,this._timeStart=e),this._state==ze.ANIMATION_ROTATE){const i=(e-this._timeStart)/1e3;if(n+-this.dampingFactor*i>0){this._angleCurrent=.5*-this.dampingFactor*Math.pow(i,2)+n*i+0,this.applyTransformMatrix(this.rotate(t,this._angleCurrent)),this.dispatchEvent(Rt);const a=this;this._animationId=window.requestAnimationFrame(function(o){a.onRotationAnim(o,t,n)})}else this._animationId=-1,this._timeStart=-1,this.updateTbState(ze.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Rt)}else this._animationId=-1,this._timeStart=-1,this._state!=ze.ROTATE&&(this.activateGizmos(!1),this.dispatchEvent(Rt))}pan(e,t,n=!1){const i=e.clone().sub(t);if(this.object.isOrthographicCamera)i.multiplyScalar(1/this.object.zoom);else if(this.object.isPerspectiveCamera&&n){this._v3_1.setFromMatrixPosition(this._cameraMatrixState0),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0);const s=this._v3_1.distanceTo(this._v3_2)/this.object.position.distanceTo(this._gizmos.position);i.multiplyScalar(1/s)}return this._v3_1.set(i.x,i.y,0).applyQuaternion(this.object.quaternion),this._m4_1.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z),this.setTransformationMatrices(this._m4_1,this._m4_1),vn}reset(){this.object.zoom=this._zoom0,this.object.isPerspectiveCamera&&(this.object.fov=this._fov0),this.object.near=this._nearPos,this.object.far=this._farPos,this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraMatrixState.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.up.copy(this._up0),this.object.updateMatrix(),this.object.updateProjectionMatrix(),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this._gizmoMatrixState0.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.object),this.makeGizmos(this._gizmos.position,this._tbRadius),this.object.lookAt(this._gizmos.position),this.updateTbState(ze.IDLE,!1),this.dispatchEvent(Rt)}rotate(e,t){const n=this._gizmos.position;return this._translationMatrix.makeTranslation(-n.x,-n.y,-n.z),this._rotationMatrix.makeRotationAxis(e,-t),this._m4_1.makeTranslation(n.x,n.y,n.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1),vn}copyState(){let e;this.object.isOrthographicCamera?e=JSON.stringify({arcballState:{cameraFar:this.object.far,cameraMatrix:this.object.matrix,cameraNear:this.object.near,cameraUp:this.object.up,cameraZoom:this.object.zoom,gizmoMatrix:this._gizmos.matrix}}):this.object.isPerspectiveCamera&&(e=JSON.stringify({arcballState:{cameraFar:this.object.far,cameraFov:this.object.fov,cameraMatrix:this.object.matrix,cameraNear:this.object.near,cameraUp:this.object.up,cameraZoom:this.object.zoom,gizmoMatrix:this._gizmos.matrix}})),navigator.clipboard.writeText(e)}pasteState(){const e=this;navigator.clipboard.readText().then(function(n){e.setStateFromJSON(n)})}saveState(){this._cameraMatrixState0.copy(this.object.matrix),this._gizmoMatrixState0.copy(this._gizmos.matrix),this._nearPos=this.object.near,this._farPos=this.object.far,this._zoom0=this.object.zoom,this._up0.copy(this.object.up),this.object.isPerspectiveCamera&&(this._fov0=this.object.fov)}scale(e,t,n=!0){Dn.copy(t);let i=1/e;if(this.object.isOrthographicCamera){this.object.zoom=this._zoomState,this.object.zoom*=e,this.object.zoom>this.maxZoom?(this.object.zoom=this.maxZoom,i=this._zoomState/this.maxZoom):this.object.zoom<this.minZoom&&(this.object.zoom=this.minZoom,i=this._zoomState/this.minZoom),this.object.updateProjectionMatrix(),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this._scaleMatrix.makeScale(i,i,i),this._translationMatrix.makeTranslation(-this._v3_1.x,-this._v3_1.y,-this._v3_1.z),this._m4_2.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z).multiply(this._scaleMatrix),this._m4_2.multiply(this._translationMatrix),Dn.sub(this._v3_1);const s=Dn.clone().multiplyScalar(i);return Dn.sub(s),this._m4_1.makeTranslation(Dn.x,Dn.y,Dn.z),this._m4_2.premultiply(this._m4_1),this.setTransformationMatrices(this._m4_1,this._m4_2),vn}else if(this.object.isPerspectiveCamera){this._v3_1.setFromMatrixPosition(this._cameraMatrixState),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState);let s=this._v3_1.distanceTo(Dn),a=s-s*i;const o=s-a;if(o<this.minDistance?(i=this.minDistance/s,a=s-s*i):o>this.maxDistance&&(i=this.maxDistance/s,a=s-s*i),zt.copy(Dn).sub(this._v3_1).normalize().multiplyScalar(a),this._m4_1.makeTranslation(zt.x,zt.y,zt.z),n){const l=this._v3_2;s=l.distanceTo(Dn),a=s-s*i,zt.copy(Dn).sub(this._v3_2).normalize().multiplyScalar(a),this._translationMatrix.makeTranslation(l.x,l.y,l.z),this._scaleMatrix.makeScale(i,i,i),this._m4_2.makeTranslation(zt.x,zt.y,zt.z).multiply(this._translationMatrix),this._m4_2.multiply(this._scaleMatrix),this._translationMatrix.makeTranslation(-l.x,-l.y,-l.z),this._m4_2.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1,this._m4_2)}else this.setTransformationMatrices(this._m4_1);return vn}}setFov(e){this.object.isPerspectiveCamera&&(this.object.fov=Nt.clamp(e,this.minFov,this.maxFov),this.object.updateProjectionMatrix())}setTransformationMatrices(e=null,t=null){e!=null?vn.camera!=null?vn.camera.copy(e):vn.camera=e.clone():vn.camera=null,t!=null?vn.gizmos!=null?vn.gizmos.copy(t):vn.gizmos=t.clone():vn.gizmos=null}zRotate(e,t){return this._rotationMatrix.makeRotationAxis(this._rotationAxis,t),this._translationMatrix.makeTranslation(-e.x,-e.y,-e.z),this._m4_1.makeTranslation(e.x,e.y,e.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState).sub(e),this._v3_2.copy(this._v3_1).applyAxisAngle(this._rotationAxis,t),this._v3_2.sub(this._v3_1),this._m4_2.makeTranslation(this._v3_2.x,this._v3_2.y,this._v3_2.z),this.setTransformationMatrices(this._m4_1,this._m4_2),vn}getRaycaster(){return U0}unprojectOnObj(e,t){const n=this.getRaycaster();n.near=t.near,n.far=t.far,n.setFromCamera(e,t);const i=n.intersectObjects(this.scene.children,!0);for(let s=0;s<i.length;s++)if(i[s].object.uuid!=this._gizmos.uuid&&i[s].face!=null)return i[s].point.clone();return null}unprojectOnTbSurface(e,t,n,i,s){if(e.type=="OrthographicCamera"){this._v2_1.copy(this.getCursorPosition(t,n,i)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0);const a=Math.pow(this._v2_1.x,2),o=Math.pow(this._v2_1.y,2),l=Math.pow(this._tbRadius,2);return a+o<=l*.5?this._v3_1.setZ(Math.sqrt(l-(a+o))):this._v3_1.setZ(l*.5/Math.sqrt(a+o)),this._v3_1}else if(e.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(t,n,i)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(e.projectionMatrixInverse);const a=this._v3_1.clone().normalize(),o=e.position.distanceTo(this._gizmos.position),l=Math.pow(s,2),h=this._v3_1.z,d=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));if(d==0)return a.set(this._v3_1.x,this._v3_1.y,s),a;const f=h/d,m=o;let _=Math.pow(f,2)+1,y=2*f*m,E=Math.pow(m,2)-l,g=Math.pow(y,2)-4*_*E;if(g>=0&&(this._v2_1.setX((-y-Math.sqrt(g))/(2*_)),this._v2_1.setY(f*this._v2_1.x+m),Nt.RAD2DEG*this._v2_1.angle()>=45)){const A=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(o-this._v2_1.y,2));return a.multiplyScalar(A),a.z+=o,a}_=f,y=m,E=-l*.5,g=Math.pow(y,2)-4*_*E,this._v2_1.setX((-y-Math.sqrt(g))/(2*_)),this._v2_1.setY(f*this._v2_1.x+m);const x=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(o-this._v2_1.y,2));return a.multiplyScalar(x),a.z+=o,a}}unprojectOnTbPlane(e,t,n,i,s=!1){if(e.type=="OrthographicCamera")return this._v2_1.copy(this.getCursorPosition(t,n,i)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0),this._v3_1.clone();if(e.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(t,n,i)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(e.projectionMatrixInverse);const a=this._v3_1.clone().normalize(),o=this._v3_1.z,l=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));let h;if(s?h=this._v3_1.setFromMatrixPosition(this._cameraMatrixState0).distanceTo(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0)):h=e.position.distanceTo(this._gizmos.position),l==0)return a.set(0,0,0),a;const d=o/l,f=h,m=-f/d,_=Math.sqrt(Math.pow(f,2)+Math.pow(m,2));return a.multiplyScalar(_),a.z=0,a}}updateMatrixState(){this._cameraMatrixState.copy(this.object.matrix),this._gizmoMatrixState.copy(this._gizmos.matrix),this.object.isOrthographicCamera?(this._cameraProjectionState.copy(this.object.projectionMatrix),this.object.updateProjectionMatrix(),this._zoomState=this.object.zoom):this.object.isPerspectiveCamera&&(this._fovState=this.object.fov)}updateTbState(e,t){this._state=e,t&&this.updateMatrixState()}update(){if(this.target.equals(this._currentTarget)===!1&&(this._gizmos.position.copy(this.target),this._tbRadius=this.calculateTbRadius(this.object),this.makeGizmos(this.target,this._tbRadius),this._currentTarget.copy(this.target)),this.object.isOrthographicCamera){if(this.object.zoom>this.maxZoom||this.object.zoom<this.minZoom){const t=Nt.clamp(this.object.zoom,this.minZoom,this.maxZoom);this.applyTransformMatrix(this.scale(t/this.object.zoom,this._gizmos.position,!0))}}else if(this.object.isPerspectiveCamera){const t=this.object.position.distanceTo(this._gizmos.position);if(t>this.maxDistance+1e-6||t<this.minDistance-1e-6){const i=Nt.clamp(t,this.minDistance,this.maxDistance);this.applyTransformMatrix(this.scale(i/t,this._gizmos.position)),this.updateMatrixState()}(this.object.fov<this.minFov||this.object.fov>this.maxFov)&&(this.object.fov=Nt.clamp(this.object.fov,this.minFov,this.maxFov),this.object.updateProjectionMatrix());const n=this._tbRadius;if(this._tbRadius=this.calculateTbRadius(this.object),n<this._tbRadius-1e-6||n>this._tbRadius+1e-6){const i=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3,s=this._tbRadius/i,o=new js(0,0,s,s).getPoints(this._curvePts),l=new tn().setFromPoints(o);for(const h in this._gizmos.children)this._gizmos.children[h].geometry=l}}this.object.lookAt(this._gizmos.position)}setStateFromJSON(e){const t=JSON.parse(e);if(t.arcballState!=null){this._cameraMatrixState.fromArray(t.arcballState.cameraMatrix.elements),this._cameraMatrixState.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.up.copy(t.arcballState.cameraUp),this.object.near=t.arcballState.cameraNear,this.object.far=t.arcballState.cameraFar,this.object.zoom=t.arcballState.cameraZoom,this.object.isPerspectiveCamera&&(this.object.fov=t.arcballState.cameraFov),this._gizmoMatrixState.fromArray(t.arcballState.gizmoMatrix.elements),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.object.updateMatrix(),this.object.updateProjectionMatrix(),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.object);const n=new Oe().copy(this._gizmoMatrixState0);this.makeGizmos(this._gizmos.position,this._tbRadius),this._gizmoMatrixState0.copy(n),this.object.lookAt(this._gizmos.position),this.updateTbState(ze.IDLE,!1),this.dispatchEvent(Rt)}}}function O0(){const r=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3;this._tbRadius=this.calculateTbRadius(this.object);const e=this._tbRadius/r,n=new js(0,0,e,e).getPoints(this._curvePts),i=new tn().setFromPoints(n);for(const s in this._gizmos.children)this._gizmos.children[s].geometry=i;this.dispatchEvent(Rt)}function B0(r){if(this.enabled){for(let e=0;e<this.mouseActions.length;e++)if(this.mouseActions[e].mouse==2){r.preventDefault();break}}}function z0(){this._touchStart.splice(0,this._touchStart.length),this._touchCurrent.splice(0,this._touchCurrent.length),this._input=wt.NONE}function k0(r){if(r.button==0&&r.isPrimary?(this._downValid=!0,this._downEvents.push(r),this._downStart=performance.now()):this._downValid=!1,r.pointerType=="touch"&&this._input!=wt.CURSOR)switch(this._touchStart.push(r),this._touchCurrent.push(r),this._input){case wt.NONE:this._input=wt.ONE_FINGER,this.onSinglePanStart(r,"ROTATE"),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp);break;case wt.ONE_FINGER:case wt.ONE_FINGER_SWITCHED:this._input=wt.TWO_FINGER,this.onRotateStart(),this.onPinchStart(),this.onDoublePanStart();break;case wt.TWO_FINGER:this._input=wt.MULT_FINGER,this.onTriplePanStart(r);break}else if(r.pointerType!="touch"&&this._input==wt.NONE){let e=null;r.ctrlKey||r.metaKey?e="CTRL":r.shiftKey&&(e="SHIFT"),this._mouseOp=this.getOpFromAction(r.button,e),this._mouseOp!=null&&(window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),this._input=wt.CURSOR,this._button=r.button,this.onSinglePanStart(r,this._mouseOp))}}function H0(r){if(r.pointerType=="touch"&&this._input!=wt.CURSOR)switch(this._input){case wt.ONE_FINGER:this.updateTouchEvent(r),this.onSinglePanMove(r,ze.ROTATE);break;case wt.ONE_FINGER_SWITCHED:if(this.calculatePointersDistance(this._touchCurrent[0],r)*this._devPxRatio>=this._switchSensibility){this._input=wt.ONE_FINGER,this.updateTouchEvent(r),this.onSinglePanStart(r,"ROTATE");break}break;case wt.TWO_FINGER:this.updateTouchEvent(r),this.onRotateMove(),this.onPinchMove(),this.onDoublePanMove();break;case wt.MULT_FINGER:this.updateTouchEvent(r),this.onTriplePanMove(r);break}else if(r.pointerType!="touch"&&this._input==wt.CURSOR){let e=null;r.ctrlKey||r.metaKey?e="CTRL":r.shiftKey&&(e="SHIFT");const t=this.getOpStateFromAction(this._button,e);t!=null&&this.onSinglePanMove(r,t)}this._downValid&&this.calculatePointersDistance(this._downEvents[this._downEvents.length-1],r)*this._devPxRatio>this._movementThreshold&&(this._downValid=!1)}function G0(r){if(r.pointerType=="touch"&&this._input!=wt.CURSOR){const e=this._touchCurrent.length;for(let t=0;t<e;t++)if(this._touchCurrent[t].pointerId==r.pointerId){this._touchCurrent.splice(t,1),this._touchStart.splice(t,1);break}switch(this._input){case wt.ONE_FINGER:case wt.ONE_FINGER_SWITCHED:window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=wt.NONE,this.onSinglePanEnd();break;case wt.TWO_FINGER:this.onDoublePanEnd(r),this.onPinchEnd(r),this.onRotateEnd(r),this._input=wt.ONE_FINGER_SWITCHED;break;case wt.MULT_FINGER:this._touchCurrent.length==0&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=wt.NONE,this.onTriplePanEnd());break}}else r.pointerType!="touch"&&this._input==wt.CURSOR&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=wt.NONE,this.onSinglePanEnd(),this._button=-1);if(r.isPrimary)if(this._downValid)if(r.timeStamp-this._downEvents[this._downEvents.length-1].timeStamp<=this._maxDownTime)if(this._nclicks==0)this._nclicks=1,this._clickStart=performance.now();else{const t=r.timeStamp-this._clickStart,n=this.calculatePointersDistance(this._downEvents[1],this._downEvents[0])*this._devPxRatio;t<=this._maxInterval&&n<=this._posThreshold?(this._nclicks=0,this._downEvents.splice(0,this._downEvents.length),this.onDoubleTap(r)):(this._nclicks=1,this._downEvents.shift(),this._clickStart=performance.now())}else this._downValid=!1,this._nclicks=0,this._downEvents.splice(0,this._downEvents.length);else this._nclicks=0,this._downEvents.splice(0,this._downEvents.length)}function V0(r){if(this.enabled&&this.enableZoom){let e=null;r.ctrlKey||r.metaKey?e="CTRL":r.shiftKey&&(e="SHIFT");const t=this.getOpFromAction("WHEEL",e);if(t!=null){r.preventDefault(),this.dispatchEvent(In);const n=125;let i=r.deltaY/n,s=1;switch(i>0?s=1/this.scaleFactor:i<0&&(s=this.scaleFactor),t){case"ZOOM":if(this.updateTbState(ze.SCALE,!0),i>0?s=1/Math.pow(this.scaleFactor,i):i<0&&(s=Math.pow(this.scaleFactor,-i)),this.cursorZoom&&this.enablePan){let a;this.object.isOrthographicCamera?a=this.unprojectOnTbPlane(this.object,r.clientX,r.clientY,this.domElement).applyQuaternion(this.object.quaternion).multiplyScalar(1/this.object.zoom).add(this._gizmos.position):this.object.isPerspectiveCamera&&(a=this.unprojectOnTbPlane(this.object,r.clientX,r.clientY,this.domElement).applyQuaternion(this.object.quaternion).add(this._gizmos.position)),this.applyTransformMatrix(this.scale(s,a))}else this.applyTransformMatrix(this.scale(s,this._gizmos.position));this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(ze.IDLE,!1),this.dispatchEvent(Rt),this.dispatchEvent(Sn);break;case"FOV":if(this.object.isPerspectiveCamera){this.updateTbState(ze.FOV,!0),r.deltaX!=0&&(i=r.deltaX/n,s=1,i>0?s=1/Math.pow(this.scaleFactor,i):i<0&&(s=Math.pow(this.scaleFactor,-i))),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const a=this._v3_1.distanceTo(this._gizmos.position);let o=a/s;o=Nt.clamp(o,this.minDistance,this.maxDistance);const l=a*Math.tan(Nt.DEG2RAD*this.object.fov*.5);let h=Nt.RAD2DEG*(Math.atan(l/o)*2);h>this.maxFov?h=this.maxFov:h<this.minFov&&(h=this.minFov);const d=l/Math.tan(Nt.DEG2RAD*(h/2));s=a/d,this.setFov(h),this.applyTransformMatrix(this.scale(s,this._gizmos.position,!1))}this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(ze.IDLE,!1),this.dispatchEvent(Rt),this.dispatchEvent(Sn);break}}}}function W0(r,e,t,n,i,s){const a=r.renderer;e.setViewOffset(a.domElement.width,a.domElement.height,i*window.devicePixelRatio|0,s*window.devicePixelRatio|0,1,1),a.setRenderTarget(n),r.clearColor.setRGB(-1,-1,-1),a.setClearColor(r.clearColor),a.render(t,e),e.clearViewOffset();const o=new Int32Array(4);a.readRenderTargetPixels(n,0,0,1,1,o);const l=o[0];if(l>0&&r.objaux){console.log("id: ",l);const h=l-1,d=r.objaux.patchgrp[h],f=r.objaux.patchgrp[h+1],m=r.pickgeometry.attributes.position.array,_=r.pickgeometry.index.array;{const y=[];for(let x=d;x<f;x++){const D=x;for(let A=0;A<3;A++){const P=_[D*3+A];y.push(m[P*3+0]),y.push(m[P*3+1]),y.push(m[P*3+2])}}const E=new Float32Array(y);r.highlightgeometry.setAttribute("position",new $t(E,3)),r.highlightgeometry.attributes.position.needsUpdate=!0;const g=y.length/3;r.highlightgeometry.setDrawRange(0,g),r.highlightpart.visible=!0}}else r.highlightpart.visible=!1}class X0{constructor(e){this.scenemodel=e,this.controls=void 0,this.pointer=new nt,this.directionalLight=new kh(8947848,1*Math.PI),this.isTouched=!0,this.capture=!1}setupControl(){this.controls=new F0(this.scenemodel.camera,this.scenemodel.renderer.domElement,this.scenemodel.scene),this.controls.setMouseAction("PAN",1),this.controls.dampingFactor=50,this.controls.wMax=10,this.controls.activateGizmos(!0),this.controls.adjustNearFar=!0,this.controls.enableGizmos=!0,this.controls.gizmoVisible=!0,this.controls.setGizmosVisible(!0),this.controls.useClipboard=!1,this.controls.addEventListener("change",()=>this.queuedraw())}onPointerMove(e){this.pointer.x=e.offsetX,this.pointer.y=e.offsetY,this.isTouched=!0}onWindowResize(){this.scenemodel.camera.aspect=window.innerWidth/window.innerHeight,this.scenemodel.camera.updateProjectionMatrix(),this.scenemodel.renderer.setSize(window.innerWidth,window.innerHeight),this.isTouched=!0,this.draw()}queuedraw(){this.isTouched=!0}draw(){if(this.controls.update(),W0(this.scenemodel,this.scenemodel.camera,this.scenemodel.pickingScene,this.scenemodel.pickingTexture,this.pointer.x,this.pointer.y),!this.isTouched)return;this.isTouched=!1;const e=this.scenemodel.camera.position.x-this.scenemodel.scene.position.x,t=this.scenemodel.camera.position.y-this.scenemodel.scene.position.y,n=this.scenemodel.camera.position.z-this.scenemodel.scene.position.z;this.directionalLight.position.set(e,t,n),this.scenemodel.scene.add(this.directionalLight),this.scenemodel.renderer.setRenderTarget(null),this.scenemodel.renderer.render(this.scenemodel.scene,this.scenemodel.camera),this.capture&&(this.capture=!1,j0(this.scenemodel.renderer.domElement)),this.scenemodel.scene.remove(this.directionalLight)}screenShot(){this.capture=!0}}const j0=r=>{const e=r.toDataURL(),t=document.createElement("a");t.href=e,t.download="screenshot.png",t.click()};function Jl(r,e){if(e===Jd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===zo||e===gh){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===zo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class q0 extends wr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new J0(t)}),this.register(function(t){return new Q0(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new Z0(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new K0(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new dx(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=Xr.extractUrlBase(e);a=Xr.resolveURL(h,this.path)}else a=Xr.extractUrlBase(e);this.manager.itemStart(e);const o=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},l=new zh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{s.parse(h,a,function(d){t(d),s.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hh){try{a[it.KHR_BINARY_GLTF]=new fx(e)}catch(f){i&&i(f);return}s=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new wx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const f=this.pluginCallbacks[d](h);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const f=s.extensionsUsed[d],m=s.extensionsRequired||[];switch(f){case it.KHR_MATERIALS_UNLIT:a[f]=new $0;break;case it.KHR_DRACO_MESH_COMPRESSION:a[f]=new px(s,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[f]=new mx;break;case it.KHR_MESH_QUANTIZATION:a[f]=new _x;break;default:m.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Y0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class K0{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const d=new He(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],nn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new kh(d),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new m0(d),h.distance=f;break;case"spot":h=new f0(d),h.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,ti(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class $0{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return Bi}extendParams(e,t,n){const i=[];e.color=new He(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],nn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,hn))}return Promise.all(i)}}class Z0{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class J0{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(o,o)}return Promise.all(s)}}class Q0{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class ex{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class tx{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],nn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,hn)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class nx{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class ix{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(o[0],o[1],o[2],nn),Promise.all(s)}}class rx{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class sx{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(o[0],o[1],o[2],nn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,hn)),Promise.all(s)}}class ax{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class ox{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class cx{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class lx{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hx{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ux{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,h=i.byteLength||0,d=i.count,f=i.byteStride,m=new Uint8Array(o,l,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,f,m,i.mode,i.filter).then(function(_){return _.buffer}):a.ready.then(function(){const _=new ArrayBuffer(d*f);return a.decodeGltfBuffer(new Uint8Array(_),d,f,m,i.mode,i.filter),_})})}else return null}}class dx{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==En.TRIANGLES&&h.mode!==En.TRIANGLE_STRIP&&h.mode!==En.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const h in a)o.push(this.parser.getDependency("accessor",a[h]).then(d=>(l[h]=d,l[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{const d=h.pop(),f=d.isGroup?d.children:[d],m=h[0].count,_=[];for(const y of f){const E=new Oe,g=new O,x=new oi,D=new O(1,1,1),A=new jv(y.geometry,y.material,m);for(let P=0;P<m;P++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,P),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,P),l.SCALE&&D.fromBufferAttribute(l.SCALE,P),A.setMatrixAt(P,E.compose(g,x,D));for(const P in l)if(P==="_COLOR_0"){const V=l[P];A.instanceColor=new Vo(V.array,V.itemSize,V.normalized)}else P!=="TRANSLATION"&&P!=="ROTATION"&&P!=="SCALE"&&y.geometry.setAttribute(P,l[P]);Ut.prototype.copy.call(A,y),this.parser.assignFinalMaterial(A),_.push(A)}return d.isGroup?(d.clear(),d.add(..._),d):_[0]}))}}const Hh="glTF",kr=12,Ql={JSON:1313821514,BIN:5130562};class fx{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,kr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-kr,s=new DataView(e,kr);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Ql.JSON){const h=new Uint8Array(e,kr+a,o);this.content=n.decode(h)}else if(l===Ql.BIN){const h=kr+a;this.body=e.slice(h,h+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class px{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},h={};for(const d in a){const f=jo[d]||d.toLowerCase();o[f]=a[d]}for(const d in e.attributes){const f=jo[d]||d.toLowerCase();if(a[d]!==void 0){const m=n.accessors[e.attributes[d]],_=ur[m.componentType];h[f]=_.name,l[f]=m.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(f,m){i.decodeDracoFile(d,function(_){for(const y in _.attributes){const E=_.attributes[y],g=l[y];g!==void 0&&(E.normalized=g)}f(_)},o,h,nn,m)})})}}class mx{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _x{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class Gh extends ts{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,h=o*3,d=i-t,f=(n-t)/d,m=f*f,_=m*f,y=e*h,E=y-h,g=-2*_+3*m,x=_-m,D=1-g,A=x-m+f;for(let P=0;P!==o;P++){const V=a[E+P+o],B=a[E+P+l]*d,N=a[y+P+o],X=a[y+P]*d;s[P]=D*V+A*B+g*N+x*X}return s}}const gx=new oi;class vx extends Gh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return gx.fromArray(s).normalize().toArray(s),s}}const En={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},eh={9728:dn,9729:xn,9984:oh,9985:Bs,9986:Hr,9987:ni},th={33071:Mi,33648:qs,10497:mr},Za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xx={CUBICSPLINE:void 0,LINEAR:Yr,STEP:qr},Ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new aa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),r.DefaultMaterial}function Ii(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Mx(r,e,t){let n=!1,i=!1,s=!1;for(let h=0,d=e.length;h<d;h++){const f=e[h];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let h=0,d=e.length;h<d;h++){const f=e[h];if(n){const m=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;a.push(m)}if(i){const m=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;o.push(m)}if(s){const m=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(m)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(h){const d=h[0],f=h[1],m=h[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=m),r.morphTargetsRelative=!0,r})}function Sx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ex(r){let e;const t=r.extensions&&r.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qa(t.attributes):e=r.indices+":"+Qa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Qa(r.targets[n]);return e}function Qa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function qo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const bx=new Oe;class wx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Y0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new u0(this.options.manager):this.textureLoader=new v0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ii(s,o,i),ti(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[h,d]of a.children.entries())s(d,o.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Xr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Za[i.type],o=ur[i.componentType],l=i.normalized===!0,h=new o(i.count*a);return Promise.resolve(new $t(h,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Za[i.type],h=ur[i.componentType],d=h.BYTES_PER_ELEMENT,f=d*l,m=i.byteOffset||0,_=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,y=i.normalized===!0;let E,g;if(_&&_!==f){const x=Math.floor(m/_),D="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count;let A=t.cache.get(D);A||(E=new h(o,x*_,i.count*_/d),A=new Hv(E,_/d),t.cache.add(D,A)),g=new oc(A,l,m%_/d,y)}else o===null?E=new h(i.count*l):E=new h(o,m,i.count*l),g=new $t(E,l,y);if(i.sparse!==void 0){const x=Za.SCALAR,D=ur[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,P=i.sparse.values.byteOffset||0,V=new D(a[1],A,i.sparse.count*x),B=new h(a[2],P,i.sparse.count*l);o!==null&&(g=new $t(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let N=0,X=V.length;N<X;N++){const ce=V[N];if(g.setX(ce,B[N*l]),l>=2&&g.setY(ce,B[N*l+1]),l>=3&&g.setZ(ce,B[N*l+2]),l>=4&&g.setW(ce,B[N*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=y}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const m=(s.samplers||{})[a.sampler]||{};return d.magFilter=eh[m.magFilter]||xn,d.minFilter=eh[m.minFilter]||ni,d.wrapS=th[m.wrapS]||mr,d.wrapT=th[m.wrapT]||mr,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",h=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){h=!0;const m=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(m),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(f){return new Promise(function(m,_){let y=m;t.isImageBitmapLoader===!0&&(y=function(E){const g=new Kt(E);g.needsUpdate=!0,m(g)}),t.load(Xr.resolveURL(f,s.path),y,void 0,_)})}).then(function(f){return h===!0&&o.revokeObjectURL(l),ti(f,a),f.userData.mimeType=a.mimeType||Tx(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[it.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Fh,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new lr,bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return aa}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},h=[];if(l[it.KHR_MATERIALS_UNLIT]){const f=i[it.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),h.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const m=f.baseColorFactor;o.color.setRGB(m[0],m[1],m[2],nn),o.opacity=m[3]}f.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",f.baseColorTexture,hn)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Nn);const d=s.alphaMode||Ja.OPAQUE;if(d===Ja.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Ja.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Bi&&(h.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new nt(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==Bi&&(h.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Bi){const f=s.emissiveFactor;o.emissive=new He().setRGB(f[0],f[1],f[2],nn)}return s.emissiveTexture!==void 0&&a!==Bi&&h.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,hn)),Promise.all(h).then(function(){const f=new a(o);return s.name&&(f.name=s.name),ti(f,s),t.associations.set(f,{materials:e}),s.extensions&&Ii(i,f,s),f})}createUniqueName(e){const t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return nh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const h=e[o],d=Ex(h),f=i[d];if(f)a.push(f.promise);else{let m;h.extensions&&h.extensions[it.KHR_DRACO_MESH_COMPRESSION]?m=s(h):m=nh(new tn,h,t),i[d]={primitive:h,promise:m},a.push(m)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,h=a.length;l<h;l++){const d=a[l].material===void 0?yx(this.cache):this.getDependency("material",a[l].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const h=l.slice(0,l.length-1),d=l[l.length-1],f=[];for(let _=0,y=d.length;_<y;_++){const E=d[_],g=a[_];let x;const D=h[_];if(g.mode===En.TRIANGLES||g.mode===En.TRIANGLE_STRIP||g.mode===En.TRIANGLE_FAN||g.mode===void 0)x=s.isSkinnedMesh===!0?new Vv(E,D):new en(E,D),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),g.mode===En.TRIANGLE_STRIP?x.geometry=Jl(x.geometry,gh):g.mode===En.TRIANGLE_FAN&&(x.geometry=Jl(x.geometry,zo));else if(g.mode===En.LINES)x=new lc(E,D);else if(g.mode===En.LINE_STRIP)x=new hr(E,D);else if(g.mode===En.LINE_LOOP)x=new qv(E,D);else if(g.mode===En.POINTS)x=new Yv(E,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(x.geometry.morphAttributes).length>0&&Sx(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),ti(x,s),g.extensions&&Ii(i,x,g),t.assignFinalMaterial(x),f.push(x)}for(let _=0,y=f.length;_<y;_++)t.associations.set(f[_],{meshes:e,primitives:_});if(f.length===1)return s.extensions&&Ii(i,f[0],s),f[0];const m=new Si;s.extensions&&Ii(i,m,s),t.associations.set(m,{meshes:e});for(let _=0,y=f.length;_<y;_++)m.add(f[_]);return m})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new un(Nt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new sc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let h=0,d=a.length;h<d;h++){const f=a[h];if(f){o.push(f);const m=new Oe;s!==null&&m.fromArray(s.array,h*16),l.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new cc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],h=[],d=[];for(let f=0,m=i.channels.length;f<m;f++){const _=i.channels[f],y=i.samplers[_.sampler],E=_.target,g=E.node,x=i.parameters!==void 0?i.parameters[y.input]:y.input,D=i.parameters!==void 0?i.parameters[y.output]:y.output;E.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",D)),h.push(y),d.push(E))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(h),Promise.all(d)]).then(function(f){const m=f[0],_=f[1],y=f[2],E=f[3],g=f[4],x=[];for(let D=0,A=m.length;D<A;D++){const P=m[D],V=_[D],B=y[D],N=E[D],X=g[D];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();const ce=n._createAnimationTracks(P,V,B,N,X);if(ce)for(let T=0;T<ce.length;T++)x.push(ce[T])}return new r0(s,void 0,x)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,h=i.weights.length;l<h;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let h=0,d=o.length;h<d;h++)a.push(n.getDependency("node",o[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(h){const d=h[0],f=h[1],m=h[2];m!==null&&d.traverse(function(_){_.isSkinnedMesh&&_.bind(m,bx)});for(let _=0,y=f.length;_<y;_++)d.add(f[_]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let d;if(s.isBone===!0?d=new Nh:h.length>1?d=new Si:h.length===1?d=h[0]:d=new Ut,d!==h[0])for(let f=0,m=h.length;f<m;f++)d.add(h[f]);if(s.name&&(d.userData.name=s.name,d.name=a),ti(d,s),s.extensions&&Ii(n,d,s),s.matrix!==void 0){const f=new Oe;f.fromArray(s.matrix),d.applyMatrix4(f)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Si;n.name&&(s.name=i.createUniqueName(n.name)),ti(s,n),n.extensions&&Ii(t,s,n);const a=n.nodes||[],o=[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let d=0,f=l.length;d<f;d++)s.add(l[d]);const h=d=>{const f=new Map;for(const[m,_]of i.associations)(m instanceof bn||m instanceof Kt)&&f.set(m,_);return d.traverse(m=>{const _=i.associations.get(m);_!=null&&f.set(m,_)}),f};return i.associations=h(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];vi[s.path]===vi.weights?e.traverse(function(m){m.morphTargetInfluences&&l.push(m.name?m.name:m.uuid)}):l.push(o);let h;switch(vi[s.path]){case vi.weights:h=yr;break;case vi.rotation:h=Mr;break;case vi.position:case vi.scale:h=Sr;break;default:switch(n.itemSize){case 1:h=yr;break;case 2:case 3:default:h=Sr;break}break}const d=i.interpolation!==void 0?xx[i.interpolation]:Yr,f=this._getArrayFromAccessor(n);for(let m=0,_=l.length;m<_;m++){const y=new h(l[m]+"."+vi[s.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=qo(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Mr?vx:Gh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ax(r,e,t){const n=e.attributes,i=new Vn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(h[0],h[1],h[2])),o.normalized){const d=qo(ur[o.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new O,l=new O;for(let h=0,d=s.length;h<d;h++){const f=s[h];if(f.POSITION!==void 0){const m=t.json.accessors[f.POSITION],_=m.min,y=m.max;if(_!==void 0&&y!==void 0){if(l.setX(Math.max(Math.abs(_[0]),Math.abs(y[0]))),l.setY(Math.max(Math.abs(_[1]),Math.abs(y[1]))),l.setZ(Math.max(Math.abs(_[2]),Math.abs(y[2]))),m.normalized){const E=qo(ur[m.componentType]);l.multiplyScalar(E)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new kn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function nh(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=jo[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return vt.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),ti(r,e),Ax(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Mx(r,e.targets,t):r})}function Rx(r,e){const t=r.attributes.position,n=r.index.array,i=new Int32Array(t.count);for(let a=0;a<e.length;a++){const o=e[a];for(let l=0;l<3;l++){const h=n[a*3+l];i[h]=o}}const s=new Wf(i,1,!1);s.gpuType=$r,r.setAttribute("id",s)}function Cx(r,e,t,n,i,s){Rx(r.pickgeometry,n);const a=new en(r.pickgeometry,r.pickingMaterial);r.pickingScene.add(a),t.computeBoundingBox(),r.objaux=i;const o=new en(t,r.surfmat);o.renderOrder=6,r.scene.add(o);const l=new lc(s);l.material.color=new He(0),r.scene.add(l),r.modelmesh=o,r.modellinesegs=l;let h=D0();N0(t.boundingBox,h,r.camera,e.controls),e.isTouched=!0,e.draw(),e.isTouched=!0}const Yo=4294967295;function Px(r,e){return r>e&&([r,e]=[e,r]),`${r}_${e}`}function Lx(r){const e=r.length/3,t=new Uint32Array(e);for(let h=0;h<e;h++)t[h]=0;const n=new Uint32Array(e);let i=[];i.push(0);let s=0,a=1;for(let h=0;h<e;h++){if(t[h]!==0)continue;const d=a++;t[h]=d;let f=[];f.push(h);for(let m=0;m<f.length;m++){const _=f[m];n[s++]=_;for(let y=0;y<3;y++){const E=r[_*3+y];if(E===Yo)continue;const g=Math.floor(E/3);t[g]===0&&(t[g]=d,f.push(g))}}}let o=0;for(let h=0;h<t.length;h++)t[o]!=t[h]&&(i.push(h),o=h);return i.push(t.length),{flag:t,objaux:{patchgrp:i}}}function Dx(r,e){const t=e.length/3,n=new Uint32Array(t*3);for(let f=0;f<t*3;f++)n[f]=Yo;const i=new Map;for(let f=0;f<t;f++)for(let m=0;m<3;m++){const _=e[f*3+m],y=e[f*3+(m+1)%3],E=Px(_,y),g=i.get(E);g!==void 0?(i.delete(E),n[f*3+m]=g,n[g]=f*3+m):i.set(E,f*3+m)}const s=new tn,a=[];function o(f,m){a.push(r[f*3+0]),a.push(r[f*3+1]),a.push(r[f*3+2]),a.push(r[m*3+0]),a.push(r[m*3+1]),a.push(r[m*3+2])}for(let f=0;f<t*3;f++)if(Yo===n[f]){const m=Math.floor(f/3),_=f%3,y=e[m*3+_],E=e[m*3+(_+1)%3];o(y,E)}const l=new Float32Array(a);s.setAttribute("position",new $t(l,3));const{flag:h,objaux:d}=Lx(n);return{geometry:s,flag:h,objaux:d}}function ih(r,e,t){r.dispose(),new q0().load(t,function(i){const s=i.scene.children[0].geometry,a=s.attributes.position,o=s.index,l=Dx(a.array,o.array),h=l.geometry,d=l.flag;s.computeVertexNormals(),r.pickgeometry=s,r.wireframegeo=h,Cx(r,e,s,d,l.objaux,h)},function(i){console.log(i.loaded/i.total*100+"% loaded")},function(i){console.log("An error happened",i)})}function Ix(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var i=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return r[n]}})}),t}var Nx={exports:{}};const Ux={},Fx=Object.freeze(Object.defineProperty({__proto__:null,default:Ux},Symbol.toStringTag,{value:"Module"})),eo=Ix(Fx);(function(r,e){var t=(()=>{var i;var n=typeof document<"u"?(i=document.currentScript)==null?void 0:i.src:void 0;return typeof __filename<"u"&&(n||(n=__filename)),function(s={}){var a,o=Object.assign({},s),l,h,d=new Promise((c,u)=>{l=c,h=u}),f=typeof window=="object",m=typeof importScripts=="function",_=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",y=Object.assign({},o),E="./this.program",g=(c,u)=>{throw u},x="";function D(c){return o.locateFile?o.locateFile(c,x):x+c}var A,P,V;if(_){var B=eo,N=eo;m?x=N.dirname(x)+"/":x=__dirname+"/",A=(c,u)=>(c=b(c)?new URL(c):N.normalize(c),B.readFileSync(c,u?void 0:"utf8")),V=c=>{var u=A(c,!0);return u.buffer||(u=new Uint8Array(u)),u},P=(c,u,p,v=!0)=>{c=b(c)?new URL(c):N.normalize(c),B.readFile(c,v?void 0:"utf8",(S,C)=>{S?p(S):u(v?C.buffer:C)})},!o.thisProgram&&process.argv.length>1&&(E=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),g=(c,u)=>{throw process.exitCode=c,u}}else(f||m)&&(m?x=self.location.href:typeof document<"u"&&document.currentScript&&(x=document.currentScript.src),n&&(x=n),x.startsWith("blob:")?x="":x=x.substr(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1),A=c=>{var u=new XMLHttpRequest;return u.open("GET",c,!1),u.send(null),u.responseText},m&&(V=c=>{var u=new XMLHttpRequest;return u.open("GET",c,!1),u.responseType="arraybuffer",u.send(null),new Uint8Array(u.response)}),P=(c,u,p)=>{var v=new XMLHttpRequest;v.open("GET",c,!0),v.responseType="arraybuffer",v.onload=()=>{if(v.status==200||v.status==0&&v.response){u(v.response);return}p()},v.onerror=p,v.send(null)});var X=o.print||console.log.bind(console),ce=o.printErr||console.error.bind(console);Object.assign(o,y),y=null,o.arguments&&o.arguments,o.thisProgram&&(E=o.thisProgram),o.quit&&(g=o.quit);var T;o.wasmBinary&&(T=o.wasmBinary);var R,J=!1;function Z(c,u){c||xt(u)}var Q,ne,K,oe,k,ue,we,Ie;function ut(){var c=R.buffer;o.HEAP8=Q=new Int8Array(c),o.HEAP16=K=new Int16Array(c),o.HEAPU8=ne=new Uint8Array(c),o.HEAPU16=oe=new Uint16Array(c),o.HEAP32=k=new Int32Array(c),o.HEAPU32=ue=new Uint32Array(c),o.HEAPF32=we=new Float32Array(c),o.HEAPF64=Ie=new Float64Array(c)}var _t=[],ee=[],fe=[],Pe=!1;function Ae(){if(o.preRun)for(typeof o.preRun=="function"&&(o.preRun=[o.preRun]);o.preRun.length;)ot(o.preRun.shift());Ve(_t)}function Ze(){Pe=!0,!o.noFSInit&&!M.init.initialized&&M.init(),M.ignorePermissions=!1,Ve(ee)}function Xe(){if(o.postRun)for(typeof o.postRun=="function"&&(o.postRun=[o.postRun]);o.postRun.length;)ct(o.postRun.shift());Ve(fe)}function ot(c){_t.unshift(c)}function St(c){ee.unshift(c)}function ct(c){fe.unshift(c)}var F=0,kt=null;function lt(c){return c}function rt(c){var u;F++,(u=o.monitorRunDependencies)==null||u.call(o,F)}function Ge(c){var p;if(F--,(p=o.monitorRunDependencies)==null||p.call(o,F),F==0&&kt){var u=kt;kt=null,u()}}function xt(c){var p;(p=o.onAbort)==null||p.call(o,c),c="Aborted("+c+")",ce(c),J=!0,c+=". Build with -sASSERTIONS for more info.",Pe&&Pc();var u=new WebAssembly.RuntimeError(c);throw h(u),u}var Ke="data:application/octet-stream;base64,",L=c=>c.startsWith(Ke),b=c=>c.startsWith("file://"),W;W="occt-import-js.wasm",L(W)||(W=D(W));function ie(c){if(c==W&&T)return new Uint8Array(T);if(V)return V(c);throw"both async and sync fetching of the wasm failed"}function le(c){if(!T&&(f||m)){if(typeof fetch=="function"&&!b(c))return fetch(c,{credentials:"same-origin"}).then(u=>{if(!u.ok)throw`failed to load wasm binary file at '${c}'`;return u.arrayBuffer()}).catch(()=>ie(c));if(P)return new Promise((u,p)=>{P(c,v=>u(new Uint8Array(v)),p)})}return Promise.resolve().then(()=>ie(c))}function te(c,u,p){return le(c).then(v=>WebAssembly.instantiate(v,u)).then(p,v=>{ce(`failed to asynchronously prepare wasm: ${v}`),xt(v)})}function Fe(c,u,p,v){return!c&&typeof WebAssembly.instantiateStreaming=="function"&&!L(u)&&!b(u)&&!_&&typeof fetch=="function"?fetch(u,{credentials:"same-origin"}).then(S=>{var C=WebAssembly.instantiateStreaming(S,p);return C.then(v,function(I){return ce(`wasm streaming compile failed: ${I}`),ce("falling back to ArrayBuffer instantiation"),te(u,p,v)})}):te(u,p,v)}function ge(){return{a:xd}}function Re(){var c=ge();function u(v,S){return Jt=v.exports,R=Jt.$,ut(),_c=Jt.ca,St(Jt.aa),Ge(),Jt}rt();function p(v){u(v.instance)}if(o.instantiateWasm)try{return o.instantiateWasm(c,u)}catch(v){ce(`Module.instantiateWasm callback failed with error: ${v}`),h(v)}return Fe(T,W,c,p).catch(h),{}}var Se,ae;function Ce(c){this.name="ExitStatus",this.message=`Program terminated with exit(${c})`,this.status=c}var Ve=c=>{for(;c.length>0;)c.shift()(o)},qe=o.noExitRuntime||!0,de={isAbs:c=>c.charAt(0)==="/",splitPath:c=>{var u=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return u.exec(c).slice(1)},normalizeArray:(c,u)=>{for(var p=0,v=c.length-1;v>=0;v--){var S=c[v];S==="."?c.splice(v,1):S===".."?(c.splice(v,1),p++):p&&(c.splice(v,1),p--)}if(u)for(;p;p--)c.unshift("..");return c},normalize:c=>{var u=de.isAbs(c),p=c.substr(-1)==="/";return c=de.normalizeArray(c.split("/").filter(v=>!!v),!u).join("/"),!c&&!u&&(c="."),c&&p&&(c+="/"),(u?"/":"")+c},dirname:c=>{var u=de.splitPath(c),p=u[0],v=u[1];return!p&&!v?".":(v&&(v=v.substr(0,v.length-1)),p+v)},basename:c=>{if(c==="/")return"/";c=de.normalize(c),c=c.replace(/\/$/,"");var u=c.lastIndexOf("/");return u===-1?c:c.substr(u+1)},join:(...c)=>de.normalize(c.join("/")),join2:(c,u)=>de.normalize(c+"/"+u)},st=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return v=>crypto.getRandomValues(v);if(_)try{var c=eo,u=c.randomFillSync;if(u)return v=>c.randomFillSync(v);var p=c.randomBytes;return v=>(v.set(p(v.byteLength)),v)}catch{}xt("initRandomDevice")},$e=c=>($e=st())(c),at={resolve:(...c)=>{for(var u="",p=!1,v=c.length-1;v>=-1&&!p;v--){var S=v>=0?c[v]:M.cwd();if(typeof S!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!S)return"";u=S+"/"+u,p=de.isAbs(S)}return u=de.normalizeArray(u.split("/").filter(C=>!!C),!p).join("/"),(p?"/":"")+u||"."},relative:(c,u)=>{c=at.resolve(c).substr(1),u=at.resolve(u).substr(1);function p(se){for(var me=0;me<se.length&&se[me]==="";me++);for(var be=se.length-1;be>=0&&se[be]==="";be--);return me>be?[]:se.slice(me,be-me+1)}for(var v=p(c.split("/")),S=p(u.split("/")),C=Math.min(v.length,S.length),I=C,U=0;U<C;U++)if(v[U]!==S[U]){I=U;break}for(var j=[],U=I;U<v.length;U++)j.push("..");return j=j.concat(S.slice(I)),j.join("/")}},z=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,ve=(c,u,p)=>{for(var v=u+p,S=u;c[S]&&!(S>=v);)++S;if(S-u>16&&c.buffer&&z)return z.decode(c.subarray(u,S));for(var C="";u<S;){var I=c[u++];if(!(I&128)){C+=String.fromCharCode(I);continue}var U=c[u++]&63;if((I&224)==192){C+=String.fromCharCode((I&31)<<6|U);continue}var j=c[u++]&63;if((I&240)==224?I=(I&15)<<12|U<<6|j:I=(I&7)<<18|U<<12|j<<6|c[u++]&63,I<65536)C+=String.fromCharCode(I);else{var se=I-65536;C+=String.fromCharCode(55296|se>>10,56320|se&1023)}}return C},$=[],re=c=>{for(var u=0,p=0;p<c.length;++p){var v=c.charCodeAt(p);v<=127?u++:v<=2047?u+=2:v>=55296&&v<=57343?(u+=4,++p):u+=3}return u},xe=(c,u,p,v)=>{if(!(v>0))return 0;for(var S=p,C=p+v-1,I=0;I<c.length;++I){var U=c.charCodeAt(I);if(U>=55296&&U<=57343){var j=c.charCodeAt(++I);U=65536+((U&1023)<<10)|j&1023}if(U<=127){if(p>=C)break;u[p++]=U}else if(U<=2047){if(p+1>=C)break;u[p++]=192|U>>6,u[p++]=128|U&63}else if(U<=65535){if(p+2>=C)break;u[p++]=224|U>>12,u[p++]=128|U>>6&63,u[p++]=128|U&63}else{if(p+3>=C)break;u[p++]=240|U>>18,u[p++]=128|U>>12&63,u[p++]=128|U>>6&63,u[p++]=128|U&63}}return u[p]=0,p-S};function ye(c,u,p){var v=re(c)+1,S=new Array(v),C=xe(c,S,0,S.length);return u&&(S.length=C),S}var ht=()=>{if(!$.length){var c=null;if(_){var u=256,p=Buffer.alloc(u),v=0,S=process.stdin.fd;try{v=B.readSync(S,p)}catch(C){if(C.toString().includes("EOF"))v=0;else throw C}v>0?c=p.slice(0,v).toString("utf-8"):c=null}else typeof window<"u"&&typeof window.prompt=="function"?(c=window.prompt("Input: "),c!==null&&(c+=`
`)):typeof readline=="function"&&(c=readline(),c!==null&&(c+=`
`));if(!c)return null;$=ye(c,!0)}return $.shift()},At={ttys:[],init(){},shutdown(){},register(c,u){At.ttys[c]={input:[],output:[],ops:u},M.registerDevice(c,At.stream_ops)},stream_ops:{open(c){var u=At.ttys[c.node.rdev];if(!u)throw new M.ErrnoError(43);c.tty=u,c.seekable=!1},close(c){c.tty.ops.fsync(c.tty)},fsync(c){c.tty.ops.fsync(c.tty)},read(c,u,p,v,S){if(!c.tty||!c.tty.ops.get_char)throw new M.ErrnoError(60);for(var C=0,I=0;I<v;I++){var U;try{U=c.tty.ops.get_char(c.tty)}catch{throw new M.ErrnoError(29)}if(U===void 0&&C===0)throw new M.ErrnoError(6);if(U==null)break;C++,u[p+I]=U}return C&&(c.node.timestamp=Date.now()),C},write(c,u,p,v,S){if(!c.tty||!c.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var C=0;C<v;C++)c.tty.ops.put_char(c.tty,u[p+C])}catch{throw new M.ErrnoError(29)}return v&&(c.node.timestamp=Date.now()),C}},default_tty_ops:{get_char(c){return ht()},put_char(c,u){u===null||u===10?(X(ve(c.output,0)),c.output=[]):u!=0&&c.output.push(u)},fsync(c){c.output&&c.output.length>0&&(X(ve(c.output,0)),c.output=[])},ioctl_tcgets(c){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(c,u,p){return 0},ioctl_tiocgwinsz(c){return[24,80]}},default_tty1_ops:{put_char(c,u){u===null||u===10?(ce(ve(c.output,0)),c.output=[]):u!=0&&c.output.push(u)},fsync(c){c.output&&c.output.length>0&&(ce(ve(c.output,0)),c.output=[])}}},rn=(c,u)=>(ne.fill(0,c,c+u),c),ft=(c,u)=>Math.ceil(c/u)*u,Zt=c=>{c=ft(c,65536);var u=Cc(65536,c);return u?rn(u,c):0},ke={ops_table:null,mount(c){return ke.createNode(null,"/",16895,0)},createNode(c,u,p,v){if(M.isBlkdev(p)||M.isFIFO(p))throw new M.ErrnoError(63);ke.ops_table||(ke.ops_table={dir:{node:{getattr:ke.node_ops.getattr,setattr:ke.node_ops.setattr,lookup:ke.node_ops.lookup,mknod:ke.node_ops.mknod,rename:ke.node_ops.rename,unlink:ke.node_ops.unlink,rmdir:ke.node_ops.rmdir,readdir:ke.node_ops.readdir,symlink:ke.node_ops.symlink},stream:{llseek:ke.stream_ops.llseek}},file:{node:{getattr:ke.node_ops.getattr,setattr:ke.node_ops.setattr},stream:{llseek:ke.stream_ops.llseek,read:ke.stream_ops.read,write:ke.stream_ops.write,allocate:ke.stream_ops.allocate,mmap:ke.stream_ops.mmap,msync:ke.stream_ops.msync}},link:{node:{getattr:ke.node_ops.getattr,setattr:ke.node_ops.setattr,readlink:ke.node_ops.readlink},stream:{}},chrdev:{node:{getattr:ke.node_ops.getattr,setattr:ke.node_ops.setattr},stream:M.chrdev_stream_ops}});var S=M.createNode(c,u,p,v);return M.isDir(S.mode)?(S.node_ops=ke.ops_table.dir.node,S.stream_ops=ke.ops_table.dir.stream,S.contents={}):M.isFile(S.mode)?(S.node_ops=ke.ops_table.file.node,S.stream_ops=ke.ops_table.file.stream,S.usedBytes=0,S.contents=null):M.isLink(S.mode)?(S.node_ops=ke.ops_table.link.node,S.stream_ops=ke.ops_table.link.stream):M.isChrdev(S.mode)&&(S.node_ops=ke.ops_table.chrdev.node,S.stream_ops=ke.ops_table.chrdev.stream),S.timestamp=Date.now(),c&&(c.contents[u]=S,c.timestamp=S.timestamp),S},getFileDataAsTypedArray(c){return c.contents?c.contents.subarray?c.contents.subarray(0,c.usedBytes):new Uint8Array(c.contents):new Uint8Array(0)},expandFileStorage(c,u){var p=c.contents?c.contents.length:0;if(!(p>=u)){var v=1024*1024;u=Math.max(u,p*(p<v?2:1.125)>>>0),p!=0&&(u=Math.max(u,256));var S=c.contents;c.contents=new Uint8Array(u),c.usedBytes>0&&c.contents.set(S.subarray(0,c.usedBytes),0)}},resizeFileStorage(c,u){if(c.usedBytes!=u)if(u==0)c.contents=null,c.usedBytes=0;else{var p=c.contents;c.contents=new Uint8Array(u),p&&c.contents.set(p.subarray(0,Math.min(u,c.usedBytes))),c.usedBytes=u}},node_ops:{getattr(c){var u={};return u.dev=M.isChrdev(c.mode)?c.id:1,u.ino=c.id,u.mode=c.mode,u.nlink=1,u.uid=0,u.gid=0,u.rdev=c.rdev,M.isDir(c.mode)?u.size=4096:M.isFile(c.mode)?u.size=c.usedBytes:M.isLink(c.mode)?u.size=c.link.length:u.size=0,u.atime=new Date(c.timestamp),u.mtime=new Date(c.timestamp),u.ctime=new Date(c.timestamp),u.blksize=4096,u.blocks=Math.ceil(u.size/u.blksize),u},setattr(c,u){u.mode!==void 0&&(c.mode=u.mode),u.timestamp!==void 0&&(c.timestamp=u.timestamp),u.size!==void 0&&ke.resizeFileStorage(c,u.size)},lookup(c,u){throw M.genericErrors[44]},mknod(c,u,p,v){return ke.createNode(c,u,p,v)},rename(c,u,p){if(M.isDir(c.mode)){var v;try{v=M.lookupNode(u,p)}catch{}if(v)for(var S in v.contents)throw new M.ErrnoError(55)}delete c.parent.contents[c.name],c.parent.timestamp=Date.now(),c.name=p,u.contents[p]=c,u.timestamp=c.parent.timestamp,c.parent=u},unlink(c,u){delete c.contents[u],c.timestamp=Date.now()},rmdir(c,u){var p=M.lookupNode(c,u);for(var v in p.contents)throw new M.ErrnoError(55);delete c.contents[u],c.timestamp=Date.now()},readdir(c){var u=[".",".."];for(var p of Object.keys(c.contents))u.push(p);return u},symlink(c,u,p){var v=ke.createNode(c,u,41471,0);return v.link=p,v},readlink(c){if(!M.isLink(c.mode))throw new M.ErrnoError(28);return c.link}},stream_ops:{read(c,u,p,v,S){var C=c.node.contents;if(S>=c.node.usedBytes)return 0;var I=Math.min(c.node.usedBytes-S,v);if(I>8&&C.subarray)u.set(C.subarray(S,S+I),p);else for(var U=0;U<I;U++)u[p+U]=C[S+U];return I},write(c,u,p,v,S,C){if(u.buffer===Q.buffer&&(C=!1),!v)return 0;var I=c.node;if(I.timestamp=Date.now(),u.subarray&&(!I.contents||I.contents.subarray)){if(C)return I.contents=u.subarray(p,p+v),I.usedBytes=v,v;if(I.usedBytes===0&&S===0)return I.contents=u.slice(p,p+v),I.usedBytes=v,v;if(S+v<=I.usedBytes)return I.contents.set(u.subarray(p,p+v),S),v}if(ke.expandFileStorage(I,S+v),I.contents.subarray&&u.subarray)I.contents.set(u.subarray(p,p+v),S);else for(var U=0;U<v;U++)I.contents[S+U]=u[p+U];return I.usedBytes=Math.max(I.usedBytes,S+v),v},llseek(c,u,p){var v=u;if(p===1?v+=c.position:p===2&&M.isFile(c.node.mode)&&(v+=c.node.usedBytes),v<0)throw new M.ErrnoError(28);return v},allocate(c,u,p){ke.expandFileStorage(c.node,u+p),c.node.usedBytes=Math.max(c.node.usedBytes,u+p)},mmap(c,u,p,v,S){if(!M.isFile(c.node.mode))throw new M.ErrnoError(43);var C,I,U=c.node.contents;if(!(S&2)&&U.buffer===Q.buffer)I=!1,C=U.byteOffset;else{if((p>0||p+u<U.length)&&(U.subarray?U=U.subarray(p,p+u):U=Array.prototype.slice.call(U,p,p+u)),I=!0,C=Zt(u),!C)throw new M.ErrnoError(48);Q.set(U,C)}return{ptr:C,allocated:I}},msync(c,u,p,v,S){return ke.stream_ops.write(c,u,0,v,p,!1),0}}},ns=(c,u,p,v)=>{var S=`al ${c}`;P(c,C=>{u(new Uint8Array(C)),S&&Ge()},C=>{if(p)p();else throw`Loading data file "${c}" failed.`}),S&&rt()},is=(c,u,p,v,S,C)=>{M.createDataFile(c,u,p,v,S,C)},jn=o.preloadPlugins||[],Ar=(c,u,p,v)=>{typeof Browser<"u"&&Browser.init();var S=!1;return jn.forEach(C=>{S||C.canHandle(u)&&(C.handle(c,u,p,v),S=!0)}),S},rs=(c,u,p,v,S,C,I,U,j,se)=>{var me=u?at.resolve(de.join2(c,u)):c;function be(Te){function De(Ye){se==null||se(),U||is(c,u,Ye,v,S,j),C==null||C(),Ge()}Ar(Te,me,De,()=>{I==null||I(),Ge()})||De(Te)}rt(),typeof p=="string"?ns(p,be,I):be(p)},ss=c=>{var u={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},p=u[c];if(typeof p>"u")throw new Error(`Unknown file open mode: ${c}`);return p},ci=(c,u)=>{var p=0;return c&&(p|=365),u&&(p|=146),p},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(c){this.name="ErrnoError",this.errno=c}},genericErrors:{},filesystems:null,syncFSRequests:0,FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(c){this.node=c}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(c){this.shared.flags=c}get position(){return this.shared.position}set position(c){this.shared.position=c}},FSNode:class{constructor(c,u,p,v){c||(c=this),this.parent=c,this.mount=c.mount,this.mounted=null,this.id=M.nextInode++,this.name=u,this.mode=p,this.node_ops={},this.stream_ops={},this.rdev=v,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(c){c?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(c){c?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(c,u={}){if(c=at.resolve(c),!c)return{path:"",node:null};var p={follow_mount:!0,recurse_count:0};if(u=Object.assign(p,u),u.recurse_count>8)throw new M.ErrnoError(32);for(var v=c.split("/").filter(be=>!!be),S=M.root,C="/",I=0;I<v.length;I++){var U=I===v.length-1;if(U&&u.parent)break;if(S=M.lookupNode(S,v[I]),C=de.join2(C,v[I]),M.isMountpoint(S)&&(!U||U&&u.follow_mount)&&(S=S.mounted.root),!U||u.follow)for(var j=0;M.isLink(S.mode);){var se=M.readlink(C);C=at.resolve(de.dirname(C),se);var me=M.lookupPath(C,{recurse_count:u.recurse_count+1});if(S=me.node,j++>40)throw new M.ErrnoError(32)}}return{path:C,node:S}},getPath(c){for(var u;;){if(M.isRoot(c)){var p=c.mount.mountpoint;return u?p[p.length-1]!=="/"?`${p}/${u}`:p+u:p}u=u?`${c.name}/${u}`:c.name,c=c.parent}},hashName(c,u){for(var p=0,v=0;v<u.length;v++)p=(p<<5)-p+u.charCodeAt(v)|0;return(c+p>>>0)%M.nameTable.length},hashAddNode(c){var u=M.hashName(c.parent.id,c.name);c.name_next=M.nameTable[u],M.nameTable[u]=c},hashRemoveNode(c){var u=M.hashName(c.parent.id,c.name);if(M.nameTable[u]===c)M.nameTable[u]=c.name_next;else for(var p=M.nameTable[u];p;){if(p.name_next===c){p.name_next=c.name_next;break}p=p.name_next}},lookupNode(c,u){var p=M.mayLookup(c);if(p)throw new M.ErrnoError(p);for(var v=M.hashName(c.id,u),S=M.nameTable[v];S;S=S.name_next){var C=S.name;if(S.parent.id===c.id&&C===u)return S}return M.lookup(c,u)},createNode(c,u,p,v){var S=new M.FSNode(c,u,p,v);return M.hashAddNode(S),S},destroyNode(c){M.hashRemoveNode(c)},isRoot(c){return c===c.parent},isMountpoint(c){return!!c.mounted},isFile(c){return(c&61440)===32768},isDir(c){return(c&61440)===16384},isLink(c){return(c&61440)===40960},isChrdev(c){return(c&61440)===8192},isBlkdev(c){return(c&61440)===24576},isFIFO(c){return(c&61440)===4096},isSocket(c){return(c&49152)===49152},flagsToPermissionString(c){var u=["r","w","rw"][c&3];return c&512&&(u+="w"),u},nodePermissions(c,u){return M.ignorePermissions?0:u.includes("r")&&!(c.mode&292)||u.includes("w")&&!(c.mode&146)||u.includes("x")&&!(c.mode&73)?2:0},mayLookup(c){if(!M.isDir(c.mode))return 54;var u=M.nodePermissions(c,"x");return u||(c.node_ops.lookup?0:2)},mayCreate(c,u){try{var p=M.lookupNode(c,u);return 20}catch{}return M.nodePermissions(c,"wx")},mayDelete(c,u,p){var v;try{v=M.lookupNode(c,u)}catch(C){return C.errno}var S=M.nodePermissions(c,"wx");if(S)return S;if(p){if(!M.isDir(v.mode))return 54;if(M.isRoot(v)||M.getPath(v)===M.cwd())return 10}else if(M.isDir(v.mode))return 31;return 0},mayOpen(c,u){return c?M.isLink(c.mode)?32:M.isDir(c.mode)&&(M.flagsToPermissionString(u)!=="r"||u&512)?31:M.nodePermissions(c,M.flagsToPermissionString(u)):44},MAX_OPEN_FDS:4096,nextfd(){for(var c=0;c<=M.MAX_OPEN_FDS;c++)if(!M.streams[c])return c;throw new M.ErrnoError(33)},getStreamChecked(c){var u=M.getStream(c);if(!u)throw new M.ErrnoError(8);return u},getStream:c=>M.streams[c],createStream(c,u=-1){return c=Object.assign(new M.FSStream,c),u==-1&&(u=M.nextfd()),c.fd=u,M.streams[u]=c,c},closeStream(c){M.streams[c]=null},dupStream(c,u=-1){var v,S;var p=M.createStream(c,u);return(S=(v=p.stream_ops)==null?void 0:v.dup)==null||S.call(v,p),p},chrdev_stream_ops:{open(c){var p,v;var u=M.getDevice(c.node.rdev);c.stream_ops=u.stream_ops,(v=(p=c.stream_ops).open)==null||v.call(p,c)},llseek(){throw new M.ErrnoError(70)}},major:c=>c>>8,minor:c=>c&255,makedev:(c,u)=>c<<8|u,registerDevice(c,u){M.devices[c]={stream_ops:u}},getDevice:c=>M.devices[c],getMounts(c){for(var u=[],p=[c];p.length;){var v=p.pop();u.push(v),p.push(...v.mounts)}return u},syncfs(c,u){typeof c=="function"&&(u=c,c=!1),M.syncFSRequests++,M.syncFSRequests>1&&ce(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var p=M.getMounts(M.root.mount),v=0;function S(I){return M.syncFSRequests--,u(I)}function C(I){if(I)return C.errored?void 0:(C.errored=!0,S(I));++v>=p.length&&S(null)}p.forEach(I=>{if(!I.type.syncfs)return C(null);I.type.syncfs(I,c,C)})},mount(c,u,p){var v=p==="/",S=!p,C;if(v&&M.root)throw new M.ErrnoError(10);if(!v&&!S){var I=M.lookupPath(p,{follow_mount:!1});if(p=I.path,C=I.node,M.isMountpoint(C))throw new M.ErrnoError(10);if(!M.isDir(C.mode))throw new M.ErrnoError(54)}var U={type:c,opts:u,mountpoint:p,mounts:[]},j=c.mount(U);return j.mount=U,U.root=j,v?M.root=j:C&&(C.mounted=U,C.mount&&C.mount.mounts.push(U)),j},unmount(c){var u=M.lookupPath(c,{follow_mount:!1});if(!M.isMountpoint(u.node))throw new M.ErrnoError(28);var p=u.node,v=p.mounted,S=M.getMounts(v);Object.keys(M.nameTable).forEach(I=>{for(var U=M.nameTable[I];U;){var j=U.name_next;S.includes(U.mount)&&M.destroyNode(U),U=j}}),p.mounted=null;var C=p.mount.mounts.indexOf(v);p.mount.mounts.splice(C,1)},lookup(c,u){return c.node_ops.lookup(c,u)},mknod(c,u,p){var v=M.lookupPath(c,{parent:!0}),S=v.node,C=de.basename(c);if(!C||C==="."||C==="..")throw new M.ErrnoError(28);var I=M.mayCreate(S,C);if(I)throw new M.ErrnoError(I);if(!S.node_ops.mknod)throw new M.ErrnoError(63);return S.node_ops.mknod(S,C,u,p)},create(c,u){return u=u!==void 0?u:438,u&=4095,u|=32768,M.mknod(c,u,0)},mkdir(c,u){return u=u!==void 0?u:511,u&=1023,u|=16384,M.mknod(c,u,0)},mkdirTree(c,u){for(var p=c.split("/"),v="",S=0;S<p.length;++S)if(p[S]){v+="/"+p[S];try{M.mkdir(v,u)}catch(C){if(C.errno!=20)throw C}}},mkdev(c,u,p){return typeof p>"u"&&(p=u,u=438),u|=8192,M.mknod(c,u,p)},symlink(c,u){if(!at.resolve(c))throw new M.ErrnoError(44);var p=M.lookupPath(u,{parent:!0}),v=p.node;if(!v)throw new M.ErrnoError(44);var S=de.basename(u),C=M.mayCreate(v,S);if(C)throw new M.ErrnoError(C);if(!v.node_ops.symlink)throw new M.ErrnoError(63);return v.node_ops.symlink(v,S,c)},rename(c,u){var p=de.dirname(c),v=de.dirname(u),S=de.basename(c),C=de.basename(u),I,U,j;if(I=M.lookupPath(c,{parent:!0}),U=I.node,I=M.lookupPath(u,{parent:!0}),j=I.node,!U||!j)throw new M.ErrnoError(44);if(U.mount!==j.mount)throw new M.ErrnoError(75);var se=M.lookupNode(U,S),me=at.relative(c,v);if(me.charAt(0)!==".")throw new M.ErrnoError(28);if(me=at.relative(u,p),me.charAt(0)!==".")throw new M.ErrnoError(55);var be;try{be=M.lookupNode(j,C)}catch{}if(se!==be){var Te=M.isDir(se.mode),De=M.mayDelete(U,S,Te);if(De)throw new M.ErrnoError(De);if(De=be?M.mayDelete(j,C,Te):M.mayCreate(j,C),De)throw new M.ErrnoError(De);if(!U.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint(se)||be&&M.isMountpoint(be))throw new M.ErrnoError(10);if(j!==U&&(De=M.nodePermissions(U,"w"),De))throw new M.ErrnoError(De);M.hashRemoveNode(se);try{U.node_ops.rename(se,j,C)}catch(Ye){throw Ye}finally{M.hashAddNode(se)}}},rmdir(c){var u=M.lookupPath(c,{parent:!0}),p=u.node,v=de.basename(c),S=M.lookupNode(p,v),C=M.mayDelete(p,v,!0);if(C)throw new M.ErrnoError(C);if(!p.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(S))throw new M.ErrnoError(10);p.node_ops.rmdir(p,v),M.destroyNode(S)},readdir(c){var u=M.lookupPath(c,{follow:!0}),p=u.node;if(!p.node_ops.readdir)throw new M.ErrnoError(54);return p.node_ops.readdir(p)},unlink(c){var u=M.lookupPath(c,{parent:!0}),p=u.node;if(!p)throw new M.ErrnoError(44);var v=de.basename(c),S=M.lookupNode(p,v),C=M.mayDelete(p,v,!1);if(C)throw new M.ErrnoError(C);if(!p.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(S))throw new M.ErrnoError(10);p.node_ops.unlink(p,v),M.destroyNode(S)},readlink(c){var u=M.lookupPath(c),p=u.node;if(!p)throw new M.ErrnoError(44);if(!p.node_ops.readlink)throw new M.ErrnoError(28);return at.resolve(M.getPath(p.parent),p.node_ops.readlink(p))},stat(c,u){var p=M.lookupPath(c,{follow:!u}),v=p.node;if(!v)throw new M.ErrnoError(44);if(!v.node_ops.getattr)throw new M.ErrnoError(63);return v.node_ops.getattr(v)},lstat(c){return M.stat(c,!0)},chmod(c,u,p){var v;if(typeof c=="string"){var S=M.lookupPath(c,{follow:!p});v=S.node}else v=c;if(!v.node_ops.setattr)throw new M.ErrnoError(63);v.node_ops.setattr(v,{mode:u&4095|v.mode&-4096,timestamp:Date.now()})},lchmod(c,u){M.chmod(c,u,!0)},fchmod(c,u){var p=M.getStreamChecked(c);M.chmod(p.node,u)},chown(c,u,p,v){var S;if(typeof c=="string"){var C=M.lookupPath(c,{follow:!v});S=C.node}else S=c;if(!S.node_ops.setattr)throw new M.ErrnoError(63);S.node_ops.setattr(S,{timestamp:Date.now()})},lchown(c,u,p){M.chown(c,u,p,!0)},fchown(c,u,p){var v=M.getStreamChecked(c);M.chown(v.node,u,p)},truncate(c,u){if(u<0)throw new M.ErrnoError(28);var p;if(typeof c=="string"){var v=M.lookupPath(c,{follow:!0});p=v.node}else p=c;if(!p.node_ops.setattr)throw new M.ErrnoError(63);if(M.isDir(p.mode))throw new M.ErrnoError(31);if(!M.isFile(p.mode))throw new M.ErrnoError(28);var S=M.nodePermissions(p,"w");if(S)throw new M.ErrnoError(S);p.node_ops.setattr(p,{size:u,timestamp:Date.now()})},ftruncate(c,u){var p=M.getStreamChecked(c);if(!(p.flags&2097155))throw new M.ErrnoError(28);M.truncate(p.node,u)},utime(c,u,p){var v=M.lookupPath(c,{follow:!0}),S=v.node;S.node_ops.setattr(S,{timestamp:Math.max(u,p)})},open(c,u,p){if(c==="")throw new M.ErrnoError(44);u=typeof u=="string"?ss(u):u,p=typeof p>"u"?438:p,u&64?p=p&4095|32768:p=0;var v;if(typeof c=="object")v=c;else{c=de.normalize(c);try{var S=M.lookupPath(c,{follow:!(u&131072)});v=S.node}catch{}}var C=!1;if(u&64)if(v){if(u&128)throw new M.ErrnoError(20)}else v=M.mknod(c,p,0),C=!0;if(!v)throw new M.ErrnoError(44);if(M.isChrdev(v.mode)&&(u&=-513),u&65536&&!M.isDir(v.mode))throw new M.ErrnoError(54);if(!C){var I=M.mayOpen(v,u);if(I)throw new M.ErrnoError(I)}u&512&&!C&&M.truncate(v,0),u&=-131713;var U=M.createStream({node:v,path:M.getPath(v),flags:u,seekable:!0,position:0,stream_ops:v.stream_ops,ungotten:[],error:!1});return U.stream_ops.open&&U.stream_ops.open(U),o.logReadFiles&&!(u&1)&&(M.readFiles||(M.readFiles={}),c in M.readFiles||(M.readFiles[c]=1)),U},close(c){if(M.isClosed(c))throw new M.ErrnoError(8);c.getdents&&(c.getdents=null);try{c.stream_ops.close&&c.stream_ops.close(c)}catch(u){throw u}finally{M.closeStream(c.fd)}c.fd=null},isClosed(c){return c.fd===null},llseek(c,u,p){if(M.isClosed(c))throw new M.ErrnoError(8);if(!c.seekable||!c.stream_ops.llseek)throw new M.ErrnoError(70);if(p!=0&&p!=1&&p!=2)throw new M.ErrnoError(28);return c.position=c.stream_ops.llseek(c,u,p),c.ungotten=[],c.position},read(c,u,p,v,S){if(v<0||S<0)throw new M.ErrnoError(28);if(M.isClosed(c))throw new M.ErrnoError(8);if((c.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(c.node.mode))throw new M.ErrnoError(31);if(!c.stream_ops.read)throw new M.ErrnoError(28);var C=typeof S<"u";if(!C)S=c.position;else if(!c.seekable)throw new M.ErrnoError(70);var I=c.stream_ops.read(c,u,p,v,S);return C||(c.position+=I),I},write(c,u,p,v,S,C){if(v<0||S<0)throw new M.ErrnoError(28);if(M.isClosed(c))throw new M.ErrnoError(8);if(!(c.flags&2097155))throw new M.ErrnoError(8);if(M.isDir(c.node.mode))throw new M.ErrnoError(31);if(!c.stream_ops.write)throw new M.ErrnoError(28);c.seekable&&c.flags&1024&&M.llseek(c,0,2);var I=typeof S<"u";if(!I)S=c.position;else if(!c.seekable)throw new M.ErrnoError(70);var U=c.stream_ops.write(c,u,p,v,S,C);return I||(c.position+=U),U},allocate(c,u,p){if(M.isClosed(c))throw new M.ErrnoError(8);if(u<0||p<=0)throw new M.ErrnoError(28);if(!(c.flags&2097155))throw new M.ErrnoError(8);if(!M.isFile(c.node.mode)&&!M.isDir(c.node.mode))throw new M.ErrnoError(43);if(!c.stream_ops.allocate)throw new M.ErrnoError(138);c.stream_ops.allocate(c,u,p)},mmap(c,u,p,v,S){if(v&2&&!(S&2)&&(c.flags&2097155)!==2)throw new M.ErrnoError(2);if((c.flags&2097155)===1)throw new M.ErrnoError(2);if(!c.stream_ops.mmap)throw new M.ErrnoError(43);return c.stream_ops.mmap(c,u,p,v,S)},msync(c,u,p,v,S){return c.stream_ops.msync?c.stream_ops.msync(c,u,p,v,S):0},ioctl(c,u,p){if(!c.stream_ops.ioctl)throw new M.ErrnoError(59);return c.stream_ops.ioctl(c,u,p)},readFile(c,u={}){if(u.flags=u.flags||0,u.encoding=u.encoding||"binary",u.encoding!=="utf8"&&u.encoding!=="binary")throw new Error(`Invalid encoding type "${u.encoding}"`);var p,v=M.open(c,u.flags),S=M.stat(c),C=S.size,I=new Uint8Array(C);return M.read(v,I,0,C,0),u.encoding==="utf8"?p=ve(I,0):u.encoding==="binary"&&(p=I),M.close(v),p},writeFile(c,u,p={}){p.flags=p.flags||577;var v=M.open(c,p.flags,p.mode);if(typeof u=="string"){var S=new Uint8Array(re(u)+1),C=xe(u,S,0,S.length);M.write(v,S,0,C,void 0,p.canOwn)}else if(ArrayBuffer.isView(u))M.write(v,u,0,u.byteLength,void 0,p.canOwn);else throw new Error("Unsupported data type");M.close(v)},cwd:()=>M.currentPath,chdir(c){var u=M.lookupPath(c,{follow:!0});if(u.node===null)throw new M.ErrnoError(44);if(!M.isDir(u.node.mode))throw new M.ErrnoError(54);var p=M.nodePermissions(u.node,"x");if(p)throw new M.ErrnoError(p);M.currentPath=u.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(v,S,C,I,U)=>I}),M.mkdev("/dev/null",M.makedev(1,3)),At.register(M.makedev(5,0),At.default_tty_ops),At.register(M.makedev(6,0),At.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var c=new Uint8Array(1024),u=0,p=()=>(u===0&&(u=$e(c).byteLength),c[--u]);M.createDevice("/dev","random",p),M.createDevice("/dev","urandom",p),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var c=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var u=M.createNode(c,"fd",16895,73);return u.node_ops={lookup(p,v){var S=+v,C=M.getStreamChecked(S),I={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>C.path}};return I.parent=I,I}},u}},{},"/proc/self/fd")},createStandardStreams(){o.stdin?M.createDevice("/dev","stdin",o.stdin):M.symlink("/dev/tty","/dev/stdin"),o.stdout?M.createDevice("/dev","stdout",null,o.stdout):M.symlink("/dev/tty","/dev/stdout"),o.stderr?M.createDevice("/dev","stderr",null,o.stderr):M.symlink("/dev/tty1","/dev/stderr"),M.open("/dev/stdin",0),M.open("/dev/stdout",1),M.open("/dev/stderr",1)},staticInit(){[44].forEach(c=>{M.genericErrors[c]=new M.ErrnoError(c),M.genericErrors[c].stack="<generic error, no stack>"}),M.nameTable=new Array(4096),M.mount(ke,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:ke}},init(c,u,p){M.init.initialized=!0,o.stdin=c||o.stdin,o.stdout=u||o.stdout,o.stderr=p||o.stderr,M.createStandardStreams()},quit(){M.init.initialized=!1;for(var c=0;c<M.streams.length;c++){var u=M.streams[c];u&&M.close(u)}},findObject(c,u){var p=M.analyzePath(c,u);return p.exists?p.object:null},analyzePath(c,u){try{var p=M.lookupPath(c,{follow:!u});c=p.path}catch{}var v={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var p=M.lookupPath(c,{parent:!0});v.parentExists=!0,v.parentPath=p.path,v.parentObject=p.node,v.name=de.basename(c),p=M.lookupPath(c,{follow:!u}),v.exists=!0,v.path=p.path,v.object=p.node,v.name=p.node.name,v.isRoot=p.path==="/"}catch(S){v.error=S.errno}return v},createPath(c,u,p,v){c=typeof c=="string"?c:M.getPath(c);for(var S=u.split("/").reverse();S.length;){var C=S.pop();if(C){var I=de.join2(c,C);try{M.mkdir(I)}catch{}c=I}}return I},createFile(c,u,p,v,S){var C=de.join2(typeof c=="string"?c:M.getPath(c),u),I=ci(v,S);return M.create(C,I)},createDataFile(c,u,p,v,S,C){var I=u;c&&(c=typeof c=="string"?c:M.getPath(c),I=u?de.join2(c,u):c);var U=ci(v,S),j=M.create(I,U);if(p){if(typeof p=="string"){for(var se=new Array(p.length),me=0,be=p.length;me<be;++me)se[me]=p.charCodeAt(me);p=se}M.chmod(j,U|146);var Te=M.open(j,577);M.write(Te,p,0,p.length,0,C),M.close(Te),M.chmod(j,U)}},createDevice(c,u,p,v){var S=de.join2(typeof c=="string"?c:M.getPath(c),u),C=ci(!!p,!!v);M.createDevice.major||(M.createDevice.major=64);var I=M.makedev(M.createDevice.major++,0);return M.registerDevice(I,{open(U){U.seekable=!1},close(U){var j;(j=v==null?void 0:v.buffer)!=null&&j.length&&v(10)},read(U,j,se,me,be){for(var Te=0,De=0;De<me;De++){var Ye;try{Ye=p()}catch{throw new M.ErrnoError(29)}if(Ye===void 0&&Te===0)throw new M.ErrnoError(6);if(Ye==null)break;Te++,j[se+De]=Ye}return Te&&(U.node.timestamp=Date.now()),Te},write(U,j,se,me,be){for(var Te=0;Te<me;Te++)try{v(j[se+Te])}catch{throw new M.ErrnoError(29)}return me&&(U.node.timestamp=Date.now()),Te}}),M.mkdev(S,C,I)},forceLoadFile(c){if(c.isDevice||c.isFolder||c.link||c.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(A)try{c.contents=ye(A(c.url),!0),c.usedBytes=c.contents.length}catch{throw new M.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile(c,u,p,v,S){class C{constructor(){this.lengthKnown=!1,this.chunks=[]}get(De){if(!(De>this.length-1||De<0)){var Ye=De%this.chunkSize,yt=De/this.chunkSize|0;return this.getter(yt)[Ye]}}setDataGetter(De){this.getter=De}cacheLength(){var De=new XMLHttpRequest;if(De.open("HEAD",p,!1),De.send(null),!(De.status>=200&&De.status<300||De.status===304))throw new Error("Couldn't load "+p+". Status: "+De.status);var Ye=Number(De.getResponseHeader("Content-length")),yt,Qt=(yt=De.getResponseHeader("Accept-Ranges"))&&yt==="bytes",Ct=(yt=De.getResponseHeader("Content-Encoding"))&&yt==="gzip",he=1024*1024;Qt||(he=Ye);var Be=(Pt,Rn)=>{if(Pt>Rn)throw new Error("invalid range ("+Pt+", "+Rn+") or no bytes requested!");if(Rn>Ye-1)throw new Error("only "+Ye+" bytes available! programmer error!");var Ht=new XMLHttpRequest;if(Ht.open("GET",p,!1),Ye!==he&&Ht.setRequestHeader("Range","bytes="+Pt+"-"+Rn),Ht.responseType="arraybuffer",Ht.overrideMimeType&&Ht.overrideMimeType("text/plain; charset=x-user-defined"),Ht.send(null),!(Ht.status>=200&&Ht.status<300||Ht.status===304))throw new Error("Couldn't load "+p+". Status: "+Ht.status);return Ht.response!==void 0?new Uint8Array(Ht.response||[]):ye(Ht.responseText||"",!0)},Xt=this;Xt.setDataGetter(Pt=>{var Rn=Pt*he,Ht=(Pt+1)*he-1;if(Ht=Math.min(Ht,Ye-1),typeof Xt.chunks[Pt]>"u"&&(Xt.chunks[Pt]=Be(Rn,Ht)),typeof Xt.chunks[Pt]>"u")throw new Error("doXHR failed!");return Xt.chunks[Pt]}),(Ct||!Ye)&&(he=Ye=1,Ye=this.getter(0).length,he=Ye,X("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Ye,this._chunkSize=he,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!m)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var I=new C,U={isDevice:!1,contents:I}}else var U={isDevice:!1,url:p};var j=M.createFile(c,u,U,v,S);U.contents?j.contents=U.contents:U.url&&(j.contents=null,j.url=U.url),Object.defineProperties(j,{usedBytes:{get:function(){return this.contents.length}}});var se={},me=Object.keys(j.stream_ops);me.forEach(Te=>{var De=j.stream_ops[Te];se[Te]=(...Ye)=>(M.forceLoadFile(j),De(...Ye))});function be(Te,De,Ye,yt,Qt){var Ct=Te.node.contents;if(Qt>=Ct.length)return 0;var he=Math.min(Ct.length-Qt,yt);if(Ct.slice)for(var Be=0;Be<he;Be++)De[Ye+Be]=Ct[Qt+Be];else for(var Be=0;Be<he;Be++)De[Ye+Be]=Ct.get(Qt+Be);return he}return se.read=(Te,De,Ye,yt,Qt)=>(M.forceLoadFile(j),be(Te,De,Ye,yt,Qt)),se.mmap=(Te,De,Ye,yt,Qt)=>{M.forceLoadFile(j);var Ct=Zt(De);if(!Ct)throw new M.ErrnoError(48);return be(Te,Q,Ct,De,Ye),{ptr:Ct,allocated:!0}},j.stream_ops=se,j}},Hn=(c,u)=>c?ve(ne,c,u):"",dt={DEFAULT_POLLMASK:5,calculateAt(c,u,p){if(de.isAbs(u))return u;var v;if(c===-100)v=M.cwd();else{var S=dt.getStreamFromFD(c);v=S.path}if(u.length==0){if(!p)throw new M.ErrnoError(44);return v}return de.join2(v,u)},doStat(c,u,p){var v=c(u);k[p>>2]=v.dev,k[p+4>>2]=v.mode,ue[p+8>>2]=v.nlink,k[p+12>>2]=v.uid,k[p+16>>2]=v.gid,k[p+20>>2]=v.rdev,ae=[v.size>>>0,(Se=v.size,+Math.abs(Se)>=1?Se>0?+Math.floor(Se/4294967296)>>>0:~~+Math.ceil((Se-+(~~Se>>>0))/4294967296)>>>0:0)],k[p+24>>2]=ae[0],k[p+28>>2]=ae[1],k[p+32>>2]=4096,k[p+36>>2]=v.blocks;var S=v.atime.getTime(),C=v.mtime.getTime(),I=v.ctime.getTime();return ae=[Math.floor(S/1e3)>>>0,(Se=Math.floor(S/1e3),+Math.abs(Se)>=1?Se>0?+Math.floor(Se/4294967296)>>>0:~~+Math.ceil((Se-+(~~Se>>>0))/4294967296)>>>0:0)],k[p+40>>2]=ae[0],k[p+44>>2]=ae[1],ue[p+48>>2]=S%1e3*1e3,ae=[Math.floor(C/1e3)>>>0,(Se=Math.floor(C/1e3),+Math.abs(Se)>=1?Se>0?+Math.floor(Se/4294967296)>>>0:~~+Math.ceil((Se-+(~~Se>>>0))/4294967296)>>>0:0)],k[p+56>>2]=ae[0],k[p+60>>2]=ae[1],ue[p+64>>2]=C%1e3*1e3,ae=[Math.floor(I/1e3)>>>0,(Se=Math.floor(I/1e3),+Math.abs(Se)>=1?Se>0?+Math.floor(Se/4294967296)>>>0:~~+Math.ceil((Se-+(~~Se>>>0))/4294967296)>>>0:0)],k[p+72>>2]=ae[0],k[p+76>>2]=ae[1],ue[p+80>>2]=I%1e3*1e3,ae=[v.ino>>>0,(Se=v.ino,+Math.abs(Se)>=1?Se>0?+Math.floor(Se/4294967296)>>>0:~~+Math.ceil((Se-+(~~Se>>>0))/4294967296)>>>0:0)],k[p+88>>2]=ae[0],k[p+92>>2]=ae[1],0},doMsync(c,u,p,v,S){if(!M.isFile(u.node.mode))throw new M.ErrnoError(43);if(v&2)return 0;var C=ne.slice(c,c+p);M.msync(u,C,S,p,v)},getStreamFromFD(c){var u=M.getStreamChecked(c);return u},varargs:void 0,getStr(c){var u=Hn(c);return u}};function as(c,u){try{return c=dt.getStr(c),M.chmod(c,u),0}catch(p){if(typeof M>"u"||p.name!=="ErrnoError")throw p;return-p.errno}}function ca(c,u,p,v){try{if(u=dt.getStr(u),u=dt.calculateAt(c,u),p&-8)return-28;var S=M.lookupPath(u,{follow:!0}),C=S.node;if(!C)return-44;var I="";return p&4&&(I+="r"),p&2&&(I+="w"),p&1&&(I+="x"),I&&M.nodePermissions(C,I)?-2:0}catch(U){if(typeof M>"u"||U.name!=="ErrnoError")throw U;return-U.errno}}function Hi(){var c=k[+dt.varargs>>2];return dt.varargs+=4,c}var li=Hi;function w(c,u,p){dt.varargs=p;try{var v=dt.getStreamFromFD(c);switch(u){case 0:{var S=Hi();if(S<0)return-28;for(;M.streams[S];)S++;var C;return C=M.dupStream(v,S),C.fd}case 1:case 2:return 0;case 3:return v.flags;case 4:{var S=Hi();return v.flags|=S,0}case 12:{var S=li(),I=0;return K[S+I>>1]=2,0}case 13:case 14:return 0}return-28}catch(U){if(typeof M>"u"||U.name!=="ErrnoError")throw U;return-U.errno}}function H(c,u){try{var p=dt.getStreamFromFD(c);return dt.doStat(M.stat,p.path,u)}catch(v){if(typeof M>"u"||v.name!=="ErrnoError")throw v;return-v.errno}}function q(c,u,p){dt.varargs=p;try{var v=dt.getStreamFromFD(c);switch(u){case 21509:return v.tty?0:-59;case 21505:{if(!v.tty)return-59;if(v.tty.ops.ioctl_tcgets){var S=v.tty.ops.ioctl_tcgets(v),C=li();k[C>>2]=S.c_iflag||0,k[C+4>>2]=S.c_oflag||0,k[C+8>>2]=S.c_cflag||0,k[C+12>>2]=S.c_lflag||0;for(var I=0;I<32;I++)Q[C+I+17]=S.c_cc[I]||0;return 0}return 0}case 21510:case 21511:case 21512:return v.tty?0:-59;case 21506:case 21507:case 21508:{if(!v.tty)return-59;if(v.tty.ops.ioctl_tcsets){for(var C=li(),U=k[C>>2],j=k[C+4>>2],se=k[C+8>>2],me=k[C+12>>2],be=[],I=0;I<32;I++)be.push(Q[C+I+17]);return v.tty.ops.ioctl_tcsets(v.tty,u,{c_iflag:U,c_oflag:j,c_cflag:se,c_lflag:me,c_cc:be})}return 0}case 21519:{if(!v.tty)return-59;var C=li();return k[C>>2]=0,0}case 21520:return v.tty?-28:-59;case 21531:{var C=li();return M.ioctl(v,u,C)}case 21523:{if(!v.tty)return-59;if(v.tty.ops.ioctl_tiocgwinsz){var Te=v.tty.ops.ioctl_tiocgwinsz(v.tty),C=li();K[C>>1]=Te[0],K[C+2>>1]=Te[1]}return 0}case 21524:return v.tty?0:-59;case 21515:return v.tty?0:-59;default:return-28}}catch(De){if(typeof M>"u"||De.name!=="ErrnoError")throw De;return-De.errno}}function Y(c,u){try{return c=dt.getStr(c),dt.doStat(M.lstat,c,u)}catch(p){if(typeof M>"u"||p.name!=="ErrnoError")throw p;return-p.errno}}function G(c,u,p,v){try{u=dt.getStr(u);var S=v&256,C=v&4096;return v=v&-6401,u=dt.calculateAt(c,u,C),dt.doStat(S?M.lstat:M.stat,u,p)}catch(I){if(typeof M>"u"||I.name!=="ErrnoError")throw I;return-I.errno}}function pe(c,u,p,v){dt.varargs=v;try{u=dt.getStr(u),u=dt.calculateAt(c,u);var S=v?Hi():0;return M.open(u,p,S).fd}catch(C){if(typeof M>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function Me(c){try{return c=dt.getStr(c),M.rmdir(c),0}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Le(c,u){try{return c=dt.getStr(c),dt.doStat(M.stat,c,u)}catch(p){if(typeof M>"u"||p.name!=="ErrnoError")throw p;return-p.errno}}function Ne(c,u,p){try{return u=dt.getStr(u),u=dt.calculateAt(c,u),p===0?M.unlink(u):p===512?M.rmdir(u):xt("Invalid flags passed to unlinkat"),0}catch(v){if(typeof M>"u"||v.name!=="ErrnoError")throw v;return-v.errno}}var We=(c,u,p,v,S)=>{},je=()=>{for(var c=new Array(256),u=0;u<256;++u)c[u]=String.fromCharCode(u);Ue=c},Ue,Qe=c=>{for(var u="",p=c;ne[p];)u+=Ue[ne[p++]];return u},gt={},Et={},Wt={},pt,Ee=c=>{throw new pt(c)},Ot,mt=c=>{throw new Ot(c)},pn=(c,u,p)=>{c.forEach(function(U){Wt[U]=u});function v(U){var j=p(U);j.length!==c.length&&mt("Mismatched type converter count");for(var se=0;se<c.length;++se)Dt(c[se],j[se])}var S=new Array(u.length),C=[],I=0;u.forEach((U,j)=>{Et.hasOwnProperty(U)?S[j]=Et[U]:(C.push(U),gt.hasOwnProperty(U)||(gt[U]=[]),gt[U].push(()=>{S[j]=Et[U],++I,I===C.length&&v(S)}))}),C.length===0&&v(S)};function hi(c,u,p={}){var v=u.name;if(c||Ee(`type "${v}" must have a positive integer typeid pointer`),Et.hasOwnProperty(c)){if(p.ignoreDuplicateRegistrations)return;Ee(`Cannot register type '${v}' twice`)}if(Et[c]=u,delete Wt[c],gt.hasOwnProperty(c)){var S=gt[c];delete gt[c],S.forEach(C=>C())}}function Dt(c,u,p={}){if(!("argPackAdvance"in u))throw new TypeError("registerType registeredInstance requires argPackAdvance");return hi(c,u,p)}var An=8,It=(c,u,p,v)=>{u=Qe(u),Dt(c,{name:u,fromWireType:function(S){return!!S},toWireType:function(S,C){return C?p:v},argPackAdvance:An,readValueFromPointer:function(S){return this.fromWireType(ne[S])},destructorFunction:null})},yn=[],mn=[],sn=c=>{c>9&&--mn[c+1]===0&&(mn[c]=void 0,yn.push(c))},Rr=()=>mn.length/2-5-yn.length,la=()=>{mn.push(0,1,void 0,1,null,1,!0,1,!1,1),o.count_emval_handles=Rr},Ft={toValue:c=>(c||Ee("Cannot use deleted val. handle = "+c),mn[c]),toHandle:c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const u=yn.pop()||mn.length;return mn[u]=c,mn[u+1]=1,u}}}};function ha(c){return this.fromWireType(ue[c>>2])}var Vh={name:"emscripten::val",fromWireType:c=>{var u=Ft.toValue(c);return sn(c),u},toWireType:(c,u)=>Ft.toHandle(u),argPackAdvance:An,readValueFromPointer:ha,destructorFunction:null},Wh=c=>Dt(c,Vh),Xh=(c,u)=>{switch(u){case 4:return function(p){return this.fromWireType(we[p>>2])};case 8:return function(p){return this.fromWireType(Ie[p>>3])};default:throw new TypeError(`invalid float width (${u}): ${c}`)}},jh=(c,u,p)=>{u=Qe(u),Dt(c,{name:u,fromWireType:v=>v,toWireType:(v,S)=>S,argPackAdvance:An,readValueFromPointer:Xh(u,p),destructorFunction:null})},os=(c,u)=>Object.defineProperty(u,"name",{value:c}),fc=c=>{for(;c.length;){var u=c.pop(),p=c.pop();p(u)}};function pc(c){for(var u=1;u<c.length;++u)if(c[u]!==null&&c[u].destructorFunction===void 0)return!0;return!1}function mc(c,u){if(!(c instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof c} which is not a function`);var p=os(c.name||"unknownFunctionName",function(){});p.prototype=c.prototype;var v=new p,S=c.apply(v,u);return S instanceof Object?S:v}function qh(c,u,p,v){for(var S=pc(c),C=c.length,I="",U="",j=0;j<C-2;++j)I+=(j!==0?", ":"")+"arg"+j,U+=(j!==0?", ":"")+"arg"+j+"Wired";var se=`
        return function (${I}) {
        if (arguments.length !== ${C-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${C-2}');
        }`;S&&(se+=`var destructors = [];
`);var me=S?"destructors":"null",be=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];u&&(se+="var thisWired = classParam['toWireType']("+me+`, this);
`);for(var j=0;j<C-2;++j)se+="var arg"+j+"Wired = argType"+j+"['toWireType']("+me+", arg"+j+`);
`,be.push("argType"+j);if(u&&(U="thisWired"+(U.length>0?", ":"")+U),se+=(p||v?"var rv = ":"")+"invoker(fn"+(U.length>0?", ":"")+U+`);
`,S)se+=`runDestructors(destructors);
`;else for(var j=u?1:2;j<c.length;++j){var Te=j===1?"thisWired":"arg"+(j-2)+"Wired";c[j].destructorFunction!==null&&(se+=`${Te}_dtor(${Te});
`,be.push(`${Te}_dtor`))}return p&&(se+=`var ret = retType['fromWireType'](rv);
return ret;
`),se+=`}
`,[be,se]}function Yh(c,u,p,v,S,C){var I=u.length;I<2&&Ee("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var U=u[1]!==null&&p!==null,j=pc(u),se=u[0].name!=="void",me=[c,Ee,v,S,fc,u[0],u[1]],be=0;be<I-2;++be)me.push(u[be+2]);if(!j)for(var be=U?1:2;be<u.length;++be)u[be].destructorFunction!==null&&me.push(u[be].destructorFunction);let[Te,De]=qh(u,U,se,C);Te.push(De);var Ye=mc(Function,Te)(...me);return os(c,Ye)}var Kh=(c,u,p)=>{if(c[u].overloadTable===void 0){var v=c[u];c[u]=function(...S){return c[u].overloadTable.hasOwnProperty(S.length)||Ee(`Function '${p}' called with an invalid number of arguments (${S.length}) - expects one of (${c[u].overloadTable})!`),c[u].overloadTable[S.length].apply(this,S)},c[u].overloadTable=[],c[u].overloadTable[v.argCount]=v}},$h=(c,u,p)=>{o.hasOwnProperty(c)?((p===void 0||o[c].overloadTable!==void 0&&o[c].overloadTable[p]!==void 0)&&Ee(`Cannot register public name '${c}' twice`),Kh(o,c,c),o.hasOwnProperty(p)&&Ee(`Cannot register multiple overloads of a function with the same number of arguments (${p})!`),o[c].overloadTable[p]=u):(o[c]=u,p!==void 0&&(o[c].numArguments=p))},Zh=(c,u)=>{for(var p=[],v=0;v<c;v++)p.push(ue[u+v*4>>2]);return p},Jh=(c,u,p)=>{o.hasOwnProperty(c)||mt("Replacing nonexistent public symbol"),o[c].overloadTable!==void 0&&p!==void 0?o[c].overloadTable[p]=u:(o[c]=u,o[c].argCount=p)},Qh=(c,u,p)=>{c=c.replace(/p/g,"i");var v=o["dynCall_"+c];return v(u,...p)},cs=[],_c,gc=c=>{var u=cs[c];return u||(c>=cs.length&&(cs.length=c+1),cs[c]=u=_c.get(c)),u},eu=(c,u,p=[])=>{if(c.includes("j"))return Qh(c,u,p);var v=gc(u)(...p);return v},tu=(c,u)=>(...p)=>eu(c,u,p),nu=(c,u)=>{c=Qe(c);function p(){return c.includes("j")?tu(c,u):gc(u)}var v=p();return typeof v!="function"&&Ee(`unknown function pointer with signature ${c}: ${u}`),v},iu=(c,u)=>{var p=os(u,function(v){this.name=u,this.message=v;var S=new Error(v).stack;S!==void 0&&(this.stack=this.toString()+`
`+S.replace(/^Error(:[^\n]*)?\n/,""))});return p.prototype=Object.create(c.prototype),p.prototype.constructor=p,p.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},p},vc,xc=c=>{var u=Ac(c),p=Qe(u);return qn(u),p},ru=(c,u)=>{var p=[],v={};function S(C){if(!v[C]&&!Et[C]){if(Wt[C]){Wt[C].forEach(S);return}p.push(C),v[C]=!0}}throw u.forEach(S),new vc(`${c}: `+p.map(xc).join([", "]))},su=c=>{c=c.trim();const u=c.indexOf("(");return u!==-1?c.substr(0,u):c},au=(c,u,p,v,S,C,I)=>{var U=Zh(u,p);c=Qe(c),c=su(c),S=nu(v,S),$h(c,function(){ru(`Cannot call ${c} due to unbound types`,U)},u-1),pn([],U,j=>{var se=[j[0],null].concat(j.slice(1));return Jh(c,Yh(c,se,null,S,C,I),u-1),[]})},ou=(c,u,p)=>{switch(u){case 1:return p?v=>Q[v]:v=>ne[v];case 2:return p?v=>K[v>>1]:v=>oe[v>>1];case 4:return p?v=>k[v>>2]:v=>ue[v>>2];default:throw new TypeError(`invalid integer width (${u}): ${c}`)}},cu=(c,u,p,v,S)=>{u=Qe(u);var C=me=>me;if(v===0){var I=32-8*p;C=me=>me<<I>>>I}var U=u.includes("unsigned"),j=(me,be)=>{},se;U?se=function(me,be){return j(be,this.name),be>>>0}:se=function(me,be){return j(be,this.name),be},Dt(c,{name:u,fromWireType:C,toWireType:se,argPackAdvance:An,readValueFromPointer:ou(u,p,v!==0),destructorFunction:null})},lu=(c,u,p)=>{var v=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],S=v[u];function C(I){var U=ue[I>>2],j=ue[I+4>>2];return new S(Q.buffer,j,U)}p=Qe(p),Dt(c,{name:p,fromWireType:C,argPackAdvance:An,readValueFromPointer:C},{ignoreDuplicateRegistrations:!0})},Gi=(c,u,p)=>xe(c,ne,u,p),hu=(c,u)=>{u=Qe(u);var p=u==="std::string";Dt(c,{name:u,fromWireType(v){var S=ue[v>>2],C=v+4,I;if(p)for(var U=C,j=0;j<=S;++j){var se=C+j;if(j==S||ne[se]==0){var me=se-U,be=Hn(U,me);I===void 0?I=be:(I+="\0",I+=be),U=se+1}}else{for(var Te=new Array(S),j=0;j<S;++j)Te[j]=String.fromCharCode(ne[C+j]);I=Te.join("")}return qn(v),I},toWireType(v,S){S instanceof ArrayBuffer&&(S=new Uint8Array(S));var C,I=typeof S=="string";I||S instanceof Uint8Array||S instanceof Uint8ClampedArray||S instanceof Int8Array||Ee("Cannot pass non-string to std::string"),p&&I?C=re(S):C=S.length;var U=_a(4+C+1),j=U+4;if(ue[U>>2]=C,p&&I)Gi(S,j,C+1);else if(I)for(var se=0;se<C;++se){var me=S.charCodeAt(se);me>255&&(qn(j),Ee("String has UTF-16 code units that do not fit in 8 bits")),ne[j+se]=me}else for(var se=0;se<C;++se)ne[j+se]=S[se];return v!==null&&v.push(qn,U),U},argPackAdvance:An,readValueFromPointer:ha,destructorFunction(v){qn(v)}})},yc=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,uu=(c,u)=>{for(var p=c,v=p>>1,S=v+u/2;!(v>=S)&&oe[v];)++v;if(p=v<<1,p-c>32&&yc)return yc.decode(ne.subarray(c,p));for(var C="",I=0;!(I>=u/2);++I){var U=K[c+I*2>>1];if(U==0)break;C+=String.fromCharCode(U)}return C},du=(c,u,p)=>{if(p??(p=2147483647),p<2)return 0;p-=2;for(var v=u,S=p<c.length*2?p/2:c.length,C=0;C<S;++C){var I=c.charCodeAt(C);K[u>>1]=I,u+=2}return K[u>>1]=0,u-v},fu=c=>c.length*2,pu=(c,u)=>{for(var p=0,v="";!(p>=u/4);){var S=k[c+p*4>>2];if(S==0)break;if(++p,S>=65536){var C=S-65536;v+=String.fromCharCode(55296|C>>10,56320|C&1023)}else v+=String.fromCharCode(S)}return v},mu=(c,u,p)=>{if(p??(p=2147483647),p<4)return 0;for(var v=u,S=v+p-4,C=0;C<c.length;++C){var I=c.charCodeAt(C);if(I>=55296&&I<=57343){var U=c.charCodeAt(++C);I=65536+((I&1023)<<10)|U&1023}if(k[u>>2]=I,u+=4,u+4>S)break}return k[u>>2]=0,u-v},_u=c=>{for(var u=0,p=0;p<c.length;++p){var v=c.charCodeAt(p);v>=55296&&v<=57343&&++p,u+=4}return u},gu=(c,u,p)=>{p=Qe(p);var v,S,C,I;u===2?(v=uu,S=du,I=fu,C=U=>oe[U>>1]):u===4&&(v=pu,S=mu,I=_u,C=U=>ue[U>>2]),Dt(c,{name:p,fromWireType:U=>{for(var j=ue[U>>2],se,me=U+4,be=0;be<=j;++be){var Te=U+4+be*u;if(be==j||C(Te)==0){var De=Te-me,Ye=v(me,De);se===void 0?se=Ye:(se+="\0",se+=Ye),me=Te+u}}return qn(U),se},toWireType:(U,j)=>{typeof j!="string"&&Ee(`Cannot pass non-string to C++ string type ${p}`);var se=I(j),me=_a(4+se+u);return ue[me>>2]=se/u,S(j,me+4,se+u),U!==null&&U.push(qn,me),me},argPackAdvance:An,readValueFromPointer:ha,destructorFunction(U){qn(U)}})},vu=(c,u)=>{u=Qe(u),Dt(c,{isVoid:!0,name:u,argPackAdvance:0,fromWireType:()=>{},toWireType:(p,v)=>{}})},xu=1,yu=()=>xu,Mc=c=>{for(var u=c.split("."),p=0;p<4;p++){var v=Number(u[p]);if(isNaN(v))return null;u[p]=v}return(u[0]|u[1]<<8|u[2]<<16|u[3]<<24)>>>0},ls=c=>parseInt(c),Mu=c=>{var u,p,v,S,C=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,I=[];if(!C.test(c))return null;if(c==="::")return[0,0,0,0,0,0,0,0];for(c.startsWith("::")?c=c.replace("::","Z:"):c=c.replace("::",":Z:"),c.indexOf(".")>0?(c=c.replace(new RegExp("[.]","g"),":"),u=c.split(":"),u[u.length-4]=ls(u[u.length-4])+ls(u[u.length-3])*256,u[u.length-3]=ls(u[u.length-2])+ls(u[u.length-1])*256,u=u.slice(0,u.length-2)):u=c.split(":"),v=0,S=0,p=0;p<u.length;p++)if(typeof u[p]=="string")if(u[p]==="Z"){for(S=0;S<8-u.length+1;S++)I[p+S]=0;v=S-1}else I[p+v]=Rc(parseInt(u[p],16));else I[p+v]=u[p];return[I[1]<<16|I[0],I[3]<<16|I[2],I[5]<<16|I[4],I[7]<<16|I[6]]},ui={address_map:{id:1,addrs:{},names:{}},lookup_name(c){var u=Mc(c);if(u!==null||(u=Mu(c),u!==null))return c;var p;if(ui.address_map.addrs[c])p=ui.address_map.addrs[c];else{var v=ui.address_map.id++;Z(v<65535,"exceeded max address mappings of 65535"),p="172.29."+(v&255)+"."+(v&65280),ui.address_map.names[p]=c,ui.address_map.addrs[c]=p}return p},lookup_addr(c){return ui.address_map.names[c]?ui.address_map.names[c]:null}},Su=c=>{var u=Hn(c);return Mc(ui.lookup_name(u))},Eu=(c,u,p)=>ne.copyWithin(c,u,u+p),ua=(c,u)=>{var p=Et[c];return p===void 0&&Ee(`${u} has unknown type ${xc(c)}`),p},Sc=(c,u,p)=>{var v=[],S=c.toWireType(v,p);return v.length&&(ue[u>>2]=Ft.toHandle(v)),S},Tu=(c,u,p)=>(c=Ft.toValue(c),u=ua(u,"emval::as"),Sc(u,p,c)),bu={},da=c=>{var u=bu[c];return u===void 0?Qe(c):u},fa=[],wu=(c,u,p,v,S)=>(c=fa[c],u=Ft.toValue(u),p=da(p),c(u,u[p],v,S)),Ec=()=>typeof globalThis=="object"?globalThis:function(){return Function}()("return this")(),Au=c=>c===0?Ft.toHandle(Ec()):(c=da(c),Ft.toHandle(Ec()[c])),Ru=c=>{var u=fa.length;return fa.push(c),u},Cu=(c,u)=>{for(var p=new Array(c),v=0;v<c;++v)p[v]=ua(ue[u+v*4>>2],"parameter "+v);return p},Pu=(c,u,p)=>{var v=Cu(c,u),S=v.shift();c--;var C=`return function (obj, func, destructorsRef, args) {
`,I=0,U=[];p===0&&U.push("obj");for(var j=["retType"],se=[S],me=0;me<c;++me)U.push("arg"+me),j.push("argType"+me),se.push(v[me]),C+=`  var arg${me} = argType${me}.readValueFromPointer(args${I?"+"+I:""});
`,I+=v[me].argPackAdvance;var be=p===1?"new func":"func.call";C+=`  var rv = ${be}(${U.join(", ")});
`,S.isVoid||(j.push("emval_returnValue"),se.push(Sc),C+=`  return emval_returnValue(retType, destructorsRef, rv);
`),C+=`};
`,j.push(C);var Te=mc(Function,j)(...se),De=`methodCaller<(${v.map(Ye=>Ye.name).join(", ")}) => ${S.name}>`;return Ru(os(De,Te))},Lu=(c,u)=>(c=Ft.toValue(c),u=Ft.toValue(u),Ft.toHandle(c[u])),Du=c=>{c>9&&(mn[c+1]+=1)},Iu=()=>Ft.toHandle([]),Nu=c=>Ft.toHandle(da(c)),Uu=()=>Ft.toHandle({}),Fu=c=>{var u=Ft.toValue(c);fc(u),sn(c)},Ou=(c,u,p)=>{c=Ft.toValue(c),u=Ft.toValue(u),p=Ft.toValue(p),c[u]=p},Bu=(c,u)=>{c=ua(c,"_emval_take_value");var p=c.readValueFromPointer(u);return Ft.toHandle(p)},Cr=c=>c%4===0&&(c%100!==0||c%400===0),zu=[0,31,60,91,121,152,182,213,244,274,305,335],ku=[0,31,59,90,120,151,181,212,243,273,304,334],Hu=c=>{var u=Cr(c.getFullYear()),p=u?zu:ku,v=p[c.getMonth()]+c.getDate()-1;return v},pa=(c,u)=>u+2097152>>>0<4194305-!!c?(c>>>0)+u*4294967296:NaN;function Gu(c,u,p){var v=pa(c,u),S=new Date(v*1e3);k[p>>2]=S.getSeconds(),k[p+4>>2]=S.getMinutes(),k[p+8>>2]=S.getHours(),k[p+12>>2]=S.getDate(),k[p+16>>2]=S.getMonth(),k[p+20>>2]=S.getFullYear()-1900,k[p+24>>2]=S.getDay();var C=Hu(S)|0;k[p+28>>2]=C,k[p+36>>2]=-(S.getTimezoneOffset()*60);var I=new Date(S.getFullYear(),0,1),U=new Date(S.getFullYear(),6,1).getTimezoneOffset(),j=I.getTimezoneOffset(),se=(U!=j&&S.getTimezoneOffset()==Math.min(j,U))|0;k[p+32>>2]=se}function Vu(c,u,p,v,S,C,I){var U=pa(C,I);try{var j=dt.getStreamFromFD(S);p&2&&dt.doMsync(c,j,u,v,U)}catch(se){if(typeof M>"u"||se.name!=="ErrnoError")throw se;return-se.errno}}var Wu=(c,u,p,v)=>{var S=new Date().getFullYear(),C=new Date(S,0,1),I=new Date(S,6,1),U=C.getTimezoneOffset(),j=I.getTimezoneOffset(),se=Math.max(U,j);ue[c>>2]=se*60,k[u>>2]=+(U!=j);var me=De=>De.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1],be=me(C),Te=me(I);j<U?(Gi(be,p,17),Gi(Te,v,17)):(Gi(be,v,17),Gi(Te,p,17))},Xu=()=>{xt("")},ju=()=>Date.now();function qu(){return new Error().stack.toString()}var Vi=c=>{Vi.shown||(Vi.shown={}),Vi.shown[c]||(Vi.shown[c]=1,_&&(c="warning: "+c),ce(c))};function Yu(c){var u=qu(),p=u.lastIndexOf("_emscripten_log"),v=u.lastIndexOf("_emscripten_get_callstack"),S=u.indexOf(`
`,Math.max(p,v))+1;u=u.slice(S),c&8&&typeof emscripten_source_map>"u"&&(Vi('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),c^=8,c|=16);var C=u.split(`
`);u="";var I=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),U=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),j=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var se in C){var me=C[se],be="",Te="",De=0,Ye=0,yt=j.exec(me);if(yt&&yt.length==5)be=yt[1],Te=yt[2],De=yt[3],Ye=yt[4];else if(yt=I.exec(me),yt||(yt=U.exec(me)),yt&&yt.length>=4)be=yt[1],Te=yt[2],De=yt[3],Ye=yt[4]|0;else{u+=me+`
`;continue}var Qt=!1;if(c&8){var Ct=emscripten_source_map.originalPositionFor({line:De,column:Ye});Qt=Ct==null?void 0:Ct.source,Qt&&(c&64&&(Ct.source=Ct.source.substring(Ct.source.replace(/\\/g,"/").lastIndexOf("/")+1)),u+=`    at ${be} (${Ct.source}:${Ct.line}:${Ct.column})
`)}(c&16||!Qt)&&(c&64&&(Te=Te.substring(Te.replace(/\\/g,"/").lastIndexOf("/")+1)),u+=(Qt?`     = ${be}`:`    at ${be}`)+` (${Te}:${De}:${Ye})
`)}return u=u.replace(/\s+$/,""),u}function Ku(c,u,p){var v=Yu(c);if(!u||p<=0)return re(v)+1;var S=Gi(v,u,p);return S+1}var Tc=()=>2147483648,$u=()=>Tc(),Zu=c=>{var u=R.buffer,p=(c-u.byteLength+65535)/65536;try{return R.grow(p),ut(),1}catch{}},Ju=c=>{var u=ne.length;c>>>=0;var p=Tc();if(c>p)return!1;for(var v=(j,se)=>j+(se-j%se)%se,S=1;S<=4;S*=2){var C=u*(1+.2/S);C=Math.min(C,c+100663296);var I=Math.min(p,v(Math.max(c,C),65536)),U=Zu(I);if(U)return!0}return!1},ma={},Qu=()=>E||"./this.program",Pr=()=>{if(!Pr.strings){var c=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:c,_:Qu()};for(var p in ma)ma[p]===void 0?delete u[p]:u[p]=ma[p];var v=[];for(var p in u)v.push(`${p}=${u[p]}`);Pr.strings=v}return Pr.strings},ed=(c,u)=>{for(var p=0;p<c.length;++p)Q[u++]=c.charCodeAt(p);Q[u]=0},td=(c,u)=>{var p=0;return Pr().forEach((v,S)=>{var C=u+p;ue[c+S*4>>2]=C,ed(v,C),p+=v.length+1}),0},nd=(c,u)=>{var p=Pr();ue[c>>2]=p.length;var v=0;return p.forEach(S=>v+=S.length+1),ue[u>>2]=v,0},id=0,rd=()=>qe||id>0,sd=c=>{var u;rd()||((u=o.onExit)==null||u.call(o,c),J=!0),g(c,new Ce(c))},ad=(c,u)=>{sd(c)},od=ad;function cd(c){try{var u=dt.getStreamFromFD(c);return M.close(u),0}catch(p){if(typeof M>"u"||p.name!=="ErrnoError")throw p;return p.errno}}var ld=(c,u,p,v)=>{for(var S=0,C=0;C<p;C++){var I=ue[u>>2],U=ue[u+4>>2];u+=8;var j=M.read(c,Q,I,U,v);if(j<0)return-1;if(S+=j,j<U)break}return S};function hd(c,u,p,v){try{var S=dt.getStreamFromFD(c),C=ld(S,u,p);return ue[v>>2]=C,0}catch(I){if(typeof M>"u"||I.name!=="ErrnoError")throw I;return I.errno}}function ud(c,u,p,v,S){var C=pa(u,p);try{if(isNaN(C))return 61;var I=dt.getStreamFromFD(c);return M.llseek(I,C,v),ae=[I.position>>>0,(Se=I.position,+Math.abs(Se)>=1?Se>0?+Math.floor(Se/4294967296)>>>0:~~+Math.ceil((Se-+(~~Se>>>0))/4294967296)>>>0:0)],k[S>>2]=ae[0],k[S+4>>2]=ae[1],I.getdents&&C===0&&v===0&&(I.getdents=null),0}catch(U){if(typeof M>"u"||U.name!=="ErrnoError")throw U;return U.errno}}var dd=(c,u,p,v)=>{for(var S=0,C=0;C<p;C++){var I=ue[u>>2],U=ue[u+4>>2];u+=8;var j=M.write(c,Q,I,U,v);if(j<0)return-1;S+=j}return S};function fd(c,u,p,v){try{var S=dt.getStreamFromFD(c),C=dd(S,u,p);return ue[v>>2]=C,0}catch(I){if(typeof M>"u"||I.name!=="ErrnoError")throw I;return I.errno}}var pd=(c,u)=>{for(var p=0,v=0;v<=u;p+=c[v++]);return p},bc=[31,29,31,30,31,30,31,31,30,31,30,31],wc=[31,28,31,30,31,30,31,31,30,31,30,31],md=(c,u)=>{for(var p=new Date(c.getTime());u>0;){var v=Cr(p.getFullYear()),S=p.getMonth(),C=(v?bc:wc)[S];if(u>C-p.getDate())u-=C-p.getDate()+1,p.setDate(1),S<11?p.setMonth(S+1):(p.setMonth(0),p.setFullYear(p.getFullYear()+1));else return p.setDate(p.getDate()+u),p}return p},_d=(c,u)=>{Q.set(c,u)},gd=(c,u,p,v)=>{var S=ue[v+40>>2],C={tm_sec:k[v>>2],tm_min:k[v+4>>2],tm_hour:k[v+8>>2],tm_mday:k[v+12>>2],tm_mon:k[v+16>>2],tm_year:k[v+20>>2],tm_wday:k[v+24>>2],tm_yday:k[v+28>>2],tm_isdst:k[v+32>>2],tm_gmtoff:k[v+36>>2],tm_zone:S?Hn(S):""},I=Hn(p),U={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var j in U)I=I.replace(new RegExp(j,"g"),U[j]);var se=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],me=["January","February","March","April","May","June","July","August","September","October","November","December"];function be(he,Be,Xt){for(var Pt=typeof he=="number"?he.toString():he||"";Pt.length<Be;)Pt=Xt[0]+Pt;return Pt}function Te(he,Be){return be(he,Be,"0")}function De(he,Be){function Xt(Rn){return Rn<0?-1:Rn>0?1:0}var Pt;return(Pt=Xt(he.getFullYear()-Be.getFullYear()))===0&&(Pt=Xt(he.getMonth()-Be.getMonth()))===0&&(Pt=Xt(he.getDate()-Be.getDate())),Pt}function Ye(he){switch(he.getDay()){case 0:return new Date(he.getFullYear()-1,11,29);case 1:return he;case 2:return new Date(he.getFullYear(),0,3);case 3:return new Date(he.getFullYear(),0,2);case 4:return new Date(he.getFullYear(),0,1);case 5:return new Date(he.getFullYear()-1,11,31);case 6:return new Date(he.getFullYear()-1,11,30)}}function yt(he){var Be=md(new Date(he.tm_year+1900,0,1),he.tm_yday),Xt=new Date(Be.getFullYear(),0,4),Pt=new Date(Be.getFullYear()+1,0,4),Rn=Ye(Xt),Ht=Ye(Pt);return De(Rn,Be)<=0?De(Ht,Be)<=0?Be.getFullYear()+1:Be.getFullYear():Be.getFullYear()-1}var Qt={"%a":he=>se[he.tm_wday].substring(0,3),"%A":he=>se[he.tm_wday],"%b":he=>me[he.tm_mon].substring(0,3),"%B":he=>me[he.tm_mon],"%C":he=>{var Be=he.tm_year+1900;return Te(Be/100|0,2)},"%d":he=>Te(he.tm_mday,2),"%e":he=>be(he.tm_mday,2," "),"%g":he=>yt(he).toString().substring(2),"%G":yt,"%H":he=>Te(he.tm_hour,2),"%I":he=>{var Be=he.tm_hour;return Be==0?Be=12:Be>12&&(Be-=12),Te(Be,2)},"%j":he=>Te(he.tm_mday+pd(Cr(he.tm_year+1900)?bc:wc,he.tm_mon-1),3),"%m":he=>Te(he.tm_mon+1,2),"%M":he=>Te(he.tm_min,2),"%n":()=>`
`,"%p":he=>he.tm_hour>=0&&he.tm_hour<12?"AM":"PM","%S":he=>Te(he.tm_sec,2),"%t":()=>"	","%u":he=>he.tm_wday||7,"%U":he=>{var Be=he.tm_yday+7-he.tm_wday;return Te(Math.floor(Be/7),2)},"%V":he=>{var Be=Math.floor((he.tm_yday+7-(he.tm_wday+6)%7)/7);if((he.tm_wday+371-he.tm_yday-2)%7<=2&&Be++,Be){if(Be==53){var Pt=(he.tm_wday+371-he.tm_yday)%7;Pt!=4&&(Pt!=3||!Cr(he.tm_year))&&(Be=1)}}else{Be=52;var Xt=(he.tm_wday+7-he.tm_yday-1)%7;(Xt==4||Xt==5&&Cr(he.tm_year%400-1))&&Be++}return Te(Be,2)},"%w":he=>he.tm_wday,"%W":he=>{var Be=he.tm_yday+7-(he.tm_wday+6)%7;return Te(Math.floor(Be/7),2)},"%y":he=>(he.tm_year+1900).toString().substring(2),"%Y":he=>he.tm_year+1900,"%z":he=>{var Be=he.tm_gmtoff,Xt=Be>=0;return Be=Math.abs(Be)/60,Be=Be/60*100+Be%60,(Xt?"+":"-")+("0000"+Be).slice(-4)},"%Z":he=>he.tm_zone,"%%":()=>"%"};I=I.replace(/%%/g,"\0\0");for(var j in Qt)I.includes(j)&&(I=I.replace(new RegExp(j,"g"),Qt[j](C)));I=I.replace(/\0\0/g,"%");var Ct=ye(I,!1);return Ct.length>u?0:(_d(Ct,c),Ct.length-1)},vd=(c,u,p,v,S)=>gd(c,u,p,v);M.createPreloadedFile=rs,M.staticInit(),je(),pt=o.BindingError=class extends Error{constructor(u){super(u),this.name="BindingError"}},Ot=o.InternalError=class extends Error{constructor(u){super(u),this.name="InternalError"}},la(),vc=o.UnboundTypeError=iu(Error,"UnboundTypeError");var xd={O:as,P:ca,i:w,K:H,R:q,H:Y,I:G,k:pe,D:Me,J:Le,E:Ne,x:We,W:It,V:Wh,o:jh,f:au,b:cu,a:lu,n:hu,j:gu,X:vu,L:yu,y:Su,N:Eu,e:Tu,r:wu,U:sn,w:Au,q:Pu,l:Lu,Z:Du,Y:Iu,s:Nu,_:Uu,p:Fu,c:Ou,d:Bu,u:Gu,t:Vu,B:Wu,g:Xu,M:ju,S:Ku,C:$u,A:Ju,F:td,G:nd,T:od,h:cd,Q:hd,v:ud,m:fd,z:vd},Jt=Re(),Ac=c=>(Ac=Jt.ba)(c),_a=c=>(_a=Jt.da)(c),qn=c=>(qn=Jt.ea)(c),Rc=c=>(Rc=Jt.fa)(c),Cc=(c,u)=>(Cc=Jt.ga)(c,u),Pc=()=>(Pc=Jt.ha)();o.dynCall_viijii=(c,u,p,v,S,C,I)=>(o.dynCall_viijii=Jt.ia)(c,u,p,v,S,C,I),o.dynCall_viiiiji=(c,u,p,v,S,C,I,U)=>(o.dynCall_viiiiji=Jt.ja)(c,u,p,v,S,C,I,U),o.dynCall_jiji=(c,u,p,v,S)=>(o.dynCall_jiji=Jt.ka)(c,u,p,v,S),o.dynCall_iiiiij=(c,u,p,v,S,C,I)=>(o.dynCall_iiiiij=Jt.la)(c,u,p,v,S,C,I),o.dynCall_iiiiijj=(c,u,p,v,S,C,I,U,j)=>(o.dynCall_iiiiijj=Jt.ma)(c,u,p,v,S,C,I,U,j),o.dynCall_iiiiiijj=(c,u,p,v,S,C,I,U,j,se)=>(o.dynCall_iiiiiijj=Jt.na)(c,u,p,v,S,C,I,U,j,se),o.___start_em_js=2617344,o.___stop_em_js=2617640;var hs;kt=function c(){hs||Lc(),hs||(kt=c)};function Lc(){if(F>0||(Ae(),F>0))return;function c(){hs||(hs=!0,o.calledRun=!0,!J&&(Ze(),l(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),Xe()))}o.setStatus?(o.setStatus("Running..."),setTimeout(function(){setTimeout(function(){o.setStatus("")},1),c()},1)):c()}if(o.preInit)for(typeof o.preInit=="function"&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return Lc(),a=d,a}})();r.exports=t})(Nx);const rh=document.querySelector("#container"),qt=new L0,xi=new X0(qt);Ox();function Ox(){qt.camera=new un(35,window.innerWidth/window.innerHeight,.1,1e3),qt.camera.position.set(3,.25,3),qt.scene.background=new He(.2,.3,.3);const r=new en(new es(8,8),new $v({color:13355979,specular:1052688}));r.rotation.x=-Math.PI/2,r.position.y=.03,r.receiveShadow=!0;const e=new g0(8947848,1*Math.PI);qt.scene.add(e),qt.highlightgeometry=new tn,qt.highlightpart=new en(qt.highlightgeometry,new Zv({color:16776960})),qt.scene.add(qt.highlightpart),qt.renderer=new kv({antialias:!0,stencil:!0}),qt.renderer.setPixelRatio(window.devicePixelRatio),qt.renderer.setSize(window.innerWidth,window.innerHeight),qt.renderer.setAnimationLoop(()=>xi.draw()),qt.renderer.shadowMap.enabled=!0,rh.appendChild(qt.renderer.domElement),rh.addEventListener("pointermove",_=>xi.onPointerMove(_)),xi.setupControl(),window.addEventListener("resize",()=>xi.onWindowResize());const t="data/toyota-1uz-1.glb",l=["data/Fanuc_M-900iB360.glb","data/MA-ST3.glb",t,"data/tractor.glb","data/turbofan-jet-engine-6.glb"];ih(qt,xi,t),document.addEventListener("keydown",_=>{const y=_.key;y==="s"&&(console.log(y,_),xi.screenShot())});const h=document.getElementById("fileicon"),d=document.getElementById("fileInput"),f=document.getElementById("screenshot");h.addEventListener("click",function(){d.click()}),d.addEventListener("change",function(_){console.log("file",_.target.files)}),f.addEventListener("click",function(){console.log("sss"),xi.screenShot()}),document.querySelectorAll(".model-image").forEach(function(_){_.addEventListener("click",function(){const y=_.getAttribute("data-id");console.log("Image ID: "+y),ih(qt,xi,l[y])})})}
