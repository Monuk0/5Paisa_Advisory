const WebSocket = require('ws');
const logger = require('./utils/logger.cjs')

function initWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    logger.info('🔌 WebSocket client connected');

    ws.on('message', (msg) => {
      ws.send(`🔁 Echo: ${msg}`);
    });

    ws.on('close', () => {
      console.log('❌ WebSocket client disconnected');
    });

    ws.send('👋 Welcome to WebSocket server!');
  });
}

module.exports = initWebSocket;