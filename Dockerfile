FROM python:alpine

MAINTAINER Bruno Leal

WORKDIR /broadcastprodutos
COPY . /broadcastprodutos 


RUN pip3 install -r requirements.txt

EXPOSE 5000
ENTRYPOINT ["python3","/broadcastprodutos/run.py"]

