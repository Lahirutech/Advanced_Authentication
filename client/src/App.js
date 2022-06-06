
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {

  const [message, setmessage] = useState("")
  const getData = async () => { 
    const res = await axios.get('/profile')
    setmessage(res.data.message)
  }
  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="App">
      <p>Our message is {message}</p>
    </div>
  );
}

export default App;
