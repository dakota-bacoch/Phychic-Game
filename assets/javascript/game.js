$(document).ready(function () {
    //Variables
    var gLeft = 9;
    var letterList = "abcdefghijklmnopqrstuvwxyz".split('');
    var chosenLetter = "";
    var win = 0;
    var userGuess = "";

    //Inclusions
    $("#left").html(gLeft);
    $("#winGuess").html(win);

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

        }
    });
});