console.info("[MangooO] settings.js loaded...");

let background = document.getElementById("background");
let themes = document.getElementById("themes");
let settings = document.getElementById("settings-button");
let checkbox_bimages = document.getElementById("backgroundimages");
let images = document.getElementById("other-settings");
let checkbox_value = true;
let imageControl = document.getElementById("images");
let primary_color = "#272829";


updateSettings();

function updateSettings() {
    images.style.display = "none";
    if(checkbox_value) {
    }
}

imageControl.addEventListener("click", () => {
    let imageType = document.getElementById("images").value;
    console.log(imageType);
    if(!checkbox_value) {
        if(imageType == "tokyo") {
            background.style.backgroundImage="url(assets/images/tokyo.jpg)";        
        } else if (imageType == "newyork"){
            background.style.backgroundImage="url(assets/images/newyork.jpg)";        
        }
    }
});

async function backgroundImage(){
    let imageType = document.getElementById("images").value;
    if(!checkbox_value) {
        if(imageType == "tokyo") {
            background.style.backgroundImage="url(assets/images/tokyo.jpg)";        
        } else if (imageType == "newyork"){
            background.style.backgroundImage="url(assets/images/newyork.jpg)";        
        }
    }
}

checkbox_bimages.addEventListener("click", () => {
    backgroundImage();
    console.log(primary_color)
    if(!checkbox_value) {
        images.style.display = "none";
        checkbox_value=true;
        background.style.background="#272829";
    } else {
        images.style.display = "block";
        checkbox_value=false;
    }

});

settings.addEventListener("click", () => {
    slide();
});

function slide(){
    document.querySelector('.settings').classList.toggle("toggle-mode");
}