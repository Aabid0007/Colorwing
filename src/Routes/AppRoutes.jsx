import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout'
import HomePage from '../Pages/Home/HomePage';
import ServicesPage from '../Pages/Services/ServicesPage';
import ContactPage from '../Pages/Contact/ContactPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
            <Route path="/services" element={<MainLayout><ServicesPage /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
        </Routes>
    )
}

export default AppRoutes