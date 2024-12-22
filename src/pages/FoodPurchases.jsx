import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import coins from "../../src/assets/icons/coins.png";
import dollar from "../../src/assets/icons/dollar.png";
import { CiForkAndKnife } from "react-icons/ci";
import useAuth from "../hooks/useAuth";
import { format, compareAsc } from "date-fns";
import Swal from "sweetalert2";

const FoodPurchases = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const date = format(new Date(), "dd MMM, yyyy");

  const { data, isLoading, error } = useQuery({
    queryKey: ["foodData", id],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:5000/food/${id}`);
      return response.data;
    },
    enabled: !!id, // Ensures the query only runs if `id` exists
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  console.log(data);

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
  } = data;
  const buyerName = user?.displayName;
  const buyerEmail = user?.email;
  const newOrder = {
    buyerName,
    buyerEmail,
    food_name,
    food_image,
    food_category,
    price,
    addedBy,
    buingDate: date,
    food_id: id,
  };

  const handleOrder = () => {
    axios.post("http://localhost:5000/order", newOrder).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Place order successfully!",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="min-h-[calc(100vh-304px)] flex items-center">
      <div className="card bg-base-100 max-w-2xl mx-auto border p-8 ">
        <figure>
          <img
            className="w-[800px] h-96 rounded-xl object-cover"
            src={food_image}
            alt={food_name}
          />
        </figure>
        <div className=" mt-3">
          <div className="flex gap-2 flex-wrap mt-2">
            {ingredients.map((ingredient, i) => (
              <div
                key={i}
                className="badge badge-outline hover:cursor-pointer hover:bg-blue-500 hover:text-base-100"
              >
                {ingredient}
              </div>
            ))}
          </div>
          <div className="space-y-1 mt-3">
            <h2 className="card-title ">{food_name}</h2>

            <p className="flex items-center gap-2">
              <img className="w-4 h-4" src={dollar} alt="" /> Price: ${price}
            </p>
            <p className="flex items-center gap-2">
              <img className="w-4 h-4" src={coins} alt="" /> Quantity:
              {quantity}
            </p>
            <p>Buyer Name: {buyerName} </p>
            <p>Buyer Email: {buyerEmail} </p>
            <p>Buing Date: {date}</p>
          </div>
          <button onClick={handleOrder} className="btn-warning btn w-full mt-3">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodPurchases;
