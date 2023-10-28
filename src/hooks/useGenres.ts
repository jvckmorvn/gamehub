import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import time from "../utils/time";
import { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>('/genres');

function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: time["24h"]
  });
}

export default useGenres;
