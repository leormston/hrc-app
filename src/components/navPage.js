import {Button, Row, Col, Container} from "react-bootstrap"
import { Redirect, Link } from "react-router-dom";
import hyperlink from "../images/hyperlink.png"
function NavPage() {

    return (
            <Container style={{display: "flex", flexDirection: "row", flex: 1, alignItems: "center", height: "800px", verticalAlign: "middle"}}>

            
          <Row style={{width: "100%", height: "500px"}}>
            <Col xs={6} >
                <Button style={{margin: "25px", width: "400px", padding: "45px", fontSize: "30px"}} variant="warning" >
                    <Link to="/editConfiguration">Edit Configuration</Link>
                </Button>
            </Col>
            <Col xs={6}>
                <Button style={{margin: "25px",  width: "400px", padding: "45px", fontSize: "30px"}} variant="success">
                    <Link to="/lcm">Live Control Mode</Link>
                </Button>
            </Col>
            <Col xs={6} >
                <Button style={{margin: "25px",  width: "400px", padding: "45px", fontSize: "30px"}} variant="light">
                    <Link to="/configurationTests">Configuration Test</Link>
                </Button>
            </Col>
            <Col xs={6}>
                
            </Col>
            <Col xs={6} >
                <Button style={{margin: "25px",  width: "400px", padding: "45px", fontSize: "30px"}} variant="info">
                    <Link to="/podStatus">Pod Status</Link>
                </Button>
            </Col>
            <Col xs={6}>
                <Button style={{margin: "25px",  width: "400px", padding: "45px", fontSize: "30px"}} variant="danger">Exit Program</Button>
            </Col>
          </Row>
          </Container>
    );
  }
  
  export default NavPage;
  