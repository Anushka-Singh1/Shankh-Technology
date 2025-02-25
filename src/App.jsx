import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import CompanyDetails from "./Pages/CompanyDetails";

function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company-details" element={<CompanyDetails />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App
