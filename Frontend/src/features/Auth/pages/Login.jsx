import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
const Login = () => {
 
   const {loading,handleLogin}=useAuth()
   const nav=useNavigate()
   const [email, setEmail] = useState("")
   const [password, setpassword] = useState("")
   const handleSubmit=async(e)=>{
    e.preventDefault()
    await handleLogin({email,password})
    nav('/')
   }
    if(loading){
        return <div className="loader"></div>

    }

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8" onSubmit={handleSubmit}>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-500 font-mono">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        {/* Email */}
        <div className="mb-5" >
          <label
            htmlFor="email"
            className="block text-gray-700 mb-2 font-medium"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
         onChange={(e)=>{setEmail(e.target.value)}}
         />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block text-gray-700 mb-2 font-medium"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
      onChange={(e)=>{setpassword(e.target.value)}}
      />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-6">
          <span className="text-sm text-red-500 cursor-pointer hover:underline">
            Forgot Password?
          </span>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <NavLink to={"/register"} className="text-red-500 font-semibold cursor-pointer hover:underline">
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;