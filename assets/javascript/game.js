$(document).ready(function() {
    //Varriables
    var gLeft = 9;
    //Inlcusions
    $("#left").html(gLeft);






// Guesses Left Function
$(function(){
    $(document).on('keypress', function(){
        if (gLeft<1) {
            gLeft = 9;
        }
        gLeft = gLeft - 1;
        $("#left").html(gLeft);
        
    });
});

// Guesses so far
$(function(){
    $(document).on('keypress', function(event){
        var userGuess = event.key;
        if (gLeft > 0) {
        $("#gSoFar").append(" " + userGuess);
        console.log(userGuess);
        }
        else {
        $("#gSoFar").text("Your Guesses so far:");
        }
    });

});

    
    // This function is run whenever the user presses a key.
    //document.onkeyup = function(event) {

        // Determines which key was pressed.
        //var userGuess = event.key;
  



});