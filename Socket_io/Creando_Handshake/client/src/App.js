import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

import './App.css';

const socket = io.connect('http://localhost:8000')
function App() {

  // const [socket] = useState(io(':8000'));

  useEffect(()=>{
    console.log('is this running?');
    socket.on('Welcome', data => console.log(data))
  },[])
  return (
    <div className="App">
      <h1>Socket Test</h1>
    </div>
  );
}

export default App;
