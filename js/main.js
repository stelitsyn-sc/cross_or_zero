"use strict";
const CROSS = 1;
const ZERO = 2;
const CELL_MAX = 9;
function renderGame() {
    return {
        initialize: function () {
            let buttons = document.getElementsByClassName("button");
            [].forEach.call(buttons, function (el) {
                el.onclick = function () {
                    game().start(this.getAttribute("value"));
                }
            });
        },
        displayField: function () {
            this.fillField();
            this.hideChoice();
            document.getElementById('field').style.display = "block";
        },
        hideChoice: function () {
            document.getElementById('choice').style.display = "none";
        },
        fillField: function () {
            let field = document.getElementById("field");
            for (let i = 0; i < CELL_MAX; i++) {
                let cell = document.createElement("div");
                cell.onclick = function () {
                    game().nextStep(this);
                };
                cell.className = "cell";
                field.append(cell);
            }
        },
        fillCell: function (cell, state) {
            let elemState = document.createElement("div");
            if (state === true) {
                elemState.className = "cross";
            } else {
                elemState.className = "zero";
            }
            cell.append(elemState);
        },
        getCells: function () {
            return document.getElementsByClassName('cell');
        }
    }
}

function game() {

    return  {
        step: 0,
        currentPlayer: true,
        initialize: function () {
            renderGame().initialize();
        },
        start: function (firstState) {
            renderGame().displayField();
        },
        nextStep: function (elem) {
            if (elem.hasChildNodes()) {
                alert("You don`t choose this cell!");
                return;
            }
            //change player
            renderGame().fillCell(elem, this.currentPlayer);
            this.step++;
            if (this.step >= 5) {
                this.checkEndGame();
            }
        },
        checkEndGame: function () {
            for (let i = 0; i < renderGame().getCells().length; i++) {

            }
        },
        end: function () {

        }
    };
}

game().initialize();