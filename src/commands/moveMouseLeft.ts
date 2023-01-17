import { left, mouse } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { CommandHandler } from '../types/CommandHandler';

const moveMouseLeft: CommandHandler = async (name: string, args: string[], webSocket: WebSocket): Promise<void> => {
    const distanceInPx = parseInt(args[0]!, 10);

    await mouse.move(left(distanceInPx));

    webSocket.send(`${name} ${distanceInPx}`);
};

export { moveMouseLeft };
