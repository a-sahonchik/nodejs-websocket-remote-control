import { WebSocket, WebSocketServer } from 'ws';
import { getCommandFromInput } from '../utils/commandParser';

const listenWebSocketServer = (port: number) => {
    const server = new WebSocketServer({ port });

    server.on('connection', async (webSocket: WebSocket) => {
        webSocket.on('message', async (data: Buffer) => {
            const commandInput = data.toString();

            const command = await getCommandFromInput(commandInput);

            await command.handler(command.name, command.args, webSocket);
        });
    });
};

export { listenWebSocketServer };
