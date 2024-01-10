import React from 'react'
import './Visitpropety.scss'
import { Link } from 'react-router-dom'
export default function Visitproperty() {
    return (
        <>
            <div className="container-fluid" id='viewproperty-cf'>
                <div className="container py-5">
                    <div className="row" id='vproperty-wrap'>
                        <div className="col-lg-8 col-md-8 col-sm-12" id='vp-item'>
                            <div className="row">
                                <div className="col-12 py-3">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-12 ">
                                    <img src="https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 p-0 img-2">
                                    <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="" />
                                    <img src="https://images.pexels.com/photos/920384/pexels-photo-920384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='my-1' />
                                </div>
                                <div className="col-12">
                                    <p className='py-2'>
                                        <span><Link to="/">Home</Link></span>
                                        <span><i class="px-2 fa-solid fa-angle-right"></i></span>
                                        <span><Link to="/">Our Project</Link></span>
                                        <span><i class="px-2 fa-solid fa-angle-right"></i></span>
                                        <span><Link to="/">Lorem ipsum</Link></span>
                                        <span><i class="px-2 fa-solid fa-angle-right"></i></span>
                                        <span><Link to="/">Lorem ipsum</Link></span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-9">
                                    <h4>Lorem ipsum dolor sit amet consectetur</h4>
                                    <span className='text-secondary'>Lorem ipsum dolor sit amet consectetur</span>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-info font-weight-bold">View Number</button>
                                </div>
                            </div>
                            <div className="col py-3 px-0" id='visit-property-button-group'>
                                <button className="btn btn-info">RERA</button>
                                <button className="btn mx-2 text-success border border-secondary">No Brokerage</button>
                                <button className="btn mx-2 border border-secondary">3D Floor Plans Available</button>
                                <button className='btn mx-2 border border-secondary'>+30 Top Facilities</button>
                            </div>
                            <div className="col py-4 my-4" id="propty-notes">
                                <div className="col p-0">
                                    <h5 className='text-secondary'><span>CONSTRUCTION STATUS</span></h5>
                                    <h5><b>Ready To Move</b></h5>
                                </div>
                            </div>
                            <div className="col py-3" id='top-facility'>
                                <h4>Top Facilities</h4>
                                <span className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fugit</span>
                                <div className="row py-3">
                                    <div className="col-lg-3 col-md-5 col-sm-6 py-2 ">
                                        <div className="col px-2 py-4 facility-item">
                                            <h3>
                                                <i class="fa-solid fa-plate-wheat"></i>
                                            </h3>
                                            <span className='font-weight-bold'>Food Court</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-sm-6 py-2 ">
                                        <div className="col py-4 facility-item">
                                            <h3>
                                                <i class="fa-solid fa-person-swimming"></i>
                                            </h3>
                                            <span className='font-weight-bold'>Swimming Pool</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-sm-6 py-2 ">
                                        <div className="col py-4 facility-item">
                                            <h3>
                                                <i class="fa-solid fa-credit-card"></i>
                                            </h3>
                                            <span className='font-weight-bold'>ATM</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-sm-6 py-2 ">
                                        <div className="col py-4 facility-item">
                                            <h3>
                                                <i class="fa-solid fa-utensils"></i>
                                            </h3>
                                            <span className='font-weight-bold'>Restorent</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-sm-6 py-2 ">
                                        <div className="col py-4 facility-item">
                                            <h3>
                                                <i class="fa-solid fa-toilet"></i>
                                            </h3>
                                            <span className='font-weight-bold'>Waiting Lounge</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-sm-6 py-2 ">
                                        <div className="col py-4 facility-item">
                                            <h3>
                                                <i class="fa-solid fa-oil-can"></i>
                                            </h3>
                                            <span className='font-weight-bold'>Piped Gas</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-sm-6 py-2 ">
                                        <div className="col py-4 facility-item">
                                            <h3>
                                                <i class="fa-solid fa-bottle-water"></i>
                                            </h3>
                                            <span className='font-weight-bold'>Water Plant</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-sm-6 py-2 ">
                                        <div className="col py-4 facility-item">
                                            <h3>
                                                <i class="fa-solid fa-hands-holding-child"></i>
                                            </h3>
                                            <span className='font-weight-bold'>Day Care</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-sm-6 py-2 ">
                                        <div className="col py-4 facility-item">
                                            <h3>
                                                <i class="fa-solid fa-masks-theater"></i>
                                            </h3>
                                            <span className='font-weight-bold'>Theatre</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="col py-3" id='location-advantages'>
                                <h4>Location Advantages</h4>
                                <span className='text-secondary'>Lorem ipsum dolor sit amet consectetur</span>
                                <div className="row py-2">
                                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                                        <div className="col loc-item p-2">
                                            <div className="row">
                                                <div className="col-4">
                                                    <i class="fa-solid fa-bus"></i>
                                                </div>
                                                <div className="col-8">
                                                    <p className='p-0 m-0'><b>Bus Stop</b></p>
                                                    <span className="text-secondary">160 Meter</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                                        <div className="col loc-item p-2">
                                            <div className="row">
                                                <div className="col-4">
                                                    <i class="fa-solid fa-shop"></i>
                                                </div>
                                                <div className="col-8">
                                                    <p className='p-0 m-0'><b>Mini Mall</b></p>
                                                    <span className="text-secondary">500 Meter</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                                        <div className="col loc-item p-2">
                                            <div className="row">
                                                <div className="col-4">
                                                    <i class="fa-solid fa-building-columns"></i>
                                                </div>
                                                <div className="col-8">
                                                    <p className='p-0 m-0'><b>Bank</b></p>
                                                    <span className="text-secondary">800 Meter</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                                        <div className="col loc-item p-2">
                                            <div className="row">
                                                <div className="col-4">
                                                    <i class="fa-solid fa-graduation-cap"></i>
                                                </div>
                                                <div className="col-8">
                                                    <p className='p-0 m-0'><b>Collage</b></p>
                                                    <span className="text-secondary">2 KM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                                        <div className="col loc-item p-2">
                                            <div className="row">
                                                <div className="col-4">
                                                    <i class="fa-regular fa-hospital"></i>
                                                </div>
                                                <div className="col-8">
                                                    <p className='p-0 m-0'><b>Hospital</b></p>
                                                    <span className="text-secondary">1 KM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                                        <div className="col loc-item p-2">
                                            <div className="row">
                                                <div className="col-4">
                                                    <i class="fa-solid fa-building-shield"></i>
                                                </div>
                                                <div className="col-8">
                                                    <p className='p-0 m-0'><b>Police Station</b></p>
                                                    <span className="text-secondary">1.5 KM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="col py-3">
                                <div className="col p-0">
                                    <h5 className='font-weight-bold'>Lorem ipsum dolor sit amet</h5>
                                    <p className='py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto veniam libero a voluptas accusamus natus voluptatibus itaque odio ad asperiores dolorum, eveniet nam! Quasi laudantium officia consequuntur repellat. Ipsum voluptate dolorum ipsam laudantium id ut corporis repellendus, modi repudiandae distinctio, neque sunt accusantium saepe a, repellat ab quo deleniti nulla?</p>
                                    <p className='m-0'><b>Lorem ipsum dolor sit, amet consectetur adipisicing elit</b></p>
                                    <p className='m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus voluptate praesentium quos consequatur consequuntur, recusandae porro? Iste quia, optio dicta quae dignissimos recusandae corporis dolores facilis, est, dolorum voluptatem?</p>
                                </div>
                            </div>
                            <hr />
                            <div className="col py-4 px-0 ready-to-move">
                                <h4 className='py-2'>Lorem ipsum dolor sit amet</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="col p-3 ready-item">
                                            <span className='text-secondary'>Phase 1</span>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                                            <button className="btn border border-secondary">Ready to Move</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="col p-3 ready-item">
                                            <span className='text-secondary'>Phase 1</span>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                                            <button className="btn border border-secondary">Ready to Move</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="col-lg-4 col-md-4 col-sm-12 py-5">
                            <div className="col py-5" id='right-propty-item'>
                                <h4>Lorem ipsum dolor sit amet consectetur</h4>
                                <li className='py-2'><span>50% Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim</span></li>                                
                                <li className='py-2'><span>70% Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim</span></li>
                                <li className='py-2'><span>80% Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim</span></li>
                                <li className='py-2'><span>90% Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim</span></li>
                                <button className="btn text-info font-weight-bold my-2">View More <span><i class="fa-solid fa-angles-right"></i></span></button>
                                <hr />
                                <span className="font-weaight-bold">DEVELOPED BY</span>
                                <h5 className='py-3'>Lorem ipsum dolor sit</h5>
                                <button className="btn border border-info font-weight-bold text-info">Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
