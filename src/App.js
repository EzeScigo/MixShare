import React from 'react';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    );

  }

}

export default App;
