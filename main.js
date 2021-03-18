const square = document.querySelectorAll(".square");
const btn = document.querySelector("#reset");
const msg = document.getElementById("message");
const stand = document.querySelector("h3 big span")
const bag = document.querySelector(".content")
const nav = document.querySelector(".navbar")
var numSquare = 10
var color = [];
var winColor, winIndex, goal;
// var body = document.querySelector("body")
bag.style.backgroundColor = "grey";
setSquareColor(numSquare);



// code for when a square is clicked
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function(){
        if (winColor === this.style.backgroundColor) {
            convertAll(winColor);
        } else {
            this.style.backgroundColor = bag.style.backgroundColor
            msg.textContent = "Try Again!";
            
        }
    })
    
}

function genColor(){

    // generate three color streams 
    let red = Math.floor(Math.random()*(256));
    let green = Math.floor(Math.random()*(256));
    let blue = Math.floor(Math.random()*(256));

    
    let ranColor = "rgb(" + red.toString() + ", " + green.toString() + ", " + blue.toString()+ ")";
    console.log(ranColor)
    return ranColor;
}

// when you trigger the win 
function convertAll(){
    
    let nav = document.querySelector(".navbar");
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = winColor.toString();
        nav.style.backgroundColor = winColor.toString();
        btn.textContent = "Play Again?";
        msg.textContent = "Correct!"
    }
}

function setSquareColor(numSquare){

    color.length = numSquare;
    // generating 6 colors
    for (let i = 0; i < numSquare; i++) {
        color[i] = genColor();  
    }

    // setting the 6 colors to the squares 
    for (let i = 0; i < numSquare; i++) {
        square[i].style.backgroundColor = color[i].toString()
        console.log(square[i].style.backgroundColor)
    }
    
    winIndex = Math.floor(Math.random()*(color.length)); // setting the winning at random
    goal= document.querySelector("#goal");
    goal.textContent = color[winIndex];   // setting the array
    winColor = color[winIndex];    // setting the color that is 
    MessageChannel.textContent = " ";
}

btn.addEventListener("click", function(){
    setSquareColor(numSquare);
    btn.textContent = "New Colors"
});