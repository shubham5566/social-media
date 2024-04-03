import React, { useRef } from "react";
import { useContext } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { PostList  } from "../../store/Post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const numberOfReactionElement = useRef();
  const hashtagsElement = useRef();
  const handleAddPost = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const numberOfReaction = numberOfReactionElement.current.value;
    const hashtags = hashtagsElement.current.value.split( ' ');

    // reset
    userIdElement.current.value =" "
    postTitleElement.current.value=" "
    postContentElement.current.value=" "
    numberOfReactionElement.current.value=" "
    hashtagsElement.current.value= " "



    addPost(userId, postTitle, postContent, numberOfReaction, hashtags);
  };
  return (
    <div className="w-50 m-auto card p-4">
      <form onSubmit={handleAddPost}>
        <FloatingLabel
          controlId="floatingInput"
          label="User Id"
          className="mb-3"
        >
          <Form.Control
            type="text"
            ref={userIdElement}
            placeholder=" input some number"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Post title"
          className="mb-3"
        >
          <Form.Control
            type="text"
            ref={postTitleElement}
            placeholder="Password"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Post Content"
          className="mb-3"
        >
          <Form.Control
            type="textarea"
            ref={ postContentElement}
            placeholder="post content here "
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Number Of Reactions"
          className="mb-3"
        >
          <Form.Control
            type="text"
            ref={numberOfReactionElement}
            placeholder="number of reactions"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Your Hash Tags Here "
          className="mb-3"
        >
          <Form.Control
            type="text"
            ref={hashtagsElement}
            placeholder="hastages "
          />
        </FloatingLabel>
        <Button type="submit">Post</Button>
      </form>
    </div>
  );
}

export default CreatePost;
