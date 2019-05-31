from pymongo import MongoClient, ASCENDING
#from cotacaoTeste import searchDerivativos
print(1)
client = MongoClient('mongodb://broadcast:agestado@cluster0-shard-00-00-umdst.mongodb.net:27017,cluster0-shard-00-01-umdst.mongodb.net:27017,cluster0-shard-00-02-umdst.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')
print(2)
db = client['db-derivativos']
coll = db['coll-derivativos']

pipeline = [
    { "$match":{ 'mercadoria': {"$regex":"café", "$options": "i"}} },
    { "$sort": {"mercadoria": 1 , "fonte": 1, "mercado": 1, "desc_papel":1}}
]
print(3)
#a = coll.update_one({'mercadoria': 'Índice Dow Jones'},{'$set' : {'desc_papel': 'índice Média Industrial Dow Jones Mini (Multiplicador 5)'}})
result = coll.aggregate(pipeline)
print(4)
for x in result:
    #print(x)
    print(x['serv'])
    for y in x['serv']:
        print(y)
    

result1 = coll.find_one({ 'mercadoria': {"$regex": "cafe", "$options": "i"}})
print(result1)

