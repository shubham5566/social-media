import React, { useContext } from 'react'
import Posts from './Posts'
import {PostList as PostListData} from '../../store/Post-list-store'

function PostList() {
  const {postList}=useContext(PostListData)
  return (
    <div className="d-flex flex-wrap gap-4">
    {
      postList.map((post)=>< Posts key={post.id} post = {post}/>)
    }
    
    </div>
    
  )
}

export default PostList