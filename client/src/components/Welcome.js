import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Welcome() {
  const [user, setUser] = useState();
  const firstRender = true
  const refreshToken = async () => {
    const res = await axios
      .get("user/refresh", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const sednRequest = async () => { 
    const res = await axios
    .get("user/user", {
      withCredentials: true,
    })
    .catch((err) => console.log(err));
  const data = await res.data;
  return data;
  }

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sednRequest().then((data) => setUser(data.user));
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data.user));
    }, 1000 * 29);
    return () => clearInterval(interval);
  }, []);

  return <div>{user && <h1>{user.name}</h1>}</div>;
  
}
