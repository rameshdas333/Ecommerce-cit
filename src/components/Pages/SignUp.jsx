import React, { useState } from 'react';
import signupImg from '../../assets/Signupimg(1).png'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';


export default function SignUp() {
  const [name,setName] = useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword] = useState("")

  const [nameError,setNameError] = useState("")
  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError]= useState("")
  const [show,setShow] = useState(false)
  const handleName = (e) =>{
      setName(e.target.value)
      setNameError(" ")  
      
  }

  const handleEmail =(e)=>{
  setEmail(e.target.value)
  setEmailError(" ")
}
const handlePassword =(e)=>{
   setPassword(e.target.value)
   setPasswordError(" ")
}
  const handleCreateAccount = (e)=>{
     e.preventDefault()
  
  if(!name){
    setNameError("please enter your name")
  }
  if(!email){
    setEmailError("Enter your email address")
  }else{
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
       setEmailError("You email not validate.")
    }
     
  }
  if(!password){
      setPasswordError("Enter your password")
  }else{
 if (!/^(?=.*[a-zA-Z])(?=.*\d).{6,20}$/.test(password)) {
  setPasswordError("Password must be at least 6 characters and include letters and numbers"); 
}
  }
  if(name && email && password){
    toast.success("Account Create Successfully")
    setName("")
    setEmail("")
    setPassword("")
   
  }
  console.log(name,email,password)
}



  return (

    
    <div className="min-h-screen md:flex">

         <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
      {/* Left side image section */}
      <div className="md:w-1/2 bg-blue-50 flex items-center justify-center pt-6 md:pt-0">
 
        <img
          src={signupImg}
          alt="Shopping Cart with Mobile"
          className="max-w-md w-full"
        />
      </div>

      {/* Right side form section */}
      <div className="md:w-1/2 flex items-center justify-center px-8 py-7 md:py-0">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create an account</h2>
          <p className="text-sm text-gray-600 mb-4">Enter your details below</p>

          <form className="space-y-4">
            <p className='text-red-500'>{nameError}</p>
            <input
            onChange={handleName}
              value={name}
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              value={email}
              onChange={handleEmail}
            
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className='text-red-500 text-sm'>{emailError}</p>
            <input
              type={show ? "text":"password"}
              onChange={handlePassword}
              value={password}
            
              placeholder="Password"
              className="relative  w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          
            />
           <div className='text-2xl'>
            {
                  show ? <p onClick={()=>setShow(!show)}><FaRegEye /></p>:<p onClick={()=>setShow(!show)}><FaRegEyeSlash /></p>
            }
           </div>
            <p className='text-red-500 text-sm'>{passwordError}</p>

           <button onClick={handleCreateAccount} className='bg-red-500 text-white px-12 rounded w-full  py-4'> Create Account</button>

        
            <button
              type="button"
              className="w-full border border-gray-400 py-2 rounded-md flex items-center justify-center gap-2 mt-2"
            >
              <FcGoogle />
              Sign up with Google
            </button>
         
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{' '}
            <Link to="/loginpage" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}