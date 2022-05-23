/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Button } from '../button'
import { ImageProps } from '../image-item/image-item'
import './style.scss'

interface ImageViewerProps {
  image: ImageProps | undefined
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}
function ImageViewer({
  image = undefined,
  onClose = () => null,
  onNext = () => null,
  onPrev = () => null,
}: ImageViewerProps) {
  const haveImage = image && image?.image
  return (
    <div className={`image-viewer ${haveImage ? 'active' : ''}`}>
      {image ? (
        <div
          className="image-container"
          onClick={onClose}
          role="dialog"
          // onKeyDown={(e) => {
          //   console.log('e :>> ', e)
          // }}
        >
          <div
            className="image-inner"
            onClick={(e) => {
              e.stopPropagation()
            }}
            role="dialog"
          >
            <Button type="close" onClick={onClose} />
            <Button type="next" onClick={onNext} />
            <Button type="prev" onClick={onPrev} />
            <img src={image?.image} alt="" />
            <div className="texts">
              <h3 className="title">{image?.title}</h3>
              <p className="description">{image?.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default ImageViewer
