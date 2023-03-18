import "./register.css";
import { useRef } from "react";
import axios from "axios";
import {useNavigate} from 'react-router';
import { Link } from "react-router-dom";

export default function Register() {
  const URI = process.env.REACT_APP_URI;
  
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate=useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !==password.current.value){
      password.current.setCustomValidity("Password dont't match")
    }else{
      const user={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,

      }
  try{
      await axios.post(`${URI}/auth/register`,user);
      navigate("/login");
  }catch(err){
   console.log(err);
  }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FbCopy</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on FbCopy.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              type="email"
              required
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
              minLength="6"
              required
              ref={password}
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              type="password"
              required
              ref={passwordAgain}
              className="loginInput"
            />
            <button type="submit" className="loginButton">Sign Up</button>
            <Link to="/login" className="loginLink" >
            <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
