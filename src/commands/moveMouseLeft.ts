import { left, mouse } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { CommandHandler } from '../types/CommandHandler';
import { easingFunction } from '../utils/easingFunction';

const moveMouseLeft: CommandHandler = async (name: string, args: string[], webSocket: WebSocket): Promise<void> => {
    const distanceInPx = parseInt(args[0]!, 10);

    webSocket.send(`${name} ${distanceInPx}`);

    await mouse.move(left(distanceInPx), easingFunction);
};

export { moveMouseLeft };
