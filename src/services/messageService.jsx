export const getAllMessages = () => {
    return fetch("http://localhost:8088/messages")
    .then((response) => response.json())
}