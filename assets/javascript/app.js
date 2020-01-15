var buttonsArray = ["time lord","cyberman","dalek","tardis","doctor who"];
var userSearchTerm = $("#gif-search-box").val();
$(document).ready(function(){
    for(i = 0; i < buttonsArray.length; i++){
        var buttonText = buttonsArray[i];
        var searchResultButton = $("<button>").addClass("btn btn-info search-result-btn ").attr('type', 'button',).prop('value', buttonText).text(buttonText);
        $("#button-container").append(searchResultButton);
    }

    $("#search-btn").on("click", function(event){
        event.preventDefault();
        userSearchResultButton = $("<button>").addClass("btn btn-info search-result-btn ").attr('type', 'button',).prop('value', userSearchTerm).text(userSearchTerm);
        $("#button-container").append(userSearchResultButton);
        $("#gif-search-box").val("");

    })
});