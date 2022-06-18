document.getElementsByClassName("bolded");
document.getElementById("highlight")
document.getElementsByTagName("h1")
document.querySelector("#highlight")
document.querySelector("h1")
document.querySelectorAll("h1")[0];

var h1 = document.querySelector("h1")
h1.style.color = "blue";
h1.style.border = "15px solid pink";
h1.classList.add("big")
h1.classList.remove("big");
h1.textContent = "aaa";
h1.innerHTML = "sss"
var img1 = document.getElementsByTagName("img")
img1.getattribute("src")
img1.setattribute("src", "http://www.ggogoo.com")
var a = document.querySelector("a")[0]
a.setattribute("href", "http://corgi.com")
a.textContent = "Link to corgi.com"

var logo = document.querySelector("#hplogo")
logo.setAttribute("src", "http://www.nneww.com")
logo.style.width = "200px";
logo.style.height = "100px"
logo.style.border = "5px solid purple"

var links = document.getElementsByTagName("a")
for(var i = 0; i < links.length; i++){
    console.log(links[i].textContent);
}
for(var i = 0; i < links.length; i++){
    links[i].style.color = "orange";
}
for(var i = 0; i < links.length; i++){
    links[i].setAttribute("src", "https://www.bing.com");
}
for(var i = 0; i < links.length; i++){
  console.log(links[i].getAttribute("href") = "purple");
}

var lis = document.querySelectorAll("li")
for (var i=0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color = "pink"
    })
}
function changeText(){
    lis.textContent = "This is a new Li"
}