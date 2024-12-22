import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Loading from "../components/Loading";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const MyOrders = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Fetch orders
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-orders", user?.email],
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:5000/my-orders?email=${user?.email}`
      );
      return result.data;
    },
    enabled: !!user?.email, // Prevents the query if email is not available
  });

  // Delete an order
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`http://localhost:5000/order/${id}`);
    },
    onSuccess: (data, id) => {
      // Optimistically update the cache
      queryClient.setQueryData(["my-orders", user?.email], (oldData) =>
        oldData.filter((order) => order._id !== id)
      );
      Swal.fire({
        title: "Deleted!",
        text: "The order has been successfully deleted.",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
    onError: (error) => {
      console.error("Failed to delete the order:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to delete the order. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th>SI</th>
            <th>Food Name & Category</th>
            <th>Buyer Info</th>
            <th>Order Date & Time</th>
            <th>Food Owner</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {orders?.map((food, i) => (
            <tr key={food._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={food.food_image} alt={food.food_name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{food.food_name}</div>
                    <div className="text-sm opacity-50">
                      {food.food_category}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {food.buyerName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {food.buyerEmail}
                </span>
              </td>
              <td>
                {food.buingDate} <br />
                <span className="badge badge-ghost badge-sm">
                  {food.buingTime}
                </span>
              </td>
              <td>
                {food.addedBy.userName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {food.addedBy.email}
                </span>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(food._id)}
                  className="text-3xl text-red-500"
                >
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
