function maru(){
    var music = new Audio('1.mp3');
    music.currentTime = 0;
    music.play();
    window.alert('正解!!');
    
}

function batu(){
    window.alert('不正解');
}