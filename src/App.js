
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
      <header className="App-header" >
        <h1>Ashlyn Hicks</h1> 
      <h3> Web Developer</h3>
      </header>
      <div className ="page" >
        <h2>Fork me on Github!</h2>
        <p>My Github handle is: <a href="https://github.com/ashattack">@ashattack </a> </p>
        <div id="github-contributions"></div>
        <div id="github-language-distribution" ></div>
      </div>
      <ReactMarkdown source={this.state.data} />
    </div>
    );
  }
}

export default App;
