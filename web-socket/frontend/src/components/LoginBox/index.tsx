import styles from "./LoginBox.module.scss"
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from "../../context/auth"
import { useContext } from "react"

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext)

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua menssagem</strong>
      <a href={signInUrl} className={styles.signInGithub}>
        <VscGithubInverted size="24" />
        Entrar com github
      </a>
    </div>
  )
}