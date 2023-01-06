import './App.css'
import { Routes, Route } from 'react-router-dom'
import Form from './component/Form'
import Login from './component/Login'
import Dashboard from './component/Dashboard'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Form />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
      </Routes>
    </div>
  )
}

export default App
