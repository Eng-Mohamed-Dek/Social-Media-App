import React from "react";

const Posts = ({Posts}) => {

  return (
    <>
        <h1>Posts are viewed &darr;</h1>
      {
        Posts.map((post) => (
          <>
          <h2>{post.title}</h2>
          
          {post.image && (
            <img
              style={{ width: "350px", marginBottom: "40px", borderRadius: "5px" }}
              src={URL.createObjectURL(post.image)}
              alt=""
            />
          )}
          <p style={{marginBottom: "30px"}}>Posted By: <b>{post.user}</b></p>
            </>
        ))
      }
    </>
  );
};

export default Posts;
