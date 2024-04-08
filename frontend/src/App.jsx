import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./componants/header/Header";
import Sidebar from "./componants/sidebar/Sidebar";
import Footer from "./componants/Footer/Footer";
import CreatePost from "./componants/post/CreatePost";
import Posts from "./componants/post/Posts";
import PostList from "./componants/post/PostList";
import PostListProvider from "./store/Post-list-store";
import { Outlet } from "react-router-dom";


function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className=" layout m-2 d-flex flex-row justify-content-between gap-2  ">
        <Sidebar setSelectedTab={setSelectedTab}></Sidebar>

        <div className="w-100 d-flex flex-column gap-4 ">
          <Header></Header>
         <Outlet/>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
