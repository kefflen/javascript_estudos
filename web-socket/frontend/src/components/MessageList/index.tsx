import { useEffect, useState } from "react"
import { api } from "../../services/api"
import styles from './MessageList.module.scss'
import { Message } from "./contracts"
import MessageItem from "./MessageItem"
import logoImg from '../../assets/logo.svg'
import { messageQueue } from "../../services/socket"


function renderMessages(messages: Message[]) {
  return messages.map(message => {
    const { id } = message
    return (
      <div key={id} className={styles.messageList}>
        <MessageItem message={message} />
      </div>
    )
  })
}

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])
  useEffect(() => {
    const timer = setInterval(() => {
      const nextMessage = messageQueue.shift()
      if (nextMessage) {
        setMessages((prevMessages) => {
          return [nextMessage, ...prevMessages.splice(0, 2)]
        })
      }
    }, 3000)
  })

  useEffect(() => {
    (async () => {
      const { data: messages } = await api.get<Message[]>("/last3messages")
      console.log(messages)
      setMessages(messages)
    }
    )()
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <img className={styles.logo} src={logoImg} alt="NLW heat logo" />
      {renderMessages(messages)}

    </div>
  )
}