import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { CommandHandler } from '../types/CommandHandler';
import { commandNames } from '../utils/commandNames';
import { easingFunction } from '../utils/easingFunction';
import { NoHandlerError } from '../errors/NoHandlerError';

const moveDirectionByCommandName = {
    [commandNames.mouseUp]: up,
    [commandNames.mouseDown]: down,
    [commandNames.mouseLeft]: left,
    [commandNames.mouseRight]: right,
};

const moveMouse: CommandHandler = async (name: string, args: string[]): Promise<string> => {
    const distanceInPx = parseInt(args[0]!, 10);

    const direction = moveDirectionByCommandName[name];

    if (direction === undefined) {
        throw new NoHandlerError(name);
    }

    await mouse.move(direction(distanceInPx), easingFunction);

    return `Mouse moved ${direction.name} by ${distanceInPx} px`;
};

export { moveMouse };
