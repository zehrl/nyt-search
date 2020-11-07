$("button").on("click", function() {
    var key = "zGtkIZJRoe1oWfOt4UYAqnX1rVY5NAtH";
    var searchTerm = ""; // fill later
    var startYear = ""; // fill later
    var endYear = ""; // fill later
   
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date" + startYear + "0101" + "&end_date" + endYear + "0101" + "&api-key=" + key

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
});

//request parameteres:
// q: subject (string)
// begin_date: start year (string)
// end_date: end year (string)

// * Understand what format the URL should look like to make an Article Call. (Hint: Use the API Console!!)
// * Experiment with console logging various fields.
// $("#search-term").val("Science")
// console.log($("#search-term").val());





$("#search-term").val();

$("#search-parameters").submit(function(){

    // Error check input

    // Pull values of each element
    var searchTerm = $("#search-term").val();
    console.log(searchTerm);

    var numberOfRecords = $("#number-of-records").val();
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val();

    console.log(searchTerm, numberOfRecords, startYear, endYear);

})
