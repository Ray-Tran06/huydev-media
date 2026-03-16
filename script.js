const words = ["Developer.", "Web Builder.", "MMO Service.", "Gamer."];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

    currentWord = words[i];

    if (!isDeleting) {
        j++;
    } else {
        j--;
    }

    document.getElementById("typing").textContent = currentWord.substring(0, j);

    let speed = 100;

    if (isDeleting) {
        speed = 50;
    }

    if (!isDeleting && j === currentWord.length) {
        speed = 1500;
        isDeleting = true;
    }
    else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;

        if (i === words.length) {
            i = 0;
        }

        speed = 300;
    }

    setTimeout(typeEffect, speed);

}

typeEffect();