import React from "react";
import Login from "./loginC";
import { useAuth } from "./authC";
function App() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="App">
      <Login />
    </div>
  );
}
export default App;