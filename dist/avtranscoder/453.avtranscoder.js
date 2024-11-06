"use strict";(self.webpackChunkAVTranscoder=self.webpackChunkAVTranscoder||[]).push([[453],{18453:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var i=a(134),r=a(50932),n=a(4624),o=a(9705),s=a(85947),c=a(14686),d=a(37837),f=a(71517),h=a(91375),m=a(37246),u=a(92647),l=a(77231),p=a(52071),x=a(72739),R=a(44328),B="src/avformat/formats/IFlacFormat.ts";const g=1024;class I extends s.A{constructor(){super(),(0,i.A)(this,"type",17),(0,i.A)(this,"context",void 0)}init(e){e.ioReader.setEndian(!0),this.context={streamInfo:{minimumBlockSize:0,maximumBlockSize:0,minimumFrameSize:0,maximumFrameSize:0,sampleRate:0,channels:0,bitPerSample:0,samples:BigInt(0),md5:""},frameInfo:{sampleRate:0,channels:0,bps:0,blocksize:0,chMode:0,frameOrSampleNum:BigInt(0),isVarSize:0},seekPoints:[],cueSheet:{catalogNumber:"",leadInSamples:BigInt(0),compactDisc:!1,tracks:[]},picture:{type:0,mimeType:"",description:"",width:0,height:0,colorDepth:0,indexedColor:0,data:null},cacheBuffer:null,cachePos:BigInt(0),bitReader:new m.A(16),fileSize:BigInt(0),firstFramePos:BigInt(0),isVarSize:-1}}async readHeader(e){if("fLaC"!==await e.ioReader.readString(4))return n.z3("the file format is not flac",B,116),o.LR;this.context.fileSize=await e.ioReader.fileSize();const t=e.createStream();for(t.codecpar.codecType=1,t.codecpar.codecId=86028;;){const a=await e.ioReader.readUint8(),i=await e.ioReader.readUint24(),r=-129&a;if(0===r){t.codecpar.extradata=(0,d.sY)(i),t.codecpar.extradataSize=i,(0,c.lW)(t.codecpar.extradata,i,await e.ioReader.peekBuffer(i)),this.context.streamInfo.minimumBlockSize=await e.ioReader.readUint16(),this.context.streamInfo.maximumBlockSize=await e.ioReader.readUint16(),this.context.streamInfo.minimumFrameSize=await e.ioReader.readUint24(),this.context.streamInfo.maximumFrameSize=await e.ioReader.readUint24();const a=await e.ioReader.readUint24();t.codecpar.sampleRate=a>>4,t.codecpar.chLayout.nbChannels=1+((15&a)>>>1),this.context.streamInfo.sampleRate=t.codecpar.sampleRate,this.context.streamInfo.channels=t.codecpar.chLayout.nbChannels;const r=await e.ioReader.readUint8();t.codecpar.bitsPerRawSample=1+((1&a)<<4|(240&r)>>>4),this.context.streamInfo.bitPerSample=t.codecpar.bitsPerRawSample;const n=await e.ioReader.readUint32(),o=BigInt(Math.floor(15&r))<<BigInt(32)|BigInt(Math.floor(n));this.context.streamInfo.samples=o,t.timeBase.den=t.codecpar.sampleRate,t.timeBase.num=1,t.duration=o,t.startTime=BigInt(0),this.context.streamInfo.md5=await e.ioReader.readString(16)}else if(2===r){const t=e.createStream();t.codecpar.codecType=2,t.codecpar.codecTag=await e.ioReader.readUint32(),t.codecpar.extradata=(0,d.sY)(i-4),t.codecpar.extradataSize=i-4,await e.ioReader.readBuffer(i-4,(0,c.JW)(t.codecpar.extradata,t.codecpar.extradataSize))}else if(3===r)for(let t=0;t<i/18;t++){const t=await e.ioReader.readUint64(),a=await e.ioReader.readUint64(),i=await e.ioReader.readUint16();this.context.seekPoints.push({pts:t,pos:a,samples:i})}else if(4===r){e.ioReader.setEndian(!1);const a=await e.ioReader.readUint32(),i=await e.ioReader.readString(a),r=await e.ioReader.readUint32(),n=[];for(let t=0;t<r;t++){const t=await e.ioReader.readUint32();n.push(await e.ioReader.readString(t))}t.metadata.vendor=i,t.metadata.comments=n,e.ioReader.setEndian(!0)}else if(5===r){this.context.cueSheet.catalogNumber=await e.ioReader.readString(128),this.context.cueSheet.leadInSamples=await e.ioReader.readUint64(),this.context.cueSheet.compactDisc=!!(await e.ioReader.readUint8()>>>7),await e.ioReader.skip(258);const t=await e.ioReader.readUint8();for(let a=0;a<t;a++){const t=await e.ioReader.readUint64(),a=await e.ioReader.readUint8(),i=await e.ioReader.readBuffer(12),r=await e.ioReader.readUint8();await e.ioReader.skip(13);const n=await e.ioReader.readUint8(),o=[];for(let t=0;t<n;t++)o.push({offset:await e.ioReader.readUint64(),point:await e.ioReader.readUint8()}),await e.ioReader.skip(3);this.context.cueSheet.tracks.push({offset:t,number:a,isrc:i,type:r>>>7,preEmphasisFlag:r>>>6&1,points:o})}}else if(6===r){this.context.picture.type=await e.ioReader.readUint32();let t=await e.ioReader.readUint32();this.context.picture.mimeType=await e.ioReader.readString(t),t=await e.ioReader.readUint32(),this.context.picture.description=await e.ioReader.readString(t),this.context.picture.width=await e.ioReader.readUint32(),this.context.picture.height=await e.ioReader.readUint32(),this.context.picture.colorDepth=await e.ioReader.readUint32(),this.context.picture.indexedColor=await e.ioReader.readUint32(),t=await e.ioReader.readUint32(),this.context.picture.data=await e.ioReader.readBuffer(t)}else await e.ioReader.skip(i);if(128&a)break}return this.context.firstFramePos=e.ioReader.getPos(),t.privData=this.context,0}async getNextFrame(e){const t=[];for(;;){if(e.ioReader.getPos()===this.context.fileSize){this.context.cacheBuffer&&(t.push(this.context.cacheBuffer),this.context.cacheBuffer=null);break}this.context.cacheBuffer?this.context.cacheBuffer.length<17&&(this.context.cacheBuffer=(0,u.A)(Uint8Array,[this.context.cacheBuffer,await e.ioReader.readBuffer(Math.min(g,Number(BigInt.asIntN(32,this.context.fileSize-e.ioReader.getPos()))))])):(this.context.cachePos=e.ioReader.getPos(),this.context.cacheBuffer=await e.ioReader.readBuffer(Math.min(g,Number(BigInt.asIntN(32,this.context.fileSize-e.ioReader.getPos())))));let a=t.length?0:2;const i=this.context.isVarSize<0?[248,249]:this.context.isVarSize?[249]:[248],r=this.context.cacheBuffer.length-2;for(;a<r;a++)if(255===this.context.cacheBuffer[a]&&x.zy(i,this.context.cacheBuffer[a+1])){a&&(t.push(this.context.cacheBuffer.subarray(0,a)),this.context.cacheBuffer=this.context.cacheBuffer.subarray(a),this.context.cachePos+=BigInt(Math.floor(a)));break}if(a===r){e.ioReader.getPos()===this.context.fileSize?(t.push(this.context.cacheBuffer),this.context.cachePos+=BigInt(Math.floor(this.context.cacheBuffer.length)),this.context.cacheBuffer=null):(t.push(this.context.cacheBuffer.subarray(0,a)),this.context.cachePos+=BigInt(Math.floor(a)),this.context.cacheBuffer=this.context.cacheBuffer.subarray(a));continue}this.context.cacheBuffer.length<16&&(this.context.cacheBuffer=(0,u.A)(Uint8Array,[this.context.cacheBuffer,await e.ioReader.readBuffer(Math.min(g,Number(BigInt.asIntN(32,this.context.fileSize-e.ioReader.getPos()))))])),this.context.bitReader.reset(),this.context.bitReader.appendBuffer(this.context.cacheBuffer.subarray(0,16));const n={};if(!((0,h.x)(this.context.bitReader,n,!0)<0||n.frameOrSampleNum-this.context.frameInfo.frameOrSampleNum!==BigInt(0|this.context.frameInfo.blocksize)&&n.frameOrSampleNum!==this.context.frameInfo.frameOrSampleNum+BigInt(1)))break;t.push(this.context.cacheBuffer.subarray(0,2)),this.context.cachePos+=BigInt(2),this.context.cacheBuffer=this.context.cacheBuffer.subarray(2)}return 1===t.length?t[0]:(0,u.A)(Uint8Array,t)}async readAVPacket(e,t){const a=e.streams.find((e=>e.codecpar.codecType=1));try{let i=e.ioReader.getPos();if(i===this.context.fileSize)return-1048576;if(this.context.bitReader.reset(),this.context.cacheBuffer?(i=this.context.cachePos,this.context.cacheBuffer.length<16&&(this.context.cacheBuffer=(0,u.A)(Uint8Array,[this.context.cacheBuffer,await e.ioReader.readBuffer(Math.min(g,Number(BigInt.asIntN(32,this.context.fileSize-e.ioReader.getPos()))))])),this.context.bitReader.appendBuffer(this.context.cacheBuffer.subarray(0,16))):this.context.bitReader.appendBuffer(await e.ioReader.peekBuffer(16)),(0,h.x)(this.context.bitReader,this.context.frameInfo)<0)return o.LR;const n=await this.getNextFrame(e),s=(0,d.sY)(n.length);return(0,c.lW)(s,n.length,n),(0,f.NX)(t,s,n.length),r.M[17](t+56,i),r.M[15](t+32,a.index),r.M[15](t+76,a.timeBase.den),r.M[15](t+72,a.timeBase.num),r.M[17](t+16,this.context.frameInfo.isVarSize?this.context.frameInfo.frameOrSampleNum:this.context.frameInfo.frameOrSampleNum*BigInt(0|this.context.frameInfo.blocksize)),r.M[17](t+8,this.context.frameInfo.isVarSize?this.context.frameInfo.frameOrSampleNum:this.context.frameInfo.frameOrSampleNum*BigInt(0|this.context.frameInfo.blocksize)),this.context.isVarSize<0&&(this.context.isVarSize=this.context.frameInfo.isVarSize),0}catch(t){return-1048576!==e.ioReader.error?(n.z3(`read packet error, ${t}`,B,413),o.LR):e.ioReader.error}}async syncFrame(e){let t=l.Dh;for(;;)try{const a=await e.ioReader.peekUint16();if((65529===a||65528===a)&&(t=e.ioReader.getPos(),this.context.bitReader.reset(),this.context.bitReader.appendBuffer(await e.ioReader.peekBuffer(16)),!(0,h.x)(this.context.bitReader,{},!0)))break;await e.ioReader.skip(1)}catch(e){break}t!==l.Dh&&await e.ioReader.seek(t)}async seek(e,t,a,i){const r=e.ioReader.getPos(),s=t.privData;if(2&i){const t=await e.ioReader.fileSize();return t<=BigInt(0)?BigInt(o.E$):(a<BigInt(0)?a=BigInt(0):a>t&&(a=t),await e.ioReader.seek(a),4&i||await this.syncFrame(e),r)}if(t&&t.sampleIndexes.length){let i=x.El(t.sampleIndexes,(e=>e.pts>a?-1:1));if(i>0&&(0,R.k)(a-t.sampleIndexes[i-1].pts,t.timeBase,l.i0)<BigInt(5e3))return n.Yz(`seek in sampleIndexes, found index: ${i}, pts: ${t.sampleIndexes[i-1].pts}, pos: ${t.sampleIndexes[i-1].pos}`,B,481),await e.ioReader.seek(t.sampleIndexes[i-1].pos),s.cacheBuffer=null,r}if(s.seekPoints.length)for(let t=0;t<s.seekPoints.length;t++){const i=s.seekPoints[t];if(i.pts>=a)return n.Yz(`seek in seekPoints, found index: ${t}, pts: ${i.pts}, pos: ${i.pos+s.firstFramePos}`,B,492),await e.ioReader.seek(i.pos+s.firstFramePos),s.cacheBuffer=null,r}n.Yz("not found any keyframe index, try to seek in bytes",B,500);const c=await(0,p.A)(e,t,a,s.firstFramePos,this.readAVPacket.bind(this),this.syncFrame.bind(this));return c>0&&(s.cacheBuffer=null),c}getAnalyzeStreamsCount(){return 1}}},85947:(e,t,a)=>{a.d(t,{A:()=>r});var i=a(134);class r{constructor(){(0,i.A)(this,"type",-1),(0,i.A)(this,"onStreamAdd",void 0)}async destroy(e){}}},42774:(e,t,a)=>{a.d(t,{DK:()=>n,Xr:()=>o,jA:()=>i,oe:()=>r});const i=8,r=[0,8,12,0,16,20,24,32],n=[0,88200,176400,192e3,8e3,16e3,22050,24e3,32e3,44100,48e3,96e3,0,0,0,0],o=[0,192,576,1152,2304,4608,0,0,256,512,1024,2048,4096,8192,16384,32768]},91375:(e,t,a)=>{a.d(t,{x:()=>c});var i=a(9705),r=a(4624),n=a(42774),o=a(13188),s="src/avformat/formats/flac/iflac.ts";function c(e,t,a=!1){const c=e.getPointer();if(32764!=(32767&e.readU(15)))return!a&&r.z3("invalid sync code",s,57),i.LR;t.isVarSize=e.readU1();const d=e.readU(4),f=e.readU(4);if(t.chMode=e.readU(4),t.chMode<n.jA)t.channels=t.chMode+1,t.chMode=0;else{if(!(t.chMode<n.jA+3))return!a&&r.z3(`invalid channel mode: ${t.chMode}`,s,76),i.LR;t.channels=2,t.chMode-=n.jA-1}const h=e.readU(3);if(3===h)return!a&&r.z3(`invalid sample size code: ${h}`,s,82),i.LR;if(t.bps=n.oe[h],e.readU1())return!a&&r.z3("broken stream, invalid padding",s,88),i.LR;if(t.frameOrSampleNum=function(e){let t=BigInt(Math.floor(e.readU(8))),a=(t&BigInt(128))>>BigInt(1);if((t&BigInt(192))===BigInt(128)||t>=BigInt(254))return-BigInt(1);for(;t&a;){const i=BigInt(Math.floor(e.readU(8)))-BigInt(128);if(i>>BigInt(6))return-BigInt(1);t=(t<<BigInt(6))+i,a<<=BigInt(5)}return t&=(a<<BigInt(1))-BigInt(1),t}(e),t.frameOrSampleNum<0)return!a&&r.z3("sample/frame number invalid",s,95),i.LR;if(0===d)return!a&&r.z3("reserved blocksize code: 0",s,100),i.LR;if(t.blocksize=6===d?e.readU(8)+1:7===d?e.readU(16)+1:n.Xr[d],f<12)t.sampleRate=n.DK[f];else if(12===f)t.sampleRate=1e3*e.readU(8);else if(13===f)t.sampleRate=e.readU(16);else{if(14!==f)return!a&&r.z3(`illegal sample rate code ${f}`,s,126),i.LR;t.sampleRate=10*e.readU(16)}return(0,o.A)(e.getBuffer().subarray(c,e.getPointer()))!==e.readU(8)?(!a&&r.z3("header crc mismatch",s,133),i.LR):0}},2187:(e,t,a)=>{a.d(t,{d:()=>o});var i=a(72739),r=a(44328),n=a(77231);function o(e,t,a){let o=BigInt(0);return i.__(e,(e=>{o+=e.codecpar.bitrate*(0,r.k)(t,a,n.i0)/BigInt(8e3)})),o}},52071:(e,t,a)=>{a.d(t,{A:()=>u});var i=a(63939),r=a(9599),n=a(29170),o=a(77231),s=a(44328),c=a(2187),d=a(71517),f=a(9705),h=a(4624),m="src/avformat/function/seekInBytes.ts";async function u(e,t,a,u,l,p){const x=e.ioReader.getPos(),R=await e.ioReader.fileSize();let B=o.Dh,g=a;t.startTime!==o.Dh?g-=t.startTime:g-=t.firstDTS;const I=(0,s.k)(a,t.timeBase,o.i0);if(I<BigInt(1e4))return h.Yz(`seek pts is earlier then 10s, seek to first packet pos(${u}) directly`,m,63),await e.ioReader.seek(u),x;let w=(0,c.d)(e.streams,g,t.timeBase);const k=R-(0,c.d)(e.streams,BigInt(1e4),o.i0),S=(0,c.d)(e.streams,BigInt(1e4),o.i0);if(w>k&&(w=k),w<u)return await e.ioReader.seek(u),x;const b=(0,d._5)();let z=R,U=BigInt(0);for(;;){if(z-U<S){B=U;break}await e.ioReader.seek(w),await p(e);const t=e.ioReader.getPos();if(!(await l(e,b)>=0)){B=o.Dh;break}{const e=(0,s.k)(i.f[17](b+8),(0,n.A)(b+72,r.P),o.i0),a=e-I;if(h.Yz(`try to seek to pos: ${w}, got packet pts: ${i.f[17](b+8)}(${e}ms), diff: ${a}ms`,m,98),a<=BigInt(0)&&-a<BigInt(1e4)){B=t;break}a>BigInt(0)?(z=w,w=U+z>>BigInt(1)):(U=w,w=U+z>>BigInt(1))}}return(0,d.Qe)(b),B!==o.Dh?(h.Yz(`finally seek to pos ${B}`,m,126),await e.ioReader.seek(B),await p(e),x):(await e.ioReader.seek(x),BigInt(f.E$))}},13188:(e,t,a)=>{function i(e,t=0){for(let a=0;a<e.length;a++){t^=e[a];for(let e=0;e<8;e++)128&t?t=t<<1^7:t<<=1}return 255&t}a.d(t,{A:()=>i})}}]);