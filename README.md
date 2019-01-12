# MotorFinance
MotorFinance_REST Service

Prerequisites:

Install mongoDB in the local machine
Install nodeJs

Download the repository 

execute npm -i on the repository
start the application npm run start

REST URLS:

To Insert a record in to the MongoDB

POST: http://localhost:3000/create

Sample Request: {"dealerNo":"1234568","goodsCode":"56","scheme":"LT","dor":"45","cash":"6789","term":"12","cap":"5","depo":"MTL","exchange":"NASDAC","plan":"LP","apr":"67","others":"No recommandations"}
	

Fetch All available records

GET: http://localhost:3000/

Retrieve the matched recordd

first argument is "dealerNo" and second argument is "goodsCode"

http://localhost:3000/retrieve/1234568/56

Please replace the sever hostname and port number
