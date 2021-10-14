import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😊": "blushing",
  "😂": "laughing",
  "✌": "victory",
  "😢": "sad",
  "👍": "thumbsup",

  "🤦‍♂️": "stressed",
  "🥺": "pleading face",
  "🤩": "star-struck",
  "🤤": "drooling face",
  "😖": "confounded face"
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

  function handleClickOnEmoji(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Know Your Emotions</h1>
      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => handleClickOnEmoji(emoji)}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
