import { FirebaseApp, initializeApp } from "firebase/app";
import React, { createContext } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-bRPaAzOGr6DTBwZ7jD81r106g5Ilzfc",
  authDomain: "ncw-nobi.firebaseapp.com",
  projectId: "ncw-nobi",
  storageBucket: "ncw-nobi.appspot.com",
  messagingSenderId: "141751584437",
  appId: "1:141751584437:web:083da837c89a12d6fca0fc",
};

export const FirebaseAppProviderContext = createContext<FirebaseApp | null>(null);

interface IProps {
  children?: React.ReactNode;
}

export const FirebaseAppProvider: React.FC<IProps> = ({ children }) => {
  const app = React.useMemo(() => initializeApp(firebaseConfig), []);
  return <FirebaseAppProviderContext.Provider value={app}>{children}</FirebaseAppProviderContext.Provider>;
};
