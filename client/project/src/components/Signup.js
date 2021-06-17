import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import img from "../img/2.png"

function Signup() {

    const history = useHistory()

    const[user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:"",
    }) 

    let name,value

    const handleInput = (e)=>{
        name= e.target.name
        value = e.target.value

        setUser({...user,[name]:value})
    }

    const sendDataToBackend = async (e) =>{
        e.preventDefault()

        const { name,email,phone,work,password,cpassword } = user

        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        })

        const data = await res.json()

        if(data.status === 422 || !data)
        {
            window.alert("Registration Failed")
        }
        else
        {
            window.alert("Register Scessful")
            history.push("/login")
        }

    }

    return (
        <>
            <section className="signup">
                <div className="container">
                    <div className="signup-form">
                        <h2 className="form-title">Signup</h2>
                        <form id="register-form" method="POST" className="register-form">

                            <div className="form-group">
                                <label htmlFor="name">
                                    Name
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInput} placeholder="Enter your username" />
                            </div>

                            
                            <div className="form-group">
                                <label htmlFor="Email">
                                    Email
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInput} placeholder="Enter your email" />
                            </div>

                            
                            <div className="form-group">
                                <label htmlFor="Phone">
                                    Phone
                                </label>
                                <input type="text" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInput} placeholder="Enter your phone" />
                            </div>

                            
                            <div className="form-group">
                                <label htmlFor="Work">
                                    Work
                                </label>
                                <input type="text" name="work" id="Work" autoComplete="off" value={user.work} onChange={handleInput} placeholder="Enter your Work" />
                            </div>

                            
                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInput} placeholder="Enter your Password" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cpassword">
                                    CPassword
                                </label>
                                <input type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInput} placeholder="Enter your CPassword" />
                            </div>

                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" onClick={sendDataToBackend} className="form-submit" value="Register" />
                            </div>

                        </form>

                    </div>
                </div>

                <div className="imgcontainer">
                    <img className="image" src={img}  alt="img" />
                </div>
            </section>
        </>
    )
}

export default Signup
