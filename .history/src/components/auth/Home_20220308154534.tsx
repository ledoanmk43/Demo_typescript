import React from "react";
import Login from "./Login";
import Profile from "./Profile";

type HomeProps = { isLoggedin: boolean };

const Home = ({ isLoggedin: HomeProps }) => {
  return isLoggedin ? <Profile /> : <Login />;
};

export default Home;
