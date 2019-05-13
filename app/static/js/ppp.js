/* Funções para controlar movimentação dos icones da callopse*/

function iconNoticia(){
    if($(document.getElementById("Noticias-collapse")).hasClass('show')){
        $('#iconN').removeClass('fa-angle-down');
        $('#iconN').addClass('fa-angle-right');
        $("#n-trade").show();
        $("#n-conjuntura").show();
        $("#n-mercados").show();
        $("#n-news").show();
        $("#n-analises").show();
    } else{
        $('#iconN').removeClass('fa-angle-right');
        $('#iconN').addClass('fa-angle-down');
        $("#n-trade").hide();
        $("#n-conjuntura").hide();
        $("#n-mercados").hide();
        $("#n-news").hide();
        $("#n-analises").hide();
    }
}

function iconNoticiaNewsLetter(){
    if($(document.getElementById("Noticias-nwlttr-collapse")).hasClass('show')){
        $('#iconNNewsletter').removeClass('fa-angle-down');
        $('#iconNNewsletter').addClass('fa-angle-right');
        $("#n-nwlttr-trade").show();
        $("#n-nwlttr-conjuntura").show();
        $("#n-nwlttr-mercados").show();
        $("#n-nwlttr-news").show();
        $("#n-nwlttr-analises").show();
    } else{
        $('#iconNNewsletter').removeClass('fa-angle-right');
        $('#iconNNewsletter').addClass('fa-angle-down');
        $("#n-nwlttr-trade").hide();
        $("#n-nwlttr-conjuntura").hide();
        $("#n-nwlttr-mercados").hide();
        $("#n-nwlttr-news").hide();
        $("#n-nwlttr-analises").hide();
    }
}

function iconNoticiaContri(){
    if($(document.getElementById("Noticias-ctbd-collapse")).hasClass('show')){
        $('#iconNContri').removeClass('fa-angle-down');
        $('#iconNContri').addClass('fa-angle-right');
        $("#n-ctbd-trade").show();
        $("#n-ctbd-conjuntura").show();
        $("#n-ctbd-mercados").show();
        $("#n-ctbd-news").show();
        $("#n-ctbd-analises").show();
    } else{
        $('#iconNContri').removeClass('fa-angle-right');
        $('#iconNContri').addClass('fa-angle-down');
        $("#n-ctbd-trade").hide();
        $("#n-ctbd-conjuntura").hide();
        $("#n-ctbd-mercados").hide();
        $("#n-ctbd-news").hide();
        $("#n-ctbd-analises").hide();
    }
}

function iconCotacao(){
    if($(document.getElementById("Cotacao-collapse")).hasClass('show')){
        $('#iconCotacao').removeClass('fa-angle-down');
        $('#iconCotacao').addClass('fa-angle-right');
        $("#c-trade").show();
        $("#c-conjuntura").show();
        $("#c-mercados").show();
        $("#c-news").show();
        $("#c-analises").show();

    } else{
        $('#iconCotacao').removeClass('fa-angle-right');
        $('#iconCotacao').addClass('fa-angle-down');
        $("#c-trade").hide();
        $("#c-conjuntura").hide();
        $("#c-mercados").hide();
        $("#c-news").hide();
        $("#c-analises").hide();
    }
}

function iconCotacaoAnb(){
    if($(document.getElementById("Cotacao-anb-collapse")).hasClass('show')){
        $('#iconCAnb-0').removeClass('fa-angle-down');
        $('#iconCAnb-0').addClass('fa-angle-right');
        $('#iconCAnb-1').show();
        $("#c-anb-trade").show();
        $("#c-anb-conjuntura").show();
        $("#c-anb-mercados").show();
        $("#c-anb-news").show();
        $("#c-anb-analises").show();
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

function iconCotacaoB3(){
    if($(document.getElementById("Cotacao-b3-collapse")).hasClass('show')){
        $('#iconCB3-0').removeClass('fa-angle-down');
        $('#iconCB3-0').addClass('fa-angle-right');
        $('#iconCB3-1').show();
        $("#c-b3-trade").show();
        $("#c-b3-conjuntura").show();
        $("#c-b3-mercados").show();
        $("#c-b3-news").show();
        $("#c-b3-analises").show();
    } else{
        $('#iconCB3-0').removeClass('fa-angle-right');
        $('#iconCB3-0').addClass('fa-angle-down');
        $('#iconCB3-1').hide();
        $("#c-b3-trade").hide();
        $("#c-b3-conjuntura").hide();
        $("#c-b3-mercados").hide();
        $("#c-b3-news").hide();
        $("#c-b3-analises").hide();
    }
}

function iconCotacaoBC(){
    if($(document.getElementById("Cotacao-bc-collapse")).hasClass('show')){
        $('#iconCBC-0').removeClass('fa-angle-down');
        $('#iconCBC-0').addClass('fa-angle-right');
        $('#iconCBC-1').show();
        $("#c-bc-trade").show();
        $("#c-bc-conjuntura").show();
        $("#c-bc-mercados").show();
        $("#c-bc-news").show();
        $("#c-bc-analises").show();
    } else{
        $('#iconCBC-0').removeClass('fa-angle-right');
        $('#iconCBC-0').addClass('fa-angle-down');
        $('#iconCBC-1').hide();
        $("#c-bc-trade").hide();
        $("#c-bc-conjuntura").hide();
        $("#c-bc-mercados").hide();
        $("#c-bc-news").hide();
        $("#c-bc-analises").hide();
    }
}

function iconCIndices(){
    if($(document.getElementById("c-indices-collapse")).hasClass('show')){
        $('#iconCIndices-0').removeClass('fa-angle-down');
        $('#iconCIndices-0').addClass('fa-angle-right');
        $("#iconCIndices-1").show();
        $("#iconCIndices-2").show();
        $("#c-indicesMundi-trade").show();
        $("#c-indicesMundi-conjuntura").show();
        $("#c-indicesMundi-mercados").show();
        $("#c-indicesMundi-news").show();
        $("#c-indicesMundi-analises").show();
    } else{
        $('#iconCIndices-0').removeClass('fa-angle-right');
        $('#iconCIndices-0').addClass('fa-angle-down');
        $("#iconCIndices-1").hide();
        $("#iconCIndices-2").hide();
        $("#c-indicesMundi-trade").hide();
        $("#c-indicesMundi-conjuntura").hide();
        $("#c-indicesMundi-mercados").hide();
        $("#c-indicesMundi-news").hide();
        $("#c-indicesMundi-analises").hide();
    }
}

function iconCIndAsiaOcean(){
    if($(document.getElementById("c-ind-ao-collapse")).hasClass('show')){
        $('#iconCIndAsiaOcean-0').removeClass('fa-angle-down');
        $('#iconCIndAsiaOcean-0').addClass('fa-angle-right');
        $("#iconCIndAsiaOcean-1").show();
        $("#iconCIndAsiaOcean-2").show();
        $("#c-ind-ao-trade").show();
        $("#c-ind-ao-conjuntura").show();
        $("#c-ind-ao-mercados").show();
        $("#c-ind-ao-news").show();
        $("#c-ind-ao-analises").show();
    } else{
        $('#iconCIndAsiaOcean-0').removeClass('fa-angle-right');
        $('#iconCIndAsiaOcean-0').addClass('fa-angle-down');
        $("#iconCIndAsiaOcean-1").hide();
        $("#iconCIndAsiaOcean-2").hide();
        $("#c-ind-ao-trade").hide();
        $("#c-ind-ao-conjuntura").hide();
        $("#c-ind-ao-mercados").hide();
        $("#c-ind-ao-news").hide();
        $("#c-ind-ao-analises").hide();
    }
}

function iconCIndEuropa(){
    if($(document.getElementById("c-ind-euro-collapse")).hasClass('show')){
        $('#iconCIndEuropa-0').removeClass('fa-angle-down');
        $('#iconCIndEuropa-0').addClass('fa-angle-right');
        $("#iconCIndEuropa-1").show();
        $("#c-ind-euro-trade").show();
        $("#c-ind-euro-conjuntura").show();
        $("#c-ind-euro-mercados").show();
        $("#c-ind-euro-news").show();
        $("#c-ind-euro-analises").show();
    } else{
        $('#iconCIndEuropa-0').removeClass('fa-angle-right');
        $('#iconCIndEuropa-0').addClass('fa-angle-down');
        $("#iconCIndEuropa-1").hide();
        $("#c-ind-euro-trade").hide();
        $("#c-ind-euro-conjuntura").hide();
        $("#c-ind-euro-mercados").hide();
        $("#c-ind-euro-news").hide();
        $("#c-ind-euro-analises").hide();
    }
}

function iconCIndLatam(){
    if($(document.getElementById("c-ind-latam-collapse")).hasClass('show')){
        $('#iconCIndLatam-0').removeClass('fa-angle-down');
        $('#iconCIndLatam-0').addClass('fa-angle-right');
        $("#iconCIndLatam-1").show();
        $("#c-ind-latam-trade").show();
        $("#c-ind-latam-conjuntura").show();
        $("#c-ind-latam-mercados").show();
        $("#c-ind-latam-news").show();
        $("#c-ind-latam-analises").show();
    } else{
        $('#iconCIndLatam-0').removeClass('fa-angle-right');
        $('#iconCIndLatam-0').addClass('fa-angle-down');
        $("#iconCIndLatam-1").hide();
        
        $("#c-ind-latam-trade").hide();
        $("#c-ind-latam-conjuntura").hide();
        $("#c-ind-latam-mercados").hide();
        $("#c-ind-latam-news").hide();
        $("#c-ind-latam-analises").hide();
    }
}

function iconCIndUSA(){
    if($(document.getElementById("c-ind-usa-collapse")).hasClass('show')){
        $('#iconCIndUSA-0').removeClass('fa-angle-down');
        $('#iconCIndUSA-0').addClass('fa-angle-right');
        $('#iconCIndUSA-1').show();
        $("#c-ind-usa-trade").show();
        $("#c-ind-usa-conjuntura").show();
        $("#c-ind-usa-mercados").show();
        $("#c-ind-usa-news").show();
        $("#c-ind-usa-analises").show();
    } else{
        $('#iconCIndUSA-0').removeClass('fa-angle-right');
        $('#iconCIndUSA-0').addClass('fa-angle-down');
        $('#iconCIndUSA-1').hide();
        $("#c-ind-usd-trade").hide();
        $("#c-ind-usa-conjuntura").hide();
        $("#c-ind-usa-mercados").hide();
        $("#c-ind-usa-news").hide();
        $("#c-ind-usa-analises").hide();
    }
}

function iconCNyse(){
    if($(document.getElementById("c-nyse-collapse")).hasClass('show')){
        $('#iconCNyse-0').removeClass('fa-angle-down');
        $('#iconCNyse-0').addClass('fa-angle-right');
        $('#iconCNyse-1').show();
        $("#c-nyse-trade").show();
        $("#c-nyse-conjuntura").show();
        $("#c-nyse-mercados").show();
        $("#c-nyse-news").show();
        $("#c-nyse-analises").show();
    } else{
        $('#iconCNyse-0').removeClass('fa-angle-right');
        $('#iconCNyse-0').addClass('fa-angle-down');
        $('#iconCNyse-1').hide();
        $("#c-nyse-trade").hide();
        $("#c-nyse-conjuntura").hide();
        $("#c-nyse-mercados").hide();
        $("#c-nyse-news").hide();
        $("#c-nyse-analises").hide();
    }
}

function iconCotacaoContri(){
    if($(document.getElementById("Cotacao-ctbd-collapse")).hasClass('show')){
        $('#iconCContri').removeClass('fa-angle-down');
        $('#iconCContri').addClass('fa-angle-right');
        $("#c-ctbd-trade").show();
        $("#c-ctbd-conjuntura").show();
        $("#c-ctbd-mercados").show();
        $("#c-ctbd-news").show();
        $("#c-ctbd-analises").show();
    } else{
        $('#iconCContri').removeClass('fa-angle-right');
        $('#iconCContri').addClass('fa-angle-down');
        $("#c-ctbd-trade").hide();
        $("#c-ctbd-conjuntura").hide();
        $("#c-ctbd-mercados").hide();
        $("#c-ctbd-news").hide();
        $("#c-ctbd-analises").hide();
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
        $("#ad-mod-trade").show();
        $("#ad-mod-conjuntura").show();
        $("#ad-mod-mercados").show();
        $("#ad-mod-news").show();
        $("#ad-mod-analises").show();
    } else{
        $('#iconModulos').removeClass('fa-angle-right');
        $('#iconModulos').addClass('fa-angle-down');
        $("#ad-mod-trade").hide();
        $("#ad-mod-conjuntura").hide();
        $("#ad-mod-mercados").hide();
        $("#ad-mod-news").hide();
        $("#ad-mod-analises").hide();
    }
}

function iconAnaFund(){
    if($(document.getElementById("Addon-mod-af-collapse")).hasClass('show')){
        $('#iconAnaFund').removeClass('fa-angle-down');
        $('#iconAnaFund').addClass('fa-angle-right');
        $("#ad-mod-af-trade").show();
        $("#ad-mod-af-conjuntura").show();
        $("#ad-mod-af-mercados").show();
        $("#ad-mod-af-news").show();
        $("#ad-mod-af-analises").show();
    } else{
        $('#iconAnaFund').removeClass('fa-angle-right');
        $('#iconAnaFund').addClass('fa-angle-down');
        $("#ad-mod-af-trade").hide();
        $("#ad-mod-af-conjuntura").hide();
        $("#ad-mod-af-mercados").hide();
        $("#ad-mod-af-news").hide();
        $("#ad-mod-af-analises").hide();
    }
}

function iconModNoticias(){
    if($(document.getElementById("Addon-n-collapse")).hasClass('show')){
        $('#iconModNoticias').removeClass('fa-angle-down');
        $('#iconModNoticias').addClass('fa-angle-right');
        $("#ad-n-trade").show();
        $("#ad-n-conjuntura").show();
        $("#ad-n-mercados").show();
        $("#ad-n-news").show();
        $("#ad-n-analises").show();
    } else{
        $('#iconModNoticias').removeClass('fa-angle-right');
        $('#iconModNoticias').addClass('fa-angle-down');
        $("#ad-n-trade").hide();
        $("#ad-n-conjuntura").hide();
        $("#ad-n-mercados").hide();
        $("#ad-n-news").hide();
        $("#ad-n-analises").hide();
    }
}

function iconModNDJN(){
    if($(document.getElementById("Addon-n-djn-collapse")).hasClass('show')){
        $('#iconModNDJN').removeClass('fa-angle-down');
        $('#iconModNDJN').addClass('fa-angle-right');
        $("#ad-n-djn-trade").show();
        $("#ad-n-djn-conjuntura").show();
        $("#ad-n-djn-mercados").show();
        $("#ad-n-djn-news").show();
        $("#ad-n-djn-analises").show();
    } else{
        $('#iconModNDJN').removeClass('fa-angle-right');
        $('#iconModNDJN').addClass('fa-angle-down');
        $("#ad-n-djn-trade").hide();
        $("#ad-n-djn-conjuntura").hide();
        $("#ad-n-djn-mercados").hide();
        $("#ad-n-djn-news").hide();
        $("#ad-n-djn-analises").hide();
    }
}

function iconModCotacao(){
    if($(document.getElementById("Addon-c-collapse")).hasClass('show')){
        $('#iconModCotacao').removeClass('fa-angle-down');
        $('#iconModCotacao').addClass('fa-angle-right');
        $("#ad-c-trade").show();
        $("#ad-c-conjuntura").show();
        $("#ad-c-mercados").show();
        $("#ad-c-news").show();
        $("#ad-c-analises").show();
    } else{
        $('#iconModCotacao').removeClass('fa-angle-right');
        $('#iconModCotacao').addClass('fa-angle-down');
        $("#ad-c-trade").hide();
        $("#ad-c-conjuntura").hide();
        $("#ad-c-mercados").hide();
        $("#ad-c-news").hide();
        $("#ad-c-analises").hide();
    }
}

function iconAdCotacaoB3(){
    if($(document.getElementById("ad-c-b3-collapse")).hasClass('show')){
        $('#iconAdCB3-0').removeClass('fa-angle-down');
        $('#iconAdCB3-0').addClass('fa-angle-right');
        $('#iconAdCB3-1').show();
        $("#ad-c-b3-trade").show();
        $("#ad-c-b3-conjuntura").show();
        $("#ad-c-b3-mercados").show();
        $("#ad-c-b3-news").show();
        $("#ad-c-b3-analises").show();
    } else{
        $('#iconAdCB3-0').removeClass('fa-angle-right');
        $('#iconAdCB3-0').addClass('fa-angle-down');
        $('#iconAdCB3-1').hide();
        $("#ad-c-b3-trade").hide();
        $("#ad-c-b3-conjuntura").hide();
        $("#ad-c-b3-mercados").hide();
        $("#ad-c-b3-news").hide();
        $("#ad-c-b3-analises").hide();
    }
}

function iconAdCIndices(){
    if($(document.getElementById("ad-c-indices-collapse")).hasClass('show')){
        $('#iconAdCIndices-0').removeClass('fa-angle-down');
        $('#iconAdCIndices-0').addClass('fa-angle-right');
        $("#iconAdCIndices-1").show();
        $("#iconAdCIndices-2").show();
        $("#ad-c-indicesMundi-trade").show();
        $("#ad-c-indicesMundi-conjuntura").show();
        $("#ad-c-indicesMundi-mercados").show();
        $("#ad-c-indicesMundi-news").show();
        $("#ad-c-indicesMundi-analises").show();
    } else{
        $('#iconAdCIndices-0').removeClass('fa-angle-right');
        $('#iconAdCIndices-0').addClass('fa-angle-down');
        $("#iconAdCIndices-1").hide();
        $("#iconAdCIndices-2").hide();
        $("#ad-c-indicesMundi-trade").hide();
        $("#ad-c-indicesMundi-conjuntura").hide();
        $("#ad-c-indicesMundi-mercados").hide();
        $("#ad-c-indicesMundi-news").hide();
        $("#ad-c-indicesMundi-analises").hide();
    }
}

function iconAdCIndEuropa(){
    if($(document.getElementById("ad-c-ind-euro-collapse")).hasClass('show')){
        $('#iconAdCIndEuropa-0').removeClass('fa-angle-down');
        $('#iconAdCIndEuropa-0').addClass('fa-angle-right');
        $("#iconAdCIndEuropa-1").show();
        $("#ad-c-ind-euro-trade").show();
        $("#ad-c-ind-euro-conjuntura").show();
        $("#ad-c-ind-euro-mercados").show();
        $("#ad-c-ind-euro-news").show();
        $("#ad-c-ind-euro-analises").show();
    } else{
        $('#iconAdCIndEuropa-0').removeClass('fa-angle-right');
        $('#iconAdCIndEuropa-0').addClass('fa-angle-down');
        $("#iconAdCIndEuropa-1").hide();
        $("#ad-c-ind-euro-trade").hide();
        $("#ad-c-ind-euro-conjuntura").hide();
        $("#ad-c-ind-euro-mercados").hide();
        $("#ad-c-ind-euro-news").hide();
        $("#ad-c-ind-euro-analises").hide();
    }
}

function iconAdCIndUSA(){
    if($(document.getElementById("ad-c-ind-usa-collapse")).hasClass('show')){
        $('#iconAdCIndUSA-0').removeClass('fa-angle-down');
        $('#iconAdCIndUSA-0').addClass('fa-angle-right');
        $('#iconAdCIndUSA-1').show();
        $('#iconAdCIndUSA-2').show();
        $("#ad-c-ind-usa-trade").show();
        $("#ad-c-ind-usa-conjuntura").show();
        $("#ad-c-ind-usa-mercados").show();
        $("#ad-c-ind-usa-news").show();
        $("#ad-c-ind-usa-analises").show();
    } else{
        $('#iconAdCIndUSA-0').removeClass('fa-angle-right');
        $('#iconAdCIndUSA-0').addClass('fa-angle-down');
        $('#iconAdCIndUSA-1').hide();
        $('#iconAdCIndUSA-2').hide();
        $("#ad-c-ind-usd-trade").hide();
        $("#ad-c-ind-usa-conjuntura").hide();
        $("#ad-c-ind-usa-mercados").hide();
        $("#ad-c-ind-usa-news").hide();
        $("#ad-c-ind-usa-analises").hide();
    }
}

function iconAdCNyse(){
    if($(document.getElementById("ad-c-nyse-collapse")).hasClass('show')){
        $('#iconAdCNyse-0').removeClass('fa-angle-down');
        $('#iconAdCNyse-0').addClass('fa-angle-right');
        $('#iconAdCNyse-1').show();
        $("#ad-c-nyse-trade").show();
        $("#ad-c-nyse-conjuntura").show();
        $("#ad-c-nyse-mercados").show();
        $("#ad-c-nyse-news").show();
        $("#ad-c-nyse-analises").show();
    } else{
        $('#iconAdCNyse-0').removeClass('fa-angle-right');
        $('#iconAdCNyse-0').addClass('fa-angle-down');
        $('#iconAdCNyse-1').hide();
        $("#ad-c-nyse-trade").hide();
        $("#ad-c-nyse-conjuntura").hide();
        $("#ad-c-nyse-mercados").hide();
        $("#ad-c-nyse-news").hide();
        $("#ad-c-nyse-analises").hide();
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
                if($(document.getElementById("Cotacao-b3-collapse")).hasClass('show')==false){
                    document.getElementById("CotB3N2").click();
                }
                if($(document.getElementById("Cotacao-bc-collapse")).hasClass('show')==false){
                    document.getElementById("CotBcN2").click();
                }
                if($(document.getElementById("c-indices-collapse")).hasClass('show')==false){
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
                if($(document.getElementById("c-nyse-collapse")).hasClass('show')==false){
                    document.getElementById("CotNyseN2").click();
                }
                if($(document.getElementById("c-ctbd-collapse")).hasClass('show')==false){
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
                if($(document.getElementById("Addon-c-b3-collapse")).hasClass('show')==false){
                    document.getElementById("AdCotB3N2").click();
                }
                if($(document.getElementById("ad-c-indices-collapse")).hasClass('show')==false){
                    document.getElementById("AdCotIndN2").click();
                }
                if($(document.getElementById("ad-c-ind-euro-collapse")).hasClass('show')){
                    document.getElementById("AdCindEuroN3").click();
                }
                if($(document.getElementById("ad-c-ind-usa-collapse")).hasClass('show')){
                    document.getElementById("AdCindUSAN3").click();
                }
                if($(document.getElementById("ad-c-nyse-collapse")).hasClass('show')==false){
                    document.getElementById("AdCotNyseN2").click();
                }

            }else{
                if(sel.value == 3){
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


}


$(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
        $('#selectNivel').val("1").change();

/* Inicio do script que trava os header*/
        var offset1 = $('#cont-incluso').offset().top -10;
        var $contincluso = $('#cont-incluso'); // guardar o elemento na memoria para melhorar performance
        $(document).on('scroll', function () {
            if (offset1 <= $(window).scrollTop()) {
                $contincluso.addClass('fixar');
            } else {
                $contincluso.removeClass('fixar');
            }

        });
/*Controla Listbox*/

        
/*
        var offset2 = $('#cont-adc-pago').offset().top -100;
        var $adcpago = $('#cont-adc-pago'); // guardar o elemento na memoria para melhorar performance
        $(document).on('scroll', function () {
            if (offset2 <= $(window).scrollTop()) {
                $adcpago.addClass('fixar');
            } else {
                $adcpago.removeClass('fixar');
            }
});
 Fim do script que trava os header */
    });

