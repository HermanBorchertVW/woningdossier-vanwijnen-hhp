import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const COLLECTION = "woningdossier";

// Zelfde interface als window.storage in Claude-artifacts (get/set/delete/list),
// zodat App.jsx grotendeels ongewijzigd blijft. Het "shared"-argument bestaat
// hier niet nodig — alle data staat in dezelfde gedeelde Firestore-collectie.
export const storage = {
  async get(key) {
    const snap = await getDoc(doc(db, COLLECTION, key));
    if (!snap.exists()) return null;
    return { key, value: snap.data().value };
  },
  async set(key, value) {
    await setDoc(doc(db, COLLECTION, key), { value });
    return { key, value };
  },
  async delete(key) {
    await deleteDoc(doc(db, COLLECTION, key));
    return { key, deleted: true };
  },
  async list(prefix) {
    const snap = await getDocs(collection(db, COLLECTION));
    const keys = [];
    snap.forEach((d) => {
      if (!prefix || d.id.startsWith(prefix)) keys.push(d.id);
    });
    return { keys };
  },
};
