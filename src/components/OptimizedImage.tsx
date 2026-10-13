import type { ImgHTMLAttributes } from 'react'

const IMAGE_WIDTHS = [128, 256, 320, 640, 960, 1280, 1920, 2560, 3840]

function canOptimize(src: string) {
  return import.meta.env.VITE_VERCEL_IMAGE_OPTIMIZATION === '1' &&
    src.startsWith('/assets/') && !src.endsWith('.svg')
}

export function optimizedImageUrl(src: string, width = 1920) {
  if (!canOptimize(src)) return src
  const allowedWidth = IMAGE_WIDTHS.find((candidate) => candidate >= width) ?? 3840
  const params = new URLSearchParams({ url: src, w: String(allowedWidth), q: '75' })
  return `/_vercel/image?${params}`
}

export function optimizedImageSrcSet(src: string, maxWidth = 3840) {
  if (!canOptimize(src)) return undefined
  return IMAGE_WIDTHS.filter((width) => width <= maxWidth)
    .map((width) => `${optimizedImageUrl(src, width)} ${width}w`)
    .join(', ')
}

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  maxWidth?: number
}

export default function OptimizedImage({
  src,
  maxWidth = 3840,
  sizes = '100vw',
  loading = 'lazy',
  decoding = 'async',
  srcSet,
  ...props
}: OptimizedImageProps) {
  return (
    <img
      {...props}
      src={optimizedImageUrl(src, Math.min(maxWidth, 1920))}
      srcSet={srcSet ?? optimizedImageSrcSet(src, maxWidth)}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
    />
  )
}