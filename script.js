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

setInterval(createSnow,150)