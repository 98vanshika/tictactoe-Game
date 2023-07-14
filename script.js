console.log("Welcome to Tic Tac Toe")
let music = new Audio("success.mp3")
let audioturn = new Audio("tingplaying.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let gameend = false

//fuction to change the turn
const changeTurn = () =>{
    return turn === "X" ? "0" : "X"
}

//fuction to check win
const checkWin = ()=>{
    let boxtext =  document.getElementsByClassName('boxtext');
    let wins =  [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            music.play();
            gameend = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
            document.querySelector(".line").style.transform = 'translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)'
    }    
    });
}

//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText=== ''){
            boxtext.innerText = turn;
            turn = changeTurn()
            audioturn.play();
            checkWin();
            if(!gameend){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add oneclick listener to reset
reset.addEventListener('click',(e)=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    gameend = false
    gameover.play();
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
