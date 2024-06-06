
import { useState, useEffect, react } from "react"
import { Button } from 'reactstrap'
import { getAllMessages } from "../../services/messageService"


export const MessageList = ({currentUser}) => {
  const [allMessages, setAllMessages] = useState([])


  useEffect(() => {
    getAllMessages().then((messages)=>{setAllMessages(messages)})
  }, [])

  return <article className="messages" > Current Messages:
      {allMessages.map(message => {
        return <div className=""><p>{message.timeStamp} {message.userId} {message.message}</p></div>
      })}
    </article>
  
}

export default (newMessage) => {
  return (
    <Button color="blue">New Message</Button>
  );
};
