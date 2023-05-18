import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import DashBoard from "./pages/dashboard/DashBoard";
import LoginPage from "./pages/auth/LoginPage";

function AppRoutingOneFinal() {
  
  let logged = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={ logged ? <DashBoard /> : <Navigate to="/login" replace /> } />
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/dashboard" element={ logged ? <DashBoard /> : <Navigate to="/login" replace /> } />
        <Route element={ <NotFoundPage /> } />
      </Routes>
    </Router>
  )
}

export default AppRoutingOneFinal
