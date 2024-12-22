import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../components/Loading";
import FoodCard from "../components/FoodCard";
import SectionBanner from "../components/SectionBanner";

const AllFoods = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["foods"],
    queryFn: () =>
      axios.get("http://localhost:5000/all-foods").then((res) => {
        // console.log(res.data);
        return res.data; //  Return the data here
      }),
  });

  if (error) return <div>Error: {error.message}</div>;

  console.log("Fetched data", data);
  console.log(isLoading);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="mb-12">
        <SectionBanner
          image="https://i.ibb.co.com/BNj67Kt/Menu.png"
          Heading="All Foods"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
        {data?.map((food) => (
          <FoodCard food={food} key={food._id} />
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
