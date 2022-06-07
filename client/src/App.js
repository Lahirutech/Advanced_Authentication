
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

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
    <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
   
    </main>
  </React.Fragment>
  );
}

export default App;
