import React from "react";
import Login from "./Login";
import Profile from "./Profile";

type loginProps = { isLoggedin: boolean };

const Home = ({ isLoggedin: loginProps }) => {
  return <div>{isLoggedin ? <Profile /> : <Login />}</div>;
};

export default Home;
