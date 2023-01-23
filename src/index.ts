import { httpServer } from './http';
import { listenWebSocketServer } from './http/websocketServer';

const HTTP_PORT = 8181;
const WEBSOCKET_PORT = 8080;

const processExitEvents = [
    'SIGINT',
    'SIGTERM',
    'SIGQUIT',
];

// eslint-disable-next-line no-console
console.log(`Start static http server on the ${HTTP_PORT} port!`);

httpServer.listen(HTTP_PORT);

// eslint-disable-next-line no-console
console.log(`Start WebSocket server on the ${WEBSOCKET_PORT} port!`);

const webSocketServer = listenWebSocketServer(WEBSOCKET_PORT);

processExitEvents.forEach((event) => {
    process.on(event, () => {
        webSocketServer.clients.forEach((client) => {
            client.close();
        });

        webSocketServer.close();

        httpServer.close();

        process.exit();
    });
});
