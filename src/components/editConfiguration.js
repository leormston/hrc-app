import {Button, Row, Col, Container, Accordion, Form} from "react-bootstrap"

function EditConfiguration() {
    return (

         <div>
            <Row style={{height: "100px", paddingTop: "30px"}}>
                <Col sm={6}><h1>Edit Configuration</h1></Col>
                <Col sm={6} style={{paddingTop: "10px", color: "orange"}}><h3></h3></Col>
            </Row>
        
            <Container style={{height: "100%", flex: 1, display: "flex", flexDirection: "row", alignItems: "center"}}>
            
            <Accordion  style={{width: "100%", minHeight: "450px"}} defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                <Accordion.Header>Communication Status</Accordion.Header>
                <Accordion.Body>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >ComVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >ComVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >ComVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >ComVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >ComVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >ComVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Power Status</Accordion.Header>
                <Accordion.Body>
                <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >PowVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >PowVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >PowVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >PowVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >PowVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >PowVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                <Accordion.Header>Propulsion Status</Accordion.Header>
                <Accordion.Body>
   
                <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >PropVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >PropVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >PropVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >PropVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >PropVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >PropVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                <Accordion.Header>Braking Status</Accordion.Header>
                <Accordion.Body>
                <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >BrakVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >BrakVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >BrakVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >BrakVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >BrakVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                    <Row style={{height: "30px", marginBottom: "15px"}}>
                        <Col sm={2}>
                            <p style= {{marginTop: "5px"}} >BrakVariable: </p>
                        </Col>
                        <Col sm={4}>
                            <input style= {{marginTop: "3px"}} type="text"/>
                        </Col>
                        <Col sm={2}>
                            <Button>Update</Button>
                        </Col>
                    </Row>
                </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
            </Container>
            <Container style={{textAlign: "left"}}>
                <hr/>
            <p>Recent Changes to configuration</p>
            <ul>
                <li>change 1......</li>
                <li>change 2......</li>
                <li>change 3......</li>
                <li>change 4......</li>
                <li>change 5......</li>

            </ul>
            </Container>
            
        
         </div>
    );
  }
  
  export default EditConfiguration;
  