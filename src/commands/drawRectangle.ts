import {
    Button,
    mouse,
    Point,
    straightTo,
} from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { CommandHandler } from '../types/CommandHandler';
import { easingFunction } from '../utils/easingFunction';

const drawRectangle: CommandHandler = async (name: string, args: string[], webSocket: WebSocket): Promise<void> => {
    const currentPointerPosition = await mouse.getPosition();
    const width = parseInt(args[0]!, 10);
    const height = parseInt(args[1]!, 10);

    webSocket.send(`${name} ${width} ${height}`);

    const lowerRightPoint = {
        x: currentPointerPosition.x + (width / 2),
        y: currentPointerPosition.y + height,
    };

    const lowerLeftPoint = {
        x: currentPointerPosition.x - (width / 2),
        y: currentPointerPosition.y + height,
    };

    await mouse.pressButton(Button.LEFT);

    await mouse.move(straightTo(new Point(lowerRightPoint.x, lowerRightPoint.y)), easingFunction);
    await mouse.move(straightTo(new Point(lowerLeftPoint.x, lowerLeftPoint.y)), easingFunction);
    await mouse.move(straightTo(new Point(currentPointerPosition.x, currentPointerPosition.y)), easingFunction);

    await mouse.releaseButton(Button.LEFT);
};

export { drawRectangle };
