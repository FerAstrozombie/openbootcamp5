import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import TaskListComponent from "./components/container/task_list";
import './App.css'
import RegisterFormik from "./components/pure/form/registerFormik";
import HomeIcon from '@mui/icons-material/Home';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LoginIcon from '@mui/icons-material/Login';
import ChuckNorris from "./components/pure/ChuckNorris";

function App() {

  let logged = true;

  return (
    <ChuckNorris />
  )
}

export default App
