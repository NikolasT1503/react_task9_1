import React from "react";

 const ProfileDetails = (props) => {
    const user = props.resource.user.read();
    return (
      <div>
        <h1>{user.name}</h1>
        <ul>
          <li>Имя: {user.username}</li>
          <li>Почта: {user.email}</li>
          <li>Телефон: {user.phone}</li>
        </ul>
      </div>
    );
  };

  export default ProfileDetails;