import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';


import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
function Sidebar({setSelectedTab}) {
 
  return (
   <Card  className="w-25">
    <Card.Header>
    Dashboard
    </Card.Header>
    <Card.Body>
    <ListGroup as="ul" defaultActiveKey="#link1" >
    
      <Link to = "/">
    <ListGroup.Item as="li"  
    action   href="#link1"
    onClick={()=>setSelectedTab("Home")}
    >
    
      Home
    </ListGroup.Item>
    </Link>
    <Link to = "/create-post">
    <ListGroup.Item 
    as="li" 
    action   href="#link2"
    onClick={()=>setSelectedTab(" Create post")}
     >
     
      Create post
      </ListGroup.Item>
      </Link>
   
  </ListGroup>
    </Card.Body>
   </Card>
   
  );
}

export default Sidebar;
