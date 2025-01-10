import { useParams } from "react-router-dom";
import useFoodById from "../hooks/useFoodById";
import { Helmet } from "react-helmet-async";

const UpdateFood = () => {
  const { id } = useParams();
  // console.log(id);
  const [food] = useFoodById(id);
  const { food_name, food_image, food_category, quantity, price, origin } =
    food;
  // console.log(food);
  const handleUpdateFood = () => {
    console.log();
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 ">
      <Helmet>
        <title>Update Food || Foddie</title>
      </Helmet>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Update Food
      </h1>
      <form
        onSubmit={handleUpdateFood}
        className="rounded-lg  grid grid-cols-1 md:grid-cols-2 gap-6 "
      >
        {/* Food Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="food_name"
            defaultValue={food_name}
            placeholder="Enter Food Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block  font-medium mb-1 ">Image URL</label>
          <input
            type="url"
            name="food_image"
            defaultValue={food_image}
            placeholder="Enter Image URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Food Category */}
        <div>
          <label className="block  font-medium mb-1">Food Category</label>
          <input
            type="text"
            name="food_category"
            defaultValue={food_category}
            placeholder="Enter Food Category"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block  font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            defaultValue={quantity}
            placeholder="Enter Quantity"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block  font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={price}
            placeholder="Enter Price"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Origin */}
        <div>
          <label className="block font-medium mb-1">Origin</label>
          <input
            type="text"
            name="origin"
            defaultValue={origin}
            placeholder="Enter Origin"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Ingredients */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Ingredients</label>
          <textarea
            name="ingredients"
            placeholder="Enter Ingredients (one per line)"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center">
          <button type="submit" className="w-full btn btn-warning">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFood;
