import {Button, Row, Col, Container, Accordion} from "react-bootstrap"

function PodStatus() {
    return (

         <div >
            
             <Container>
             <h1 style={{color: "white", paddingTop: "20px", textAlign: "left"}}>PodStatus</h1>
             <p style={{textAlign: "left"}}>Texts Complete: False</p>
             <p style={{textAlign: "left"}}>Most recent succesful test date: xx/xx/xxxx</p>
             <Container style={{height: "100%", flex: 1, display: "flex", flexDirection: "row", alignItems: "center"}}>
            
            <Accordion  style={{width: "100%", marginBottom: "100px"}} defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                <Accordion.Header>Communication Status</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col sm={6}>
                            <p>Com Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Com Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Com Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Com Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Com Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Com Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Com Val 1: ---</p>
                        </Col>
                    </Row>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Power Status</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col sm={6}>
                            <p>Power Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Power Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Power Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Power Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Power Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Power Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Power Val 1: ---</p>
                        </Col>
                    </Row>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                <Accordion.Header>Propulsion Status</Accordion.Header>
                <Accordion.Body>
                <Row>
                        <Col sm={6}>
                            <p>Propulsion Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Propulsion Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Propulsion Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Propulsion Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Propulsion Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Propulsion Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Propulsion Val 1: ---</p>
                        </Col>
                </Row>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                <Accordion.Header>Braking Status</Accordion.Header>
                <Accordion.Body>
                <Row>
                        <Col sm={6}>
                            <p>Braking Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Braking Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Braking Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Braking Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Braking Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Braking Val 1: ---</p>
                        </Col>
                        <Col sm={6}>
                            <p>Braking Val 1: ---</p>
                        </Col>
                    </Row>
                </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </Container>
             <p>UART COM LINE:</p>
             <hr/>
            <textarea style={{overflowY: "scroll", width: "100%", resize: "none"}} id="w3review" name="w3review" rows="25" />
             </Container>
            
             
         </div>

    );
  }
  
  export default PodStatus;
  