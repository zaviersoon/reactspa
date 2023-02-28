import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './page-component/contact';
import Home from './page-component/home';
import Services from './page-component/services';

function Content() {
    return (  
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/service" element={<Services></Services>}></Route>
            </Routes>
        </div>
    );
}

export default Content;