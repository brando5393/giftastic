var defaultButtonsArray = ["time lord","cyberman","dalek","tardis","doctor who"];
var userSearches = [];
$(document).ready(function(){
    for(i = 0; i < defaultButtonsArray.length; i++){
        var buttonText = defaultButtonsArray[i];
        var searchResultButton = $("<button>").addClass("btn btn-info search-result-btn").attr('type', 'button',).prop('value', buttonText).text(buttonText);
        $("#button-container").append(searchResultButton);
    }
    
    $("#search-btn").on("click", function(event){
        var userSearchTerm = $("#gif-search-box").val();
            event.preventDefault();
            var userButtonText = userSearchTerm
            var userSearchResultButton = $("<button>").addClass("btn btn-info search-result-btn ").attr('type', 'button',).prop('value', userButtonText).text(userButtonText);
            console.log(userButtonText);
            $("#button-container").append(userSearchResultButton);
            $("#gif-search-box").val("");


        })
});