/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './style.scss'

export interface ImageProps {
  image: string
  id: number
  title: string
  description: string
}
interface ImageItemProps {
  image: ImageProps
  onClick: (image: ImageProps) => void
}
function ImageItem({ image, onClick }: ImageItemProps) {
  return (
    <div role="document" className="image-item" onClick={() => onClick(image)}>
      <img src={image.image} alt={image.title} />
      <div className="info">
        <h3>{image.title}</h3>
      </div>
    </div>
  )
}

export default ImageItem
