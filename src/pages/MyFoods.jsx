import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";
import SectionBanner from "../components/SectionBanner";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyFoods = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, error } = useQuery({
    queryKey: ["myFoods", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/foods?email=${user?.email}`);
      return response.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  // console.log(data);

  return (
    <div>
      {/* Section Banner */}
      <SectionBanner
        image="https://i.ibb.co.com/qJw15rr/Brown-black-Modern-Korean-Food-Banner.png"
        Heading="My Foods"
      />
      <h1 className="text-center text-5xl font-bold py-8">
        You added {data?.length} Foods
      </h1>

      {/* Food Table */}
      {data.length > 0 ? (
        <div className="overflow-x-auto pb-8 2xl:pb-14">
          <table className="table-auto w-full border-collapse border border-gray-300 text-center">
            {/* Table Header */}
            <thead className="">
              <tr className="bg-gray-200 ">
                <th className="p-2 border">SI</th>
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Origin</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Edit</th>
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
                      src={food.food_image}
                      alt=""
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyFoods;
