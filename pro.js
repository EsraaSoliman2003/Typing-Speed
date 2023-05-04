//Array of words
const arrWords = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

// setting levels
const levels={
    "Easy": 5,
    "Normal": 3,
    "Difficult": 2,
};

// default level
let defaultLvl = "Easy",
    defaultSeconds = levels[defaultLvl];

// catch selector
let levelName = document.querySelector(".levelName"),
    duration = document.querySelector(".duration"),
    startButton = document.querySelector(".startButton"),
    theWord = document.querySelector(".theWord"),
    input = document.querySelector("input"),
    words = document.querySelector(".words"),
    leftTime = document.querySelector(".leftTime"),
    mark = document.querySelector(".mark"),
    fullMark = document.querySelector(".fullMark");

//setting spans inner
levelName.innerHTML= defaultLvl;
duration.innerHTML= defaultSeconds;
leftTime.innerHTML= defaultSeconds;
fullMark.innerHTML= arrWords.length;

//stop paste
input.onpaste=function(){
    return false;
}

//start button
startButton.onclick = function(){
    this.remove();
    input.focus();
    getWord();
}

function getWord(){
    //get random word and its index
    let randomWord = arrWords[Math.floor(Math.random()*arrWords.length)],
        wordIndex = arrWords.indexOf(randomWord);
    //show word
    theWord.innerHTML=randomWord;
    //cut the word from array
    arrWords.splice(wordIndex, 1);
    //empty words place
    words.innerHTML="";
    //add every word to div
    for(let i=0 ; i<arrWords.length ; i++){
        let div = document.createElement("div");
        let text = document.createTextNode(arrWords[i]);
        div.appendChild(text);
        words.appendChild(div);
    }
    // call start play function
    startPlay();
}

function startPlay(){
    //set time
    leftTime.innerHTML=defaultSeconds;
    let start = setInterval(function(){
        leftTime.innerHTML--;
        if(leftTime.innerHTML==="0"){
            //stop timer
            clearInterval(start);
            //check if the anser is right
            if(input.value.toLowerCase()===theWord.innerHTML.toLowerCase()){
                //empty text input
                input.value="";
                //increase grade
                mark.innerHTML++;
                //check if still words in main array
                if(arrWords.length>0){
                    getWord();
                }
                else{
                    let endgame=document.createElement("div");
                    endgame.className="good";
                    let endgameText=document.createTextNode("Pravoo ^__^");
                    endgame.appendChild(endgameText);
                    document.querySelector(".finish").appendChild(endgame);
                }
            }
            else{
                //creat div for end game
                let endgame=document.createElement("div");
                endgame.className="bad";
                let endgameText=document.createTextNode("Game Over");
                endgame.appendChild(endgameText);
                document.querySelector(".finish").appendChild(endgame);
            }
        }
    }, 1000)
}
