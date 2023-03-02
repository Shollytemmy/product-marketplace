import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Explore from './Pages/Explore'
import ForgetPassword from './Pages/ForgetPassword'
import NotFound from './Pages/NotFound'
import Offers from './Pages/Offers'
import Profile from './Pages/Profile'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='offers' element={<Offers />} />
        <Route path='profile' element={<SignIn />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='forget-password' element={<ForgetPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
