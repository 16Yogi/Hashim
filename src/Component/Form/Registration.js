import React from 'react'
import './Login.scss'

import { Link } from 'react-router-dom'

export default function Registration() {
  return (
    <>
       <div className="container-fluid" id='login-cf'>
                <div className="container py-5 px-5">
                    <div className="col col-lg-5 col-md-8 col-sm-11 mx-auto login-item">
                        <div className="col py-1">
                            <h4 className="font-weight-bold text-center">Registration</h4>
                        </div>
                        <div className="col py-3">
                            <div className="col user-logo mx-auto">
                                <i class="fa-solid fa-user"></i>
                            </div>
                        </div>
                        <form>
                            <div class="form-group">
                                <label for="">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div class="form-group">
                                <label for="">Mobile Number</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <p className='text-center py-2'>
                                <span className='font-weight-bold'>Other Link</span>
                            </p>
                           
                            <div className="row py-1">
                                <div className="col-6 text-left">
                                    <Link to='/login' className='text-secondary text-decoration-none'>Login</Link>
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
