
// Generation du nombre aleatoire
let getRandomNumber = Math.floor(Math.random()* 100) + 1;

// nombre d'essai
let attempts = 0;

const button = document.querySelector('.btn');
button.addEventListener("click", startGuessing)

let sentence = document.querySelector('.sentence')

function startGuessing(){

    const guessInput = document.getElementById('inputNumber')
    const userGuess = parseInt(guessInput.value);
    
    // on verifie si c'est un chiffre dans l'input
    if(isNaN(userGuess)){
        sentence.innerHTML=("Mettre un chiffre s'il vous plait")
        return;
    }

    // incrementation du nombre d'essai
    attempts++

    if (userGuess === getRandomNumber) {
        sentence.innerHTML=`Bravo ! Tu as trouvé le nombre magique avec ${attempts} tentatives.`;
        resetGame();
      } else if (userGuess < getRandomNumber) {
        sentence.innerHTML="Trop bas ! Essai avec un chiffre plus grand.";
      } else {
        sentence.innerHTML="Trop grand ! Essai avec un chiffre plus petit.";
      }
    guessInput.value = "";
}

function resetGame() {
    // Reset le chiffre aleatoire ainsi que les essais
    getRandomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
  }
