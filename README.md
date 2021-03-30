## Mirador 3 Client

### Build

```
npm install
npm run build
```

### Develop

*requires build*

```
npm start
```

http://localhost:4200

### Docker

*requires build*

```
docker build -t mirador .
docker run -p 8080:80 mirador
```

http://localhost:8080
