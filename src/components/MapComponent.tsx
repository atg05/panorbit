import React from 'react';

interface MapComponentProps {
  latitude: number;
  longitude: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude }) => {
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0.1!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDIxJzQ5LjciTiAwwrAxMCcwNy43IkU!5e0!3m2!1sen!2sus!4v1627811861033!5m2!1sen!2sus`;

  return (
    <div className='map'>
      <iframe
        title='Map'
        width='100%'
        height='400'
        frameBorder='0'
        style={{ border: 0 }}
        allowFullScreen={false}
        src={googleMapsUrl}
        loading='lazy'
      />
      <div>
        <p>Lat</p>
      </div>
    </div>
  );
};

export default MapComponent;
