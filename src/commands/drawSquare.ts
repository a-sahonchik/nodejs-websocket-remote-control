import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { CommandHandler } from '../types/CommandHandler';

const drawSquare: CommandHandler = async (name: string, args: string[], webSocket: WebSocket): Promise<void> => {
    const width = parseInt(args[0]!, 10);

    webSocket.send(`${name} ${width}`);

    await mouse.drag(right(width));
    await mouse.drag(down(width));
    await mouse.drag(left(width));
    await mouse.drag(up(width));
};

export { drawSquare };
