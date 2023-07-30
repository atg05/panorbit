export interface UserInterface {
  id: number;
  name: string;
  phone: string;
  profilepicture: string;
  username: string;
  email: string;
  website: string;
  address: {
    city: string;
    geo: { lat: string; lng: string };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
}
