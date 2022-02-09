
const choiceOne = document.getElementById('player-choice-1')
const choiceTwo = document.getElementById('player-choice-2')
const choiceThree = document.getElementById('player-choice-3')

const compChoiceOne = document.getElementById('computer-choice-1')
const compChoiceTwo = document.getElementById('computer-choice-2')
const compChoiceThree = document.getElementById('computer-choice-3')

let playName;
let computerChoice= 0;
let playerChoice = 0;
let playerScore = 0;
let computerScore = 0;


playName = prompt('Digite seu nome')

if (!playName) { playName = "Barata Tonta" }

document.getElementById('player-name').innerHTML = playName

document.getElementById('message').innerHTML = 'Bem-vindo ' + playName + ' esta preparado? Escolha uma opcao acima...'

function message(text) {
    document.getElementById("message").innerHTML =  text;
}

function calculateChoice(player, computer) {

    if (player == 1 && computer == 1) {
        return 0;
    } else if (player == 1 && computer == 2) {
        return 2;
    } else if (player == 1 && computer == 3) {
        return 1;
    } else if (player == 2 && computer == 1) {
        return 1;
    } else if (player == 2 && computer == 2) {
        return 0;
    } else if (player == 2 && computer == 3) {
        return 2;
    } else if (player == 3 && computer == 1) {
        return 2;
    } else if (player == 3 && computer == 2) {
        return 1;
    } else if (player == 3 && computer == 3) {
        return 0;
    }

}

function raffler(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addPlayerScore() {

    playerScore++; 
    document.getElementById('player-score').innerHTML = playerScore; 
}
function addComputerScore() {

    computerScore++;
    document.getElementById('computer-score').innerHTML = computerScore;
}

function select(type,choice) {
    document.getElementById(type + '-choice-' + choice).classList.add("selected")
}

function unSelect(type,choice) {
    document.getElementById(type + '-choice-' + choice).classList.remove("selected")
}


function play(choice) {
    playerChoice = choice;
    select('player',playerChoice);

    
    computerChoice = raffler(1, 3);
    select('computer',computerChoice)

    var winner = calculateChoice(playerChoice, computerChoice)

    if (winner == 0) {
        message("Deu Empate")
    } else if (winner == 1) {
        message(" Ai Sim " + playName + " Voce Ganhou")
        addPlayerScore();
    } else if (winner == 2) {
        message(" Perdeu Pro Boot Hein " + playName)
        addComputerScore();
    }

    setTimeout(() => {
        unSelect('player',playerChoice);
        unSelect('computer',computerChoice);
        message('<div style="color:white">'+ playName +' escolha uma opcao</div>');
    }, 1000);
}



choiceOne.onclick = function (e) { e.preventDefault(); play(1) }
choiceTwo.onclick = function (e) { e.preventDefault(); play(2) }
choiceThree.onclick = function (e) { e.preventDefault(); play(3) }

compChoiceOne.onclick = function (e) { e.preventDefault() }
compChoiceTwo.onclick = function (e) { e.preventDefault() }
compChoiceThree.onclick = function (e) { e.preventDefault()}

