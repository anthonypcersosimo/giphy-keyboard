// Javascript goes here!

// Declare global variables
var startingButtons = ["Spongebob", "Squidward", "Sandy Cheeks", "Patrick Star", "Mr. Krabs", "Plankton", "Mrs. Puff", "Bubble Buddy", "Boo Boo Keys"];

// On page load create default buttons
$( document ).ready(function() {
    
    // Console log that the page has loaded
    console.log( "ready!" );
    // Create loop that will create buttons for each item in 'startingButtons' array
    for (i = 0; i < startingButtons.length; i++) {
        // create new button
        var btn = $("<button>")
        // give it a class of gif for styling and listening for click events
        btn.addClass("gif");
        // Give the button a specific data attribute that we can grab on click
        btn.attr("data-name", startingButtons[i]);
        // Give the button some text so the client can see what they're clicking
        btn.text(startingButtons[i]);
        // Append the button to the container that holds the buttons
        $("#button-container").append(btn);
    }

    // On Click of any button
    
});