import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import time from "../utils/time";

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

function usePlatforms() {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: time["24h"]
  });
}

export default usePlatforms;
