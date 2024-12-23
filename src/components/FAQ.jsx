import Accordion from "./Accordion";
import Heading from "./Heading";
import img from "../assets/lottie/faq.json";
import Lottie from "lottie-react";

const FAQ = () => {
  return (
    <section className="lg:my-24">
      <div className="py-8 lg:py-12">
        <Heading heading="Frquently Ask Questions" />
      </div>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div>
          <Accordion />
        </div>
        <div>
          <Lottie
            loop={1}
            className="md:w-[500px] mx-auto"
            animationData={img}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
