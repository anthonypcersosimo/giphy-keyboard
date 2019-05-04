// Javascript goes here!

// Declare global variables
var startingButtons = ["Spongebob", "Squidward", "Sandy Cheeks", "Patrick Star", "Mr. Krabs", "Plankton", "Mrs. Puff", "Bubble Buddy", "Boo Boo Keys"];
var btn = $("<button>")

$( document ).ready(function() {
    console.log( "ready!" );
    for (i = 0; i < startingButtons.length; i++) {
        var newButton = btn.addClass("dataButton");
        newButton.text(startingButtons[i]);
        $("#button-container").prepend(newButton);
    }
});