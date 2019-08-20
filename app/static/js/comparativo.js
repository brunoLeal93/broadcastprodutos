
var chkAll = document.getElementById('checkAll');
var ckTrade = document.getElementById('trade');
var ckConjuntura  = document.getElementById('conjuntura');
var ckMercados  = document.getElementById('mercados');
var ckNews  = document.getElementById('news');
var ckAnalises  = document.getElementById('analises');
var ckAgroTrade  = document.getElementById('agrotrade');
var ckAgro  = document.getElementById('agro');

/* Funções para controlar movimentação dos icones da callopse*/
function iconNoticia(){
    if($(document.getElementById("Noticias-collapse")).hasClass('show')){
        $('#iconN').removeClass('fa-angle-down');
        $('#iconN').addClass('fa-angle-right');
        $('#iconNbagro').removeClass('fa-angle-down');
        $('#iconNbagro').addClass('fa-angle-right');
        if(chkAll.checked == true){
            $("#n-trade").show();
            $("#n-conjuntura").show();
            $("#n-mercados").show();
            $("#n-news").show();
            $("#n-analises").show();
            $("#n-agrotrade").show();
            $("#n-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#n-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#n-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#n-mercados").show();
            }
            if(ckNews.checked == true){
                $("#n-news").show();
            }
            if(ckAnalises.checked == true){
                $("#n-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#n-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#n-agro").show();
            }
        }
    } else{
        $('#iconN').removeClass('fa-angle-right');
        $('#iconN').addClass('fa-angle-down');
        $('#iconNbagro').removeClass('fa-angle-right');
        $('#iconNbagro').addClass('fa-angle-down');
        $("#n-trade").hide();
        $("#n-conjuntura").hide();
        $("#n-mercados").hide();
        $("#n-news").hide();
        $("#n-analises").hide();
        $("#n-agrotrade").hide();
        $("#n-agro").hide();
    }
}

function iconNoticiaNewsLetter(){
    if($(document.getElementById("Noticias-nwlttr-collapse")).hasClass('show')){
        $('#iconNNewsletter').removeClass('fa-angle-down');
        $('#iconNNewsletter').addClass('fa-angle-right');
        $('#iconNNewsletterbagro').removeClass('fa-angle-down');
        $('#iconNNewsletterbagro').addClass('fa-angle-right');
        if(chkAll.checked == true){
            $("#n-nwlttr-trade").show();
            $("#n-nwlttr-conjuntura").show();
            $("#n-nwlttr-mercados").show();
            $("#n-nwlttr-news").show();
            $("#n-nwlttr-analises").show();
            $("#n-nwlttr-agrotrade").show();
            $("#n-nwlttr-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#n-nwlttr-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#n-nwlttr-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#n-nwlttr-mercados").show();
            }
            if(ckNews.checked == true){
                $("#n-nwlttr-news").show();
            }
            if(ckAnalises.checked == true){
                $("#n-nwlttr-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#n-nwlttr-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#n-nwlttr-agro").show();
            }
        }
    } else{
        $('#iconNNewsletter').removeClass('fa-angle-right');
        $('#iconNNewsletter').addClass('fa-angle-down');
        $('#iconNNewsletterbagro').removeClass('fa-angle-right');
        $('#iconNNewsletterbagro').addClass('fa-angle-down');
        $("#n-nwlttr-trade").hide();
        $("#n-nwlttr-conjuntura").hide();
        $("#n-nwlttr-mercados").hide();
        $("#n-nwlttr-news").hide();
        $("#n-nwlttr-analises").hide();
        $("#n-nwlttr-agrotrade").hide();
        $("#n-nwlttr-agro").hide();
    }
}

function iconNoticiaContri(){
    if($(document.getElementById("Noticias-ctbd-collapse")).hasClass('show')){
        $('#iconNContri').removeClass('fa-angle-down');
        $('#iconNContri').addClass('fa-angle-right');
        $('#iconNContribagro').removeClass('fa-angle-down');
        $('#iconNContribagro').addClass('fa-angle-right');
        if(chkAll.checked == true){
            $("#n-ctbd-trade").show();
            $("#n-ctbd-conjuntura").show();
            $("#n-ctbd-mercados").show();
            $("#n-ctbd-news").show();
            $("#n-ctbd-analises").show();
            $("#n-ctbd-agrotrade").show();
            $("#n-ctbd-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#n-ctbd-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#n-ctbd-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#n-ctbd-mercados").show();
            }
            if(ckNews.checked == true){
                $("#n-ctbd-news").show();
            }
            if(ckAnalises.checked == true){
                $("#n-ctbd-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#n-ctbd-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#n-ctbd-agro").show();
            }
        }
    } else{
        $('#iconNContri').removeClass('fa-angle-right');
        $('#iconNContri').addClass('fa-angle-down');
        $('#iconNContribagro').removeClass('fa-angle-right');
        $('#iconNContribagro').addClass('fa-angle-down');
        $("#n-ctbd-trade").hide();
        $("#n-ctbd-conjuntura").hide();
        $("#n-ctbd-mercados").hide();
        $("#n-ctbd-news").hide();
        $("#n-ctbd-analises").hide();
        $("#n-ctbd-agrotrade").hide();
        $("#n-ctbd-agro").hide();
    }
}

function iconCotacao(){
    if($(document.getElementById("Cotacao-collapse")).hasClass('show')){
        $('#iconCotacao').removeClass('fa-angle-down');
        $('#iconCotacao').addClass('fa-angle-right');
        $('#iconCotacaobagro').removeClass('fa-angle-down');
        $('#iconCotacaobagro').addClass('fa-angle-right');
        if(chkAll.checked == true){
            $("#c-trade").show();
            $("#c-conjuntura").show();
            $("#c-mercados").show();
            $("#c-news").show();
            $("#c-analises").show();
            $("#c-agrotrade").show();
            $("#c-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#c-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#c-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#c-mercados").show();
            }
            if(ckNews.checked == true){
                $("#c-news").show();
            }
            if(ckAnalises.checked == true){
                $("#c-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#c-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#c-agro").show();
            }
        }
    } else{
        $('#iconCotacao').removeClass('fa-angle-right');
        $('#iconCotacao').addClass('fa-angle-down');
        $('#iconCotacaobagro').removeClass('fa-angle-right');
        $('#iconCotacaobagro').addClass('fa-angle-down');
        $("#c-trade").hide();
        $("#c-conjuntura").hide();
        $("#c-mercados").hide();
        $("#c-news").hide();
        $("#c-analises").hide();
        $("#c-agrotrade").hide();
        $("#c-agro").hide();
    }
}

function iconCotacaoAnb(){
    if($(document.getElementById("Cotacao-anb-collapse")).hasClass('show')){
        $('#iconCAnb-0').removeClass('fa-angle-down');
        $('#iconCAnb-0').addClass('fa-angle-right');
        $('#iconCAnb-1').show();
        if(chkAll.checked == true){
            $("#c-anb-trade").show();
            $("#c-anb-conjuntura").show();
            $("#c-anb-mercados").show();
            $("#c-anb-news").show();
            $("#c-anb-analises").show();
        } else {
            if(ckTrade.checked == true){
                $("#c-anb-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#c-anb-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#c-anb-mercados").show();
            }
            if(ckNews.checked == true){
                $("#c-anb-news").show();
            }
            if(ckAnalises.checked == true){
                $("#c-anb-analises").show();
            }
        }
    } else{
        $('#iconCAnb-0').removeClass('fa-angle-right');
        $('#iconCAnb-0').addClass('fa-angle-down');
        $('#iconCAnb-1').hide();
        $("#c-anb-trade").hide();
        $("#c-anb-conjuntura").hide();
        $("#c-anb-mercados").hide();
        $("#c-anb-news").hide();
        $("#c-anb-analises").hide();
    }
}

function iconCotacaoAgro(){
    if($(document.getElementById("Cotacao-agro-collapse")).hasClass('show')){
        $('#iconCAgro-0').removeClass('fa-angle-down');
        $('#iconCAgro-0').addClass('fa-angle-right');
        $('#iconCAgro-1').show();
        if(chkAll.checked == true){
            $("#c-agro-agrotrade").show();
            $("#c-agro-agro").show();
        } else {
            if(ckAgroTrade.checked == true){
                $("#c-agro-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#c-agro-agro").show();
            }
        }
    } else{
        $('#iconCAgro-0').removeClass('fa-angle-right');
        $('#iconCAgro-0').addClass('fa-angle-down');
        $('#iconCAgro-1').hide();
        $("#c-agro-agrotrade").hide();
        $("#c-agro-agro").hide();
        
    }
}

function iconCotacaoB3(){
    if($(document.getElementById("Cotacao-b3-collapse")).hasClass('show')){
        $('#iconCB3-0').removeClass('fa-angle-down');
        $('#iconCB3-0').addClass('fa-angle-right');
        $('#iconCB3-1').show();
        $('#iconCB3bagro-0bagro').removeClass('fa-angle-down');
        $('#iconCB3bagro-0bagro').addClass('fa-angle-right');
        $('#iconCB3bagro-1bagro').show();
        if(chkAll.checked == true){
            $("#c-b3-trade").show();
            $("#c-b3-conjuntura").show();
            $("#c-b3-mercados").show();
            $("#c-b3-news").show();
            $("#c-b3-analises").show();
            $("#c-b3-agrotrade").show();
            $("#c-b3-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#c-b3-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#c-b3-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#c-b3-mercados").show();
            }
            if(ckNews.checked == true){
                $("#c-b3-news").show();
            }
            if(ckAnalises.checked == true){
                $("#c-b3-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#c-b3-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#c-b3-agro").show();
            }
        }
    } else{
        $('#iconCB3-0').removeClass('fa-angle-right');
        $('#iconCB3-0').addClass('fa-angle-down');
        $('#iconCB3-1').hide();
        $('#iconCB3-0bagro').removeClass('fa-angle-right');
        $('#iconCB3-0bagro').addClass('fa-angle-down');
        $('#iconCB3-1bagro').hide();
        $("#c-b3-trade").hide();
        $("#c-b3-conjuntura").hide();
        $("#c-b3-mercados").hide();
        $("#c-b3-news").hide();
        $("#c-b3-analises").hide();
        $("#c-b3-agrotrade").hide();
        $("#c-b3-agro").hide();
    }
}

function iconCotacaoBC(){
    if($(document.getElementById("Cotacao-bc-collapse")).hasClass('show')){
        $('#iconCBC-0').removeClass('fa-angle-down');
        $('#iconCBC-0').addClass('fa-angle-right');
        $('#iconCBC-1').show();
        $('#iconCBC-0bagro').removeClass('fa-angle-down');
        $('#iconCBC-0bagro').addClass('fa-angle-right');
        $('#iconCBC-1bagro').show();
        if(chkAll.checked == true){
            $("#c-bc-trade").show();
            $("#c-bc-conjuntura").show();
            $("#c-bc-mercados").show();
            $("#c-bc-news").show();
            $("#c-bc-analises").show();
            $("#c-bc-agrotrade").show();
            $("#c-bc-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#c-bc-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#c-bc-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#c-bc-mercados").show();
            }
            if(ckNews.checked == true){
                $("#c-bc-news").show();
            }
            if(ckAnalises.checked == true){
                $("#c-bc-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#c-bc-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#c-bc-agro").show();
            }
        }
    } else{
        $('#iconCBC-0').removeClass('fa-angle-right');
        $('#iconCBC-0').addClass('fa-angle-down');
        $('#iconCBC-1').hide();
        $('#iconCBC-0bagro').removeClass('fa-angle-right');
        $('#iconCBC-0bagro').addClass('fa-angle-down');
        $('#iconCBC-1bagro').hide();
        $("#c-bc-trade").hide();
        $("#c-bc-conjuntura").hide();
        $("#c-bc-mercados").hide();
        $("#c-bc-news").hide();
        $("#c-bc-analises").hide();
        $("#c-bc-agrotrade").hide();
        $("#c-bc-agro").hide();
    }
}

function iconCIndices(){
    if($(document.getElementById("c-indices-collapse")).hasClass('show')){
        $('#iconCIndices-0').removeClass('fa-angle-down');
        $('#iconCIndices-0').addClass('fa-angle-right');
        $("#iconCIndices-1").show();
        $("#iconCIndices-2").show();
        $('#iconCIndices-0abagro').removeClass('fa-angle-down');
        $('#iconCIndices-0bagro').addClass('fa-angle-right');
        $("#iconCIndices-1bagro").show();
        $("#iconCIndices-2bagro").show();
        if(chkAll.checked == true){
            $("#c-indicesMundi-trade").show();
            $("#c-indicesMundi-conjuntura").show();
            $("#c-indicesMundi-mercados").show();
            $("#c-indicesMundi-news").show();
            $("#c-indicesMundi-analises").show();
            $("#c-indicesMundi-agrotrade").show();
            $("#c-indicesMundi-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#c-indicesMundi-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#c-indicesMundi-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#c-indicesMundi-mercados").show();
            }
            if(ckNews.checked == true){
                $("#c-indicesMundi-news").show();
            }
            if(ckAnalises.checked == true){
                $("#c-indicesMundi-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#c-indicesMundi-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#c-indicesMundi-agro").show();
            }
        }
    } else{
        $('#iconCIndices-0').removeClass('fa-angle-right');
        $('#iconCIndices-0').addClass('fa-angle-down');
        $("#iconCIndices-1").hide();
        $("#iconCIndices-2").hide();
        $('#iconCIndices-0bagro').removeClass('fa-angle-right');
        $('#iconCIndices-0bagro').addClass('fa-angle-down');
        $("#iconCIndices-1bagro").hide();
        $("#iconCIndices-2bagro").hide();
        $("#c-indicesMundi-trade").hide();
        $("#c-indicesMundi-conjuntura").hide();
        $("#c-indicesMundi-mercados").hide();
        $("#c-indicesMundi-news").hide();
        $("#c-indicesMundi-analises").hide();
        $("#c-indicesMundi-agrotrade").hide();
        $("#c-indicesMundi-agro").hide();
    }
}

function iconCIndAsiaOcean(){
    if($(document.getElementById("c-ind-ao-collapse")).hasClass('show')){
        $('#iconCIndAsiaOcean-0').removeClass('fa-angle-down');
        $('#iconCIndAsiaOcean-0').addClass('fa-angle-right');
        $("#iconCIndAsiaOcean-1").show();
        $("#iconCIndAsiaOcean-2").show();
        $('#iconCIndAsiaOcean-0bagro').removeClass('fa-angle-down');
        $('#iconCIndAsiaOcean-0bagro').addClass('fa-angle-right');
        $("#iconCIndAsiaOcean-1bagro").show();
        $("#iconCIndAsiaOcean-2bagro").show();
        if(chkAll.checked == true){
            $("#c-ind-ao-trade").show();
            $("#c-ind-ao-conjuntura").show();
            $("#c-ind-ao-mercados").show();
            $("#c-ind-ao-news").show();
            $("#c-ind-ao-analises").show();
            $("#c-ind-ao-agrotrade").show();
            $("#c-ind-ao-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#c-ind-ao-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#c-ind-ao-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#c-ind-ao-mercados").show();
            }
            if(ckNews.checked == true){
                $("#c-ind-ao-news").show();
            }
            if(ckAnalises.checked == true){
                $("#c-ind-ao-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#c-ind-ao-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#c-ind-ao-agro").show();
            }
        }
        
    } else{
        $('#iconCIndAsiaOcean-0').removeClass('fa-angle-right');
        $('#iconCIndAsiaOcean-0').addClass('fa-angle-down');
        $("#iconCIndAsiaOcean-1").hide();
        $("#iconCIndAsiaOcean-2").hide();
        $('#iconCIndAsiaOcean-0bagro').removeClass('fa-angle-right');
        $('#iconCIndAsiaOcean-0bagro').addClass('fa-angle-down');
        $("#iconCIndAsiaOcean-1bagro").hide();
        $("#iconCIndAsiaOcean-2bagro").hide();
        $("#c-ind-ao-trade").hide();
        $("#c-ind-ao-conjuntura").hide();
        $("#c-ind-ao-mercados").hide();
        $("#c-ind-ao-news").hide();
        $("#c-ind-ao-analises").hide();
        $("#c-ind-ao-agrotrade").hide();
        $("#c-ind-ao-agro").hide();
    }
}

function iconCIndEuropa(){
    if($(document.getElementById("c-ind-euro-collapse")).hasClass('show')){
        $('#iconCIndEuropa-0').removeClass('fa-angle-down');
        $('#iconCIndEuropa-0').addClass('fa-angle-right');
        $("#iconCIndEuropa-1").show();
        $('#iconCIndEuropa-0bagro').removeClass('fa-angle-down');
        $('#iconCIndEuropa-0bagro').addClass('fa-angle-right');
        $("#iconCIndEuropa-1bagro").show();
        if(chkAll.checked == true){
            $("#c-ind-euro-trade").show();
            $("#c-ind-euro-conjuntura").show();
            $("#c-ind-euro-mercados").show();
            $("#c-ind-euro-news").show();
            $("#c-ind-euro-analises").show();
            $("#c-ind-euro-agrotrade").show();
            $("#c-ind-euro-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#c-ind-euro-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#c-ind-euro-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#c-ind-euro-mercados").show();
            }
            if(ckNews.checked == true){
                $("#c-ind-euro-news").show();
            }
            if(ckAnalises.checked == true){
                $("#c-ind-euro-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#c-ind-euro-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#c-ind-euro-agro").show();
            }
        }
        
    } else{
        $('#iconCIndEuropa-0').removeClass('fa-angle-right');
        $('#iconCIndEuropa-0').addClass('fa-angle-down');
        $("#iconCIndEuropa-1").hide();
        $('#iconCIndEuropa-0bagro').removeClass('fa-angle-right');
        $('#iconCIndEuropa-0bagro').addClass('fa-angle-down');
        $("#iconCIndEuropa-1bagro").hide();
        $("#c-ind-euro-trade").hide();
        $("#c-ind-euro-conjuntura").hide();
        $("#c-ind-euro-mercados").hide();
        $("#c-ind-euro-news").hide();
        $("#c-ind-euro-analises").hide();
        $("#c-ind-euro-agrotrade").hide();
        $("#c-ind-euro-agro").hide();
    }
}

function iconCIndLatam(){
    if($(document.getElementById("c-ind-latam-collapse")).hasClass('show')){
        $('#iconCIndLatam-0').removeClass('fa-angle-down');
        $('#iconCIndLatam-0').addClass('fa-angle-right');
        $("#iconCIndLatam-1").show();
        $('#iconCIndLatam-0bagro').removeClass('fa-angle-down');
        $('#iconCIndLatam-0bagro').addClass('fa-angle-right');
        $("#iconCIndLatam-1bagro").show();
        if(chkAll.checked == true){
            $("#c-ind-latam-trade").show();
            $("#c-ind-latam-conjuntura").show();
            $("#c-ind-latam-mercados").show();
            $("#c-ind-latam-news").show();
            $("#c-ind-latam-analises").show();
            $("#c-ind-latam-agrotrade").show();
            $("#c-ind-latam-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#c-ind-latam-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#c-ind-latam-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#c-ind-latam-mercados").show();
            }
            if(ckNews.checked == true){
                $("#c-ind-latam-news").show();
            }
            if(ckAnalises.checked == true){
                $("#c-ind-latam-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#c-ind-latam-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#c-ind-latam-agro").show();
            }
        }
        
    } else{
        $('#iconCIndLatam-0').removeClass('fa-angle-right');
        $('#iconCIndLatam-0').addClass('fa-angle-down');
        $("#iconCIndLatam-1").hide();
        $('#iconCIndLatam-0bagro').removeClass('fa-angle-right');
        $('#iconCIndLatam-0bagro').addClass('fa-angle-down');
        $("#iconCIndLatam-1bagro").hide();
        $("#c-ind-latam-trade").hide();
        $("#c-ind-latam-conjuntura").hide();
        $("#c-ind-latam-mercados").hide();
        $("#c-ind-latam-news").hide();
        $("#c-ind-latam-analises").hide();
        $("#c-ind-latam-agrotrade").hide();
        $("#c-ind-latam-agro").hide();
    }
}

function iconCIndUSA(){
    if($(document.getElementById("c-ind-usa-collapse")).hasClass('show')){
        $('#iconCIndUSA-0').removeClass('fa-angle-down');
        $('#iconCIndUSA-0').addClass('fa-angle-right');
        $('#iconCIndUSA-1').show();
        $('#iconCIndUSA-0bagro').removeClass('fa-angle-down');
        $('#iconCIndUSA-0bagro').addClass('fa-angle-right');
        $('#iconCIndUSA-1bagro').show();
        if(chkAll.checked == true){
            $("#c-ind-usa-trade").show();
            $("#c-ind-usa-conjuntura").show();
            $("#c-ind-usa-mercados").show();
            $("#c-ind-usa-news").show();
            $("#c-ind-usa-analises").show();
            $("#c-ind-usa-agrotrade").show();
            $("#c-ind-usa-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#c-ind-usa-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#c-ind-usa-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#c-ind-usa-mercados").show();
            }
            if(ckNews.checked == true){
                $("#c-ind-usa-news").show();
            }
            if(ckAnalises.checked == true){
                $("#c-ind-usa-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#c-ind-usa-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#c-ind-usa-agro").show();
            }
        }
        
    } else{
        $('#iconCIndUSA-0').removeClass('fa-angle-right');
        $('#iconCIndUSA-0').addClass('fa-angle-down');
        $('#iconCIndUSA-1').hide();
        $('#iconCIndUSA-0bagro').removeClass('fa-angle-right');
        $('#iconCIndUSA-0bagro').addClass('fa-angle-down');
        $('#iconCIndUSA-1bagro').hide();
        $("#c-ind-usa-trade").hide();
        $("#c-ind-usa-conjuntura").hide();
        $("#c-ind-usa-mercados").hide();
        $("#c-ind-usa-news").hide();
        $("#c-ind-usa-analises").hide();
        $("#c-ind-usa-agrotrade").hide();
        $("#c-ind-usa-agro").hide();
    }
}

function iconCNyse(){
    if($(document.getElementById("c-nyse-collapse")).hasClass('show')){
        $('#iconCNyse-0').removeClass('fa-angle-down');
        $('#iconCNyse-0').addClass('fa-angle-right');
        $('#iconCNyse-1').show();
        $('#iconCNyse-0bagro').removeClass('fa-angle-down');
        $('#iconCNyse-0bagro').addClass('fa-angle-right');
        $('#iconCNyse-1bagro').show();
        if(chkAll.checked == true){
            $("#c-nyse-trade").show();
            $("#c-nyse-conjuntura").show();
            $("#c-nyse-mercados").show();
            $("#c-nyse-news").show();
            $("#c-nyse-analises").show();
            $("#c-nyse-agrotrade").show();
            $("#c-nyse-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#c-nyse-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#c-nyse-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#c-nyse-mercados").show();
            }
            if(ckNews.checked == true){
                $("#c-nyse-news").show();
            }
            if(ckAnalises.checked == true){
                $("#c-nyse-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#c-nyse-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#c-nyse-agro").show();
            }
        }
    } else{
        $('#iconCNyse-0').removeClass('fa-angle-right');
        $('#iconCNyse-0').addClass('fa-angle-down');
        $('#iconCNyse-1').hide();
        $('#iconCNyse-0bagro').removeClass('fa-angle-right');
        $('#iconCNyse-0bagro').addClass('fa-angle-down');
        $('#iconCNyse-1bagro').hide();
        $("#c-nyse-trade").hide();
        $("#c-nyse-conjuntura").hide();
        $("#c-nyse-mercados").hide();
        $("#c-nyse-news").hide();
        $("#c-nyse-analises").hide();
        $("#c-nyse-agrotrade").hide();
        $("#c-nyse-agro").hide();
    }
}

function iconCotacaoContri(){
    if($(document.getElementById("Cotacao-ctbd-collapse")).hasClass('show')){
        $('#iconCContri').removeClass('fa-angle-down');
        $('#iconCContri').addClass('fa-angle-right');
        $('#iconCContribagro').removeClass('fa-angle-down');
        $('#iconCContribagro').addClass('fa-angle-right');
        if(chkAll.checked == true){
            $("#c-ctbd-trade").show();
            $("#c-ctbd-conjuntura").show();
            $("#c-ctbd-mercados").show();
            $("#c-ctbd-news").show();
            $("#c-ctbd-analises").show();
            $("#c-ctbd-agrotrade").show();
            $("#c-ctbd-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#c-ctbd-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#c-ctbd-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#c-ctbd-mercados").show();
            }
            if(ckNews.checked == true){
                $("#c-ctbd-news").show();
            }
            if(ckAnalises.checked == true){
                $("#c-ctbd-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#c-ctbd-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#c-ctbd-agro").show();
            }
        }

    } else{
        $('#iconCContri').removeClass('fa-angle-right');
        $('#iconCContri').addClass('fa-angle-down');
        $('#iconCContribagro').removeClass('fa-angle-right');
        $('#iconCContribagro').addClass('fa-angle-down');
        $("#c-ctbd-trade").hide();
        $("#c-ctbd-conjuntura").hide();
        $("#c-ctbd-mercados").hide();
        $("#c-ctbd-news").hide();
        $("#c-ctbd-analises").hide();
        $("#c-ctbd-agrotrade").hide();
        $("#c-ctbd-agro").hide();
    }
}
/*
function iconAddon(){
    if($(document.getElementById("Addon-collapse")).hasClass('show')){
        $('#iconAddon').removeClass('fa-angle-down');
        $('#iconAddon').addClass('fa-angle-right');
        $("#ad-trade").show();
        $("#ad-conjuntura").show();
        $("#ad-mercados").show();
        $("#ad-news").show();
        $("#ad-analises").show();
    } else{
        $('#iconAddon').removeClass('fa-angle-right');
        $('#iconAddon').addClass('fa-angle-down');
        $("#ad-trade").hide();
        $("#ad-conjuntura").hide();
        $("#ad-mercados").hide();
        $("#ad-news").hide();
        $("#ad-analises").hide();
    }
}
*/
function iconModulos(){
    if($(document.getElementById("Addon-mod-collapse")).hasClass('show')){
        $('#iconModulos').removeClass('fa-angle-down');
        $('#iconModulos').addClass('fa-angle-right');
        $('#iconModulosbagro').removeClass('fa-angle-down');
        $('#iconModulosbagro').addClass('fa-angle-right');
        if(chkAll.checked == true){
            $("#ad-mod-trade").show();
            $("#ad-mod-conjuntura").show();
            $("#ad-mod-mercados").show();
            $("#ad-mod-news").show();
            $("#ad-mod-analises").show();
            $("#ad-mod-agrotrade").show();
            $("#ad-mod-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#ad-mod-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#ad-mod-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#ad-mod-mercados").show();
            }
            if(ckNews.checked == true){
                $("#ad-mod-news").show();
            }
            if(ckAnalises.checked == true){
                $("#ad-mod-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#ad-mod-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#ad-mod-agro").show();
            }
        }

    } else{
        $('#iconModulos').removeClass('fa-angle-right');
        $('#iconModulos').addClass('fa-angle-down');
        $('#iconModulosbagro').removeClass('fa-angle-right');
        $('#iconModulosbagro').addClass('fa-angle-down');
        $("#ad-mod-trade").hide();
        $("#ad-mod-conjuntura").hide();
        $("#ad-mod-mercados").hide();
        $("#ad-mod-news").hide();
        $("#ad-mod-analises").hide();
        $("#ad-mod-agrotrade").hide();
        $("#ad-mod-agro").hide();
    }
}

function iconAnaFund(){
    if($(document.getElementById("Addon-mod-af-collapse")).hasClass('show')){
        $('#iconAnaFund').removeClass('fa-angle-down');
        $('#iconAnaFund').addClass('fa-angle-right');
        $('#iconAnaFundbagro').removeClass('fa-angle-down');
        $('#iconAnaFundbagro').addClass('fa-angle-right');
        if(chkAll.checked == true){
            $("#ad-mod-af-trade").show();
            $("#ad-mod-af-conjuntura").show();
            $("#ad-mod-af-mercados").show();
            $("#ad-mod-af-news").show();
            $("#ad-mod-af-analises").show();
            $("#ad-mod-af-agrotrade").show();
            $("#ad-mod-af-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#ad-mod-af-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#ad-mod-af-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#ad-mod-af-mercados").show();
            }
            if(ckNews.checked == true){
                $("#ad-mod-af-news").show();
            }
            if(ckAnalises.checked == true){
                $("#ad-mod-af-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#ad-mod-af-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#ad-mod-af-agro").show();
            }
        }

    } else{
        $('#iconAnaFund').removeClass('fa-angle-right');
        $('#iconAnaFund').addClass('fa-angle-down');
        $('#iconAnaFundbagro').removeClass('fa-angle-right');
        $('#iconAnaFundbagro').addClass('fa-angle-down');
        $("#ad-mod-af-trade").hide();
        $("#ad-mod-af-conjuntura").hide();
        $("#ad-mod-af-mercados").hide();
        $("#ad-mod-af-news").hide();
        $("#ad-mod-af-analises").hide();
        $("#ad-mod-af-agrotrade").hide();
        $("#ad-mod-af-agro").hide();
    }
}

function iconModNoticias(){
    if($(document.getElementById("Addon-n-collapse")).hasClass('show')){
        $('#iconModNoticias').removeClass('fa-angle-down');
        $('#iconModNoticias').addClass('fa-angle-right');
        $('#iconModNoticiasbagro').removeClass('fa-angle-down');
        $('#iconModNoticiasbagro').addClass('fa-angle-right');
        if(chkAll.checked == true){
            $("#ad-n-trade").show();
            $("#ad-n-conjuntura").show();
            $("#ad-n-mercados").show();
            $("#ad-n-news").show();
            $("#ad-n-analises").show();
            $("#ad-n-agrotrade").show();
            $("#ad-n-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#ad-n-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#ad-n-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#ad-n-mercados").show();
            }
            if(ckNews.checked == true){
                $("#ad-n-news").show();
            }
            if(ckAnalises.checked == true){
                $("#ad-n-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#ad-n-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#ad-n-agro").show();
            }
        }

    } else{
        $('#iconModNoticias').removeClass('fa-angle-right');
        $('#iconModNoticias').addClass('fa-angle-down');
        $('#iconModNoticiasbagro').removeClass('fa-angle-right');
        $('#iconModNoticiasbagro').addClass('fa-angle-down');
        $("#ad-n-trade").hide();
        $("#ad-n-conjuntura").hide();
        $("#ad-n-mercados").hide();
        $("#ad-n-news").hide();
        $("#ad-n-analises").hide();
        $("#ad-n-agrotrade").hide();
        $("#ad-n-agro").hide();
    }
}

function iconModNDJN(){
    if($(document.getElementById("Addon-n-djn-collapse")).hasClass('show')){
        $('#iconModNDJN').removeClass('fa-angle-down');
        $('#iconModNDJN').addClass('fa-angle-right');
        $('#iconModNDJNbagro').removeClass('fa-angle-down');
        $('#iconModNDJNbagro').addClass('fa-angle-right');
        if(chkAll.checked == true){
            $("#ad-n-djn-trade").show();
            $("#ad-n-djn-conjuntura").show();
            $("#ad-n-djn-mercados").show();
            $("#ad-n-djn-news").show();
            $("#ad-n-djn-analises").show();
            $("#ad-n-djn-agrotrade").show();
            $("#ad-n-djn-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#ad-n-djn-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#ad-n-djn-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#ad-n-djn-mercados").show();
            }
            if(ckNews.checked == true){
                $("#ad-n-djn-news").show();
            }
            if(ckAnalises.checked == true){
                $("#ad-n-djn-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#ad-n-djn-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#ad-n-djn-agro").show();
            }
        }

    } else{
        $('#iconModNDJN').removeClass('fa-angle-right');
        $('#iconModNDJN').addClass('fa-angle-down');
        $('#iconModNDJNbagro').removeClass('fa-angle-right');
        $('#iconModNDJNbagro').addClass('fa-angle-down');
        $("#ad-n-djn-trade").hide();
        $("#ad-n-djn-conjuntura").hide();
        $("#ad-n-djn-mercados").hide();
        $("#ad-n-djn-news").hide();
        $("#ad-n-djn-analises").hide();
        $("#ad-n-djn-agrotrade").hide();
        $("#ad-n-djn-agro").hide();
    }
}

function iconModCotacao(){
    if($(document.getElementById("Addon-c-collapse")).hasClass('show')){
        $('#iconModCotacao').removeClass('fa-angle-down');
        $('#iconModCotacao').addClass('fa-angle-right');
        $('#iconModCotacaobagro').removeClass('fa-angle-down');
        $('#iconModCotacaobagro').addClass('fa-angle-right');
        if(chkAll.checked == true){
            $("#ad-c-trade").show();
            $("#ad-c-conjuntura").show();
            $("#ad-c-mercados").show();
            $("#ad-c-news").show();
            $("#ad-c-analises").show();
            $("#ad-c-agrotrade").show();
            $("#ad-c-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#ad-c-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#ad-c-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#ad-c-mercados").show();
            }
            if(ckNews.checked == true){
                $("#ad-c-news").show();
            }
            if(ckAnalises.checked == true){
                $("#ad-c-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#ad-c-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#ad-c-agro").show();
            }
        }
        
    } else{
        $('#iconModCotacao').removeClass('fa-angle-right');
        $('#iconModCotacao').addClass('fa-angle-down');
        $('#iconModCotacaobagro').removeClass('fa-angle-right');
        $('#iconModCotacaobagro').addClass('fa-angle-down');
        $("#ad-c-trade").hide();
        $("#ad-c-conjuntura").hide();
        $("#ad-c-mercados").hide();
        $("#ad-c-news").hide();
        $("#ad-c-analises").hide();
        $("#ad-c-agrotrade").hide();
        $("#ad-c-agro").hide();
    }
}

function iconAdCotacaoB3(){
    if($(document.getElementById("ad-c-b3-collapse")).hasClass('show')){
        $('#iconAdCB3-0').removeClass('fa-angle-down');
        $('#iconAdCB3-0').addClass('fa-angle-right');
        $('#iconAdCB3-1').show();
        $('#iconAdCB3-0bagro').removeClass('fa-angle-down');
        $('#iconAdCB3-0bagro').addClass('fa-angle-right');
        $('#iconAdCB3-1bagro').show();
        if(chkAll.checked == true){
            $("#ad-c-b3-trade").show();
            $("#ad-c-b3-conjuntura").show();
            $("#ad-c-b3-mercados").show();
            $("#ad-c-b3-news").show();
            $("#ad-c-b3-analises").show();
            $("#ad-c-b3-agrotrade").show();
            $("#ad-c-b3-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#ad-c-b3-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#ad-c-b3-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#ad-c-b3-mercados").show();
            }
            if(ckNews.checked == true){
                $("#ad-c-b3-news").show();
            }
            if(ckAnalises.checked == true){
                $("#ad-c-b3-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#ad-c-b3-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#ad-c-b3-agro").show();
            }
        }
    } else{
        $('#iconAdCB3-0').removeClass('fa-angle-right');
        $('#iconAdCB3-0').addClass('fa-angle-down');
        $('#iconAdCB3-1').hide();
        $('#iconAdCB3-0bagro').removeClass('fa-angle-right');
        $('#iconAdCB3-0bagro').addClass('fa-angle-down');
        $('#iconAdCB3-1bagro').hide();
        $("#ad-c-b3-trade").hide();
        $("#ad-c-b3-conjuntura").hide();
        $("#ad-c-b3-mercados").hide();
        $("#ad-c-b3-news").hide();
        $("#ad-c-b3-analises").hide();
        $("#ad-c-b3-agrotrade").hide();
        $("#ad-c-b3-agro").hide();
    }
}

function iconAdCIndices(){
    if($(document.getElementById("ad-c-indices-collapse")).hasClass('show')){
        $('#iconAdCIndices-0').removeClass('fa-angle-down');
        $('#iconAdCIndices-0').addClass('fa-angle-right');
        $("#iconAdCIndices-1").show();
        $("#iconAdCIndices-2").show();
        $('#iconAdCIndices-0bagro').removeClass('fa-angle-down');
        $('#iconAdCIndices-0bagro').addClass('fa-angle-right');
        $("#iconAdCIndices-1bagro").show();
        $("#iconAdCIndices-2bagro").show();
        if(chkAll.checked == true){
            $("#ad-c-indicesMundi-trade").show();
            $("#ad-c-indicesMundi-conjuntura").show();
            $("#ad-c-indicesMundi-mercados").show();
            $("#ad-c-indicesMundi-news").show();
            $("#ad-c-indicesMundi-analises").show();
            $("#ad-c-indicesMundi-agrotrade").show();
            $("#ad-c-indicesMundi-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#ad-c-indicesMundi-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#ad-c-indicesMundi-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#ad-c-indicesMundi-mercados").show();
            }
            if(ckNews.checked == true){
                $("#ad-c-indicesMundi-news").show();
            }
            if(ckAnalises.checked == true){
                $("#ad-c-indicesMundi-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#ad-c-indicesMundi-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#ad-c-indicesMundi-agro").show();
            }
        }
    } else{
        $('#iconAdCIndices-0').removeClass('fa-angle-right');
        $('#iconAdCIndices-0').addClass('fa-angle-down');
        $("#iconAdCIndices-1").hide();
        $("#iconAdCIndices-2").hide();
        $('#iconAdCIndices-0bagro').removeClass('fa-angle-right');
        $('#iconAdCIndices-0bagro').addClass('fa-angle-down');
        $("#iconAdCIndices-1bagro").hide();
        $("#iconAdCIndices-2bagro").hide();
        $("#ad-c-indicesMundi-trade").hide();
        $("#ad-c-indicesMundi-conjuntura").hide();
        $("#ad-c-indicesMundi-mercados").hide();
        $("#ad-c-indicesMundi-news").hide();
        $("#ad-c-indicesMundi-analises").hide();
        $("#ad-c-indicesMundi-agrotrade").hide();
        $("#ad-c-indicesMundi-agro").hide();
    }
}

function iconAdCIndEuropa(){
    if($(document.getElementById("ad-c-ind-euro-collapse")).hasClass('show')){
        $('#iconAdCIndEuropa-0').removeClass('fa-angle-down');
        $('#iconAdCIndEuropa-0').addClass('fa-angle-right');
        $("#iconAdCIndEuropa-1").show();
        $('#iconAdCIndEuropa-0bagro').removeClass('fa-angle-down');
        $('#iconAdCIndEuropa-0bagro').addClass('fa-angle-right');
        $("#iconAdCIndEuropa-1bagro").show();
        if(chkAll.checked == true){
            $("#ad-c-ind-euro-trade").show();
            $("#ad-c-ind-euro-conjuntura").show();
            $("#ad-c-ind-euro-mercados").show();
            $("#ad-c-ind-euro-news").show();
            $("#ad-c-ind-euro-analises").show();
            $("#ad-c-ind-euro-agrotrade").show();
            $("#ad-c-ind-euro-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#ad-c-ind-euro-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#ad-c-ind-euro-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#ad-c-ind-euro-mercados").show();
            }
            if(ckNews.checked == true){
                $("#ad-c-ind-euro-news").show();
            }
            if(ckAnalises.checked == true){
                $("#ad-c-ind-euro-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#ad-c-ind-euro-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#ad-c-ind-euro-agro").show();
            }
        }
        
    } else{
        $('#iconAdCIndEuropa-0').removeClass('fa-angle-right');
        $('#iconAdCIndEuropa-0').addClass('fa-angle-down');
        $("#iconAdCIndEuropa-1").hide();
        $('#iconAdCIndEuropa-0bagro').removeClass('fa-angle-right');
        $('#iconAdCIndEuropa-0bagro').addClass('fa-angle-down');
        $("#iconAdCIndEuropa-1bagro").hide();
        $("#ad-c-ind-euro-trade").hide();
        $("#ad-c-ind-euro-conjuntura").hide();
        $("#ad-c-ind-euro-mercados").hide();
        $("#ad-c-ind-euro-news").hide();
        $("#ad-c-ind-euro-analises").hide();
        $("#ad-c-ind-euro-agrotrade").hide();
        $("#ad-c-ind-euro-agro").hide();
    }
}

function iconAdCIndUSA(){
    if($(document.getElementById("ad-c-ind-usa-collapse")).hasClass('show')){
        $('#iconAdCIndUSA-0').removeClass('fa-angle-down');
        $('#iconAdCIndUSA-0').addClass('fa-angle-right');
        $('#iconAdCIndUSA-1').show();
        $('#iconAdCIndUSA-2').show();
        $('#iconAdCIndUSA-0bagro').removeClass('fa-angle-down');
        $('#iconAdCIndUSA-0bagro').addClass('fa-angle-right');
        $('#iconAdCIndUSA-1bagro').show();
        $('#iconAdCIndUSA-2bagro').show();
        if(chkAll.checked == true){
            $("#ad-c-ind-usa-trade").show();
            $("#ad-c-ind-usa-conjuntura").show();
            $("#ad-c-ind-usa-mercados").show();
            $("#ad-c-ind-usa-news").show();
            $("#ad-c-ind-usa-analises").show();
            $("#ad-c-ind-usa-agrotrade").show();
            $("#ad-c-ind-usa-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("#ad-c-ind-usa-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#ad-c-ind-usa-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#ad-c-ind-usa-mercados").show();
            }
            if(ckNews.checked == true){
                $("#ad-c-ind-usa-news").show();
            }
            if(ckAnalises.checked == true){
                $("#ad-c-ind-usa-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#ad-c-ind-usa-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#ad-c-ind-usa-agro").show();
            }
        }
        
    } else{
        $('#iconAdCIndUSA-0').removeClass('fa-angle-right');
        $('#iconAdCIndUSA-0').addClass('fa-angle-down');
        $('#iconAdCIndUSA-1').hide();
        $('#iconAdCIndUSA-2').hide();
        $('#iconAdCIndUSA-0bagro').removeClass('fa-angle-right');
        $('#iconAdCIndUSA-0bagro').addClass('fa-angle-down');
        $('#iconAdCIndUSA-1bagro').hide();
        $('#iconAdCIndUSA-2bagro').hide();
        $("#ad-c-ind-usa-trade").hide();
        $("#ad-c-ind-usa-conjuntura").hide();
        $("#ad-c-ind-usa-mercados").hide();
        $("#ad-c-ind-usa-news").hide();
        $("#ad-c-ind-usa-analises").hide();
        $("#ad-c-ind-usa-agrotrade").hide();
        $("#ad-c-ind-usa-agro").hide();
    }
}

function iconAdCNyse(){
    if($(document.getElementById("ad-c-nyse-collapse")).hasClass('show')){
        $('#iconAdCNyse-0').removeClass('fa-angle-down');
        $('#iconAdCNyse-0').addClass('fa-angle-right');
        $('#iconAdCNyse-1').show();
        $('#iconAdCNyse-0bagro').removeClass('fa-angle-down');
        $('#iconAdCNyse-0bagro').addClass('fa-angle-right');
        $('#iconAdCNyse-1bagro').show();
        if(chkAll.checked == true){
            $("#ad-c-nyse-trade").show();
            $("#ad-c-nyse-conjuntura").show();
            $("#ad-c-nyse-mercados").show();
            $("#ad-c-nyse-news").show();
            $("#ad-c-nyse-analises").show();
            $("#ad-c-nyse-agrotrade").show();
            $("#ad-c-nyse-agro").show();
        } else {
            if(ckTrade.checked == true){
                $("ad-#c-nyse-trade").show();
            }
            if(ckConjuntura.checked == true){
                $("#ad-c-nyse-conjuntura").show();
            }
            if(ckMercados.checked == true){
                $("#ad-c-nyse-mercados").show();
            }
            if(ckNews.checked == true){
                $("#ad-c-nyse-news").show();
            }
            if(ckAnalises.checked == true){
                $("#ad-c-nyse-analises").show();
            }
            if(ckAgroTrade.checked == true){
                $("#ad-c-nyse-agrotrade").show();
            }
            if(ckAgro.checked == true){
                $("#ad-c-nyse-agro").show();
            }
        }
        
    } else{
        $('#iconAdCNyse-0').removeClass('fa-angle-right');
        $('#iconAdCNyse-0').addClass('fa-angle-down');
        $('#iconAdCNyse-1').hide();
        $('#iconAdCNyse-0bagro').removeClass('fa-angle-right');
        $('#iconAdCNyse-0bagro').addClass('fa-angle-down');
        $('#iconAdCNyse-1bagro').hide();
        $("#ad-c-nyse-trade").hide();
        $("#ad-c-nyse-conjuntura").hide();
        $("#ad-c-nyse-mercados").hide();
        $("#ad-c-nyse-news").hide();
        $("#ad-c-nyse-analises").hide();
        $("#ad-c-nyse-agrotrade").hide();
        $("#ad-c-nyse-agro").hide();
    }
}
/*JS Lisbox */

function controlaNivel(){

    var sel = document.getElementById('selectNivel');
    var v0 = sel.options[sel.selectedIndex].value;
    var v1 = sel.value;

    console.log(v1);
    if(sel.value == 0){
        if($(document.getElementById("Noticias-collapse")).hasClass('show')){
            document.getElementById("NoticiaN1").click();
        }
        if($(document.getElementById("Noticias-nwlttr-collapse")).hasClass('show')){
            document.getElementById("NewsletterN2").click();
        }
        if($(document.getElementById("Noticias-ctbd-collapse")).hasClass('show')){
            document.getElementById("NotContriN2").click();
        }
        if($(document.getElementById("Cotacao-collapse")).hasClass('show')){
            document.getElementById("CotacaoN1").click();
        }
        if($(document.getElementById("Cotacao-anb-collapse")).hasClass('show')){
            document.getElementById("CotAnbN2").click();
        }
        if($(document.getElementById("Cotacao-agro-collapse")).hasClass('show')){
            document.getElementById("CotAgroN2").click();
        }
        if($(document.getElementById("Cotacao-b3-collapse")).hasClass('show')){
            document.getElementById("CotB3N2").click();
        }
        if($(document.getElementById("Cotacao-bc-collapse")).hasClass('show')){
            document.getElementById("CotBcN2").click();
        }
        if($(document.getElementById("c-indices-collapse")).hasClass('show')){
            document.getElementById("CotIndN2").click();
        }
        if($(document.getElementById("c-ind-ao-collapse")).hasClass('show')){
            document.getElementById("CindAON3").click();
        }
        if($(document.getElementById("c-ind-euro-collapse")).hasClass('show')){
            document.getElementById("CindEuroN3").click();
        }
        if($(document.getElementById("c-ind-latam-collapse")).hasClass('show')){
            document.getElementById("CindLatamN3").click();
        }
        if($(document.getElementById("c-ind-usa-collapse")).hasClass('show')){
            document.getElementById("CindUSAN3").click();
        }
        if($(document.getElementById("c-nyse-collapse")).hasClass('show')){
            document.getElementById("CotNyseN2").click();
        }
        if($(document.getElementById("Cotacao-ctbd-collapse")).hasClass('show')){
            document.getElementById("CotContriN2").click();
        }
        if($(document.getElementById("Addon-mod-collapse")).hasClass('show')){
            document.getElementById("ModN1").click();
        }
        if($(document.getElementById("Addon-mod-af-collapse")).hasClass('show')){
            document.getElementById("ModAFN2").click();
        }
        if($(document.getElementById("Addon-mod-af-collapse")).hasClass('show')){
            document.getElementById("ModAFN2").click();
        }
        if($(document.getElementById("Addon-n-collapse")).hasClass('show')){
            document.getElementById("AdNotN1").click();
        }
        if($(document.getElementById("Addon-n-djn-collapse")).hasClass('show')){
            document.getElementById("AdNotDJN2").click();
        }
        if($(document.getElementById("Addon-c-collapse")).hasClass('show')){
            document.getElementById("AdCotN1").click();
        }
        if($(document.getElementById("ad-c-b3-collapse")).hasClass('show')){
            document.getElementById("AdCotB3N2").click();
        }
        if($(document.getElementById("ad-c-indices-collapse")).hasClass('show')){
            document.getElementById("AdCotIndN2").click();
        }
        if($(document.getElementById("ad-c-ind-euro-collapse")).hasClass('show')){
            document.getElementById("AdCindEuroN3").click();
        }
        if($(document.getElementById("ad-c-ind-usa-collapse")).hasClass('show')){
            document.getElementById("AdCindUSAN3").click();
        }
        if($(document.getElementById("ad-c-nyse-collapse")).hasClass('show')){
            document.getElementById("AdCotNyseN2").click();
        }

    }else{
        if(sel.value == 1) {
           
            if($(document.getElementById("Noticias-collapse")).hasClass('show')==false){
                document.getElementById("NoticiaN1").click();
            }
            if($(document.getElementById("Noticias-nwlttr-collapse")).hasClass('show')){
                document.getElementById("NewsletterN2").click();
            }
            if($(document.getElementById("Noticias-ctbd-collapse")).hasClass('show')){
                document.getElementById("NotContriN2").click();
            }
            if($(document.getElementById("Cotacao-collapse")).hasClass('show')==false){
                document.getElementById("CotacaoN1").click();
            }
            if($(document.getElementById("Cotacao-anb-collapse")).hasClass('show')){
                document.getElementById("CotAnbN2").click();
            }
            if($(document.getElementById("Cotacao-agro-collapse")).hasClass('show')){
                document.getElementById("CotAgroN2").click();
            }
            if($(document.getElementById("Cotacao-b3-collapse")).hasClass('show')){
                document.getElementById("CotB3N2").click();
            }
            if($(document.getElementById("Cotacao-bc-collapse")).hasClass('show')){
                document.getElementById("CotBcN2").click();
            }
            if($(document.getElementById("c-indices-collapse")).hasClass('show')){
                document.getElementById("CotIndN2").click();
            }
            if($(document.getElementById("c-ind-ao-collapse")).hasClass('show')){
                document.getElementById("CindAON3").click();
            }
            if($(document.getElementById("c-ind-euro-collapse")).hasClass('show')){
                document.getElementById("CindEuroN3").click();
            }
            if($(document.getElementById("c-ind-latam-collapse")).hasClass('show')){
                document.getElementById("CindLatamN3").click();
            }
            if($(document.getElementById("c-ind-usa-collapse")).hasClass('show')){
                document.getElementById("CindUSAN3").click();
            }
            if($(document.getElementById("c-nyse-collapse")).hasClass('show')){
                document.getElementById("CotNyseN2").click();
            }
            if($(document.getElementById("Cotacao-ctbd-collapse")).hasClass('show')){
                document.getElementById("CotContriN2").click();
            }
            if($(document.getElementById("Addon-mod-collapse")).hasClass('show')==false){
                document.getElementById("ModN1").click();
            }
            
            if($(document.getElementById("Addon-mod-af-collapse")).hasClass('show')){
                document.getElementById("ModAFN2").click();
            }
            if($(document.getElementById("Addon-mod-af-collapse")).hasClass('show')){
                document.getElementById("ModAFN2").click();
            }
            if($(document.getElementById("Addon-n-collapse")).hasClass('show')==false){
                document.getElementById("AdNotN1").click();
            }
            if($(document.getElementById("Addon-n-djn-collapse")).hasClass('show')){
                document.getElementById("AdNotDJN2").click();
            }
            if($(document.getElementById("Addon-c-collapse")).hasClass('show')==false){
                document.getElementById("AdCotN1").click();
            }
            if($(document.getElementById("ad-c-b3-collapse")).hasClass('show')){
                document.getElementById("AdCotB3N2").click();
            }
            if($(document.getElementById("ad-c-indices-collapse")).hasClass('show')){
                document.getElementById("AdCotIndN2").click();
            }
            if($(document.getElementById("ad-c-ind-euro-collapse")).hasClass('show')){
                document.getElementById("AdCindEuroN3").click();
            }
            if($(document.getElementById("ad-c-ind-usa-collapse")).hasClass('show')){
                document.getElementById("AdCindUSAN3").click();
            }
            if($(document.getElementById("ad-c-nyse-collapse")).hasClass('show')){
                document.getElementById("AdCotNyseN2").click();
            }

        }else{
            if(sel.value == 2){
                if($(document.getElementById("Noticias-collapse")).hasClass('show')==false){
                    document.getElementById("NoticiaN1").click();
                }
                if($(document.getElementById("Noticias-nwlttr-collapse")).hasClass('show')==false){
                    document.getElementById("NewsletterN2").click();
                }
                if($(document.getElementById("Noticias-ctbd-collapse")).hasClass('show')==false){
                    document.getElementById("NotContriN2").click();
                }
                if($(document.getElementById("Cotacao-collapse")).hasClass('show')==false){
                    document.getElementById("CotacaoN1").click();
                }
                if($(document.getElementById("Cotacao-anb-collapse")).hasClass('show')==false){
                    document.getElementById("CotAnbN2").click();
                }
                if($(document.getElementById("Cotacao-agro-collapse")).hasClass('show')==false){
                    document.getElementById("CotAgroN2").click();
                }
                if($(document.getElementById("Cotacao-b3-collapse")).hasClass('show')==false){
                    document.getElementById("CotB3N2").click();
                }
                if($(document.getElementById("Cotacao-bc-collapse")).hasClass('show')==false){
                    document.getElementById("CotBcN2").click();
                }
                if($(document.getElementById("c-indices-collapse")).hasClass('show')==false){
                    document.getElementById("CotIndN2").click();
                }
                if($(document.getElementById("c-ind-ao-collapse")).hasClass('show')==false){
                    document.getElementById("CindAON3").click();
                }
                if($(document.getElementById("c-ind-euro-collapse")).hasClass('show')==false){
                    document.getElementById("CindEuroN3").click();
                }
                if($(document.getElementById("c-ind-latam-collapse")).hasClass('show')==false){
                    document.getElementById("CindLatamN3").click();
                }
                if($(document.getElementById("c-ind-usa-collapse")).hasClass('show')==false){
                    document.getElementById("CindUSAN3").click();
                }
                if($(document.getElementById("c-nyse-collapse")).hasClass('show')==false){
                    document.getElementById("CotNyseN2").click();
                }
                if($(document.getElementById("Cotacao-ctbd-collapse")).hasClass('show')==false){
                    document.getElementById("CotContriN2").click();
                }
                if($(document.getElementById("Addon-mod-collapse")).hasClass('show')==false){
                    document.getElementById("ModN1").click();
                }
                if($(document.getElementById("Addon-mod-af-collapse")).hasClass('show')==false){
                    document.getElementById("ModAFN2").click();
                }
                if($(document.getElementById("Addon-mod-af-collapse")).hasClass('show')==false){
                    document.getElementById("ModAFN2").click();
                }
                if($(document.getElementById("Addon-n-collapse")).hasClass('show')==false){
                    document.getElementById("AdNotN1").click();
                }
                if($(document.getElementById("Addon-n-djn-collapse")).hasClass('show')==false){
                    document.getElementById("AdNotDJN2").click();
                }
                if($(document.getElementById("Addon-c-collapse")).hasClass('show')==false){
                    document.getElementById("AdCotN1").click();
                }
                if($(document.getElementById("ad-c-b3-collapse")).hasClass('show')==false){
                    document.getElementById("AdCotB3N2").click();
                }
                if($(document.getElementById("ad-c-indices-collapse")).hasClass('show')==false){
                    document.getElementById("AdCotIndN2").click();
                }
                if($(document.getElementById("ad-c-ind-euro-collapse")).hasClass('show')==false){
                    document.getElementById("AdCindEuroN3").click();
                }
                if($(document.getElementById("ad-c-ind-usa-collapse")).hasClass('show')==false){
                    document.getElementById("AdCindUSAN3").click();
                }
                if($(document.getElementById("ad-c-nyse-collapse")).hasClass('show')==false){
                    document.getElementById("AdCotNyseN2").click();
                }

            }

            }
        }
    }
function controlaPlataformas(){
    var sel = document.getElementById('selectPlataforma');
    console.log(sel.value);
    if (sel.value == 2){
        $("#bpro").addClass('d-none');
        $("#img-bpro").addClass('d-none');
        $("#cktrade").addClass('d-none');
        $("#ckconjuntura").addClass('d-none');
        $("#ckmercados").addClass('d-none');
        $("#cknews").addClass('d-none');
        $("#ckanalises").addClass('d-none');
        $("#bagro").removeClass('d-none');
        $("#img-bagro").removeClass('d-none');
        $("#ckagrotrade").removeClass('d-none');
        $("#ckagro").removeClass('d-none');
    }else{
        $("#bpro").removeClass('d-none');
        $("#img-bpro").removeClass('d-none');
        $("#cktrade").removeClass('d-none');
        $("#ckconjuntura").removeClass('d-none');
        $("#ckmercados").removeClass('d-none');
        $("#cknews").removeClass('d-none');
        $("#ckanalises").removeClass('d-none');
        $("#bagro").addClass('d-none');
        $("#img-bagro").addClass('d-none');
        $("#ckagrotrade").addClass('d-none');
        $("#ckagro").addClass('d-none');
    }
}

$(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
        $('#selectNivel').val("1").change();
        $(window).on('scroll', function(event) {
            var scrollValue = $(window).scrollTop();
            //var teste = $("#cont-adc-pago").offset().top
            if ( scrollValue > 100) {
                 $('#cont-incluso').addClass('fixed-head-conteudos');
                 $('#cont-incluso-bagro').addClass('fixed-head-conteudos');
                 if (scrollValue > 1000){
                    $('#cont-adc-pago').addClass('fixed-head-conteudos');
                    $('#cont-incluso').removeClass('fixed-head-conteudos');
                    $('#cont-adc-pago-bagro').addClass('fixed-head-conteudos');
                    $('#cont-incluso-bagro').removeClass('fixed-head-conteudos');
                 }else{
                     $('#cont-adc-pago').removeClass('fixed-head-conteudos');
                     $('#cont-adc-pago-bagro').removeClass('fixed-head-conteudos');
                 }
            }else{
               $('#cont-incluso').removeClass('fixed-head-conteudos');
               $('#cont-incluso-bagro').removeClass('fixed-head-conteudos');
            }
        });
    });

