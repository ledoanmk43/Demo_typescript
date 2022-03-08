import React from "react";
import Login from "./Login";
import Profile from "./Profile";

type HomeProps = {
  isLoggedin: boolean;
  Component: React.ComponentType<ProfileProps>;
};

const Home = ({ isLoggedin, Component }: HomeProps) => {
  // return isLoggedin ? <Profile /> : <Login />;
  return isLoggedin ? <Component nameProps="Đoàn" /> : <Login />;
};

export default Home;
