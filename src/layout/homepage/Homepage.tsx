import { useEffect, useState } from 'react';
import './homepage.style.scss';
import { Link, useParams } from 'react-router-dom';
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

  interface userProps {
    userId: number;
    userName: string;
    profilePicture: string;
  }
  const UserCard = ({ userId, userName, profilePicture }: userProps) => {
    return (
      <Link to={`/profile/${userName}`} className='user_card'>
        <img className='profile_picture' src={profilePicture} alt={userName} />
        <p className='user_name'>{userName}</p>
      </Link>
    );
  };

  return (
    <main className='full-viewport-container'>
      <div className='card'>
        <div className='list_container'>
          {users?.map((user: any) => {
            const { id, name, profilepicture } = user;
            return (
              <UserCard
                userId={id}
                key={id}
                userName={name}
                profilePicture={profilepicture}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Homepage;
