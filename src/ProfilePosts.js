import React from "react";
import { NavLink } from "react-router-dom";


const ProfilePosts = (props) => {
    const posts = props.resource.posts.read();
    return (
      <div>
        <h1>Последние посты</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
                <NavLink to={{pathname: "/posts", search: "?userId="+post.userId}}>{post.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default ProfilePosts;