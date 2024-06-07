//author: Caila Linger this will show events

import { deleteEvent } from "../../services/eventService.jsx"
import { useNavigate } from "react-router-dom"

export const Event = ({ event, getAndSetEvents}) => {

    const navigate = useNavigate()

    const handleDelete = () => {
        deleteEvent(event.id).then(() => {
            getAndSetEvents()
        })
    }

    return (
        <section className="event" >
            <header className="event-info">
                {event.event}
            </header>
            <div>
                {event.date}
            </div>
            <div>
                {event.location}
            </div>
            <div className="btn-container">
                <button className="filter-btn btn-primary" 
                onClick={() => {
                    navigate(`/events/edit/${event.id}`)
                }}>
                    Edit
                </button>
                <button className="btn btn-secondary" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </section>
    )
}