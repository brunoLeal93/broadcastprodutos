
$(document).ready(function() {
  var url_atual = window.location.href;
  if(url_atual.match(/aenews/)){
      document.getElementById("btn-aenews").click();
      console.log(1)
  } 
});