// document.querySelector(".msg").textContent = "right"
// document.querySelector(".number").textContent;
// document.querySelector(".hi-score").textContent = 20
// document.querySelector(".high-score").textContent = 50

let secrateNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
console.log(secrateNumber);

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector(".guess").value);

    if(!guess){
        document.querySelector(".msg").textContent = "😓 NO Number";
    }
    else if(guess===secrateNumber){
        document.querySelector('.msg').textContent = "🎉Right Numbar🎉";
        document.querySelector('.number').textContent = secrateNumber;
        document.querySelector('body').style.backgroundColor = 'green'
        // document.body.style.backgroundColor = "green";

        if(score>highscore){
            highscore = score;
            document.querySelector('.high-score').textContent = highscore;
        }
    }
    // for high number
    else if(guess>secrateNumber){
        if(score>1){
            document.querySelector('.msg').textContent = '📈Too High';
            score--
            document.querySelector('.hi-score').textContent = score;
        }
        else{
            document.querySelector('.msg').textContent = "Game Over";
            document.querySelector('.hi-score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red'
            // document.body.style.backgroundColor = "red";
        }
    }

    // for less number
    else if(guess<secrateNumber){
        if(score>1){
            document.querySelector('.msg').textContent = '📉Too Low';
            score--
            document.querySelector('.hi-score').textContent = score;
        }
        else{
            document.querySelector('.msg').textContent = "Game Over"
            document.querySelector('.hi-score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red'
            // document.body.style.backgroundColor = "red";
        }
    }
})

document.querySelector('.again').addEventListener('click',function(){
    const guess = Number(document.querySelector(".guess").value);

    score = 20
    secrateNumber = Math.trunc(Math.random()*20)+1;
    console.log(secrateNumber);
    document.querySelector('.hi-score').textContent = 20;
    document.querySelector('.msg').textContent = "Start guessing.......";
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#17594A'
    // document.body.style.backgroundColor = "#17594A";
    document.querySelector('.guess').value = '';

})