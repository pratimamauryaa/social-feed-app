import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";
import CreatePost from "./components/CreatePost";
import { PostList } from "./components/PostList";
import PostListDataStoreProvider from "./store/Post-List-Store";

const App = () => {
  const [sidebarTab, setSidebarTab] = useState("Home");

  return (
    <PostListDataStoreProvider>
      <div className="main-container">
        <Sidebar
          sidebarTab={sidebarTab}
          setSidebarTab={setSidebarTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>

          {sidebarTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          {/* <CreatePost></CreatePost>
        <PostList></PostList> */}

          <Footer></Footer>
        </div>
      </div>
    </PostListDataStoreProvider>
  );
};

export default App;
