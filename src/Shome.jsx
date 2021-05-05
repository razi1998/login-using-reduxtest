import React from "react";
import { useSelector } from "react-redux";
import "./Login.css"
const Shome = () => {
    const state = useSelector(state => state);

    return (
        <>
            <div className="center-text">
                <center><h1>Welcome to Student's page</h1></center>
            </div>
        </>
    )
}
export default Shome;