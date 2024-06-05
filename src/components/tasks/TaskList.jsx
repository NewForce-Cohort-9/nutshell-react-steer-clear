import { useEffect, useState } from "react";
import { getAllTasks } from "../../services/taskService.jsx";
import "./Tasks.css"
import React from "react";
import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";


export const TaskList = () => {
    const [allTasks, setAllTasks] = useState([])
    const [completedTask, setCompletedTask] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        getAllTasks().then((taskArray) => {
            setAllTasks(taskArray)
    })
    }, [])


    return (
        <div className="fullPage">
        <section className="tasks-container">
            <header className="task-info">
                <h2>My Tasks</h2>
            </header>
            <div className="task-table">
                <Table striped>
                    <thead>
                        <tr>
                            <th className="table-header">#</th>
                            <th className="table-header">Task</th>
                            <th className="table-header">Target Completion Date</th>
                            <th className="table-header"></th>
                        </tr>
                    </thead>
                    <tbody className="task">
                        {allTasks.map((task) => (
                            <tr key={task.id} className="table-primary">
                                <th scope="row" className="tasks-container">
                                    {task.id}
                                </th>
                                <td className="tasks-container">{task.task}</td>
                                <td>{task.dateToComplete}</td>
                                <td>
                                    <button className="task-btn"
                                            onClick={() => {
                                            setCompletedTask(true)
                                        }}
                                    >
                                        Complete Task
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div>
                <button className="form-btn"
                        onClick={() => {
                            navigate(`/tasks/create`)
                    }}
                >
                    Create New Task
                </button> 
            </div>
        </section>
        </div>
    )
}