import React, { useState } from "react";
import { useAuth } from "./authC";
const Login = () => {
  const [textarea, setTextarea] = useState({
    name: "",
  });
  const { setUser } = useAuth();

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(textarea));
    setUser(textarea);
    const apis = document.getElementById("APIby")
    apis.style.display="none"
  };
  return (
    <div>
      <textarea
        type="text"
        placeholder="Escreve seu Username"
        minLength={1}
        maxLength={25}
        onChange={(e) => setTextarea({ name: e.target.value })}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;