from pymongo import MongoClient, ASCENDING
#from cotacaoTeste import searchDerivativos

client = MongoClient('mongodb://broadcast:agestado@cluster0-shard-00-00-umdst.mongodb.net:27017,cluster0-shard-00-01-umdst.mongodb.net:27017,cluster0-shard-00-02-umdst.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')

db = client['db-derivativos']
coll = db['coll-derivativos']

pipeline = [
    { "$match":{ 'mercadoria': {"$regex":"boi", "$options": "i"}} },
    { "$match":{ 'mercado': {"$regex":"futuro", "$options": "i"}} },
    { "$match":{ 'desc_papel': {"$regex":"boi", "$options": "i"}} },
    { "$match":{ 'desc_papel': {"$regex":"rolagem", "$options": "i"}} }

]

a = coll.update_one({'mercadoria': 'Índice Dow Jones'},{'$set' : {'desc_papel': 'índice Média Industrial Dow Jones Mini (Multiplicador 5)'}})
result = coll.aggregate(pipeline)

#for x in result:
#    print(x)

result1 = coll.find_one({ 'mercadoria': {"$regex": "teste", "$options": "i"}})

print(result1)

