import React from "react";
import { useAuth } from "../API by name/auth";

const Nome = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default Nome;
