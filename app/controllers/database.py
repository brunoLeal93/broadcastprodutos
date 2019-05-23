from pymongo import MongoClient
#from cotacaoTeste import searchDerivativos

client = MongoClient('mongodb://broadcast:agestado@cluster0-shard-00-00-umdst.mongodb.net:27017,cluster0-shard-00-01-umdst.mongodb.net:27017,cluster0-shard-00-02-umdst.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')

#client2 = MongoClient('mongodb://172.17.0.3:27017/').database_names()

db2 = client['db-demais']


coll2 = db['coll-demais']
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
        
        def pipelineDerivativos(data):

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

        def searchDerivativos(data):

                pipeline = pipelineDerivativos(data)
                print(pipeline)
                result = coll.aggregate(pipeline)

                for x in result:
                        print(x)

                return None

def searchDemais(data):
    result = coll2.find_one()
    
    return result

searchDerivativos1()
