import React, { Component } from 'react';
import List from './components/List';
import data from './iret.json';

class App extends Component {
  state ={
    searchTerms: ''
  }

  updateSearchTerms = (terms) => {this.setState({searchTerms: terms})}

  render() {
    return (
      <div className="App">
        <List data={data} searchTerms={this.state.searchTerms}></List>
      </div>
    );
  }
}

export default App;
