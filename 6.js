let variants = ["rock", "paper", "scissors"];

function RockPaperScissors(select) {
    let randomvariant = Math.floor(Math.random() * variants.length);
    let compselect = variants[randomvariant];

    if (select === compselect) {
        return "Ничья";
    } else if (
        (select === "rock" && compselect === "scissors") ||
        (select === "paper" && compselect === "rock") ||
        (select === "scissors" && compselect === "paper")
    ) {
        return "Победа";
    } else {
        return "Проигрыш";
    }
}

console.log(RockPaperScissors("rock"));
``