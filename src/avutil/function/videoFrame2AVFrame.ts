/* libmedia VideoFrame to AVFrame utils
 *
 * 版权所有 (C) 2024 赵高兴
 * Copyright (C) 2024 Gaoxing Zhao
 *
 * 此文件是 libmedia 的一部分
 * This file is part of libmedia.
 * 
 * libmedia 是自由软件；您可以根据 GNU Lesser General Public License（GNU LGPL）3.1
 * 或任何其更新的版本条款重新分发或修改它
 * libmedia is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3.1 of the License, or (at your option) any later version.
 * 
 * libmedia 希望能够为您提供帮助，但不提供任何明示或暗示的担保，包括但不限于适销性或特定用途的保证
 * 您应自行承担使用 libmedia 的风险，并且需要遵守 GNU Lesser General Public License 中的条款和条件。
 * libmedia is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 */

import { createAVFrame, getVideoBuffer } from '../util/avframe'
import AVFrame from '../struct/avframe'
import { AVColorPrimaries, AVColorRange, AVColorSpace, AVColorTransferCharacteristic, AVPixelFormat } from '../pixfmt'
import { mapUint8Array } from 'cheap/std/memory'
import { PixelFormatDescriptorsMap } from '../pixelFormatDescriptor'

function mapFormat(format: VideoPixelFormat) {
  switch (format) {
    case 'BGRA':
      return AVPixelFormat.AV_PIX_FMT_BGRA
    case 'BGRX':
      return AVPixelFormat.AV_PIX_FMT_BGR0
    case 'I420':
      return AVPixelFormat.AV_PIX_FMT_YUV420P
    case 'I420A':
      return AVPixelFormat.AV_PIX_FMT_YUVA420P
    case 'I422':
      return AVPixelFormat.AV_PIX_FMT_YUV422P
    case 'I444':
      return AVPixelFormat.AV_PIX_FMT_YUV444P
    case 'NV12':
      return AVPixelFormat.AV_PIX_FMT_NV12
    case 'RGBA':
      return AVPixelFormat.AV_PIX_FMT_RGBA
    case 'RGBX':
      return AVPixelFormat.AV_PIX_FMT_RGB0
    default:
      throw new Error('not support')
  }
}

function mapColorSpace(colorSpace: string) {
  switch (colorSpace) {
    case 'bt709' :
      return AVColorSpace.AVCOL_SPC_BT709
    case 'smpte170m':
      return AVColorSpace.AVCOL_SPC_SMPTE170M
    case 'bt470bg':
      return AVColorSpace.AVCOL_SPC_BT470BG
    case 'rgb':
      return AVColorSpace.AVCOL_SPC_RGB
    default:
      return AVColorSpace.AVCOL_SPC_BT709
  }
}

function mapColorPrimaries(colorPrimaries: string) {
  switch (colorPrimaries) {
    case 'bt709':
      return AVColorPrimaries.AVCOL_PRI_BT709
    case 'bt470bg':
      return AVColorPrimaries.AVCOL_PRI_BT470BG
    case 'smpte170m':
      return AVColorPrimaries.AVCOL_PRI_SMPTE170M
    default:
      return AVColorPrimaries.AVCOL_PRI_BT709
  }
}

function mapColorTrc(colorTrc: string) {
  switch (colorTrc) {
    case 'bt709':
      return AVColorTransferCharacteristic.AVCOL_TRC_BT709
    case 'iec61966-2-1':
      return AVColorTransferCharacteristic.AVCOL_TRC_IEC61966_2_1
    case 'smpte170m':
      return AVColorTransferCharacteristic.AVCOL_TRC_SMPTE170M
    default:
      return AVColorTransferCharacteristic.AVCOL_TRC_BT709
  }
}

export function videoFrame2AVFrame(videoFrame: VideoFrame, avframe: pointer<AVFrame> = nullptr) {
  if (avframe === nullptr) {
    avframe = createAVFrame()
  }

  avframe.format = mapFormat(videoFrame.format)
  avframe.pts = static_cast<int64>(videoFrame.timestamp)
  avframe.width = videoFrame.codedWidth
  avframe.height = videoFrame.codedHeight
  avframe.duration = static_cast<int64>(videoFrame.duration)

  avframe.colorSpace = mapColorSpace(videoFrame.colorSpace.matrix)
  avframe.colorPrimaries = mapColorPrimaries(videoFrame.colorSpace.primaries)
  avframe.colorTrc = mapColorTrc(videoFrame.colorSpace.transfer)
  avframe.colorRange = videoFrame.colorSpace.fullRange ? AVColorRange.AVCOL_RANGE_JPEG : AVColorRange.AVCOL_RANGE_MPEG

  getVideoBuffer(avframe)

  const des = PixelFormatDescriptorsMap[avframe.format as AVPixelFormat]
  const layout: PlaneLayout[] = []
  for (let i = 1; i < des.nbComponents; i++) {
    layout.push({
      offset: avframe.data[i] - avframe.buf[0].data,
      stride: avframe.linesize[i]
    })
  }

  videoFrame.copyTo(mapUint8Array(avframe.buf[0].data, avframe.buf[0].size), {
    layout
  })

  return avframe
}
