import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";
import SectionBanner from "../components/SectionBanner";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const MyFoods = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [deleting, setDeleting] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["myFoods", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/foods?email=${user?.email}`);
      return response.data;
    },
    enabled: !!user?.email,
  });

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      setDeleting(true);
      const previousData = queryClient.getQueryData(["myFoods", user?.email]);

      queryClient.setQueryData(["myFoods", user?.email], (old) =>
        old.filter((food) => food._id !== id)
      );

      try {
        const response = await axiosSecure.delete(
          `/food/${id}?email=${user.email}`
        );
        if (response.data.deletedCount === 1) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } else {
          throw new Error("Delete operation failed");
        }
      } catch (err) {
        queryClient.setQueryData(["myFoods", user?.email], previousData);
        Swal.fire("Error!", "Could not delete the item.", "error");
      } finally {
        setDeleting(false);
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <section>
      <Helmet>
        <title>My Food || Foddie</title>
      </Helmet>
      {/* Section Banner */}
      <SectionBanner
        image="https://i.ibb.co.com/qJw15rr/Brown-black-Modern-Korean-Food-Banner.png"
        Heading="My Foods"
      />

      {data.length === 0 ? (
        <h1 className="text-5xl font-bold py-8 min-h-[calc(100vh-560px)] flex justify-center items-center">
          You have not added any food yet
        </h1>
      ) : (
        <h1 className="text-5xl font-bold py-8 text-center">
          You added {data?.length} Foods
        </h1>
      )}

      {/* Food Table */}
      {data.length > 0 && (
        <div className="overflow-x-auto pb-8 2xl:pb-14">
          <table className="table-auto w-full border-collapse border border-gray-300 text-center">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">SI</th>
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Origin</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {data?.map((food, i) => (
                <tr key={food._id} className="hover:bg-gray-100">
                  <td className="p-2 border">{i + 1}</td>
                  <td className="p-2 border">
                    <img
                      className="w-10 h-10 rounded-full mx-auto"
                      src={food.food_image || "/default-image.png"}
                      alt="Food"
                      onError={(e) => (e.target.src = "/default-image.png")}
                    />
                  </td>
                  <td className="p-2 border">{food.food_name}</td>
                  <td className="p-2 border">{food.food_category}</td>
                  <td className="p-2 border">{food.origin}</td>
                  <td className="p-2 border">${food.price}</td>
                  <td className="p-2 border">{food.quantity}</td>
                  <td className="p-2 border text-xl text-red-500">
                    <Link to={`/update-food/${food._id}`}>
                      <button>
                        <TbEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="ml-3"
                      disabled={deleting}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default MyFoods;
