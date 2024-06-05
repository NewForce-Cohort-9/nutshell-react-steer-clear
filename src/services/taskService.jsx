export const getAllTasks = () => {
    return fetch(`http://localhost:8088/tasks`).then((res) => res.json())
}

export const getUserTasks = () => {
    return fetch(`http://localhost:8088/users?_embed=tasks`).then((res) => res.json())
}