(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[391],{18453:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>F});var n=r(88435),a=r.n(n),i=r(25182),s=r(78716),c=r(81570),o=r(77193),u=r(25767),f=r(43070),h=r(31060),d=r(134),x=r(36443),p=r.n(x),l=r(50932),b=r(4624),m=r(9705),k=r(85947),g=r(14686),R=r(37837),B=r(71517),I=r(91375),v=r(37246),y=r(92647),z=r(77231),P=r(52071),S=r(72739),U=r(44328);function A(e,t,r){return t=(0,u.A)(t),(0,o.A)(e,L()?a()(t,r||[],(0,u.A)(e).constructor):t.apply(e,r))}function L(){try{var e=!Boolean.prototype.valueOf.call(a()(Boolean,[],(function(){})))}catch(e){}return(L=function(){return!!e})()}var M="src/avformat/formats/IFlacFormat.ts",w=1024,F=function(e){function t(){var e;return(0,s.A)(this,t),e=A(this,t),(0,d.A)((0,f.A)(e),"type",15),(0,d.A)((0,f.A)(e),"context",void 0),e}var r,n,a,o,u;return(0,h.A)(t,e),(0,c.A)(t,[{key:"init",value:function(e){e.ioReader.setEndian(!0),this.context={streamInfo:{minimumBlockSize:0,maximumBlockSize:0,minimumFrameSize:0,maximumFrameSize:0,sampleRate:0,channels:0,bitPerSample:0,samples:BigInt(0),md5:""},frameInfo:{sampleRate:0,channels:0,bps:0,blocksize:0,chMode:0,frameOrSampleNum:BigInt(0),isVarSize:0},seekPoints:[],cueSheet:{catalogNumber:"",leadInSamples:BigInt(0),compactDisc:!1,tracks:[]},picture:{type:0,mimeType:"",description:"",width:0,height:0,colorDepth:0,indexedColor:0,data:null},cacheBuffer:null,cachePos:BigInt(0),bitReader:new v.A(16),fileSize:BigInt(0),firstFramePos:BigInt(0),isVarSize:-1}}},{key:"readHeader",value:(u=(0,i.A)(p().mark((function e(t){var r,n,a,i,s,c,o,u,f,h,d,x,l,k,B,I,v,y,z,P,S,U,A,L,w,F,N,D,V;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.ioReader.readString(4);case 2:if("fLaC"===e.sent){e.next=6;break}return b.z3("the file format is not flac",M,116),e.abrupt("return",m.LR);case 6:return e.next=8,t.ioReader.fileSize();case 8:this.context.fileSize=e.sent,(r=t.createStream()).codecpar.codecType=1,r.codecpar.codecId=86028;case 12:return e.next=15,t.ioReader.readUint8();case 15:return n=e.sent,e.next=18,t.ioReader.readUint24();case 18:if(a=e.sent,0!=(i=-129&n)){e.next=68;break}return r.codecpar.extradata=(0,R.sY)(a),r.codecpar.extradataSize=a,e.t0=g.lW,e.t1=r.codecpar.extradata,e.t2=a,e.next=28,t.ioReader.peekBuffer(a);case 28:return e.t3=e.sent,(0,e.t0)(e.t1,e.t2,e.t3),e.next=32,t.ioReader.readUint16();case 32:return this.context.streamInfo.minimumBlockSize=e.sent,e.next=35,t.ioReader.readUint16();case 35:return this.context.streamInfo.maximumBlockSize=e.sent,e.next=38,t.ioReader.readUint24();case 38:return this.context.streamInfo.minimumFrameSize=e.sent,e.next=41,t.ioReader.readUint24();case 41:return this.context.streamInfo.maximumFrameSize=e.sent,e.next=44,t.ioReader.readUint24();case 44:return s=e.sent,r.codecpar.sampleRate=s>>4,r.codecpar.chLayout.nbChannels=1+((15&s)>>>1),this.context.streamInfo.sampleRate=r.codecpar.sampleRate,this.context.streamInfo.channels=r.codecpar.chLayout.nbChannels,e.next=51,t.ioReader.readUint8();case 51:return c=e.sent,r.codecpar.bitsPerRawSample=1+((1&s)<<4|(240&c)>>>4),this.context.streamInfo.bitPerSample=r.codecpar.bitsPerRawSample,e.next=56,t.ioReader.readUint32();case 56:return o=e.sent,u=BigInt(Math.floor(15&c))<<BigInt(32)|BigInt(Math.floor(o)),this.context.streamInfo.samples=u,r.timeBase.den=r.codecpar.sampleRate,r.timeBase.num=1,r.duration=u,r.startTime=BigInt(0),e.next=65,t.ioReader.readString(16);case 65:this.context.streamInfo.md5=e.sent,e.next=224;break;case 68:if(2!==i){e.next=80;break}return(f=t.createStream()).codecpar.codecType=2,e.next=73,t.ioReader.readUint32();case 73:return f.codecpar.codecTag=e.sent,f.codecpar.extradata=(0,R.sY)(a-4),f.codecpar.extradataSize=a-4,e.next=78,t.ioReader.readBuffer(a-4,(0,g.JW)(f.codecpar.extradata,f.codecpar.extradataSize));case 78:e.next=224;break;case 80:if(3!==i){e.next=98;break}h=0;case 82:if(!(h<a/18)){e.next=96;break}return e.next=85,t.ioReader.readUint64();case 85:return d=e.sent,e.next=88,t.ioReader.readUint64();case 88:return x=e.sent,e.next=91,t.ioReader.readUint16();case 91:l=e.sent,this.context.seekPoints.push({pts:d,pos:x,samples:l});case 93:h++,e.next=82;break;case 96:e.next=224;break;case 98:if(4!==i){e.next=128;break}return t.ioReader.setEndian(!1),e.next=102,t.ioReader.readUint32();case 102:return k=e.sent,e.next=105,t.ioReader.readString(k);case 105:return B=e.sent,e.next=108,t.ioReader.readUint32();case 108:I=e.sent,v=[],y=0;case 111:if(!(y<I)){e.next=123;break}return e.next=114,t.ioReader.readUint32();case 114:return z=e.sent,e.t4=v,e.next=118,t.ioReader.readString(z);case 118:e.t5=e.sent,e.t4.push.call(e.t4,e.t5);case 120:y++,e.next=111;break;case 123:r.metadata.vendor=B,r.metadata.comments=v,t.ioReader.setEndian(!0),e.next=224;break;case 128:if(5!==i){e.next=186;break}return e.next=131,t.ioReader.readString(128);case 131:return this.context.cueSheet.catalogNumber=e.sent,e.next=134,t.ioReader.readUint64();case 134:return this.context.cueSheet.leadInSamples=e.sent,e.next=137,t.ioReader.readUint8();case 137:return e.t6=e.sent,this.context.cueSheet.compactDisc=!!(e.t6>>>7),e.next=141,t.ioReader.skip(258);case 141:return e.next=143,t.ioReader.readUint8();case 143:P=e.sent,S=0;case 145:if(!(S<P)){e.next=184;break}return e.next=148,t.ioReader.readUint64();case 148:return U=e.sent,e.next=151,t.ioReader.readUint8();case 151:return A=e.sent,e.next=154,t.ioReader.readBuffer(12);case 154:return L=e.sent,e.next=157,t.ioReader.readUint8();case 157:return w=e.sent,e.next=160,t.ioReader.skip(13);case 160:return e.next=162,t.ioReader.readUint8();case 162:F=e.sent,N=[],D=0;case 165:if(!(D<F)){e.next=180;break}return e.t7=N,e.next=169,t.ioReader.readUint64();case 169:return e.t8=e.sent,e.next=172,t.ioReader.readUint8();case 172:return e.t9=e.sent,e.t10={offset:e.t8,point:e.t9},e.t7.push.call(e.t7,e.t10),e.next=177,t.ioReader.skip(3);case 177:D++,e.next=165;break;case 180:this.context.cueSheet.tracks.push({offset:U,number:A,isrc:L,type:w>>>7,preEmphasisFlag:w>>>6&1,points:N});case 181:S++,e.next=145;break;case 184:e.next=224;break;case 186:if(6!==i){e.next=222;break}return e.next=189,t.ioReader.readUint32();case 189:return this.context.picture.type=e.sent,e.next=192,t.ioReader.readUint32();case 192:return V=e.sent,e.next=195,t.ioReader.readString(V);case 195:return this.context.picture.mimeType=e.sent,e.next=198,t.ioReader.readUint32();case 198:return V=e.sent,e.next=201,t.ioReader.readString(V);case 201:return this.context.picture.description=e.sent,e.next=204,t.ioReader.readUint32();case 204:return this.context.picture.width=e.sent,e.next=207,t.ioReader.readUint32();case 207:return this.context.picture.height=e.sent,e.next=210,t.ioReader.readUint32();case 210:return this.context.picture.colorDepth=e.sent,e.next=213,t.ioReader.readUint32();case 213:return this.context.picture.indexedColor=e.sent,e.next=216,t.ioReader.readUint32();case 216:return V=e.sent,e.next=219,t.ioReader.readBuffer(V);case 219:this.context.picture.data=e.sent,e.next=224;break;case 222:return e.next=224,t.ioReader.skip(a);case 224:if(!(128&n)){e.next=226;break}return e.abrupt("break",228);case 226:e.next=12;break;case 228:return this.context.firstFramePos=t.ioReader.getPos(),r.privData=this.context,e.abrupt("return",0);case 231:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"getNextFrame",value:(o=(0,i.A)(p().mark((function e(t){var r,n,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[];case 1:if(t.ioReader.getPos()!==this.context.fileSize){e.next=5;break}return this.context.cacheBuffer&&(r.push(this.context.cacheBuffer),this.context.cacheBuffer=null),e.abrupt("break",53);case 5:if(this.context.cacheBuffer){e.next=12;break}return this.context.cachePos=t.ioReader.getPos(),e.next=9,t.ioReader.readBuffer(Math.min(w,Number(BigInt.asIntN(32,this.context.fileSize-t.ioReader.getPos()))));case 9:this.context.cacheBuffer=e.sent,e.next=21;break;case 12:if(!(this.context.cacheBuffer.length<17)){e.next=21;break}return e.t0=y.A,e.t1=Uint8Array,e.t2=this.context.cacheBuffer,e.next=18,t.ioReader.readBuffer(Math.min(w,Number(BigInt.asIntN(32,this.context.fileSize-t.ioReader.getPos()))));case 18:e.t3=e.sent,e.t4=[e.t2,e.t3],this.context.cacheBuffer=(0,e.t0)(e.t1,e.t4);case 21:n=r.length?0:2,a=this.context.isVarSize<0?[248,249]:this.context.isVarSize?[249]:[248];case 23:if(!(n<this.context.cacheBuffer.length-2)){e.next=30;break}if(255!==this.context.cacheBuffer[n]||!S.zy(a,this.context.cacheBuffer[n+1])){e.next=27;break}return n&&(r.push(this.context.cacheBuffer.subarray(0,n)),this.context.cacheBuffer=this.context.cacheBuffer.subarray(n),this.context.cachePos+=BigInt(Math.floor(n))),e.abrupt("break",30);case 27:n++,e.next=23;break;case 30:if(n!==this.context.cacheBuffer.length-2){e.next=33;break}return t.ioReader.getPos()===this.context.fileSize?(r.push(this.context.cacheBuffer),this.context.cachePos+=BigInt(Math.floor(this.context.cacheBuffer.length)),this.context.cacheBuffer=null):(r.push(this.context.cacheBuffer.subarray(0,n)),this.context.cachePos+=BigInt(Math.floor(n)),this.context.cacheBuffer=this.context.cacheBuffer.subarray(n)),e.abrupt("continue",1);case 33:if(!(this.context.cacheBuffer.length<16)){e.next=42;break}return e.t5=y.A,e.t6=Uint8Array,e.t7=this.context.cacheBuffer,e.next=39,t.ioReader.readBuffer(Math.min(w,Number(BigInt.asIntN(32,this.context.fileSize-t.ioReader.getPos()))));case 39:e.t8=e.sent,e.t9=[e.t7,e.t8],this.context.cacheBuffer=(0,e.t5)(e.t6,e.t9);case 42:if(this.context.bitReader.clear(),this.context.bitReader.appendBuffer(this.context.cacheBuffer.subarray(0,16)),!((0,I.x)(this.context.bitReader,{},!0)<0)){e.next=50;break}r.push(this.context.cacheBuffer.subarray(0,2)),this.context.cachePos+=BigInt(2),this.context.cacheBuffer=this.context.cacheBuffer.subarray(2),e.next=51;break;case 50:return e.abrupt("break",53);case 51:e.next=1;break;case 53:if(1!==r.length){e.next=55;break}return e.abrupt("return",r[0]);case 55:return e.abrupt("return",(0,y.A)(Uint8Array,r));case 56:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"readAVPacket",value:(a=(0,i.A)(p().mark((function e(t,r){var n,a,i,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.streams.find((function(e){return e.codecpar.codecType=1})),e.prev=1,(a=t.ioReader.getPos())!==this.context.fileSize){e.next=5;break}return e.abrupt("return",-1048576);case 5:if(this.context.bitReader.clear(),!this.context.cacheBuffer){e.next=20;break}if(a=this.context.cachePos,!(this.context.cacheBuffer.length<16)){e.next=17;break}return e.t0=y.A,e.t1=Uint8Array,e.t2=this.context.cacheBuffer,e.next=14,t.ioReader.readBuffer(Math.min(w,Number(BigInt.asIntN(32,this.context.fileSize-t.ioReader.getPos()))));case 14:e.t3=e.sent,e.t4=[e.t2,e.t3],this.context.cacheBuffer=(0,e.t0)(e.t1,e.t4);case 17:this.context.bitReader.appendBuffer(this.context.cacheBuffer.subarray(0,16)),e.next=25;break;case 20:return e.t5=this.context.bitReader,e.next=23,t.ioReader.peekBuffer(16);case 23:e.t6=e.sent,e.t5.appendBuffer.call(e.t5,e.t6);case 25:if(!((0,I.x)(this.context.bitReader,this.context.frameInfo)<0)){e.next=27;break}return e.abrupt("return",m.LR);case 27:return e.next=29,this.getNextFrame(t);case 29:return i=e.sent,s=(0,R.sY)(i.length),(0,g.lW)(s,i.length,i),(0,B.NX)(r,s,i.length),l.M[17](r+56,a),l.M[15](r+32,n.index),l.M[15](r+76,n.timeBase.den),l.M[15](r+72,n.timeBase.num),l.M[17](r+16,this.context.frameInfo.isVarSize?this.context.frameInfo.frameOrSampleNum:this.context.frameInfo.frameOrSampleNum*BigInt(0|this.context.frameInfo.blocksize)),l.M[17](r+8,this.context.frameInfo.isVarSize?this.context.frameInfo.frameOrSampleNum:this.context.frameInfo.frameOrSampleNum*BigInt(0|this.context.frameInfo.blocksize)),this.context.isVarSize<0&&(this.context.isVarSize=this.context.frameInfo.isVarSize),e.abrupt("return",0);case 42:if(e.prev=42,e.t7=e.catch(1),-1048576===t.ioReader.error){e.next=47;break}return b.z3("read packet error, ".concat(e.t7),M,405),e.abrupt("return",m.LR);case 47:return e.abrupt("return",t.ioReader.error);case 48:case"end":return e.stop()}}),e,this,[[1,42]])}))),function(e,t){return a.apply(this,arguments)})},{key:"syncFrame",value:(n=(0,i.A)(p().mark((function e(t){var r,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=z.Dh;case 1:return e.prev=2,e.next=5,t.ioReader.peekUint16();case 5:if(65529!==(n=e.sent)&&65528!==n){e.next=16;break}return r=t.ioReader.getPos(),this.context.bitReader.clear(),e.t0=this.context.bitReader,e.next=12,t.ioReader.peekBuffer(16);case 12:if(e.t1=e.sent,e.t0.appendBuffer.call(e.t0,e.t1),(0,I.x)(this.context.bitReader,{},!0)){e.next=16;break}return e.abrupt("break",25);case 16:return e.next=18,t.ioReader.skip(1);case 18:e.next=23;break;case 20:return e.prev=20,e.t2=e.catch(2),e.abrupt("break",25);case 23:e.next=1;break;case 25:if(r===z.Dh){e.next=28;break}return e.next=28,t.ioReader.seek(r);case 28:case"end":return e.stop()}}),e,this,[[2,20]])}))),function(e){return n.apply(this,arguments)})},{key:"seek",value:(r=(0,i.A)(p().mark((function e(t,r,n,a){var i,s,c,o,u,f,h;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.ioReader.getPos(),s=r.privData,!(2&a)){e.next=15;break}return e.next=5,t.ioReader.fileSize();case 5:if(!((c=e.sent)<=BigInt(0))){e.next=8;break}return e.abrupt("return",BigInt(m.E$));case 8:return n<BigInt(0)?n=BigInt(0):n>c&&(n=c),e.next=11,t.ioReader.seek(n);case 11:if(4&a){e.next=14;break}return e.next=14,this.syncFrame(t);case 14:return e.abrupt("return",i);case 15:if(!r||!r.sampleIndexes.length){e.next=23;break}if(!((o=S.El(r.sampleIndexes,(function(e){return e.pts>n?-1:1})))>0&&(0,U.k)(n-r.sampleIndexes[o-1].pts,r.timeBase,z.i0)<BigInt(5e3))){e.next=23;break}return b.Yz("seek in sampleIndexes, found index: ".concat(o,", pts: ").concat(r.sampleIndexes[o-1].pts,", pos: ").concat(r.sampleIndexes[o-1].pos),M,473),e.next=21,t.ioReader.seek(r.sampleIndexes[o-1].pos);case 21:return s.cacheBuffer=null,e.abrupt("return",i);case 23:if(!s.seekPoints.length){e.next=36;break}u=0;case 25:if(!(u<s.seekPoints.length)){e.next=36;break}if(!((f=s.seekPoints[u]).pts>=n)){e.next=33;break}return b.Yz("seek in seekPoints, found index: ".concat(u,", pts: ").concat(f.pts,", pos: ").concat(f.pos+s.firstFramePos),M,484),e.next=31,t.ioReader.seek(f.pos+s.firstFramePos);case 31:return s.cacheBuffer=null,e.abrupt("return",i);case 33:u++,e.next=25;break;case 36:return b.Yz("not found any keyframe index, try to seek in bytes",M,492),e.next=39,(0,P.A)(t,r,n,s.firstFramePos,this.readAVPacket.bind(this),this.syncFrame.bind(this));case 39:return(h=e.sent)>0&&(s.cacheBuffer=null),e.abrupt("return",h);case 42:case"end":return e.stop()}}),e,this)}))),function(e,t,n,a){return r.apply(this,arguments)})},{key:"getAnalyzeStreamsCount",value:function(){return 1}}]),t}(k.A)},85947:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(78716),a=r(81570),i=r(134),s=function(){function e(){(0,n.A)(this,e),(0,i.A)(this,"type",-1),(0,i.A)(this,"onStreamAdd",void 0)}return(0,a.A)(e,[{key:"destroy",value:function(e){}}]),e}()},42774:(e,t,r)=>{"use strict";r.d(t,{DK:()=>i,Xr:()=>s,jA:()=>n,oe:()=>a});var n=8,a=[0,8,12,0,16,20,24,32],i=[0,88200,176400,192e3,8e3,16e3,22050,24e3,32e3,44100,48e3,96e3,0,0,0,0],s=[0,192,576,1152,2304,4608,0,0,256,512,1024,2048,4096,8192,16384,32768]},91375:(e,t,r)=>{"use strict";r.d(t,{x:()=>o});var n=r(9705),a=r(4624),i=r(42774),s=r(72224),c="src/avformat/formats/flac/iflac.ts";function o(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e.getPos();if(32764!=(32767&e.readU(15)))return!r&&a.z3("invalid sync code",c,57),n.LR;t.isVarSize=e.readU1();var u=e.readU(4),f=e.readU(4);if(t.chMode=e.readU(4),t.chMode<i.jA)t.channels=t.chMode+1,t.chMode=0;else{if(!(t.chMode<i.jA+3))return!r&&a.z3("invalid channel mode: ".concat(t.chMode),c,76),n.LR;t.channels=2,t.chMode-=i.jA-1}var h=e.readU(3);if(3===h)return!r&&a.z3("invalid sample size code: ".concat(h),c,82),n.LR;if(t.bps=i.oe[h],e.readU1())return!r&&a.z3("broken stream, invalid padding",c,88),n.LR;if(t.frameOrSampleNum=function(e){var t=BigInt(Math.floor(e.readU(8))),r=(t&BigInt(128))>>BigInt(1);if((t&BigInt(192))===BigInt(128)||t>=BigInt(254))return-BigInt(1);for(;t&r;){var n=BigInt(Math.floor(e.readU(8)))-BigInt(128);if(n>>BigInt(6))return-BigInt(1);t=(t<<BigInt(6))+n,r<<=BigInt(5)}return t&(r<<BigInt(1))-BigInt(1)}(e),t.frameOrSampleNum<0)return!r&&a.z3("sample/frame number invalid",c,95),n.LR;if(0===u)return!r&&a.z3("reserved blocksize code: 0",c,100),n.LR;if(t.blocksize=6===u?e.readU(8)+1:7===u?e.readU(16)+1:i.Xr[u],f<12)t.sampleRate=i.DK[f];else if(12===f)t.sampleRate=1e3*e.readU(8);else if(13===f)t.sampleRate=e.readU(16);else{if(14!==f)return!r&&a.z3("illegal sample rate code ".concat(f),c,126),n.LR;t.sampleRate=10*e.readU(16)}return(0,s.A)(e.getBuffer().subarray(o,e.getPos()))!==e.readU(8)?(!r&&a.z3("header crc mismatch",c,133),n.LR):0}},2187:(e,t,r)=>{"use strict";r.d(t,{d:()=>s});var n=r(72739),a=r(44328),i=r(77231);function s(e,t,r){var s=BigInt(0);return n.__(e,(function(e){s+=e.codecpar.bitrate*(0,a.k)(t,r,i.i0)/BigInt(8e3)})),s}},52071:(e,t,r)=>{"use strict";r.d(t,{A:()=>b});var n=r(25182),a=r(36443),i=r.n(a),s=r(63939),c=r(9599),o=r(29170),u=r(77231),f=r(44328),h=r(2187),d=r(71517),x=r(9705),p=r(4624),l="src/avformat/function/seekInBytes.ts";function b(e,t,r,n,a,i){return m.apply(this,arguments)}function m(){return(m=(0,n.A)(i().mark((function e(t,r,n,a,b,m){var k,g,R,B,I,v,y,z,P,S,U,A,L,M;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k=t.ioReader.getPos(),e.next=3,t.ioReader.fileSize();case 3:if(g=e.sent,R=u.Dh,B=n,r.startTime!==u.Dh?B-=r.startTime:B-=r.firstDTS,!((I=(0,f.k)(n,r.timeBase,u.i0))<BigInt(1e4))){e.next=13;break}return p.Yz("seek pts is earlier then 10s, seek to first packet pos(".concat(a,") directly"),l,63),e.next=12,t.ioReader.seek(a);case 12:return e.abrupt("return",k);case 13:if(v=(0,h.d)(t.streams,B,r.timeBase),y=g-(0,h.d)(t.streams,BigInt(5e3),u.i0),z=(0,h.d)(t.streams,BigInt(1e4),u.i0),v>y&&(v=y),!(v<a)){e.next=21;break}return e.next=20,t.ioReader.seek(a);case 20:return e.abrupt("return",k);case 21:P=(0,d._5)(),S=g,U=BigInt(0);case 24:if(!(S-U<z)){e.next=28;break}return R=U,e.abrupt("break",51);case 28:return e.next=30,t.ioReader.seek(v);case 30:return e.next=32,m(t);case 32:return A=t.ioReader.getPos(),e.next=35,b(t,P);case 35:if(!(e.sent>=0)){e.next=48;break}if(L=(0,f.k)(s.f[17](P+8),(0,o.A)(P+72,c.P),u.i0),M=L-I,p.Yz("try to seek to pos: ".concat(v,", got packet pts: ").concat(s.f[17](P+8),"(").concat(L,"ms), diff: ").concat(M,"ms"),l,98),!(M<=BigInt(0)&&-M<BigInt(1e4))){e.next=45;break}return R=A,e.abrupt("break",51);case 45:v=M>BigInt(0)?U+(S=v)>>BigInt(1):(U=v)+S>>BigInt(1);case 46:e.next=49;break;case 48:return e.abrupt("break",51);case 49:e.next=24;break;case 51:if((0,d.Qe)(P),R===u.Dh){e.next=61;break}return p.Yz("finally seek to pos ".concat(R),l,124),e.next=56,t.ioReader.seek(R);case 56:return e.next=58,m(t);case 58:return e.abrupt("return",k);case 61:return e.next=63,t.ioReader.seek(k);case 63:return e.abrupt("return",BigInt(x.E$));case 64:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},72224:(e,t,r)=>{"use strict";function n(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0;r<e.length;r++){t^=e[r];for(var n=0;n<8;n++)128&t?t=t<<1^7:t<<=1}return 255&t}r.d(t,{A:()=>n})},37246:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(78716),a=r(81570),i=r(134),s=r(4624),c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1048576;(0,n.A)(this,e),(0,i.A)(this,"buffer",void 0),(0,i.A)(this,"pointer",void 0),(0,i.A)(this,"bitsLeft",void 0),(0,i.A)(this,"size",void 0),(0,i.A)(this,"endPointer",void 0),(0,i.A)(this,"error",void 0),(0,i.A)(this,"onFlush",void 0),this.pointer=0,this.bitsLeft=8,this.size=t,this.endPointer=0,this.error=0,this.buffer=new Uint8Array(this.size)}return(0,a.A)(e,[{key:"peekU1",value:function(){(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush();var e=this.pointer,t=this.bitsLeft;return 0===t&&(e++,t=8),this.buffer[e]>>t-1&1}},{key:"readU1",value:function(){var e;return(this.remainingLength()<1||1===this.remainingLength()&&0===this.bitsLeft)&&this.flush(),this.bitsLeft--,e=this.buffer[this.pointer]>>this.bitsLeft&1,0===this.bitsLeft&&(this.pointer++,this.bitsLeft=8),e}},{key:"readU",value:function(e){for(var t=0,r=0;r<e;r++)t|=this.readU1()<<e-r-1;return t}},{key:"remainingLength",value:function(){return this.endPointer-this.pointer}},{key:"getBitLeft",value:function(){return this.bitsLeft}},{key:"getPos",value:function(){return this.pointer}},{key:"backToPos",value:function(e){this.pointer=e}},{key:"skip",value:function(e){var t=(e-e%8)/8;this.pointer+=t;var r=e%8;this.bitsLeft<=r?(this.pointer++,this.bitsLeft=8-(r-this.bitsLeft)):this.bitsLeft-=r}},{key:"flush",value:function(){if(!this.onFlush)throw this.error=-1048574,Error("IOReader error, flush failed because of no flush callback");if(0===this.bitsLeft&&this.pointer++,!(this.size-this.remainingLength()<=0))if(this.pointer<this.endPointer){this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0);var e=this.onFlush(this.buffer.subarray(this.endPointer-this.pointer,this.size));if(e<0)throw this.error=e,Error("IOReader error, flush failed");this.endPointer=this.endPointer-this.pointer+e,this.pointer=0}else{var t=this.onFlush(this.buffer);if(this.endPointer=t,this.pointer=0,this.bitsLeft=8,t<0)throw this.error=t,Error("IOReader error, flush failed")}}},{key:"getBuffer",value:function(){return this.buffer}},{key:"appendBuffer",value:function(e){if(this.size-this.endPointer>=e.length)this.buffer.set(e,this.endPointer),this.endPointer+=e.length;else if(this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0),this.endPointer=this.endPointer-this.pointer,this.pointer=0,this.size-this.endPointer>=e.length)this.buffer.set(e,this.endPointer),this.endPointer+=e.length;else{var t=Math.min(this.size-this.endPointer,e.length);this.buffer.set(e.subarray(0,t),this.endPointer),this.endPointer+=t,s.R8("BSReader, call appendBuffer but the buffer's size is lagger then the remaining size","src/common/io/BitReader.ts",198)}}},{key:"clear",value:function(){this.pointer=this.endPointer=0,this.bitsLeft=8,this.error=0}},{key:"skipPadding",value:function(){this.bitsLeft<8&&(this.bitsLeft=8,this.pointer++)}}]),e}()},803:(e,t,r)=>{var n=r(16560),a=r(54220);function i(t){return e.exports=i="function"==typeof n&&"symbol"==typeof a?function(e){return typeof e}:function(e){return e&&"function"==typeof n&&e.constructor===n&&e!==n.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,i(t)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports}}]);