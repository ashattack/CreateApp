
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

const ReactMarkdown = require('react-markdown')

const input = '# This is a header\n\nAnd this is a paragraph'

class App extends Component {
  async getData() {
    const res = await fetch("hello-world.md");
    const data = await res.text();
    console.log(data);
    return this.setState({ data });
  }

  state = await this.getData() 

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <ReactMarkdown source={input} />
      </header>
      <ReactMarkdown source={this.state.data} />
    </div>
    );
  }
}

export default App;
