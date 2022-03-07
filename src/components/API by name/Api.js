import React from "react";
import Login from "./login";
import { useAuth } from "./auth";
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
