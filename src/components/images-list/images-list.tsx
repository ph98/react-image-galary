import { ImageItem } from '../image-item'
import { ImageProps } from '../image-item/image-item'
import { Loading } from '../loading'
import './style.scss'

interface ImagesListProps {
  images: ImageProps[]
  onImageClick: (image: ImageProps) => void
  loading: boolean
}

function ImagesList({
  images = [],
  onImageClick = () => null,
  loading = false,
}: ImagesListProps) {
  return (
    <div className="images-list">
      {loading ? (
        <Loading />
      ) : (
        images.map((image) => (
          <ImageItem
            key={image.id}
            image={image}
            onClick={() => onImageClick(image)}
          />
        ))
      )}
    </div>
  )
}

export default ImagesList
