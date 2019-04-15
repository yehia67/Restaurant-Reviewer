//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#login-btn").on("click", function() {
    $(".login-content").addClass("active");
});


$("#signup-btn").on("click", function() {
    $(".signup-content").addClass("active");
});




//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
    $(".popup-content").removeClass("active");
});