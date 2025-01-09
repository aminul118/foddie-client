import Loading from "../components/Loading";
import FoodCard from "../components/FoodCard";
import SectionBanner from "../components/SectionBanner";
import { Helmet } from "react-helmet-async";
import useAllFoods from "../hooks/useAllFoods";

const AllFoods = () => {
  const [foods, isLoading, refetch] = useAllFoods();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <Helmet>
        <title>All foods || Foddie</title>
      </Helmet>
      {/* All Foods Banner */}
      <div className="mb-12">
        <SectionBanner
          image="https://i.ibb.co.com/BNj67Kt/Menu.png"
          Heading="All Foods"
        />
      </div>

      {/* Search */}
      <div className="flex items-center justify-center py-8 w-full">
        <div className="flex items-center overflow-hidden w-full max-w-lg relative border rounded-md">
          <input
            type="text"
            placeholder="Search...."
            className="w-full px-4 py-2 text-gray-700 outline-none border-0 focus:border-blue-500"
          />
          <button
            // Reset to page 1 on search
            className="bg-blue-600 flex items-center text-white px-4 py-5 hover:bg-blue-700 transition absolute -right-1"
          >
            Search
          </button>
        </div>
      </div>

      {/* All Foods Mapping */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
        {foods?.map((food) => (
          <FoodCard food={food} key={food._id} />
        ))}
      </div>
    </section>
  );
};

export default AllFoods;
