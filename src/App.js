import React from 'react';
import './App.css';

function App() {
  var first = "Rick";
  var last = "Dee";
  var greet = "Morning";
  var mood = "confused";
  var isAdmin = true

  return (
    <div className="App">
      <h1>
          {GetEnterMessage(GetGreeting(greet),
           GetNameTogether(first, last),
           GetMoodIndicator(mood))}
      </h1>
      <div id="junk">
        <h4>
          {GetIntroMessage(isAdmin)}
        </h4>
      </div>
    </div>

  );
}

function GetEnterMessage(funcA, funcB, funcC){
  return funcA + ' ' + funcB + funcC;
}

function GetNameTogether(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function GetGreeting(greeting) {
  switch (greeting) {
    case "Hello":
      return "Hello, ";
    case "Morning":
      return "Good morning, ";
    default:
      return "Hiya, ";
  }
}

function GetMoodIndicator(mood){
  var indicator = "";
  if (mood === "excited") {
    indicator = "!";
  }
  else if (mood === "normal") {
    indicator = ".";
  }
  else if (mood === "confused") {
    indicator = "?";
  }
  else {
    indicator = "...";
  }
  return indicator;
}

function GetIntroMessage(isAdmin){
  var message = "";
  if (isAdmin){
    message += "***ADMIN USER*** ";
  }
  message += "This is the landing page for any user, admin or not."
  return message;
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
