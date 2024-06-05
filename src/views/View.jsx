import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { TaskList } from "../components/tasks/TaskList.jsx"
import { TaskForm } from "../components/tasks/TaskForm.jsx"
// import { CustomerNav } from "../components/nav/CustomerNav.jsx"


export const CustomerViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>

                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
                <Route path="tasks">
                    <Route index element={<TaskList currentUser={currentUser} />} />
                    <Route path="create" element={<TaskForm currentUser={currentUser} />} />
                </Route>
            </Route>
        </Routes>
    )
}