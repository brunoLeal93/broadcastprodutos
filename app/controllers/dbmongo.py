from pymongo import MongoClient
from cotacaoTeste import searchDerivativos

client = MongoClient('mongodb://broadcast:agestado@cluster0-shard-00-00-umdst.mongodb.net:27017,cluster0-shard-00-01-umdst.mongodb.net:27017,cluster0-shard-00-02-umdst.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')

#client2 = MongoClient('mongodb://172.17.0.3:27017/').database_names()
db = client['db-derivativos']
db2 = client['db-demais']

coll = db['coll-derivativos']
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

def searchDerivativos1():

        pipeline = searchDerivativos("Derivativos > Mercadoria: Café > Fonte: BMF > Mercado: Futuro")
        print(pipeline)
        result = coll.aggregate(pipeline)

        for x in result:
                print(x)

#        return result

def searchDemais(data):
    result = coll2.find_one()
    
    return result

searchDerivativos1()
