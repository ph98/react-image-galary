import './style.scss'

function ImageViewer({image, onClose, onNext, onPrev}) {
  const haveImage = image && image.image;
  return (
    <div className={`image-viewer ${haveImage ? 'active': ''}`}>
      {image ? <div className="image-container" onClick={onClose}>
        <div className="image-inner" onClick={e=>{
          e.stopPropagation()
        }}>
          <img src={image.image} alt="" />
          <div className="texts">
            <h3 className='title'>{image.title}</h3>
            <p className='description'>{image.description}</p>
          </div>
        </div>
      </div>: null}
    </div>
  )
}

export default ImageViewer