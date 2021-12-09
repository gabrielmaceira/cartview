import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAIBH2lUT2n3Qs7tteC4xf9esejjHl4iPk',
  authDomain: 'proyecto-coderhouse-3d398.firebaseapp.com',
  projectId: 'proyecto-coderhouse-3d398',
  storageBucket: 'proyecto-coderhouse-3d398.appspot.com',
  messagingSenderId: '380892020024',
  appId: '1:380892020024:web:347a8af27144a046a795cd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
