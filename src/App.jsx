import TaskListComponent from "./components/container/task_list";
import './App.css'
import LoginFormik from "./components/pure/form/loginFormik";
import RegisterFormik from "./components/pure/form/registerFormik";
import TaskFormik from "./components/pure/form/taskFormik";

function App() {

  return (
    <>
      {/* <TaskFormik /> */}
      {/* <RegisterFormik /> */}
      {/* <LoginFormik/> */}
      <TaskListComponent />
    </>
  )
}

export default App
