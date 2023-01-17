import { mouse } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { CommandHandler } from '../types/CommandHandler';

const mousePosition: CommandHandler = async (name: string, _args: string[], webSocket: WebSocket): Promise<void> => {
    const position = await mouse.getPosition();

    webSocket.send(`${name} ${position.x},${position.y}`);
};

export { mousePosition };
