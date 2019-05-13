from pymongo import MongoClient

client = MongoClient('mongodb://172.17.0.3:27017/')

#client2 = MongoClient('mongodb://172.17.0.3:27017/').database_names()
db1 = client['db-derivativos']
db2 = client['db-demais']

coll1 = db['coll-derivativos']
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

def searchDerivativos(data):
    result = coll1.find_one()
    
    return result

def searchDemais(data):
    result = coll2.find_one()
    
    return result
