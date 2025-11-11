import { useState } from "react";
import GalleryCard from "./GalleryCard";
import photos from "../gallery.json";

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="pt-20 flex flex-wrap md:flex-row sm:flex-col gap-5 w-full md:pl-32 md:pr-32 justify-center md:justify-start">
      {photos.map((photo, index) => (
        <GalleryCard
          key={index}
          image={`${process.env.PUBLIC_URL}/${photo.image}`}

          alt={`Gallery ${index}`}
          onClick={() => handleImageClick(index)}
        />
      ))}

      {/* Lightbox overlay */}
      {selectedIndex !== null && (
        <div className="lightbox fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <span
            className="close-btn absolute top-10 right-10 text-4xl text-white cursor-pointer"
            onClick={handleClose}
          >
            &times;
          </span>

          <button
            className="nav-btn absolute left-10 text-5xl text-white cursor-pointer"
            onClick={handlePrev}
          >
            &#10094;
          </button>

          <img
            src={`${process.env.PUBLIC_URL}/${photos[selectedIndex].image}`}
            alt={`Gallery ${selectedIndex}`}
            className="max-w-[80%] max-h-[80%]"
          />

          <button
            className="nav-btn absolute right-10 text-5xl text-white cursor-pointer"
            onClick={handleNext}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
