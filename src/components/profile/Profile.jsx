import React from 'react';

const Profile = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <img
        src={`${process.env.PUBLIC_URL}/luyolo.jpg`}  {/* This points to the image in the public folder */}
        alt="Luyolo Mntuyedwa"
        style={{ width: "300px", height: "auto" }}     {/* You can adjust the width/height to your needs */}
      />
    </div>
  );
};

export default Profile;

