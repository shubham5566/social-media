import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./componants/header/Header";
import Sidebar from "./componants/sidebar/Sidebar";
import Footer from "./componants/Footer/Footer";
import CreatePost from "./componants/post/CreatePost";
import Posts from "./componants/post/Posts";
import PostList from "./componants/post/PostList";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create post")
  return (
    <div className=" layout d-flex  justify-content-between  flex-gap">
      <Sidebar setSelectedTab ={setSelectedTab} ></Sidebar>

      <div className="w-100  ">
        <Header></Header>
             {
              selectedTab  === "Home" ?   <PostList ></PostList> :<CreatePost></CreatePost>

             }
        
       
       
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
