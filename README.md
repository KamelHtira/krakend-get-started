# KraKenD API Gateway
### Auth/Signer
<p align="center"> <img src="./auth signer.jpg"> </p>
<br>

### Auth/Validator
<p align="center"> <img src="./auth validator.jpg"> </p>
<br>


## Run the demo project 
### INSTALL
    npm install 
### RUN
    npm start 

## Run KrakenD server 
### BUILD
    docker build . -t api-gateway-v1

### RUN
    docker run -it -p "8080:8080" api-gateway-v1

`Make sure to replace 172.18.0.1 with your IP address since docker container does not have access to "localhost" servers.`