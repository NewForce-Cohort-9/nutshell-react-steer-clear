import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArticleList } from './components/articles/ArticleList.jsx'
import { Routes, Route } from 'react-router-dom'
import { ArticleForm } from './components/articles/ArticleForm.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="Dashboard">
      <header className="App-header">
        <h1>Welcome to Nutshell</h1>
      </header>
      <div>
        <ArticleList />
      </div>
      <Routes>
        <Route path="/newarticle" element={<ArticleForm currentUser="1"/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
