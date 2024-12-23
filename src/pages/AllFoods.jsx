import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../components/Loading";
import FoodCard from "../components/FoodCard";
import SectionBanner from "../components/SectionBanner";
import { useState } from "react";

const AllFoods = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["allfoods", filter, search], // Dynamic query key includes filter and search
    queryFn: async () => {
      const response = await axios.get(`http://localhost:5000/all-foods`, {
        params: { filter, search }, // Use axios params for cleaner query string handling
      });
      return response.data;
    },
    enabled: true, // Always fetch when the component mounts
  });

  // Handle Loading State
  if (isLoading) {
    return <Loading />;
  }

  // Handle Error State
  if (error) {
    return (
      <div className="text-red-500 text-center">Error: {error.message}</div>
    );
  }
  return (
    <section>
      {/* All Foods Banner */}
      <div className="mb-12">
        <SectionBanner
          image="https://i.ibb.co.com/BNj67Kt/Menu.png"
          Heading="All Foods"
        />
      </div>
      {/* Sorting and Search */}
      <div className="flex items-center justify-center py-8 w-full">
        <div className="flex items-center overflow-hidden w-full max-w-lg relative border rounded-md">
          {/* Sorting
          <div className="overflow-hidden hidden md:block">
            <select
              onChange={(e) => setFilter(e.target.value)}
              defaultValue="Sorting"
              className="w-36 text-left border-r px-4 py-2 rounded-none outline-none btn"
            >
              <option value="Sorting" disabled>
                Sorting
              </option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </div> */}
          {/* Search */}
          <input
            type="text"
            placeholder="Search...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 outline-none border-0 focus:border-blue-500"
          />
          <button className="bg-blue-600 flex items-center text-white px-4 py-5 hover:bg-blue-700 transition absolute -right-1">
            Search
          </button>
        </div>
      </div>
      {/* All Foods mapping and show by cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
        {data?.map((food) => (
          <FoodCard food={food} key={food._id} />
        ))}
      </div>
    </section>
  );
};

export default AllFoods;
