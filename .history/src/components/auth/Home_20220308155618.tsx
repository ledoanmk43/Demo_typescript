import React from "react";
import Login from "./Login";

type HomeProps = {
  isLoggedin: boolean;
  component: React.ComponentType;
};

const Home = ({ isLoggedin, component }: HomeProps) => {
  // return isLoggedin ? <Profile /> : <Login />;
  return isLoggedin ? <component nameProps="Đoàn" /> : <Login />;
};

export default Home;
