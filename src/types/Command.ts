import { CommandHandler } from './CommandHandler';

interface Command {
    name: string;
    args: string[];
    handler: CommandHandler;
}

export { Command };
