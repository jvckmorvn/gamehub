import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api-client';
import time from '../utils/time';
import Platform from '../entities/Platform';

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

function usePlatforms() {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: time['24h']
  });
}

export default usePlatforms;
