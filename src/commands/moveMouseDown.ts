import { down, mouse } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { CommandHandler } from '../types/CommandHandler';

const moveMouseDown: CommandHandler = async (name: string, args: string[], webSocket: WebSocket): Promise<void> => {
    const distanceInPx = parseInt(args[0]!, 10);

    await mouse.move(down(distanceInPx));

    webSocket.send(`${name} ${distanceInPx}`);
};

export { moveMouseDown };
