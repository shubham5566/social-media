import { createContext, useEffect, useState, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetchingData: false,
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetchingData, setFetchingData] = useState(false);

  const addPost = (post) => {
    console.log(post);
    // console.log(userId, postTitle, postContent, numberOfReaction, hashtags)
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    }); 
  };
  useEffect(() => {
    setFetchingData(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        // console.log(data,"shubham")
        setFetchingData(false);
      });

    return () => {
      console.log(`abort UseEffe `);
      controller.abort();
    };
  }, []);
 
  return (
    <PostList.Provider
      value={{
        postList,
        fetchingData,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//     {
//         Id:'1',
//         title:"Going to mumbai",
//         body:"hi Friends, How are You",
//         userId:"user-9",
//         reactions:1,
//         tags:["vaction",'mumbai']

//     },
//     {
//         Id:'2',
//         title:"Bhai paas ho gaye ",
//         body:"masti kare bhi pass ho gaye ",
//         userId:"user-12",
//         reactions:4,
//         tags:["unbilivable","pass"]

//     }
// ]

export default PostListProvider;
