import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { RowsPhotoAlbum } from "react-photo-album";
import SectionBanner from "../components/SectionBanner";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  const slides = [
    {
      src: "https://i.ibb.co.com/h1p9gvx/Croissants-20-500x500.webp",
      width: 800,
      height: 600,
      alt: "Delicious Croissants",
      title: "Delicious Croissants",
      description: "Freshly baked croissants ready to be served.",
    },
    {
      src: "https://i.ibb.co.com/TBySz1h/images.jpg",
      width: 1200,
      height: 800,
      alt: "Beautiful Scenery",
      title: "Beautiful Scenery",
      description: "A stunning view of nature.",
    },
    {
      src: "https://i.ibb.co.com/6BbQrC1/AR-141169-Easy-Indian-Butter-Chicken-DDMFS-4x3-beauty-588ff54d1e0f4a0788906e851e27d540.jpg",
      width: 600,
      height: 900,
      alt: "Butter Chicken",
      title: "Butter Chicken",
      description: "A rich and creamy Indian butter chicken dish.",
    },
    {
      src: "https://i.ibb.co.com/w0vyQd9/wpt10.jpg",
      width: 1920,
      height: 1080,
      alt: "City Skyline",
      title: "City Skyline",
      description: "A breathtaking view of the city skyline at dusk.",
    },
    {
      src: "https://i.ibb.co.com/h1p9gvx/Croissants-20-500x500.webp",
      width: 1000,
      height: 1500,
      alt: "Golden Croissants",
      title: "Golden Croissants",
      description: "Golden, flaky croissants fresh from the oven.",
    },
    {
      src: "https://i.ibb.co.com/hDG3mCC/download.jpg",
      width: 800,
      height: 600,
      alt: "Mountain View",
      title: "Mountain View",
      description: "A serene view of the mountains.",
    },
    {
      src: "https://i.ibb.co.com/fCLyXFf/how-to-make-sushi-salmon-nigiri-6.jpg",
      width: 1200,
      height: 800,
      alt: "Sushi Platter",
      title: "Sushi Platter",
      description: "An assortment of fresh sushi rolls.",
    },
    {
      src: "https://i.ibb.co.com/88YskvQ/download.jpg",
      width: 600,
      height: 900,
      alt: "Forest Path",
      title: "Forest Path",
      description: "A peaceful trail through a lush forest.",
    },
    {
      src: "https://i.ibb.co.com/BNj67Kt/Menu.png",
      width: 1920,
      height: 1080,
      alt: "Restaurant Menu",
      title: "Restaurant Menu",
      description: "A stylish and modern restaurant menu.",
    },
    {
      src: "https://i.ibb.co.com/LN2tPPq/download.jpg",
      width: 1000,
      height: 1500,
      alt: "Coffee Time",
      title: "Coffee Time",
      description: "A warm cup of coffee on a cozy morning.",
    },
    {
      src: "https://i.ibb.co.com/6JKbZ0m/1531159996001.webp",
      width: 800,
      height: 600,
      alt: "Tropical Beach",
      title: "Tropical Beach",
      description: "Golden sands and clear blue waters.",
    },
    {
      src: "https://i.ibb.co.com/4f8BP8x/Philippe-Chow-Peking-Duck-1.jpg",
      width: 1200,
      height: 800,
      alt: "Peking Duck",
      title: "Peking Duck",
      description: "A traditional Chinese dish served perfectly.",
    },
    {
      src: "https://i.ibb.co.com/G9bztBq/k-Photo-Recipes-2024-03-tonkotsu-ramen-tonkotsu-ramen-195.jpg",
      width: 600,
      height: 900,
      alt: "Tonkotsu Ramen",
      title: "Tonkotsu Ramen",
      description: "A steaming bowl of rich Tonkotsu ramen.",
    },
    {
      src: "https://i.ibb.co.com/zs7cJDT/download.jpg",
      width: 1920,
      height: 1080,
      alt: "Sunset Horizon",
      title: "Sunset Horizon",
      description: "A captivating sunset over the ocean horizon.",
    },
    {
      src: "https://i.ibb.co.com/xFrMbkf/download.jpg",
      width: 1000,
      height: 1500,
      alt: "Snowy Peak",
      title: "Snowy Peak",
      description: "A majestic snow-covered mountain peak.",
    },
    {
      src: "https://i.ibb.co.com/4VJQdJC/download.jpg",
      width: 800,
      height: 600,
      alt: "Desert Landscape",
      title: "Desert Landscape",
      description: "A calm and arid desert scene.",
    },
    {
      src: "https://i.ibb.co.com/DGSkJ3p/download.jpg",
      width: 1200,
      height: 800,
      alt: "Ocean Waves",
      title: "Ocean Waves",
      description: "Gentle waves crashing on the shore.",
    },
    {
      src: "https://i.ibb.co.com/60QX5y8/download.jpg",
      width: 600,
      height: 900,
      alt: "Candlelit Dinner",
      title: "Candlelit Dinner",
      description: "A romantic dinner by candlelight.",
    },
  ];

  return (
    <section className="gallery-container mb-14">
      <Helmet>
        <title>Gallery || Foddie</title>
      </Helmet>
      <div className="mb-12">
        <SectionBanner
          image="https://i.ibb.co.com/8Ns5F6B/Menu2.png"
          Heading="Gallery"
        />
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {slides.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => setIndex(idx)}
            className="w-full h-[350px] relative overflow-hidden group cursor-pointer rounded-md"
          >
            {/* Image */}
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Hover Text */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-full left-0 z-20 flex items-center justify-center flex-col text-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-[1.5rem] font-bold text-white">
                {photo.title}
              </h1>
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-2">
                {photo.description}
              </p>
            </div>

            {/* Bottom Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        index={index}
        slides={slides.map((slide) => ({
          src: slide.src,
          alt: slide.alt,
        }))}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen]}
      />
    </section>
  );
};

export default Gallery;
