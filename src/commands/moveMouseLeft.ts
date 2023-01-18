import { left, mouse } from '@nut-tree/nut-js';
import { CommandHandler } from '../types/CommandHandler';
import { easingFunction } from '../utils/easingFunction';

const moveMouseLeft: CommandHandler = async (_name: string, args: string[]): Promise<void> => {
    const distanceInPx = parseInt(args[0]!, 10);

    await mouse.move(left(distanceInPx), easingFunction);
};

export { moveMouseLeft };
