import { Outlet } from 'react-router-dom';
import NavBar from './../Components/Navbar/NavBar';

function MainLayout(){
    return(
        <>
            <NavBar/> {/* Shared UI across multiple pages */}
            <Outlet/>
        </>
    )
}

export default MainLayout;