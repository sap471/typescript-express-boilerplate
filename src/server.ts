import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { AddressInfo } from 'net';
import { requiredEnv } from './utils/config';

const createApp = async () => {
  const app: express.Application = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  app.get('/', (req, res) => {
    return res.json({
      hello: 'world!',
    });
  });

  return app;
};

// Start Server
(async () => {
  try {
    const app = await createApp();
    const server = new http.Server(app);

    server.listen(
      parseInt(requiredEnv('APP_PORT')),
      requiredEnv('APP_HOST'),
      () => {
        const addr = server.address() as AddressInfo;
        console.log(`App Listening on :${addr.port}`);
      },
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
