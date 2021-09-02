import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = { name: 'rizal', email: 'rizal@inixindo.co.id' };
  const link = "http://inixindo.id";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ "Hello, Inixindo" }</p>
        <p>{ [1, 2, 3, 4, 5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }>Inixindo Site</a>
      </div>
    </div>
  );
}

/*
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Rizal" />;
ReactDOM.render(element, document.getElementById('root'));
*/

export default App;
