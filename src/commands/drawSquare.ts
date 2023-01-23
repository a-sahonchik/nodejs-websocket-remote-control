import { Duplex } from 'stream';
import { CommandHandler } from '../types/CommandHandler';
import { drawRectangle } from './drawRectangle';

const drawSquare: CommandHandler = async (name: string, args: string[], webSocket: Duplex): Promise<string> => {
    const width = args[0]!;

    await drawRectangle(name, [width, width], webSocket);

    return `Drawn square with width ${width}`;
};

export { drawSquare };
