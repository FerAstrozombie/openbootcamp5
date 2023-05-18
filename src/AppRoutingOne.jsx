import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import Taskpage from "./pages/tasks/TaskPage"
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import { useEffect } from "react";

function AppRoutingOne() {

  let logged = localStorage.getItem("credentials");

  useEffect(() => {
    logged = localStorage.getItem("credentials");
    console.log("User logged", logged);
  },[]);

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT ||</Link>
          <Link to="/login"> LOGIN ||</Link>
        </aside>
        <main>
          <Routes>
            <Route exact path="/" element={ <HomePage /> } />
            <Route path="/login" element={ logged ? <HomePage /> : <LoginPage /> } />
            <Route path="/about" element={ <AboutPage /> } />
            <Route path="*" element={ <NotFoundPage /> } />
            <Route path="/profile" element={logged ? <ProfilePage /> : <Navigate to="/login" replace /> } />
            <Route path="task" element={ <Taskpage />}/>
            <Route path="task/:id" element={<TaskDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default AppRoutingOne
