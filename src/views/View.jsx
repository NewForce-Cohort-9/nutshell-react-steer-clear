import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { ArticleList } from "../components/articles/ArticleList.jsx"
import { ArticleForm } from "../components/articles/ArticleForm.jsx"
<<<<<<< HEAD
import { MessageList } from "../components/messages/MessageList.jsx"
import { MessageForm } from "../components/messages/MessageForm.jsx"

=======
import { ArticleEditForm } from "../components/articles/ArticleEditForm.jsx"
>>>>>>> main
import { NavBar } from "../components/nav/NavBar.jsx"
// import { CustomerNav } from "../components/nav/CustomerNav.jsx"
// import { TicketList } from "../components/tickets/TicketList.jsx"
// import { TicketForm } from "../components/forms/TicketForm.jsx"

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
<<<<<<< HEAD
=======

                {/* <Route 
                    path="tickets" 
                >
                    <Route index element={<TicketList currentUser={currentUser} />} />
                    <Route path="create" element={<TicketForm currentUser={currentUser} />} />
                </Route> */}
>>>>>>> main
            </Route>

            <Route path="messages" element={<MessageList/>}/>
            <Route path=":create" element={<MessageForm currentUser={currentUser} />} />
        </Routes>
    )
}