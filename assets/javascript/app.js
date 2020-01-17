var defaultButtonsArray = ["time lord", "cyberman", "dalek", "tardis", "doctor who"];

function createNewButton() {
    var userSearchTerm = $("#gif-search-box").val();
    var userButtonText = userSearchTerm
    var userSearchResultButton = $("<button>").addClass("btn btn-info search-result-btn ").attr('type', 'button', ).prop('value', userButtonText).text(userButtonText);
    $("#button-container").append(userSearchResultButton);
    $("#gif-search-box").val("");
}


$(document).ready(function () {
    for (i = 0; i < defaultButtonsArray.length; i++) {
        var buttonText = defaultButtonsArray[i];
        var searchResultButton = $("<button>").addClass("btn btn-info search-result-btn").attr('type', 'button', ).prop('value', buttonText).text(buttonText);
        $("#button-container").append(searchResultButton);
    }

    $("#search-btn").on("click", function (event) {
        event.preventDefault();
        createNewButton();
    })

    $(".search-result-btn").on("click", function () {
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Bt8Wuq64T86SteyQs16W4wurw60Fjknn&q="+ giffySearchTerm +"&limit=10&offset=0&rating=PG&lang=en";
        var giffySearchTerm = $(this).val();
        console.log(giffySearchTerm);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            for(g = 0; g < response.data.length; g ++){
                var gifResultSource = response.data.url;
                var gifResult = $("<img>").addClass("gif-result-"+g).attr("src", gifResultSource);
                $("#gif-container").append(gifResult);
            }
        })
    })
});