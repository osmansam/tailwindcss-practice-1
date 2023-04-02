import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { postAdded } from "./postsSlice";
import PostAuthor from "./PostAuthor";

const Posts = () => {
  const posts = useSelector(selectAllPosts);

  const renderPost = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
        </p>
      </article>
    );
  });
  return (
    <div>
      <h3>Posts</h3>
      {renderPost}
    </div>
  );
};

export default Posts;
