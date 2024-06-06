
import { deleteEvent } from "../../services/eventService.jsx"

export const Event = ({ event, getAndSetEvents}) => {

    const handleDelete = () => {
        deleteEvent(event.id).then(() => {
            getAndSetEvents()
        })
    }

    return (
        <section className="event" >
            <header className="event-info">
                {event.title}
            </header>
            <div>
                {event.synopsis}
            </div>
            <div>
                {event.link}
            </div>
            <div className="btn-container">
                <button className="btn btn-secondary" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </section>
    )
}