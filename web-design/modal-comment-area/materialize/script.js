$(document).ready(function() {
  $("#myModal").modal("");
});

$(document).on("click", ".close", function() {
  $("#myModal").modal("close");
});

$(document).on("click", ".save", function() {
  $("#myModal").modal("close");
});

$(document).on("click", ".comment-button", function() {
  $("#user-name").val("");
  $("#comment-text").val("");
});
