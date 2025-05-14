// src/Component/MainLayout.jsx
import { Outlet, useLocation } from 'react-router-dom';
// import Header from './Header';npm 
import Navbar from './NavBar';

const MainLayout = () => {
  const location = useLocation();
  
  const hideNavbarRoutes = ["/auth", "/role-selection","/campaigns","/marketplace"];

  return (
    <>
      {/* <Header /> */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Outlet />
    </>
  );
};

export default MainLayout;
