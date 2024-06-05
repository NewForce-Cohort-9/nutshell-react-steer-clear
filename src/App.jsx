import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { Login } from './components/auth/Login.jsx'
import { Register } from './components/auth/Register.jsx'
import { Authorized } from './views/Authorized.jsx'
import { ApplicationViews } from './views/ApplicationViews.jsx'


export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//         <div className="Dashboard">
//       <header className="App-header">
//         <h1>Welcome to Nutshell</h1>
//       </header>
//     </div>
//     </>
//   )
// }
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

// export default App
