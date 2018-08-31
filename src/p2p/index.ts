import * as WebSocket from 'ws';
import { Server } from 'ws';

enum MessageType {
  TYPE_UNKNOW = 0,
  SEND_TO_USR = 1,
  SEND_TO_GROUP = 2,
  RESPONSE_FROM_USR = 3,
  RESPONSE_FROM_GROUP = 4,
  QUERY_ALL = 5,
  RESPONSE_FROM_ALL = 6
}

class Message {
  public type: MessageType = MessageType.TYPE_UNKNOW;
  public data: string = '';
}

export const initP2PServer = (p2pPort: number) => {
  const server: Server = new WebSocket.Server({ port: p2pPort });
  server.on('connection', (ws: WebSocket) => {
    initConnection(ws);
  });
  console.log('listening websocket p2p port on: ' + p2pPort);
  return server;
};

const initConnection = (ws: WebSocket) => {
  initMessageHandler(ws);
  initErrorHandler(ws);

  // query transactions pool only some time after chain query
  setTimeout(() => {
    write(ws, { type: MessageType.QUERY_ALL, data: 'hello' });
  }, 500);
};

const JSONToObject = <T>(data: string): T => {
  try {
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const initMessageHandler = (ws: WebSocket) => {
  ws.on('message', (data: string) => {

    try {
      const message: Message = JSONToObject<Message>(data);
      console.log('Received message: %s', JSON.stringify(message));
    } catch (e) {
      console.log(e);
    }
  });
};
const initErrorHandler = (ws: WebSocket) => {
  const closeConnection = (myWs: WebSocket) => {
    console.log('connection failed to peer: ' + myWs.url);
  };
  ws.on('close', () => closeConnection(ws));
  ws.on('error', () => closeConnection(ws));
};
const write = (ws: WebSocket, message: Message): void => ws.send(JSON.stringify(message));
