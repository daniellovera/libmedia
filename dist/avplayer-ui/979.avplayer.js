"use strict";(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[979],{85947:(t,i,e)=>{e.d(i,{A:()=>r});var s=e(134);class r{constructor(){(0,s.A)(this,"type",-1),(0,s.A)(this,"onStreamAdd",void 0)}destroy(t){}}},69979:(t,i,e)=>{e.r(i),e.d(i,{default:()=>A});var s=e(134),r=e(63939),n=e(50932),h=e(69584),a=e(4624),o=e(94929),d=e(797),g=e(9705),l=e(92647),u=e(85947),p=e(14686),f=e(37837),c=e(71517),m=e(82348),w=e(35336),b=e(77231),I=e(52071),S=e(44328),v=e(79630),B=e(43607),k="src/avformat/formats/IOggsFormat.ts";class A extends u.A{constructor(){super(),(0,s.A)(this,"type",4),(0,s.A)(this,"headerPagesPayload",void 0),(0,s.A)(this,"page",void 0),(0,s.A)(this,"curSegIndex",void 0),(0,s.A)(this,"curSegStart",void 0),(0,s.A)(this,"segCount",void 0),(0,s.A)(this,"segIndex",void 0),(0,s.A)(this,"currentPts",void 0),(0,s.A)(this,"firstPos",void 0),(0,s.A)(this,"firstGranulePosition",void 0),this.page=new h.B,this.headerPagesPayload=[]}init(t){t.ioReader&&t.ioReader.setEndian(!1),t.ioReader&&t.ioReader.setEndian(!1),this.curSegIndex=-1,this.curSegStart=0,this.currentPts=BigInt(0),this.segCount=0,this.segIndex=0,this.firstGranulePosition=BigInt(0)}async estimateTotalBlock(t){let i=BigInt(0);const e=t.ioReader.getPos(),s=this.currentPts,r=await t.ioReader.fileSize();for(await t.ioReader.seek(B.T9(r-BigInt(195072),BigInt(0))),await this.syncPage(t);;)try{this.page.reset(),await this.page.read(t.ioReader),i=this.page.granulePosition}catch(t){break}return await t.ioReader.seek(e),this.currentPts=s,i}async getNextSegment(t){if(this.curSegIndex<0){this.page.granulePosition>BigInt(0)&&(this.currentPts=this.page.granulePosition),this.page.reset(),await this.page.read(t.ioReader),this.curSegIndex=0,this.curSegStart=0,this.segIndex=-1,this.segCount=0;for(let t=0;t<this.page.segmentTable.length;t++)255!==this.page.segmentTable[t]&&this.segCount++}let i=0;for(;;){const t=this.page.segmentTable[this.curSegIndex++];if(i+=t,255!==t)break}const e=this.curSegStart;return this.curSegStart+=i,this.segIndex++,this.curSegIndex===this.page.segmentTable.length&&(this.curSegIndex=-1),this.page.payload.subarray(e,e+i)}async readHeader(t){try{let i=await t.ioReader.peekString(4);if("OggS"!==i)return a.z3("the file format is not oggs",k,167),g.LR;let e=await this.getNextSegment(t),s=new m.A(e.length,!1);if(s.appendBuffer(e),i=s.peekString(8),"OpusHead"===i){const i=new o.q;i.read(s);const r=new o.o;e=await this.getNextSegment(t),s=new m.A(e.length,!1),s.appendBuffer(e),r.read(s),this.headerPagesPayload=[i,r];const n=t.createStream();n.codecpar.codecType=1,n.codecpar.codecId=86076,n.codecpar.sampleRate=i.sampleRate,n.codecpar.chLayout.nbChannels=i.channels,n.timeBase.den=n.codecpar.sampleRate,n.timeBase.num=1,n.privData={serialNumber:this.page.serialNumber},this.onStreamAdd&&this.onStreamAdd(n),n.duration=await this.estimateTotalBlock(t)}else if("vorbis"===i.slice(1,7)){const i=[e],r=new d.m;r.read(s);const n=new d.G;e=await this.getNextSegment(t),s=new m.A(e.length,!1),s.appendBuffer(e),n.read(s),i.push(e),this.headerPagesPayload=[r,n];const h=t.createStream();h.codecpar.codecType=1,h.codecpar.codecId=86021,h.codecpar.sampleRate=r.sampleRate,h.codecpar.chLayout.nbChannels=r.channels,h.timeBase.den=h.codecpar.sampleRate,h.timeBase.num=1,h.privData={serialNumber:this.page.serialNumber},i.push(await this.getNextSegment(t));const a=i.reduce(((t,i)=>t+2+i.length),0),o=(0,f.sY)(a),g=new w.A(a,!0,new v.A(o,a));i.forEach((t=>{g.writeUint16(t.length),g.writeBuffer(t)})),h.codecpar.extradata=o,h.codecpar.extradataSize=a,this.onStreamAdd&&this.onStreamAdd(h),h.duration=await this.estimateTotalBlock(t)}return this.firstPos=t.ioReader.getPos(),0}catch(i){return a.z3(i.message,k,277),t.ioReader.error}}async readAVPacket(t,i){if(!this.headerPagesPayload.length)return g.E$;n.M[17](i+56,t.ioReader.getPos());try{const e=await this.getNextSegment(t);let s=this.currentPts+(this.page.granulePosition-this.currentPts)/BigInt(Math.floor(this.segCount))*BigInt(Math.floor(this.segIndex));n.M[17](i+16,s),n.M[17](i+8,s),this.firstGranulePosition||(this.firstGranulePosition=this.page.granulePosition);const h=t.streams.find((t=>t.privData.serialNumber===this.page.serialNumber));h&&(n.M[15](i+32,h.index),n.M[15](i+76,h.timeBase.den),n.M[15](i+72,h.timeBase.num),1===h.codecpar.codecType&&n.M[15](i+36,1|r.f[15](i+36)));const a=[e];for(;this.curSegIndex<0;)try{if(!(1&(await t.ioReader.peekBuffer(6))[5]))break;a.push(await this.getNextSegment(t))}catch(t){break}const o=(0,l.A)(Uint8Array,a),d=o.length,g=(0,f.sY)(d);return(0,p.lW)(g,d,o),(0,c.NX)(i,g,d),0}catch(i){return-1048576!==t.ioReader.error?(a.z3(`read packet error, ${i}`,k,343),g.LR):t.ioReader.error}}async syncPage(t){let i=b.Dh,e=BigInt(0);for(;;)try{if("OggS"===await t.ioReader.peekString(4)){i=t.ioReader.getPos(),this.page.reset(),await this.page.read(t.ioReader),e=this.page.granulePosition;let s=0;for(;3!==s&&"OggS"===await t.ioReader.peekString(4);)s++,this.page.reset(),await this.page.read(t.ioReader);if(3===s)break}await t.ioReader.skip(1)}catch(t){break}if(i!==b.Dh){for(await t.ioReader.seek(i);1&(await t.ioReader.peekBuffer(6))[5];)this.page.reset(),await this.page.read(t.ioReader),e=this.page.granulePosition;this.currentPts=e-this.firstGranulePosition,this.curSegIndex=-1}}async seek(t,i,e,s){const r=t.ioReader.getPos();if(2&s){const i=await t.ioReader.fileSize();return i<=BigInt(0)?BigInt(g.E$):(e<BigInt(0)?e=BigInt(0):e>i&&(e=i),await t.ioReader.seek(e),4&s||await this.syncPage(t),r)}return(0,S.k)(e,i.timeBase,b.i0)<BigInt(1e4)?(a.Yz(`seek pts is earlier then 10s, seek to first packet pos(${this.firstPos}) directly`,k,436),await t.ioReader.seek(this.firstPos),this.currentPts=BigInt(0),r):(0,I.A)(t,i,e,this.firstPos,this.readAVPacket.bind(this),this.syncPage.bind(this))}getAnalyzeStreamsCount(){return 1}}},69584:(t,i,e)=>{e.d(i,{B:()=>n});var s=e(134),r=e(77231);class n{constructor(){(0,s.A)(this,"capturePattern",void 0),(0,s.A)(this,"streamStructureVersion",void 0),(0,s.A)(this,"headerTypeFlag",void 0),(0,s.A)(this,"granulePosition",void 0),(0,s.A)(this,"serialNumber",void 0),(0,s.A)(this,"pageSequenceNumber",void 0),(0,s.A)(this,"crcCheckSum",void 0),(0,s.A)(this,"numberPageSegments",void 0),(0,s.A)(this,"segmentTable",void 0),(0,s.A)(this,"payload",void 0),this.reset()}reset(){this.capturePattern="OggS",this.streamStructureVersion=0,this.headerTypeFlag=0,this.granulePosition=r.Dh,this.serialNumber=0,this.pageSequenceNumber=0,this.crcCheckSum=0,this.numberPageSegments=0,this.segmentTable=[]}async read(t){await this.readPageHeader(t);const i=this.segmentTable.reduce(((t,i)=>t+i),0);i&&(this.payload=await t.readBuffer(i))}async readPageHeader(t){if(this.capturePattern=await t.readString(4),this.streamStructureVersion=await t.readUint8(),this.headerTypeFlag=await t.readUint8(),this.granulePosition=await t.readUint64(),this.serialNumber=await t.readUint32(),this.pageSequenceNumber=await t.readUint32(),this.crcCheckSum=await t.readUint32(),this.numberPageSegments=await t.readUint8(),this.numberPageSegments)for(let i=0;i<this.numberPageSegments;i++){const i=await t.readUint8();this.segmentTable.push(i)}}write(t){if(t.writeString(this.capturePattern),t.writeUint8(this.streamStructureVersion),t.writeUint8(this.headerTypeFlag),t.writeUint64(this.granulePosition),t.writeUint32(this.serialNumber),t.writeUint32(this.pageSequenceNumber),t.writeUint32(this.crcCheckSum),this.payload){this.numberPageSegments=Math.ceil(this.payload.length/255);const i=this.payload.length%255;t.writeUint8(this.numberPageSegments);for(let i=0;i<this.numberPageSegments-1;i++)t.writeUint8(255);t.writeUint8(i),t.writeBuffer(this.payload)}else t.writeUint8(0)}}},94929:(t,i,e)=>{e.d(i,{o:()=>o,q:()=>h});var s=e(134),r=e(50011);class n{constructor(){(0,s.A)(this,"streamCount",void 0),(0,s.A)(this,"coupledStreamCount",void 0),(0,s.A)(this,"mapping",void 0),this.streamCount=1,this.coupledStreamCount=0,this.mapping=null}read(t){this.streamCount=t.readUint8(),this.coupledStreamCount=t.readUint8(),this.mapping=t.readBuffer(this.streamCount+this.coupledStreamCount)}write(t){t.writeUint8(this.streamCount),t.writeUint8(this.coupledStreamCount),t.writeBuffer(this.mapping)}}class h{constructor(){(0,s.A)(this,"streamIndex",void 0),(0,s.A)(this,"signature",void 0),(0,s.A)(this,"version",void 0),(0,s.A)(this,"channels",void 0),(0,s.A)(this,"preSkip",void 0),(0,s.A)(this,"sampleRate",void 0),(0,s.A)(this,"outputGain",void 0),(0,s.A)(this,"channelMappingFamily",void 0),(0,s.A)(this,"channelMappingTable",void 0),this.signature="OpusHead",this.version=1,this.channels=1,this.preSkip=0,this.sampleRate=48e3,this.outputGain=0,this.channelMappingFamily=0,this.channelMappingTable=new n}read(t){this.signature=t.readString(8),this.version=t.readUint8(),this.channels=t.readUint8(),this.preSkip=t.readUint16(),this.sampleRate=t.readUint32(),this.outputGain=t.readInt16(),this.channelMappingFamily=t.readUint8(),0!==this.channelMappingFamily&&this.channelMappingTable.read(t)}write(t){t.writeString(this.signature),t.writeUint8(this.version),t.writeUint8(this.channels),t.writeUint16(this.preSkip),t.writeUint32(this.sampleRate),t.writeInt16(this.outputGain),t.writeUint8(this.channelMappingFamily),0!==this.channelMappingFamily&&this.channelMappingTable.write(t)}setCodec(t){this.sampleRate=t.sampleRate,this.channels=t.chLayout.nbChannels}}class a{constructor(){(0,s.A)(this,"list",void 0),this.list=[]}read(t,i){for(let e=0;e<i;e++){const i=t.readUint32();this.list.push(t.readString(i))}}write(t){for(let i=0;i<this.list.length;i++){const e=r.encode(this.list[i]);t.writeUint32(e.length),t.writeBuffer(e)}}addComment(t){this.list.push(t)}}class o{constructor(){(0,s.A)(this,"streamIndex",void 0),(0,s.A)(this,"signature",void 0),(0,s.A)(this,"vendorStringLength",void 0),(0,s.A)(this,"vendorString",void 0),(0,s.A)(this,"userCommentListLength",void 0),(0,s.A)(this,"comments",void 0),this.signature="OpusTags",this.vendorString="libmedia.0.0.1",this.vendorStringLength=this.vendorString.length,this.userCommentListLength=0,this.comments=new a}read(t){this.signature=t.readString(8),this.vendorStringLength=t.readUint32(),this.vendorString=t.readString(this.vendorStringLength),this.userCommentListLength=t.readUint32(),this.userCommentListLength&&this.comments.read(t,this.userCommentListLength)}write(t){t.writeString(this.signature);const i=r.encode(this.vendorString);t.writeUint32(i.length),t.writeBuffer(i),t.writeUint32(this.comments.list.length),this.comments.write(t)}addComment(t){this.comments.addComment(t)}setCodec(t){}}},797:(t,i,e)=>{e.d(i,{G:()=>a,m:()=>n});var s=e(134),r=e(50011);class n{constructor(){(0,s.A)(this,"streamIndex",void 0),(0,s.A)(this,"packetType",void 0),(0,s.A)(this,"signature",void 0),(0,s.A)(this,"version",void 0),(0,s.A)(this,"channels",void 0),(0,s.A)(this,"sampleRate",void 0),(0,s.A)(this,"bitrateMaximum",void 0),(0,s.A)(this,"bitrateNominal",void 0),(0,s.A)(this,"bitrateMinimum",void 0),(0,s.A)(this,"blocksize0",void 0),(0,s.A)(this,"blocksize1",void 0),(0,s.A)(this,"framingFlag",void 0),this.signature="vorbis",this.version=0,this.channels=1,this.sampleRate=48e3,this.bitrateMaximum=0,this.bitrateNominal=0,this.bitrateMinimum=0}read(t){this.packetType=t.readUint8(),this.signature=t.readString(6),this.version=t.readUint32(),this.channels=t.readUint8(),this.sampleRate=t.readInt32(),this.bitrateMaximum=t.readInt32(),this.bitrateNominal=t.readInt32(),this.bitrateMinimum=t.readInt32();const i=255&t.readUint8();this.blocksize0=Math.pow(2,i>>>4),this.blocksize1=Math.pow(2,15&i),this.framingFlag=t.readUint8()}write(t){t.writeUint8(1),t.writeString(this.signature),t.writeUint32(this.version),t.writeUint8(this.channels),t.writeInt32(this.sampleRate),t.writeInt32(this.bitrateMaximum),t.writeInt32(this.bitrateNominal),t.writeInt32(this.bitrateMinimum),t.writeUint8(Math.log2(this.blocksize0)<<4|Math.log2(this.blocksize1)),t.writeUint8(1)}setCodec(t){this.sampleRate=t.sampleRate,this.channels=t.chLayout.nbChannels}}class h{constructor(){(0,s.A)(this,"list",void 0),this.list=[]}read(t,i){for(let e=0;e<i;e++){const i=t.readUint32();this.list.push(t.readString(i))}}write(t){for(let i=0;i<this.list.length;i++){const e=r.encode(this.list[i]);t.writeUint32(e.length),t.writeBuffer(e)}}addComment(t){this.list.push(t)}}class a{constructor(){(0,s.A)(this,"streamIndex",void 0),(0,s.A)(this,"packetType",void 0),(0,s.A)(this,"signature",void 0),(0,s.A)(this,"vendorStringLength",void 0),(0,s.A)(this,"vendorString",void 0),(0,s.A)(this,"userCommentListLength",void 0),(0,s.A)(this,"comments",void 0),(0,s.A)(this,"framingFlag",void 0),this.signature="vorbis",this.vendorString="libmedia.0.0.1",this.vendorStringLength=this.vendorString.length,this.userCommentListLength=0,this.comments=new h}read(t){this.packetType=t.readUint8(),this.signature=t.readString(6),this.vendorStringLength=t.readUint32(),this.vendorString=t.readString(this.vendorStringLength),this.userCommentListLength=t.readUint32(),this.userCommentListLength&&this.comments.read(t,this.userCommentListLength),this.framingFlag=t.readUint8()}write(t){t.writeString(this.signature);const i=r.encode(this.vendorString);t.writeUint32(i.length),t.writeBuffer(i),t.writeUint32(this.comments.list.length),this.comments.write(t),t.writeUint8(1)}addComment(t){this.comments.addComment(t)}setCodec(t){}}},2187:(t,i,e)=>{e.d(i,{d:()=>h});var s=e(72739),r=e(44328),n=e(77231);function h(t,i,e){let h=BigInt(0);return s.__(t,(t=>{h+=t.codecpar.bitrate*(0,r.k)(i,e,n.i0)/BigInt(8e3)})),h}},52071:(t,i,e)=>{e.d(i,{A:()=>p});var s=e(63939),r=e(9599),n=e(29170),h=e(77231),a=e(44328),o=e(2187),d=e(71517),g=e(9705),l=e(4624),u="src/avformat/function/seekInBytes.ts";async function p(t,i,e,p,f,c){const m=t.ioReader.getPos(),w=await t.ioReader.fileSize();let b=h.Dh,I=e;i.startTime!==h.Dh?I-=i.startTime:I-=i.firstDTS;const S=(0,a.k)(e,i.timeBase,h.i0);if(S<BigInt(1e4))return l.Yz(`seek pts is earlier then 10s, seek to first packet pos(${p}) directly`,u,63),await t.ioReader.seek(p),m;let v=(0,o.d)(t.streams,I,i.timeBase);const B=w-(0,o.d)(t.streams,BigInt(1e4),h.i0),k=(0,o.d)(t.streams,BigInt(1e4),h.i0);if(v>B&&(v=B),v<p)return await t.ioReader.seek(p),m;const A=(0,d._5)();let U=w,P=BigInt(0);for(;;){if(U-P<k){b=P;break}await t.ioReader.seek(v),await c(t);const i=t.ioReader.getPos();if(!(await f(t,A)>=0)){b=h.Dh;break}{const t=(0,a.k)(s.f[17](A+8),(0,n.A)(A+72,r.P),h.i0),e=t-S;if(l.Yz(`try to seek to pos: ${v}, got packet pts: ${s.f[17](A+8)}(${t}ms), diff: ${e}ms`,u,98),e<=BigInt(0)&&-e<BigInt(1e4)){b=i;break}e>BigInt(0)?(U=v,v=P+U>>BigInt(1)):(P=v,v=P+U>>BigInt(1))}}return(0,d.Qe)(A),b!==h.Dh?(l.Yz(`finally seek to pos ${b}`,u,126),await t.ioReader.seek(b),await c(t),m):(await t.ioReader.seek(m),BigInt(g.E$))}},82348:(t,i,e)=>{e.d(i,{A:()=>a});var s=e(134),r=e(4624),n=e(50011),h="src/common/io/IOReaderSync.ts";class a{constructor(t=1048576,i=!0,e){if((0,s.A)(this,"data",void 0),(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pointer",void 0),(0,s.A)(this,"endPointer",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"littleEndian",void 0),(0,s.A)(this,"fileSize_",void 0),(0,s.A)(this,"error",void 0),(0,s.A)(this,"onFlush",void 0),(0,s.A)(this,"onSeek",void 0),(0,s.A)(this,"onSize",void 0),(0,s.A)(this,"flags",void 0),this.pos=BigInt(0),this.pointer=0,this.error=0,this.endPointer=0,this.littleEndian=!i,this.flags=0,e&&e.view)this.size=e.length,this.buffer=e,this.data=e.view;else if(e&&!e.byteOffset)this.size=e.length,this.buffer=e,this.data=new DataView(this.buffer.buffer);else{if(e)throw new Error("not support subarray of ArrayBuffer");this.size=Math.max(t,102400),this.buffer=new Uint8Array(this.size),this.data=new DataView(this.buffer.buffer)}}readUint8(){this.remainingLength()<1&&this.flush(1);const t=this.data.getUint8(this.pointer);return this.pointer++,this.pos++,t}peekUint8(){return this.remainingLength()<1&&this.flush(1),this.data.getUint8(this.pointer)}readUint16(){this.remainingLength()<2&&this.flush(2);const t=this.data.getUint16(this.pointer,this.littleEndian);return this.pointer+=2,this.pos+=BigInt(2),t}peekUint16(){return this.remainingLength()<2&&this.flush(2),this.data.getUint16(this.pointer,this.littleEndian)}readUint24(){this.remainingLength()<3&&this.flush(3);const t=this.readUint16(),i=this.readUint8();return this.littleEndian?i<<16|t:t<<8|i}peekUint24(){this.remainingLength()<3&&this.flush(3);const t=this.pointer,i=this.pos,e=this.readUint16(),s=this.readUint8(),r=this.littleEndian?s<<16|e:e<<8|s;return this.pointer=t,this.pos=i,r}readUint32(){this.remainingLength()<4&&this.flush(4);const t=this.data.getUint32(this.pointer,this.littleEndian);return this.pointer+=4,this.pos+=BigInt(4),t}peekUint32(){return this.remainingLength()<4&&this.flush(4),this.data.getUint32(this.pointer,this.littleEndian)}readUint64(){this.remainingLength()<8&&this.flush(8);const t=this.data.getBigUint64(this.pointer,this.littleEndian);return this.pointer+=8,this.pos+=BigInt(8),t}peekUint64(){return this.remainingLength()<8&&this.flush(8),this.data.getBigUint64(this.pointer,this.littleEndian)}readInt8(){this.remainingLength()<1&&this.flush(1);const t=this.data.getInt8(this.pointer);return this.pointer++,this.pos++,t}peekInt8(){return this.remainingLength()<1&&this.flush(1),this.data.getInt8(this.pointer)}readInt16(){this.remainingLength()<2&&this.flush(2);const t=this.data.getInt16(this.pointer,this.littleEndian);return this.pointer+=2,this.pos+=BigInt(2),t}peekInt16(){return this.remainingLength()<2&&this.flush(2),this.data.getInt16(this.pointer,this.littleEndian)}readInt24(){const t=this.readUint24();return 8388608&t?t-16777216:t}peekInt24(){const t=this.peekUint24();return 8388608&t?t-16777216:t}readInt32(){this.remainingLength()<4&&this.flush(4);const t=this.data.getInt32(this.pointer,this.littleEndian);return this.pointer+=4,this.pos+=BigInt(4),t}peekInt32(){return this.remainingLength()<4&&this.flush(4),this.data.getInt32(this.pointer,this.littleEndian)}readInt64(){this.remainingLength()<8&&this.flush(8);const t=this.data.getBigInt64(this.pointer,this.littleEndian);return this.pointer+=8,this.pos+=BigInt(8),t}peekInt64(){return this.remainingLength()<8&&this.flush(8),this.data.getBigInt64(this.pointer,this.littleEndian)}readFloat(){this.remainingLength()<4&&this.flush(4);const t=this.data.getFloat32(this.pointer,this.littleEndian);return this.pointer+=4,this.pos+=BigInt(4),t}peekFloat(){return this.remainingLength()<4&&this.flush(4),this.data.getFloat32(this.pointer,this.littleEndian)}readDouble(){this.remainingLength()<8&&this.flush(8);const t=this.data.getFloat64(this.pointer,this.littleEndian);return this.pointer+=8,this.pos+=BigInt(8),t}peekDouble(){return this.remainingLength()<8&&this.flush(8),this.data.getFloat64(this.pointer,this.littleEndian)}readHex(t=1){let i="";for(let e=0;e<t;e++){const t=this.readUint8().toString(16);i+=1===t.length?"0"+t:t}return i}peekHex(t=1){t>this.size&&(this.error=-1048574,r.h2("peekHex, length too large",h,412)),this.remainingLength()<t&&this.flush(t);const i=this.pointer,e=this.pos;let s="";for(let i=0;i<t;i++){const t=this.readUint8().toString(16);s+=1===t.length?"0"+t:t}return this.pointer=i,this.pos=e,s}readBuffer(t,i){if(!t)return new Uint8Array(0);if(i||(i=new Uint8Array(t)),this.remainingLength()<t){let e=0;if(this.remainingLength()>0){const s=this.remainingLength();i.set(this.buffer.subarray(this.pointer,this.pointer+s),e),e+=s,this.pointer+=s,this.pos+=BigInt(s),t-=s}for(;t>0;){this.flush();const s=Math.min(this.endPointer-this.pointer,t);i.set(this.buffer.subarray(this.pointer,this.pointer+s),e),e+=s,this.pointer+=s,this.pos+=BigInt(s),t-=s}}else i.set(this.buffer.subarray(this.pointer,this.pointer+t),0),this.pointer+=t,this.pos+=BigInt(t);return i}peekBuffer(t,i){return t?(t>this.size&&(this.error=-1048574,r.h2("peekBuffer, length too large",h,505)),this.remainingLength()<t&&this.flush(t),i||(i=new Uint8Array(t)),i.set(this.buffer.subarray(this.pointer,this.pointer+t),0),i):new Uint8Array(0)}readToBuffer(t,i){if(this.remainingLength()<t){let e=0;if(this.remainingLength()>0){const s=this.remainingLength();i.set(this.buffer.subarray(this.pointer,this.pointer+s),e),e+=s,this.pointer+=s,this.pos+=BigInt(s),t-=s}for(;t>0;){try{this.flush()}catch(t){if(-1048576===this.error&&e)return e;throw t}const s=Math.min(this.endPointer-this.pointer,t);i.set(this.buffer.subarray(this.pointer,this.pointer+s),e),e+=s,this.pointer+=s,this.pos+=BigInt(s),t-=s}return e}return i.set(this.buffer.subarray(this.pointer,this.pointer+t),0),this.pointer+=t,this.pos+=BigInt(t),t}readString(t=1){const i=this.readBuffer(t);return n.decode(i)}peekString(t=1){const i=this.peekBuffer(t);return n.decode(i)}readLine(){let t="";for(;;){let i=!1;for(let e=this.pointer;e<this.endPointer;e++)if(10===this.buffer[e]||13===this.buffer[e]){e!==this.pointer&&(t+=this.readString(e-this.pointer)),i=!0;break}if(i)break;t+=this.readString(this.remainingLength()),this.flush()}let i=this.peekUint8();return 10!==i&&13!==i||(this.pointer++,13===i&&(i=this.peekUint8(),10===i&&this.pointer++)),t}peekLine(){this.remainingLength()<this.size&&this.flush();let t="",i=!1;for(let e=this.pointer;e<this.endPointer;e++)if(10===this.buffer[e]||13===this.buffer[e]){t+=this.peekString(e-this.pointer),i=!0;break}return i||(this.error=-1048574,r.h2("peekLine, out of buffer",h,656)),t}getPointer(){return this.pointer}getPos(){return this.pos}skip(t){const i=t;for(;this.remainingLength()<t;)t-=this.remainingLength(),this.pointer=this.endPointer,this.flush();this.remainingLength()>=t&&(this.pointer+=t),this.pos+=BigInt(i)}remainingLength(){return this.endPointer-this.pointer}flush(t=0){if(this.onFlush||(this.error=-1048574,r.h2("IOReader error, flush failed because of no flush callback",h,720)),!(this.size-this.remainingLength()<=0)){if(t=Math.min(t,this.size),this.pointer<this.endPointer?(this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0),this.endPointer=this.endPointer-this.pointer):this.endPointer=0,this.pointer=0,t)for(;this.remainingLength()<t;){const t=this.onFlush(this.buffer.subarray(this.endPointer));if(t<0)throw this.error=t,new Error(`IOReader error, flush ${-1048576===t?"ended":"failed"}, ret: ${t}`);this.endPointer+=t}else{const t=this.onFlush(this.buffer.subarray(this.endPointer));if(t<0)throw this.error=t,new Error(`IOReader error, flush ${-1048576===t?"ended":"failed"}, ret: ${t}`);this.endPointer+=t}this.error=0}}seek(t,i=!1,e=!0){if(!i){const i=Number(t-this.pos);if(i<0&&Math.abs(i)<this.pointer)return this.pointer+=i,void(this.pos=t);if(i>0&&this.pointer+i<this.endPointer)return this.pointer+=i,void(this.pos=t);if(0===i)return}this.onSeek||(this.error=-1048574,r.h2("IOReader error, seek failed because of no seek callback",h,790)),this.pointer=this.endPointer=0,this.pos=t;const s=this.onSeek(t);0!==s&&(this.error=s,r.h2("IOReader error, seek failed",h,799)),e&&this.flush()}getBuffer(){return this.buffer}appendBuffer(t){if(this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else if(this.buffer.set(this.buffer.subarray(this.pointer,this.endPointer),0),this.endPointer=this.endPointer-this.pointer,this.pointer=0,this.size-this.endPointer>=t.length)this.buffer.set(t,this.endPointer),this.endPointer+=t.length;else{const i=Math.min(this.size-this.endPointer,t.length);this.buffer.set(t.subarray(0,i),this.endPointer),this.endPointer+=i,r.R8("IOReader, call appendBuffer but the buffer's size is lagger then the remaining size",h,838)}}reset(){this.pointer=this.endPointer=0,this.pos=BigInt(0),this.error=0}setEndian(t){this.littleEndian=!t}fileSize(){if(this.fileSize_)return this.fileSize_;if(!this.onSize)return r.R8("IOReader error, fileSize failed because of no onSize callback",h,871),BigInt(0);try{this.fileSize_=this.onSize()}catch(t){r.R8(`IOReader error, call fileSize failed: ${t}`,h,878),this.fileSize_=BigInt(0)}return this.fileSize_}getBufferSize(){return this.size}pipe(t,i){if(i)if(this.remainingLength()<i){if(this.remainingLength()>0){const e=this.remainingLength();t.writeBuffer(this.buffer.subarray(this.pointer,this.pointer+e)),this.pointer+=e,this.pos+=BigInt(e),i-=e}for(;i>0;){this.flush();const e=Math.min(this.endPointer-this.pointer,i);t.writeBuffer(this.buffer.subarray(this.pointer,this.pointer+e)),this.pointer+=e,this.pos+=BigInt(e),i-=e}}else t.writeBuffer(this.buffer.subarray(this.pointer,this.pointer+i)),this.pointer+=i,this.pos+=BigInt(i);else{if(this.remainingLength()>0){const i=this.remainingLength();t.writeBuffer(this.buffer.subarray(this.pointer,this.pointer+i)),this.pointer+=i,this.pos+=BigInt(i)}for(;this.onFlush(this.buffer.subarray(0))>0;){const i=this.remainingLength();t.writeBuffer(this.buffer.subarray(this.pointer,this.pointer+i)),this.pointer+=i,this.pos+=BigInt(i)}}}}},35336:(t,i,e)=>{e.d(i,{A:()=>n});var s=e(134),r=e(50011);class n{constructor(t=1048576,i=!0,e){if((0,s.A)(this,"data",void 0),(0,s.A)(this,"buffer",void 0),(0,s.A)(this,"pointer",void 0),(0,s.A)(this,"pos",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"littleEndian",void 0),(0,s.A)(this,"error",void 0),(0,s.A)(this,"onFlush",void 0),(0,s.A)(this,"onSeek",void 0),this.pointer=0,this.pos=BigInt(0),this.size=t,this.littleEndian=!i,this.error=0,e&&e.view)this.size=e.length,this.buffer=e,this.data=e.view;else if(e&&!e.byteOffset)this.size=e.length,this.buffer=e,this.data=new DataView(this.buffer.buffer);else{if(e)throw new Error("not support subarray of ArrayBuffer");this.buffer=new Uint8Array(this.size),this.data=new DataView(this.buffer.buffer)}}writeUint8(t){this.remainingLength()<1&&this.flush(),this.data.setUint8(this.pointer,t),this.pointer++,this.pos++}writeUint16(t){this.remainingLength()<2&&this.flush(),this.data.setUint16(this.pointer,t,this.littleEndian),this.pointer+=2,this.pos+=BigInt(2)}writeUint24(t){this.remainingLength()<3&&this.flush();const i=(16711680&t)>>16,e=(65280&t)>>8,s=255&t;this.littleEndian?(this.writeUint8(s),this.writeUint8(e),this.writeUint8(i)):(this.writeUint8(i),this.writeUint8(e),this.writeUint8(s))}writeUint32(t){this.remainingLength()<4&&this.flush(),this.data.setUint32(this.pointer,t,this.littleEndian),this.pointer+=4,this.pos+=BigInt(4)}writeUint64(t){this.remainingLength()<8&&this.flush(),this.data.setBigUint64(this.pointer,t,this.littleEndian),this.pointer+=8,this.pos+=BigInt(8)}writeInt8(t){this.remainingLength()<1&&this.flush(),this.data.setInt8(this.pointer,t),this.pointer++,this.pos++}writeInt16(t){this.remainingLength()<2&&this.flush(),this.data.setInt16(this.pointer,t,this.littleEndian),this.pointer+=2,this.pos+=BigInt(2)}writeInt24(t){this.writeUint24(t<0?t+16777216:t)}writeInt32(t){this.remainingLength()<4&&this.flush(),this.data.setInt32(this.pointer,t,this.littleEndian),this.pointer+=4,this.pos+=BigInt(4)}writeInt64(t){this.remainingLength()<8&&this.flush(),this.data.setBigInt64(this.pointer,t,this.littleEndian),this.pointer+=8,this.pos+=BigInt(8)}writeFloat(t){this.remainingLength()<4&&this.flush(),this.data.setFloat32(this.pointer,t,this.littleEndian),this.pointer+=4,this.pos+=BigInt(4)}writeDouble(t){this.remainingLength()<8&&this.flush(),this.data.setFloat64(this.pointer,t,this.littleEndian),this.pointer+=8,this.pos+=BigInt(8)}getPointer(){return this.pointer}getPos(){return this.pos}remainingLength(){return this.size-this.pointer}writeBuffer(t){if(!t.length)return;let i=t.length;if(this.remainingLength()<i){let e=0;for(;i>0;){this.flush();const s=Math.min(this.size,i);this.buffer.set(t.subarray(e,e+s),this.pointer),this.pointer+=s,this.pos+=BigInt(s),e+=s,i-=s}}else this.buffer.set(t,this.pointer),this.pointer+=i,this.pos+=BigInt(i)}writeString(t){const i=r.encode(t);return this.writeBuffer(i),i.length}flush(){if(!this.onFlush)throw this.error=-1048574,Error("IOWriter error, flush failed because of no flush callback");if(this.pointer){const t=this.onFlush(this.buffer.subarray(0,this.pointer));if(0!==t)throw this.error=t,Error("IOWriter error, flush failed")}this.pointer=0}flushToPos(t){if(!this.onFlush)throw this.error=-1048574,Error("IOWriter error, flush failed because of no flush callback");if(this.pointer){const i=this.onFlush(this.buffer.subarray(0,this.pointer),t);if(0!==i)throw this.error=i,Error("IOWriter error, flush failed")}this.pointer=0}seek(t){if(!this.onSeek)throw this.error=-1048574,Error("IOWriter error, seek failed because of no seek callback");this.flush();const i=this.onSeek(t);if(0!==i)throw this.error=i,Error("IOWriter error, seek failed");this.pos=t}seekInline(t){const i=this.pointer;this.pointer=Math.max(0,Math.min(this.size,t)),this.pos+=BigInt(this.pointer-i)}skip(t){const i=this.pointer;this.pointer=Math.min(this.size,this.pointer+t),this.pos+=BigInt(this.pointer-i)}back(t){const i=this.pointer;this.pointer=Math.max(0,this.pointer-t),this.pos+=BigInt(this.pointer-i)}getBuffer(){return this.buffer.subarray(0,this.pointer)}setEndian(t){this.littleEndian=!t}reset(){this.pointer=0,this.pos=BigInt(0),this.error=0}getBufferSize(){return this.size}}}}]);