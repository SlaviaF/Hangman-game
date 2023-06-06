import { useEffect, useState } from "react";
import words from "./wordList.json";
import "./App.css";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >=6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  function addGuessedLetter(letter: string) {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return;
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guessedLetters]);


  
  return (
    <div className="container">
      {isWinner && "Winner! - Refresh to try again" }
      {isLoser && "Nice Try - Refresh to try again "}
      <div className="result">
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      </div>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser} />

      <div className="display-keys">
        <Keyboard
          disabled= {isWinner||isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
