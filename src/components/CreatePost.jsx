import React, { useContext, useRef, useState } from "react";
import { PostListDataStore } from "../store/Post-List-Store";
import ErrorMsg from "./ErrorMsg";

const CreatePost = () => {
  const [postlist, addPost] = useContext(PostListDataStore);
  const userIdInput = useRef();
  const TitleInput = useRef();
  const ContentInput = useRef();
  const ReactionInput = useRef();
  const CommentInput = useRef();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const userId = userIdInput.current.value.trim();
    const Title = TitleInput.current.value.trim();
    const Content = ContentInput.current.value.trim();
    const Reaction = ReactionInput.current.value.trim();
    const Comments = CommentInput.current.value.split(",");

    if (!userId || !Title || !Content || !Reaction || !Comments) {
      setError("Please fill in all required fields!");
      return;
    }

    userIdInput.current.value = "";
    TitleInput.current.value = "";
    ContentInput.current.value = "";
    ReactionInput.current.value = "";
    CommentInput.current.value = "";

    addPost(userId, Title, Content, Reaction, Comments);
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <div
                  className="bg-primary-subtle text-primary rounded-4
                  d-inline-flex align-items-center justify-content-center
                  mb-3"
                  style={{ width: "65px", height: "65px", fontSize: "30px" }}
                >
                  ✍️
                </div>

                <h2 className="fw-bold text-dark">Create a Post</h2>
                <p className="text-secondary mb-0">
                  Share your thoughts with the community
                </p>
              </div>

              <form className="p-4" onSubmit={handleSubmit}>
                <ErrorMsg Error={error}></ErrorMsg>
                <div className="mb-3 ">
                  <label for="user" className="form-label">
                    User Id
                  </label>
                  <input
                    type="text"
                    ref={userIdInput}
                    className="form-control"
                    id="user"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Post Title
                  </label>
                  <input
                    type="text"
                    ref={TitleInput}
                    className="form-control"
                    id="title"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Post Content
                  </label>
                  <input
                    type="text"
                    ref={ContentInput}
                    className="form-control"
                    id="content"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="reaction" className="form-label">
                    Post Reactions
                  </label>
                  <input
                    type="text"
                    ref={ReactionInput}
                    className="form-control"
                    id="reaction"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="comments" className="form-label">
                    Post Comments
                  </label>
                  <input
                    type="text"
                    ref={CommentInput}
                    className="form-control"
                    id="comments"
                  />
                </div>

                <button type="submit" className="btn btn-danger">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
