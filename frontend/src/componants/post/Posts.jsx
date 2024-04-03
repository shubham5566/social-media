import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import CardFooter from 'react-bootstrap/esm/CardFooter';
import { MdDelete } from "react-icons/md";
import { PostList } from '../../store/Post-list-store';
function Posts({post}) {
  const {deletePost}=useContext(PostList)
  return (
    
         <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <div className=' d-flex justify-content-between' >

        <Card.Title>{post.title}</Card.Title>
        <Badge bg="danger"  className="mt-2" onClick={()=>deletePost(post.Id)}><MdDelete/></Badge>
        </div>
        <Card.Text>
         {post.body}
        </Card.Text>
        {
          post.tags.map((tag)=>(<Badge key={tag} bg="primary" className='m-1'>{tag}</Badge>))
        }
       
       
      </Card.Body>
      <Card.Footer>

        <Button variant="primary">Go somewhere</Button>
      </Card.Footer>
    </Card>
    
  )
}

export default Posts