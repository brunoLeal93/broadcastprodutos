from openpyxl import load_workbook

wb2 = load_workbook('D:\Mercados\Cotação\Base Cotacao.xlsx')

#print(wb2.sheetnames)

ws= wb2['Derivativos']

#print(ws['A3'].value)

#print(ws.cell(row=4, column=8).value)


teste = ws.cell(row=4, column=8).value.split('/') # Separa os Serviços
print(len(teste))

row=4
col=1

vet_serv_rt_bmf=[]

while ws.cell(row=row, column=1).value != None:
    # Separa as Plataformas
    # servs_rt[0] == "plataforma":["BPRO", "BPRO WEB", "BAGRO", "BAGRO WEB", "TN"],
    # servs_rt[1] == "plataforma": WB
    servs_rt = ws.cell(row=4, column=8).value.split('/')
    
    # Separa os Serviços das Plataformas
    serv1_rt = servs_rt[0].split(';')

    if ws.cell(row=row, column=1).value == "BMF" and ws.cell(row=row, column=7).value == "Commodities":
        for x in serv_rt1:
            serv=[]
            #Separa os Campos
            # Cód , DescServ, NProf, Prof, DiasDemo
            serv = x.split['--']

            serv_rt_bmf_commodities={  
                "plataforma":["BPRO", "BPRO WEB", "BAGRO", "BAGRO WEB", "TN"],
                "cod":serv[0],
                "desc":serv[1],
                "fee":{
                    "nprof":serv[2],
                    "prof":serv[3]
                    },
                "demo":serv[4]
            }
        
            vet_serv_rt_bmf.append(serv_rt_bmf_commodities)

    if ws.cell(row=row, column=1).value == "BMF" and ws.cell(row=row, column=7).value != "Commodities":

post =  {
    "mercadoria": "Café",
    "fonte":"BMF",
    "mercado":"Futuro",
    "desc_papel":"Café Arábica Rolagem",
    "codbolsa":"CR1",
    "codbroad":"CR1",
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


