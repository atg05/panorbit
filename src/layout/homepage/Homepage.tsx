import { useEffect, useState } from 'react';
import './homepage.style.scss';
import { ApiStatus, ERROR, IDLE, SUCCESS } from '@/api/constants/apiStatus';
import withAsync from '@/helpers/withAsync';
import { fetchUser } from '@/api/userApi';

const useFetchUser = () => {
  const [users, setUsers] = useState<any>();
  const [fetchUserStatus, setFetchUserStatus] = useState<ApiStatus>(IDLE);

  const initFetchUsers = async () => {
    const { response, error } = await withAsync(() => fetchUser());

    if (error) {
      setFetchUserStatus(ERROR);
    } else if (response) {
      const { users } = response.data;
      setUsers(users);
      setFetchUserStatus(SUCCESS);
    }
  };

  return {
    users,
    fetchUserStatus,
    initFetchUsers,
  };
};

const Homepage = () => {
  const { users, fetchUserStatus, initFetchUsers } = useFetchUser();

  console.log(users, fetchUserStatus);
  useEffect(() => {
    initFetchUsers();
  }, []);

  return (
    <main className='full-viewport-container'>
      <div className='table_container'>
        Table Container
        {users?.map((user: any) => {
          return <p>{user.name}</p>;
        })}
      </div>
    </main>
  );
};

export default Homepage;
