
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