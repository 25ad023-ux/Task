let currentPlayer = "X";

function play(cell) {
    if (cell.innerHTML === "") {
        cell.innerHTML = currentPlayer;

        if (checkWinner()) {
            alert(currentPlayer + " wins!");
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const cells = document.querySelectorAll(".cell");

    const wins = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    for (let win of wins) {
        const [a, b, c] = win;

        if (
            cells[a].innerHTML &&
            cells[a].innerHTML === cells[b].innerHTML &&
            cells[a].innerHTML === cells[c].innerHTML
        ) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    document.querySelectorAll(".cell").forEach(cell => {
        cell.innerHTML = "";
    });

    currentPlayer = "X";
}