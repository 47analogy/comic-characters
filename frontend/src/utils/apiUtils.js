const md5 = require('md5');
require('dotenv').config();

export default function apiParameters() {
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_API_KEY;
  const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_API_KEY;
  const ts = Date.now();
  const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);

  return {
    apiKey: PUBLIC_KEY,
    ts,
    hash,
  };
}
