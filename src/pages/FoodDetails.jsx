import { useLoaderData } from "react-router-dom";
import coins from "../../src/assets/icons/coins.png";
import dollar from "../../src/assets/icons/dollar.png";
import cart from "../../src/assets/icons/shopping-cart.png";
import { CiForkAndKnife } from "react-icons/ci";
const FoodDetails = () => {
  const food = useLoaderData();
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
  console.log(food);
  return (
    <div className="min-h-[calc(100vh-304px)] flex items-center">
      <div className="card bg-base-100 max-w-2xl mx-auto border p-8 ">
        <figure>
          <img
            className="w-[800px] h-96 rounded-xl object-cover"
            src={food_image}
            alt="Shoes"
          />
        </figure>
        <div className=" mt-3">
          <div className="flex gap-2 flex-wrap mt-2">
            {ingredients.map((ingredient, i) => (
              <div className="badge badge-outline hover:cursor-pointer hover:bg-blue-500 hover:text-base-100">
                {ingredient}
              </div>
            ))}
          </div>
          <div className="space-y-1 mt-3">
            <h2 className="card-title ">{food_name}</h2>
            <p className="flex items-center gap-2">
              <CiForkAndKnife />
              Category: {food_category}
            </p>
            <p className="flex items-center gap-2">
              <CiForkAndKnife />
              Origin: {origin}
            </p>

            <p className="flex items-center gap-2">
              <img className="w-4 h-4" src={dollar} alt="" /> Price: ${price}
            </p>
            <p className="flex items-center gap-2">
              <img className="w-4 h-4" src={coins} alt="" /> Quantity:{" "}
              {quantity}
            </p>
            <p className="flex items-center gap-2">
              <img className="w-4 h-4" src={coins} alt="" /> Purchased:
              {purchased_count}
            </p>
          </div>
          <button className="btn-warning btn w-full mt-3">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
