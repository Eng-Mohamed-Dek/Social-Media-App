import React, { useEffect, useRef, useState } from "react";
import logo from "../Images/ALpha Media.png";
import banner from '../images/feature-banner.png'

const Login = ({setUsername}) => {
  const [user, setUser] = useState('');
  const input = useRef();
  // console.log(input)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(user)
    // console.log(`userName: ${user}`)
  }

  useEffect(() => {
    input.current.focus();
    // input.current.style.paddingLeft = "190px"
  })

  return (
    <>
      <header>
        <div>
          <img src={logo} alt="" />
        </div>
      </header>
      <form onSubmit={handleSubmit}>
        <h1>Posting Platform</h1>
        <p>Login to Post Your Pictures</p>
        <input ref={input} type="text" placeholder="Enter Your Name" onChange={(e) => setUser(e.target.value)}/>
        <button type="submit">Log in</button>
      </form>
      <img className='banner' src={banner} alt="" />
    </>
  );
};

export default Login;
