import React from "react";
import FollowingList from "./FollowingList.js";
import Button from "./Button.js";

const Profile = props => {
  return (
    <div className="profile">
      <h2>Hello {props.login}</h2>
      <img src={props.avatar_url} alt={props.login} />
      <Button value="log out" handleClick={props.handleLogOut} />
      <FollowingList users={props.userFollowers} />
    </div>
  );
};

export default Profile;
