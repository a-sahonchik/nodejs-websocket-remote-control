import { mouse, right } from '@nut-tree/nut-js';
import { CommandHandler } from '../types/CommandHandler';
import { easingFunction } from '../utils/easingFunction';

const moveMouseRight: CommandHandler = async (_name: string, args: string[]): Promise<void> => {
    const distanceInPx = parseInt(args[0]!, 10);

    await mouse.move(right(distanceInPx), easingFunction);
};

export { moveMouseRight };
