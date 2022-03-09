import React from "react";
import { useAuth } from "../API by name/auth";

const Conteúdo = () => {
  const { user1 } = useAuth();
  return (
    <div>
      <h1>{user1.name}</h1>
    </div>
  );
};
export default Conteúdo;