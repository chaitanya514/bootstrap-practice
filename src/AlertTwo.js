import React,{useState} from "react";
import { Button , Alert} from 'react-bootstrap';


function AlertDismissibleTwo() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="dark">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
  }
  
 export default AlertDismissibleTwo;