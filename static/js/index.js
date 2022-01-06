function startgame(){

    var strt = document.getElementsByClassName("start")[0];
    var game = document.getElementsByClassName("game")[0];

    fetch("/" , {method: 'POST'})
    .then(res=>res.json())
    .then(
        function(data){
            strt.style.display = "none";
            game.style.display = "block";
            initialgame(data.word);
        }
    )
    
    
    
}


var l , mword , dword , sword;
function initialgame(word){

    l = word.length;
    mword = word;
    dword = word.split("");
    sword = Array(l).fill("_");
    stat = document.getElementsByClassName("status")[0];
    stat.innerHTML = sword.join(" ");

}

function playgame(){

    guess = document.getElementsByClassName("guess")[0].value;
    stat = document.getElementsByClassName("status")[0];
    lives = Number(document.getElementsByClassName("lives")[0].innerHTML);

    

}
