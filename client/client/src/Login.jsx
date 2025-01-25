import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const Login = () => {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleButtonClick = () => {
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false);
    };

     const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result)
            {if(result.data === "success") {  /*must create a popup window*/
                navigate('/home')
            }}
            {if(result.data === "password is incorrect") {
              <div>
              <button onClick={handleButtonClick()}>Show Confirmation</button>
        
              {isPopupOpen && (
                <div className="position-fixed top-50 start-50 translate-middle bg-white p-3 border border-secondary rounded">
                  <p>Are you sure?</p>
                  <button onClick={() => { handleClosePopup()}}>OK</button> 
                </div>
              )}
            </div>
              }}
        })
        .catch(err => console.log(err))
      }
    
      return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
          <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>

    
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email:</strong>
                </label>
                <input type="email" id="email" placeholder='Enter your Email ID' autoComplete='off' name="email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)}>
                </input>
              </div>
    
    
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Password:</strong>
                </label>
                <input type="password" id="password" placeholder='Enter your Password' name="password" className="form-control rounded-0" onChange={(e) => setPassword(e.target.value)}></input>
              </div>
    
    
              <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
            </form>
              <p>Already have an account</p>
              <Link to={"/register"} className="btn btn-default border w-100 bg-light rounded-0">Sign Up</Link>
          </div>
        </div>
      )
}

export default Login
