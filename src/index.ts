import { httpServer } from './http';
// import { mouse } from "@nut-tree/nut-js";

const HTTP_PORT = 8181;

// eslint-disable-next-line no-console
console.log(`Start static http server on the ${HTTP_PORT} port!`);

httpServer.listen(HTTP_PORT);
