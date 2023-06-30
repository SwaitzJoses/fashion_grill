import Footer from "./pages/Footer/Footer";
import Navbar from "./pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
   
      <Navbar/>
      <Outlet />
      <Footer className='footer'/>

    </>
  );
}

export default App;
