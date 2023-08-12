import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Signin from "./pages/Signin";
import React from "react";

/**
 * Contains the routing for the application
 */
function App() {
    return(
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/signin"} element={<Signin/>}/>
            <Route path={"/signup"} element={<h1>hi</h1>}/>
        </Routes>
    )
}

export default App;
