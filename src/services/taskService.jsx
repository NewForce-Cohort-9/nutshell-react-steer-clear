export const getAllTasks = () => {
    return fetch(`http://localhost:8088/tasks`).then((res) => res.json())
}

export const getUserTasks = () => {
    return fetch(`http://localhost:8088/users?_embed=tasks`).then((res) => res.json())
}

export const createTask = (task) => {
    return fetch(`http://localhost:8088/tasks`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(task),
    })
}

export const completeTask = (task) => {
    return fetch(`http://localhost:8088/tasks/${task.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task),
    })
}