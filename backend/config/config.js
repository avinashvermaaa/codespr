import dotenv from "dotenv";

dotenv.config();

export const config = {
  firebase: {
    serviceAccount: process.env.FIREBASE_SERVICE_ACCOUNT,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  }
};
