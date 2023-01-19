import { createWebSocketStream, WebSocket, WebSocketServer } from 'ws';
import { getCommandFromInput } from '../utils/commandParser';

const listenWebSocketServer = (port: number) => {
    const server = new WebSocketServer({ port });

    server.on('connection', async (webSocket: WebSocket) => {
        const webSocketStream = createWebSocketStream(webSocket, {
            decodeStrings: false,
            encoding: 'utf8',
        });

        webSocketStream.on('data', async (data: string) => {
            try {
                // eslint-disable-next-line no-console
                console.log(`received command: ${data}`);

                const command = await getCommandFromInput(data);

                const result = await command.handler(command.name, command.args, webSocketStream);

                // eslint-disable-next-line no-console
                console.log(`command result: ${result}`);
            } catch (error: any) {
                // eslint-disable-next-line no-console
                console.log(`ERROR: ${error.message}`);
            }
        });
    });
};

export { listenWebSocketServer };
