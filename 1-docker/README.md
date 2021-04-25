- Getting started on docker hub
   - docker tag getting-started jiaoqiqi/getting-started
   -  docker push jiaoqiqi/getting-started
   - Could play it here: https://labs.play-with-docker.com/ with `docker run -dp 3000:3000 jiaoqiqi/getting-started`


- Node Docker
  - Run： docker run -d -p 8000:8000 node-docker
  - Create a post request
  `curl --request POST \
     --url http://localhost:8000/test \
     --header 'content-type: application/json' \
     --data '{"msg": "testing"}'
   {"code":"success","payload":[{"msg":"testing","id":"dc0e2c2b-793d-433c-8645-b3a553ea26de","createDate":"2021-01-01T17:36:09.897Z"}]}`
