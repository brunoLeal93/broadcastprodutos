from pymongo import MongoClient, ASCENDING

from pprint import pprint
#from cotacaoTeste import searchDerivativos

client = MongoClient('mongodb://broadcast:agestado@cluster0-shard-00-00-umdst.mongodb.net:27017,cluster0-shard-00-01-umdst.mongodb.net:27017,cluster0-shard-00-02-umdst.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')

class searchCotacao:
        db = client['db-broadcastprodutos']
        coll = db['coll-derivativos']
        
        def searchDerivativos(self, data):
                if 'TUDO' == data.upper():
                        result = self.coll.find({}).sort([('mercadoria', ASCENDING), ('fonte', ASCENDING), ('mercado', ASCENDING)])
                        aux=[]
                        for x in result:
                                aux.append(x)
                        return aux
                        
                else:
                        pipeline = self.pipelineDerivativos(data)
                        pprint(pipeline)
                        result = self.coll.aggregate(pipeline)
                        aux=[]
                        for x in result:
                                print(x)
                                aux.append(x)
                        return aux

        def pipelineDerivativos(self, data):
                vetText = data.split(' ')
                #aux = { "$match":{ '$text': {"$search":data, "$language":"portuguese"}} }
                order = { "$sort": {"mercadoria": 1 , "fonte": 1, "mercado": 1, "desc_papel":1, "serv_rt.plataforma": 1}}

                pipeline =[]
                
                #pipeline.append(aux)
                
                vetMercadoria=[]
                vetFonte=[]
                vetMercado=[]
                vetTpInst=[]
                vetDescPapel=[]
                vetCodBolsa=[]
                vetCodBroad=[]
                vetPgPerm=[]
                #pipeline.append(order)
                #return pipeline

                for x in vetText:
                        result = self.coll.find_one({ 'mercadoria': {"$regex": x, "$options": "i"}})
                        if result != None:
                                vetMercadoria.append(x)
                        
                        result = self.coll.find_one({ 'fonte': {"$regex": x, "$options": "i"}})
                        if result != None:
                                vetFonte.append(x)
                        
                        result = self.coll.find_one({ 'mercado': {"$regex": x, "$options": "i"}})
                        if result != None:
                                vetMercado.append(x)
                        
                        result = self.coll.find_one({ 'tpinst': {"$regex": x, "$options": "i"}})
                        if result != None:
                                vetTpInst.append(x)
                        
                        result = self.coll.find_one({ 'desc_papel': {"$regex": x, "$options": "i"}})
                        if result != None:
                                vetDescPapel.append(x)

                        result = self.coll.find_one({ 'codbolsa': {"$regex": x, "$options": "i"}})
                        if result != None:
                                vetCodBolsa.append(x)

                        result = self.coll.find_one({ 'codbroad': {"$regex": x, "$options": "i"}})
                        if result != None:
                                vetCodBroad.append(x)

                        result = self.coll.find_one({ 'pag': {"$regex": x, "$options": "i"}})
                        if result != None:
                                vetPgPerm.append(x)

                #for i in vetMercadoria:


                if len(vetMercadoria)>0:
                        if len(vetMercadoria) == 1:
                                mt = { "$match":{ 'mercadoria': {"$regex":vetMercadoria[0], "$options": "i"}} }
                                if len(vetFonte)>0:
                                        if len(vetFonte) == 1:
                                                mt = { "$match":{ "$and":[
                                                        {'mercadoria': {"$regex":vetMercadoria[0], "$options": "i"}},
                                                        { 'fonte': {"$regex":vetFonte[0], "$options": "i"}}
                                                        ]}}
                                                if len(vetMercado)>0:
                                                        if len(vetMercado) == 1:
                                                                mt = { "$match":{ "$and":[ 
                                                                        {'mercadoria': {"$regex":vetMercadoria[0], "$options": "i"}},
                                                                        { 'fonte': {"$regex":vetFonte[0], "$options": "i"}},
                                                                        { 'mercado': {"$regex":vetMercado[0], "$options": "i"}} 
                                                                        ]}}
                                                        else:
                                                                tam = len(vetMercado)
                                                                a=[]
                                                                while tam != 0:
                                                                        x = { 'mercado': {"$regex":vetMercado[tam-1], "$options": "i"}}
                                                                        a.append(x)
                                                                        tam=tam-1
                                                                mt = { "$match":{ "$and":[ 
                                                                        {'mercadoria': {"$regex":vetMercadoria[0], "$options": "i"}},
                                                                        { 'fonte': {"$regex":vetFonte[0], "$options": "i"}},
                                                                        {"$or":a}
                                                                        ]}}
                                        else:
                                                tam = len(vetFonte)
                                                a=[]
                                                
                                                while tam != 0:
                                                        x = { 'fonte': {"$regex":vetFonte[tam-1], "$options": "i"}}
                                                        a.append(x)
                                                        tam=tam-1
                                                mt = { "$match":{ "$and":[ {'mercadoria': {"$regex":vetMercadoria[0], "$options": "i"}}, {"$or":a}] }}
                                                
                                                if len(vetMercado)>0:
                                                        if len(vetMercado) == 1:
                                                                mt = { "$match":{ "$and":[ 
                                                                        {'mercadoria': {"$regex":vetMercadoria[0], "$options": "i"}},
                                                                        {"$or":a},
                                                                        { 'mercado': {"$regex":vetMercado[0], "$options": "i"}} 
                                                                        ]}}
                                                        else:
                                                                tam = len(vetMercado)
                                                                b=[]
                                                                while tam != 0:
                                                                        x = { 'mercado': {"$regex":vetMercado[tam-1], "$options": "i"}}
                                                                        b.append(x)
                                                                        tam=tam-1
                                                                mt = { "$match":{ "$and":[ 
                                                                        {'mercadoria': {"$regex":vetMercadoria[0], "$options": "i"}},
                                                                        {"$or":a},
                                                                        {"$or":b}
                                                                        ]}}
                                else:
                                        if len(vetMercado)>0:
                                                if len(vetMercado) == 1:
                                                        mt = { "$match":{ "$and":[ 
                                                                {'mercadoria': {"$regex":vetMercadoria[0], "$options": "i"}},
                                                                { 'mercado': {"$regex":vetMercado[0], "$options": "i"}} 
                                                                ]}}
                                                else:
                                                        tam = len(vetMercado)
                                                        a=[]
                                                        while tam != 0:
                                                                x = { 'mercado': {"$regex":vetMercado[tam-1], "$options": "i"}}
                                                                a.append(x)
                                                                tam=tam-1
                                                        mt = { "$match":{ "$and":[ 
                                                                {'mercadoria': {"$regex":vetMercadoria[0], "$options": "i"}},
                                                                {"$or":a}
                                                                ]}}
                        else:
                                tam = len(vetMercadoria)
                                a=[]
                                while tam != 0:
                                        x = { 'mercadoria': {"$regex":vetMercadoria[tam-1], "$options": "i"}}
                                        a.append(x)
                                        tam=tam-1

                                mt = { "$match":{"$or":a}}

                                if len(vetFonte)>0:
                                        if len(vetFonte) == 1:
                                                mt = { "$match":{ "$and":[
                                                        { "$match":{"$or":a}},
                                                        { 'fonte': {"$regex":vetFonte[0], "$options": "i"}}
                                                        ]}}
                                                if len(vetMercado)>0:
                                                        if len(vetMercado) == 1:
                                                                mt = { "$match":{ "$and":[ 
                                                                        { "$match":{"$or":a}},
                                                                        { 'fonte': {"$regex":vetFonte[0], "$options": "i"}},
                                                                        { 'mercado': {"$regex":vetMercado[0], "$options": "i"}} 
                                                                        ]}}
                                                        else:
                                                                tam = len(vetMercado)
                                                                b=[]
                                                                while tam != 0:
                                                                        x = { 'mercado': {"$regex":vetMercado[tam-1], "$options": "i"}}
                                                                        b.append(x)
                                                                        tam=tam-1
                                                                mt = { "$match":{ "$and":[ 
                                                                        { "$match":{"$or":a}},
                                                                        { 'fonte': {"$regex":vetFonte[0], "$options": "i"}},
                                                                        {"$or":b}
                                                                        ]}}
                                        else:
                                                tam = len(vetFonte)
                                                b=[]
                                                
                                                while tam != 0:
                                                        x = { 'fonte': {"$regex":vetFonte[tam-1], "$options": "i"}}
                                                        b.append(x)
                                                        tam=tam-1
                                                mt = { "$match":{ "$and":[ {"$or":a}, {"$or":b}] }}
                                                
                                                if len(vetMercado)>0:
                                                        if len(vetMercado) == 1:
                                                                mt = { "$match":{ "$and":[ 
                                                                        {"$or":a},
                                                                        {"$or":b},
                                                                        { 'mercado': {"$regex":vetMercado[0], "$options": "i"}} 
                                                                        ]}}
                                                        else:
                                                                tam = len(vetMercado)
                                                                c=[]
                                                                while tam != 0:
                                                                        x = { 'mercado': {"$regex":vetMercado[tam-1], "$options": "i"}}
                                                                        c.append(x)
                                                                        tam=tam-1
                                                                mt = { "$match":{ "$and":[ 
                                                                        {"$or":a},
                                                                        {"$or":b},
                                                                        {"$or":c}
                                                                        ]}}


                else:
                        if len(vetFonte)>0:
                                        if len(vetFonte) == 1:
                                                mt = { "$match":{ 'fonte': {"$regex":vetFonte[0], "$options": "i"}}}
                                                if len(vetMercado)>0:
                                                        if len(vetMercado) == 1:
                                                                mt = { "$match":{ "$and":[ 
                                                                        { 'fonte': {"$regex":vetFonte[0], "$options": "i"}},
                                                                        { 'mercado': {"$regex":vetMercado[0], "$options": "i"}} 
                                                                        ]}}
                                                        else:
                                                                tam = len(vetMercado)
                                                                a=[]
                                                                while tam != 0:
                                                                        x = { 'mercado': {"$regex":vetMercado[tam-1], "$options": "i"}}
                                                                        a.append(x)
                                                                        tam=tam-1
                                                                mt = { "$match":{ "$and":[ 
                                                                        { 'fonte': {"$regex":vetFonte[0], "$options": "i"}},
                                                                        {"$or":a}
                                                                        ]}}
                                        else:
                                                tam = len(vetFonte)
                                                a=[]
                                                
                                                while tam != 0:
                                                        x = { 'fonte': {"$regex":vetFonte[tam-1], "$options": "i"}}
                                                        a.append(x)
                                                        tam=tam-1
                                                mt = { "$match":{ "$or":a }}
                                                
                                                if len(vetMercado)>0:
                                                        if len(vetMercado) == 1:
                                                                mt = { "$match":{ "$and":[ 
                                                                        {"$or":a},
                                                                        { 'mercado': {"$regex":vetMercado[0], "$options": "i"}} 
                                                                        ]}}
                                                        else:
                                                                tam = len(vetMercado)
                                                                b=[]
                                                                while tam != 0:
                                                                        x = { 'mercado': {"$regex":vetMercado[tam-1], "$options": "i"}}
                                                                        b.append(x)
                                                                        tam=tam-1
                                                                mt = { "$match":{ "$and":[ 
                                                                        {"$or":a},
                                                                        {"$or":b}
                                                                        ]}}
                        else:
                                if len(vetMercado)>0:
                                        if len(vetMercado) == 1:
                                                mt = { "$match":{ 'mercado': {"$regex":vetMercado[0], "$options": "i"}}}
                                        else:
                                                tam = len(vetMercado)
                                                a=[]
                                                while tam != 0:
                                                        x = { 'mercado': {"$regex":vetMercado[tam-1], "$options": "i"}}
                                                        a.append(x)
                                                        tam=tam-1
                                                mt = { "$match":{"$or":a}}

                pipeline.append(mt)
                pipeline.append(order)
                
                return pipeline

                ###############   FIM        ############
                
#def searchDemais(data):
#    result = coll2.find_one()
    
#    return result

#searchDerivativos1()
