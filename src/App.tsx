import { useState } from 'react'
import './App.css'

function App() {
const [loggedIn, setloggedIn] = useState(false)

  return (
    <>
     <div className="w-[300px] h-[300px] bg-white p-2">
        <h1 className="text-red-400 font-semibold">
          {!loggedIn ? "Evil Droid" : "Welcome"}
        </h1>
        <button onClick={() => setloggedIn(!loggedIn)}>Log In</button>
     </div>
    </>
  )
}

export default App
