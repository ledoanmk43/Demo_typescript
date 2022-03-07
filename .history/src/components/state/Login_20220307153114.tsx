import React, { useState } from "react";

type User = {
  userName: string;
  passWord: string;
};

const Login = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useState(null);

  const logIn = () => {
    setIsLoggedin(true);
    setUser({
      userName: "abc",
      passWord: "123",
    });
  };
  const logOut = () => {
    setIsLoggedin(false);
  };
  return (
    <div>
      <div>User is {isLoggedin ? "logged In" : "logged Out"}</div>
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Login;
