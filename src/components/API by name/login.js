import React, { useState } from "react";
import { useAuth } from "./auth";
const Login = () => {
  const [input, setInput] = useState({
    name: "",
  });
  const { setUser } = useAuth();

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(input));
    setUser(input);
    const apis = document.getElementById("Apit")
    apis.style.display="none"
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setInput({ name: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
