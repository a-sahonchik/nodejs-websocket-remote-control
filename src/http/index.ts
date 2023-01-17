import { readFile } from 'node:fs';
import * as path from 'node:path';
import { createServer } from 'node:http';

const httpServer = createServer((req, res) => {
    const dirname = path.resolve(path.dirname(''));
    const filePath = dirname + (req.url === '/' ? '/front/index.html' : `/front${req.url}`);

    readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));

            return;
        }

        res.writeHead(200);
        res.end(data);
    });
});

export { httpServer };
