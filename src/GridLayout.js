import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
function GridLayout() {
    return (
        <>
            <Container fluid="md" style={{backgroundColor:"red",borderColor: "green",borderStyle:"solid"}}>
                <Row className="justify-content-md-center">
                    <Col xs={4}>1 of 4</Col>
                    <Col xl>Variable width content</Col>
                    <Col xl>
                        3 of 4
                </Col>
                <Col sm>
                        4 of 4
                </Col>
                <Col sm>1 of 4</Col>
                    <Col sm>Variable width content</Col>
                    <Col sm>
                        3 of 4
                </Col>
                <Col sm>
                        4 of 4
                </Col>
                </Row>
            </Container>
        </>
    )
}

export default GridLayout;