import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { ArticleList } from "../components/articles/ArticleList.jsx"
import { ArticleForm } from "../components/articles/ArticleForm.jsx"
import { EventList } from "../components/events/EventList.jsx"
import { EventForm } from "../components/events/EventForm.jsx"
import { ArticleEditForm } from "../components/articles/ArticleEditForm.jsx"
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
                <Route path ="events">
                    <Route index element={<EventList currentUser={currentUser} />} />
                    <Route path=":create" element={<EventForm currentUser={currentUser} />} />
                </Route>

                {/* <Route 
                    path="tickets" 
                >
                    <Route index element={<TicketList currentUser={currentUser} />} />
                    <Route path="create" element={<TicketForm currentUser={currentUser} />} />
                </Route> */}
                <Route path="tasks">
                    <Route index element={<TaskList currentUser={currentUser} />} />
                    <Route path="create" element={<TaskForm currentUser={currentUser} />} />
                </Route>
            </Route>
        </Routes>
    )
}