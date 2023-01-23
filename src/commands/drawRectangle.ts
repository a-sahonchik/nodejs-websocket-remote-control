import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { CommandHandler } from '../types/CommandHandler';

const drawRectangle: CommandHandler = async (_name: string, args: string[]): Promise<string> => {
    const width = parseInt(args[0]!, 10);
    const height = parseInt(args[1]!, 10);

    await mouse.drag(right(width));
    await mouse.drag(down(height));
    await mouse.drag(left(width));
    await mouse.drag(up(height));

    return `Drawn rectangle with width ${width} and height ${height}`;
};

export { drawRectangle };
