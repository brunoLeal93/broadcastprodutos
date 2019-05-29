from dbmongo import *
from pymongo import IndexModel, ASCENDING, TEXT

index1= IndexModel([("mercadoria", ASCENDING),("fonte", ASCENDING)], name="first_index")

coll.create_index([("mercadoria", TEXT),("fonte",TEXT),("mercado", TEXT),("tp_instr", TEXT),("desc_papel", TEXT),("codbroad", TEXT),("codbolsa", TEXT),("pag_perm", TEXT)], name="primary_index")

'''
coll.create_indexes({
        "mercadoria": "text",
        "fonte":"text",
        "mercado":"text",
        "desc_papel":"text",
        "codbolsa":"text",
        "codbroad":"text",
        "pag_perm":"text",
        "delay": "text"
})

result = searchDerivativos('Soja')

'''
