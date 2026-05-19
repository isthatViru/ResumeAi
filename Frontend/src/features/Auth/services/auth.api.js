import axios from "axios";

const api=axios.create({
    baseURL:'http://127.0.0.1:3000',
    withCredentials:true
})

export const register=async({username,email,password})=>{
    try {
        const response=await api.post('/api/signup',{
            username,email,password
        })

        return response.data

    } catch (error) {
        console.log(error)
    }
}

export const login=async({email,password})=>{
    try {
        const response=await api.post('/api/login',{
            email,password
        })

        return response.data

    } catch (error) {
        console.log(error)
    }
}

export const logout=async()=>{
    try {
        const response=await api.get('/api/logout')

        return response.data

    } catch (error) {
        console.log(error)
    }
}

export const getme=async()=>{
    try {
        const response=await api.get('/api/get-me')

        return response.data

    } catch (error) {
        console.log(error)
    }
}
