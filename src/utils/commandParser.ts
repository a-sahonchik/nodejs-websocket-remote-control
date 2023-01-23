import { Command } from '../types/Command';
import { commander } from '../commands/Commander';

const getCommandFromInput = async (commandInput: string): Promise<Command> => {
    const [commandName, ...args] = commandInput.split(' ');

    if (commandName === undefined) {
        throw new Error('Command name should be defined.');
    }

    const command = commander.getCommand(commandName);

    commander.setCommandArgs(commandName, args);

    return command;
};

export { getCommandFromInput };
