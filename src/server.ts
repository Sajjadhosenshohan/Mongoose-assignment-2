import mongoose from 'mongoose';
import config from './app/config';
import app from './app';


async function main() {
  try {
    await mongoose.connect(config.database_url as string, {
      tls: true,
    });
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}
main();