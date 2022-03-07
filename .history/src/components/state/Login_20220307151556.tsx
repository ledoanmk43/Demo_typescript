import React, { useState } from "react";

const Login = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const logIn = () => {};
  const logOut = () => {};
  return (
    <div>
      <div>User is {isLoggedin ? "User logged In" : "User logged out"}</div>
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Login;
