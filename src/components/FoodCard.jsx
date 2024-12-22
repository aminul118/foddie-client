import { CiForkAndKnife } from "react-icons/ci";
import coins from "../../src/assets/icons/coins.png";
import dollar from "../../src/assets/icons/dollar.png";
import cart from "../../src/assets/icons/shopping-cart.png";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  //   console.log(food);
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
      <div className="card bg-base-100  border ">
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
          <Link to={`/food-details/${_id}`} className="btn">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
