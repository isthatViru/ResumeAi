import { useContext } from "react"
import { AuthContext } from "../services/auth.context"
import { login, logout, register } from "../services/auth.api"

export const useAuth=()=>{
    const context=useContext(AuthContext)
    const {user,setUser,loading,setLoading}=context
    const handleLogin=async({email,password})=>{
      setLoading(true)  
      try {
            const data=await login({email,password})
            if (!data?.user) {
              throw new Error(data?.message || "Login failed");
            }
            setUser(data.user)
            return data.user
         } finally{
            setLoading(false)
         }
    }

    const handleRegistration=async({username,email,password})=>{
      setLoading(true)  
      try {
            const data=await register({username,email,password})
            if (!data?.user) {
              throw new Error(data?.message || "Registration failed");
            }
            setUser(data.user)
            return data.user
         } finally{
            setLoading(false)
         }
    }
    const handleLogout=async()=>{
      setLoading(true)  
      try {
            
            await logout()
            setUser(null)
              
         } catch (error) {
            console.log(error)
         }finally{
            setLoading(false)
         }
    }
    return {user,loading,handleLogin,handleLogout,handleRegistration}
}