import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import Lodging from '../pages/Lodging/Lodging'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'
import Layout from '../layouts/Layout'

function KasaRoutes() {
    return(
        <Router>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route path='/lodging/:id' element={<Lodging />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default KasaRoutes;