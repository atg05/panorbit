import { ProfileTabInterface } from './ProfileTab';
import { UserInterface } from './User';

export interface RootState_Iterface {
  user: { activeUserDetails: UserInterface; userDetails: UserInterface[] };
  profile: { activeTab: ProfileTabInterface };
}
