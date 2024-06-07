import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createMessage } from "../../services/messageService.jsx"

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

export const MessageForm = ({ currentUser }) => {
  const [message, createNewMessage] = useState({task: "", dateToComplete: ""})

  const navigate = useNavigate()

  const handleSave = (event) => {
      event.preventDefault()

      if (message.message && message.dateToComplete) {
          const newTask = {
              userId: currentUser,
              message: message.message,
          }

          createTask(newMessage).then(() => {
              navigate("/messages")
          })
      } else {
          window.alert("Please fill out ALL fields!")
      }
  }

  const handleInputChange = (event) => {
      const stateCopy = { ...message } 
      stateCopy[event.target.name] = event.target.value
      setMessage(stateCopy)
  }

  return (
      <form className="profile">
          <h2>New Message</h2>
          <fieldset>
              <div className="form-group">
                  <label>Message:</label>
                  <input 
                      type="text"
                      name="message"
                      value={message?.message ? message.message : ""}
                      onChange={handleInputChange}
                      required
                      className="form-control"
                      />
              </div>
              <div className="form-group">
                  <button className="form-btn btn-primary" 
                  onClick={handleSave}>Post message</button>
              </div>
          </fieldset>
      </form>
  )
}