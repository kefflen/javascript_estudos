import { motion } from "framer-motion";
import { Message } from "./contracts";
import styles from './MessageList.module.scss'

type MessageItemProps = {
  message: Message
}

export default function MessageItem({ message }: MessageItemProps) {
  const { text } = message
  const { name, avatar_url } = message.user
  
  return (
    <motion.li className={styles.messageItem}
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <p className={styles.messageContent}>
            {text}
          </p>
          <div className={styles.userContent}>
            <div className={styles.avatarWrapper}>
              <img className={styles.avatar} src={avatar_url} />
            </div>
            {name}
          </div>
        </motion.li>
  )
}