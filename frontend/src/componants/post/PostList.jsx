import React, { useContext ,useState} from "react";
import Posts from "./Posts";
import { PostList as PostListData } from "../../store/Post-list-store";
import WelcomeMessage from "../WelcomeMessage";

import LoadingSpiner from "../LoadingSpiner";

function PostList() {
  const { postList, fetchingData } = useContext(PostListData);
  
  return (
    <div className="d-flex flex-wrap gap-4">
      
      {fetchingData && <LoadingSpiner/>}
      { !fetchingData  && postList.length === 0 && <WelcomeMessage />}
      {!fetchingData  && postList.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
