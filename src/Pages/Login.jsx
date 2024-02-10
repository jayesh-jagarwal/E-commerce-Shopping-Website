import React, { useContext, useEffect, useRef, useState } from 'react'
import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom';
import { context } from '../App';

const Login = ({setIsLoggedIn}) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userdata, setUserdata] = useState("");
  const  {setUserFound} = useContext(context)
  const navigate = useNavigate();
  const bRef = useRef();

 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:7000/user', {
        method: 'GET',
      });

      const use = await response.json();

      // Check if user exists
      const user = use.find((user) => user.email === email && user.password === password);

      if (user) {
        alert('Login successful!');
        setIsLoggedIn(true)
        setUserFound(user)
        navigate('/')
      } else {
        bRef.current.innerHTML = " * Please write Right Email & Password";
      }
    }
    catch (error) {
      console.error('Error during login:', error);
    }
    // catch(e){console.log(e.message)}
  };






  return (
    <div className='loginsignup'>
      <div className="loginsignup-container" >
        <b style={{ color: "red" }} ref={bRef}></b>

        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          {/* <input type="text"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            placeholder='Your Name' />

          {name.length == 0 && <span style={{ color: "red" }}>* Enter Name</span>} */}


          <input type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            placeholder='Email Address' />

          {email.length == 0 && <span style={{ color: "red" }}>* Enter Email</span>}


          <input type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            placeholder='Password' />

          {password.length == 0 && <span style={{ color: "red" }}>* Enter Password</span>}


        </div>
        <button onClick={handleLogin}>Continue</button>
        <p className="loginsignup-login">Dont't have an account?<Link style={{ textDecoration: 'none' }} to="/registration"><span>SignUp here</span></Link></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login
