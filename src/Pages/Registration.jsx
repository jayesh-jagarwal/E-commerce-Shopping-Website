import React, { useEffect, useRef, useState } from 'react'
import './CSS/Registration.css';
import { Link, useNavigate } from 'react-router-dom';


const Registration = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const bRef = useRef();


    const handleClick = (e) => {
        e.preventDefault();

        const userData = { name, phone, email, password };

        fetch('http://localhost:7000/user?email=' + email)
      .then((response) => {return response.json()})
      .then((data) => {
        if (data.length === 0) {
            
            if (name === "" || phone === "" || email === "" || password === "") {

                // alert("Please fill all the details...!");
    
                // document.getElementById('err').innerHTML = " * Please fill in all fields";
                bRef.current.innerHTML = " * Please fill in all fields";
    
            }
            else {
    
                fetch("http://localhost:7000/user", {
                    method: 'post',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userData)
                })
                .then((res) => {return res.json()})
                .then((data) => {console.log(data)})
                .catch((e)=>{console.log(e.message)})
                navigate('/login');
            }



          } else {
            alert('Email already exists. Please choose a different email.');
          }
        })

        
    };

    return (
        <div className='register'>
            <form className="register-container" onSubmit={handleClick}>
                <b style={{ color: "red" }} ref={bRef}></b>
                <h1>Registration</h1>

                <div className="register-fields">
                    <input type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        placeholder='Your Name' />

                    {name.length == 0 && <span style={{ color: "red" }}>* Enter Name</span>}


                    <input type="tel"
                        value={phone}
                        pattern="[0-9]*"
                        maxLength="10"
                        onChange={(e) => { setPhone(e.target.value.replace(/[^0-9]/g, '')) }}
                        placeholder='Phone Number' />   

                    {phone.length == 0 && <span style={{ color: "red" }}>* Enter Phone Number</span>}


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
                <button>Continue</button>
                <p className="register-login">Already have an account? <Link style={{ textDecoration: 'none' }} to='/login'><span onClick={handleClick} className='log'>Login here</span></Link> </p>
                <div className="register-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </form>
        </div>
    )
}

export default Registration
