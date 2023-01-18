import { mouse } from '@nut-tree/nut-js';
import { Duplex } from 'stream';
import { CommandHandler } from '../types/CommandHandler';

const mousePosition: CommandHandler = async (name: string, _args: string[], webSocket: Duplex): Promise<void> => {
    const position = await mouse.getPosition();

    webSocket.write(`${name} ${position.x},${position.y}`);
};

export { mousePosition };
