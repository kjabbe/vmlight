FROM ubuntu:latest
RUN useradd -ms /bin/bash netlight

RUN apt-get update -y --fix-missing
RUN apt-get install -y python3 python3-pip python3-dev build-essential wget vim

RUN pip3 install ez_setup

COPY . /app
WORKDIR /app
RUN ./getExcel.sh
RUN touch fasit.json
RUN chown -R netlight:1000 /app
USER netlight

RUN pip3 install -r requirements.txt

ENTRYPOINT ["python3"]
CMD ["app.py"]
