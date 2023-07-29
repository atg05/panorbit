import { ApiStatus, ERROR, IDLE, SUCCESS } from '@/api/constants/apiStatus';
import { fetchUser } from '@/api/userApi';
import withAsync from '@/helpers/withAsync';
import { userActions } from '@/store/user';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useFetchUser = () => {
  const [users, setUsers] = useState<any>();
  const [fetchUserStatus, setFetchUserStatus] = useState<ApiStatus>(IDLE);

  const dispatch = useDispatch();

  const initFetchUsers = async () => {
    const { response, error } = await withAsync(() => fetchUser());

    if (error) {
      setFetchUserStatus(ERROR);
    } else if (response) {
      const { users } = response.data;
      setUsers(users);
      dispatch(userActions.setUserLists(users));
      setFetchUserStatus(SUCCESS);
    }
  };

  useEffect(() => {
    initFetchUsers();
  }, []);

  return {
    users,
    fetchUserStatus,
    initFetchUsers,
  };
};

export default useFetchUser;
