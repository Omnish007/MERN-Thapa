import React, { useEffect, useState } from 'react'
import img from "../img/IMG.jpg"
import { useHistory } from "react-router-dom"

function About() {

    const history = useHistory()

    const [userData , setUserData] = useState({})

    const callAboutPage = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json()//badho data responce ma made
            console.log(data)
            setUserData(data)

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }

        } catch (error) {
            console.log(error)
            history.push("/login")
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])

    return (
        <>
            <div className="emp-profile">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img} alt="omnish" />
                        </div>

                        <div className="col-md-6">
                            <div className="profilehead">
                                <h5>{userData.name}</h5>
                                <h6>{userData.work}</h6>
                                <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10 </span></p>

                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item border-bottom">
                                        <a className="nav-link active" data-toggle="tab" id="home-tab" href="#home" role="tab">Active</a>
                                    </li>

                                    <li className="nav-item border-bottom">
                                        <a className="nav-link" data-toggle="tab" id="prifile-tab" href="#profile" role="tab">Timeline</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-button" value="edit-profile" />
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a href="https://www.youtube.com/" >Youtube</a><br />
                                <a href="https://www.youtube.com/" >Youtube</a><br />
                                <a href="https://www.youtube.com/" >Youtube</a><br />
                                <a href="https://www.youtube.com/" >Youtube</a><br />
                                <a href="https://www.youtube.com/" >Youtube</a><br />
                            </div>
                        </div>

                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent" >
                                <div className="tab-pan fade show active" id="home" role="tabpanel" area-aria-labelledby="home-tab">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="blue-text">{userData._id}</label>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="blue-text">{userData.name}</label>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="blue-text">{userData.email}</label>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="blue-text">{userData.phone}</label>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="blue-text">{userData.work}</label>
                                        </div>
                                    </div>

                                </div>


                                <div className="tab-pan fade" id="profile" role="tabpanel" area-aria-labelledby="profile-tab">

                                    <div className="row  first-child">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="blue-text">Expert</label>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="blue-text">100$/hr</label>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Total Project</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="blue-text">10000</label>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="blue-text">Expert</label>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="blue-text">3yr</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default About
