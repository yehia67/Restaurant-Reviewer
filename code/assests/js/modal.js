//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#login-btn").on("click", function() {
    $(".login-content").addClass("active");
});


$("#signup-btn").on("click", function() {
    $(".signup-content").addClass("active");
    console.log("done");
});




//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close").on("click", function() {
    $(".login-content").removeClass("active");
});


$(".close").on("click", function() {
    $(".signup-content").removeClass("active");
})