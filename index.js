const http = require("http");
const server = http.createServer((request, response) => {
    switch(request.url){
        case '/perro':
        response.write("woof");
        response.end();
        break;
        case '/home':
        response.write("Saca las chelas y los perches");
        response.end();
        break;
        case '/':
        response.write("Bienvenido al futuro y los perches");
        response.end();
        break;
        default:
        response.write("404 not found!")
        response.end()

    }
});
server.listen(3000);
