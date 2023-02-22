import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserDetails from './components/UserDetails'
import DeleteUser from './components/DeleteUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserDetails />
      <DeleteUser />
    </>
  )
}

export default App
