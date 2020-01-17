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
}


$(document).ready(function () {
    // for loop to create and display default buttons
    for (i = 0; i < defaultButtonsArray.length; i++) {
        var buttonText = defaultButtonsArray[i];
        var searchResultButton = $("<button>").addClass("btn btn-info search-result-btn").attr('type', 'button', ).prop('value', buttonText).text(buttonText);
        $("#button-container").append(searchResultButton);
    }

    // search button on click event
    $("#search-btn").on("click", function (event) {
        // prevents default submit button behavior
        event.preventDefault();
        // create new button function call
        createNewButton();
    })
    // search result button on click event
    $(".search-result-btn").on("click", function () {
        // the api url
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Bt8Wuq64T86SteyQs16W4wurw60Fjknn&q="+ giffySearchTerm +"&limit=10&offset=0&rating=PG&lang=en";
        // sets the value of giffy search term to the value of the clicked button
        var giffySearchTerm = $(this).val();
        console.log(giffySearchTerm);
        // ajax call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            // loop to display resulting gifs from ajax call response
            for(g = 0; g < response.data.length; g ++){
                // sets the value of gif result source to the url contained in the data array of the ajax response
                var gifResultSource = response.data.url;
                // creates an image tag to display the gifs in
                var gifResult = $("<img>").addClass("gif-result-"+g).attr("src", gifResultSource);
                // appends gifs to the gifs container
                $("#gif-container").append(gifResult);
            }
        })
    })
    // on click gif plays

    // on next click gif stops
});