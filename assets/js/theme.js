const a = document.getElementById("colors");
const b = document.getElementById("background");
const c = document.querySelector('.settings');
const root = document.documentElement;

async function update() {
    let value = a.value;
    if(value == "dark") {
        b.style.background="#202020";
    } else if(value == "def") {
        b.style.background="#272829";
    } else if(value == "sky") {
        b.style.background="#1984a8";
    } 
}

a.addEventListener("change", () => {
    update();
})