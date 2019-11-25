const CROSS = 1;
const ZERO = 2;

let player1;
let player2;

let game = {
    step: 0,
    currentPlayer: undefined,
    start: function (item) {
        if (item === CROSS) {
            player1 = CROSS;
            player2 = ZERO;
        } else {
            player1 = ZERO;
            player2 = CROSS;
        }
        this.currentPlayer = player1;
        document.getElementById('choice').style.display = "none";
        document.getElementById('field').style.display = "block";
    },
    nextStep: function (elem) {
        if (elem.hasChildNodes()) {
            alert("You don`t choose this cell!");
            return;
        }
        let elemMod = document.createElement('div');
        if (this.currentPlayer === CROSS) {
            elemMod.className = "cross";
            this.currentPlayer = ZERO;
        } else {
            elemMod.className = "zero";
            this.currentPlayer = CROSS;
        }
        elem.append(elemMod);
        this.step++;
        if (this.step >= 5) {
            this.checkEndGame();
        }
    },
    checkEndGame: function () {
        let arrCell = document.getElementsByClassName('cell');
        for (let i = 0; i < arrCell.length; i++) {

        }
    },
    end: function () {

    }
};
