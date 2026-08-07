import React from 'react'

export const Login = () => {
  return (
    <>
    <div className="maindivlogin"> <div id='headinglog'>Login Aadhaar Via OTP</div>
     <div className="loginform" >
      
<input type="text" className="custom-input"  placeholder="Enter Aadhaar Number" />
   <div className="inline-group font-medium my-2"><input type="text" className="custom-input" placeholder="Enter Captcha" />
   <img src="/imgs/sample-captcha.png" alt="Captcha" className="captcha-img" />
    </div>
    <button className="submit-btn mt-4">Login With OTP</button>

    </div></div>
   
    
    
    
    
    </>
  )
}
export default Login