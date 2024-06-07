//author: Caila Linger this will show events
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createEvent } from "../../services/eventService.jsx"

export const EventForm = ({ currentUser }) => {
    const [event, setEvent] = useState({event: "", date: "", location: ""})

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()

        if (event.event && event.date && event.location) {
            const newEvent = {
                userId: currentUser,
                event: event.event,
                date: event.date,
                location: event.location,
            }

            createEvent(newEvent).then(() => {
                navigate("/events")
            })
        } else {
            window.alert("Please fill out all sections")
        }
    }

    return (
        <form>
            <h2>New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label>Event
                        <input
                            type="text"
                            className="form-control"
                            placeholder="event"
                            onChange={(event) => {
                                const eventCopy = {...event }
                                eventCopy.event = event.target.value
                                setEvent(eventCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Date
                        <input
                            type="date"
                            className="form-control"
                            placeholder="date of event"
                            onChange={(event) => {
                                const eventCopy = {...event }
                                eventCopy.date = event.target.value
                                setEvent(eventCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Location
                        <input
                            type="text"
                            className="form-control"
                            placeholder="location of event"
                            onChange={(event) => {
                                const eventCopy = {...event }
                                eventCopy.location = event.target.value
                                setEvent(eventCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset> 
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info"
                        onClick={handleSave}
                    >
                        Create Event
                    </button>
                </div>
            </fieldset>                     
        </form>
    )
}