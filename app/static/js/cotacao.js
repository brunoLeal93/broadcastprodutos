$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  //document.getElementById("btn-Filtros").click();
    
});

$('#filtrosModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });

var opc = [
    {'name':'Derivativos > Mercadoria: Açúcar','id':1},
{'name':'Derivativos > Mercadoria: Algodão','id':2},
{'name':'Derivativos > Mercadoria: Arroz','id':3},
{'name':'Derivativos > Mercadoria: Aveia','id':4},
{'name':'Derivativos > Mercadoria: Boi Gordo','id':5},
{'name':'Derivativos > Mercadoria: Cacau','id':6},
{'name':'Derivativos > Mercadoria: Café','id':7},
{'name':'Derivativos > Mercadoria: Carvão','id':8},
{'name':'Derivativos > Mercadoria: CER','id':9},
{'name':'Derivativos > Mercadoria: DI','id':10},
{'name':'Derivativos > Mercadoria: Dólar','id':11},
{'name':'Derivativos > Mercadoria: Etanol','id':12},
{'name':'Derivativos > Mercadoria: FRA','id':13},
{'name':'Derivativos > Mercadoria: Gasóleo','id':14},
{'name':'Derivativos > Mercadoria: Gasolina','id':15},
{'name':'Derivativos > Mercadoria: Heating Oil','id':16},
{'name':'Derivativos > Mercadoria: Índice Dow Jones','id':17},
{'name':'Derivativos > Mercadoria: Índice Ibovespa','id':18},
{'name':'Derivativos > Mercadoria: Milho','id':19},
{'name':'Derivativos > Mercadoria: MSCI','id':20},
{'name':'Derivativos > Mercadoria: Ouro','id':21},
{'name':'Derivativos > Mercadoria: Petróleo','id':22},
{'name':'Derivativos > Mercadoria: Soja','id':23},
{'name':'Derivativos > Mercadoria: Suco de Laranja','id':24},
{'name':'Derivativos > Mercadoria: Trigo','id':25},
{'name':'Derivativos > Fonte: ICE Europe (IPE)','id':26},
{'name':'Derivativos > Fonte: ICE US (NYBOT)','id':27},
{'name':'Derivativos > Fonte: CBOT','id':28},
{'name':'Derivativos > Fonte: BMF','id':29},
{'name':'Derivativos > Mercado: Futuro','id':30},
{'name':'Derivativos > Mercado: Opção','id':31},
{'name':'Derivativos > Mercado: A Vista','id':32},
{'name':'Derivativos > Mercadoria: Açúcar > Fonte: ICE Europe (IPE)','id':33},
{'name':'Derivativos > Mercadoria: Açúcar > Fonte: ICE US (NYBOT)','id':34},
{'name':'Derivativos > Mercadoria: Algodão > Fonte: ICE US (NYBOT)','id':35},
{'name':'Derivativos > Mercadoria: Arroz > Fonte: CBOT','id':36},
{'name':'Derivativos > Mercadoria: Aveia > Fonte: CBOT','id':37},
{'name':'Derivativos > Mercadoria: Boi Gordo > Fonte: BMF','id':38},
{'name':'Derivativos > Mercadoria: Cacau > Fonte: ICE Europe (IPE)','id':39},
{'name':'Derivativos > Mercadoria: Cacau > Fonte: ICE US (NYBOT)','id':40},
{'name':'Derivativos > Mercadoria: Café > Fonte: BMF','id':41},
{'name':'Derivativos > Mercadoria: Café > Fonte: ICE Europe (IPE)','id':42},
{'name':'Derivativos > Mercadoria: Café > Fonte: ICE US (NYBOT)','id':43},
{'name':'Derivativos > Mercadoria: Carvão > Fonte: ICE Europe (IPE)','id':44},
{'name':'Derivativos > Mercadoria: CER > Fonte: ICE Europe (IPE)','id':45},
{'name':'Derivativos > Mercadoria: DI > Fonte: BMF','id':46},
{'name':'Derivativos > Mercadoria: Dólar > Fonte: BMF','id':47},
{'name':'Derivativos > Mercadoria: Dólar > Fonte: ICE US (NYBOT)','id':48},
{'name':'Derivativos > Mercadoria: Etanol > Fonte: BMF','id':49},
{'name':'Derivativos > Mercadoria: Etanol > Fonte: CBOT','id':50},
{'name':'Derivativos > Mercadoria: FRA > Fonte: BMF','id':51},
{'name':'Derivativos > Mercadoria: Gasóleo > Fonte: ICE Europe (IPE)','id':52},
{'name':'Derivativos > Mercadoria: Gasolina > Fonte: ICE Europe (IPE)','id':53},
{'name':'Derivativos > Mercadoria: Heating Oil > Fonte: ICE Europe (IPE)','id':54},
{'name':'Derivativos > Mercadoria: Índice Dow Jones > Fonte: CBOT','id':55},
{'name':'Derivativos > Mercadoria: Índice Ibovespa > Fonte: BMF','id':56},
{'name':'Derivativos > Mercadoria: Milho > Fonte: BMF','id':57},
{'name':'Derivativos > Mercadoria: Milho > Fonte: CBOT','id':58},
{'name':'Derivativos > Mercadoria: MSCI > Fonte: ICE US (NYBOT)','id':59},
{'name':'Derivativos > Mercadoria: Ouro > Fonte: BMF','id':60},
{'name':'Derivativos > Mercadoria: Petróleo > Fonte: BMF','id':61},
{'name':'Derivativos > Mercadoria: Petróleo > Fonte: ICE Europe (IPE)','id':62},
{'name':'Derivativos > Mercadoria: Soja > Fonte: BMF','id':63},
{'name':'Derivativos > Mercadoria: Soja > Fonte: CBOT','id':64},
{'name':'Derivativos > Mercadoria: Suco de Laranja > Fonte: ICE US (NYBOT)','id':65},
{'name':'Derivativos > Mercadoria: Trigo > Fonte: CBOT','id':66},
{'name':'Derivativos > Mercadoria: Trigo > Fonte: ICE Europe (IPE)','id':67},
{'name':'Derivativos > Fonte: ICE Europe (IPE) > Mercado: Futuro','id':68},
{'name':'Derivativos > Fonte: ICE US (NYBOT) > Mercado: Futuro','id':69},
{'name':'Derivativos > Fonte: ICE US (NYBOT) > Mercado: Opção','id':70},
{'name':'Derivativos > Fonte: CBOT > Mercado: Futuro','id':71},
{'name':'Derivativos > Fonte: CBOT > Mercado: Opção','id':72},
{'name':'Derivativos > Fonte: BMF > Mercado: Futuro','id':73},
{'name':'Derivativos > Fonte: BMF > Mercado: Opção','id':74},
{'name':'Derivativos > Fonte: ICE Europe (IPE) > Mercado: Opção','id':75},
{'name':'Derivativos > Fonte: BMF > Mercado: A Vista','id':76},
{'name':'Derivativos > Mercadoria: Açúcar > Mercado: Futuro','id':77},
{'name':'Derivativos > Mercadoria: Açúcar > Mercado: Opção','id':78},
{'name':'Derivativos > Mercadoria: Algodão > Mercado: Futuro','id':79},
{'name':'Derivativos > Mercadoria: Algodão > Mercado: Opção','id':80},
{'name':'Derivativos > Mercadoria: Arroz > Mercado: Futuro','id':81},
{'name':'Derivativos > Mercadoria: Arroz > Mercado: Opção','id':82},
{'name':'Derivativos > Mercadoria: Aveia > Mercado: Futuro','id':83},
{'name':'Derivativos > Mercadoria: Aveia > Mercado: Opção','id':84},
{'name':'Derivativos > Mercadoria: Boi Gordo > Mercado: Futuro','id':85},
{'name':'Derivativos > Mercadoria: Boi Gordo > Mercado: Opção','id':86},
{'name':'Derivativos > Mercadoria: Cacau > Mercado: Futuro','id':87},
{'name':'Derivativos > Mercadoria: Cacau > Mercado: Opção','id':88},
{'name':'Derivativos > Mercadoria: Café > Mercado: Futuro','id':89},
{'name':'Derivativos > Mercadoria: Café > Mercado: Opção','id':90},
{'name':'Derivativos > Mercadoria: Carvão > Mercado: Futuro','id':91},
{'name':'Derivativos > Mercadoria: CER > Mercado: Futuro','id':92},
{'name':'Derivativos > Mercadoria: DI > Mercado: Futuro','id':93},
{'name':'Derivativos > Mercadoria: Dólar > Mercado: Futuro','id':94},
{'name':'Derivativos > Mercadoria: Dólar > Mercado: Opção','id':95},
{'name':'Derivativos > Mercadoria: Etanol > Mercado: Futuro','id':96},
{'name':'Derivativos > Mercadoria: Etanol > Mercado: Opção','id':97},
{'name':'Derivativos > Mercadoria: FRA > Mercado: Futuro','id':98},
{'name':'Derivativos > Mercadoria: Gasóleo > Mercado: Futuro','id':99},
{'name':'Derivativos > Mercadoria: Gasolina > Mercado: Futuro','id':100},
{'name':'Derivativos > Mercadoria: Heating Oil > Mercado: Futuro','id':101},
{'name':'Derivativos > Mercadoria: Índice Dow Jones > Mercado: Futuro','id':102},
{'name':'Derivativos > Mercadoria: Índice Ibovespa > Mercado: Futuro','id':103},
{'name':'Derivativos > Mercadoria: Milho > Mercado: Futuro','id':104},
{'name':'Derivativos > Mercadoria: Milho > Mercado: Opção','id':105},
{'name':'Derivativos > Mercadoria: MSCI > Mercado: Futuro','id':106},
{'name':'Derivativos > Mercadoria: Ouro > Mercado: A Vista','id':107},
{'name':'Derivativos > Mercadoria: Petróleo > Mercado: Futuro','id':108},
{'name':'Derivativos > Mercadoria: Soja > Mercado: Futuro','id':109},
{'name':'Derivativos > Mercadoria: Soja > Mercado: Opção','id':110},
{'name':'Derivativos > Mercadoria: Suco de Laranja > Mercado: Futuro','id':111},
{'name':'Derivativos > Mercadoria: Suco de Laranja > Mercado: Opção','id':112},
{'name':'Derivativos > Mercadoria: Trigo > Mercado: Futuro','id':113},
{'name':'Derivativos > Mercadoria: Trigo > Mercado: Opção','id':114},
{'name':'Derivativos > Mercadoria: Açúcar > Fonte: ICE Europe (IPE) > Mercado: Futuro','id':115},
{'name':'Derivativos > Mercadoria: Açúcar > Fonte: ICE US (NYBOT) > Mercado: Futuro','id':116},
{'name':'Derivativos > Mercadoria: Açúcar > Fonte: ICE US (NYBOT) > Mercado: Opção','id':117},
{'name':'Derivativos > Mercadoria: Algodão > Fonte: ICE US (NYBOT) > Mercado: Futuro','id':118},
{'name':'Derivativos > Mercadoria: Algodão > Fonte: ICE US (NYBOT) > Mercado: Opção','id':119},
{'name':'Derivativos > Mercadoria: Arroz > Fonte: CBOT > Mercado: Futuro','id':120},
{'name':'Derivativos > Mercadoria: Arroz > Fonte: CBOT > Mercado: Opção','id':121},
{'name':'Derivativos > Mercadoria: Aveia > Fonte: CBOT > Mercado: Futuro','id':122},
{'name':'Derivativos > Mercadoria: Aveia > Fonte: CBOT > Mercado: Opção','id':123},
{'name':'Derivativos > Mercadoria: Boi Gordo > Fonte: BMF > Mercado: Futuro','id':124},
{'name':'Derivativos > Mercadoria: Boi Gordo > Fonte: BMF > Mercado: Opção','id':125},
{'name':'Derivativos > Mercadoria: Cacau > Fonte: ICE Europe (IPE) > Mercado: Futuro','id':126},
{'name':'Derivativos > Mercadoria: Cacau > Fonte: ICE Europe (IPE) > Mercado: Opção','id':127},
{'name':'Derivativos > Mercadoria: Cacau > Fonte: ICE US (NYBOT) > Mercado: Futuro','id':128},
{'name':'Derivativos > Mercadoria: Café > Fonte: BMF > Mercado: Futuro','id':129},
{'name':'Derivativos > Mercadoria: Café > Fonte: BMF > Mercado: Opção','id':130},
{'name':'Derivativos > Mercadoria: Café > Fonte: ICE Europe (IPE) > Mercado: Futuro','id':131},
{'name':'Derivativos > Mercadoria: Café > Fonte: ICE Europe (IPE) > Mercado: Opção','id':132},
{'name':'Derivativos > Mercadoria: Café > Fonte: ICE US (NYBOT) > Mercado: Futuro','id':133},
{'name':'Derivativos > Mercadoria: Café > Fonte: ICE US (NYBOT) > Mercado: Opção','id':134},
{'name':'Derivativos > Mercadoria: Carvão > Fonte: ICE Europe (IPE) > Mercado: Futuro','id':135},
{'name':'Derivativos > Mercadoria: CER > Fonte: ICE Europe (IPE) > Mercado: Futuro','id':136},
{'name':'Derivativos > Mercadoria: DI > Fonte: BMF > Mercado: Futuro','id':137},
{'name':'Derivativos > Mercadoria: Dólar > Fonte: BMF > Mercado: Futuro','id':138},
{'name':'Derivativos > Mercadoria: Dólar > Fonte: BMF > Mercado: Opção','id':139},
{'name':'Derivativos > Mercadoria: Dólar > Fonte: ICE US (NYBOT) > Mercado: Futuro','id':140},
{'name':'Derivativos > Mercadoria: Etanol > Fonte: BMF > Mercado: Futuro','id':141},
{'name':'Derivativos > Mercadoria: Etanol > Fonte: BMF > Mercado: Opção','id':142},
{'name':'Derivativos > Mercadoria: Etanol > Fonte: CBOT > Mercado: Futuro','id':143},
{'name':'Derivativos > Mercadoria: FRA > Fonte: BMF > Mercado: Futuro','id':144},
{'name':'Derivativos > Mercadoria: Gasóleo > Fonte: ICE Europe (IPE) > Mercado: Futuro','id':145},
{'name':'Derivativos > Mercadoria: Gasolina > Fonte: ICE Europe (IPE) > Mercado: Futuro','id':146},
{'name':'Derivativos > Mercadoria: Heating Oil > Fonte: ICE Europe (IPE) > Mercado: Futuro','id':147},
{'name':'Derivativos > Mercadoria: Índice Dow Jones > Fonte: CBOT > Mercado: Futuro','id':148},
{'name':'Derivativos > Mercadoria: Índice Ibovespa > Fonte: BMF > Mercado: Futuro','id':149},
{'name':'Derivativos > Mercadoria: Milho > Fonte: BMF > Mercado: Futuro','id':150},
{'name':'Derivativos > Mercadoria: Milho > Fonte: BMF > Mercado: Opção','id':151},
{'name':'Derivativos > Mercadoria: Milho > Fonte: CBOT > Mercado: Futuro','id':152},
{'name':'Derivativos > Mercadoria: Milho > Fonte: CBOT > Mercado: Opção','id':153},
{'name':'Derivativos > Mercadoria: MSCI > Fonte: ICE US (NYBOT) > Mercado: Futuro','id':154},
{'name':'Derivativos > Mercadoria: Ouro > Fonte: BMF > Mercado: A Vista','id':155},
{'name':'Derivativos > Mercadoria: Petróleo > Fonte: BMF > Mercado: Futuro','id':156},
{'name':'Derivativos > Mercadoria: Petróleo > Fonte: ICE Europe (IPE) > Mercado: Futuro','id':157},
{'name':'Derivativos > Mercadoria: Soja > Fonte: BMF > Mercado: Futuro','id':158},
{'name':'Derivativos > Mercadoria: Soja > Fonte: CBOT > Mercado: Futuro','id':159},
{'name':'Derivativos > Mercadoria: Soja > Fonte: CBOT > Mercado: Opção','id':160},
{'name':'Derivativos > Mercadoria: Suco de Laranja > Fonte: ICE US (NYBOT) > Mercado: Futuro','id':161},
{'name':'Derivativos > Mercadoria: Suco de Laranja > Fonte: ICE US (NYBOT) > Mercado: Opção','id':162},
{'name':'Derivativos > Mercadoria: Trigo > Fonte: CBOT > Mercado: Futuro','id':163},
{'name':'Derivativos > Mercadoria: Trigo > Fonte: CBOT > Mercado: Opção','id':164},
{'name':'Derivativos > Mercadoria: Trigo > Fonte: ICE Europe (IPE) > Mercado: Futuro','id':165},
{'name':'Derivativos > TUDO','id':166}
    
];

//$('#contentSearch').mdbAutocomplete({
//data: opc
//});

//json-genarator.com for mock data
//$.get("https://next.json-generator.com/api/json/get/V1cGoKmDV", function(data){
//    console.log(data);
    // use a data source with 'id' and 'name' keys

//},'json');
/*

//https://github.com/bassjobsen/Bootstrap-3-Typeahead
!function(root,factory){"use strict";"undefined"!=typeof module&&module.exports?module.exports=factory(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],function($){return factory($)}):factory(root.jQuery)}(this,function($){"use strict";var Typeahead=function(element,options){this.$element=$(element),this.options=$.extend({},Typeahead.defaults,options),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.select=this.options.select||this.select,this.autoSelect="boolean"!=typeof this.options.autoSelect||this.options.autoSelect,this.highlighter=this.options.highlighter||this.highlighter,this.render=this.options.render||this.render,this.updater=this.options.updater||this.updater,this.displayText=this.options.displayText||this.displayText,this.itemLink=this.options.itemLink||this.itemLink,this.itemTitle=this.options.itemTitle||this.itemTitle,this.followLinkOnSelect=this.options.followLinkOnSelect||this.followLinkOnSelect,this.source=this.options.source,this.delay=this.options.delay,this.theme=this.options.theme&&this.options.themes&&this.options.themes[this.options.theme]||Typeahead.defaults.themes[Typeahead.defaults.theme],this.$menu=$(this.options.menu||this.theme.menu),this.$appendTo=this.options.appendTo?$(this.options.appendTo):null,this.fitToElement="boolean"==typeof this.options.fitToElement&&this.options.fitToElement,this.shown=!1,this.listen(),this.showHintOnFocus=("boolean"==typeof this.options.showHintOnFocus||"all"===this.options.showHintOnFocus)&&this.options.showHintOnFocus,this.afterSelect=this.options.afterSelect,this.afterEmptySelect=this.options.afterEmptySelect,this.addItem=!1,this.value=this.$element.val()||this.$element.text(),this.keyPressed=!1,this.focused=this.$element.is(":focus")};Typeahead.prototype={constructor:Typeahead,setDefault:function(val){if(this.$element.data("active",val),this.autoSelect||val){var newVal=this.updater(val);newVal||(newVal=""),this.$element.val(this.displayText(newVal)||newVal).text(this.displayText(newVal)||newVal).change(),this.afterSelect(newVal)}return this.hide()},select:function(){var val=this.$menu.find(".active").data("value");if(this.$element.data("active",val),this.autoSelect||val){var newVal=this.updater(val);newVal||(newVal=""),this.$element.val(this.displayText(newVal)||newVal).text(this.displayText(newVal)||newVal).change(),this.afterSelect(newVal),this.followLinkOnSelect&&this.itemLink(val)?(document.location=this.itemLink(val),this.afterSelect(newVal)):this.followLinkOnSelect&&!this.itemLink(val)?this.afterEmptySelect(newVal):this.afterSelect(newVal)}else this.afterEmptySelect(newVal);return this.hide()},updater:function(item){return item},setSource:function(source){this.source=source},show:function(){var element,pos=$.extend({},this.$element.position(),{height:this.$element[0].offsetHeight}),scrollHeight="function"==typeof this.options.scrollHeight?this.options.scrollHeight.call():this.options.scrollHeight;if(this.shown?element=this.$menu:this.$appendTo?(element=this.$menu.appendTo(this.$appendTo),this.hasSameParent=this.$appendTo.is(this.$element.parent())):(element=this.$menu.insertAfter(this.$element),this.hasSameParent=!0),!this.hasSameParent){element.css("position","fixed");var offset=this.$element.offset();pos.top=offset.top,pos.left=offset.left}var newTop=$(element).parent().hasClass("dropup")?"auto":pos.top+pos.height+scrollHeight,newLeft=$(element).hasClass("dropdown-menu-right")?"auto":pos.left;return element.css({top:newTop,left:newLeft}).show(),!0===this.options.fitToElement&&element.css("width",this.$element.outerWidth()+"px"),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(query){if(this.query=void 0!==query&&null!==query?query:this.$element.val(),this.query.length<this.options.minLength&&!this.options.showHintOnFocus)return this.shown?this.hide():this;var worker=$.proxy(function(){$.isFunction(this.source)&&3===this.source.length?this.source(this.query,$.proxy(this.process,this),$.proxy(this.process,this)):$.isFunction(this.source)?this.source(this.query,$.proxy(this.process,this)):this.source&&this.process(this.source)},this);clearTimeout(this.lookupWorker),this.lookupWorker=setTimeout(worker,this.delay)},process:function(items){var that=this;return items=$.grep(items,function(item){return that.matcher(item)}),(items=this.sorter(items)).length||this.options.addItem?(items.length>0?this.$element.data("active",items[0]):this.$element.data("active",null),"all"!=this.options.items&&(items=items.slice(0,this.options.items)),this.options.addItem&&items.push(this.options.addItem),this.render(items).show()):this.shown?this.hide():this},matcher:function(item){return~this.displayText(item).toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(items){for(var item,beginswith=[],caseSensitive=[],caseInsensitive=[];item=items.shift();){var it=this.displayText(item);it.toLowerCase().indexOf(this.query.toLowerCase())?~it.indexOf(this.query)?caseSensitive.push(item):caseInsensitive.push(item):beginswith.push(item)}return beginswith.concat(caseSensitive,caseInsensitive)},highlighter:function(item){var text=this.query;if(""===text)return item;var i,matches=item.match(/(>)([^<]*)(<)/g),first=[],second=[];if(matches&&matches.length)for(i=0;i<matches.length;++i)matches[i].length>2&&first.push(matches[i]);else(first=[]).push(item);text=text.replace(/[\(\)\/\.\*\+\?\[\]]/g,function(mat){return"\\"+mat});var m,reg=new RegExp(text,"g");for(i=0;i<first.length;++i)(m=first[i].match(reg))&&m.length>0&&second.push(first[i]);for(i=0;i<second.length;++i)item=item.replace(second[i],second[i].replace(reg,"<strong>$&</strong>"));return item},render:function(items){var that=this,self=this,activeFound=!1,data=[],_category=that.options.separator;return $.each(items,function(key,value){key>0&&value[_category]!==items[key-1][_category]&&data.push({__type:"divider"}),!value[_category]||0!==key&&value[_category]===items[key-1][_category]||data.push({__type:"category",name:value[_category]}),data.push(value)}),items=$(data).map(function(i,item){if("category"==(item.__type||!1))return $(that.options.headerHtml||that.theme.headerHtml).text(item.name)[0];if("divider"==(item.__type||!1))return $(that.options.headerDivider||that.theme.headerDivider)[0];var text=self.displayText(item);return(i=$(that.options.item||that.theme.item).data("value",item)).find(that.options.itemContentSelector||that.theme.itemContentSelector).addBack(that.options.itemContentSelector||that.theme.itemContentSelector).html(that.highlighter(text,item)),this.followLinkOnSelect&&i.find("a").attr("href",self.itemLink(item)),i.find("a").attr("title",self.itemTitle(item)),text==self.$element.val()&&(i.addClass("active"),self.$element.data("active",item),activeFound=!0),i[0]}),this.autoSelect&&!activeFound&&(items.filter(":not(.dropdown-header)").first().addClass("active"),this.$element.data("active",items.first().data("value"))),this.$menu.html(items),this},displayText:function(item){return void 0!==item&&void 0!==item.name?item.name:item},itemLink:function(item){return null},itemTitle:function(item){return null},next:function(event){var next=this.$menu.find(".active").removeClass("active").next();next.length||(next=$(this.$menu.find($(this.options.item||this.theme.item).prop("tagName"))[0])),next.addClass("active");var newVal=this.updater(next.data("value"));this.$element.val(this.displayText(newVal)||newVal)},prev:function(event){var prev=this.$menu.find(".active").removeClass("active").prev();prev.length||(prev=this.$menu.find($(this.options.item||this.theme.item).prop("tagName")).last()),prev.addClass("active");var newVal=this.updater(prev.data("value"));this.$element.val(this.displayText(newVal)||newVal)},listen:function(){this.$element.on("focus.bootstrap3Typeahead",$.proxy(this.focus,this)).on("blur.bootstrap3Typeahead",$.proxy(this.blur,this)).on("keypress.bootstrap3Typeahead",$.proxy(this.keypress,this)).on("propertychange.bootstrap3Typeahead input.bootstrap3Typeahead",$.proxy(this.input,this)).on("keyup.bootstrap3Typeahead",$.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown.bootstrap3Typeahead",$.proxy(this.keydown,this));var itemTagName=$(this.options.item||this.theme.item).prop("tagName");"ontouchstart"in document.documentElement?this.$menu.on("touchstart",itemTagName,$.proxy(this.touchstart,this)).on("touchend",itemTagName,$.proxy(this.click,this)):this.$menu.on("click",$.proxy(this.click,this)).on("mouseenter",itemTagName,$.proxy(this.mouseenter,this)).on("mouseleave",itemTagName,$.proxy(this.mouseleave,this)).on("mousedown",$.proxy(this.mousedown,this))},destroy:function(){this.$element.data("typeahead",null),this.$element.data("active",null),this.$element.unbind("focus.bootstrap3Typeahead").unbind("blur.bootstrap3Typeahead").unbind("keypress.bootstrap3Typeahead").unbind("propertychange.bootstrap3Typeahead input.bootstrap3Typeahead").unbind("keyup.bootstrap3Typeahead"),this.eventSupported("keydown")&&this.$element.unbind("keydown.bootstrap3-typeahead"),this.$menu.remove(),this.destroyed=!0},eventSupported:function(eventName){var isSupported=eventName in this.$element;return isSupported||(this.$element.setAttribute(eventName,"return;"),isSupported="function"==typeof this.$element[eventName]),isSupported},move:function(e){if(this.shown)switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:if(e.shiftKey)return;e.preventDefault(),this.prev();break;case 40:if(e.shiftKey)return;e.preventDefault(),this.next()}},keydown:function(e){17!==e.keyCode&&(this.keyPressed=!0,this.suppressKeyPressRepeat=~$.inArray(e.keyCode,[40,38,9,13,27]),this.shown||40!=e.keyCode?this.move(e):this.lookup())},keypress:function(e){this.suppressKeyPressRepeat||this.move(e)},input:function(e){var currentValue=this.$element.val()||this.$element.text();this.value!==currentValue&&(this.value=currentValue,this.lookup())},keyup:function(e){if(!this.destroyed)switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:if(!this.shown||this.showHintOnFocus&&!this.keyPressed)return;this.select();break;case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide()}},focus:function(e){this.focused||(this.focused=!0,this.keyPressed=!1,this.options.showHintOnFocus&&!0!==this.skipShowHintOnFocus&&("all"===this.options.showHintOnFocus?this.lookup(""):this.lookup())),this.skipShowHintOnFocus&&(this.skipShowHintOnFocus=!1)},blur:function(e){this.mousedover||this.mouseddown||!this.shown?this.mouseddown&&(this.skipShowHintOnFocus=!0,this.$element.focus(),this.mouseddown=!1):(this.select(),this.hide(),this.focused=!1,this.keyPressed=!1)},click:function(e){e.preventDefault(),this.skipShowHintOnFocus=!0,this.select(),this.$element.focus(),this.hide()},mouseenter:function(e){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),$(e.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()},mousedown:function(e){this.mouseddown=!0,this.$menu.one("mouseup",function(e){this.mouseddown=!1}.bind(this))},touchstart:function(e){e.preventDefault(),this.$menu.find(".active").removeClass("active"),$(e.currentTarget).addClass("active")},touchend:function(e){e.preventDefault(),this.select(),this.$element.focus()}};var old=$.fn.typeahead;$.fn.typeahead=function(option){var arg=arguments;return"string"==typeof option&&"getActive"==option?this.data("active"):this.each(function(){var $this=$(this),data=$this.data("typeahead"),options="object"==typeof option&&option;data||$this.data("typeahead",data=new Typeahead(this,options)),"string"==typeof option&&data[option]&&(arg.length>1?data[option].apply(data,Array.prototype.slice.call(arg,1)):data[option]())})},Typeahead.defaults={source:[],items:8,minLength:1,scrollHeight:0,autoSelect:!0,afterSelect:$.noop,afterEmptySelect:$.noop,addItem:!1,followLinkOnSelect:!1,delay:0,separator:"category",theme:"bootstrap3",themes:{bootstrap3:{menu:'<ul class="typeahead dropdown-menu" role="listbox"></ul>',item:'<li><a class="dropdown-item" href="#" role="option"></a></li>',itemContentSelector:"a",headerHtml:'<li class="dropdown-header"></li>',headerDivider:'<li class="divider" role="separator"></li>'},bootstrap4:{menu:'<div class="typeahead dropdown-menu" role="listbox"></div>',item:'<button class="dropdown-item" role="option"></button>',itemContentSelector:".dropdown-item",headerHtml:'<h6 class="dropdown-header"></h6>',headerDivider:'<div class="dropdown-divider"></div>'}}},$.fn.typeahead.Constructor=Typeahead,$.fn.typeahead.noConflict=function(){return $.fn.typeahead=old,this},$(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(e){var $this=$(this);$this.data("typeahead")||$this.typeahead($this.data())})});


$("#contentSearch").typeahead({ source:opc });*/