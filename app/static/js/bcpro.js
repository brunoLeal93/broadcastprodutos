function pctTrade(){
    if($(document.getElementById("collapseTrade")).hasClass('show')==false){
        $('#iconTrade').addClass('fa-rotate-180');
        
    } else{
        $('#iconTrade').removeClass('fa-rotate-180');
        
        
    }
}
function pctConjuntura(){
    if($(document.getElementById("collapseConj")).hasClass('show')==false){
        $('#iconConjuntura').addClass('fa-rotate-180');
    } else{
        $('#iconConjuntura').removeClass('fa-rotate-180');
        
    }
}
function pctMercados(){
    if($(document.getElementById("collapseMerc")).hasClass('show')==false){
        $('#iconMercados').addClass('fa-rotate-180');
    } else{
        $('#iconMercados').removeClass('fa-rotate-180');
        
    }
}
function pctNews(){
    if($(document.getElementById("collapseNews")).hasClass('show')==false){
        $('#iconNews').addClass('fa-rotate-180');
    } else{
        $('#iconNews').removeClass('fa-rotate-180');
        
    }
}
function pctAnalises(){
    if($(document.getElementById("collapseAnalises")).hasClass('show')==false){
        $('#iconAnalises').addClass('fa-rotate-180');
    } else{
        $('#iconAnalises').removeClass('fa-rotate-180');
        
    }
}

$(document).ready(function() {
        $('.fixed').addClass('is-sticky');
        var url_atual = window.location.href;
        if(url_atual.match(/Trade/)){
            document.getElementById("pctTrade").click();
            console.log(1)
        }
        if(url_atual.match(/Conjuntura/)){
            document.getElementById("pctConjuntura").click();
        }
        if(url_atual.match(/Mercados/)){
            document.getElementById("pctMercados").click();
        }
        if(url_atual.match(/News/)){
            document.getElementById("pctNews").click();
        }
        if(url_atual.match(/Analises/)){
            document.getElementById("pctAnalises").click();
        }
       
    });