import { Duplex } from 'stream';

type CommandHandler = (name: string, args: string[], webSocket: Duplex) => void;

export { CommandHandler };
