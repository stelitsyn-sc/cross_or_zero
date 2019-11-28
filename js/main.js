"use strict";
const CROSS = "1";
const ZERO = "2";
const CELL_MAX = 9;

function renderGame() {
    return {
        getChoiceButton() {
            return Array.from(document.getElementsByClassName("button"));
        },
        displayField() {
            this.fillField();
            this.hideChoiceMenu();
            document.getElementById('field').style.display = "block";
        },
        hideChoiceMenu() {
            document.getElementById('choice').style.display = "none";
        },
        makeDiv() {
            return document.createElement("div");
        },
        makeElemCell() {
            let cell = this.makeDiv();
            cell.className = "cell";
            return cell;
        },
        fillField() {
            let field = document.getElementById("field");
            for (let i = 0; i < CELL_MAX; i++) {
                field.append(this.makeElemCell());
            }
        },
        fillCell(cell, state) {
            let elemDiv = this.makeDiv();
            this.setState(elemDiv, state);
            cell.target.append(elemDiv);
        },
        setState(elem, state) {
            if (state === true) {
                elem.className = "cross";
            } else {
                elem.className = "zero";
            }
            return elem;
        },
        getCells: function () {
            return Array.from(document.getElementsByClassName('cell'));
        }
    }
}

function eventHandler() {
    return {
        onClickChoiceButton(buttons, hanlder) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].onclick = hanlder;
            }
        },
        onClickCell(cells, handler) {
            for (let i = 0; i < cells.length; i++) {
                cells[i].onclick = handler;
            }
        }
    }
}

function game() {
    let render = renderGame();
    let event = eventHandler();
    let game = {
        step: 0,
        /** true === CROSS; false === zero; */
        currentPlayer: true,
        initialize() {
            event.onClickChoiceButton(render.getChoiceButton(), game.start);
        },
        start(firstState) {
            if (firstState.target.getAttribute("value") === ZERO) {
                game.currentPlayer = false;
            }
            render.displayField();
            event.onClickCell(render.getCells(), game.nextStep);
        },
        nextStep(elem) {
            if (elem.currentTarget.hasChildNodes()) {
                alert("You don`t choose this cell!");
            } else {
                
                game.currentPlayer = !game.currentPlayer;
                render.fillCell(elem, game.currentPlayer);
                game.step++;
                if (game.step >= 5) {
                    game.checkEndGame();
                }
            }
        },
        checkEndGame() {
            let cells = render.getCells();
            for (let i = 0; i < cells.length; i++) {
                console.log(cells[i]);
            }
        },
        end() {

        }
    };

    return game;
}

game().initialize();
