import { useEffect, useState } from 'react';
import './homepage.style.scss';
import { Link, useParams } from 'react-router-dom';
import { ApiStatus, ERROR, IDLE, SUCCESS } from '@/api/constants/apiStatus';
import withAsync from '@/helpers/withAsync';
import { fetchUser } from '@/api/userApi';
import { useSelector, useDispatch } from 'react-redux';
import { RootState_Iterface } from '@/types/RootState';
import { userActions } from '@/store/user';
import slugify from 'slugify';
import { UserInterface } from '@/types/User';
import useFetchUser from '@/hooks/useFetchUser';

const Homepage = () => {
  const { users, fetchUserStatus, initFetchUsers } = useFetchUser();
  const dispatch = useDispatch();

  useEffect(() => {
    initFetchUsers();
  }, []);

  return (
    <main className='full-viewport-container'>
      <div className='card'>
        <div className='list_container'>
          {users?.map((user: any) => {
            const { id, name, profilepicture } = user;
            return (
              <Link
                key={id}
                to={`/profile/${name}`}
                className='user_card'
                onClick={() => {
                  dispatch(userActions.setActiveUserDetails(user));
                }}
              >
                <img
                  className='profile_picture'
                  src={profilepicture}
                  alt={name}
                />
                <p className='user_name'>{name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Homepage;
