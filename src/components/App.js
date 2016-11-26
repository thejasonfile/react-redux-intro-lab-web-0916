import React, { Component } from 'react';
//import InventoryList from './InventoryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <InventoryList />
        </div>
      </div>
    );
  }
}

export default App;