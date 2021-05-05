import React from "react";
import { useSelector } from "react-redux";
import "./Login.css"
const Thome = () => {
    const state = useSelector(state => state);

    return (
        <>
            <div className="center-text">
                <center><h1>Welcome to Teacher's page</h1></center>
            </div>
        </>
    )
}
export default Thome;