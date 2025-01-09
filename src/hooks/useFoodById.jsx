import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFoodById = (id) => {
  const axiosSecure = useAxiosSecure();

  const { data: food = {}, isLoading } = useQuery({
    queryKey: ["indivisual-food", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/food/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
  return [food, isLoading];
};

export default useFoodById;
