FROM devopsfaith/krakend:2.0.5
COPY krakend.json /etc/krakend/krakend.json
COPY symmetric.json /etc/krakend/symmetric.json