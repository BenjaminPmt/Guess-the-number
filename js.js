
// Generation du nombre aleatoire
let getRandomNumber = Math.floor(Math.random()* 100) + 1;

// nombre d'essai
let attempts = 0;

const button = document.querySelector('.btn');
button.addEventListener("click", startGuessing)

let sentence = document.querySelector('.sentence');
let attempt = document.querySelector('.attempt');
function startGuessing(){

    const guessInput = document.getElementById('inputNumber')
    const userGuess = parseInt(guessInput.value);
    
    // on verifie si c'est un chiffre dans l'input
    if(isNaN(userGuess)){
        sentence.innerHTML=("Mettre un chiffre s'il vous plait.")
        return;
    }
    // incrementation du nombre d'essai
    attempts++

    if (userGuess === getRandomNumber) {
        sentence.innerHTML=`Bravo &#9989; ! Tu as trouvé le nombre magique avec ${attempts} tentatives.
        Tape un nouveau chiffre si tu veux faire une nouvelle partie.`;
        attempt.innerHTML='';
        resetGame();
      } else if (userGuess < getRandomNumber) {
        sentence.innerHTML="&#10060; Trop bas ! Essaye avec un chiffre plus grand. &#128316;";
        attempt.innerHTML=`Tu es à ${attempts} tentative(s) !`
      } else {
        sentence.innerHTML="&#10060; Trop grand ! Essaye avec un chiffre plus petit. &#128317;";
        attempt.innerHTML=`Tu es à ${attempts} tentative(s) !`
      }
    guessInput.value = "";
}

function resetGame() {
    // Reset le chiffre aleatoire ainsi que les essais
    getRandomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
  }
