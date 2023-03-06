import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Exam from "./pages/Exam";
import ExamState from "./state/ExamState";

function App() {
  return (
    <div className="App">
      <ExamState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/" element={<Login />} />
            <Route path="signup/" element={<SignUp />} />
            <Route path="exam/" element={<Exam />} />
          </Routes>
        </BrowserRouter>
      </ExamState>
    </div>
  );
}

export default App;
