from pymongo import MongoClient
from pprint import pprint



class htmlDerivativos:
    client = MongoClient('mongodb://broadcast:agestado@cluster0-shard-00-00-umdst.mongodb.net:27017,cluster0-shard-00-01-umdst.mongodb.net:27017,cluster0-shard-00-02-umdst.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')
    db = client['db-broadcastprodutos']
    coll = db['coll-derivativos']

    def countKey(self, data):
        i=0
        for a in data:
            i=i+1
        return i

    def htmlTooltipRT(self, data):
        vetPlataforma=[]
        html=''
        result = self.coll.find_one({'cod_pag':data})#.sort("serv_rt.plataforma",1)
        #pprint(result['serv_rt'])
        for y in result['serv_rt']:
            #print('<------serv rt------>')
            pprint(y)
            if self.countKey(y) == 6:
                if y['plataforma'] not in vetPlataforma:
                    vetPlataforma.append(y['plataforma'])
                    htmlPlataforma =  "<b>"+y['plataforma']+"</b><br>"
                    htmlServs = "("+y['codserv']+") - "+y['descserv']+"<br>"+\
                        "Fee Prof: "+y['feeprof']+"  Fee Ñ.Prof: "+y['feenprof']+"<br>"+\
                        "Demonstração: "+y['demo']+"<br>"
                    html = html + htmlPlataforma + htmlServs
                else:
                    htmlServs = "("+y['codserv']+") - "+y['descserv']+"<br>"+\
                        "Fee Prof: "+y['feeprof']+"  Fee Ñ.Prof: "+y['feenprof']+"<br>"+\
                        "Demonstração: "+y['demo']+"<br>"
                    html = html + htmlServs
            else:
                if y['plataforma'] not in vetPlataforma:
                    vetPlataforma.append(y['plataforma'])
                    htmlPlataforma =  "<b>"+y['plataforma']+"</b><br>"
                    htmlServs = "("+y['codserv']+") - "+y['descserv']+"<br>"+\
                        "Fee Prof: "+y['feeprof']+"<br>"+\
                        "Demonstração: "+y['demo']+"<br>"
                    html = html + htmlPlataforma + htmlServs
                else:
                    htmlServs = "("+y['codserv']+") - "+y['descserv']+"<br>"+\
                        "Fee Prof: "+y['feeprof']+"<br>"+\
                        "Demonstração: "+y['demo']+"<br>"
                    html = html + htmlServs
        
        return html

    def htmlTooltipDelay(self, data):
        vetPlataforma=[]
        html=''
        result = self.coll.find_one({'cod_pag':data})#.sort("serv_rt.plataforma",1)
        #pprint(result['serv_rt'])
        for y in result['serv_delay']:
            #print('<------serv rt------>')
            #pprint(y)
            #print(countKey(y))
            if self.countKey(y) == 2:
                htmlServs = y['servs']+"<br>"+y['delay']+"<br>"
                html = html + htmlServs
            if self.countKey(y) == 3:
                if y['plataforma'] not in vetPlataforma:
                    vetPlataforma.append(y['plataforma'])
                    htmlPlataforma =  "<b>"+y['plataforma']+"</b><br>"
                    htmlServs = y['servs']+"<br>"+\
                        y['delay']+"<br>"
                    html = html + htmlPlataforma + htmlServs
                else:
                    htmlServs = y['servs']+"<br>"+\
                        y['delay']+"<br>"
                    html = html + htmlServs
            if self.countKey(y) == 6:
                if y['plataforma'] not in vetPlataforma:
                    vetPlataforma.append(y['plataforma'])
                    htmlPlataforma =  "<b>"+y['plataforma']+"</b><br>"
                    htmlServs = "("+y['codserv']+") - "+y['descserv']+"<br>"+\
                        "Fee Prof: "+y['feeprof']+"<br>"+\
                        "Demonstração: "+y['demo']+"<br>"+\
                        y['delay']+"<br>"
                    html = html + htmlPlataforma + htmlServs
                else:
                    htmlServs = "("+y['codserv']+") - "+y['descserv']+"<br>"+\
                        "Fee Prof: "+y['feeprof']+"<br>"+\
                        "Demonstração: "+y['demo']+"<br>"
                    html = html + htmlServs
        
        return html

    # conta a quantidade de vezes que uma Mercadoria aparece no resultado da busca
    def contM(self, x, data):
        i=0

        for a in data:
            if x == a['mercadoria']:
                i=i+1
        
        return i
    # conta a quantidade de vezes que uma Fonte aparece no resultado da busca
    def contF(self, x, data):
        i=0

        for a in data:
            if x == a['fonte']:
                i=i+1
        
        return i

    # conta a quantidade de vezes que uma Fonte por Mercadoria aparece no resultado da busca
    def contFM(self, x, y, data):
        i=0

        for a in data:
            if x == a['fonte'] and y == a['mercadoria']:
                i=i+1
        
        return i

    # conta a quantidade de vezes de Mercado por Fonte aparece no resultado da busca
    def contMF(self, x, y, data):
        i=0

        for a in data:
            if x == a['fonte'] and y == a['mercadoria']:
                i=i+1
        
        return i

    def isuniqueMercado(self, data):
        merc_unique=[]
        for x in data:
            if x['mercado'] not in merc_unique:
                merc_unique.append(x['mercado'])
        
        if len(merc_unique)==1:
            #print('Mercado unico')
            return True
        else:
            #print('Mercado Varios')
            return False

    def montaHTMLDerivativos(self, data):

        unique_mercadoria=[]
        unique_fonte=[]
        unique_fontmerc=[]
        html=""
        table_ini = "<table style='width:100%'>" 
        table_fim = "</table>"
        cabecalho= "<tr class='head-derivativos'>" + \
                "<th class='text-center'>Mercadoria</th>" + \
                "<th class='text-center'>Fonte</th>" + \
                "<th class='text-center'>Mercado</th>" + \
                "<th class='text-center'>Descrição Papel</th>" +\
                "<th class='text-center'>Cód. Broadcast</th>" +\
                "<th class='text-center'>Cód. Bolsa</th>" +\
            "</tr>"

        row_ini= "<tr>"
        row_fim= "</tr>"

        #x['mercadoria'].count()

        
        for x in data:
            if x['mercadoria'] not in unique_mercadoria:
                unique_mercadoria.append(x['mercadoria'])
                #print('{}:{}'.format(x['mercadoria'],str(contM(x['mercadoria'], data))))
                varMercadoria = "<td class='text-center' rowspan='"+ str(self.contM(x['mercadoria'], data)) +"' class='text-center'>"+x['mercadoria']+"</td>"
                
                if x['fonte']+x['mercadoria'] not in unique_fontmerc:
                    unique_fontmerc.append(x['fonte']+x['mercadoria'] )
                    #print('{}+{}:{}'.format(x['mercadoria'],x['fonte'],str(contFM(x['fonte'],x['mercadoria'], data))))
                    varFonte= "<td class='text-center' rowspan='"+ str(self.contFM(x['fonte'],x['mercadoria'], data))+"' class='text-center'>"+x['fonte']+"<br/><div class='realtime mr-3' data-placement='right' data-toggle='tooltip' data-html='true' title='"+self.htmlTooltipRT(x['cod_pag'])+"'><b>RT</b></div> <i class='far fa-clock' data-placement='right' data-toggle='tooltip' data-html='true' title='"+self.htmlTooltipDelay(x['cod_pag'])+"'></i></td>"
                    varDemais= "<td class='text-center'>"+x['mercado']+"</td>"+\
                    "<td>"+x['desc_papel']+"</td>"+\
                    "<td class='text-center'>"+x['codbroad']+"</td>"+\
                    "<td class='text-center'>"+x['codbolsa']+"</td>"
                    html = html + row_ini + varMercadoria + varFonte + varDemais + row_fim
                else:
                    varDemais= "<td class='text-center'>"+x['mercado']+"</td>"+\
                    "<td>"+x['desc_papel']+"</td>"+\
                    "<td class='text-center'>"+x['codbroad']+"</td>"+\
                    "<td class='text-center'>"+x['codbolsa']+"</td>"
                    html = html + row_ini+ varMercadoria + varDemais + row_fim

            else:
                if x['fonte']+x['mercadoria'] not in unique_fontmerc:
                    #print(unique_fontmerc)
                    unique_fontmerc.append(x['fonte']+x['mercadoria'] )
                    #print('{}+{}:{}'.format(x['mercadoria'],x['fonte'],str(contFM(x['fonte'],x['mercadoria'], data))))
                    varFonte= "<td class='text-center' rowspan='"+ str(self.contFM(x['fonte'],x['mercadoria'], data))+"' class='text-center'>"+x['fonte']+"<br/><div class='realtime mr-3' data-placement='right' data-toggle='tooltip' data-html='true' title='"+self.htmlTooltipRT(x['cod_pag'])+"'><b>RT</b></div> <i class='far fa-clock' data-placement='right' data-toggle='tooltip' data-html='true' title='"+self.htmlTooltipDelay(x['cod_pag'])+"'></i></td>"
                    varDemais= "<td class='text-center'>"+x['mercado']+"</td>"+\
                    "<td>"+x['desc_papel']+"</td>"+\
                    "<td class='text-center'>"+x['codbroad']+"</td>"+\
                    "<td class='text-center'>"+x['codbolsa']+"</td>"
                    html = html + row_ini + varFonte + varDemais + row_fim
                
                else:
                    varDemais= "<td class='text-center'>"+x['mercado']+"</td>"+\
                    "<td>"+x['desc_papel']+"</td>"+\
                    "<td class='text-center'>"+x['codbroad']+"</td>"+\
                    "<td class='text-center'>"+x['codbolsa']+"</td>"

                    html = html + row_ini + varDemais + row_fim

        html = table_ini + cabecalho + html + table_fim

        return html

    def montaHTMLDerivativosTudo(self, data):

        unique_mercadoria=[]
        unique_fonte=[]
        unique_fontmerc=[]
        html=""
        table_ini = "<table style='width:100%'>" 
        table_fim = "</table>"
        cabecalho= "<tr class='head-derivativos'>" + \
                "<th class='text-center'>Mercadoria</th>" + \
                "<th class='text-center'>Fonte</th>" + \
                "<th class='text-center'>Mercado</th>" + \
                "<th class='text-center'>Descrição Papel</th>" +\
                "<th class='text-center'>Cód. Bolsa</th>" +\
                "<th class='text-center'>Cód. Broadcast</th>" +\
            "</tr>"

        row_ini= "<tr>"
        row_fim= "</tr>"

        #x['mercadoria'].count()


        for x in data:
            if x['mercadoria'] not in unique_mercadoria:
                unique_mercadoria.append(x['mercadoria'])
                #print('{}:{}'.format(x['mercadoria'],str(contM(x['mercadoria'], data))))
                varMercadoria = "<td class='text-center' rowspan='"+ str(self.contM(x['mercadoria'], data)) +"' class='text-center'>"+x['mercadoria']+"</td>"
                
                if x['fonte']+x['mercadoria'] not in unique_fontmerc:
                    unique_fontmerc.append(x['fonte']+x['mercadoria'] )
                    #print('{}+{}:{}'.format(x['mercadoria'],x['fonte'],str(contFM(x['fonte'],x['mercadoria'], data))))
                    varFonte= "<td class='text-center' rowspan='"+ str(self.contFM(x['fonte'],x['mercadoria'], data))+"' class='text-center'>"+x['fonte']+"<br/><div class='realtime mr-3' data-placement='right' data-toggle='tooltip' data-html='true' title='"+self.htmlTooltipRT(x['cod_pag'])+"'><b>RT</b></div> <i class='far fa-clock' data-placement='right' data-toggle='tooltip' data-html='true' title='"+self.htmlTooltipDelay(x['cod_pag'])+"'></i></td>"
                    varDemais= "<td class='text-center'>"+x['mercado']+"</td>"+\
                    "<td>"+x['desc_papel']+"</td>"+\
                    "<td class='text-center'>"+x['codbolsa']+"</td>"+\
                    "<td class='text-center'>"+x['codbroad']+"</td>"
                    html = html + row_ini + varMercadoria + varFonte + varDemais + row_fim
                else:
                    varDemais= "<td class='text-center'>"+x['mercado']+"</td>"+\
                    "<td>"+x['desc_papel']+"</td>"+\
                    "<td class='text-center'>"+x['codbolsa']+"</td>"+\
                    "<td class='text-center'>"+x['codbroad']+"</td>"
                    html = html + row_ini+ varMercadoria + varDemais + row_fim

            else:
                if x['fonte']+x['mercadoria'] not in unique_fontmerc:
                    #print(unique_fontmerc)
                    unique_fontmerc.append(x['fonte']+x['mercadoria'] )
                    #print('{}+{}:{}'.format(x['mercadoria'],x['fonte'],str(contFM(x['fonte'],x['mercadoria'], data))))
                    varFonte= "<td class='text-center' rowspan='"+ str(self.contFM(x['fonte'],x['mercadoria'], data))+"' class='text-center'>"+x['fonte']+"<br/><div class='realtime mr-3' data-placement='right' data-toggle='tooltip' data-html='true' title='"+self.htmlTooltipRT(x['cod_pag'])+"'><b>RT</b></div> <i class='far fa-clock' data-placement='right' data-toggle='tooltip' data-html='true' title='"+self.htmlTooltipDelay(x['cod_pag'])+"'></i></td>"
                    varDemais= "<td class='text-center'>"+x['mercado']+"</td>"+\
                    "<td>"+x['desc_papel']+"</td>"+\
                    "<td class='text-center'>"+x['codbolsa']+"</td>"+\
                    "<td class='text-center'>"+x['codbroad']+"</td>"
                    html = html + row_ini + varFonte + varDemais + row_fim
                
                else:
                    varDemais= "<td class='text-center'>"+x['mercado']+"</td>"+\
                    "<td>"+x['desc_papel']+"</td>"+\
                    "<td class='text-center'>"+x['codbolsa']+"</td>"+\
                    "<td class='text-center'>"+x['codbroad']+"</td>"

                    html = html + row_ini + varDemais + row_fim

        html = table_ini + cabecalho + html + table_fim

        return html

#a = montaHTMLDerivativos1(result_ori)

#txt = open('html1.html', 'w')
#txt.write(a)
#txt.close()


