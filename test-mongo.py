from pymongo import MongoClient, TEXT

client = MongoClient('mongodb://broadcast:agestado@cluster0-shard-00-00-umdst.mongodb.net:27017,cluster0-shard-00-01-umdst.mongodb.net:27017,cluster0-shard-00-02-umdst.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')

db = client['db-broadcastprodutos']
coll = db['coll-derivativos']

coll.create_index([("mercadoria", TEXT),("fonte",TEXT),("mercado", TEXT),("tpinst", TEXT),("desc_papel", TEXT),("codbroad", TEXT),("codbolsa", TEXT),("pag", TEXT)], name="primary_index")
a = coll.find_one({ '$text': {"$search":'soja', "$language":"portuguese"}})
print(a)

{   
    'mercadoria': String,       
    'tpinst': String,           # Tipo Instrumento
    'mercado': String,
    'fonte': String,
    'pag': String,              # Desc. Pág. Permissionamento
    'cod_pag': Integer,         # Cód. Pág. Permissionamento
    'desc_papel': String,       # Desc. Ativo
    'codbolsa': String,         # Cód. Ativo na Bolsa
    'codbroad': String,         # Cód. Ativo no Broadcast

    # As fields 'serv_rt' e 'serv_delay' são Array de objetos,
    # pois mais de um serviço pode liberar acesso ao ativo.
    # ** As fields de cada um pode variar de acordo com o serviço.
    'serv_rt': [                
        {
            'codserv': String,
            'demo': String,     # Tempo de Demonstração do Serviço
            'plataforma': String,
            'fee': String,      # Fee. Pode não existir dependendo do serviço
            'feeprof': String,  # Fee Profissional. Pode não existir dependendo do serviço
            'feenprof': String, # Fee Não Profissional. Pode não existir dependendo do serviço
        },
    ],
    'serv_delay': [
        {
            'delay': String,        # Tempo de Delay
            'servs': String,        # Descritivo para informar que está disponivel em todos os pacotes.
            'codserv': String,      # Pode não existir
            'demo': String,         # Pode não existir
            'plataforma': String,   # Pode não existir
            'fee': String,          # Fee. Pode não existir dependendo do serviço
            'feeprof': String,      # Fee Profissional. Pode não existir dependendo do serviço
            'feenprof': String,     # Fee Não Profissional. Pode não existir dependendo do serviço
        }
    ]
}

{
    'pergunta': String,
    'resposta': String
}
