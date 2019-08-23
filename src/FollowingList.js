import React from "react";

const FollowingList = props => {
  return (
    <React.Fragment>
      <h2>My followers</h2>
      <ul>
        {props.users.map((user, i) => (
          <div key={i} className="follower">
            <img src={user.avatar_url} alt={user.login} />
            <p>{user.login}</p>
          </div>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default FollowingList;
