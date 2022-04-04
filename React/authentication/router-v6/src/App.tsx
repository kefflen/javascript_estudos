import GlobalProvider from "./context/globalContext";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </div>
  )
}

export default App;


function Teste() {
  return <div>Hi dev</div>
}