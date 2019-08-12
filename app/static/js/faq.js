$("#question").hover(
    function() {
        $( "div button p" ).removeClass( "d-none" );
      }, function() {
        $( "div button p" ).addClass( "d-none" );
      }
  );

  function SucessSend(){
    $( "#sucesso" ).removeClass( "d-none" );
    console.log(v1);
    //$(document.getElementById("Cotacao-b3-collapse")).hasClass('d-show')

    //if($(document.getElementById("Cotacao-b3-collapse")).hasClass('d-show')){

    //}

  }