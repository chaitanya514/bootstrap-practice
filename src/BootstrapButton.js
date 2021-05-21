import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const BootstrapButton = () => {
    return (
        <>
            <h1>Hello from BootstrapButton</h1>
            <Alert dismissible variant="danger">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again.
      </p>
            </Alert>
            
            <Button variant="flat"> BootstrapButton </Button>


        </>
    )
}

export default BootstrapButton;