import {Button, Row, Col, Container, Accordion} from "react-bootstrap"

function ConfigurationTests() {
    return (
        <div>
            <Row style={{height: "100px", paddingTop: "30px"}}>
                <Col sm={6}><h1>Configuration Testing</h1></Col>
                <Col sm={6} style={{paddingTop: "10px", color: "orange"}}><h3>Status: In Progress</h3></Col>
            </Row>
        
            <Container style={{height: "100%", flex: 1, display: "flex", flexDirection: "row", alignItems: "center"}}>
            
            <Accordion  style={{width: "100%", minHeight: "450px"}} defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                <Accordion.Header>Communication Status</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col sm={6}>
                            <p>Com Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Com Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Com Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Com Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Com Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Com Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Com Test 1: ---</p>
                        </Col>
                    </Row>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Power Status</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col sm={6}>
                            <p>Power Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Power Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Power Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Power Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Power Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Power Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Power Test 1: ---</p>
                        </Col>
                    </Row>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                <Accordion.Header>Propulsion Status</Accordion.Header>
                <Accordion.Body>
                <Row>
                        <Col sm={6}>
                            <p>Propulsion Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Propulsion Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Propulsion Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Propulsion Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Propulsion Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Propulsion Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Propulsion Test 1: ---</p>
                        </Col>
                </Row>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                <Accordion.Header>Braking Status</Accordion.Header>
                <Accordion.Body>
                <Row>
                        <Col sm={6}>
                            <p>Braking Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Braking Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Braking Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Braking Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Braking Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Braking Test 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Braking Test 1: ---</p>
                        </Col>
                    </Row>
                </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </Container>
        <Container>
            <Row style={{height: "100px", textAlign: "left"}}>
                <Col sm={12} style={{paddingTop: "10px", color: "orange"}}><h3>Testing 74% Complete</h3></Col>
                <Col sm={6} style={{paddingTop: "10px", color: "lightgreen"}}><h3>Passed xx/xx</h3></Col>
                <Col sm={6} style={{paddingTop: "10px", color: "salmon"}}><h3>Failed xx/xx</h3></Col>
                
            </Row>
        </Container>
        
      </div>
    );
  }
  
  export default ConfigurationTests;
  