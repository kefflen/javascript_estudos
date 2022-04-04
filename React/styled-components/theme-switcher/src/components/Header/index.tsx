import { Container } from "./styles";

type HeaderProps = {
  toggleTheme: VoidFunction
}
export default function Header({ toggleTheme }: HeaderProps) {

  return (
    <Container>
      Hello word
      <button onClick={toggleTheme}>Trocar tema</button>
    </Container>
  )
}