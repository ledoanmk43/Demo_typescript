import React, { useState } from "react";

const Login = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div>
      <button>Log In</button>
      <button>Log Out</button>
    </div>
  );
};

export default Login;
