import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Component/Header";
import Navbar from "./Component/NavBar";
import MainLayout from "./Component/MainLayout";
import HeaderSection from "./Component/Header";
import Achievement from "./Component/Achievement";
import AuthForm from "./Component/Auth";
import Statistics from "./Component/Statistics";
import WasteMarket from "./Component/Waste";
import Renewable from "./Component/Renewable";
import Footer from "./Component/Footer";
import RoleSelection from "./Component/RoleSelection";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Header and Navbar */}
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <>
                <HeaderSection />
                <Achievement />
                <Renewable />
                <Statistics />
                <Footer />
              </>
            }
          />
          <Route path="/marketplace" element={<WasteMarket />} />
        </Route>

        {/* Routes with Header but without Navbar */}
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/role-selection" element={<RoleSelection />} />
      </Routes>
    </Router>
  );
};

export default App;
