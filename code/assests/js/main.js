// Generate reviews
var reviews = '<div class="review-box"><div class="review-box-img-div"><img class="review-box-img" src="../assests/res/img/cortigiano.jpeg" /></div><div class="review-box-container"> <h3 class="review-box-subtitle">Cortigiano</h3> <p style="width:760px"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac augue posuere, sodales nulla vitae, auctor dui. In rutrum odio eu lacus molestie, eget dictum enim semper. Nunc lacus lorem, dignissim id pretium eu, sagittis ut purus. Proin sit amet quam euismod, hendrerit neque vel, pretium turpis. Donec pellentesque mollis hendrerit. Quisque in semper massa, et accumsan elit. Nullam porttitor. </p><span class="review-box-location">Helioplise,Cairo</span><ul class="review-box-list"> <li><i class="fa fa-star" aria-hidden="true"></i>  </li><li><i class="fa fa-star" aria-hidden="true"></i></li><li><i class="fa fa-star" aria-hidden="true"></i></li><li><i class="fa fa-star" aria-hidden="true"></i></li><li><i style="color:000" class="fas fa-star-half-alt"></i></li></ul></div><div class="clearfix"></div></div>'

function generateReview() {
    for (let index = 0; index < 5; index++) {
        $('.my-reviews').append(reviews);
    }
}


//Control 
$('#show').on('click', function() {
    $('.center').show();
    generateReview();
    $(this).hide();
    $(".menu-items-div").hide();
    $(".profile").hide();
    $(".profile-info").hide();
    $("footer").hide();
})

$('.close').on('click', function() {
    $('.center').hide();
    $('#show').show();
    $('.menu-items-div').show();
    $('.profile').show();
    $('.profile-info').show();
    $('footer').show();

})