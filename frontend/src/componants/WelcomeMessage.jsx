import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function WelcomeMessage({onGetPostsClick}) {
  return (
    <div>

        <h1>No Post Here </h1>
        <Button onClick={onGetPostsClick}> Fetch Post </Button>
    </div>
  )
}

export default WelcomeMessage