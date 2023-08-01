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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteState> 
    </div>
  );
}

export default App;
