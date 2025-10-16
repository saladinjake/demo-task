/// <reference types="vite/client" />




interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
  VITE_API_URL: string;
  VITE_GOOGLE_CLIENT_ID: string;
  VITE_CLIENT_ID: string;
  VITE_APP_ENV: string;
  VITE_NERVE_CLIENT_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
