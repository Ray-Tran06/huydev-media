// Snow effect
function createSnow(){

const snow = document.createElement("div");

snow.className = "snow";

snow.innerHTML = "❄";

snow.style.left = Math.random() * window.innerWidth + "px";

snow.style.fontSize = (10 + Math.random() * 20) + "px";

snow.style.opacity = Math.random();

snow.style.animationDuration = (4 + Math.random() * 6) + "s";

document.body.appendChild(snow);

setTimeout(()=>{
snow.remove();
},10000);

}

setInterval(createSnow,150);


// Typing effect
const text = ["Developer","Web Builder","MMO Service"];
let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

current = text[count];
letter = current.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === current.length){
count++;
index = 0;
setTimeout(type,1500);
}else{
setTimeout(type,100);
}

})();