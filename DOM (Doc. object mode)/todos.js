var firstli = document.querySelector("li");
var lis = document.querySelectorAll("li");
// firstli.addEventListener("mouseover", function(){
//     this.style.color = "purple";
//     this.style.fontSize = 20;
// });

// firstli.addEventListener("mouseout", function(){
//     this.style.color = "black";
//     this.style.fontSize = 16;
// });

for (var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        
        this.classList.add("selected");
        this.style.fontSize = 20;
    });
    lis[i].addEventListener("mouseout", function(){        
        this.classList.remove("selected");
        this.style.fontSize = 16;
    });
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
};

