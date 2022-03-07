import React, { useState } from "react";

const Login = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div>
      <button>Log In</button>
    </div>
  );
};

export default Login;
