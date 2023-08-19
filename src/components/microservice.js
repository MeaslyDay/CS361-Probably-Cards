const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

let drawn_cards = []

wss.on('connection', (ws) => {
  console.log('WebSocket connected');

  ws.on('message', (message) => {
    if(message.startsWith("UNDO")){
      drawn_cards.pop();
      ws.send(`${drawn_cards}`);
    } else if(message.startsWith("RESET")){
      drawn_cards = [];
      ws.send(`${drawn_cards}`)
    } else {
      drawn_cards.push(message)
      if(drawn_cards.length != 0){
        ws.send(`${drawn_cards}`);
      }      
    }
  });

  ws.on('close', () => {
    console.log('WebSocket disconnected');
  });
});
