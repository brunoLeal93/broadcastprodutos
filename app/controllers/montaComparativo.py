
class comparativo():

    def checkuncheck(self,x):
        if x == "S":
            return "<i class='fas fa-check'></i>"
        if x == "N":
            return "<i class='fas fa-times'></i>"
        if x == "A":
            return "<i class='fas fa-plus'></i>"


    def colPacotes(self,Pacotes):
        cols = ""
        for i in Pacotes:
            cols = cols + "<div class='col'  id="+i['idIconPac']+"-"+i+">"+self.checkuncheck()+"</div>
        return cols




    mold_n1 = "<div class='container-fluid'>\
                <div class='row align-items-center destacar'>\
                    <div class='col-4'><i id='iconN' class='fas fa-angle-right'></i>&nbsp;<a id='"+NoticiaN1+"' onclick='"+iconNoticia()+"' class='text-decoration-none' data-toggle='collapse' href='#"+Noticias-collapse+"'><b>"+Notícias+"</b></a></div>\
                    "+self.colPacotes(pacotes)+"\
                </div>\
            </div>\
            <div class='collapse' id='"+Noticias-collapse+"'>"+content_n1+"</div>"

    mold_n2_cTooltip = "<div class='row align-items-center destacar'>\
                <div class='col-4  n2'><span data-placement='right' data-toggle='tooltip' data-html='true title='"+tooltip_n2+"'>"+n2+"</span></div>\
                "+self.colPacotes(pacotes)+"\
            </div>"
    
    mold_n2_sTooltip = "<div class='row align-items-center destacar'>\
                <div class='col-4  n2'>"+n2+"</div>\
                "+self.colPacotes(pacotes)+"\
            </div>"
    
    mold_n2_collapse = "<div class='row align-items-center destacar'>\
                            <div class='col-4 n2'><i id='iconN' class='fas fa-angle-right'></i>&nbsp;<a id='"+NoticiaN1+"' onclick='"+iconNoticia()+"' class='text-decoration-none' data-toggle='collapse' href='#"+Noticias-collapse+"'><b>"+Notícias+"</b></a></div>\
                            "+self.colPacotes(pacotes)+"\
                        </div>\
                    <div class='collapse' id='"+Noticias-collapse+"'>"+content_n1+"</div>"