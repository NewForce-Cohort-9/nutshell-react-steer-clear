import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { ArticleList } from "../components/articles/ArticleList.jsx"
import { ArticleForm } from "../components/articles/ArticleForm.jsx"
import { ArticleEditForm } from "../components/articles/ArticleEditForm.jsx"
import { TaskList } from "../components/tasks/TaskList.jsx"
import { TaskForm } from "../components/tasks/TaskForm.jsx"
import { NavBar } from "../components/nav/NavBar.jsx"
// import { CustomerNav } from "../components/nav/CustomerNav.jsx"


export const CustomerViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
                <Route path ="articles">
                    <Route index 
                    element={<ArticleList currentUser={currentUser} />} 
                    />
                    <Route path=":create" 
                    element={<ArticleForm currentUser={currentUser} />} 
                    />
                    <Route path="edit/:articleId" 
                    element={<ArticleEditForm currentUser={currentUser} />} 
                    />
                </Route>
                <Route path="tasks">
                    <Route index element={<TaskList currentUser={currentUser} />} />
                    <Route path="create" element={<TaskForm currentUser={currentUser} />} />
                </Route>
            </Route>
        </Routes>
    )
}