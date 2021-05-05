import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Name, Email, Pass, Role } from "./FetchReducers";

const Register = () => {

    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const { Reg } = state;

    const submit = () => {
        console.log(state)
        axios.post('http://localhost:4000/user', {
            name: Reg.name,
            email: Reg.email,
            password: Reg.password,
            role: Reg.role
        })

    }

    return (
        <>
            <div className="register-container">
                <div className="card col-16 col-lg-8 ">
                    <h4>Register Form</h4>
                    <div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" class="form-control" name="name" value={Reg.name} onChange={(e) => dispatch(Name(e.target.value))} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="text" class="form-control" name="email" value={Reg.email} onChange={(e) => dispatch(Email(e.target.value))} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" value={Reg.password} onChange={(e) => dispatch(Pass(e.target.value))} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Role</label>
                            <input type="text" class="form-control" name="role" value={Reg.role} onChange={(e) => dispatch(Role(e.target.value))} />
                        </div>
                        <Link to="/login"><button onClick={submit}>Submit</button></Link>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Register;




