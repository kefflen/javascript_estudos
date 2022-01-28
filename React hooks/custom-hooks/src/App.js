import './App.css';
import { UserHooks } from './hooks/userHooks';

function App() {
  const { user } = UserHooks()

  return (
    <div className="App">
      {user}
      
    </div>
  );
}

export default App;
