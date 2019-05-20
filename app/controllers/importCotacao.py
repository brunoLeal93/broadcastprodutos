from openpyxl import load_workbook
from dbmongo import coll 
wb2 = load_workbook('D:\Mercados\Cotação\Base Cotacao.xlsx')

#print(wb2.sheetnames)

ws= wb2['Derivativos']

#print(ws['A3'].value)

#print(ws.cell(row=4, column=8).value)


#teste = ws.cell(row=67, column=8).value.split('/') # Separa os Serviços
#print(teste)
#print(len(teste))


row=4
col=1
many_post=[]


while ws.cell(row=row, column=1).value != None:
    rt=[]
    # Separa as Plataformas
    # servs_rt[0] == "plataforma":["BPRO", "BPRO WEB", "BAGRO", "BAGRO WEB", "TN"],
    # servs_rt[1] == "plataforma": WB
    servs_rt = ws.cell(row=row, column=8).value.split('/')
    print(servs_rt)   
    # Separa os Serviços por Plataformas
    if len(servs_rt) < 1:
        serv_bpro = servs_rt[0].split(';')
        serv_bw = servs_rt[1].split(';') 
        #print('serv_bpro: {}'.format(serv_bpro))

        if ws.cell(row=row, column=2).value == "BMF":
            
            for x in serv_bpro:
                serv=[]
                #Separa os Campos dos Serviços RT
                # Cód , DescServ, NProf, Prof, DiasDemo
                #print("x: {}".format(x))
                serv = x.split('*')
                print('serv: {}'.format(serv))
                doc={  
                    "plataforma":["BPRO", "BPRO WEB", "BAGRO", "BAGRO WEB", "TN"],
                    "cod":serv[0],
                    "desc":serv[1],
                    "fee":{
                        "nprof":serv[2],
                        "prof":serv[3]
                        },
                    "demo":serv[4]
                }
            
                rt.append(doc)
            
            for x in serv_bw:
                serv=[]
                #Separa os Campos dos Serviços RT
                # Cód , DescServ, fee, DiasDemo
                serv = x.split('*')

                doc={  
                    "plataforma":"WB",
                    "cod":serv[0],
                    "desc":serv[1],
                    "fee":serv[2],
                    "demo":serv[3]
                }
            
                rt.append(doc)

        if ws.cell(row=row, column=2).value != "BMF":
            for x in serv_bpro:
                serv=[]
                #Separa os Campos
                # Cód , DescServ, Fee, DiasDemo
                serv = x.split('*')

                serv_rt={  
                    "plataforma":["BPRO", "BPRO WEB", "BAGRO", "BAGRO WEB", "TN"],
                    "cod":serv[0],
                    "desc":serv[1],
                    "fee":serv[2],
                    "demo":serv[3]
                }
            
                rt.append(serv_rt)

            for x in serv_bw:
                serv=[]
                #Separa os Campos dos Serviços RT
                # Cód , DescServ, fee, DiasDemo
                serv = x.split('*')

                doc={  
                    "plataforma":"WB",
                    "cod":serv[0],
                    "desc":serv[1],
                    "fee":serv[2],
                    "demo":serv[3]
                }
            
                rt.append(doc)

    else:
        serv_bpro = servs_rt[0].split(';')
        #print('serv_bpro: {}'.format(serv_bpro))
        if ws.cell(row=row, column=2).value != "BMF":
            for x in serv_bpro:
                serv=[]
                #Separa os Campos
                # Cód , DescServ, Fee, DiasDemo
                serv = x.split('*')

                serv_rt={  
                    "plataforma":["BPRO", "BPRO WEB", "BAGRO", "BAGRO WEB", "TN"],
                    "cod":serv[0],
                    "desc":serv[1],
                    "fee":serv[2],
                    "demo":serv[3]
                }
            
                rt.append(serv_rt)

    post =  {
        "mercadoria": ws.cell(row=row, column=1).value,
        "fonte":ws.cell(row=row, column=2).value,
        "mercado":ws.cell(row=row, column=3).value,
        "desc_papel":ws.cell(row=row, column=4).value,
        "codbolsa":ws.cell(row=row, column=5).value,
        "codbroad":ws.cell(row=row, column=6).value,
        "pag_perm":ws.cell(row=row, column=10).value,
        "tp_instr":ws.cell(row=row, column=7).value,
        "serv":{
            "rt":rt,
            "delay":ws.cell(row=row, column=9).value,
            } 
        }

        #print(post)
    #coll.insert_one(post).insertd_id
    many_post.append(post)
    row=row+1

coll.insert_many(many_post)

'''
        if ws.cell(row=row, column=2).value == "BMF":
            
            for x in serv_bpro:
                serv=[]
                #Separa os Campos dos Serviços RT
                # Cód , DescServ, NProf, Prof, DiasDemo
                #print("x: {}".format(x))
                serv = x.split('*')
                print('serv: {}'.format(serv))
                doc={  
                    "plataforma":["BPRO", "BPRO WEB", "BAGRO", "BAGRO WEB", "TN"],
                    "cod":serv[0],
                    "desc":serv[1],
                    "fee":{
                        "nprof":serv[2],
                        "prof":serv[3]
                        },
                    "demo":serv[4]
                }
            
                rt.append(doc)
'''            
        
    


'''


post =  {
    "mercadoria": "Café",
    "fonte":"BMF",
    "mercado":"Futuro",
    "desc_papel":"Café Arábica Rolagem",
    "codbolsa":"CR1",
    "codbroad":"CR1",
    "pag_perm":"",
    "serv":{
        "rt":[
            {   
                "plataforma":["BPRO", "BPRO WEB", "BAGRO", "BAGRO WEB", "TN"],
                "cod":"",
                "desc":"",
                "fee":{
                    "prof":000,
                    "nprof":000
                    },
                "demo":""
            }
            ],
        "delay":""
        } 
    },

serv_rt_bmf_commodities={  
                "plataforma":["BPRO", "BPRO WEB", "BAGRO", "BAGRO WEB", "TN"],
                "cod":"",
                "desc":"",
                "fee":{
                    "prof":"",
                    "nprof":""
                    },
                "demo":""
            ]
'''

