from pymongo import MongoClient, TEXT

client = MongoClient('mongodb://broadcast:agestado@cluster0-shard-00-00-umdst.mongodb.net:27017,cluster0-shard-00-01-umdst.mongodb.net:27017,cluster0-shard-00-02-umdst.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')

db = client['db-broadcastprodutos']
coll = db['coll-derivativos']

result = coll.find_one({ '$text': {"$search":'teste', "$language":"portuguese"}})
print(result)