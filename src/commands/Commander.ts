import { Command } from '../types/Command';
import { mousePosition } from './mousePosition';
import { drawCircle } from './drawCircle';
import { drawRectangle } from './drawRectangle';
import { printScreen } from './printScreen';
import { commandNames } from '../utils/commandNames';
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
        name: commandNames.mouseUp,
        args: [],
        handler: moveMouse,
    },
    {
        name: commandNames.mouseDown,
        args: [],
        handler: moveMouse,
    },
    {
        name: commandNames.mouseLeft,
        args: [],
        handler: moveMouse,
    },
    {
        name: commandNames.mouseRight,
        args: [],
        handler: moveMouse,
    },
    {
        name: commandNames.mousePosition,
        args: [],
        handler: mousePosition,
    },
    {
        name: commandNames.drawCircle,
        args: [],
        handler: drawCircle,
    },
    {
        name: commandNames.drawRectangle,
        args: [],
        handler: drawRectangle,
    },
    {
        name: commandNames.drawSquare,
        args: [],
        handler: drawRectangle,
    },
    {
        name: commandNames.printScreen,
        args: [],
        handler: printScreen,
    },
]);

export { commander };
