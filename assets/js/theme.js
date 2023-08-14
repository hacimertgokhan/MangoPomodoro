console.info("[MangooO] theme.js loaded...");

const a = document.getElementById("colors");
const b = document.getElementById("background");
const root = document.documentElement;
var c = document.getElementById("consolemessage");
import { getUseImage } from './settings.js';

async function update() {
    let value = a.value;
    if(!getUseImage()) {
        if(value == "dark") {
            b.style.background="#202020";
        } else if(value == "def") {
            b.style.background="#272829";
        } else if(value == "sky") {
            b.style.background="#1984a8";
        } 
    } else {
        c.innerText = "You cant use themes while images open.";
        setTimeout(() => {
            c.innerText = "Hello...";
        }, 5000)
    }
}

a.addEventListener("change", () => {
    update();
})