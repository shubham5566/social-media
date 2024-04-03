import { createContext, useReducer } from "react";

export const PostList = createContext(
  {
    postList: [],
  addPost: () => {},
  deletePost: () => {},
  }
);
const postListReducer = (currentPostList, action)=>{
  let newPostList = currentPostList
  if(action.type === 'DELETE_POST'){
    newPostList = currentPostList.filter((post)=>(post.Id !== action.payload.postId))

  }
  return newPostList;
 
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);
  const addPost = () => {};
  const deletePost = (postId) =>{
   dispatchPostList(
    {
      type:'DELETE_POST',
      payload:{
        postId
      }
    }
    
   )
   , console.log(`this post is delete ${postId}`)
  }
  return(

      <PostList.Provider value={
       {
        postList, addPost, deletePost 

       }
      }>{children}</PostList.Provider>
  )
};
const DEFAULT_POST_LIST = [
    {
        Id:'1',
        title:"Going to mumbai",
        body:"hi Friends, How are You",
        userId:"user-9",
        reactions:1,
        tags:["vaction",'mumbai']

    },
    {
        Id:'2',
        title:"Bhai paas ho gaye ",
        body:"masti kare bhi pass ho gaye ",
        userId:"user-12",
        reactions:4,
        tags:["unbilibable","pass"]

    }
]

export default PostListProvider;
