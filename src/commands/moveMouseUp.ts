import { mouse, up } from '@nut-tree/nut-js';
import { CommandHandler } from '../types/CommandHandler';
import { easingFunction } from '../utils/easingFunction';

const moveMouseUp: CommandHandler = async (_name: string, args: string[]): Promise<void> => {
    const distanceInPx = parseInt(args[0]!, 10);

    await mouse.move(up(distanceInPx), easingFunction);
};

export { moveMouseUp };
