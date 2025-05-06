import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./Component/NavBar"
import Header from "./Component/Header"
import Achievement from "./Component/Achievement"
import AuthForm from "./Component/Auth"
import Renewable from "./Component/Renewable"
import Partners from "./Component/Partners"
import Statistics from "./Component/Statistics"
import Market from "./Component/Market"
import Form from "./Component/Form"
import Register from "./Component/Register"
import Provider from "./Component/Provider"
import Investor from "./Component/Investor"
import Footer from "./Component/Footer"

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const showFullPage = currentPath ==='/';

  return (
    <>
      <Navbar/>
       
      <Routes>

          <Route path='/Login' element={<AuthForm />}/>
          <Route path='/Getstarted' element={<Market />}/>
         <Route path ='/' element={<></>}/>
         <Route path='/Greenfarmer' element={<Form />}/>
         <Route path='/Wastebuyer' element={<Register />}/>
         <Route path='/Energyprovider' element={<Provider />}/>
         <Route path='/Investor' element={<Investor />}/>
        </Routes>
      
      <Header />
      <Renewable/>
      <Statistics/>
      <Partners/>
      <Achievement />
      <Footer/>
    </>
    
  );
}

export default App;