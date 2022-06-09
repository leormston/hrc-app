import {Button, Row, Col, Container} from "react-bootstrap"
function LCM(port, writer, openPort) {
    var port = port;
    // const textDecoder = new TextDecoderStream();
    async function openPort()
    {
    port = await navigator.serial.requestPort();
    await port.open({baudRate: 115200})
    writer = port.writable.getWriter();
    const reader = port.readable.getReader();
    return  reader;
    }

    async function sendAccelerate()
    {
        
        const data = new Uint8Array([97]); // a
        await writer.write(data);
        while (true) {
        const { value, done } = await reader.data();
        if (done) {
            // Allow the serial port to be closed later.
            reader.releaseLock();
            break;
        }
        // value is a Uint8Array.
        console.log(value);
        }
    }

    async function sendBrake()
    {
        const data = new Uint8Array([98]); // a
        await writer.write(data);
    }

    async function sendFail()
    {
        const data = new Uint8Array([102]); // a
        await writer.write(data);
    }
    const reader = openPort()
    
    return (

         <div>
             <Container>
             <h1 style={{color: "white", paddingTop: "20px"}}>Live Control Mode</h1>
             <hr style={{paddingBottom: "30px"}} />
             <Row>
                 <Col sm={6}>
                     <h3>Speed [KM/H]</h3>
                     <hr/>
                     <h1 style={{padding: "50px"}}>00.00</h1>
                     <Button  style={{width: "100%", padding: "45px", fontSize: "30px"}} onClick={() => sendAccelerate()} variant="success">Accelerate</Button>
                     <hr/>
                    <Button  style={{width: "100%", padding: "45px", fontSize: "30px"}} onClick={() => sendBrake()} variant="warning">Brake</Button>
                    <hr/>
                    <Button style={{width: "100%", padding: "45px", fontSize: "30px"}} onClick={() => sendFail()} variant="danger">Fail [Emergency]</Button>
                 </Col>
                 <Col sm={6}>
                     <Row>
                         <Col sm={8}>
                            Connection: 
                         </Col>
                         <Col sm={4}>
                            --
                         </Col>
                         <Col sm={8}>
                            Current: 
                         </Col>
                         <Col sm={4}>
                            --
                         </Col>
                         <Col sm={8}>
                            Power: 
                         </Col>
                         <Col sm={4}>
                            --
                         </Col>
                         <Col sm={8}>
                            Distance Travelled: 
                         </Col>
                         <Col sm={4}>
                            --
                         </Col>
                         <Col sm={8}>
                            Temp 1:
                         </Col>
                         <Col sm={4}>
                            --
                         </Col>
                         <Col sm={8}>
                            Temp 2:
                         </Col>
                         <Col sm={4}>
                            --
                         </Col>
                         <Col sm={8}>
                            Temp 3:
                         </Col>
                         <Col sm={4}>
                            --
                         </Col>
                     </Row>
                     <p>UART COM LINE:</p>
             <hr/>
            <textarea id="console" style={{overflowY: "scroll", width: "100%", resize: "none"}} id="w3review" name="w3review" rows="20" />
                 </Col>
             </Row>
            <hr/>
             
             </Container>
             
         </div>

    );
  }
  
  export default LCM;
  