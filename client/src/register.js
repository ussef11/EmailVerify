import React, { Fragment, useState,useEffect } from "react";


import axios from "axios";
import { useHistory } from 'react-router-dom';










function Register() {

  const [first_name, setFirst_name] = React.useState('');
  const [last_name, setLast_name] =  React.useState('');
  const [email, setEmail] =  React.useState('');
  const [password, setPassword] =  React.useState('');
  const[ msg , setMsg] = React.useState('');
  const navigate = useHistory();
  


  const Auth = async (e) =>{
    e.preventDefault();
  var axios = require('axios');
var data = JSON.stringify({
  "first_name": first_name,
  "last_name": last_name,
  "email": email,
  "password": password
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/api/auth/register',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log('data is ::::')
  console.log(JSON.stringify(response.data));
  navigate.push("/login");
  

})
.catch(function (error) {
  console.log('Error ::::')
  console.log(error);
  setMsg(error.response.data.msg);

});
}





  return (

    <div ClasNameName="App">




<section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">First Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="First Name"  value={first_name} onChange={e =>setFirst_name(e.target.value)}  />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Last Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Last Name" value={last_name}  onChange={e=>setLast_name(e.target.value)} />
                                    </div>
                                </div>

                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  

{/* 

<div id="login-box">
  <div ClasName="left">
    <div>
  
    <h1>Sign up</h1>
    
    <input value={first_name} onChange={e =>setFirst_name(e.target.value)} type="text" name="username" placeholder="FirstName" />
    <input  value={last_name}  onChange={e=>setLast_name(e.target.value)} type="text" name="username" placeholder="LastName" />
    <input  value={email} onChange={e=>setEmail(e.target.value)} type="text" name="email" placeholder="E-mail" />
    <input  value={password}  onChange={e=>setPassword(e.target.value)} type="password" name="password" placeholder="Password" />

    
    <button className="button is-success is-fullwidth">Register</button>  </div>
  
  <div ClasName="right">
    <span ClasName="loginwith">Sign in with<br />social network</span>
    
    <button ClasName="social-signin facebook">Log in with facebook</button>
    <button ClasName="social-signin twitter">Log in with Twitter</button>
    <button ClasName="social-signin google">Log in with Google+</button>
  </div>
  <div ClasName="or">OR</div>
  
  </div>
</div> */}

      </div>
      
    
  );
}

export default Register;
