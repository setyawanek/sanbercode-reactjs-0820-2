import React from 'react';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import Routes from './tugas-15/Routes'

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
