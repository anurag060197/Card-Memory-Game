import './App.css';
import { Button, Container } from "react-bootstrap";
import { useState } from 'react';
import Grid from "./Components/Grid";
function App() {
  const [time, setTime] = useState(0);

  const startTime = ()=>{
    setInterval(()=>{setTime((prev)=>prev+1)}, 1000);
  }

  return (
    <Container>
      <Button className="btn btn-dark" style={{marginLeft:"32.8rem", marginTop:"2rem"}} onClick={startTime}>Start</Button>
      <span id="timer"> Timer : {time}</span><br></br><br></br>
      <Grid />
    </Container>
  );
}

export default App;
