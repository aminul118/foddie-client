import { CiForkAndKnife } from "react-icons/ci";
import coins from "../../src/assets/icons/coins.png";
import dollar from "../../src/assets/icons/dollar.png";
import cart from "../../src/assets/icons/shopping-cart.png";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const FoodCard = ({ food }) => {
  //   console.log(food);
  const { darkMode } = useTheme();
  const {
    food_name,
    food_image,
    food_category,
    ingredients,
    origin,
    price,
    purchased_count,
    quantity,
    addedBy,
    _id,
  } = food;

  return (
    <div>
      <div
        className={`${
          darkMode ? "bg-slate-800 shadow-xl" : "border"
        } card bg-base-100   `}
        data-aos="fade-up"
      >
        <figure>
          <img
            className="w-full h-64 object-cover lg:h-72"
            src={food_image}
            alt={food_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{food_name}</h2>
          <p className="flex items-center gap-2">
            <CiForkAndKnife />
            Category: {food_category}
          </p>
          <p className="flex items-center gap-2">
            <img className="w-4 h-4" src={dollar} alt="" /> Price: ${price}
          </p>
          <p className="flex items-center gap-2">
            <img className="w-4 h-4" src={coins} alt="" /> Quantity: {quantity}
          </p>
          <Link
            to={`/food-details/${_id}`}
            className={`${darkMode ? "btn-warning " : ""} btn`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
