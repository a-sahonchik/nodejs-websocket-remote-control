import { down, mouse } from '@nut-tree/nut-js';
import { CommandHandler } from '../types/CommandHandler';
import { easingFunction } from '../utils/easingFunction';

const moveMouseDown: CommandHandler = async (_name: string, args: string[]): Promise<void> => {
    const distanceInPx = parseInt(args[0]!, 10);

    await mouse.move(down(distanceInPx), easingFunction);
};

export { moveMouseDown };
