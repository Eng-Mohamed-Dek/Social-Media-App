import React, { useState } from "react";
import banner from "../images/about-banner.png";

const CreatePost = ({setPosts, posts, user}) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handlePosting = (e) => {
    e.preventDefault();  

    const newPost = { title, image, user};
    setPosts([newPost, ...posts] );
    // console.log(newPost.title);
  }

  return (
    <>
      <form onSubmit={handlePosting}>
        <input
          type="text"
          placeholder="Post Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Click Post__&darr;</button>
        <img className="banner" src={banner} alt="" />
      </form>
    </>
  );
};

export default CreatePost;
