import './App.css';
import React, { Component, useState } from 'react';
import {Button, Row, Col, Container} from "react-bootstrap"
import { BrowserRouter,  Switch, Routes, Route, Router } from 'react-router-dom';
import NavBar from './components/navbar';
import EditConfiguration from './components/editConfiguration';
import LCM from './components/lcm';
import ConfigurationTests from './components/configurationTests';
import PodStatus from './components/podStatus';
import NavPage from './components/navPage';
if ("serial" in navigator)
{
  console.log("serial supported!")
}

var port;
var writer;

async function openPort()
{
  const port = await navigator.serial.requestPort();
  await port.open({baudRate: 115200})
  writer = port.writable.getWriter();
}


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar port={port} writer={writer}/>
      <div id="content">
      <Routes >
        <Route path="/" element={<NavPage/>}/>
        <Route path="/editConfiguration" element={<EditConfiguration/>}/>
        <Route path="/configurationTests" element={<ConfigurationTests/>}/>
        <Route path="/lcm" element={<LCM writer={writer} port={port}/>}/>
        <Route path="/podStatus" element={<PodStatus/>}/>
      </Routes>
      </div>
      
   
      
          
      {/* <NavPage/> */}


      <footer style={{padding: "50px"}}>
        <p>Designed by Hyperlink HyperLoop Software Engineering Team.</p>
        <a href="https://www.hyperlinklondon.com/join">Why not visit our website kind visitor?</a>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
