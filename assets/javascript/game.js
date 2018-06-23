$(document).ready(function () {
    //Variables
    var gLeft = 9;
    var letterList = "abcdefghijklmnopqrstuvwxyz".split('');
    var chosenLetter = "";
    var win = 0;
    var userGuess = "";
    var loss = 0;

    //Inclusions
    $("#left").html(gLeft);
    $("#winGuess").html(win);
    $("#loss").html(loss);

    chosenLetter = letterList[Math.floor(Math.random() * letterList.length)];
    console.log(chosenLetter);

    // Guesses so far
    $(document).on('keypress', function (event) {
        if (gLeft < 1) {
            gLeft = 9;
        }
        gLeft = gLeft - 1;
        $("#left").html(gLeft);

        userGuess = event.key;
        if (gLeft > 0) {
            $("#gSoFar").append(" " + userGuess);
        }
        else {
            $("#gSoFar").text("Your Guesses so far:");
        }
        if (chosenLetter === userGuess) {
            win++;
            $('#winGuess').html(win);
            chosenLetter = letterList[Math.floor(Math.random() * letterList.length)];
            $("#gSoFar").text("Your Guesses so far:");
            gLeft = 9;
            $('#left').html(gLeft);
            console.log(chosenLetter);

        }
        else if (gLeft === 0) {
            chosenLetter = letterList[Math.floor(Math.random() * letterList.length)];
            console.log(chosenLetter);
            loss++;
            $("#loss").html(loss);
        }
    });
});