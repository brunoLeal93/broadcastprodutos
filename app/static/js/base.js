$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();              
});

$(window).on('scroll', function(event) {
    var scrollValue = $(window).scrollTop();
    if ( scrollValue > 10) {
         $('.navbar').addClass('fixed-top');
         if (scrollValue > 1000){
             $('#back-top').removeClass('d-none')
         }
         else{
            $('#back-top').addClass('d-none')
         }
    }else{
       $('.navbar').removeClass('fixed-top');
    }
});