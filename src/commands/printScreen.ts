import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { WebSocket } from 'ws';
import { CommandHandler } from '../types/CommandHandler';

const SCREENSHOT_WIDTH = 200;
const SCREENSHOT_HEIGHT = 200;

const printScreen: CommandHandler = async (name: string, _args: string[], webSocket: WebSocket): Promise<void> => {
    const { x: currentX, y: currentY } = await mouse.getPosition();

    const invertedImage = await screen.grabRegion(
        new Region(
            Math.max(0, currentX - SCREENSHOT_WIDTH / 2),
            Math.max(0, currentY - SCREENSHOT_HEIGHT / 2),
            SCREENSHOT_WIDTH,
            SCREENSHOT_HEIGHT,
        ),
    );

    const rgbImage = await invertedImage.toRGB();

    const jimpImage = new Jimp({
        data: rgbImage.data,
        width: rgbImage.width,
        height: rgbImage.height,
    });

    const buffer = await jimpImage.getBufferAsync(Jimp.MIME_PNG);

    webSocket.send(`${name} ${buffer.toString('base64')}`)
};

export { printScreen };
