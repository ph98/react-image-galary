import './style.scss'

function ImageItem({key, image}) {
  return (
    <div className="image-item" key={key}>
      <img src={image.image} alt={image.title} />
      <div className="image-item-info">
        <h3>{image.title}</h3>
        <p>{image.description}</p>
      </div>
    </div>
  )
}

export default ImageItem