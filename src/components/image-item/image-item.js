import './style.scss'

function ImageItem({image, onClick}) {
  return (
    <div className="image-item" onClick={()=>onClick(image)}>
      <img src={image.image} alt={image.title} />
      <div className="info">
        <h3>{image.title}</h3>
      </div>
    </div>
  )
}

export default ImageItem