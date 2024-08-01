import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <h3>SCISSOR<span className='color-1'>.</span></h3>
      <h5>Log in to your account. Don't have an account yet? <Link to={'/signup'}>Sign up</Link></h5>
      <form>
        <div className="">
          <label htmlFor="">E-mail</label>
          <input type="email" placeholder='example@example.com' name="" id="" required/>
        </div>
        <div className="">
          <label htmlFor="">Password</label>
          <input type="password" placeholder='password' name="" id="" />
        </div>
        <h6><Link to={'/'}>Forgot pasword?</Link></h6>
        <Link to={'/'}><button type="submit">Log in</button></Link>
      </form>
    </div>
  )
}

export default Login