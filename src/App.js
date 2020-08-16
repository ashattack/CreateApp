
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">

      <header className="App-header" >
        <h1>Ashlyn Hicks</h1> 
        <h3> Web Developer</h3>
      </header>

      <div className="page">
        <h2>About Me</h2>
        <p>I popped outta the womb in Baltimore, Maryland where I ran free as a younggin. Florida is where I spent
          of my years, acting all cool, playing some b-ball at my school. I grew bored with the dull ways of an American
          life and decided I needed drop everything and move to Europe at the ripe age of 16. With the help of Interact Club and the
          Rotary Organization, I packed my bags and headed to the Faroe Islands. I spent a year here, frollicking in the fields and
          climbing mountains. I continued my studies but this time it wasn't in English, I had learned Faroese. When I came back
          to Florda I finished school, received my A.A degree in business and started teaching myself programming. Also, on another note,
          my love language is Words of Affirmations. Please don't forget it. :) </p>
      </div>

      <div className ="page" >
        <h2>Fork me on Github!</h2>
        <p>My Github handle is: <a href="https://github.com/ashattack">@ashattack </a> </p>
        <div id="github-contributions"></div>
        <div id="github-language-distribution" ></div>
      </div>

      <div className="page">
        <h2>foof</h2>
        <div className="github-card" data-github="ashattack" data-width="400" data-height="150" data-theme="default"></div>
        <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
      </div>
      
      <div id="footer"></div>
    </div>
    );
  }
}

export default App;
