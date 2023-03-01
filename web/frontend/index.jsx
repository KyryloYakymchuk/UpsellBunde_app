import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { createContext } from "react";
import { doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy6s72h3rr9VYhdcY70VrJfsymCp1RVRY",
  authDomain: "test-project-1deb5.firebaseapp.com",
  projectId: "test-project-1deb5",
  storageBucket: "test-project-1deb5.appspot.com",
  messagingSenderId: "758535787787",
  appId: "1:758535787787:web:1d7ace7aefb2d5e7bc3e0e",
  measurementId: "G-VDYMY2MEHR",
};

export const Context = createContext(null);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
// setDoc(doc(db, "upsells", "MISwaUQpvFuUL4tdY1YN"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA",
// });
ReactDOM.render(
  <Provider store={store}>
      <Context.Provider value={{ db }}>
        <App />
      </Context.Provider>
  </Provider>,
  document.getElementById("app")
);
