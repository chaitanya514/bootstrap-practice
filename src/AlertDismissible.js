import React,{useState} from "react";
import { Button , Alert} from 'react-bootstrap';
import Switch from "./Switch"
import 'bootstrap/dist/css/bootstrap.min.css';




function AlertDismissible() {
    const [show, setShow] = useState(true);
    const [isOn,setIsOn] = useState(false)
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
              <Switch isOn = {isOn} handleToggle = {()=>setIsOn(!isOn)}/>
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
  }

  export default AlertDismissible;