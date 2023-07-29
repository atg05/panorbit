export interface UserInterface {
  id: number;
  name: string;
  phone: string;
  profilepicture: string;
  username: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
}
