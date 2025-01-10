import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MyOrders = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  /** 📦 Fetch Orders */
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-orders", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/my-orders?email=${user?.email}`);
      return result.data;
    },
    enabled: !!user?.email, // Prevents the query if email is not available
  });

  /** 📦 Delete Order Mutation */
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return await axiosSecure.delete(`/order/${id}`);
    },
    onSuccess: (_, id) => {
      // Remove the deleted order from cache
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
      // console.error("Failed to delete the order:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to delete the order. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });

  /** 📦 Handle Delete Confirmation */
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
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

  /** 📦 Loading & Error States */
  if (isLoading) return <Loading />;
  if (isError) {
    return (
      <div className="text-red-500 text-center mt-5">
        Error: {error.message}
      </div>
    );
  }

  /** 📦 Render Orders */
  return (
    <section className="overflow-x-auto p-4">
      <Helmet>
        <title>My Orders || Foddie</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4 text-center">My Orders</h2>
      {orders?.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300 ">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">SI</th>
              <th className="p-2 border">Food Details</th>
              <th className="p-2 border">Buyer Info</th>
              <th className="p-2 border">Order Date & Time</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Food Owner</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {orders?.map((food, i) => (
              <tr key={food._id} className="hover:bg-gray-50">
                <th className="p-2 border text-center">{i + 1}</th>
                <td className="p-2 border">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={food.food_image}
                          alt={food.food_name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{food.food_name}</div>
                      <div className="text-sm text-gray-500">
                        {food.food_category}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-2 border text-center">
                  {food.buyerName}
                  <br />
                  <span className="text-xs text-gray-500">
                    {food.buyerEmail}
                  </span>
                </td>
                <td className="p-2 border text-center">
                  {food.buyingDate}
                  <br />
                  <span className="text-xs text-gray-500">
                    {food.buyingTime}
                  </span>
                </td>
                <td className="p-2 border text-center">{food.orderQuantity}</td>
                <td className="p-2 border text-center">
                  {food.addedBy.userName}
                  <br />
                  <span className="text-xs text-gray-500">
                    {food.addedBy.email}
                  </span>
                </td>
                <td className="p-2 border text-center">
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="text-3xl text-red-500 hover:text-red-700"
                    title="Delete Order"
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default MyOrders;
