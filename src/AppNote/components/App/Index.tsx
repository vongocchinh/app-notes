import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import RouterPage from '../../router/RouterPage';
import Header from './../header/Header';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
interface IndexTs {

}
const Index: React.FC<IndexTs> = () => {
    return (
        <Router>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Header />
            <RouterPage />
        </Router>
    )
}
export default Index;