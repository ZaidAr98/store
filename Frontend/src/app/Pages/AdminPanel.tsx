import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "../components/AdminPanel/AddProduct";
import AdminLayout from "../components/AdminPanel/AdminLayout";
import MyPurchase from "../components/AdminPanel/MyPurchase";
import "../../App.css";

const AdminPanel = () => {
  return (
 
      <Routes>
        <Route
          path="/purchases"
          element={
            <AdminLayout>
              <MyPurchase />
            </AdminLayout>
          }
        />
        <Route
          path="/addProduct"
          element={
            <AdminLayout>
              <AddProduct />
            </AdminLayout>
          }
        />
             <Route
          path="/products"
          element={
            <AdminLayout>
              <AddProduct />
            </AdminLayout>
          }
        />
      </Routes>

  );
};

export default AdminPanel;
