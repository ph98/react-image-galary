import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { ImageProps } from '../image-item/image-item'
import { ImageViewer } from '../image-viewer'
import { ImagesList } from '../images-list'
import './style.scss'

function ImagesPage() {
  const [images, setImages] = useState<Array<ImageProps>>([])
  const [activeImageId, setActiveImageId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://apimocha.com/bearbulltraders/api')
      .then(({ data }) => setImages(data))
      .catch((err) => {
        toast.error(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="image-page">
      <ImagesList
        images={images}
        loading={loading}
        onImageClick={(image) => {
          setActiveImageId(image.id)
        }}
      />
      <ImageViewer
        image={images.find((image) => image.id === activeImageId)}
        onClose={() => setActiveImageId(null)}
        onNext={() => {
          const nextImageIndex =
            images.findIndex((image) => image.id === activeImageId) + 1
          if (nextImageIndex <= images.length) {
            setActiveImageId(images[nextImageIndex].id)
          }
        }}
        onPrev={() => {
          const prevImageIndex =
            images.findIndex((image) => image.id === activeImageId) - 1
          if (prevImageIndex >= 0) {
            setActiveImageId(images[prevImageIndex].id)
          }
        }}
      />
    </div>
  )
}

export default ImagesPage
