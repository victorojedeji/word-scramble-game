

const wordTxt = document.querySelector(".word");

const definitionTxt = document.querySelector(".definition");

const TimeLeft = document.querySelector(".time-left");

const inputField = document.querySelector("#input");

const refreshBtn = document.querySelector(".refresh-btn");

const checkWordBtn = document.querySelector(".check-word");

let checkWord;


function startGame() {
    let randomObj = words;
    let randomNumb = Math.floor(Math.random() * randomObj.length);
    let randomObjValue = randomObj[randomNumb];


   // To scramble the random words from the object.
    strWord = randomObjValue.word.split("");
    for (i = strWord.length - 1; i > 0; i--){
        let d = Math.floor(Math.random() * (i + 1));
        let scr = strWord[i]
        strWord[i] = strWord[d]
        strWord[d] = scr
    }

   // Rendering the scrambled word and definition to the page (wordTxt)
    wordTxt.innerText = strWord.join("").toUpperCase()
    definitionTxt.innerText = randomObjValue.definition;
    checkWord = randomObjValue.word;
};
startGame();

refreshBtn.addEventListener("click", startGame);



const check = () => {
    checkWordBtn.addEventListener("click", () => {
        let inputTxt = inputField.value.toLowerCase();
        checkWordVal = checkWord.toLowerCase();
        if(!inputTxt){
        return alert("You have to write something to check!")
        }; if(inputTxt && (inputTxt == checkWordVal)){
        alert(`You got it!, ${inputTxt} is the correct word.`)
        inputField.value = "";
        startGame();
        };
        if(inputTxt && (inputTxt !== checkWordVal)){
            alert(`You are wrong!, ${inputTxt} is not the right word, try again.`);
            inputField.value = "";
        }
    });
};
check();
