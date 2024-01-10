import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="container-fluid py-4" id='login-cf'>
                <div className="container py-5 px-5">
                    <div className="col col-lg-4 col-md-8 col-sm-11 mx-auto login-item">
                        <div className="col py-1">
                            <h4 className="font-weight-bold text-center">Login Here</h4>
                        </div>
                        <div className="col py-3">
                            <div className="col user-logo mx-auto">
                                <i class="fa-solid fa-user"></i>
                            </div>
                        </div>
                        <form>
                            <div class="form-group">
                                {/* <label for="exampleInputEmail1">Username</label> */}
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div class="form-group">
                                {/* <label for="exampleInputPassword1">Password</label> */}
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <p className='text-center py-2'>
                                <span className='font-weight-bold'>Login with</span>
                            </p>
                            <button className="btn">
                                {/* <i class="fa-brands fa-google"></i> */}
                                <img src="https://th.bing.com/th/id/R.c8bf7c087ca9793d094042845707ffac?rik=fjZN1AYH30vXIw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgoogle%2fgoogle_PNG19635.png&ehk=ZmsumEtoeJQhKoUzQTZO2TEbYPBu0%2b7EFdjmJ3qljls%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                <span> Google</span>
                            </button>
                            <div className="row py-3">
                                <div className="col-6 text-left">
                                    <Link to='/registration' className='text-secondary text-decoration-none'>Registration</Link>
                                </div>
                                <div className="col-6 text-right">
                                    <Link to='/forget' className='text-secondary text-decoration-none'>Forget Password</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
