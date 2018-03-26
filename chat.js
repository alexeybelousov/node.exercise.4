const EventEmitter = require('events');

module.exports = class ChatApp extends EventEmitter {
  /**
   * @param {String} title
   */
  constructor(title) {
    super();

    this.title = title;

    // Посылать каждую секунду сообщение
    setInterval( () => {
      this.emit('message', `${this.title}: ping-pong`);
    }, 1000);
  }

  close(message) {
    this.emit('close', 'message');
  }
}