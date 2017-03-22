$(function() {
  $("form").submit(function(event) {
    var noun1Input = $("input#noun1").val();
    var noun2Input = $("input#noun2").val();
    var placeInput = $("input#place").val();
    var noun3Input = $("input#noun3").val();
    var verb1Input = $("input#verb1").val();
    var verb2Input = $("input#verb2").val();

    $(".noun1").text(noun1Input);
    $(".noun2").text(noun2Input);
    $(".place").text(placeInput);
    $(".noun3").text(noun3Input);
    $(".verb1").text(verb1Input);
    $(".verb2").text(verb2Input);

    $("#story").show();

    event.preventDefault();
  });

});
