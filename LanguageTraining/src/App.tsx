import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About/About'
import { Complex } from './Pages/Complex/Complex'
import { Easy } from './Pages/Easy/Easy'
import { Hard } from './Pages/Hard/Hard'

import { initializeApp } from "firebase/app"
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBBpApVa6e-M51F_EmdC4eAPNq43qr6TO8",
  authDomain: "languagetraining-ec4c0.firebaseapp.com",
  databaseURL: "https://languagetraining-ec4c0-default-rtdb.firebaseio.com",
  projectId: "languagetraining-ec4c0",
  storageBucket: "languagetraining-ec4c0.appspot.com",
  messagingSenderId: "429891473314",
  appId: "1:429891473314:web:28bd9aad82c65453936cfb",
  measurementId: "G-5CRN2DBK2T"
};

const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getDatabase(app);  

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/hard" element={<Hard />} />
        <Route path="/complex" element={<Complex />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
