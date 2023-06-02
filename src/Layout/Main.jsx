import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';


const Main = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes('login') ||location.pathname.includes('signup') 
    return (
        <div>
            { isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            { isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;