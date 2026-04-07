const botoes = document.querySelectorAll("#botoes-jogador button"); // vai buscar o resultado dos botoes e guarda tudo numa array
const userChoiceSpan = document.querySelector("#user-choice span"); // do jogador
const computerChoiceSpan = document.querySelector("#computer-choice span"); // do computador
const resultSpan = document.querySelector("#result span"); // do resultado

botoes.forEach((botao) => {
    botao.addEventListener("click", getUserChoice);
});

function getUserChoice() {
    const userChoice = this.innerText;
    userChoiceSpan.textContent = userChoice;

    const computerChoice = getComputerChoice();
    computerChoiceSpan.textContent = computerChoice;

    let result = getResult(userChoice, computerChoice);
    resultSpan.textContent = result;
}

function getComputerChoice() {
    const choices = ["Pedra", "Papel", "Tesoura"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Empate!";
    } else if (
        (userChoice === "Pedra" && computerChoice == "Tesoura") ||
        (userChoice === "Papel" && computerChoice == "Pedra") ||
        (userChoice === "Tesoura" && computerChoice == "Papel")
    ) {
        return "Ganhaste!";
    } else {
        return "Perdeste!";
    }
}
