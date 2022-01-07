guess = document.getElementsByClassName("guess")[0];
guess.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        playgame();
    }
});


allfuncs = (function(){
    startgame = function(){
    
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
    
    
    var l , mword , dword , sword , already_guessed;
    initialgame = function(word){
    
        l = word.length;
        mword = word;
        dword = word.split("");
        sword = Array(l).fill("_");
        already_guessed = [];
        stat = document.getElementsByClassName("status")[0];
        stat.innerHTML = sword.join(" ");
    
    }
    
    playgame = function(){
    
        guess = document.getElementsByClassName("guess")[0].value;
        stat = document.getElementsByClassName("status")[0];
        lives = Number(document.getElementsByClassName("lives")[0].innerHTML);
    
        if(guess.length>1 || !isNaN(guess)){
    
            alert("Please enter a letter.");
            return;
    
        }
    
        if(dword.includes(guess)){
    
            already_guessed[already_guessed.length] = guess;
            countguess = mword.split(guess).length - 1;
            while(countguess>0){
                index = dword.indexOf(guess);
                dword[index] = 0;
                sword[index] = guess;
                countguess--;
            }
            stat.innerHTML = sword.join(" ");
    
            if(sword.join("")==mword){
    
                document.getElementsByClassName("guess")[0].style.display = "none";
                document.getElementsByClassName("guessbutton")[0].style.display = "none";
                document.getElementsByClassName("victory")[0].innerHTML = "Congratulations! Your guesses were on point";
    
            }
    
        }
        else{
    
            if(already_guessed.includes(guess)){
    
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
                already_guessed[already_guessed.length] = guess;
    
            }
    
        }
    
    }
    
    return [initialgame , playgame , startgame];
})()

initialgame = allfuncs[0];
playgame = allfuncs[1];
startgame = allfuncs[2];
