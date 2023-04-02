import React from 'react';
import './App.css';
import {Rating} from "./compnents/Rating/Rating";
import Accordion from "./compnents/Accordion/Accordion";

function App() {
    console.log("App rendering")
    return (
        <div>
            <Rating value = {3}/>
            <Accordion/>
            <Rating value = {4}/>
        </div>
    );
}

export default App;
