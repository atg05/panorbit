import { useEffect, useState } from 'react';
import './profile.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/icons/Menu.svg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState_Iterface } from '@/types/RootState';

export default function Profile() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const { activeUserDetails } = useSelector(
    (state: RootState_Iterface) => state.user
  );

  useEffect(() => {
    if (!activeUserDetails) {
    }
  }, [activeUserDetails]);

  const tabNavigation = [
    { id: 'profile', label: 'Profile' },
    { id: 'posts', label: 'Posts' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'todo', label: 'ToDo' },
  ];

  return (
    <div className='profile_container'>
      <aside
        className={
          showSidebar ? 'side_bar visible slide-in' : 'side_bar slide-out'
        }
      >
        {tabNavigation.map((navigation, index) => {
          return (
            <span
              className={
                index !== tabNavigation.length - 1
                  ? 'tab_link active border-bottom'
                  : 'tab_link'
              }
              key={navigation.id}
            >
              {navigation.label}
              <span className='circle'>
                &gt;
                <span className='rectangle' />
              </span>
            </span>
          );
        })}
      </aside>
      <nav>
        <MenuIcon
          className={showSidebar ? 'icon inverted' : 'icon'}
          onClick={() => {
            setShowSidebar((state) => !state);
          }}
        />
      </nav>
    </div>
  );
}
