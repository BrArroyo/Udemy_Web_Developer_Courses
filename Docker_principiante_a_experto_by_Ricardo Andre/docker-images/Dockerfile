FROM nginx

LABEL version="1.0"
LABEL description="This is a custom image for the beryllium project"

RUN yum install httpd -y

WORKDIR /var/www/html

COPY beryllium .

ENV contenido prueba

RUN echo "$contenido" > ./prueba.html

EXPOSE 8080

RUN useradd ricardo

USER ricardo

VOLUME /var/www/html

CMD apachectl -DFOREGROUND

