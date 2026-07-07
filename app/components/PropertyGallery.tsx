"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

export default function PropertyGallery({ images, title }: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <div className="property-gallery">
        <Image
          src={selectedImage}
          alt={title}
          width={1200}
          height={700}
          className="property-main-image"
        />
      </div>

      <div className="property-thumbnails">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${title} ${index + 1}`}
            width={120}
            height={80}
            className={`property-thumb ${
              selectedImage === image ? "active" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </>
  );
}
