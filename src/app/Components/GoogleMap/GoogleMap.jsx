import React from 'react';

const GoogleMap = () => {
  return (
    <div className='w-full h-[450px]'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5406.121386127943!2d7.904507!3d47.352213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479031ca6a1373bf%3A0x3607bfb957a79e7!2sFrohburgstrasse%2010%2C%204600%20Olten!5e0!3m2!1sen!2sch!4v1726657992406!5m2!1sen!2sch"
        width="100%" 
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
