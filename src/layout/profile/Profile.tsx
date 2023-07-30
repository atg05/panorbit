import { useEffect, useState } from 'react';
import './profile.style.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/icons/Menu.svg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState_Iterface } from '@/types/RootState';
import useQueryParam from '@/hooks/useQueryParm';
import Tab from '@/components/Tab';
import { profileTabEnum } from '@/constants/profileConstatnt';
import { ProfileTabInterface } from '@/types/ProfileTab';
import { profileActions } from '@/store/profile';
import Header from '@/components/header/Header';
import UserDetails from '@/components/userDetails/UserDetails';

export default function Profile() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { activeUserDetails } = useSelector(
    (state: RootState_Iterface) => state.user
  );

  useEffect(() => {
    if (!activeUserDetails) {
    }
  }, [activeUserDetails]);

  const handleTab = (navigationDetails: ProfileTabInterface) => {
    dispatch(profileActions.setActiveTab(navigationDetails));
  };

  const { activeTab } = useSelector(
    (state: RootState_Iterface) => state.profile
  );

  console.log(activeUserDetails);
  const tabNavigation = [
    { id: profileTabEnum.PROFILE, label: 'Profile' },
    { id: profileTabEnum.POST, label: 'Posts' },
    { id: profileTabEnum.GALLERY, label: 'Gallery' },
    { id: profileTabEnum.TODO, label: 'ToDo' },
  ];

  return (
    <div className='profile_container'>
      <aside className={showSidebar ? 'side_bar ' : 'side_bar'}>
        {tabNavigation.map((navigation, index) => {
          return (
            <span
              className={
                activeTab.id === navigation.id
                  ? index !== tabNavigation.length - 1
                    ? 'tab_link active border-bottom'
                    : 'tab_link active'
                  : index !== tabNavigation.length - 1
                  ? 'tab_link border-bottom'
                  : 'tab_link'
              }
              key={navigation.id}
              onClick={() => {
                handleTab(navigation);
              }}
            >
              {navigation.label}
              <span className='circle'>
                &gt;
                <span className='circle2' />
                <span className='circle3' />
              </span>
            </span>
          );
        })}
      </aside>
      <div className='tab-container'>
        <Header />
        <Tab>
          <UserDetails />
        </Tab>
      </div>
    </div>
  );
}
