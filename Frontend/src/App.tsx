import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Register from "./app/Pages/Register"
import Home from "./app/Pages/Product"
import Login from "./app/Pages/Login"
import AddProduct from "./app/Pages/AddProduct"
import Layout from "./app/components/Layout"


const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
             <Home/>
             </Layout>
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
        <Route 
        path="/addProduct"
        element={
          <AddProduct/>
        }
        />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
