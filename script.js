var playing = false;
var score =0;
var timer = 60;
var correctanswer ;
var lives = 3;
var timeinterval ;
var value;

document.getElementById("start").onclick = () => {
    if (playing == true) {
        location.reload();
    } else {
        score = 0;
        playing = true;
        document.getElementById("start").innerHTML = "RESET";
        document.getElementById("scores").innerHTML = score;
        document.getElementById("timeremaining").innerHTML = timer;
         timeinterval = setInterval(() => {
            document.getElementById("timeremaining").innerHTML = timer;
            if (timer == 0) {
                gameover ();
            } else {
                timer -= 1;
            }
        }, 1000);
        generateQA();
    }
}

document.getElementById("box1").onclick = () => {
    value = document.getElementById("box1").innerHTML;
    if (playing = true) {
        if (value == correctanswer){
            score += 1;
            document.getElementById("scores").innerHTML = score;
            showbox("correctans");
            setTimeout(() => {
                hidebox("correctans");
            }, 1000);
            generateQA();
        } else {
            showbox("wrongans");
            lives -= 1 ;
            document.getElementById("lives").innerHTML = lives;
            if (lives == 0) {
                gameover();
                clearInterval(timeinterval);
            }
            setTimeout(() => {
                hidebox("wrongans");
            }, 1000);
        }
    }
}

document.getElementById("box2").onclick = () => {
    value = document.getElementById("box2").innerHTML;
    if (playing = true) {
        if (value == correctanswer){
            score += 1;
            document.getElementById("scores").innerHTML = score;
            showbox("correctans");
            setTimeout(() => {
                hidebox("correctans");
            }, 1000);
            generateQA();
        } else {
            showbox("wrongans");
            lives -= 1 ;
            document.getElementById("lives").innerHTML = lives;
            if (lives == 0) {
                gameover();
                clearInterval(timeinterval);
            }
            setTimeout(() => {
                hidebox("wrongans");
            }, 1000);
        }
    }
}

document.getElementById("box3").onclick = () => {
    value = document.getElementById("box3").innerHTML;
    if (playing = true) {
        if (value == correctanswer){
            score += 1;
            document.getElementById("scores").innerHTML = score;
            showbox("correctans");
            setTimeout(() => {
                hidebox("correctans");
            }, 1000);
            generateQA();
        } else {
            showbox("wrongans");
            lives -= 1 ;
            document.getElementById("lives").innerHTML = lives;
            if (lives == 0) {
                gameover();
                clearInterval(timeinterval);
            }
            setTimeout(() => {
                hidebox("wrongans");
            }, 1000);
        }
    }
}

document.getElementById("box4").onclick = () => {
    value = document.getElementById("box4").innerHTML;
    if (playing = true) {
        if (value == correctanswer){
            score += 1;
            document.getElementById("scores").innerHTML = score;
            showbox("correctans");
            setTimeout(() => {
                hidebox("correctans");
            }, 1000);
            generateQA();
        } else {
            showbox("wrongans");
            lives -= 1 ;
            document.getElementById("lives").innerHTML = lives;
            if (lives == 0) {
                gameover();
                clearInterval(timeinterval);
            }
            setTimeout(() => {
                hidebox("wrongans");
            }, 1000);
        }
    }
}

const gameover = () => {
    document.getElementById("lastscore").innerHTML = score;
    document.getElementById("gameover").style.display = "block";
    document.getElementById("start").innerHTML = "START";
} 

const showbox = (id) => {
    document.getElementById(id).style.display = "block";
}

const hidebox = (id) => {
    document.getElementById(id).style.display = "none";
}

const generateQA = () => {
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    document.getElementById("question").innerHTML = x + "x" + y ;
    correctanswer = x * y ;
    var correctposition = 1 + Math.round(3*Math.random());
    document.getElementById("box"+correctposition).innerHTML = correctanswer ;
    var answers = [correctanswer];
    for (i=1; i<5 ; i++) {
        if (i != correctposition) {
            var wronganswer;
            do {
                var x = 1 + Math.round(9*Math.random());
                var y = 1 + Math.round(9*Math.random());
                wronganswer = x * y ;
            } while(answers.indexOf(wronganswer)> -1)
            document.getElementById("box"+i).innerHTML = wronganswer;
            answers.push(wronganswer);
        }
    }
}


