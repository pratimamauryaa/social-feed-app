import { createContext, useEffect, useReducer, useState } from "react";

export const PostListDataStore = createContext({});

const postListReducer = (currPostlist, action) => {
  let newPostlist = currPostlist;

  if (action.type === "REMOVE-POST") {
    newPostlist = currPostlist.filter((post) => post.id != action.payload);
  } else if (action.type === "ADD-POST") {
    newPostlist = [...currPostlist, action.payload];
  } else if (action.type === "ADD-DUMMY-POST") {
    newPostlist = [...currPostlist, ...action.payload];
  }
  return newPostlist;
};

const PostListDataStoreProvider = ({ children }) => {
  const [postlist, dispatchPostlist] = useReducer(postListReducer, []);

  //api-calllll function===
  const addDummyPost = (posts) => {
    dispatchPostlist({ type: "ADD-DUMMY-POST", payload: posts });
  };

  //api-call=====
  const [datafetched, setDatafetched] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addDummyPost(data.posts);
      })
      .catch((error) => {
        console.log("Error fetching posts:", error);
      })
      .finally(() => {
        setDatafetched(true);
      });
  }, []);

  const addPost = (userId, Title, Content, Reaction, Comments) => {
    dispatchPostlist({
      type: "ADD-POST",
      payload: {
        id: Date.now(),
        title: Title,
        body: Content,
        reaction: Reaction,
        userId: userId,
        tags: Comments,
      },
    });
  };
  const removePost = (postId) => {
    console.log("deleting " + postId);
    dispatchPostlist({ type: "REMOVE-POST", payload: postId });
  };

  return (
    <PostListDataStore.Provider
      value={[postlist, addPost, removePost, addDummyPost, datafetched]}
    >
      {children}
    </PostListDataStore.Provider>
  );
};

export default PostListDataStoreProvider;

// const default_postlist = [
//   {
//     id: "1",
//     title: "First Post",
//     body: "Hello, world!",
//     reaction: 56,
//     userId: 101,
//     tags: ["good", "nice"],
//   },
//   {
//     id: "2",
//     title: "second Post",
//     body: "Hello, world!",
//     reaction: 56,
//     userId: 101,
//     tags: ["good", "nice"],
//   },
// ];
