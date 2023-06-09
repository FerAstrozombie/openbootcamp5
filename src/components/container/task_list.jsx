import { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import TaskForm from "../pure/form/taskForm";
import TaskFormik from "../pure/form/taskFormik";

const TaskListComponent = () => {

    const defaulTask1 = new Task("Example 1", "description 1", true, LEVELS.URGENT);
    const defaulTask2 = new Task("Example 2", "description 2", false, LEVELS.NORMAL);
    const defaulTask3 = new Task("Example 3", "description 3", false, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaulTask1, defaulTask2, defaulTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Task State has been modified");
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log("TaskList component is going to unmount");
        }
    }, [tasks]);

    function completeTask(task) {
        console.log("Complete this task", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        console.log("Delete this task", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log("Add this task", task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr >
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Proirity</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => {
                            return (
                                <TaskComponent
                                    key={index}
                                    task={task}
                                    complete={completeTask}
                                    remove={deleteTask}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }

    let taskTable;

    if(tasks.length > 0){
        taskTable = <Table/>
    }else {
        taskTable = (
        <div style={{textAlign: "center"}}>
            <h3>There are no task to show</h3>
            <h4>Please, create one</h4>
        </div>)
    }

    const loadindStyle = {
        color: "grey",
        fontSize: "30px",
        fontWeight: "bold",
        textAlign:"center"
    }

    return (
        <div>
            <div className="col-12">
                <div className="card">
                    <div className="card-header p-3">
                        <h5>Your Task:</h5>
                    </div>
                    <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "400px" }}>
                        {loading ? (<p style={loadindStyle}>Loading task...</p>) : taskTable}
                    </div>
                </div>
            </div>
            <TaskFormik add={addTask} length={tasks.length} />
        </div>
    );
};

export default TaskListComponent;
