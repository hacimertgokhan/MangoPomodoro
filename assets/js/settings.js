console.info("[MangooO] settings.js loaded...");

let background = document.getElementById("background");
let themes = document.getElementById("themes");
let music = document.getElementById("music-button");
let settings = document.getElementById("settings-button");
let checkbox_bimages = document.getElementById("backgroundimages");
let images = document.getElementById("other-settings");
let checkbox_value = true;
let useImage;
let imageControl = document.getElementById("images");
let primary_color = "#303030";
let close_settings_menu = false;


function getUseImage(){return useImage;}
export{getUseImage};

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
        useImage = false;
        images.style.display = "none";
        checkbox_value=true;
        background.style.background=primary_color;
    } else {
        useImage = true;
        images.style.display = "block";
        checkbox_value=false;
    }

});

settings.addEventListener("click", () => {
    slide();
    if(close_settings_menu) {
        close_settings_menu = false;
    } else {
        close_settings_menu = true;
    }
});

function slide(){
    document.querySelector('.settings').style.opacity = 1;
    document.querySelector('.settings').classList.toggle("toggle-mode");
}