const WebSocket = require('ws');
const logger = require('./utils/logger.cjs');
const { websocketAuth } = require('./middlewares/websocketAuthMiddleware.cjs');

function initWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws, req) => {
    websocketAuth(ws, req, (err) => {
      if (err) {
        logger.error('❌ Unauthorized WebSocket connection attempt');
        ws.close(1008, 'Unauthorized'); // Close with code 1008 (Policy Violation)
        return;
      } else {
        logger.info(
          `✅ WebSocket connection established for user: ${req.user.name}`
        );
        ws.send(`👋 Welcome to WebSocket server ${req.user.name}!`);
      }
    });

    ws.on('message', (msg) => {
      ws.send(`🔁 Echo: ${msg}`);
    });

    ws.on('close', () => {});
  });
}

module.exports = initWebSocket;
