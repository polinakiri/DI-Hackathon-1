const words = [
    { word: "javascript", hint: "programming language" },
    { word: "guitar", hint: "a musical instrument" },
    { word: "venus", hint: "planet of our solar system" },
    { word: "gold", hint: "a yellow precious metal" },
    { word: "coding", hint: "related to programming" },
    { word: "gif", hint: "a file format for image" },
    { word: "island", hint: "land surrounded by water" },
    { word: "chess", hint: "related to an indoor game" }
  ];
  
  let word = [];
  let hint;
  const randomWordBox = document.querySelector(".random-word");
  const hintPara = document.querySelector(".hint");
  
  function randomWord () {
      const randomItem = words[Math.floor(Math.random() * words.length)];
      word = randomItem.word;
      hint = randomItem.hint;
      hintPara.appendChild(document.createTextNode(hint));
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

    let msg = document.querySelector(".message");

    const listOfTries = document.querySelector(".tries");

    const li = document.createElement("li");
   
    if (word.match(userLetter) != null) {
        let correctLetter = word.match(userLetter)[0];
        const indx = word.indexOf(correctLetter);
        cell.childNodes[indx].value = correctLetter;
        msg.innerText = `Good guess! The word has the letter ${userLetter}`;
    } else {
        li.appendChild(document.createTextNode(`${userLetter} `));
        listOfTries.appendChild(li);
        msg.innerText = `Oh no! The word has not the letter ${userLetter}`;
    }

    let maxNumOfTries = word.length + 4;
    let numOfTries = listOfTries.childNodes.length - 1;
    const remaining = maxNumOfTries - numOfTries;

    const remPara = document.querySelector(".remaining");
    remPara.append(document.createTextNode(remaining));

//     let allInputs = cell.querySelectorAll("input");
//     // console.log(allInputs);


//     for (let x of allInputs) {
//     console.log(x.value);
//     }

//     if (remaining === 0) {
//         alert("Game over");
//     } else if (x.value != null) {
//         alert("winner")
//     }
//   }


  const newGame = document.querySelector(".start-btn");
  newGame.addEventListener("click", randomWord);