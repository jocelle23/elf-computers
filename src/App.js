import React, { Component } from 'react';

import './App.css';
import FEATURES from './index';
import Header from './Components/Header';
import MainForm from './Components/Customize/MainForm';
import MainSummary from './Components/Cart/MainSummary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: FEATURES,
      selected: {}
    };
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <MainForm 
          features = {this.state.features}
          selected = {this.state.selected}
          updateFeature = {this.updateFeature}
          />
         <MainSummary 
          selected = {this.state.selected}
         />
        </main>
      </div>
    );
  }
}

export default App;