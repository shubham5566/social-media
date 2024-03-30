import React from 'react'
import Posts from './Posts'

function PostList() {
  return (
    <div className="d-flex flex-wrap gap-4">
    <Posts></Posts>
    <Posts></Posts>
    <Posts></Posts>
    <Posts></Posts>
    
    </div>
    
  )
}

export default PostList