import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './lib/component/Layout';
import Dashboard from './pages/Dashboard';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
           <Dashboard/>
          </Layout>
        }
      />
      </Routes>
      </BrowserRouter>
  )
}

export default App
