import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

const SectionBanner = ({ image, Heading }) => {
  return (
    <div>
      {/* Wrapper with rounded-lg and overflow-hidden */}
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image: image,
              speed: -40,
            },
            {
              speed: 0,
              children: (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 h-full w-full">
                  <h1 className="text-3xl lg:text-6xl font-bold text-white  text-center">
                    {Heading}
                  </h1>
                </div>
              ),
            },
          ]}
          className="aspect-[4/2] lg:aspect-[4/1] lg:rounded-lg"
        />
      </ParallaxProvider>
    </div>
  );
};

export default SectionBanner;
