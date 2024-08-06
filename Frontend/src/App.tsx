import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./app/Pages/Register";
import Home from "./app/Pages/Product";
import Login from "./app/Pages/Login";
import Layout from "./app/components/Layout";
import AdminPanel from "./app/Pages/AdminPanel";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminPanel/*" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
