export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT || "PROD";

// REGEX
export const EMAIL_INCLUDED_REGEX =
  /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
export const HTTPS_INCLUDED_REGEX = /(https?:\/\/\S+)/gi;
export const EMAIL_OR_HTTPS_INCLUDED_REGEX =
  /(https?:\/\/\S+|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

// URL
const PORT = 3000;
export const PROD_HOST_URL = "https://dolcent.netlify.app";
const HOST_URLS = {
  PROD: PROD_HOST_URL,
  DEV: `http://localhost:${PORT}`
};
export const HOST_URL = HOST_URLS[ENVIRONMENT];
export const API_URL = `${HOST_URL}/api`;
export const GITHUB_URL = "https://github.com/keiloktql";
export const BUY_ME_A_COFFEE_URL = "https://www.buymeacoffee.com/keiloktql";
export const APP_STORE_LINK_ID = "6466705209";
export const APP_STORE_LISTING_URL = `https://apps.apple.com/us/app/dolcent/id${APP_STORE_LINK_ID}`;
export const PLAY_STORE_LISTING_URL =
  "https://play.google.com/store/apps/details?id=com.kl.dolcent";
export const REALM_ENCRYPTION_URL =
  "https://www.mongodb.com/docs/realm/sdk/react-native/realm-files/encrypt/";
export const UPTIME_URL = "https://dolcent.betteruptime.com";
export const CANNY_URL = "https://dolcent.canny.io";

// EMAIL
export const SUPPORT_EMAIL = "dolcent.connect@gmail.com";

// FIREBASE
export const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
