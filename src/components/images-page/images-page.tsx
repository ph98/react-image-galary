import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { ImageProps } from '../image-item/image-item'
import { ImageViewer } from '../image-viewer'
import { ImagesList } from '../images-list'
import './style.scss'

const SERVER_ADDRESS =
  process.env.REACT_APP_SERVER_ADDRESS ||
  'https://apimocha.com/bearbulltraders/api'

function ImagesPage() {
  const [images, setImages] = useState<Array<ImageProps>>([])
  const [activeImageId, setActiveImageId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchImages = useCallback(() => {
    // the mock doesn't have date field for sorting, we can add a sort to it here:
    // and we also can filter images with the same Id
    axios
      .get(SERVER_ADDRESS)
      .then(({ data }) => setImages((imagesState) => [...imagesState, data]))
      .catch((err) => {
        toast.error(err.message)
      })
      .finally(() => {
        setTimeout(() => {
          fetchImages()
        }, 2000)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchImages()
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
