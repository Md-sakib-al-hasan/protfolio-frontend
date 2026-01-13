import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', width: '100%' }}>
            <Navbar />
            <main style={{ padding: '2rem' }}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
