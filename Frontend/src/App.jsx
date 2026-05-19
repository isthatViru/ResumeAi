import { RouterProvider } from "react-router-dom"
import { router } from "./app.routes"
import { AuthProvider } from "./features/Auth/services/auth.context"

const App = () => {
  return (
    <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  )
}

export default App
