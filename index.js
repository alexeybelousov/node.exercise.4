const ChatApp = require('./chat');
const printMessage = require('./messages');

let webinarChat =  new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat =       new ChatApp('---------vk');

webinarChat
  .on('message', printMessage.ready)
  .on('message', printMessage.common);
facebookChat
  .on('message', printMessage.common);
vkChat
  .setMaxListeners(2)
  .on('message', printMessage.ready)
  .on('message', printMessage.common)
  .on('close', printMessage.common)

// Закрыть вебинар
setTimeout( () => {
  webinarChat.removeListener('message', printMessage.common);
  webinarChat.removeListener('message', printMessage.ready);
}, 30000 );

// Закрыть вконтакте
setTimeout( () => {
  vkChat.emit('close', 'Чат вконтакте закрылся :(');
  vkChat.removeListener('message', printMessage.common);
  vkChat.removeListener('message', printMessage.ready);
}, 10000 );

// Закрыть фейсбук
setTimeout( () => {
  console.log('Закрываю фейсбук, все внимание — вебинару!');
  facebookChat.removeListener('message', printMessage.common);
}, 15000 );
