To run the project:
    > pull the code.
    > use docker-compose up and the server will start at 0.0.0.0:8000

Endpoints: 
    > http://0.0.0.0:8000/api/v1/url/shorten -->
        takes a JSON body as input with a property named url and returns a JSON object with shortened urlID.
    > http://0.0.0.0:8000/api/v1/url/get/id -->
        takes a JSON body as input with a property named id which consists of the shortened url id and returns the url.

p.s. The server communicates with a redis server and the configuration is done according to the gateway for a redis server running on docker. Please do docker-compose up to run the project seamlessly.