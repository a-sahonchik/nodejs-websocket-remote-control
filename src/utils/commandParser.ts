import { Command } from '../types/Command';
import { commander } from '../commands/Commander';

const getCommandFromInput = async (commandInput: string): Promise<Command> => {
    const [commandName, ...args] = commandInput.split(' ');

    if (commandName === undefined) {
        throw new Error('Command name should be defined.');
    }

    const command = commander.getCommand(commandName);

    if (command === undefined) {
        throw new Error(`Command ${commandName} does not exist.`);
    }

    commander.setCommandArgs(commandName, args);

    return command;
};

export { getCommandFromInput };
