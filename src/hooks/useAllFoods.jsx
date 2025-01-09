import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllFoods = (search = "", sort ) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: foods = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["foods", search, sort],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/all-foods?search=${search}&sort=${sort}`
      );
      return res.data;
    },
  });
  return [foods, isLoading, refetch];
};

export default useAllFoods;
