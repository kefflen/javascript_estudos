import { DefaultTheme, ThemeProvider } from "styled-components"

import Header from "./components/Header";
import usePersistedState from "./hooks/usePersistedState";
import GlobalStyles from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

function App() {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light'? dark : light)
  }

  return (
    <ThemeProvider theme={theme}> 
      <div className="App">
        <Header toggleTheme={toggleTheme}/>

        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}

export default App;
