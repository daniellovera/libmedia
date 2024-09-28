"use strict";(self.webpackChunkAVTranscoder=self.webpackChunkAVTranscoder||[]).push([[109],{95109:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var a=i(134),r=i(63939),s=i(35336),h=i(51597),n=i(69584),c=i(4624),o=i(71517),g=i(77231),u="src/avformat/formats/OOggsFormat.ts";class d extends h.A{constructor(){super(),(0,a.A)(this,"type",4),(0,a.A)(this,"checksumTable",void 0),(0,a.A)(this,"headerPagesPayload",void 0),(0,a.A)(this,"cacheWriter",void 0),(0,a.A)(this,"page",void 0),this.checksumTable=[],this.page=new n.B,this.headerPagesPayload=[]}initChecksumTab(){for(let e=0;e<256;e++){let t=e<<24;for(let e=0;e<8;e++)t=2147483648&t?t<<1^79764919:t<<1;this.checksumTable[e]=4294967295&t}}getChecksum(e){let t=0;for(let i=0;i<e.length;i++)t=t<<8^this.checksumTable[t>>>24&255^e[i]];return t>>>0}init(e){if(e.ioWriter.setEndian(!1),this.initChecksumTab(),this.cacheWriter=new s.A(65025,!1),this.headerPagesPayload)for(let t=0;t<this.headerPagesPayload.length;t++)this.headerPagesPayload[t].setCodec(e.getStreamByIndex(this.headerPagesPayload[t].streamIndex).codecpar);return e.streams&&e.streams.forEach((e=>{e.privData={granulePosition:BigInt(0),pageSequenceLast:0}})),0}writePage(e,t,i,a){let r=i.length,s=r,h=0;for(;r>0;){const n=Math.min(65025,r),c=i.subarray(h,h+n),o=h+n===s,u=0===h;this.page.reset(),this.page.serialNumber=e.index,this.page.granulePosition=o?e.privData.granulePosition:g.Dh,this.page.pageSequenceNumber=e.privData.pageSequenceLast,this.page.crcCheckSum=0,this.page.headerTypeFlag=a||0,u||this.page.headerTypeFlag,this.page.payload=c,this.cacheWriter.reset(),this.page.write(this.cacheWriter);const d=this.getChecksum(this.cacheWriter.getBuffer()),l=this.cacheWriter.getPointer();this.cacheWriter.seekInline(22),this.cacheWriter.writeUint32(d),this.cacheWriter.seekInline(l),t.writeBuffer(this.cacheWriter.getBuffer()),r-=n,h+=n}++e.privData.pageSequenceLast,e.privData.pageSequenceLast>Math.pow(2,32)-1&&(e.privData.pageSequenceLast=0)}writeHeader(e){if(this.headerPagesPayload)for(let t=0;t<this.headerPagesPayload.length;t++){const i=e.getStreamByIndex(this.headerPagesPayload[t].streamIndex);i&&(this.cacheWriter.reset(),this.headerPagesPayload[t].write(this.cacheWriter),this.writePage(i,e.ioWriter,this.cacheWriter.getBuffer().slice(),0===t?2:0))}return 0}writeAVPacket(e,t){if(!r.f[15](t+28))return void c.R8(`packet's size is 0: ${r.f[15](t+32)}, ignore it`,u,187);const i=e.getStreamByIndex(r.f[15](t+32));if(i)return this.writePage(i,e.ioWriter,(0,o.iI)(t),0),1===i.codecpar.codecType?i.privData.granulePosition+=BigInt(0|i.codecpar.frameSize):0===i.codecpar.codecType&&i.privData.granulePosition++,0;c.R8(`can not found the stream width the packet's streamIndex: ${r.f[15](t+32)}, ignore it`,u,194)}writeTrailer(e){return e.ioWriter.flush(),0}flush(e){return e.ioWriter.flush(),0}}},69584:(e,t,i)=>{i.d(t,{B:()=>s});var a=i(134),r=i(77231);class s{constructor(){(0,a.A)(this,"capturePattern",void 0),(0,a.A)(this,"streamStructureVersion",void 0),(0,a.A)(this,"headerTypeFlag",void 0),(0,a.A)(this,"granulePosition",void 0),(0,a.A)(this,"serialNumber",void 0),(0,a.A)(this,"pageSequenceNumber",void 0),(0,a.A)(this,"crcCheckSum",void 0),(0,a.A)(this,"numberPageSegments",void 0),(0,a.A)(this,"segmentTable",void 0),(0,a.A)(this,"payload",void 0),this.reset()}reset(){this.capturePattern="OggS",this.streamStructureVersion=0,this.headerTypeFlag=0,this.granulePosition=r.Dh,this.serialNumber=0,this.pageSequenceNumber=0,this.crcCheckSum=0,this.numberPageSegments=0,this.segmentTable=[]}async read(e){await this.readPageHeader(e);const t=this.segmentTable.reduce(((e,t)=>e+t),0);t&&(this.payload=await e.readBuffer(t))}async readPageHeader(e){if(this.capturePattern=await e.readString(4),this.streamStructureVersion=await e.readUint8(),this.headerTypeFlag=await e.readUint8(),this.granulePosition=await e.readUint64(),this.serialNumber=await e.readUint32(),this.pageSequenceNumber=await e.readUint32(),this.crcCheckSum=await e.readUint32(),this.numberPageSegments=await e.readUint8(),this.numberPageSegments)for(let t=0;t<this.numberPageSegments;t++){const t=await e.readUint8();this.segmentTable.push(t)}}write(e){if(e.writeString(this.capturePattern),e.writeUint8(this.streamStructureVersion),e.writeUint8(this.headerTypeFlag),e.writeUint64(this.granulePosition),e.writeUint32(this.serialNumber),e.writeUint32(this.pageSequenceNumber),e.writeUint32(this.crcCheckSum),this.payload){this.numberPageSegments=Math.ceil(this.payload.length/255);const t=this.payload.length%255;e.writeUint8(this.numberPageSegments);for(let t=0;t<this.numberPageSegments-1;t++)e.writeUint8(255);e.writeUint8(t),e.writeBuffer(this.payload)}else e.writeUint8(0)}}}}]);