
const dotenv = require('dotenv');
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });

const logger = require('./src/utils/logger.cjs');
const hostname = process.env.HOSTNAME
const port = process.env.PORT

const { createServer } = require('node:http');
const app = require('./src/app.cjs');


const server = createServer(app);
server.listen(port, hostname, () => {
   logger.info(`Server is 🏃running on http://${hostname}:${port}/`);
});