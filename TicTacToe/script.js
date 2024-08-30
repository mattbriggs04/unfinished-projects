let turn = 'x'
let player1 = 'lightblue'
let player2 = 'purple'
let gameboard = [1, 2, 3, 
                 4, 5, 6,
                 7, 8, 9]
let gameOver = false
function getColor(elementID) {
    return document.getElementById(elementID).style.backgroundColor
}
function threeInARow () {
    let r1g = 0
    let r1o = 0
    let r2g = 0
    let r2o = 0
    let r3g = 0
    let r3o = 0
    let c1g = 0;
    let c1o = 0;
    let c2g = 0;
    let c2o = 0;
    let c3g = 0;
    let c3o = 0;
    let cr1g = 0
    let cr1o = 0
    let cr2g = 0
    let cr2o = 0
    gameboard.forEach(element => {
          if(getColor('button' + element) === 'lightblue') {
            //check rows (green)
            if(element <= 3) {
                r1g++
            } else if( element <= 6) {
                r2g++
            } else if( element <= 9) {
                r3g++
            }
            //check columns (green)
            if( element === 1 || element === 4 || element === 7 ) {
                c1g++
            } else if( element === 2 || element === 5 || element === 8 ) {
                c2g++
            } else if( element === 3 || element === 6 || element === 9) {
                c3g++
            }
            
            //check first cross (green)
            if(element === 1 || element === 5 || element === 9) {
                cr1g++
            }

            //check second cross (green)
            if(element === 3 || element === 5 || element === 7) {
                cr2g++
            }
          }
          if(getColor('button' + element) === player2) {
            //check rows (orange)
            if(element <= 3) {
                r1o++
            } else if( element <= 6) {
                r2o++
            } else if( element <= 9) {
                r3o++
            }

            //check columns (orange)
            if( element === 1 || element === 4 || element === 7 ) {
                c1o++
            } else if( element === 2 || element === 5 || element === 8 ) {
                c2o++
            } else if( element === 3 || element === 6 || element === 9) {
                c3o++
            }

            //check first cross (orange)
            if(element === 1) {
                cr1o++
            } else if ( element === 5 ) {
                cr1o++
            } else if ( element === 9) {
                cr1o++
            }

            //check second cross (orange)
            if(element === 3) {
                cr2o++
            } else if ( element === 5 ) {
                cr2o++
            } else if ( element === 7) {
                cr2o++
            }
          }
    });
    if( r1g === 3 || r2g === 3 || r3g === 3 || c1g === 3 || c2g === 3 || c3g === 3 || cr1g === 3 || cr2g === 3 ) {
        return true
    }
    if( r1o === 3 || r2o === 3 || r3o === 3 || c1o === 3 || c2o === 3 || c3o === 3 || cr1o === 3 || cr2o === 3 ) {
        return true
    } else if( r1g + r1o + r2g + r2o + r3g + r3o === 9 ) {
        victory('DRAW')
    }
}
function victory(winner) {
    document.getElementById('winner').innerHTML = `${winner}`
    document.getElementById('winner').style.display = "block"
    gameOver = true;
}
for(let i = 0; i < 9; i++) {
    let button = 'button' + (i + 1)
    document.getElementById(button).onclick = () => {
        if(document.getElementById(button).style.backgroundColor === player1 || document.getElementById(button).style.backgroundColor === player2) {
            console.log("tile already selected")
        }
        else if(gameOver) {
            //do nothing so that it doesnt let the game keep playing
        }
        else if( turn === 'x' ) {
            document.getElementById(button).style.backgroundColor = player1
            turn = 'o'
            if(threeInARow()) {
                victory(player1 + ' WINS')
            }
        } else {
            document.getElementById(button).style.backgroundColor = player2
            turn = 'x'
            if(threeInARow()) {
                victory(player2 + ' WINS')
            }
        }

    }
}
