import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type HomeProps = {
  isLoggedin: boolean;
  Component: React.ComponentType<ProfileProps>;
};

const Home = ({ isLoggedin, component: Component }: HomeProps) => {
  // return isLoggedin ? <Profile /> : <Login />;
  return isLoggedin ? <component nameProps="Đoàn" /> : <Login />;
};

export default Home;
