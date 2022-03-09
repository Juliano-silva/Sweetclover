import React from "react";
import { useAuth } from "../API by conteúdo/authC";

const Conteúdo = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};
export default Conteúdo;