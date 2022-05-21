import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ImageViewer } from '../image-viewer'
import { ImagesList } from '../images-list'
import './style.scss'

function ImagesPage() {
  const [images, setImages] = useState([])
  const [activeImageId, setActiveImageId] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('https://apimocha.com/bearbulltraders/api').then(({data})=>setImages(data)).finally(()=>setLoading(false))
  }, [])
  
  return (
    <div className='image-page'>
      <ImagesList images={images} loading={loading} onImageClick={(image)=>{setActiveImageId(image.id)}} />
      <ImageViewer
        image={images.find(image=> image.id === activeImageId)}
        onClose={()=>setActiveImageId(null) }
        onNext={()=>{
          const nextImage = images.find(image=> image.id === activeImageId + 1)
          if(nextImage) {
            setActiveImageId(nextImage.id)
          }
         }
        }
        onPrev={()=>{
          const prevImage = images.find(image=> image.id === activeImageId - 1)
          if(prevImage) {
            setActiveImageId(prevImage.id)
          }
        }}
      />
    </div>
  )
}

export default ImagesPage