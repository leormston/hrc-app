import {Button, Row, Col, Container} from "react-bootstrap"
import hyperlink from "../images/hyperlink.png"
import { Redirect, Link } from "react-router-dom";
function NavBar(port, writer) {
    async function openPort()
        {
        port = await navigator.serial.requestPort();
        await port.open({baudRate: 115200})
        writer = port.writable.getWriter();
        }
    return (

          <Row style={{width: "100%", height: "250px", marginBottom: "-170px"}}>
            <Col xs={6}>
            <Link to="/"><img src={hyperlink} className="logo" alt="logo"/></Link>
            </Col>
            <Col xs={6}>
              <Button variant="light" id="combutton" onClick={() => openPort()}>Select Communication Port</Button> 
            </Col>
          </Row>

    );
  }
  
  export default NavBar;
  