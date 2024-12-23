import CustomerReview from "../components/CustomerReview";
import HeroBanner from "../components/HeroBanner";
import WhyFoddie from "../components/WhyFoddie";
import TopSellingProducts from "../components/TopSellingProducts";

import NewsLetterForm from "../components/NewsLetterForm";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="px-2 ">
        <TopSellingProducts />
        <WhyFoddie />
        <CustomerReview />
      <FAQ/>
        <NewsLetterForm/>
      </div>
    </div>
  );
};

export default Home;
