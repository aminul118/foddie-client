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
import { Helmet } from "react-helmet-async";

const FoodPurchases = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const date = format(new Date(), "dd MMM, yyyy");
  const time = moment().format("LTS");

  const [orderQuantity, setOrderQuantity] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  /** 📦 Fetch Food Data **/
  const { data, isLoading, error } = useQuery({
    queryKey: ["foodData", id],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/food/${id}`
      );
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

  const buyerName = user?.displayName || "Guest";
  const buyerEmail = user?.email || "guest@example.com";

  /** 📦 Create New Order Object **/
  const newOrder = {
    buyerName,
    buyerEmail,
    food_name,
    food_image,
    food_category,
    price,
    addedBy,
    buyingDate: date,
    buyingTime: time,
    food_id: id,
    orderQuantity,
  };

  /** 📦 Handle Quantity Change **/
  const handleQuantity = (e) => {
    const value = parseInt(e.target.value, 10) || 0;

    if (value > 20) {
      setErrorMsg("* You cannot buy more than 20 items.");
    } else if (value < 1) {
      setErrorMsg("* Order quantity must be at least 1.");
    } else {
      setErrorMsg("");
      setOrderQuantity(value);
    }
  };

  /** 📦 Handle Order Submission **/
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
        title: "Insufficient Stock",
        text: "The requested quantity exceeds available stock.",
      });
    }

    axios
      .post(`${import.meta.env.VITE_BASE_URL}/order`, newOrder, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 201) {
          Swal.fire({
            title: "Success!",
            text: "Your order has been placed successfully.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            navigate("/dashboard/my-orders");
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: err.response?.data || "Failed to place order.",
          icon: "error",
        });
        // console.log("ERROR:", err);
      });
  };

  /** 📦 JSX UI **/
  return (
    <section className="min-h-[calc(100vh-304px)] flex items-center">
      <Helmet>
        <title>Food Purchases || Foddie</title>
      </Helmet>
      <div className="card bg-base-100 max-w-2xl mx-auto border p-8 rounded-lg shadow-md">
        {/* Food Image */}
        <figure>
          <img
            className="w-[800px] h-96 rounded-xl object-cover"
            src={food_image}
            alt={food_name}
          />
        </figure>

        {/* Food Details */}
        <div className="mt-5">
          {/* Ingredients */}
          <div className="flex gap-2 flex-wrap mt-2">
            {ingredients?.map((ingredient, i) => (
              <div
                key={i}
                className="badge badge-outline hover:cursor-pointer hover:bg-blue-500 hover:text-white"
              >
                {ingredient}
              </div>
            ))}
          </div>

          {/* Details Section */}
          <div className="space-y-2 mt-4">
            <h2 className="card-title text-2xl">{food_name}</h2>
            <p className="flex items-center gap-2">
              <img className="w-4 h-4" src={dollar} alt="Price" />
              Price: ${price}
            </p>
            <p className="flex items-center gap-2">
              <img className="w-4 h-4" src={coins} alt="Quantity" />
              Available Quantity: {quantity}
            </p>
            {quantity === 0 && (
              <p className="text-red-500">
                * This item is currently out of stock.
              </p>
            )}
            <p>Buyer Name: {buyerName}</p>
            <p>Buyer Email: {buyerEmail}</p>
            <p>Buying Date: {date}</p>

            {/* Order Quantity */}
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

          {/* Order Button */}
          <button
            onClick={handleOrder}
            className={`${
              quantity === 0 && "btn-disabled"
            } btn-warning btn w-full mt-4`}
            disabled={quantity === 0}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodPurchases;
