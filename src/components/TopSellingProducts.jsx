import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";
import Loading from "./Loading";
import TopSellingProductCard from "./TopSellingProductCard";
import { Link } from "react-router-dom";
const TopSellingProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["top Selling products"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/topSelling`
      );
      return response.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  //   console.log(data);
  return (
    <div className="py-14">
      <h1 className="lg:text-5xl text-xl font-bold text-center">
        <Typewriter
          words={["Our Top Selling Products.."]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        {data.map((food) => (
          <TopSellingProductCard food={food} key={food._id} />
        ))}
      </div>
      <Link
        to="/foods"
        className="flex justify-center my-4 btn w-36 mx-auto btn-warning rounded-full "
      >
        See All
      </Link>
    </div>
  );
};

export default TopSellingProducts;
