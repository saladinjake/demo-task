/// <reference types="vite/client" />


declare const AUTO_SW: boolean;
declare const AUTO_DESTROY_SW: boolean;
declare const __DATE__: string;
declare const __SW__: string;
declare const __SW_SCOPE__: string;
declare const __SW_TYPE__: string;

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
