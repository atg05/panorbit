import { RootState_Iterface } from '@/types/RootState';
import { useSelector } from 'react-redux';
import './header.style.scss';
import { useState } from 'react';

const Header = () => {
  const { activeTab } = useSelector(
    (state: RootState_Iterface) => state.profile
  );
  const { activeUserDetails } = useSelector(
    (state: RootState_Iterface) => state.user
  );

  const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <nav className='header'>
      {/* <MenuIcon
          className={showSidebar ? 'icon inverted' : 'icon'}
          onClick={() => {
            setShowSidebar((state) => !state);
          }}
        /> */}
      <p className='current-tab-name'>{activeTab.label}</p>

      <div
        className='profile_action'
        onClick={() => {
          setToggleDropDown((state) => !state);
        }}
      >
        <img
          src={activeUserDetails.profilepicture}
          className='profile_picture'
          alt={activeUserDetails.name}
        />
        <p className='user_name'>{activeUserDetails.name}</p>
      </div>
      <div className={toggleDropDown ? 'drop-down' : 'drop-down hide'}>
        <img
          src={activeUserDetails.profilepicture}
          className='profile-picture'
          alt={activeUserDetails.name}
        />
        <div className='content'>
          <h6 className='user-name'>{activeUserDetails.name}</h6>
          <p className='user_name'>{activeUserDetails.email}</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
