/*Get Elements*/
const yesBtn = document.getElementById("yes_btn")
const noBtn = document.getElementById("no_btn")
const scoreDisplay = document.getElementById("score")
const image = document.getElementById("image")

/*Game Setup*/
let score = 0
const scoreFromStorage = localStorage.getItem("currScore")
if(scoreFromStorage){
    score = scoreFromStorage
    renderScore(score)
}

/*Audio*/
var correct = new Audio("soundEffects/correct.mp3");
var incorrect = new Audio("soundEffects/incorrect.mp3");

/*Num Images*/
const sheepImages = 20
const nonSheepImages = 20

/*Set first image*/
let isCurImageSheep = switchPic()

/*Button Presses*/
yesBtn.addEventListener("click", function(){
    if(isCurImageSheep){
        score++
        correct.cloneNode().play()
    } else {
        score = 0
        incorrect.cloneNode().play()
    }
    isCurImageSheep = switchPic()
    renderScore(score)
})

noBtn.addEventListener("click", function(){
    if(!isCurImageSheep){
        score++
        correct.cloneNode().play()
    } else {
        score = 0
        incorrect.cloneNode().play()
    }
    isCurImageSheep = switchPic()
    renderScore(score)
})

function renderScore(score){
    localStorage.setItem("currScore", score)
    scoreDisplay.textContent = `Score: ${score}`
}

function switchPic(){
    let isSheep = Math.floor(Math.random() * 2)
    if (isSheep){
        let imageNum = Math.floor(Math.random() * sheepImages) + 1
        image.src = `imgs/sheep${imageNum}.jpg`
        return 1
    } else {
        let imageNum = Math.floor(Math.random() * nonSheepImages) + 1
        image.src = `imgs/notsheep${imageNum}.jpg`
        return 0
    }
}