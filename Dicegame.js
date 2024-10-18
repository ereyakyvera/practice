let images = ["die1.gif", "die2.gif", "die3.gif", "die4.gif", "die5.gif", "die6.gif"];
// I used copilot to help me format my code and fix some errors//
let dice = document.querySelectorAll("img");
function roll() {
    dice.forEach(function(die) {
        die.classList.add("shake");
    });
//especially with the audio function in the html, but i thought id let you know, as i dont know if that is allowed//
    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("shake");
        });

        let dieOneValue = Math.floor(Math.random() * 6) + 1;
        let dieTwoValue = Math.floor(Math.random() * 6) + 1;

        console.log("Die 1 Value: ", dieOneValue, "Die 2 Value: ", dieTwoValue);

        document.querySelector("#die-1").setAttribute("src", images[dieOneValue - 1]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue - 1]);
        document.querySelector("#total").innerHTML = "You rolled a " + (dieOneValue + dieTwoValue);
    }, 1000);  
}

roll();
 