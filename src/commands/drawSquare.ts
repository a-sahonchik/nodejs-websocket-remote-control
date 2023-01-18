import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { CommandHandler } from '../types/CommandHandler';

const drawSquare: CommandHandler = async (_name: string, args: string[]): Promise<void> => {
    const width = parseInt(args[0]!, 10);

    await mouse.drag(right(width));
    await mouse.drag(down(width));
    await mouse.drag(left(width));
    await mouse.drag(up(width));
};

export { drawSquare };
