1.kubectl logs / describe / apply / delete 命令的功能
- kubectl logs: view container logs for debugging
- kubectl describe: 
  - retrieve extra information about a resources
  - needs a resource type and (optionally) a resource name
- kubectl apply: Apply a configuration change to a resource from a file or stdin
- kubectl delete: can delete resources across multiple namespaces

https://minikube.sigs.k8s.io/docs/start/

4.使用 kubectl get查看本地运行的所有pod，deployment，service，使用kubectl describe查看pod，deployment的详细信息
- kubectl get pod
- kubectl get deployment
- kubectl get service
- kubectl describe pod
- kubectl describe services balanced
- kubectl describe deployment balanced

6.使用 kubectl port-forward 命令将本地请求直接转发到 pod
kubectl port-forward service/hello-minikube 7080:8080
http://localhost:7080/


minikube config set memory 16384


简单描述 Pod, Node, Deployment, Service, Ingress, ReplicaSet, Namespace 概念
- Pod: Pods are the smallest deployable units of computing that you can create and manage in Kubernetes.
A Pod (as in a pod of whales or pea pod) is a group of one or more containers, with shared storage and network resources,
and a specification for how to run the containers.           
- Node: Node是Pod真正运行的主机，可以物理机，也可以是虚拟机。
为了管理Pod，每个Node节点上至少要运行container runtime（比如docker或者rkt）、kubelet和kube-proxy服务。
- Deployment: A Deployment provides declarative updates for Pods and ReplicaSets.
- Service: Kubernete Service 是一个定义了一组Pod的策略的抽象
- Ingress: An API object that manages external access to the services in a cluster, typically HTTP.
Ingress may provide load balancing, SSL termination and name-based virtual hosting.
          
- ReplicaSet
- Namespace
