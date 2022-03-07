import React, { useState } from "react";

type User = {
  userName: string;
  passWord: string;
};

const Login = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  // const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState({} as User);

  const logIn = () => {
    setIsLoggedin(true);
    setUser({
      userName: "abc",
      passWord: "123",
    });
    console.log(user);
  };
  const logOut = () => {
    setIsLoggedin(false);
    setUser(null);
    console.log(user);
  };
  return (
    <div>
      <div>User is {isLoggedin ? "logged In" : "logged Out"}</div>
      <button onClick={logOut}>Log Out</button>
      <button onClick={logIn}>Log In</button>
    </div>
  );
};

export default Login;
