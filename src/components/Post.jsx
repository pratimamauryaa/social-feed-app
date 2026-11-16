import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListDataStore } from "../store/Post-List-Store";

const Post = ({ post }) => {
  const [addPost, postlist, removePost] = useContext(PostListDataStore);

  return (
    //<div className="card ms-5 mt-4" style={{ width: "18rem" }}>
    <div className="card border-0 shadow rounded-4 h-100 w-100 p-3">
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">{post.title}</h5>
        <p className="card-text text-secondary">{post.body}</p>

        <button
          className="badge btn btn-light rounded-circle position-absolute
                     top-0 end-0 m-2 text-danger"
          style={{ cursor: "pointer" }}
        >
          <MdDelete onClick={() => removePost(post.id)} size={22} />
          <span className="visually-hidden">unread messages</span>
        </button>

        <p className="card-text">Reaction:{post.reaction}</p>

        <div>
          {post.tags.map((tag) => (
            <span className="me-2 p-2 badge rounded-pill text-bg-warning text-white">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
