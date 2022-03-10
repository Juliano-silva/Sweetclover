import React from "react";
import { useAuth } from "../API by name/auth";
import style from './login.module.css'

const Nome = () => {
  const { user } = useAuth();
  return (
    <div >
      <h1 className={style.userName}>{user.name}</h1>
    </div>
  );
};
export default Nome;