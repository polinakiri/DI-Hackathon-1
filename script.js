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
  
      let hiddenLetters = "";
      for (let i = 0; i < word.length; i++) {
          hiddenLetters +=`<input type="text" disabled>`;
          randomWordBox.innerHTML = hiddenLetters;
      }
  }
  
  randomWord();