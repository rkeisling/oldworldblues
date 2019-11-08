import React from 'react';
import './App.css';

function App() {
  var first = "Rick";
  var last = "Dee";
  var greet = "Morning";
  var mood = "confused";

  return (
    <div className="App">
      <h1>{GetEnterMessage(GetGreeting(greet),
           GetNameTogether(first, last),
           GetMoodIndicator(mood))}</h1>
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

export default App;
