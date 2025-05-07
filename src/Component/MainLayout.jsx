// src/Component/MainLayout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Navbar from './NavBar';

const MainLayout = () => {
  const location = useLocation();
  
  // Define routes where the Navbar should not appear
  const hideNavbarRoutes = ["/auth", "/role-selection"];

  return (
    <>
      <Header />
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Outlet />
    </>
  );
};

export default MainLayout;
