import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ── App Check ────────────────────────────────────────────────────────────────
// Only runs in the browser. In development without the env var, a debug token
// is printed to the console — add it in the Firebase Console (App Check → Apps
// → Manage debug tokens) to test locally without reCAPTCHA.
if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'development') {
    // @ts-expect-error — Firebase reads this global to enable the debug provider
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }

  if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      ),
      isTokenAutoRefreshEnabled: true,
    });
  }
}

const auth    = getAuth(app);
const db      = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
