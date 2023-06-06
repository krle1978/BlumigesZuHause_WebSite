document.getAnimations = Animacija;
document.getElementById('bird');

var obj1 = 100;
var obj2 = 200;
var bird = document.getElementById('bird');

function Animacija(e){

    if(e.keyCode == 39){
        obj1 += 4;
        bird.style.left = obj1 +'px';
    }
    if(e.keyCode == 37){
        obj1 -= 4;
        bird.style.left = obj1 +'px';
    }
    if(e.keyCode == 38){
        obj2 -= 4;
        bird.style.top = obj2 +'px';
    }
    if(e.keyCode == 40){
        obj2 += 4;
        bird.style.top = obj2 +'px';
    }
}