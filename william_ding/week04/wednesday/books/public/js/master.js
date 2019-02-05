$(document).ready(function() {
  $("#show").on("click", function() {
    $(".show-more").toggle();
    if ($("#show").html() === "Show more") {
      $("#show").html("Hide");
    } else if ($("#show").html() === "Hide") {
      $("#show").html("Show more");
    }
  });
});
