import React from 'react';
import { HashRouter } from 'react-router-dom';
import Router from './router';
import Header from './layout/header';
import Footer from './layout/footer';
import './app.css';

function App() {
    return (
        <HashRouter>

            <Header />

            <main>
                <Router />
            </main>
            <footer>
                <Footer />
            </footer>
        </HashRouter>

    )
}

export default App;