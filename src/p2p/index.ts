import * as WebSocket from 'websocket';

enum MessageType {
  TYPE_UNKNOW = 0,
  SEND_TO_USR = 1,
  SEND_TO_GROUP = 2,
  RESPONSE_FROM_USR = 3,
  RESPONSE_FROM_GROUP = 4,
  QUERY_ALL = 5,
  RESPONSE_FROM_ALL = 6
}

const Client = WebSocket.w3cwebsocket;

class Message {
  public type: MessageType = MessageType.TYPE_UNKNOW;
  public data: string = '';
}
console.log('websocket server', WebSocket);

export const initP2PServer = (p2pPort: number) => {
  const ws: WebSocket.w3cwebsocket = new Client(`ws://localhost:${p2pPort}`, 'echo-protocol');
  ws.onopen = function() {
    initConnection(ws);
  };
  console.log('listening websocket p2p port on: ' + p2pPort);
};

const initConnection = (ws: WebSocket.w3cwebsocket) => {
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

const initMessageHandler = (ws: WebSocket.w3cwebsocket) => {
  ws.onmessage = function (data: WebSocket.IMessage) {
    try {
      const message: Message = JSONToObject<Message>(data.utf8Data || '');
      console.log('Received message: %s', JSON.stringify(message));
    } catch (e) {
      console.log(e);
    }
  };
};
const initErrorHandler = (ws: WebSocket.w3cwebsocket) => {
  ws.onclose = function() {
    console.log('connection failed to peer: ' + ws.url);
  };
  ws.onerror = function() {
    console.log('connection failed to peer: ' + ws.url);
  };
};
const write = (ws: WebSocket.w3cwebsocket, message: Message): void => ws.send(JSON.stringify(message));
