import { FaEdit, FaTrash } from "react-icons/fa";
import Heading from "../../components/Heading";
import useAllFoods from "../../hooks/useAllFoods";
import Loading from "../../components/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AddedFoods = () => {
  const [foods, isLoading, refetch] = useAllFoods();
  const axiosSecure = useAxiosSecure();
  if (isLoading) return <Loading />;
  const handleDeleteFood = (food) => {
    // console.log(food);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/foods/${food._id}`).then(async (res) => {
          if (res.data.deletedCount > 0) {
            await refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${food.food_name} has been deleted.`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <Heading heading="Your Foods" />
      <div className="divider"></div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-lg ">
                <th>SI</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {foods.map((food, i) => (
                <tr key={food._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={food.food_image} alt={food.food_name} />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold">{food.food_name}</p>
                      </div>
                    </div>
                  </td>
                  <td>{food.quantity}</td>
                  <td>{food.price}$</td>
                  <th>
                    <Link
                      to={`/dashboard/update-food/${food._id}`}
                      className="btn bg-white text-red-600 "
                    >
                      <FaEdit />
                    </Link>
                    <button
                      onClick={() => {
                        handleDeleteFood(food);
                      }}
                      className="btn  ml-2 text-white bg-red-600 "
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddedFoods;
