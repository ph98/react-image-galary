import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ImageViewer } from '../image-viewer'
import { ImagesList } from '../images-list'
import './style.scss'

function ImagesPage() {
  const [images, setImages] = useState([])
  useEffect(() => {
    axios.get('https://apimocha.com/bearbulltraders/api').then(({data})=>setImages(data))
  }, [])
  
  return (
    <div className='image-page'>
      <ImagesList images={images} />
      <ImageViewer />
    </div>
  )
}

export default ImagesPage