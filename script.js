let words;
let selectedWord;
let usedLetters;
let hangman;

function init(){
    usedLetters = new Array();

    words = new Array();
    words.push({word: "LARANJA", tip: "Fruta citrica"});
    words.push({word: "ABACAXI", tip: "Fruta com casta"});
    words.push({word: "TRABALHO", tip: "Onde passamos o maior tempo do dia"});
    words.push({word: "ESCOLA", tip: "Onde  se aprende coisas"});

    selectedWord = words[ parseInt( Math.random() * words.length ) ];

    document.getElementById("tip").innerHTML = selectedWord.tip;
    document.getElementById("letters").innerHTML = selectedWord.word.length;

    hangman = new Array();

    for(let i = 0; i < selectedWord.word.length; i ++){
        hangman.push("*");
    }

    document.getElementById("hangman").innerHTML = hangman.join(" ");
}

function check(){
    let newLetter = document.getElementById("input-letter").value.toUpperCase();

    usedLetters.push(newLetter);

    document.getElementById("used-letters").innerHTML = usedLetters.join(" - ");

    let remaining = 0;

    for(let i = 0; i < hangman.length; i ++){
        if( selectedWord.word[ i ] == newLetter ){
            hangman[ i ] = newLetter;
        }

        if( hangman[ i ] == "*" ){
            remaining ++;
        }
    }

    if( remaining == 0 ){
        alert("Done!");
    }

    document.getElementById("hangman").innerHTML = hangman.join(" ");
}