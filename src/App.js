import "./App.css";
import profile from "./assets/sabir.jpg";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
