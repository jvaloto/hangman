let words;
let selectedWord;

function init(){
    words = new Array();
    words.push({word: "Laranja", tip: "Fruta citrica"});
    words.push({word: "Abacaxi", tip: "Fruta com casta"});
    words.push({word: "Trabalho", tip: "Onde passamos o maior tempo do dia"});

    selectedWord = words[ parseInt( Math.random() * words.length ) ];

    console.log(selectedWord);
}

function check(){
    console.log("teste");
}

// TODO gerar palavras dinamicas
// TODO usar pop/push/clear nas listas
// TODO desenvolver uma página para o visual
// TODO exibir letras já escolhidas
// TODO quando acertar, Substituir _ pela letra
// TODO lista de letras já utilizadas