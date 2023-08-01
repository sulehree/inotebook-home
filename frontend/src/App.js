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
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
