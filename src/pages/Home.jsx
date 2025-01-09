import CustomerReview from "../components/CustomerReview";
import HeroBanner from "../components/HeroBanner";
import WhyFoddie from "../components/WhyFoddie";
import TopSellingProducts from "../components/TopSellingProducts";
import { Helmet } from "react-helmet-async";
import NewsLetterForm from "../components/NewsLetterForm";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Foddie</title>
      </Helmet>
      <HeroBanner />
      <div className="px-2 ">
        <TopSellingProducts />
        <WhyFoddie />
        <CustomerReview />
        <FAQ />
        <NewsLetterForm />
      </div>
    </div>
  );
};

export default Home;
