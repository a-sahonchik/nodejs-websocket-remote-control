import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { CommandHandler } from '../types/CommandHandler';

const drawRectangle: CommandHandler = async (name: string, args: string[], webSocket: WebSocket): Promise<void> => {
    const width = parseInt(args[0]!, 10);
    const height = parseInt(args[1]!, 10);

    webSocket.send(`${name} ${width} ${height}`);

    await mouse.drag(right(width));
    await mouse.drag(down(height));
    await mouse.drag(left(width));
    await mouse.drag(up(height));
};

export { drawRectangle };
