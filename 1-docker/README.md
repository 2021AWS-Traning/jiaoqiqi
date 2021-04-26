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


##   描述Docker的网络模式以及区别，使用场景？
- bridge: The default network driver. If you don’t specify a driver, this is the type of network you are creating. 
Bridge networks are usually used when your applications run in standalone containers that need to communicate.
  
  Best when you need multiple containers to communicate on the same Docker host.
- host: For standalone containers, remove network isolation between the container and the Docker host, and use the host’s networking directly

  Best when the network stack should not be isolated from the Docker host, but you want other aspects of the container to be isolated.
- overlay: Overlay networks connect multiple Docker daemons together and enable swarm services to communicate with each other. You can also use overlay networks to facilitate communication between a swarm service and a standalone container, or between two standalone containers on different Docker daemons. This strategy removes the need to do OS-level routing between these containers.

  Best when you need containers running on different Docker hosts to communicate, or when multiple applications work together using swarm services.
- macvlan: Macvlan networks allow you to assign a MAC address to a container, making it appear as a physical device on your network. The Docker daemon routes traffic to containers by their MAC addresses. Using the macvlan driver is sometimes the best choice when dealing with legacy applications that expect to be directly connected to the physical network, rather than routed through the Docker host’s network stack

  Best when you are migrating from a VM setup or need your containers to look like physical hosts on your network, each with a unique MAC address.
- none: For this container, disable all networking. Usually used in conjunction with a custom network driver. none is not available for swarm services

- Network Plugins: You can install and use third-party network plugins with Docker,  integrate Docker with specialized network stacks.
