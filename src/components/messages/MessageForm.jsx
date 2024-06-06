import { useState, useEffect } from "react"

export const MessageCard = ({message, currentUser, resetState}) => {

    const [users, setUsers] = useState([])
    const [assignedUser, setAssignedUser] = useState({})

    useEffect(() => {
        getAllUsers().then(userMessages => {
          setUsers(userMessages)
        })
    }, [])


    useEffect(() => {
        const foundUser = users.find((user) => {      
          return user.id === message?.userMessages[0]?.userId});
        
        setAssignedUser(foundUser)
    }, [users, message]) 
}
