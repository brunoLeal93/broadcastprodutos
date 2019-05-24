FROM python:alpine

MAINTAINER Bruno Leal

#RUN apt-get update \
#	&& apt-get install -y build-essential \
#	&& apt-get install -y python3 \
#	&& apt-get install -y python3-pip \
#	&& apt-get install -y python3-dev \
	#&& apt-get install -y build-essential \
	#&& apt-get install -y vim \
#	&& apt-get clean \
#	&& apt-get autoremove

# Copy over and install the requirements
WORKDIR /broadcastprodutos
COPY . /broadcastprodutos 
#WORKDIR /broadcastprodutos 

RUN pip3 install -r requirements.txt

EXPOSE 5000
ENTRYPOINT ["python3","/broadcastprodutos/run.py"]

# CMD ["/bin/bash"]
#CMD  ["run.py"]
# The commands below get apache running but there are issues accessing it online
# The port is only available if you go to another port first
# ENTRYPOINT ["/sbin/init"]
# CMD ["/usr/sbin/apache2ctl"]
