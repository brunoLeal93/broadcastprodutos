from pymongo import MongoClient, ASCENDING
from pprint import pprint
#from cotacaoTeste import searchDerivativos
#print(1)
client = MongoClient('mongodb://broadcast:agestado@cluster0-shard-00-00-umdst.mongodb.net:27017,cluster0-shard-00-01-umdst.mongodb.net:27017,cluster0-shard-00-02-umdst.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')
#print(2)
db = client['db-derivativos']
coll = db['coll-derivativos-full']

pipeline = [
    { "$match":{ 'mercadoria': {"$regex":"índi", "$options": "i"}} },
    #{ "$unwind":'$serv_rt'},
    { "$sort": {"mercadoria": 1 , "fonte": 1, "mercado": 1, "desc_papel":1, "serv_rt.plataforma": 1}}
]
#print(3)
#a = coll.update_one({'mercadoria': 'Índice Dow Jones'},{'$set' : {'desc_papel': 'índice Média Industrial Dow Jones Mini (Multiplicador 5)'}})
result = coll.aggregate(pipeline)
pprint(result)
for x in result:
    pprint(x)

vetPlataforma=[]
html=''

def countKey(data):
    i=0
    for a in data:
        i=i+1
    return i

def htmlTooltip(data):
    vetPlataforma=[]
    html=''
    result = coll.find_one({'cod_pag':data})#.sort("serv_rt.plataforma",1)
    #pprint(result['serv_rt'])
    for y in result['serv_rt']:
        #print('<------serv rt------>')
        pprint(y)
        if countKey(y) == 6:
            if y['plataforma'] not in vetPlataforma:
                vetPlataforma.append(y['plataforma'])
                htmlPlataforma =  "<b>"+y['plataforma']+"<b><br>"
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
                htmlPlataforma =  "<b>"+y['plataforma']+"<b><br>"
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

def htmlTooltipDelay(data):
    vetPlataforma=[]
    html=''
    result = coll.find_one({'cod_pag':data})#.sort("serv_rt.plataforma",1)
    #pprint(result['serv_rt'])
    for y in result['serv_delay']:
        #print('<------serv rt------>')
        #pprint(y)
        #print(countKey(y))
        if countKey(y) == 2:
            htmlServs = y['servs']+"<br>"+y['delay']+"<br>"
            html = html + htmlServs
        if countKey(y) == 3:
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
        if countKey(y) == 6:
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

    
    #for x in result:
        #print('<-----result------->')
        #pprint(x)
        #pprint(x['serv_rt'])
        #for y in x['serv_rt']:
            #print('<------serv rt------>')
        #    pprint(y)
        #    if countKey(y) == 6:
        #        if y['plataforma'] not in vetPlataforma:
        #            vetPlataforma.append(y['plataforma'])
        #            htmlPlataforma =  "<b>"+y['plataforma']+"<b><br>"
        #            htmlServs = "("+y['codserv']+") - "+y['descserv']+"<br>"+\
        #                "Fee Prof: "+y['feeprof']+"  Fee Ñ.Prof: "+y['feenprof']+"<br>"+\
        #                "Demonstração: "+y['demo']+"<br>"
        #            html = html + htmlPlataforma + htmlServs
        #        else:
        #            htmlServs = "("+y['codserv']+") - "+y['descserv']+"<br>"+\
        #                "Fee Prof: "+y['feeprof']+"  Fee Ñ.Prof: "+y['feenprof']+"<br>"+\
        #                "Demonstração: "+y['demo']+"<br>"
        #            html = html + htmlServs
        #    else:
        #        if y['plataforma'] not in vetPlataforma:
        #            vetPlataforma.append(y['plataforma'])
        #            htmlPlataforma =  "<b>"+y['plataforma']+"<b><br>"
        #            htmlServs = "("+y['codserv']+") - "+y['descserv']+"<br>"+\
        #                "Fee Prof: "+y['feeprof']+"<br>"+\
        #                "Demonstração: "+y['demo']+"<br>"
        #            html = html + htmlPlataforma + htmlServs
        #        else:
        #            htmlServs = "("+y['codserv']+") - "+y['descserv']+"<br>"+\
        #                "Fee Prof: "+y['feeprof']+"<br>"+\
        #                "Demonstração: "+y['demo']+"<br>"
        #            html = html + htmlServs

#a = htmlTooltipDelay(912)
#pprint(a)

#result1 = coll.find_one({ 'mercadoria': {"$regex": "cafe", "$options": "i"}})
#print(result1)

'''
<b>y['plataforma']<b><br>
(y['codserv']) - y['descserv']<br>
Fee Prof: y['feeprof']        Fee Ñ.Prof: y['feenprof']<br>
Demonstração: y['demo']
<br>
<br>
Wallboard:
(cod_serv) - descServ
Fee Prof: 
Demonstração:

<b>y['plataforma']<b><br>


'''

