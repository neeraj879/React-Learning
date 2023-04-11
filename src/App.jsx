import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserArray from './components/UserArray';
import Palindrome from './components/JavascriptPractice/Palindrome';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (<BrowserRouter>
  <Routes>
    <Route path="Users" element={<UserArray/>}/>
    <Route path="palindrome" element={<Palindrome/>}/>
  </Routes>
  </BrowserRouter>);
}

export default App
