import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../components/Loading";
import FoodCard from "../components/FoodCard";
import SectionBanner from "../components/SectionBanner";
import { useState } from "react";

const AllFoods = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Default page to 1
  const itemPerPage = 12;

  const { data, isLoading, error } = useQuery({
    queryKey: ["allfoods", search, currentPage, itemPerPage],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all-foods`,
        {
          params: { search, currentPage, itemPerPage },
        }
      );
      return response.data;
    },
    keepPreviousData: true, // Prevent flickering on page change
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">Error: {error.message}</div>
    );
  }

  const totalItems = data?.totalItems || 0;
  const totalPages = Math.ceil(totalItems / itemPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  console.log(data);

  return (
    <section>
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 outline-none border-0 focus:border-blue-500"
          />
          <button
            onClick={() => setCurrentPage(1)} // Reset to page 1 on search
            className="bg-blue-600 flex items-center text-white px-4 py-5 hover:bg-blue-700 transition absolute -right-1"
          >
            Search
          </button>
        </div>
      </div>

      {/* All Foods Mapping */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
        {data?.foods?.map((food) => (
          <FoodCard food={food} key={food._id} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2 py-12 2xl:py-16">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded-md ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 border rounded-md ${
                currentPage === page ? "bg-blue-500 text-white" : ""
              }`}
            >
              {page}
            </button>
          )
        )}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded-md ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default AllFoods;
