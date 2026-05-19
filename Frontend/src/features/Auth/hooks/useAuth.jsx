import { useContext } from "react"
import { AuthContext } from "../services/auth.context"
import { login, logout, register } from "../services/auth.api"

export const useAuth=()=>{
    const context=useContext(AuthContext)
    const {user,setUser,loading,setLoading}=context
    const handleLogin=async({email,password})=>{
         try {
            setLoading(true)
            const data=await login({email,password})
            setUser(data.user)
              setLoading(false)
         } catch (error) {
            console.log(error)
         }
    }

    const handleRegistration=async({username,email,password})=>{
         try {
            setLoading(true)
            const data=await register({username,email,password})
            setUser(data.user)
              setLoading(false)
         } catch (error) {
            console.log(error)
         }
    }
    const handleLogout=async()=>{
         try {
            setLoading(true)
            await logout()
            setUser(null)
              setLoading(false)
         } catch (error) {
            console.log(error)
         }
    }
    return {user,loading,handleLogin,handleLogout,handleRegistration}
}