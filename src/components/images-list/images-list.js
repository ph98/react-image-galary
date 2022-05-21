
import { ImageItem } from "../image-item"
import './style.scss'

function ImagesList({images}) {

  return (
    <div className="images-list">
        {
            images.map(image => <ImageItem key={image.id} image={image} />)
        }
    </div>
  )
}

export default ImagesList