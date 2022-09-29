import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './views/home';
import Peliculas from './views/peliculas';

function Router() {

    return (
        <Routes className='rutas'>

            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/movies' element={<Peliculas />} />

        </Routes>
    )
}

export default Router;