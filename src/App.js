import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Login from "./pages/Login";

import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
