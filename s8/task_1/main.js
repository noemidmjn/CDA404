function main() {
    alert('working');
    var randomNumber = Math.round(Math.random() * (20 - 10) + 10);

}

function buttonClicked () {
    var guessedNumber = document.getElementById("num_guessed");
    if (guessedNumber === randomNumber) {
        console.log("An exact match!");
    }
    else if (guessedNumber < randomNumber) {
        console.log("Smaller than the number");
    }

    else if (guessedNumber > randomNumber) {
        console.log("Larger than the number");
    }


}



