import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😊": "blushing",
  "😂": "laughing",
  "✌": "victory",
  "😢": "sad",
  "👍": "thumbsup",

  "🤦‍♂️": "stressed"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Know Your Emotions</h1>
      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return <span> {emoji} </span>;
      })}
    </div>
  );
}
