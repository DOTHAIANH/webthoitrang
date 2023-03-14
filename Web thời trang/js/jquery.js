jQuery = $;

$(document).ready(function() {
    $('.button-add-cart').click(function() {
    });

    $( "select" )
    .change(function() {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "div" ).text( str );
    })
    .trigger( "change" );

    // trang chi tiet san pham chuyen muc
    $('.box-filter').click(function() {
        $('.box-filter .box-filter-content').toggle();
        // $('.box-filter').toggle();
    });
});

