import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
          This is a placeholder
      </h1>
      <div id="junk">
        <h4>
          Placeholder part 2
        </h4>
      </div>
    </div>

  );
}

function Post(props) {
  return (
    <div className="Post">
      <div className="UserInfo">
        <img className="Avatar">
          src={props.author.avatarUrl}
          alt={props.auther.name}
        </img>
        <div className='UserInfo-name'>
          {props.author.name}
        </div>
      </div>
      <div className="Post-text">
        {props.text}
      </div>
      <div className="Post-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

export default App;
