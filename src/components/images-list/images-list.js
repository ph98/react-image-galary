
import { ImageItem } from "../image-item"
import './style.scss'

function ImagesList({images, onImageClick, loading}) {

  return (
    <div className="images-list">
        {
          loading ? <div className="loading">Loading...</div> :
            images.map(image => <ImageItem key={image.id} image={image} onClick={()=>onImageClick(image)} />)
        }
    </div>
  )
}

export default ImagesList