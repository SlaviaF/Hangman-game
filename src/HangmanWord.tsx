type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?:boolean;
};
const HangmanWord = ({ guessedLetters, wordToGuess, reveal=false }: HangmanWordProps) => {
  console.log(wordToGuess);
  return (
    <div className="word">
      {wordToGuess &&
        wordToGuess.split("").map((letter, index) => (
          <span key={index} style={{ borderBottom: ".1em solid black" }}>
            <span
              style={{
                visibility: guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
                  color: 
                  !guessedLetters.includes(letter) && reveal ?"red"
             : "black" }} 
            >
              {letter}
            </span>
          </span>
        ))}
    </div>
  );
};

export default HangmanWord;
