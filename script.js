let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreSpan = document.getElementById("user-score"); // Add an element with this ID in HTML
const compScoreSpan = document.getElementById("comp-score"); // Add an element with this ID in HTML
const resultDisplay = document.getElementById("result"); // Add this in your HTML to show game results

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
};

const updateScore = (winner) => {
    if (winner === "user") {
        userScore++;
        userScoreSpan.textContent = userScore;
        resultDisplay.textContent = "You Win! 🎉";
        resultDisplay.style.color = "green";
    } else if (winner === "computer") {
        compScore++;
        compScoreSpan.textContent = compScore;
        resultDisplay.textContent = "Computer Wins! 😔";
        resultDisplay.style.color = "red";
    } else {
        resultDisplay.textContent = "It's a Draw! 🤝";
        resultDisplay.style.color = "blue";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log(`User: ${userChoice}, Computer: ${compChoice}`);

    if (userChoice === compChoice) {
        updateScore("draw");
    } else {
        let userWin = (userChoice === "rock" && compChoice === "scissor") ||
                      (userChoice === "paper" && compChoice === "rock") ||
                      (userChoice === "scissor" && compChoice === "paper");

        userWin ? updateScore("user") : updateScore("computer");
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
