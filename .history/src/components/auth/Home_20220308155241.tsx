import React from "react";
import Login from "./Login";
import Profile from "./Profile";

type HomeProps = {
  isLoggedin: boolean;
  Component: React.ComponentType;
};

const Home = ({ isLoggedin }: HomeProps) => {
  // return isLoggedin ? <Profile /> : <Login />;
  return isLoggedin ? <Profile /> : <Login />;
};

export default Home;
