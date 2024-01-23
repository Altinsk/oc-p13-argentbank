/* IMPORTS */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { handleAutoLogin } from '../../store/features/index';
import store from '../../store/index';

/* PAGES */
import Home from '../../pages/Home/index';
import SignIn from '../../pages/SignIn/index';
import User from '../../pages/User/index';
import Error404 from '../../pages/Error404/index';

/* COMPONENTS */
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

export default function App() {
    useEffect(() => {
        store.dispatch(handleAutoLogin());
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/profile" element={<User />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
