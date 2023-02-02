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
  let hint = [];
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

    const userLetter = document.querySelector(".letter").value;

    const cell = document.querySelector(".random-word");
   
    if (word.match(userLetter) != null) {
        let correctLetter = word.match(userLetter)[0];
        const indx = word.indexOf(correctLetter);
        cell.childNodes[indx].value = correctLetter;
        console.log(cell.childNodes[indx]);
    } else {
        const listOfTries = document.querySelector(".tries");
        listOfTries.appendChild(document.createTextNode(`${userLetter} `));
        console.log(listOfTries);
    }
  }