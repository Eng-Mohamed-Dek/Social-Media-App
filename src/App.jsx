import Login from "./components/Login";
import './App.css'
import WelcomePage from "./components/WelcomePage";
import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState('');

  let user = username;

  useEffect(() => {
    document.title = user ? `${username}'s Feed` : "Please Login Our Platform";
  }, [user])

  return user ? <WelcomePage user={username} setUsername={setUsername} /> : <Login setUsername={setUsername} />
}

export default App;
