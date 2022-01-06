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

    if(guess.length>1 || !isNaN(guess)){

        alert("Please enter a letter.");
        return;

    }

    if(dword.includes(guess)){

        countguess = mword.split(guess).lenght - 1;
        while(countguess>0){
            index = dword.indexof(guess);
            dword[index] = 0;
            sword[index] = guess;
        }
        stat.innerHTML = sword.join(" ");
        console.log(sword);

    }
    else{

        if(sword.includes(guess)){

            alert("You've already guessed " + guess);
            return;

        }

        else{
            
            if(lives==1){

                document.getElementsByClassName("guess")[0].style.display = "none";
                document.getElementsByClassName("guessbutton")[0].style.display = "none";
                document.getElementsByClassName("over")[0].innerHTML = "The word was : " + mword + "<br>Better luck next time!";

            }
            document.getElementsByClassName("lives")[0].innerHTML = lives - 1;

        }

    }

}
