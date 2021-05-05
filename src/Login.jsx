import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Email, Pass, getFetch } from "./FetchReducers";
import { useHistory } from "react-router-dom";
import "./Login.css"


const Login = () => {

    const state = useSelector(state => state);

    const dispatch = useDispatch();

    const { Reg, Data } = state;
    useEffect(() => {
        dispatch(getFetch());
    }, [])

    let history = useHistory();
    const submit = () => {
        let s=true,r=0
        for(let i=0;i<Data.length;i++)
        {
             r++;
            if(Data[i].email===Reg.email && Data[i].password===Reg.password)
            {s=false
                 if(Data[i].role=="student" || Data[i].role=="Student" || Data[i].role=="STUDENT")
                 {
                     history.push("/shome");
                 }
                 else if(Data[i].role=="teacher" || Data[i].role=="Teacher" || Data[i].role=="TEACHER")
                 {
                     history.push("/thome")
                 }
             
            }
        }        if (s === true && r > 0) {
            alert("invalid email or password")
        }
    }
    return (
        <>
            <div class="main-container">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="text" class="form-control" name="email" onChange={(e) => dispatch(Email(e.target.value))} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" onChange={(e) => dispatch(Pass(e.target.value))} />

                </div>
                <button onClick={submit}>Login</button>
            </div>
        </>
    )
}
export default Login;