document.getElementById("highScore").innerHTML = "Highscore: " + localStorage.highScore;
var score = 0;
var up = 1;
var ded = "yes";
setInterval(checkPlayer, 10);
document.addEventListener("keydown", jump);
var player = document.getElementById("player");
var obstacle = document.getElementById("obstacle");
document.getElementById("demo").innerHTML = "Press any key to jump";

document.body.onkeydown = function(e){
    document.getElementById("demo").innerHTML = "";
}

function jump() {
    if (player.style.animation != "500ms ease 0s 1 normal none running jump") {
        player.style.animation = "jump 500ms";
        setTimeout(remove, 500);

    }
}

function remove() {
    player.style.animation = "none";
}

function checkPlayer() {
    var characterTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop > 125) {
        dead();
    } else {
        if (ded == "no") {

            score++;
            document.getElementById("score").innerHTML = "Score: " + score;
            if (score > 500 && score < 1000) {
                obstacle.style.animation = "none";
                document.getElementById("obstacle").style.animation = "block 850ms infinite linear";
                if (up == 1) {
                    up++;
                }
            }
            if (score > 2000 && score < 4999) {
                if (up == 2) {
                    up++;
                    obstacle.style.animation = "none";
                    document.getElementById("obstacle").style.animation = "block 750ms infinite linear";
                }
            }
            if (score < 5000) {
                if (up == 3) {
                    up++;
                    obstacle.style.animation = "none";
                    document.getElementById("obstacle").style.animation = "block 600ms infinite linear";
                }
            }
        }
    }
}

function dead() {

    document.getElementById("obstacle").style.animation = "p";
    document.getElementById("score").innerHTML = "Score: " + score;
    ded = "yes";
    document.getElementById("start").style.display = "block";
    obstacle.style.display = "none";
    document.getElementById("resetScore").style.display = "block";

    if (localStorage.highScore) {
        if (score > localStorage.highScore) {
            localStorage.highScore = score;
        }
    } else {
        localStorage.setItem("highScore", score);
    }
    document.getElementById("highScore").innerHTML = "Highscore: " + localStorage.highScore;

}

function start() {
    document.getElementById("demo").innerHTML = "";
    up = 1;
    score = 0;
    ded = "no";
    document.getElementById("obstacle").style.animation = "block 1s infinite linear";
    document.getElementById("start").style.display = "none";
    obstacle.style.display = "block";
    document.getElementById("resetScore").style.display = "none";

}

function deleteData() {
    document.getElementById("highScore").innerHTML = "Highscore: 0"
	localStorage.removeItem("highScore");
}

