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

function App() {
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
