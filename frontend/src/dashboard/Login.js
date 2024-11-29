import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <>
    <div className='out'>
        <div className='in'>
        <h2>Welcome to ImageUpload</h2>
        <form action="/#" method="post">
            <div className="container">
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required />
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />
              <button type="submit">Login</button>
            </div>
        </form>
        </div>
    </div>
    </>
  )
}
