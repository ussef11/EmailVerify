import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function Login()
{

          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [msg, setMsg] = useState('');
          const navigate = useHistory();
          const Auth = async (e) =>{
            e.preventDefault();
    var axios = require('axios');
    var data = JSON.stringify({
      "email": email,
      "password": password
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:3000/api/auth/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
        console.log("Data Is:::")
      console.log(response.data);
       setMsg(`Welcome ${email} `);
      setTimeout(() => {  navigate.push("/"); }, 3000);
      

    })
    .catch(function (error) {
        console.log("Error:::")
      console.log(error);
       setMsg("invalid email or password");
    });
}







    // const Login = () => {
    //     const [email, setEmail] = useState('');
    //     const [password, setPassword] = useState('');
    //     const [msg, setMsg] = useState('');
    //     const navigate = useHistory();
     
    //     const Auth = async (e) => {
    //         e.preventDefault();
    //         try {
    //             await axios.post('http://localhost:3000/api/auth/login', {
    //                 email: email,
    //                 password: password
    //             });
    //             navigate.push("/");
    //         } catch (error) {
    //             if (error.response) {
    //                 setMsg(error.response.data.msg);
    //             }
    //         }
    //     }
    

    return(
        <div className="App">

<section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email or Username</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  
        
        </div>
    )
}

export default Login;