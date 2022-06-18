// var color = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]
var h1 = document.querySelector("h1");
var numSquares = 6;
var color = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var message = document.getElementById("message");
var resetButton = document.getElementById("reset");
// var easyBtn = document.getElementById("easyBtn");
// var hardBtn = document.getElementById("hardBtn");
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     color = generateRandomColors(numSquares);
//     pickedcolor = pickcolor();
//     colordisplay.textContent = pickedcolor;
//     for (i = 0; i < squares.length; i++){
//         if (color[i]){
//         squares[i].style.background = color[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     color = generateRandomColors(numSquares);
//     pickedcolor = pickcolor();
//     colordisplay.textContent = pickedcolor;
//     for (i = 0; i < squares.length; i++){
//     squares[i].style.background = color[i];
//     squares[i].style.display = "block";
//     }
// })
var modeButton = document.querySelectorAll(".mode");
for (i = 0; i < modeButton.length; i++){
modeButton[i].addEventListener("click", function(){    
    modeButton[0].classList.remove("selected");
    modeButton[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();
})
}
function reset(){
    color = generateRandomColors(numSquares);
    pickedcolor = pickcolor();
    message.textContent = "";
    resetButton.textContent = "New Colors"
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < squares.length; i++){
        if (color[i]){
        squares[i].style.background = color[i];        
        squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }       
}
h1.style.background = "steelblue"; 
}
resetButton.addEventListener("click", function(){
    reset();
    // color = generateRandomColors(numSquares);
    // pickedcolor = pickcolor();
    // message.textContent = "";
    // this.textContent = "New Colors"
    // colordisplay.textContent = pickedcolor;
    // for (var i = 0; i < squares.length; i++){
    //     squares[i].style.background = color[i];
    //     h1.style.background = "steelblue"; 
    // }
})
colordisplay.textContent = pickedcolor;
for (i = 0; i < squares.length; i++){
    squares[i].style.background = color[i];
    squares[i].addEventListener("click", function(){
        var clickedcolor = this.style.background;
        if (clickedcolor === pickedcolor){
            message.textContent = "Correct";            
            changecolors(clickedcolor);
            h1.style.background = clickedcolor;
            resetButton.textContent = "Tray again";
            
        }
        else {this.style.background = "#232323"
            message.textContent = "Try again";
        }
        
    });
};

function changecolors(colors){
    for (var i=0; i < squares.length; i++){
    squares[i].style.background = colors;
}
};

function pickcolor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];
};

function generateRandomColors(num){
    var arr = [];
    for (i=0; i < num; i++){
        arr.push(randomcolor());
    }
    return (arr);
};

function randomcolor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};
