// author: Iris Lee purpose: to list all saved articles for user

import { useEffect, useState } from "react"
import { getAllEvents } from "../../services/eventService.jsx"
import { Event } from "./Event.jsx"
import { useNavigate } from "react-router-dom"

export const EventList = ({ currentUser } ) => {
    const [userEvents, setUserEvents] = useState([])

    const navigate = useNavigate()

    //get events for current user
    const getAndSetEvents = () => {
        getAllEvents().then((eventsArray) => {
            const userEventsArray = eventsArray.filter(
                event => event.userId === currentUser
            ).sort((a,b) => a.date > b.date ? -1 : 1)
            setUserEvents(userEventsArray)
        })
    }

    useEffect(()=> {
        getAndSetEvents()
    }, [currentUser])

    return (
        <div className="events-container">
            <h2>Events</h2>
            <event className="events">
                {userEvents.map(eventObj => {
                    return <Event
                    event={eventObj}
                    currentUser={currentUser}
                    getAndSetEvents={getAndSetEvents}
                    key={eventObj.id}
                    />
                })}
            </event>
            <button
                    className="filter-btn btn-primary"
                    onClick={() => {
                        navigate("/events/create")
                    }}
                >
                    New Event
                </button>
        </div>
    )
}