import React, { useState } from "react";
import {ROOT} from '../Api';
import axios from 'axios';

export default function Login() {
    const [email,setemail]=useState("");
    const [password,setPassword]=useState("");
    const handlelogin=(event)=>{
        event.preventDefault();
        axios({
            method:'POST',
            url:`${ROOT}/login`,
            data:{
                email:email,
                password:password
            }
        }).then(function(res){
            console.log('login successful',res)
            const userid=res.data.userId;
            localStorage.setItem("user_id",userid);
            window.location='http://localhost:3000/content';
        }).catch(function(err){
            console.log('login err',err)
        })

    }
        return (
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} 
                    onChange={(event)=>setemail(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password}
                    onChange={(event)=>setPassword(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={(event)=>handlelogin(event)}>Submit</button>
                
            </form>
        );
}


//abchello@gmail.com
//hello