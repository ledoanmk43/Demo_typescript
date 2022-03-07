import React, { useState } from "react";

const Login = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const logIn = () => {
    setIsLoggedin(true);
  };
  const logOut = () => {
    setIsLoggedin(false);
  };
  return (
    <div>
      <div>User is {isLoggedin ? "logged In" : "logged out"}</div>
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Login;
