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
      <UserInfo user={props.author} />
      <div className="Post-text">
        {props.text}
      </div>
      <div className="Post-date">
        {props.date}
      </div>
    </div>
  );
}

function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

export default App;
