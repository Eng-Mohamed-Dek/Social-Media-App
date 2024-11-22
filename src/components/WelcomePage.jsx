import React, { useState } from "react";
import logo from "../Images/ALpha Media.png";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

const WelcomePage = ({ user, setUsername }) => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  return (
    <>
      <header>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <button onClick={() => setUsername('')}>Log Out</button>
        </div>
      </header>
      <h1>Let`s Post Your Pictures</h1>
      <p>What`s on Your Mind <b>{user}!</b></p>
      <CreatePost setPosts={setPosts} posts={posts} user={user}/>
      <Posts Posts={posts}/>
    </>
  );
};

export default WelcomePage;
