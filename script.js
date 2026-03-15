<<<<<<< HEAD
function createSnow(){

const snow = document.createElement("div")

snow.className = "snow"

snow.innerHTML = "❄"

snow.style.left = Math.random() * window.innerWidth + "px"

snow.style.fontSize = (10 + Math.random() * 20) + "px"

snow.style.opacity = Math.random()

snow.style.animationDuration = (4 + Math.random() * 6) + "s"

document.body.appendChild(snow)

setTimeout(()=>{
snow.remove()
},10000)

}

=======
function createSnow(){

const snow = document.createElement("div")

snow.className = "snow"

snow.innerHTML = "❄"

snow.style.left = Math.random() * window.innerWidth + "px"

snow.style.fontSize = (10 + Math.random() * 20) + "px"

snow.style.opacity = Math.random()

snow.style.animationDuration = (4 + Math.random() * 6) + "s"

document.body.appendChild(snow)

setTimeout(()=>{
snow.remove()
},10000)

}

>>>>>>> 006279d7a66642c668d3f93414be5d1641f7f2ee
setInterval(createSnow,150)