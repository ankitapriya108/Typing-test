import React, { useState,useEffect } from 'react';

const Typing = () => {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [speed, setSpeed] = useState(0);


  useEffect(() => {
   const randomText = 'My name is Khan.';
        setText(randomText);
 }, []);


const handleInputChange = (e) => {
    setUserInput(e.target.value);

  };

const handleSubmit = (e) => {
    e.preventDefault();
  
    const words = text.trim().split(' ');
    const inputWords = userInput.trim().split(' ');
  
    const correctWords = words.filter((word, index) => inputWords[index] === word).length;
    const totalWords = words.length;
  
    const newAccuracy = ((correctWords / totalWords) * 100).toFixed(2);
    const newScore = Math.floor((correctWords / totalWords) * 100);
  
    setAccuracy(newAccuracy);
    setScore(newScore);
  };
     
   
  return (
    <div>
      <h1>Typing Test</h1>
      <p>Given Text: {text}</p>
      <form onSubmit={handleSubmit}>
        
        <textarea
          cols="70"
          rows="10"
          placeholder="Type the given text here..."
          value={userInput}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
      {score > 0 && (
        <div>
          <p>Score: {score}</p>
          <p>Accuracy: {accuracy}%</p>
          <p>Speed:{speed}WPM</p>
        </div>
      )}
    </div>
  );
};

export default Typing;


