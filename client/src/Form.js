import React, { Fragment, useState,useEffect } from "react";
import { Box, Typography, makeStyles , Container, TextField,Button} from "@material-ui/core";
import { Upload } from "antd";
import { UploadOutlined,FileAddOutlined } from "@ant-design/icons";
import validator from "validator";
import './style.scss';
// import logo from './logo.svg';
import './App.css';
import { useNavigate, Link } from 'react-router-dom';
import Result from './Result';
import axios from "axios";
import { Email, AddCircle, DraftsOutlined } from "@mui/icons-material";
import FormControl from '@mui/material/FormControl';

import Input from '@mui/material/Input';

const useStyles = makeStyles({


  fab: {
    margin: 15,
  },

  body: {
    backgroundColor: "#f5f8fa",
  },

});


function Form(){

    ////////////////////////////////////////////////////////
  const age = 20;
  const valid = "Yes"
  const Staut = 50
  const Domain = ".com"



    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

     

  // const handleSave = () => {
  //   setSearchValid(true);

  // };
  ////////////////////////////////////////////////////////


    const [isEmailValid, setIsEmailValid] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const [showValidation, setShowValidation] = useState(false);
    const validateEmail = (e) => {
      
      var email = e;
      
      if (validator.isEmail(email)) {
        setIsEmailValid(true);
        
      } else {
        setIsEmailValid(false);
      }
      setShowValidation(true);   
    };
 
    useEffect(() => {
      if (emailValue === "" || emailValue === null || emailValue === undefined) {
        setShowValidation(false);
      }
    }, [emailValue]);
  
    const [file, setFile] = useState();
    const outputchange = (e) => {
      console.log(e.target.files);
      setFile(e.target.files[0]);
    };
  
    const props = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text",
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
      },
    };
  
    const classes = useStyles();

  return (
    <body id="cc"> 

    <div className="App">

      <div>
<div className="con"> 
      <Container  maxWidth="sm">
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              gutterButtom
            >
              Looking to <strong> verify an email</strong>
            </Typography>

            <br />
            <br />

            <Typography
              style={{ fontWeight: 600 }}
              variant="h7"
              align="center"
              color="textSecondary"
              paragraph
            >
              This email verification tool actually connects to the mail server
              and checks whether the mailbox exists or not.
            </Typography>
          </Container>
</div>

          <Container>
          <center>
         
          <div className="col-md-8 mx-auto">

         


          <TextField
                onChange={(e) => setEmailValue(e.target.value)}
                value={emailValue}
                label="Email"
                className={`w-75 ${classes.root}`}
                color="secondary"
                id="standard-basic"
                variant="standard"
              />
              <Button   color="primary"
                style={{ marginTop: 12 }}
                variant="contained"
                onClick={() => validateEmail(emailValue)}
              >
                verify
              </Button>
              <br />
              <br />
              <br />

              {emailValue !== "" &&
                emailValue !== null &&
                emailValue !== undefined &&
                showValidation && (
                  <div
                    id="result-email"
                    className={`${
                      isEmailValid
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }`}
                  >
                    {isEmailValid ? (
                      <span>Valid Email :)</span>
                    ) : (
                      <span>No valid Email!</span>
                    )}

            
                  </div>   
                )        
                }


               {emailValue !== "" &&
                emailValue !== null &&
                emailValue !== undefined &&
                showValidation && (
                  <div>
                  {isEmailValid ? (
                    <Result email={emailValue} 
                    age={age}
                    valid={valid}
                    Staut={Staut}
                    Domain = {Domain}
                      />
                  ) : (
                    <h3></h3>
                  )}
                  </div>   
                )
                
                }
  <br />
              <br />
              <br />
<label id="upload" htmlFor="upload-txt">
                <Upload {...props}>
                  <Button color="primary"
                   variant="text"
                   icon={<UploadOutlined />}>
                    {" "}
                    <AddCircle />  Click to Upload 
                  </Button>
                </Upload>
              </label>
          </div>
          </center>
            </Container>
            <br />
          <br />
          <br />
          <center>
            <Typography variant="h5"> What is being verified:</Typography>
            <br />
            <Box sx={{ display: "inline" }}>
              <DraftsOutlined style={{ fontSize: "80px" }} />
              <Box component="span" sx={{ display: "block" }}>
                Format
              </Box>
              <Box component="span" sx={{ display: "block" }}>
                "name@domain.xxx"{" "}
              </Box>
            </Box>
          </center>

      </div>  

      <br />
      <br />
      <br />
      <br />

      <footer class="footer">
        <div class="footer__addr">
          <h1 class="footer__logo">Something</h1>

          <h2>Contact</h2>
          <ul class="nav__ul">
            <li>
              <a href="#">xxxxxxxx@gmail.com</a>
            </li>
          </ul>
        </div>

        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Media</h2>

            <ul class="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>

              <li>
                <a href="#">Print</a>
              </li>

              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title">Legal</h2>

            <ul class="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="legal">
          <p>&copy; 2019 Something. All rights reserved.</p>

          <div class="legal__links">
            <span>
              Made by <span class="heart">♥</span> Abdellah and ussef from
              Anywhere
            </span>
          </div>
        </div>
      </footer>


                
      </div>
      </body>

    
  );
}
export default Form;