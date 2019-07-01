import React from 'react';
import logo from './logo.svg';
import {UserLogin} from './components/user';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <UserLogin />
    </div>
  );
};

export default App;
