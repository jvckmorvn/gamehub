import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import time from "../utils/time";

const apiClient = new ApiClient<Genre>('/genres');

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: time["24h"]
  });
}

export default useGenres;
