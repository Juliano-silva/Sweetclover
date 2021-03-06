import React, { useState } from "react";
import { useAuth } from "./auth";
import styles from './login.module.css'
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
    <div className={styles}>
      <textarea
      className={styles.textarea}
        type="text"
        placeholder="Escreve seu Username"
        minLength={1}
        maxLength={15}
        onChange={(e) => setTextarea({ name: e.target.value })}/>
      <button className={styles.loginarea} onClick={handleLogin}>Inserir nome</button>
    </div>
  );
};

export default Login;