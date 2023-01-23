import { CommandHandler } from './CommandHandler';

type Command = {
    name: string;
    args: string[];
    handler: CommandHandler;
};

export { Command };
