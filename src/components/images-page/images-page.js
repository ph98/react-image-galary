import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImageViewer } from "../image-viewer";
import { ImagesList } from "../images-list";
import "./style.scss";

function ImagesPage() {
  const [images, setImages] = useState([]);

  // we could use querystring in location but we are not sure about the reliability of the API
  const [activeImageId, setActiveImageId] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://apimocha.com/bearbulltraders/api")
      .then(({ data }) => setImages(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="image-page">
      <ImagesList
        images={images}
        loading={loading}
        onImageClick={(image) => {
          setActiveImageId(image.id);
        }}
      />
      <ImageViewer
        image={images.find((image) => image.id === activeImageId)}
        onClose={() => setActiveImageId(null)}
        onNext={() => {
          const nextImageIndex =
            images.findIndex((image) => image.id === activeImageId) + 1;
          if (nextImageIndex <= images.length) {
            setActiveImageId(images[nextImageIndex].id);
          }
        }}
        onPrev={() => {
          const prevImageIndex =
            images.findIndex((image) => image.id === activeImageId) - 1;
          if (prevImageIndex >= 0) {
            setActiveImageId(images[prevImageIndex].id);
          }
        }}
      />
    </div>
  );
}

export default ImagesPage;
