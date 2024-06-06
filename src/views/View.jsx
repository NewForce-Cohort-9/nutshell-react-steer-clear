import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { ArticleList } from "../components/articles/ArticleList.jsx"
import { ArticleForm } from "../components/articles/ArticleForm.jsx"
import { MessageList } from "../components/messages/MessageList.jsx"
import { MessageForm } from "../components/messages/MessageForm.jsx"

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

                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
                <Route path ="articles">
                    <Route index element={<ArticleList currentUser={currentUser} />} />
                    <Route path=":create" element={<ArticleForm currentUser={currentUser} />} />
                </Route>
            </Route>

            <Route path="messages" element={<MessageList/>}/>
            <Route path=":create" element={<MessageForm currentUser={currentUser} />} />
        </Routes>
    )
}