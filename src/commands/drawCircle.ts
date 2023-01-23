import { Button, mouse, Point, straightTo } from '@nut-tree/nut-js';
import { CommandHandler } from '../types/CommandHandler';
import { easingFunction } from '../utils/easingFunction';

const NUMBER_OF_CIRCLE_POINTS = 45;

const drawCircle: CommandHandler = async (_name: string, args: string[]): Promise<string> => {
    const radius = parseInt(args[0]!, 10);

    const currentPointerPosition = await mouse.getPosition();

    const centerOfCircle = { x: currentPointerPosition.x, y: currentPointerPosition.y + radius };

    await mouse.pressButton(Button.LEFT);

    for (let n = 0; n <= NUMBER_OF_CIRCLE_POINTS; n += 1) {
        const xn = centerOfCircle.x + radius * Math.sin((2 * Math.PI * n) / NUMBER_OF_CIRCLE_POINTS);
        const yn = centerOfCircle.y - radius * Math.cos((2 * Math.PI * n) / NUMBER_OF_CIRCLE_POINTS);

        await mouse.move(straightTo(new Point(xn, yn)), easingFunction);
    }

    await mouse.releaseButton(Button.LEFT);

    return `Drawn circle with radius ${radius}`;
};

export { drawCircle };
