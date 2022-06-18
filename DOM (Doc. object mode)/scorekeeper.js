var p1 = document.querySelectorAll("button")[0];
var p2 = document.querySelectorAll("button")[1];
var reset = document.querySelectorAll("button")[2];
var p1display = document.getElementById("p1display");
var p2display = document.querySelector("#p2display");
var input = document.querySelector("input");
var p = document.querySelector("p span");
var p1score =0;
var p2score = 0;
var gameover = false;
var winnigscore = 5;

p1.addEventListener("click", function(){
    if (!gameover){
        p1score++;
        if (p1score===winnigscore){
            p1display.classList.add("winner");
            gameover = true;
        }
        p1display.textContent = p1score;     
    }
});

p2.addEventListener("click", function(){
    if (!gameover){
        p2score++;
        if (p2score===winnigscore){
            p2display.classList.add("winner");
            gameover = true;
        }
        p2display.textContent = p2score;
    
    }
}); 
reset.addEventListener("click", function(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover = false;
});

reset.addEventListener("click", function(){
  reset()
});
function reset(){
p1score = 0;
p2score = 0;
p1display.textContent = 0;
p2display.textContent = 0;
p1display.classList.remove("winner");
p2display.classList.remove("winner");
gameover = false;
}

input.addEventListener("change", function(){
    p.textContent= this.value;
    winnigscore = Number(this.value);
    reset();
});