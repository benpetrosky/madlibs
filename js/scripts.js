$(function() {
  $("form").submit(function(event) {
    var blanks = ["noun1", "noun2", "place", "noun3", "verb1", "verb2"];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blanks).val();
      $("."+ blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });

});
