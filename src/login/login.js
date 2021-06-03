import React, {useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import "./login.css";

function Login() {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const history = useHistory();
    
    useEffect(() => {
      if(localStorage.getItem("token")){
        history.push(`/dashboard`);
      }
    },[]);
  
    function login(e){
        if(userId === "admin" && userPassword === "12345"){
            localStorage.setItem("token", "T");
            history.push("/dashboard");
        }
        e.preventDefault();
    }

    
    return (
      <div className="container ">
        <form onSubmit={login} className="form-signin login-box">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="row">
            <div className="col input">
              <label><h4>Email</h4></label>
              <input
                className="email"
                type="text"
                name="user_id"
                onChange={(event) => {setUserId(event.target.value)}}
                placeholder="Enter Email"
              />
              <label><h4>Password</h4></label>
              <input
                className="email"
                type="password"
                name="user_password"
                onChange={(event) => {setUserPassword(event.target.value)}}
                placeholder="Enter Password"
              />
              <br/>
              <input className="sign-in-btn" type="submit" value="Sign In" />
            </div>
          </div>
        </form>
      </div>
    );
  
}
export default Login;
