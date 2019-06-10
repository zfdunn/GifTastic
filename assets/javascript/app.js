$(function(){
    console.log("page is loaded");
})
var searchArray = ["Marvel", "DC", "Comics"];
// code referred to in solved hw
function popuButtons(searchArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();    
    for(var i = 0; i < searchArray.length; i++){
        var a = $('button');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}

$("button").on("click", ".searchButton", function() {
    


    // Grabbing and storing the data-heroe property value from the button
    var superHeroes = $(this).attr("data-hero");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      superHeroes + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var heroDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          var heroImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          heroImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the heroDiv
          heroDiv.append(p);
          heroDiv.append(heroImage);

          // Prependng the heroDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(heroDiv);
        }
      });
  });
