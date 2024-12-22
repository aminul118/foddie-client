import axios from "axios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateFood = () => {
  const { user } = useAuth();
  const food = useLoaderData();
  const {
    food_name,
    food_image,
    food_category,
    ingredients,
    origin,
    price,
    quantity,
    _id,
  } = food;

  console.log(food);
  const handleAddFood = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const userName = user?.displayName;
    const email = user?.email;

    // Split ingredients into an array safely
    initialData.ingredients = initialData.ingredients
      ? initialData.ingredients
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean)
      : [];

    initialData.addedBy = { userName, email };
    initialData.purchased_count = 0;

    console.log("Updated Data:", initialData);

    try {
      const res = await axios.put(
        `http://localhost:5000/food/${_id}`,
        initialData
      );
      console.log(res.data);

      Swal.fire({
        title: "Success!",
        text: "Food item updated successfully!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error updating food item:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to update food item.",
        icon: "error",
      });
    }
  };
  return (
    <div>
      <h1 className="text-5xl font-bold py-6 text-center">Update Food</h1>
      <form
        onSubmit={handleAddFood}
        className="card-body   rounded-lg grid lg:grid-cols-2 gap-4"
        data-aos="fade-left"
      >
        {/* Name of the food */}
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="food_name"
            defaultValue={food_name}
            placeholder="Enter Food Name"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg"
            required
          />
        </div>
        {/* Image URL */}
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="url"
            name="food_image"
            defaultValue={food_image}
            placeholder="Image URL"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg"
            required
          />
        </div>
        {/* Food Category */}
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Food Category</span>
          </label>
          <input
            type="text"
            name="food_category"
            defaultValue={food_category}
            placeholder="Food Category"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg"
            required
          />
        </div>
        {/* Food Quantity */}
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="text"
            name="quantity"
            defaultValue={quantity}
            placeholder="Quantity"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg"
            required
          />
        </div>
        {/* Price */}
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            defaultValue={price}
            placeholder="Price"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg"
            required
          />
        </div>
        {/* Food Origin */}
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Origin</span>
          </label>
          <input
            type="text"
            name="origin"
            defaultValue={origin}
            placeholder="Origin"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg"
            required
          />
        </div>
        {/* Ingredients */}
        <div className="form-control col-span-2">
          <label htmlFor="name" className="label">
            <span className="label-text">Ingredients</span>
          </label>
          <textarea
            type="text"
            name="ingredients"
            defaultValue={ingredients}
            placeholder="Ingredients"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg resize-none h-48"
            required
          />
        </div>
        <input
          className="btn col-span-2 btn-warning"
          type="submit"
          value="Update Item"
        />
      </form>
    </div>
  );
};

export default UpdateFood;
