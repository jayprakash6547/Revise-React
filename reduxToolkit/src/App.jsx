import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import AddTodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
 

  return (
    
      <div className="min-h-screen bg-gray-900 p-10">

        <h1 className="text-4xl font-bold text-white mb-8">
          Learn about Redux Toolkit
        </h1>
    <AddTodo />
    <Todos  />
    </div>
  )
}

export default App
