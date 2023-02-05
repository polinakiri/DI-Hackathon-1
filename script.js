const words = [
    { word: "guitar", hint: "a musical instrument" },
    { word: "venus", hint: "planet of our solar system" },
    { word: "gold", hint: "a yellow precious metal" },
    { word: "coding", hint: "related to programming" },
    { word: "gif", hint: "a file format for image" },
    { word: "island", hint: "land surrounded by water" },
    { word: "python", hint: "programming language"}, 
    { word: "aim", hint: "a purpose or intention"},
    { word: "ebay", hint: "online shopping site"},
    { word: "bugs", hint: "related to programming"},
    { word: "mental", hint: "related to the mind"},
    { word: "map", hint: "diagram represent of an area"},
    { word: "hockey", hint: "a popular outdoor game"},
    { word: "github", hint: "code hosting platform"},
    { word: "silver", hint: "precious greyish-white metal"},
    { word: "email", hint: "related to exchanging message"},
    { word: "html", hint: "markup language for the web"},
    { word: "idea", hint: "a thought or suggestion"},
    { word: "rain", hint: "related to a water"}
  ];
  
  let word;
  let hint;
  const randomWordBox = document.querySelector(".random-word");
  const hintPara = document.querySelector(".hint");

  const msg = document.querySelector(".message");

  const remPara = document.querySelector(".remaining");

  const listOfTries = document.querySelector(".tries");
  
  function randomWord () {
    msg.innerText = `Let's play!`;
    remPara.innerText = `Remaining guesses: `
    listOfTries.innerText = `Wrong letters: `
      const randomItem = words[Math.floor(Math.random() * words.length)];
      word = randomItem.word;
      hintPara.innerText = `Hint: ${randomItem.hint}`;
      console.log(word);

      let hiddenLetters = "";
      for (let i = 0; i < word.length; i++) {
          hiddenLetters +=`<input type="text" disabled>`;
          randomWordBox.innerHTML = hiddenLetters;
      }
  }
  
  randomWord();

  const form = document.forms[0];
  form.addEventListener("submit", game);

  

  function game (event) {
    event.preventDefault();

    let userLetter = document.querySelector(".letter").value;

    const cell = document.querySelector(".random-word");

    const li = document.createElement("li");
   
    if (word.match(userLetter) != null) {
        let correctLetter = word.match(userLetter)[0];
        const indx = word.indexOf(correctLetter);
        cell.childNodes[indx].value = correctLetter;
        msg.innerText = `Good guess! The word has the letter ${userLetter.toUpperCase()}`;
    } else {
        li.appendChild(document.createTextNode(`${userLetter} `));
        listOfTries.appendChild(li);
        msg.innerText = `Oh no! The word has not the letter ${userLetter.toUpperCase()}`;
    }

    let maxNumOfTries = word.length + 2;
    let numOfTries = listOfTries.childNodes.length - 1;
    const remaining = maxNumOfTries - numOfTries;

    remPara.innerText = `Remaining guesses: ${remaining}`;

    let allInputs = cell.querySelectorAll("input");
    let lettersFromInputs = "";
    for (let i =0; i < word.length; i++) {
        if (allInputs[i].value != "") {
        lettersFromInputs += allInputs[i].value;
    }
    }

    if (remaining === 0) {
        alert(`Game over! You don't have remaining guesses.`);
        location.reload();
    } else if(lettersFromInputs.length === allInputs.length) {
        alert(`WINNER! You found the word ${word.toUpperCase()}.`);
        location.reload();
    } 
}

const newGame = document.querySelector(".start-btn");
newGame.addEventListener("click", randomWord);