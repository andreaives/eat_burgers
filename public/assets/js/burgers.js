// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-burger").on("click", function (event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newburger");

    var newBurger = {
      devour: newBurger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurger
    }).then(
      function () {
        console.log("changed Burger to", newBurger);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurgersMade = {
      name: $("#ca").val().trim()
    };

    console.log(newBurgersMade)

    // Post request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurgersMade
    }).then(
      function () {
        console.log("created new Burger");
        // Retrieve updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
