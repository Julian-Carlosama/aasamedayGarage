import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Services from './components/pages/Services';


const App = () => {
    return (
        <Router>
            <div className="App">
                <h1 className="text-left text-yellow-300">Hellol</h1>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="services" element={<Services />}/>
                </Routes>
            </div>
        </Router> 
    )
}


export default App;