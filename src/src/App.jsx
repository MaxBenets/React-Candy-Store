import './App.css';
import * as React from "react"
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';

function App() {

  return (
    <div>
      <div className="App Container">
        <Header />
        <Cards />
      </div>
    </div>
  );
}

export default App;
