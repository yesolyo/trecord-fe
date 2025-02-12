import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { http } from '../_http';
import { User } from '@/types/user';
import USER_API_KEY from './constants';

const getUser = async ({ q }: { q: string }): Promise<User> => {
  const url = `/api/v1/users/search?q=${q}`;
  const response: User = await http.get(url);

  return response;
};

const useUserQuery = ({ q }: { q: string }): UseQueryResult<User> => {
  return useQuery([USER_API_KEY.USER, { q }], () => getUser({ q }), {
    suspense: true,
    enabled: false,
  });
};

export default useUserQuery;
