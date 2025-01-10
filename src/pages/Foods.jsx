import Loading from "../components/Loading";
import FoodCard from "../components/FoodCard";
import SectionBanner from "../components/SectionBanner";
import { Helmet } from "react-helmet-async";
import useAllFoods from "../hooks/useAllFoods";
import { useState } from "react";

const Foods = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [foodPerPage, setFoodPerPage] = useState(12);
  const [selectedPage, setSelectedPage] = useState(1);
  const [{ totalFood, foods }, isLoading, refetch] = useAllFoods(
    search,
    sort,
    selectedPage,
    foodPerPage
  );
  // console.log(search);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const HandleReset = () => {
    setSearch("");
    setSort("");
  };

  const page = Math.ceil(totalFood / foodPerPage);

  const pagination = [];
  for (let i = 1; i < page + 1; i++) {
    pagination.push(i);
  }

  const handleSelectedPage = (num) => {
    setSelectedPage(num);
    // console.log(num);
  };

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
          <select onChange={handleSort} value={sort} className="px-3 h-12">
            <option value="asc">Assending</option>
            <option value="dsc">Desending</option>
          </select>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search...."
            className="w-full px-4 h-12 text-gray-700 outline-none border-0 focus:border-blue-500"
          />
          <button onChange={HandleReset} className="btn">
            Reset
          </button>
        </div>
      </div>

      {/* All Foods Mapping */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
          {foods?.map((food) => (
            <FoodCard food={food} key={food._id} />
          ))}
        </div>
      )}
      <div className="text-center py-8">
        {pagination.map((p) => (
          <button
            onClick={() => handleSelectedPage(p)}
            className={`btn ${selectedPage === p && "btn-warning"}`}
            key={p}
          >
            {p}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Foods;
