import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import TaskListComponent from "./components/container/task_list";
import './App.css'
import RegisterFormik from "./components/pure/form/registerFormik";

function App() {

  let logged = true;

  return (
    <Router>
      <Link to="/"> HOME </Link>
      <Link to="/registro"> REGISTER </Link>
      <Link to="/login"> LOGIN </Link>
      <Routes>
        <Route path="/" element={logged ? <TaskListComponent /> : <Navigate to="/login" replace />} />
        <Route path="/registro" element={<RegisterFormik />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
