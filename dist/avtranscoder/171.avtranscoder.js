"use strict";(self.webpackChunkAVTranscoder=self.webpackChunkAVTranscoder||[]).push([[171],{58121:(t,e,a)=>{a.d(e,{A:()=>s});var i=a(134);class s{constructor(){(0,i.A)(this,"signature",void 0),(0,i.A)(this,"version",void 0),(0,i.A)(this,"flags",void 0),(0,i.A)(this,"dataOffset",void 0),(0,i.A)(this,"hasVideo",void 0),(0,i.A)(this,"hasAudio",void 0),this.signature="FLV",this.version=1,this.flags=0,this.dataOffset=9,this.hasAudio=!1,this.hasVideo=!1}async read(t){this.signature=await t.readString(3),this.version=await t.readUint8(),this.flags=await t.readUint8(),this.dataOffset=await t.readUint32(),this.hasAudio=!!(4&this.flags),this.hasVideo=!!(1&this.flags)}write(t){this.flags=0,this.hasAudio&&(this.flags|=4),this.hasVideo&&(this.flags|=1),t.writeString(this.signature),t.writeUint8(this.version),t.writeUint8(this.flags),t.writeUint32(this.dataOffset)}}},68243:(t,e,a)=>{a.d(e,{A:()=>w});var i=a(134),s=a(35336),n=a(92647),r=a(4624),o=a(94889),c=a(9705),d=a(89179),h=a(12049);class w{constructor(){(0,i.A)(this,"onMetaData",void 0),this.onMetaData={canSeekToEnd:!1}}async read(t,e){const a=t.getPos(),i=a+BigInt(Math.floor(e)),s=await(0,d.$)(t,i),n=await(0,d.$)(t,i);this[s]=n,i>t.getPos()&&await t.skip(Number(BigInt.asIntN(32,i-t.getPos())));const o=Number(t.getPos()-a),h=await t.readUint32();return o+11!==h?(r.R8(`script size not match, size: ${o+11}, previousTagSize: ${h}`,"src/avformat/formats/flv/FlvScriptTag.ts",65),c.LR):0}computeSize(){const t=[],e=new s.A;return e.onFlush=e=>(t.push(e.slice()),0),(0,h.b)(e,"onMetaData"),(0,h.b)(e,this.onMetaData),e.flush(),(0,n.A)(Uint8Array,t).length}write(t){if(this.onMetaData){const e=[],a=new s.A;a.onFlush=t=>(e.push(t.slice()),0),(0,h.b)(a,"onMetaData"),(0,h.b)(a,this.onMetaData),a.flush();const i=(0,n.A)(Uint8Array,e),r=t.getPos();o.xk(t,18,i.length,BigInt(0)),t.writeBuffer(i),t.writeUint32(Number(t.getPos()-r))}}dts2Position(t){if(this.canSeek()){let e=-1;const a=this.onMetaData.keyframes.times,i=this.onMetaData.keyframes.filepositions;let s;for(s=0;s<a.length;s++){if(a[s]===t){e=s;break}if(a[s]>t){e=Math.max(s-1,0);break}}return s&&s===a.length&&(e=a.length-1),{pos:i[e],dts:a[e]}}return{pos:-1,dts:-1}}position2DTS(t){if(this.canSeek()){let a=-1;const i=this.onMetaData.keyframes.times,s=this.onMetaData.keyframes.filepositions;let n=0;for(n=0;n<s.length;n++)if(s[n]>t){a=n;break}var e;return n===s.length?null!==(e=this.onMetaData.duration)&&void 0!==e?e:i[i.length-1]:i[a]}return-1}canSeek(){return!!(this.onMetaData.keyframes&&this.onMetaData.keyframes.filepositions&&this.onMetaData.keyframes.filepositions.length)}}},35028:(t,e,a)=>{a.d(e,{FJ:()=>s,FV:()=>i,IO:()=>r,U5:()=>n});const i={86018:10,86017:2,86051:11,69645:1,86049:6,65543:7,65542:8,27:7,173:12,196:13,12:9,4:2,86:3,92:4,106:5,131:6},s={10:86018,2:86017,11:86051,1:69645,4:86049,5:86049,6:86049,7:65543,8:65542},n={7:27,12:173,13:196,9:12,2:4,3:86,4:92,5:106,6:131},r={86018:1,86017:0,86051:0,65543:0,65542:0,69645:0,86049:0,27:4,12:4,173:4,196:4,167:4,225:4,4:0,86:0,92:0,106:0,131:0}},89179:(t,e,a)=>{async function i(t,e){return{key:await t.readString(await t.readUint16()),value:await s(t,e)}}async function s(t,e){let a;switch(await t.readUint8()){case 0:a=await t.readDouble();break;case 1:a=!!await t.readUint8();break;case 2:a=await t.readString(await t.readUint16());break;case 3:for(a={};t.getPos()<e;){const{key:s,value:n}=await i(t,e);if(a[s]=n,9==(16777215&await t.peekUint24())){await t.skip(3);break}}break;case 8:for(a={},await t.skip(4);t.getPos()<e;){const{key:s,value:n}=await i(t,e);if(a[s]=n,9==(16777215&await t.peekUint24())){await t.skip(3);break}}break;case 9:case 5:a=null;break;case 10:a=[];const n=await t.readUint32();for(let i=0;i<n;i++)a.push(await s(t,e));break;case 11:const r=await t.readDouble(),o=await t.readInt16();a=new Date(r+60*o*1e3);break;case 12:a=await t.readString(await t.readUint32())}return a}a.d(e,{$:()=>s})},12049:(t,e,a)=>{a.d(e,{b:()=>r});var i=a(67672),s=a(72739),n=a(95335);function r(t,e){i.ai(e)?(t.writeUint8(0),t.writeDouble(e)):i.o(e)?(t.writeUint8(0),t.writeDouble(Number(e))):i.zM(e)?(t.writeUint8(1),t.writeUint8(e?1:0)):i.Yj(e)?e.length>=65536?(t.writeUint8(12),t.writeUint32(e.length),t.writeString(e)):(t.writeUint8(2),t.writeUint16(e.length),t.writeString(e)):i.YO(e)?(t.writeUint8(10),t.writeUint32(e.length),s.__(e,(e=>{r(t,e)}))):i.Ik(e)?(t.writeUint8(3),n.__(e,((e,a)=>{t.writeUint16(a.length),t.writeString(a),r(t,e)})),t.writeUint24(9)):e instanceof Date?(t.writeUint8(11),t.writeDouble(e.getTime()),t.writeInt16(0)):null==e&&t.writeUint8(5)}},94889:(t,e,a)=>{a.d(e,{BV:()=>n,VU:()=>o,ii:()=>r,xk:()=>s});var i=a(35028);function s(t,e,a,i){t.writeUint8(e),t.writeUint24(a),t.writeUint24(Number(i&BigInt(16777215))),t.writeUint8(Number(i>>BigInt(24)&BigInt(255))),t.writeUint24(0)}function n(t,e){let a=2;(86018===e.codecpar.codecId||e.codecpar.chLayout.nbChannels>1)&&(a|=1),86018===e.codecpar.codecId||e.codecpar.sampleRate>=44e3?a|=12:e.codecpar.sampleRate>=22e3?a|=8:e.codecpar.sampleRate>=11e3&&(a|=4),a|=i.FV[e.codecpar.codecId]<<4,t.writeUint8(a)}function r(t,e,a){let s=15&i.FV[e.codecpar.codecId];27!==e.codecpar.codecId&&12!==e.codecpar.codecId&&173!==e.codecpar.codecId&&196!==e.codecpar.codecId||(s|=1&a?16:32),t.writeUint8(s)}function o(t,e,a,i){let s=15&a|128;27!==e.codecpar.codecId&&173!==e.codecpar.codecId&&196!==e.codecpar.codecId&&167!==e.codecpar.codecId&&225!==e.codecpar.codecId||(s|=1&i?16:32),t.writeUint8(s)}}}]);