// The array for the default buttons
var defaultButtonsArray = ["time lord", "cyberman", "dalek", "tardis", "doctor who"];
// Function to create buttons from user searches
function createNewButton() {
    // sets the value of userSearchTerm to the value of the search box
    var userSearchTerm = $("#gif-search-box").val();
    // Sets the value of userButtonText to userSearchTerm 
    var userButtonText = userSearchTerm;
    // This var contains the code to create the user generated buttons
    var userSearchResultButton = $("<button>").addClass("btn btn-info search-result-btn ").attr('type', 'button', ).prop('value', userButtonText).text(userButtonText);
    // Appends new buttons to the button container
    $("#button-container").append(userSearchResultButton);
    // Clears the search box
    $("#gif-search-box").val("");
    $(".search-result-btn").on("click", function () {
        console.log("clicked");
        // sets the value of giffy search term to the value of the clicked button
        var giffySearchTerm = $(this).val();
        // the api url
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Bt8Wuq64T86SteyQs16W4wurw60Fjknn&q=" + giffySearchTerm + "&limit=10&offset=0&rating=PG&lang=en";
        // ajax call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.data);
            // loop to display resulting gifs from ajax call response
            for (g = 0; g < response.data.length; g++) {
                // sets the value of gif result source to the url contained in the data array of the ajax response
                var gifResultSource = response.data[g].images.original_still.url;
                // url to animated gif
                var gifResultSourceAnimated = response.data[g].images.original.url;
                // creates an image tag to display the gifs in
                var gifResult = $("<img>").addClass("gif-result").attr({
                    "src": gifResultSource,
                    "data-still": gifResultSource,
                    "data-animate": gifResultSourceAnimated,
                    "data-state": "still"
                });
                // appends gifs to the gifs container
                $("#gif-container").prepend(gifResult);
                console.log("the query url is " + queryURL);
            }
        })
    })
};


$(document).ready(function () {
    $( "#gif-search-box" ).focus();
    // for loop to create and display default buttons
    for (i = 0; i < defaultButtonsArray.length; i++) {
        var buttonText = defaultButtonsArray[i];
        var searchResultButton = $("<button>").addClass("btn btn-info search-result-btn").attr('type', 'button', ).attr('value', buttonText).text(buttonText);
        $("#button-container").append(searchResultButton);
    };

    // search button on click event
    $("#search-btn").on("click", function (event) {
        // prevents default submit button behavior
        event.preventDefault();
        if($("#gif-search-box").val() === ""){
            alert("Please enter a valid search term");
        }else{
            // create new button function call
            createNewButton();
        }
    });

    $(".gif-result").on("click", function () {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", gifResultSourceAnimated);
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", gifResultSource);
            $(this).attr("data-state", "still");
        }

    })
});