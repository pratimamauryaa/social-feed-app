import React, { useContext } from "react";
import Post from "./Post";
import { PostListDataStore } from "../store/Post-List-Store";
import ErrorMsg from "./ErrorMsg";
import Message from "./Message";
import Spinner from "./Spinner";

export const PostList = () => {
  const [postList, addPost, removePost, addDummyPost, datafetched] =
    useContext(PostListDataStore);
  //console.log(postList);

  return (
    <>
      <div className="container-fluid px-4 py-4">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Social Feed ✨</h2>
          <p className="text-secondary">
            Explore what's happening in your community
          </p>
        </div>

        <div className="row g-4 ">
          {!datafetched && <Spinner></Spinner>}
          {datafetched && postList.length === 0 && <Message></Message>}
          {datafetched &&
            postList.map((post) => (
              <div className="col-12 col-md-6 col-xl-4" key={post.id}>
                <Post post={post}></Post>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
