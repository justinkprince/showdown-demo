import React from 'react';
import './App.css';
import showdown from 'showdown';

const converter = new showdown.Converter();
const markdown = `
# Some headline

* Some list
* Another list item
`;

const html = converter.makeHtml(markdown);

function App() {
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{__html: html}} className="content">
      </div>
    </div>
  );
}

export default App;
