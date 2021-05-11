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
