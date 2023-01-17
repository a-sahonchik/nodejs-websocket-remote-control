import { Command } from '../types/Command';
import { moveMouseUp } from './moveMouseUp';
import { moveMouseDown } from './moveMouseDown';
import { moveMouseLeft } from './moveMouseLeft';
import { moveMouseRight } from './moveMouseRight';
import { mousePosition } from './mousePosition';
import { drawCircle } from './drawCircle';
import { drawRectangle } from './drawRectangle';

class Commander {
    private readonly commands: Command[];

    constructor(commands: Command[]) {
        this.commands = commands;
    }

    public getCommands(): Command[] {
        return this.commands;
    }

    public getCommand(commandName: string): Command | undefined {
        const command = this.commands.find((c) => c.name === commandName);

        return command;
    }

    public setCommandArgs(commandName: string, args: string[]): void {
        const command = this.getCommand(commandName);

        if (command !== undefined) {
            command.args = args;
        }
    }
}

const commander = new Commander([
    {
        name: 'mouse_up',
        args: [],
        handler: moveMouseUp,
    },
    {
        name: 'mouse_down',
        args: [],
        handler: moveMouseDown,
    },
    {
        name: 'mouse_left',
        args: [],
        handler: moveMouseLeft,
    },
    {
        name: 'mouse_right',
        args: [],
        handler: moveMouseRight,
    },
    {
        name: 'mouse_position',
        args: [],
        handler: mousePosition,
    },
    {
        name: 'draw_circle',
        args: [],
        handler: drawCircle,
    },
    {
        name: 'draw_rectangle',
        args: [],
        handler: drawRectangle,
    },
]);

export { commander };
