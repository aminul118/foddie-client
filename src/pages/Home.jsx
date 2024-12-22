import CustomerReview from "../components/CustomerReview";
import HeroBanner from "../components/HeroBanner";
import SpecialOffer from "../components/SpecialOffer";
import TopSellingProducts from "../components/TopSellingProducts";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <TopSellingProducts />
      <SpecialOffer />
      <CustomerReview />
    </div>
  );
};

export default Home;
