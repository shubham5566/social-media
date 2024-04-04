import React, { useContext } from 'react'
import Posts from './Posts'
import {PostList as PostListData} from '../../store/Post-list-store'
import WelcomeMessage from '../WelcomeMessage'

function PostList() {
  const {postList , addInitialPost}=useContext(PostListData)
  const handleGetPostClick = ()=>{
    fetch('https://dummyjson.com/posts')
     .then(res => res.json())
      .then(data => {
        addInitialPost(data.posts)
      });

  }
  return (
    <div className="d-flex flex-wrap gap-4">
      {
        postList.length === 0 && <WelcomeMessage onGetPostsClick= {handleGetPostClick}/>
      }
    {
      postList.map((post)=>< Posts key={post.id} post = {post}/>)
    }
    
    </div>
    
  )
}

export default PostList