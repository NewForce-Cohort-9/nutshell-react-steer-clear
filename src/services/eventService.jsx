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