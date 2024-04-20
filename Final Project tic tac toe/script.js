let move = "X";
let game = ["", "", "", "", "", "", "", "", ""];
function AddMove(i) {
    if (game[i] === "") {
        game[i] = move;
        render();
        if (win(move)) {
            setTimeout(() => {
                alert(move + " wins!");
                resetGame();
            }, 100);
        } else if (game.every(box => box !== "")) {
            setTimeout(() => {
                alert("It's a draw!");
                resetGame();
            }, 100);
        } else {
            move = move === "X" ? "O" : "X";
        }
    }
}
function win(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winConditions.some(combination => {
        return combination.every(i => game[i] === player);
    });
}
function render() {
    const cells = document.querySelectorAll('.box');
    cells.forEach((box, i) => {
        box.textContent = game[i];
    });
}
function resetGame() {
    game = ["", "", "", "", "", "", "", "", ""];
    move = "X";
    render();
}
render();