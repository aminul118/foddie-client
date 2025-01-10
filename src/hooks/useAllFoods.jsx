import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllFoods = (search = "", sort = "asc", selectedPage, foodPerPage) => {
  const axiosPublic = useAxiosPublic();
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["foods", search, sort, selectedPage, foodPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/all-foods?search=${search}&sort=${sort}&selectedPage=${selectedPage}&foodPerPage=${foodPerPage}`
      );
      return res.data;
    },
  });
  return [data, isLoading, refetch];
};

export default useAllFoods;
