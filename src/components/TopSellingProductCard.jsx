import { Link } from "react-router-dom";

const TopSellingProductCard = ({ food }) => {
  const { food_image, food_name, purchased_count, food_category, _id } = food;
  // console.log(food);
  return (
    <div className="w-full  h-[350px] relative overflow-hidden group cursor-pointer rounded-md">
      {/*  image  */}
      <img
        src={food_image}
        alt="animated_card"
        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
      />

      {/*  text  */}
      <div className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col bg-gradient-to-b from-[rgb(0,0,0,0.01)] to-[rgb(0,0,0,0.7)] ">
        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">
          {food_name}
        </h1>
        <p className=" font-bold text-white text-center capitalize">
          Category: {food_category}
        </p>

        <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">
          Purchased: {purchased_count}
        </p>
        <Link
          to={`/food-details/${_id}`}
          className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]"
        >
          View Details
        </Link>
      </div>

      {/*  bottom shadow  */}
      <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.000)] to-[rgb(0,0,0,0.7)] h-[100%] absolute bottom-0 left-0 right-0"></div>
    </div>
  );
};

export default TopSellingProductCard;
