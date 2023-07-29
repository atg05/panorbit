import { UserInterface } from './User';

export interface RootState_Iterface {
  user: { activeUserDetails: UserInterface; userDetails: UserInterface[] };
}
