//author: Caila Linger purpose: to edit an existing event form

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getEventById, updateEvent } from "../../services/eventService.jsx"

export const EventEditForm = ({ currentUser }) => {

    const [currentEvent, setCurrentEvent] = useState({})

    const navigate = useNavigate()

    const {eventId} = useParams()

    useEffect (() => {
        getEventById(eventId).then((eventObj) => {
            setCurrentEvent(eventObj)
        })
    }, [])

    const handleSave = (event) => {
        event.preventDefault()

        if (currentEvent.event && currentEvent.date && currentEvent.location) {
            const editedEvent = {
                userId: currentUser,
                id: currentEvent.id,
                event: currentEvent.event,
                date: currentEvent.date,
                location: currentEvent.location,
            }
            updateEvent(editedEvent).then(() => {
                navigate("/events")
            })
        } else {
            window.alert("Please fill out all sections")
        }
    }

    const handleInputChange = (event) => {
        const stateCopy = { ...currentEvent }
        stateCopy[event.target.name] = event.target.value
        setCurrentEvent(stateCopy)
    }

    return (
        <form>
            <h2>Edit Event</h2>
            <fieldset>
                <div className="form-group">
                    <label>Event
                        <input
                            type="text"
                            className="form-control"
                            name="event"
                            value={currentEvent.event}
                            onChange={handleInputChange}
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
                            name="date"
                            value={currentEvent.date}
                            onChange={handleInputChange}
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
                            name="location"
                            value={currentEvent.location}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </fieldset> 
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info"
                        onClick={(e) => {handleSave(e)}}
                    >
                        Save Changes
                    </button>
                </div>
            </fieldset>                     
        </form>
    )
}