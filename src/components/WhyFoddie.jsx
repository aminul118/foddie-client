import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import img from "../../src/assets/banner/2.png";
import icon1 from "../../src/assets/icons/1.png";
import icon2 from "../../src/assets/icons/2.png";
import icon3 from "../../src/assets/icons/3.png";
import icon4 from "../../src/assets/icons/4.png";
import icon5 from "../../src/assets/icons/5.png";
import icon6 from "../../src/assets/icons/6.png";
import CategoryCard from "./CategoryCard";

const WhyFoddie = () => {
  return (
    <div>
      <ParallaxProvider>
        {/* Wrap the whole app with ParallaxProvider */}
        <ParallaxBanner
          layers={[
            { image: img, speed: -80 }, // Corrected image path
            {
              speed: 0,
              children: (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                  <div>
                    <div className="divider divider-warning  py-8">
                      <h1 className="2xl:text-7xl lg:text-5xl text-3xl font-bold text-white text-center ">
                        Why Foddie
                      </h1>
                    </div>
                    <div className="grid grid-cols-1 gap-2 lg:gap-12 lg:grid-cols-3 lg:mt-24 text-white">
                      <CategoryCard icon={icon1} text="Easy and Convinient" />
                      <CategoryCard icon={icon2} text="Kosher Supervision" />
                      <CategoryCard icon={icon3} text="No commitment" />
                      <CategoryCard icon={icon4} text="Most 5 star reviews" />
                      <CategoryCard icon={icon5} text="Fresh and Affordable" />
                      <CategoryCard icon={icon6} text="No skimpin chicken!" />
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
          className="lg:aspect-[4/2] aspect-[1/2]   rounded-lg" //image style and height weight
        />
      </ParallaxProvider>
    </div>
  );
};

export default WhyFoddie;
