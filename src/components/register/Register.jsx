import axios from "axios";
import { useRef } from "react";
import "./register.css";
import {Link, useNavigate} from "react-router-dom"
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history =useNavigate()
  const handleClick =async (e) => {
    e.preventDefault();
  if(passwordAgain.current.value!==password.current.value){
    passwordAgain.current.setCustomvalidity("Password don't match")
  }
else{
  const user={
    username:username.current.value,
    email:email.current.value,
    password:password.current.value,
  };
  try{
  await axios.post("/auth/register",user);
    history.push("/login");
}
  catch(err){
    console.log(err);
  }
}};
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" type="email" required ref={email}  className="loginInput" />
            <input placeholder="Password" minLength="6" required type="password" ref={password} className="loginInput" />
            <input placeholder="Password Again" type="password" required ref={passwordAgain} className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
         
          </form>
          <Link to="/login">
          <button className="loginRegisterButton" >
              Log into Account
          </button>
          </Link>
        </div>
      </div>
    </div>
    
  );
}
