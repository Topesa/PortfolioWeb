
$(".navbar-toggler").on('click', function() {

    var icon = $(this).find('.navbar-toggler-icon');

    if(icon.text() === '=_=') {
        icon.text('x_x');
    } else {
        icon.text('=_=');
    }
});

