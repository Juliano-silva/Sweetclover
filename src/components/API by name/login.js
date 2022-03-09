import React, { useState } from "react";
import { useAuth } from "./auth";
import styles from './login.module.css'
const Login = () => {
  const [textarea, setTextarea] = useState({
    name: "",
  });
  const [input, setInput] = useState({
    conteúdo:"",
  });
  const { setUser } = useAuth();

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(textarea));
    setUser(textarea);
    localStorage.setItem("user1", JSON.stringify(input));
    setUser(input);
    const apis = document.getElementById("APIby")
    apis.style.display="none"
  };
  return (
    <div>
      <textarea
      className={styles.textarea}
        type="text"
        placeholder="Escreve seu Username"
        minLength={1}
        maxLength={25}
        onChange={(e) => setTextarea({ name: e.target.value })}/>
       <input
      className={styles.textarea}
        type="text"
        placeholder="Escreve seu contéudo"
        onChange={(e) => setTextarea({ conteúdo: e.target.value })}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
