export const getClientBaseUrl = () => {
  const url = process.env.CLIENT_URL || 'http://localhost:3000';
  return url.replace(/\/$/, ''); // Trailing slash remove
};
