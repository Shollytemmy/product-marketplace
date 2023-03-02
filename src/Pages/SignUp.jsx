import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignUp() {

  const [showPassword, setShowPassword] = useState(false)


  const navigate = useNavigate()
  return (
    <div>
      <h1>Sign Up</h1>
    </div>
  )
}

export default SignUp
