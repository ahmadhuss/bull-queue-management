# Bull Queue Management
A queue management using Node.js with Bull and Redis DB server

***Start the Docker compose file containers:***
```
docker compose up
```

***Stop all the Docker compose file containers:***
```
docker compose down
```

### Out of context Docker commands snippets:

***Build Docker image:***
```
docker build -t node-webapp .
```

***Show Docker images:***
```
docker images
```

***Run Docker image inside container:***
```
docker run -d -p 3000:3000 node-webapp
```

***Check container status:***
```
docker ps
```

***Check stop containers:***
```
docker ps -a
```

***Remove the  Docker container:***
```
docker rm "containerId"
```


***Check logs of Docker container:***
```
docker logs "containerId"
```

***Access Shell of Docker container:***
```
docker exec -it "containerId" /bin/bash
```

***Check Docker container current working directory:***
```
pwd
```

***List Docker container current working directory files:***
```
ls
```

### Docker compose command snippets:

***Start the Docker compose file containers:***
```
docker compose up
```

It will show all the output in the console.

***Start the Docker compose file containers with detach mode:***
```
docker compose up -d
```
It will not show any output in the console.

***Build the Docker compose file containers again:***
```
docker compose build
```


***Stop all the Docker compose file containers:***
```
docker compose down
```