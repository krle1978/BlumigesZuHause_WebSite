    

function TreeClick(){
    var tree = document.getElementById("tree-img");
    var homeBtn = document.getElementById("home-div-btn");
    var flowersBtn = document.getElementById("flowers-div-btn");
    var plantsBtn = document.getElementById("plants-div-btn");
    var picturesBtn = document.getElementById("pictures-div-btn");

    tree.style.width = "400%";
    homeBtn.style.display = "flex";
    homeBtn.innerHTML = "HOME";

    flowersBtn.style.display = "flex";
    flowersBtn.innerText = "BLUMEN";

    plantsBtn.style.display = "flex";
    plantsBtn.innerText = "PFLANZEN";

    picturesBtn.style.display = "flex";
    picturesBtn.innerText = "BILDER";
}
function TreeBack(){
    var tree = document.getElementById("tree-img");
    var homeBtn = document.getElementById("home-div-btn");
    var flowersBtn = document.getElementById("flowers-div-btn");
    var plantsBtn = document.getElementById("plants-div-btn");
    var picturesBtn = document.getElementById("pictures-div-btn");

    tree.style.width = "100%";
    homeBtn.style.display = "none";
    flowersBtn.style.display = "none";
    plantsBtn.style.display = "none";
    picturesBtn.style.display = "none";
}
function HomeFunct(){
    var tree = document.getElementById("tree-img");
    var homeBtn = document.getElementById("home-div-btn");
    var flowersBtn = document.getElementById("flowers-div-btn");
    var plantsBtn = document.getElementById("plants-div-btn");
    var picturesBtn = document.getElementById("pictures-div-btn");
    var logoScreen = document.getElementById("img");

    tree.style.width = "100%";
    homeBtn.style.display = "none";
    flowersBtn.style.display = "none";
    plantsBtn.style.display = "none";
    picturesBtn.style.display = "none";

    logoScreen.style.display = "flex";
}

function FlowersFunct(){
    var tree = document.getElementById("tree-img");
    var homeBtn = document.getElementById("home-div-btn");
    var flowersBtn = document.getElementById("flowers-div-btn");
    var plantsBtn = document.getElementById("plants-div-btn");
    var picturesBtn = document.getElementById("pictures-div-btn");
    var logoScreen = document.getElementById("img");
    var flowersArticle = document.getElementById("flowers");

    tree.style.width = "100%";
    homeBtn.style.display = "none";
    flowersBtn.style.display = "none";
    plantsBtn.style.display = "none";
    picturesBtn.style.display = "none";
    logoScreen.style.display = "none";
    flowersArticle.style.display = "block";

}

function PlantsFunct(){
    var tree = document.getElementById("tree-img");
    var homeBtn = document.getElementById("home-div-btn");
    var flowersBtn = document.getElementById("flowers-div-btn");
    var plantsBtn = document.getElementById("plants-div-btn");
    var picturesBtn = document.getElementById("pictures-div-btn");
    var logoScreen = document.getElementById("img");
    var flowersArticle = document.getElementById("flowers");
    
    tree.style.width = "100%";
    homeBtn.style.display = "none";
    flowersBtn.style.display = "none";
    plantsBtn.style.display = "none";
    picturesBtn.style.display = "none";
    flowersArticle.style.display = "none";
    logoScreen.style.display = "none";

}
function PicturesFunct(){
    var tree = document.getElementById("tree-img");
    var homeBtn = document.getElementById("home-div-btn");
    var flowersBtn = document.getElementById("flowers-div-btn");
    var plantsBtn = document.getElementById("plants-div-btn");
    var picturesBtn = document.getElementById("pictures-div-btn");
    var logoScreen = document.getElementById("img");
    var flowersArticle = document.getElementById("flowers");

    tree.style.width = "100%";
    homeBtn.style.display = "none";
    flowersBtn.style.display = "none";
    plantsBtn.style.display = "none";
    picturesBtn.style.display = "none";
    flowersArticle.style.display = "none";
    logoScreen.style.display = "none";
}