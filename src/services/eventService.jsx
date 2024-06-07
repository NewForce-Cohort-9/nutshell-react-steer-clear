export const getAllEvents = () => {
    return fetch('http://localhost:8088/events')
    .then((res) => res.json())
}

export const createEvent = (event) => {
    return fetch('http://localhost:8088/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event),
    })
}

export const deleteEvent = (eventId) => {
    return fetch (`http://localhost:8088/events/${eventId}`, {
        method: "DELETE",
    })
}

export const updateEvent = (event) => {
    return fetch(`http://localhost:8088/events/${event.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
}

export const getEventById = (eventId) => {
    return fetch(`http://localhost:8088/events/${eventId}`)
    .then((res) => res.json())
}