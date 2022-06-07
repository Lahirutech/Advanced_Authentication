
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';

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
      {/* <Header /> */}
    </header>
    <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup" element={<Welcome />} />

        </Routes>
    </main>
  </React.Fragment>
  );
}

export default App;
