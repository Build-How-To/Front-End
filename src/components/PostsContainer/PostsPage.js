import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.postData.map (p =>(
        <Post postData = {p}/>



      ))}


    </div>
  );
};

export default PostsPage;