class CommandNotFoundError extends Error {
    constructor(commandName: string) {
        super(`Command ${commandName} does not exist.`);
        this.name = 'CommandNotFoundError';
    }
}

export { CommandNotFoundError };
