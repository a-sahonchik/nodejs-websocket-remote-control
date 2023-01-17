import { Button, down, left, mouse, right, up } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { CommandHandler } from '../types/CommandHandler';
import { easingFunction } from '../utils/easingFunction';

const drawRectangle: CommandHandler = async (name: string, args: string[], webSocket: WebSocket): Promise<void> => {
    const width = parseInt(args[0]!, 10);
    const height = parseInt(args[1]!, 10);

    webSocket.send(`${name} ${width} ${height}`);

    await mouse.pressButton(Button.LEFT);

    await mouse.move(right(width), easingFunction);
    await mouse.move(down(height), easingFunction);
    await mouse.move(left(width), easingFunction);
    await mouse.move(up(height), easingFunction);

    await mouse.releaseButton(Button.LEFT);
};

export { drawRectangle };
