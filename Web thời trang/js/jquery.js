jQuery = $;

$(document).ready(function() {
    $('.button-add-cart').click(function() {
        // alert( "Handler for .click() called." );
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
});

