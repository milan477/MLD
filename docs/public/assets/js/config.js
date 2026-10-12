// Local previews use the local chat proxy. Set a deployed worker URL for hosted chat.
window.CHAT_API = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)
  ? 'http://localhost:8787'
  : '';
