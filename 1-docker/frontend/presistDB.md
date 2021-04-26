 Create a volume
 `docker volume create todo-db`
 
 
 Start app container
 `docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started`
