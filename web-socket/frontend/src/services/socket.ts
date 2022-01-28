import { io } from "socket.io-client"
import { Message } from "../components/MessageList/contracts"

const Queue: Message[] = []

const socket = io("http://localhost:4000")
socket.on('new_message', (newMessage: Message) => {
  messageQueue.push(newMessage)
})

let messageQueue = [...Queue]
export {
  socket, messageQueue
}