// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroTitle from "./HeroTitle";
import img1 from "../assets/banner/1.png";
import img2 from "../assets/banner/2.png";
import img3 from "../assets/banner/3.png";

const HeroBanner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg w-full h-[500px] md:h-[600px]"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative w-full ">
          <img
            src={img1}
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black/50 px-4 py-2 rounded-md w-full h-full flex items-center justify-center">
            <HeroTitle
              heading="Experience Flavors That Tell a Story"
              details="Every dish is crafted with passion and served with care. From fresh ingredients to bold flavors, we promise a dining experience that lingers on your taste buds. Join us for a meal worth remembering, whether it’s a casual bite or a special celebration"
            />
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide className="relative w-full">
          <img
            src={img2}
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black/50 px-4 py-2 rounded-md w-full h-full flex items-center justify-center">
            <HeroTitle
              heading="Good Food, Great Moments"
              details="we believe every meal is a celebration. Enjoy mouthwatering dishes made with the finest ingredients, served in a warm and inviting atmosphere. Whether you're dining solo, with friends, or with family, we're here to make every bite count"
            />
          </div>
        </SwiperSlide>
        {/* Slide 1 */}
        <SwiperSlide className="relative w-full ">
          <img
            src={img3}
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black/60 px-4 py-2 rounded-md w-full h-full flex items-center justify-center">
            <HeroTitle
              heading="Taste the Difference, Feel the Warmth"
              details="Discover a world of rich flavors and heartfelt hospitality. Our chefs create dishes that delight, using only the freshest ingredients. Perfect for intimate dinners, family gatherings, or casual meetups—your next favorite meal is just a table away!"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroBanner;
