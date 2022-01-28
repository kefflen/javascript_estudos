import logo from './logo.svg';
import './App.css';
import useAppContext from './hooks/useAppContext';

function App() {
  const ctx = useAppContext()
  return (
    <div className="App">
      {ctx.user}
    </div>
  );
}

export default App;
