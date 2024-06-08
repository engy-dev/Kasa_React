import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Shared/Navbar/Navbar";
import Footer from "./pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
