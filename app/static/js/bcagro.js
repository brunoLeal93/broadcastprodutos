$(document).ready(function() {
        $('.fixed').addClass('is-sticky');
        var url_atual = window.location.href;
        if(url_atual.match(/AgroTrade/)){
            document.getElementById("pctAgroTrade").click();
            console.log(1)
        }
        if(url_atual.match(/Agro/)){
            document.getElementById("pctAgro").click();
        }
    });