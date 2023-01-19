import { Command } from '../types/Command';
import { mousePosition } from './mousePosition';
import { drawCircle } from './drawCircle';
import { drawRectangle } from './drawRectangle';
import { printScreen } from './printScreen';
import { commands } from '../utils/commands';
import { moveMouse } from './moveMouse';
import { CommandNotFoundError } from '../errors/CommandNotFoundError';

class Commander {
    private readonly commands: Command[];

    constructor(commands: Command[]) {
        this.commands = commands;
    }

    public getCommand(commandName: string): Command {
        const command = this.commands.find((c) => c.name === commandName);

        if (command === undefined) {
            throw new CommandNotFoundError(commandName);
        }

        return command;
    }

    public setCommandArgs(commandName: string, args: string[]): void {
        const command = this.getCommand(commandName);

        command.args = args;
    }
}

const commander = new Commander([
    {
        name: commands.mouseUp,
        args: [],
        handler: moveMouse,
    },
    {
        name: commands.mouseDown,
        args: [],
        handler: moveMouse,
    },
    {
        name: commands.mouseLeft,
        args: [],
        handler: moveMouse,
    },
    {
        name: commands.mouseRight,
        args: [],
        handler: moveMouse,
    },
    {
        name: commands.mousePosition,
        args: [],
        handler: mousePosition,
    },
    {
        name: commands.drawCircle,
        args: [],
        handler: drawCircle,
    },
    {
        name: commands.drawRectangle,
        args: [],
        handler: drawRectangle,
    },
    {
        name: commands.drawSquare,
        args: [],
        handler: drawRectangle,
    },
    {
        name: commands.printScreen,
        args: [],
        handler: printScreen,
    },
]);

export { commander };
