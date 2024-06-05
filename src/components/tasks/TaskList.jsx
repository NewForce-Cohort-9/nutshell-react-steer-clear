import { useEffect, useState } from "react";
import { getAllTasks } from "../../services/taskService.jsx";
// import "./Tasks.css"
import React from "react";
import { Table } from "reactstrap";


export const TaskList = () => {
    const [allTasks, setAllTasks] = useState([])

    useEffect(() => {
        getAllTasks().then((taskArray) => {
            setAllTasks(taskArray)
    })
    }, [])

    return (
        <section className="tasks-container">
            <header>
                <h2>My Tasks</h2>
            </header>
            <div className="tasks-info">
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task</th>
                            <th>Expected Completion Date</th>
                            <th>Complete?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTasks.map((task) => (
                            <tr key={task.id} className="table-primary">
                                <th scope="row">
                                    {task.id}
                                </th>
                                <td>{task.task}</td>
                                <td>{task.dateToComplete}</td>
                                <td>
                                    <input type="checkbox" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </section>
    )
}