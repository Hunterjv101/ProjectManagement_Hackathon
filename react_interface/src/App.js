import logo from "./logo.svg";
import "./App.css";
import { Routes,Route } from "react-router-dom";
import Projects from "./Pages/projects";
import Add from "./Pages/add";
import Del from "./Pages/delete";
import Modify from "./Pages/modify";
import Home from "./Pages/home";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/delete" element={<Del/>} />
          <Route path="/modify" element={<Modify/>} />
      </Routes>

      
    </div>
  );
}

export default App;
