// Javascript goes here!

// Declare global variables
var startingButtons = ["Spongebob", "Squidward", "Patrick Star", "Mr. Krabs", "Plankton", "Mrs Puff", "Bubble Buddy",];

// On page load create default buttons
$( document ).ready(function() {
    
    function renderButtons() {
        // Clearing the 'buttons-view' div so that we do not have multiple buttons of the same type
        $("#button-container").empty();
        // Console log that the page has loaded
        console.log( "ready!" );
        // Create loop that will create buttons for each item in 'startingButtons' array
        for (i = 0; i < startingButtons.length; i++) {
            // create new button
            var btn = $("<button>")
            // give it a class of gif for styling and listening for click events
            btn.addClass("button");
            // Give the button a specific data attribute that we can grab on click
            btn.attr("data-name", startingButtons[i]);
            // Give the button some text so the client can see what they're clicking
            btn.text(startingButtons[i]);
            // Append the button to the container that holds the buttons
            $("#button-container").append(btn);
        };
    };
   
    // On Click of any button
    $("#submitButton").on("click", function (event) {
        event.preventDefault();
        // Console log that the create button button works and the listener is pointing to the right object
        console.log("You've hit the submit button!")
        // Get the value from the form input on submit
        var newTopic = $("#formInput").val().trim();
        // The new topic from the form is added to the 'startingButtons' array
        startingButtons.push(newTopic);
        // Rerunning the render buttons function to add the new button and give it the proper attributes
        renderButtons();
    });
    renderButtons();
    // Listening for a click on any button with the class of 'gif'
    $(document).on("click", ".button", function (){
        console.log(this);
        // Getting the value from the button
        var newGif = $(this).attr("data-name");
        // building my url for API query
        var apiKey = "BZI84sWlneOyO3eCWFkIM1AX7LC1u25V";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        newGif + "&api_key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            $("#gif-container").empty();
            console.log(response);
            var results = response.data;
            for (var i = 0; i < 10; i++) {
                var gifDiv = $("<div>").attr("id", "new-gif");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.prepend(p);
                gifDiv.prepend(personImage);
                $("#gif-container").prepend(gifDiv);
            }
        });
    })
});