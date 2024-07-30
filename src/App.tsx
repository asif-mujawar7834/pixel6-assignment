import { Route, BrowserRouter, Routes } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { AddCustomer } from "./pages/AddCustomer";
import { Customers } from "./pages/Customers";
import { EditCustomer } from "./pages/EditCustomer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/contact-us" element={<h1>Contact Us</h1>} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/customer/:id" element={<EditCustomer />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          className="shadow-md border border-gray-200"
        />
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
