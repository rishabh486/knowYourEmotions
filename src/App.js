import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😊": "blushing",
  "😂": "laughing",
  "✌": "victory",
  "😢": "sad",
  "👍": "thumbsup",

  "🤦‍♂️": "stressed",
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [emojiName, setEmojiName] = useState("");
  function emojiInputHandler(event) {
    console.log(event.target.value);
    if (event.target.value.length == 0) {
      setEmojiName("");
    } else {
      var userInput = event.target.value;

      var meaning_value = emojiDictionary[userInput];
      if (meaning_value === undefined) {
        setEmojiName("we dont have this in our database");
      } else setEmojiName(meaning_value);
    }
  }

  return (
    <div className="App">
      <h1>Know Your Emotions</h1>
      <input onChange={emojiInputHandler} />

      <h2> {emojiName} </h2>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return <span> {emoji} </span>;
      })}
    </div>
  );
}
