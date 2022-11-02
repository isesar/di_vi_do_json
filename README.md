Hello

Here is the my solution for config challenge from Divido.

It fetches locally config files, and it has 2 routes
1. POST request, since body is needed. In the body put:
{
    "names":[
        ""
    ]
}
In the array put names of files (from fixtures folder). You can put just names ("config","config.local") without .json.
It should merge found jsons and return them in the response. Route is "http://localhost:5000/merge".

2. GET request, it has two params in the request. First one is "name", that is the name of the json file from fixtures folder.
Second param is property of the json, named "path" in the route, which we want to return as result.


To start project:
1. npm install
2. npm run build
3. npm run dev

To see tests
1. npm run test

To dockerize solution:
1. docker build -t divido
2. docker run -p 8001:5000 divido

When using docker, change port in the route to 8001
