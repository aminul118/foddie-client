import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import SectionBanner from "../components/SectionBanner";
// import "./Gallery.css";

const Gallery = () => {
  const [index, setIndex] = useState(-1); // Track selected image index

  const slides = [
    {
      src: "https://i.ibb.co.com/h1p9gvx/Croissants-20-500x500.webp",
      width: 800,
      height: 600,
      alt: "Photo 1",
    },
    {
      src: "https://i.ibb.co.com/TBySz1h/images.jpg",
      width: 1200,
      height: 800,
      alt: "Photo 2",
    },
    {
      src: "https://i.ibb.co.com/6BbQrC1/AR-141169-Easy-Indian-Butter-Chicken-DDMFS-4x3-beauty-588ff54d1e0f4a0788906e851e27d540.jpg",
      width: 600,
      height: 900,
      alt: "Photo 3",
    },
    {
      src: "https://i.ibb.co.com/w0vyQd9/wpt10.jpg",
      width: 1920,
      height: 1080,
      alt: "Photo 4",
    },
    {
      src: "https://i.ibb.co.com/h1p9gvx/Croissants-20-500x500.webp",
      width: 1000,
      height: 1500,
      alt: "Photo 5",
    },
    {
      src: "https://i.ibb.co.com/hDG3mCC/download.jpg",
      width: 800,
      height: 600,
      alt: "Photo 6",
    },
    {
      src: "https://i.ibb.co.com/fCLyXFf/how-to-make-sushi-salmon-nigiri-6.jpg",
      width: 1200,
      height: 800,
      alt: "Photo 7",
    },
    {
      src: "https://i.ibb.co.com/88YskvQ/download.jpg",
      width: 600,
      height: 900,
      alt: "Photo 8",
    },
    {
      src: "https://i.ibb.co.com/BNj67Kt/Menu.png",
      width: 1920,
      height: 1080,
      alt: "Photo 9",
    },
    {
      src: "https://i.ibb.co.com/LN2tPPq/download.jpg",
      width: 1000,
      height: 1500,
      alt: "Photo 10",
    },
    {
      src: "https://i.ibb.co.com/6JKbZ0m/1531159996001.webp",
      width: 800,
      height: 600,
      alt: "Photo 11",
    },
    {
      src: "https://i.ibb.co.com/4f8BP8x/Philippe-Chow-Peking-Duck-1.jpg",
      width: 1200,
      height: 800,
      alt: "Photo 12",
    },
    {
      src: "https://i.ibb.co.com/G9bztBq/k-Photo-Recipes-2024-03-tonkotsu-ramen-tonkotsu-ramen-195.jpg",
      width: 600,
      height: 900,
      alt: "Photo 13",
    },
    {
      src: "https://i.ibb.co.com/zs7cJDT/download.jpg",
      width: 1920,
      height: 1080,
      alt: "Photo 14",
    },
    {
      src: "https://i.ibb.co.com/xFrMbkf/download.jpg",
      width: 1000,
      height: 1500,
      alt: "Photo 15",
    },
    {
      src: "https://i.ibb.co.com/4VJQdJC/download.jpg",
      width: 800,
      height: 600,
      alt: "Photo 16",
    },
    {
      src: "https://i.ibb.co.com/DGSkJ3p/download.jpg",
      width: 1200,
      height: 800,
      alt: "Photo 17",
    },
    {
      src: "https://i.ibb.co.com/60QX5y8/download.jpg",
      width: 600,
      height: 900,
      alt: "Photo 18",
    },
  ];

  return (
    <div className="gallery-container mb-14">
      <div className="mb-12">
        <SectionBanner
          image="https://i.ibb.co.com/8Ns5F6B/Menu2.png"
          Heading="Gallery"
        />
      </div>

      <RowsPhotoAlbum
        layout="rows"
        photos={slides}
        targetRowHeight={300}
        spacing={10}
        onClick={({ index: current }) => setIndex(current)}
      />

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
    </div>
  );
};

export default Gallery;
