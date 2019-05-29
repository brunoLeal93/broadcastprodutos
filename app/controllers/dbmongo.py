from pymongo import MongoClient, ASCENDING

from pprint import pprint
#from cotacaoTeste import searchDerivativos

client = MongoClient('mongodb://broadcast:agestado@cluster0-shard-00-00-umdst.mongodb.net:27017,cluster0-shard-00-01-umdst.mongodb.net:27017,cluster0-shard-00-02-umdst.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')

#client2 = MongoClient('mongodb://172.17.0.3:27017/').database_names()

#db2 = client['db-demais']


#coll2 = db['coll-demais']
'''
post = {
        'nome':'Bruno Leal',
        'Idade': 25
        }
'''
#coll.insert_one(post).inserted_id

#print(coll.find_one())

#print(client2) 

class searchCotacao:
        db = client['db-derivativos']
        coll = db['coll-derivativos']
        
        def pipelineDerivativos(self, data):

                #lb = ['Derivativos', 'Mercadoria:', 'Fonte', 'Mercado']
                lb = ['Mercadoria:', 'Fonte:', 'Mercado:', 'TUDO']
                a = data.split(' ')
                print(a)

                #print(a)
                #print(a.index(lb[0]))
                #print(a[a.index(lb[0])+1])
                
                order = { "$sort": {"mercadoria": 1 , "fonte": 1, "mercado": 1, "desc_papel":1}}

                if lb[0] in a:

                        x = len(a) - a.index(lb[0])
                        print('x: {}'.format(x))

                        if x ==2:
                                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]}}
                        if x==3:
                                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2]}}
                        if x==4:
                                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2]+" "+a[a.index(lb[0])+3]}}

                        # mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]}}
                        
                        if lb[1] in a:

                                x = a.index(lb[1]) - a.index(lb[0])  - 1
                                y = len(a) - a.index(lb[1]) - 1

                                if x==2 and y==2:
                                        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1]}}
                                if x==2 and y==3:
                                        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]}}
                                if x==2 and y==4:
                                        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3]}}
                                if x==3 and y==2:
                                        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]}}
                                if x==3 and y==3:
                                        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]}}
                                if x==3 and y==4:
                                        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3]}}
                                if x==4 and y==2:
                                        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]}}
                                if x==4 and y==3:
                                        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]}}
                                if x==4 and y==4:
                                        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3]}}
                                

                                #mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1]}}

                                if lb[2] in a:

                                        x = a.index(lb[1]) - a.index(lb[0]) - 1
                                        y = a.index(lb[2]) - a.index(lb[1]) - 1
                                        z = len(a) - a.index(lb[2])

                                        print('x:{} y:{} z:{}'.format(x,y,z))
                                        if x==2 and y==2 and z==2:
                                                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]}}
                                        #if x==2 and y==2 and z==3:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]}}
                                        #if x==2 and y==2 and z==4:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]+" "+a[a.index(lb[2])+3]}}
                                        if x==2 and y==3 and z==2:
                                                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]}}
                                        #if x==2 and y==3 and z==3:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]}}
                                        #if x==2 and y==3 and z==4:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]+" "+a[a.index(lb[2])+3]}}
                                        if x==2 and y==4 and z==2:
                                                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3], "mercado": a[a.index(lb[2])+1]}}
                                        #if x==2 and y==4 and z==3:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]}}
                                        #if x==2 and y==4 and z==4:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]+" "+a[a.index(lb[2])+3]}}
                                        if x==3 and y==2 and z==2:
                                                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]}}
                                        #if x==3 and y==2 and z==3:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]}}
                                        #if x==3 and y==2 and z==4:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]+" "+a[a.index(lb[2])+3]}}
                                        if x==3 and y==3 and z==2:
                                                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]}}
                                        #if x==3 and y==3 and z==3:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]}}
                                        #if x==3 and y==3 and z==4:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]+" "+a[a.index(lb[2])+3]}}
                                        if x==3 and y==4 and z==2:
                                                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3], "mercado": a[a.index(lb[2])+1]}}
                                        #if x==3 and y==4 and z==3:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]}}
                                        #if x==3 and y==4 and z==4:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]+" "+a[a.index(lb[2])+3]}}
                                        if x==4 and y==2 and z==2:
                                                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]}}
                                        #if x==4 and y==2 and z==3:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]}}
                                        #if x==4 and y==2 and z==4:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]+" "+a[a.index(lb[2])+3]}}
                                        if x==4 and y==3 and z==2:
                                                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]}}
                                        #if x==4 and y==3 and z==3:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]}}
                                        #if x==4 and y==3 and z==4:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]+" "+a[a.index(lb[2])+3]}}
                                        if x==4 and y==4 and z==2:
                                                mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3], "mercado": a[a.index(lb[2])+1]}}
                                        #if x==4 and y==4 and z==3:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]}}
                                        #if x==4 and y==4 and z==4:
                                        #        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]+" "+a[a.index(lb[2])+3]}}
                                       

                                        #mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]}}
                        
                elif lb[1] in a:

                        #mt = { "$match" : {"fonte": a[a.index(lb[1])+1]}}

                        x = len(a) - a.index(lb[1])

                        if x ==2:
                                mt = { "$match" : {"fonte": a[a.index(lb[1])+1]}}
                        if x==3:
                                mt = { "$match" : {"fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]}}
                        if x==4:
                                mt = { "$match" : {"fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2]+" "+a[a.index(lb[1])+3]}}


                        if lb[2] in a:

                                #mt = { "$match" : {"fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]} }
                                x = a.index(lb[2]) - a.index(lb[1]) - 1
                                y = len(a) - a.index(lb[2])

                                if x==2 and y==2:
                                        mt = { "$match" : {"fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]}}
                                #if x==2 and y==3:
                                #        mt = { "$match" : {"fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]}}
                                #if x==2 and y==4:
                                #        mt = { "$match" : {"fonte": a[a.index(lb[1])+1], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]+" "+a[a.index(lb[2])+3]}}
                                if x==3 and y==2:
                                        mt = { "$match" : {"fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]}}
                                #if x==3 and y==3:
                                #        mt = { "$match" : {"fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]}}
                                #if x==3 and y==4:
                                #        mt = { "$match" : {"fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]+" "+a[a.index(lb[2])+3]}}
                                if x==4 and y==2:
                                        mt = { "$match" : {"fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]}}
                                #if x==4 and y==3:
                                #        mt = { "$match" : {"fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]}}
                                #if x==4 and y==4:
                                #        mt = { "$match" : {"fonte": a[a.index(lb[1])+1]+" "+a[a.index(lb[1])+2], "mercado": a[a.index(lb[2])+1]+" "+a[a.index(lb[2])+2]+" "+a[a.index(lb[2])+3]}}
                                
                
                elif lb[2] in a:

                        mt = { "$match" : {"mercado": a[a.index(lb[2])+1]}}

                        if lb[0]:

                                x = a.index(lb[0]) - a.index(lb[2]) - 1

                                if x ==2:
                                        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "mercado": a[a.index(lb[2])+1]}}
                                if x==3:
                                        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2], "mercado": a[a.index(lb[2])+1]}}
                                if x==4:
                                        mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1]+" "+a[a.index(lb[0])+2]+" "+a[a.index(lb[0])+3], "mercado": a[a.index(lb[2])+1]}}

                                #mt = { "$match" : {"mercadoria": a[a.index(lb[0])+1], "mercado": a[a.index(lb[2])+1]}}

                elif lb[3] in a:
                        mt= {}

                pipeline=[]
                pipeline.append(mt)
                pipeline.append(order)
                return pipeline

        def searchDerivativos(self, data):
                if 'TUDO' in data:
                        result = self.coll.find({}).sort([('mercadoria', ASCENDING), ('fonte', ASCENDING), ('mercado', ASCENDING)])
                        aux=[]
                        for x in result:
                                aux.append(x)
                        return aux
                        
                else:
                        pipeline = "self.pipelineDerivativos1(data)"
                        pprint(pipeline)
                        result = self.coll.aggregate(pipeline)
                        aux=[]
                        for x in result:
                                aux.append(x)
                        return aux

        def pipelineDerivativos1(self, data):
                vetText = data.split(' ')
                aux = { "$match":{ '$text': {"$search":data}} }
                order = { "$sort": {"mercadoria": 1 , "fonte": 1, "mercado": 1, "desc_papel":1}}

                pipeline =[]
                
                pipeline.append(aux)
                
                vetMercadoria=[]
                vetFonte=[]
                vetMercado=[]
                vetTpInst=[]
                vetDescPapel=[]
                vetCodBolsa=[]
                vetCodBroad=[]
                vetPgPerm=[]

                

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
                        
                        result = self.coll.find_one({ 'tp_instr': {"$regex": x, "$options": "i"}})
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

                        result = self.coll.find_one({ 'pag_perm': {"$regex": x, "$options": "i"}})
                        if result != None:
                                vetPgPerm.append(x)

                if vetMercadoria != []:
                        for x in vetMercadoria:
                                aux = { "$match":{ 'mercadoria': {"$regex":x, "$options": "i"}} }
                                pipeline.append(aux)
                
                if vetFonte != []:
                        for x in vetFonte:
                                aux = { "$match":{ 'fonte': {"$regex":x, "$options": "i"}} }
                                pipeline.append(aux)
                
                if vetMercado != []:
                        for x in vetMercado:
                                aux = { "$match":{ 'mercado': {"$regex":x, "$options": "i"}} }
                                pipeline.append(aux)

                if vetTpInst != []:
                        for x in vetTpInst:
                                aux = { "$match":{ 'tp_instr': {"$regex":x, "$options": "i"}} }
                                pipeline.append(aux)
                
                if vetDescPapel != []:
                        for x in vetDescPapel:
                                aux = { "$match":{ 'desc_papel': {"$regex":x, "$options": "i"}} }
                                pipeline.append(aux)
                
                if vetCodBolsa != []:
                        for x in vetCodBolsa:
                                aux = { "$match":{ 'codbolsa': {"$regex":x, "$options": "i"}} }
                                pipeline.append(aux)
                
                if vetCodBroad != []:
                        for x in vetCodBroad:
                                aux = { "$match":{ 'codbroad': {"$regex":x, "$options": "i"}} }
                                pipeline.append(aux)
                        
                if vetPgPerm != []:
                        for x in vetPgPerm:
                                aux = { "$match":{ 'pag_perm': {"$regex":x, "$options": "i"}} }
                                pipeline.append(aux)
                
                pipeline.append(order)
                
                return pipeline
#def searchDemais(data):
#    result = coll2.find_one()
    
#    return result

#searchDerivativos1()
