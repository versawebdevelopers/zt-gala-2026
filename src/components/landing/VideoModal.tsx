import { useEffect } from 'react'

const GOLD = '#C6A261'
const CREAM = '#FCF9F4'

function getVideoEmbed(url: string): { type: 'iframe'; src: string } | { type: 'file' } | { type: 'external' } {
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]+)/)
  if (yt) return { type: 'iframe', src: `https://www.youtube.com/embed/${yt[1]}?autoplay=1` }

  const vimeo = url.match(/vimeo\.com\/(\d+)(?:\/([a-zA-Z0-9]+))?/)
  if (vimeo) {
    const hash = vimeo[2] ? `?h=${vimeo[2]}&autoplay=1` : '?autoplay=1'
    return { type: 'iframe', src: `https://player.vimeo.com/video/${vimeo[1]}${hash}` }
  }

  if (/\.(mp4|webm|mov|m4v)($|\?)/i.test(url)) return { type: 'file' }

  return { type: 'external' }
}

export function VideoModal({ url, onClose }: { url: string; onClose: () => void }) {
  const embed = getVideoEmbed(url)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto p-6"
      style={{ background: 'rgba(11,7,3,0.92)' }}
      onClick={(e) => {
        // stop the click from bubbling into the thumbnail card that opened this modal
        e.stopPropagation()
        onClose()
      }}
    >
      <button
        aria-label="Close video"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="fixed top-6 right-6 z-[110] text-3xl leading-none"
        style={{ color: GOLD }}
      >
        &times;
      </button>

      <div className="min-h-full w-full flex items-center justify-center">
        {embed.type === 'iframe' ? (
          <div className="w-full max-w-4xl" style={{ aspectRatio: '16 / 9' }} onClick={(e) => e.stopPropagation()}>
            <iframe
              src={embed.src}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Video"
            />
          </div>
        ) : embed.type === 'file' ? (
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <video src={url} controls autoPlay className="w-full h-full" style={{ maxHeight: '90vh' }} />
          </div>
        ) : (
          <div className="text-center" onClick={(e) => e.stopPropagation()}>
            {/* used for platforms (e.g. Instagram) that don't support arbitrary iframe embedding */}
            <p className="mb-4" style={{ color: CREAM }}>
              This video plays on Instagram.
            </p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: GOLD }}>
              Watch on Instagram
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
