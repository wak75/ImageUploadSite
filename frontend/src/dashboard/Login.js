import { useEffect, useState } from 'react'
import "./Login.css"
import {useNavigate} from 'react-router-dom'
 
 
function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const navigate = useNavigate();
 
  useEffect(()=>{
    const isToken = localStorage.getItem('token')
    if(isToken){
        navigate('/dashboard');
    }
  }, [navigate])
  
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempted with:', formData)
 
    try{
        const response = await fetch("http://localhost:4500/api/auth/login",{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({username: formData.username,
                                 password: formData.password })
        })
 
        if (!response.ok) {
            throw new Error('Invalid credentials');
          }
        
          navigate('/dashboard');
        const data = await response.json();
        const token = data.token; // Adjust according to your API's response format
    
          // Store token in localStorage or a state management solution
        localStorage.setItem('token', token);
        alert('Login successful');
        console.log(token)
    }catch(error){
        console.log(`${error}`)
    }
  }
 
 
 
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
 
 
 
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome Back</h1>
        <p className="subtitle">Please login to continue</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        
        <div className="additional-options">
          <a href="#" className="forgot-password">Forgot Password?</a>
          <p className="signup-prompt">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  )
}
 
export default Login;
 
 