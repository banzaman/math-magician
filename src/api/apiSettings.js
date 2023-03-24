const API_KEY = 'Kn7D1h/CQr1gZUu23q/XTw==1RpLEemZntzgCodf';
const API_BASE_URL = 'https://api.api-ninjas.com/v1/quotes';
const API_QRY = '?category=';
const API_URL = `${API_BASE_URL}${API_QRY}`;

const HEADERS_LIST = {
  'X-Api-Key': `${API_KEY}`,
  Accept: '*/*',
};

export { API_URL, HEADERS_LIST };
