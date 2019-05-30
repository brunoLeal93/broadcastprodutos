def format_result(data):

    unique_mercadoria=[]
    unique_fonte=[]
    doc = {}
    vet_fonte= []
    fonte ={}
    vet_papel= []
    papel={}
    vet_doc=[]
    print(len(data))
    i = 0  #usado apenas para printar a volta do loop
    for x in data:
        print('\nLoop {} \n'.format(i))

        if x['mercadoria'] not in unique_mercadoria:
            
            if not unique_mercadoria:
                unique_mercadoria.append(x['mercadoria'])
                #qtd_mercadoria = unique_mercadoria.count()
                
                doc.update({'mercadoria': x['mercadoria']})
                #print('doc: {}'.format(doc))
                
                # O If e Else abaixo serve para garantir que a inserção da desc_fonte seja feita apenas 1 vez por fonte
                if x['fonte'] not in unique_fonte:  
                    
                    # O If e Else abaixo serve para identificar se na lista de fontes, já tem algo listado ou não
                    # Se não tiver, o cód atribui valores as chaves desc_fonte , mercado, desc_papel, codbolsa e codbroad
                    # Se tiver, irá compilar a última fonte listada e limpar as chaves para a proxima fonte
                    
                    if not unique_fonte:

                        unique_fonte.append(x['fonte'])
                        #qtd_fonte = unique_fonte.count()
                        fonte.update({'desc_fonte':x['fonte']})
                        #print('fonte: {}'.format(fonte))

                        papel.update({'mercado':x['mercado']})
                        papel.update({'desc_papel':x['desc_papel']})
                        papel.update({'codbolsa':x['codbolsa']})
                        papel.update({'codbroad':x['codbroad']})
                    
                    else:
                        #compila fonte
                        fonte.update({'papel':vet_papel})
                        vet_fonte.append(fonte)

                        # limpa variaves para uso da proxíma nova fonte
                        papel={}
                        fonte={}
                        vet_papel=[]

                        # inicia a inclusão
                        unique_fonte.append(x['fonte'])
                        fonte.update({'desc_fonte':x['fonte']})
                        papel.update({'mercado':x['mercado']})
                        papel.update({'desc_papel':x['desc_papel']})
                        papel.update({'codbolsa':x['codbolsa']})
                        papel.update({'codbroad':x['codbroad']})
                else:

                    papel.update({'mercado':x['mercado']})
                    papel.update({'desc_papel':x['desc_papel']})
                    papel.update({'codbolsa':x['codbolsa']})
                    papel.update({'codbroad':x['codbroad']})

                vet_papel.append(papel)
                
                #fonte.update({'papel':vet_papel})
            else:
                doc.update({'fonte':vet_fonte})
                vet_doc.append(doc)
                doc={}
                #unique_mercadoria=[]
                unique_fonte=[]
                vet_fonte= []
                fonte ={}
                vet_papel= []
                papel={}

                unique_mercadoria.append(x['mercadoria'])
                doc.update({'mercadoria':x['mercadoria']})
                

                if x['fonte'] not in unique_fonte:  
                    
                    # O If e Else abaixo serve para identificar se na lista de fontes, já tem algo listado ou não
                    # Se não tiver, o cód atribui valores as chaves desc_fonte , mercado, desc_papel, codbolsa e codbroad
                    # Se tiver, irá compilar a última fonte listada e limpar as chaves para a proxima fonte
                    
                    if not unique_fonte:

                        unique_fonte.append(x['fonte'])
                        #qtd_fonte = unique_fonte.count()
                        fonte.update({'desc_fonte':x['fonte']})
                        #print('fonte: {}'.format(fonte))

                        papel.update({'mercado':x['mercado']})
                        papel.update({'desc_papel':x['desc_papel']})
                        papel.update({'codbolsa':x['codbolsa']})
                        papel.update({'codbroad':x['codbroad']})
                    
                    else:
                        #compila fonte
                        fonte.update({'papel':vet_papel})
                        vet_fonte.append(fonte)

                        # limpa variaves para uso da proxíma nova fonte
                        papel={}
                        fonte={}
                        vet_papel=[]

                        # inicia a inclusão
                        unique_fonte.append(x['fonte'])
                        fonte.update({'desc_fonte':x['fonte']})
                        papel.update({'mercado':x['mercado']})
                        papel.update({'desc_papel':x['desc_papel']})
                        papel.update({'codbolsa':x['codbolsa']})
                        papel.update({'codbroad':x['codbroad']})
                else:

                    papel.update({'mercado':x['mercado']})
                    papel.update({'desc_papel':x['desc_papel']})
                    papel.update({'codbolsa':x['codbolsa']})
                    papel.update({'codbroad':x['codbroad']})

                vet_papel.append(papel)
                
                
        else:
            # O If e Else abaixo serve para garantir que a inserção da desc_fonte seja feita apenas 1 vez por fonte
            if x['fonte'] not in unique_fonte:  
                
                # O If e Else abaixo serve para identificar se na lista de fontes, já tem algo listado ou não
                # Se não tiver, o cód atribui valores as chaves desc_fonte , mercado, desc_papel, codbolsa e codbroad
                # Se tiver, irá compilar a última fonte listada e limpar as chaves para a proxima fonte
                
                if not unique_fonte:

                    unique_fonte.append(x['fonte'])
                    #qtd_fonte = unique_fonte.count()
                    fonte.update({'desc_fonte':x['fonte']})
                    print('fonte: {}'.format(fonte))

                    papel.update({'mercado':x['mercado']})
                    papel.update({'desc_papel':x['desc_papel']})
                    papel.update({'codbolsa':x['codbolsa']})
                    papel.update({'codbroad':x['codbroad']})
                
                else:
                    #compila fonte
                    fonte.update({'papel':vet_papel})
                    vet_fonte.append(fonte)

                    # limpa variaves para uso da proxíma nova fonte
                    papel={}
                    fonte={}
                    vet_papel=[]

                    # inicia a inclusão
                    unique_fonte.append(x['fonte'])
                    fonte.update({'desc_fonte':x['fonte']})
                    papel.update({'mercado':x['mercado']})
                    papel.update({'desc_papel':x['desc_papel']})
                    papel.update({'codbolsa':x['codbolsa']})
                    papel.update({'codbroad':x['codbroad']})

                    print('\nlista de fontes: {}\n'.format(unique_fonte))

            else:
                papel.update({'mercado':x['mercado']})
                papel.update({'desc_papel':x['desc_papel']})
                papel.update({'codbolsa':x['codbolsa']})
                papel.update({'codbroad':x['codbroad']})

            vet_papel.append(papel)
        
        ## Idenficando o ultimo registro para fechar o doc
        if i == len(data)-1:
            print('\n**ENTROU NO IF PARA FINALIZAR**\n')
            fonte.update({'papel':vet_papel})
            vet_fonte.append(fonte)
            doc.update({'fonte':vet_fonte})
            vet_doc.append(doc)

        i = i +1

    return vet_doc

result_ori = [
    {    "mercadoria": "Café",    "fonte":"BMF",    "mercado":"Futuro",    "desc_papel":"Café Arábica Rolagem",    "codbolsa":"CR1",    "codbroad":"CR1" },
    {    "mercadoria": "Café",    "fonte":"BMF",    "mercado":"Futuro",    "desc_papel":"Café Arábica Tipo 4/5",    "codbolsa":"ICF",    "codbroad":"ICF" },
    {    "mercadoria": "Café",    "fonte":"BMF",    "mercado":"Opção",    "desc_papel":"Café Arábica Tipo 4/5",    "codbolsa":"ICF",    "codbroad":"ICF" },
    {    "mercadoria": "Café",    "fonte":"BMF",    "mercado":"Futuro",    "desc_papel":"Café Arábica Tipo 4/5",    "codbolsa":"ICF",    "codbroad":"ICF" },
    {    "mercadoria": "Café",    "fonte":"ICE Europe (IPE)",    "mercado":"Futuro",    "desc_papel":"Café Robusta",    "codbolsa":"RC",    "codbroad":"RCC" },
    {    "mercadoria": "Café",    "fonte":"ICE Europe (IPE)",    "mercado":"Opção",    "desc_papel":"Café Robusta",    "codbolsa":"RC",    "codbroad":"RRC" },
    {    "mercadoria": "Café",    "fonte":"ICE US (NYBOT)",    "mercado":"Futuro",    "desc_papel":"Café Arábica",    "codbolsa":"KC",    "codbroad":"CFN" },
    {    "mercadoria": "Café",    "fonte":"ICE US (NYBOT)",    "mercado":"Opção",    "desc_papel":"Café Arábica",    "codbolsa":"KC",    "codbroad":"CF" },
    {    "mercadoria": "Café",    "fonte":"ICE US (NYBOT)",    "mercado":"Opção",    "desc_papel":"Café Arábica",    "codbolsa":"KCW",    "codbroad":"KCW" },
    {    "mercadoria": "Soja",    "fonte":"teste",    "mercado":"Opção",    "desc_papel":"Café Arábica",    "codbolsa":"KCW",    "codbroad":"KCW" },
    {    "mercadoria": "Soja",    "fonte":"ICE US (NYBOT)",    "mercado":"teste",    "desc_papel":"Café Arábica",    "codbolsa":"KCW",    "codbroad":"KCW" },
    {    "mercadoria": "Soja",    "fonte":"teste",    "mercado":"Opção",    "desc_papel":"Café Arábica",    "codbolsa":"KCW",    "codbroad":"KCW" },

]
'''
"Derivativos > Mercadoria: Café"
"Derivativos > Mercadoria: Café > Fonte: BMF"
"Derivativos > Mercadoria: Café > Fonte: BMF > Mercado: Futuro"
"Derivativos > Fonte: BMF"
"Derivativos > Fonte: BMF > Mercado: Futuro"
"Derivativos > Mercado: Futuro"
"Derivativos > Mercadoria: Café > Mercado: Futuro"

'''

termo= "Derivativos > Mercadoria: Café > Fonte: BMF > Mercado: Futuro" 

def searchDerivativos(data):

    #lb = ['Derivativos', 'Mercadoria:', 'Fonte', 'Mercado']
    lb = ['Mercadoria:', 'Fonte:', 'Mercado:']
    a = data.split(' ')

    #print(a)
    #print(a.index(lb[0]))
    #print(a[a.index(lb[0])+1])

    if lb[0] in a:

        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]}}

        if lb[1] in a:

            mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1]}}

            if lb[2] in a:

                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]}}
                
    elif lb[1] in a:

        mt = { "$match" : {"fonte": a[a.index(lb[1])+1]}}
    

        if lb[1] in a and lb[2] in a:

            mt = { "$match" : {"fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]} }

    
    elif lb[2] in a:

        mt = { "$match" : {"mercadoria": a[a.index(lb[2])+1]}}

        if lb[0] in a and lb[2] in a:

            mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "mercado": a[a.index(lb[2])+1]}}

    pipeline=[]
    pipeline.append(mt)
    return pipeline

    

a = searchDerivativos(termo)


'''

result_ori_nv = [
    {    "mercadoria": "Café",    "fonte":"BMF",    "mercado":"Futuro",    "desc_papel":"Café Arábica Rolagem",    "codbolsa":"CR1",    "codbroad":"CR1", "serv":{"rt":[{"cod":"","desc":"","fee":{"prof":000,"nprof":000}}],"delay":} },
    {    "mercadoria": "Café",    "fonte":"BMF",    "mercado":"Futuro",    "desc_papel":"Café Arábica Tipo 4/5",    "codbolsa":"ICF",    "codbroad":"ICF" },
    {    "mercadoria": "Café",    "fonte":"BMF",    "mercado":"Opção",    "desc_papel":"Café Arábica Tipo 4/5",    "codbolsa":"ICF",    "codbroad":"ICF" },
    {    "mercadoria": "Café",    "fonte":"BMF",    "mercado":"Futuro",    "desc_papel":"Café Arábica Tipo 4/5",    "codbolsa":"ICF",    "codbroad":"ICF" },
    {    "mercadoria": "Café",    "fonte":"ICE Europe (IPE)",    "mercado":"Futuro",    "desc_papel":"Café Robusta",    "codbolsa":"RC",    "codbroad":"RCC" },
    {    "mercadoria": "Café",    "fonte":"ICE Europe (IPE)",    "mercado":"Opção",    "desc_papel":"Café Robusta",    "codbolsa":"RC",    "codbroad":"RRC" },
    {    "mercadoria": "Café",    "fonte":"ICE US (NYBOT)",    "mercado":"Futuro",    "desc_papel":"Café Arábica",    "codbolsa":"KC",    "codbroad":"CFN" },
    {    "mercadoria": "Café",    "fonte":"ICE US (NYBOT)",    "mercado":"Opção",    "desc_papel":"Café Arábica",    "codbolsa":"KC",    "codbroad":"CF" },
    {    "mercadoria": "Café",    "fonte":"ICE US (NYBOT)",    "mercado":"Opção",    "desc_papel":"Café Arábica",    "codbolsa":"KCW",    "codbroad":"KCW" },
    {    "mercadoria": "Soja",    "fonte":"teste",    "mercado":"Opção",    "desc_papel":"Café Arábica",    "codbolsa":"KCW",    "codbroad":"KCW" },
    {    "mercadoria": "teste",    "fonte":"ICE US (NYBOT)",    "mercado":"teste",    "desc_papel":"Café Arábica",    "codbolsa":"KCW",    "codbroad":"KCW" },
    #{    "mercadoria": "teste",    "fonte":"teste",    "mercado":"Opção",    "desc_papel":"Café Arábica",    "codbolsa":"KCW",    "codbroad":"KCW" },

]


#print(teste_format)

result_format = [{
    "mercadoria": "Café",
    "fonte":[
        {
            "desc":"BMF",
            "papel":[
                {
                    "mercado":"Futuro",
                    "desc_papel":"Café Arábica Rolagem",
                    "codbolsa":"CR1",
                    "codbroad":"CR1" 

                },
                {
                    "mercado":"Futuro",
                    "desc_papel":"Café Arábica Tipo 4/5",
                    "codbolsa":"ICF",
                    "codbroad":"ICF" 

                },
                {
                    "mercado":"Opção",
                    "desc_papel":"Café Arábica Tipo 4/5",
                    "codbolsa":"ICF",
                    "codbroad":"ICF" 

                },
                {
                    "mercado":"Futuro",
                    "desc_papel":"Café Arábica Tipo 4/5 Mini",
                    "codbolsa":"WCF",
                    "codbroad":"WCF" 

                },
            ],
            "serv_rt":[
                {
                    "cod":"",
                    "serv":"",
                    "fee":
                }
            ],
            "serv_delay":[]

        },
        {
            "desc":"ICE Europe (IPE)",
            "papel":[
                {
                    "mercado":"Futuro",
                    "desc_papel":"Café Robusta",
                    "codbolsa":"RC",
                    "codbroad":"RCC" 

                },
                {
                    "mercado":"Opção",
                    "desc_papel":"Café Robusta",
                    "codbolsa":"RC",
                    "codbroad":"RRC" 

                },
            ]
        },
        {
            "desc":"ICE US (NYBOT)",
            "papel":[
                {
                    "mercado":"Futuro",
                    "desc_papel":"Café Arábica",
                    "codbolsa":"KC",
                    "codbroad":"CFN" 

                },
                {
                    "mercado":"Opção",
                    "desc_papel":"Café Arábica",
                    "codbolsa":"KC",
                    "codbroad":"CF" 

                },
                {
                    "mercado":"Opção",
                    "desc_papel":"Café Arábica",
                    "codbolsa":"KCW",
                    "codbroad":"KCW" 

                },
            ]
        }
    ],
    "tp_instrumento":"Commodities",
}]

def montaHTMLDerivativos(data):
    
    html=""

    for n1 in data:  
        
        pt1a = "<div class='row'><div class='col-1' name='Mercadoria'>"+ n1['mercadoria']+ "</div><div class='col'>"
        print(pt1a)
        
        html = html + pt1a

        """
        <div class='row'>
            <div class='col-1' name='Mercadoria'> n1['mercadoria'] </div>
            <div class='col' name='Col'>
        """     
        
        for n2 in n1['fonte']:
            
            pt2a = "<div class='row'><div class='col-3' name='Fonte'>"+ n2['desc_fonte'] +"</div><div class='col'>"
            
            html = html + pt2a

            print(pt2a)

            """
            <div class="row">
                <div class="col" name="Fonte"> n2['desc_fonte'] </div>
                <div class="col" name="Col">
            """
            
            for n3 in n2['papel']:
                
                pt3 = "<div class='row'>" + \
                            "<div class='col-2' name='Mercado'>"+ n3['mercado'] +  "</div>" \
                            "<div class='col' name='DescPapel'>"+ n3['desc_papel'] + "</div>"\
                            "<div class='col-1' name='CodBolsa'>"+ n3['codbolsa'] + "</div>"\
                            "<div class='col-1' name='CodBroad'>"+ n3['codbroad'] + "</div>"\
                        "</div>"
                print(pt3)
                
                html = html + pt3
                """
                <div class="row">
                    <div class="col" name="Mercado"> n3['mercado'] </div>
                    <div class="col" name="Mercado"> n3['desc_papel'] </div>
                    <div class="col" name="Mercado"> n3['codbolsa'] </div>
                    <div class="col" name="Mercado"> n3['codbroad'] </div>
                </div>
                """
            
            pt2b = "</div></div>"
            
            print(pt2b)

            html = html + pt2b
            """
                </div>
            </div>
            """
        pt1b = "</div></div>"

        html = html + pt1b
        """
            </div>
        </div>
        """

    return html

result = format_result(result_ori)
print(result)
a = montaHTMLDerivativos(result)

txt = open('html.txt', 'w')
txt.write(a)
txt.close()
'''
# conta a quantidade de vezes que uma Mercadoria aparece no resultado da busca
def contM(x, data):
    i=0

    for a in data:
        if x == a['mercadoria']:
            i=i+1
    
    return i
# conta a quantidade de vezes que uma Fonte aparece no resultado da busca
def contF(x, data):
    i=0

    for a in data:
        if x == a['fonte']:
            i=i+1
    
    return i

# conta a quantidade de vezes que uma Fonte por Mercadoria aparece no resultado da busca
def contFM(x, y, data):
    i=0

    for a in data:
        if x == a['fonte'] and y == a['mercadoria']:
            i=i+1
    
    return i


def isuniqueMercado(data):
    merc_unique=[]
    for x in data:
        if x['mercado'] not in merc_unique:
            merc_unique.append(x['mercado'])
    
    if len(merc_unique)==1:
        print('Mercado unico')
        return True
    else:
        print('Mercado Varios')
        return False


def montaHTMLDerivativos(data):

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

    if isuniqueMercado(data):
        for x in data:
            if x['mercadoria'] not in unique_mercadoria:
                unique_mercadoria.append(x['mercadoria'])
                #print('{}:{}'.format(x['mercadoria'],str(contM(x['mercadoria'], data))))
                varMercadoria = "<td class='text-center' rowspan='"+ str(contM(x['mercadoria'], data)) +"' class='text-center'>"+x['mercadoria']+"</td>"
                
                if x['fonte']+x['mercadoria'] not in unique_fontmerc:
                    unique_fontmerc.append(x['fonte']+x['mercadoria'] )
                    print('{}+{}:{}'.format(x['mercadoria'],x['fonte'],str(contFM(x['fonte'],x['mercadoria'], data))))
                    varFonte= "<td class='text-center' rowspan='"+ str(contFM(x['fonte'],x['mercadoria'], data))+"' class='text-center'>"+x['fonte']+"</td>"
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
                    print(unique_fontmerc)
                    unique_fontmerc.append(x['fonte']+x['mercadoria'] )
                    print('{}+{}:{}'.format(x['mercadoria'],x['fonte'],str(contFM(x['fonte'],x['mercadoria'], data))))
                    varFonte= "<td class='text-center' rowspan='"+ str(contFM(x['fonte'],x['mercadoria'], data))+"' class='text-center'>"+x['fonte']+"</td>"
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
    
    else:
        for x in data:
            if x['mercadoria'] not in unique_mercadoria:
                unique_mercadoria.append(x['mercadoria'])
                #print('{}:{}'.format(x['mercadoria'],str(contM(x['mercadoria'], data))))
                varMercadoria = "<td class='text-center' rowspan='"+ str(contM(x['mercadoria'], data)) +"' class='text-center'>"+x['mercadoria']+"</td>"
                
                if x['fonte'] not in unique_fonte:
                    unique_fonte.append(x['fonte'])
                    print('{}:{}'.format(x['fonte'],str(contF(x['fonte'], data))))
                    varFonte= "<td class='text-center' rowspan='"+ str(contF(x['fonte'], data))+"' class='text-center'>"+x['fonte']+"</td>"
                    varDemais= "<td class='text-center'>"+x['mercado']+"</td>"+\
                    "<td>"+x['desc_papel']+"</td>"+\
                    "<td class='text-center'>"+x['codbolsa']+"</td>"+\
                    "<td class='text-center'>"+x['codbroad']+"</td>"
                    html = row_ini + varMercadoria + varFonte + varDemais + row_fim
                else:
                    varDemais= "<td class='text-center'>"+x['mercado']+"</td>"+\
                    "<td>"+x['desc_papel']+"</td>"+\
                    "<td class='text-center'>"+x['codbolsa']+"</td>"+\
                    "<td class='text-center'>"+x['codbroad']+"</td>"
                    html = html + row_ini+ varMercadoria + varDemais + row_fim

            else:
                if x['fonte'] not in unique_fonte:
                    unique_fonte.append(x['fonte'])
                    print('{}:{}'.format(x['fonte'],str(contF(x['fonte'], data))))
                    varFonte= "<td class='text-center' rowspan='"+ str(contF(x['fonte'], data))+"' class='text-center'>"+x['fonte']+"</td>"
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

def montaHTMLDerivativosTudo(data):

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
            varMercadoria = "<td class='text-center' rowspan='"+ str(contM(x['mercadoria'], data)) +"' class='text-center'>"+x['mercadoria']+"<br/><div class='realtime'><b>RT</b></div> <i class='fas fa-clock'></i>"+"</td>"
            
            if x['fonte']+x['mercadoria'] not in unique_fontmerc:
                unique_fontmerc.append(x['fonte']+x['mercadoria'] )
                print('{}+{}:{}'.format(x['mercadoria'],x['fonte'],str(contFM(x['fonte'],x['mercadoria'], data))))
                varFonte= "<td class='text-center' rowspan='"+ str(contFM(x['fonte'],x['mercadoria'], data))+"' class='text-center'>"+x['fonte']+"</td>"
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
                print(unique_fontmerc)
                unique_fontmerc.append(x['fonte']+x['mercadoria'] )
                print('{}+{}:{}'.format(x['mercadoria'],x['fonte'],str(contFM(x['fonte'],x['mercadoria'], data))))
                varFonte= "<td class='text-center' rowspan='"+ str(contFM(x['fonte'],x['mercadoria'], data))+"' class='text-center'>"+x['fonte']+"</td>"
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

    # Quatidade de Ativos por Mercadoria
    # Quantidade de Ativos por Fonte



'''
<table style="width:100%" >
    <tr>
        <th>Mercadoria</th>
        <th>Fonte</th>
        <th>Mercado</th>
        <th>Descrição Papel</th>
        <th>Cód. Bolsa</th>
        <th>Cód. Broadcast</th>

    </tr>
    <tr>
        <td rowspan="6" class="text-center">Café</th>
        <td rowspan="4" class="text-center">BMF</td>
        <td>Futuro</td>
        <td>Café Arábica Tipo 4/5</td>
        <td class="text-center">ICF</td>
        <td class="text-center">ICF</td>
    </tr>
    <tr>
        <td>Futuro</td>
        <td>Café Arábica Tipo 4/5</td>
        <td class="text-center">ICF</td>
        <td class="text-center">ICF</td>
    </tr>
    <tr>
        <td>Futuro</td>
        <td>Café Arábica Tipo 4/5</td>
        <td class="text-center">ICF</td>
        <td class="text-center">ICF</td>
    </tr>
    <tr>
        <td>Futuro</td>
        <td>Café Arábica Tipo 4/5</td>
        <td class="text-center">ICF</td>
        <td class="text-center">ICF</td>
    </tr>
    <tr>
        <td rowspan="2" class="text-center">ICE Europe (IPE)</td>
        <td>Opção</td>
        <td>Café Robusta</td>
        <td class="text-center">RC</td>
        <td class="text-center">RC</td>
    </tr>
    <tr>
        <td>Opção</td>
        <td>Café Robusta</td>
        <td class="text-center">RC</td>
        <td class="text-center">RC</td>
    </tr>
</table>
'''