import React from "react";
const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
};
const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false
}: KeyboardProps) => {
  return (
    <div className="keyboard">
      {keys.map((key, index) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={index}
            className={`btn ${isActive ? "active" : ""} 
            ${
              isInactive ? "inactive" : ""
            }`}
            disabled={isInactive||isActive ||disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
