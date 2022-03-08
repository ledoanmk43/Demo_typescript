import React from "react";
import { Login } from "./Login";
import { Profile } from "./Profile";

const Home = ({ isLoggedin }) => {
  return <div>{isloggedin ? <Profile /> : <Login />}</div>;
};

export default Home;
