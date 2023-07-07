import './App.css'
import Links from "./Components/Links/Links.jsx";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Post from "./Components/Post/Post.jsx";
import BasicButtonGroup from "./Components/BasicButtonGroup/BasicButtonGroup.jsx";
import React from "react";
import StartScreen from "./Components/StartScreen/StartScreen.jsx";
import Layout from "./Components/Layout/Layout.jsx";

function App() {

    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path={'/start'} element={<StartScreen/>} />
                        <Route path='/links' element={<Links/>}>
                            <Route path=':id' element={<Post/>}/>
                        </Route>
                        <Route path='/buttons' element={<BasicButtonGroup/>}/>
                        <Route path='/admin' element={<Navigate to='/' replace={true}/>}/>
                        <Route path='/*' element={<h1>Not Found</h1>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App