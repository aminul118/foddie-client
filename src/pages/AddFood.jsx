import useAuth from "../hooks/useAuth";

const AddFood = () => {
  const { user } = useAuth();
  const handleAddFood = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const userName = user?.name;
    const email = user?.email;
 


    console.log(initialData);
  };
  return (
    <div>
      <h1 className="text-5xl font-bold py-6 text-center">Add Food</h1>
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
            name="name"
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
            type="text"
            name="image"
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
            name="category"
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
            placeholder="Origin"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg"
            required
          />
        </div>
        {/* Discription */}
        <div className="form-control col-span-2">
          <label htmlFor="name" className="label">
            <span className="label-text">Short Discription</span>
          </label>
          <textarea
            type="text"
            name="discription"
            placeholder="Short Discription"
            className="px-4 py-3 border focus:outline-none focus:ring-1 ring-blue-400 rounded-lg resize-none h-48"
            required
          />
        </div>
        <input
          className="btn col-span-2 btn-warning"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddFood;
