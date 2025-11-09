import React from "react";

function GalleryCard({ image, alt, onClick }) {
  return (
    <div className="md:w-[31%] w-[90%]">
      <img
        src={`${image}`}
        alt={alt}
        onClick={onClick}
        className="w-full h-[350px] hover:z-10 shadow hover:border-2 hover:shadow-2xl p-5 rounded-lg cursor-pointer"
      />
    </div>
  );
}

export default GalleryCard;
