import { createContext, useReducer } from "react";

export const PostList = createContext(
  {
    postList: [],
  addPost: () => {},
  addInitialPost: ()=>{},
  deletePost: () => {},
  }
);
const postListReducer = (currentPostList, action)=>{
  let newPostList = currentPostList
  if(action.type === 'DELETE_POST'){
    newPostList = currentPostList.filter((post)=>(post.id !== action.payload.postId))

  } else if(  action.type === 'ADD_INITIAL_POST'){
    newPostList = action.payload.posts

  } else if( action.type === 'ADD_POST'){
    newPostList =[ action.payload, ...currentPostList]

  }
  return newPostList;
 
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,[]);
  const addPost = ( userId, postTitle, postContent, numberOfReaction, hashtags) => {
    // console.log(userId, postTitle, postContent, numberOfReaction, hashtags)
    dispatchPostList({

      type:'ADD_POST',
      payload:{
        Id:Date.now(),
        title: postTitle,
        body: postContent,
        userId:userId,
        reactions:numberOfReaction,
        tags: hashtags

    },
    }
    )
  };
  const addInitialPost = ( posts) => {
    
    dispatchPostList({

      type:'ADD_INITIAL_POST',
      payload:{
       posts

    },
    }
    )
  };
  const deletePost = (postId) =>{
   dispatchPostList(
    {
      type:'DELETE_POST',
      payload:{
        postId
      }
    }
    
   )
  //  , console.log(`this post is delete ${postId}`)
  }
  return(

      <PostList.Provider value={
       {
        postList, addPost, deletePost, addInitialPost

       }
      }>{children}</PostList.Provider>
  )
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
