import { useSelector } from 'react-redux';
import './userDetails.scss';
import { RootState_Iterface } from '@/types/RootState';
import MapComponent from '../MapComponent';

type dataWithLabelProps = {
  label: string;
  value: string;
};
const DataWithLabel = ({ label, value }: dataWithLabelProps) => {
  return (
    <div className='data'>
      <p className='label'>{label} :</p> <p className='value'>{value}</p>
    </div>
  );
};

const UserDetails = () => {
  const { activeUserDetails } = useSelector(
    (state: RootState_Iterface) => state.user
  );

  const {
    id,
    name: userName,
    phone,
    profilepicture,
    username,
    email,
    website,
    address,
    company,
  } = activeUserDetails;

  const { city, geo, street, suite, zipcode } = address;
  const { bs, catchPhrase, name: companyName } = company;
  const { lat, lng } = geo;

  const pesonalDetails = [
    { label: 'Username', value: username },
    { label: 'e-mail', value: email },
    { label: 'Phone', value: phone },
    { label: 'Website', value: website },
  ];

  const companyDetails = [
    { label: 'Name', value: companyName },
    { label: 'catchphrase', value: catchPhrase },
    { label: 'bs', value: bs },
  ];
  const addressDetails = [
    { label: 'Street', value: street },
    { label: 'Suite', value: suite },
    { label: 'City', value: city },
    { label: 'Zipcode', value: zipcode },
  ];

  return (
    <section className='user-details'>
      <div className='left-container'>
        <div className='user_info'>
          <img
            src={profilepicture}
            alt={username}
            className='profile_picture'
          />
          <h6>{activeUserDetails.name}</h6>
          <section className='personal_info'>
            {pesonalDetails.map((detail) => {
              const { label, value } = detail;
              return <DataWithLabel label={label} value={value} />;
            })}
          </section>
        </div>
        <section className='personal_info'>
          <h6>Company</h6>
          {companyDetails.map((detail) => {
            const { label, value } = detail;
            return <DataWithLabel label={label} value={value} />;
          })}
        </section>
      </div>
      <section className='address_info'>
        <h6>Address</h6>
        {addressDetails.map((detail) => {
          const { label, value } = detail;
          return <DataWithLabel label={label} value={value} />;
        })}
        <MapComponent latitude={parseInt(lat)} longitude={parseInt(lng)} />
      </section>
      <div className='floating-chat'> </div>
    </section>
  );
};

export default UserDetails;
