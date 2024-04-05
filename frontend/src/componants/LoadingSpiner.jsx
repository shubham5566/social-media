import React from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
function LoadingSpiner() {
  return (
    <div>
        <Button variant="primary"   disabled>
        <Spinner
          as="span"
          animation="border"
         
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>

    </div>
  )
}

export default LoadingSpiner