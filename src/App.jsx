import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Navbar from "./Component/NavBar"
import Header from "./Component/Header"
import Achievement from "./Component/Achievement"
import AuthForm from "./Component/Auth"
import Renewable from "./Component/Renewable"
import Partners from "./Component/Partners"
import Statistics from "./Component/Statistics"
import Footer from "./Component/Footer"

function App() {

  return (
    <Router>
      <Navbar>
        <Link to="/Auth">Form Page</Link>
      </Navbar>
      <Routes>
          <Route path='/Auth'element={<AuthForm />}/>
        </Routes>
      
      <Header />
      <Renewable/>
      <Statistics/>
      <Partners/>
      <Achievement />
      <Footer/>
    </Router>
  )
}

export default App
