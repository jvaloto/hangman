let words;
let selectedWord;
let usedLetters;
let hangman;

function init(){
    usedLetters = new Array();

    words = new Array();
    words.push({word: "Laranja", tip: "Fruta citrica"});
    words.push({word: "Abacaxi", tip: "Fruta com casta"});
    words.push({word: "Trabalho", tip: "Onde passamos o maior tempo do dia"});
    words.push({word: "Escola", tip: "Onde  se aprende coisas"});
    words.push({word: "Soco", tip: "O que você da nas pessoas"});

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
    let newLetter = document.getElementById("input-letter").value;

    usedLetters.push(newLetter);

    document.getElementById("used-letters").innerHTML = usedLetters.join(" - ");

    let completed = true;

    for(let i = 0; i < hangman.length; i ++){
        if(selectedWord.word[ i ] == newLetter){
            hangman[ i ] = newLetter;
        }else{
            completed = false;
        }
    }

    if( completed ){
        alert("Done!");
    }

    document.getElementById("hangman").innerHTML = hangman.join(" ");
}

// TODO gerar palavras dinamicas
// TODO usar pop/push/clear nas listas
// TODO desenvolver uma página para o visual
// TODO exibir letras já escolhidas
// TODO quando acertar, Substituir _ pela letra
// TODO lista de letras já utilizadas