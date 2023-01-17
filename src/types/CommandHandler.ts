import { WebSocket } from 'ws';

type CommandHandler = (name: string, args: string[], webSocket: WebSocket) => void;

export { CommandHandler };
