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
    <>
      <Navbar />
      <Header />
      <Renewable/>
      <Statistics/>
      <Partners/>
      <Achievement />
      <Footer/>
      {/* <AuthForm /> */}
    </>
  )
}

export default App
