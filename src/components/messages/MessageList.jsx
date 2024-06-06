
import { useState, useEffect } from "react"
import { getAllMessages } from "../../services/messageService"


export const MessageList = ({currentUser}) => {
  const [allMessages, setAllMessages] = useState([])


  useEffect(() => {
    getAllMessages().then((messages)=>{setAllMessages(messages)})
  }, [])

  return <article className="messages"> Messages
      {allMessages.map(message => {
        return <div><p>{message.message}</p></div>
      })}
    </article>
  
}