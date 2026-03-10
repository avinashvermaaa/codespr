export const startHealthCron = () => {
  const BACKEND_URL = process.env.REACT_APP_API_URL;

  const pingServer = () => {
    fetch(`${BACKEND_URL}/health`)
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log('Health Check:', data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Health Check Failed:', err);
      });
  };

  pingServer();

  // call server every ~15 minutes
  setInterval(pingServer, 14 * 59 * 1000);
};
