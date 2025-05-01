import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Navbar from "./Component/NavBar"
import Header from "./Component/Header"
import Achievement from "./Component/Achievement"
import AuthForm from "./Component/Auth"
import Renewable from "./Component/Renewable"
import Partners from "./Component/Partners"
import Statistics from "./Component/Statistics"
import Market from "./Component/Market"
import Footer from "./Component/Footer"

function App() {

  return (
    <>
      <Navbar/>
       
      <Routes>
          <Route path='/Login'element={<AuthForm />}/>
          <Route path='/Getstarted'element={<Market />}/>
        </Routes>
      
      <Header />
      <Renewable/>
      <Statistics/>
      <Partners/>
      <Achievement />
      <Footer/>
    </>
    
  )
}

export default App
