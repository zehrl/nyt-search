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