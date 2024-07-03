import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Register from "./app/Pages/Register"
import Home from "./app/Pages/Home"
import Login from "./app/Pages/Login"


const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            
             <Home/>
          }
        />
        <Route
          path="/register"
          element={
            
              <Register />
          
          }
        />
        <Route
          path="/login"
          element={
            
              <Login />
          
          }
        />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
