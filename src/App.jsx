import Navbar from "./Component/NavBar";
import Header from "./Component/Header";
import Achievement from "./Component/Achievement";
import AuthForm from "./Component/Auth";
import Statistics from "./Component/Statistics"
import WasteMarket from "./Component/Waste";
import Renewable from "./Component/Renewable"
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import RoleSelection from "./Component/RoleSelection";

const App = () => {
  return (
    <Router>
      {location.pathname !== "/marketplace" && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Achievement />
              <Renewable />
              <Statistics />
              <Footer />
            </>
          }
        />
        <Route path="/auth" element={<AuthForm />} />
        {/* <Route path="/role-selection" element={<RoleSelection />} /> */}
        <Route path="/marketplace" element={<WasteMarket />} />
      </Routes>
    </Router>
  );
};

export default App;