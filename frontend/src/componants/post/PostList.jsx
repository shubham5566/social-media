import React, { useContext ,useState} from "react";
import Posts from "./Posts";
import { PostList as PostListData } from "../../store/Post-list-store";
import WelcomeMessage from "../WelcomeMessage";
import { useEffect } from "react";
import LoadingSpiner from "../LoadingSpiner";

function PostList() {
  const { postList, addInitialPost } = useContext(PostListData);
  const [fetchingData, setFetchingData] = useState(false)
  useEffect(() => {
    setFetchingData(true)
    const controller = new AbortController();
    const signal = controller.signal
    fetch("https://dummyjson.com/posts" , {signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetchingData(false)
      });

      return ()=>{
        console.log(`abort UseEffect`)
        controller.abort()
      }
  }, []);
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
