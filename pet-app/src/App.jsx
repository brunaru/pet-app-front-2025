import "./App.css";
import Navigation from "./components/Navigation";
import MyRoutes from "./routes/MyRoutes.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [authToken, setAuthToken] = useState("");

  function handleSetAuthToken(token) {
    setAuthToken(token);
    console.log("Token set in App:", token);
  }

  return (
    <main>
      <Router>
        {!authToken && <Login setAuthToken={handleSetAuthToken} />}
        {authToken && <div> <Navigation /> <MyRoutes authToken={authToken} /> </div>}
      </Router>
    </main>
  );
}
