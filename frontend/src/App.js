// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/Notestate";
import Alert from "./components/Alert";
import LoginTodo from "./components/LoginTodo";
import SingUpTodo from "./components/SingUpTodo";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    
    setAlert({
      alertText: message,
      alertType: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showalert={ShowAlert} />} />
              <Route exact path="/About" element={<About />} />
              <Route
                exact
                path="/login"
                element={<LoginTodo showalert={ShowAlert} />}
              />
              <Route
                exact
                path="/signup"
                element={<SingUpTodo showalert={ShowAlert} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
