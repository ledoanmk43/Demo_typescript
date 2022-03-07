import React, { useState } from "react";

const Login = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div>
      <div>User is {isLoggedin ? "User logged In" : "User logged out"}</div>
      <button onClick={logIn()}>Log In</button>
      <button>Log Out</button>
    </div>
  );
};

export default Login;
