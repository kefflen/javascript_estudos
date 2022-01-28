import React, { createContext, useState } from 'react';
import './App.css';
import Teste from './components/Teste';

export const AppContext = createContext({
  name: "",
  setName: (value: string) => {}
})

function App() {
  let [name, setName] = useState("")

  return (
    <AppContext.Provider value={{
      name,
      setName
    }}>
      <div className="App">
        <Teste/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
