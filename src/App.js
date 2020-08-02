
import './App.css';
import React, { Component } from 'react';
const ReactMarkdown = require('react-markdown')

const input = '# This is a header\n\nAnd this is a paragraph'

class App extends Component {
  state = { data: '' }
  constructor(props) {
    super (props)
  }

  async getData() {
    const res = await fetch("hello-world.md");
    const data = await res.text();
    console.log(data);
    return this.setState({ data });
  }

  componentDidMount() {
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
