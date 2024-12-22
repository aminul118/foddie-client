import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import coins from "../../src/assets/icons/coins.png";
import dollar from "../../src/assets/icons/dollar.png";
import moment from "moment";
import useAuth from "../hooks/useAuth";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { useState } from "react";

const FoodPurchases = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const date = format(new Date(), "dd MMM, yyyy");
  const time = moment().format("LTS");

  const [orderQuantity, setOrderQuantity] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  // Fetch Food Data
  const { data, isLoading, error } = useQuery({
    queryKey: ["foodData", id],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:5000/food/${id}`);
      return response.data;
    },
    enabled: !!id, // Ensures the query only runs if `id` exists
  });

  if (isLoading) return <Loading />;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  const {
    food_name,
    food_image,
    food_category,
    ingredients,
    price,
    quantity,
    addedBy,
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
    buingTime: time,
    food_id: id,
    orderQuantity,
  };

  // Handle Quantity Change
  const handleQuantity = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    if (value > 20) {
      setErrorMsg("* You cannot buy more than 20 foods.");
    } else if (value < 1) {
      setErrorMsg("* Order quantity must be at least 1.");
    } else {
      setErrorMsg("");
      setOrderQuantity(value);
    }
  };

  // Handle Order Submission
  const handleOrder = () => {
    if (orderQuantity < 1 || orderQuantity > 20) {
      return Swal.fire({
        icon: "warning",
        title: "Invalid Quantity",
        text: "Please choose a quantity between 1 and 20.",
      });
    }
    if (orderQuantity > quantity) {
      return Swal.fire({
        icon: "warning",
        title: "Invalid Quantity",
        text: "Please choose  quantity equal or less than Available Quantity ",
      });
    }

    axios
      .post("http://localhost:5000/order", newOrder)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your order has been placed successfully.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            navigate("/my-orders");
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: err.response.data,
          icon: "error",
        });
        // console.log(err.response.data);
      });
  };

  return (
    <div className="min-h-[calc(100vh-304px)] flex items-center">
      <div className="card bg-base-100 max-w-2xl mx-auto border p-8">
        <figure>
          <img
            className="w-[800px] h-96 rounded-xl object-cover"
            src={food_image}
            alt={food_name}
          />
        </figure>
        <div className="mt-3">
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
            <h2 className="card-title">{food_name}</h2>

            <p className="flex items-center gap-2">
              <img className="w-4 h-4" src={dollar} alt="" /> Price: ${price}
            </p>
            <p className="flex items-center gap-2">
              <img className="w-4 h-4" src={coins} alt="" />
              Available Quantity: {quantity}
            </p>
            {quantity === 0 && (
              <p className="text-red-500">
                * You can not buy this item. Because that this item is not
                available now
              </p>
            )}
            <p>Buyer Name: {buyerName}</p>
            <p>Buyer Email: {buyerEmail}</p>
            <p>Buying Date: {date}</p>
            <div className="flex items-center gap-2">
              <p>Order Quantity:</p>

              <input
                onChange={handleQuantity}
                type="number"
                min="1"
                max="20"
                placeholder="Quantity"
                className="focus:outline-none border focus:ring-1 ring-blue-400 rounded-lg px-2 py-1 w-32"
              />
              {errorMsg && <p className="text-red-500 ml-3">{errorMsg}</p>}
            </div>
          </div>
          <button
            onClick={handleOrder}
            className={`${
              quantity === 0 && "btn-disabled"
            } btn-warning btn w-full mt-3`}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodPurchases;
