import Navbar from "./Component/NavBar"
import Header from "./Component/Header"
import Achievement from "./Component/Achievement"
import AuthForm from "./Component/Auth"
import Renewable from "./Component/Renewable"
import Partners from "./Component/Partners"
import Statistics from "./Component/Statistics"
function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Renewable/>
      <Statistics/>
      <Partners/>
      <Achievement />
      {/* <AuthForm /> */}
    </>
  )
}

export default App
