import smtplib
from email.mime.text import MIMEText

class sendEmail:

    # conexão com os servidores do google
    smtp_ssl_host = 'smtp.gmail.com'
    smtp_ssl_port = 465
    # username ou email para logar no servidor
    username = 'agenciaestado7@gmail.com'
    password = 'Agencia02@2015'

    from_addr = username
    to_addrs = ['bruno.pereira@estadao.com', 'diego.braga@estadao.com', 'eder.tujioka@estadao.com']
    
    def send(self, solicitante, pergunta):
        content = "Solicitante: "+solicitante+"\n\n"+"Pergunta: "+pergunta
        # a biblioteca email possuí vários templates
        # para diferentes formatos de mensagem
        # neste caso usaremos MIMEText para enviar
        # somente texto
        message = MIMEText(content)
        message['subject'] = 'Nova Pergunta no Site'
        message['from'] = self.from_addr
        message['to'] = ', '.join(self.to_addrs)

        # conectaremos de forma segura usando SSL
        server = smtplib.SMTP_SSL(self.smtp_ssl_host, self.smtp_ssl_port)
        # para interagir com um servidor externo precisaremos
        # fazer login nele
        server.login(self.username, self.password)
        server.sendmail(self.from_addr, self.to_addrs, message.as_string())
        server.quit()