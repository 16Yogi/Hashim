import React from 'react'
import './Aboutservice.scss'

import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function Aboutservice() {

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };

  return (
    <>
        <div className="container-fluid py-5" id='about-ser-cf'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="col">
                            <div className="col p-1" id='about-ser-item'>
                                <GoogleMapReact
                                  bootstrapURLKeys={{ key: "" }}
                                  defaultCenter={defaultProps.center}
                                  defaultZoom={defaultProps.zoom}
                                >
                                  <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text="My Marker"
                                  />
                                </GoogleMapReact>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col my-3 py-3" id='about-ser-item-2'>
                                <p>Select Your Buget</p>
                                <input type="range" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="col my-3 py-3" id='about-ser-item-2'>
                                <p>Search</p>
                                <input type="Search" className='h-20' placeholder='Search Here'/>
                                <button className="btn btn-info">Search</button>
                            </div>
                        </div>
                    </div>
                    {/*col right */}
                    <div className="col-lg-8" id='col-rs'>
                        <div className="col">
                            <h4 className='py-2'>391 results | Single room for Rent in Jaipur</h4>
                            <p className='bg-warning py-2 px-2'>
                                <i class="fa-solid fa-location-dot"></i>
                                <span className='mx-3'>Get to know more about <strong>Jaipur</strong></span>
                                <a href="/" className='link'>View Insights <i class="fa-solid fa-chevron-right"></i></a>
                            </p>
                            <div className="col py-4 px-0">
                                <button className='btn btn-dark py-1 px-4 '>Owner</button>
                                <button className='btn btn-dark py-1 px-4 mx-2'>Verified</button>
                                <button className='btn btn-dark py-1 px-4 mx-2'>Furnished</button>
                                <button className='btn btn-dark py-1 px-4 mx-2'>With Photo</button>
                                <button className='btn btn-dark py-1 px-4 mx-2'>With Videos</button>
                            </div>
                            <div className="p-0 col-lg-12 col-md-12 col-sm-12 as-right-item">
                                <div className="row">
                                    <div className="col-4">
                                        <Link to="/viewpropety">
                                            <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-8 py-2">
                                        <Link to="/viewpropety" className='text-decoration-none text-dark'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                            <p><strong>Lorem ipsum dolor sit</strong></p>
                                            <h5><strong className=''>RS-45000</strong><strong className='px-5'>45000 sq.ft</strong> <strong className=''>1 BHK</strong></h5>
                                            <p className='py-2'><span>Lorem ipsum</span><span className='px-5'>Lorem ipsum</span><span>Lorem ipsum</span></p>
                                            <span>Lorem ipsum amet consectetur adipisicing elit Itaque expedita</span>
                                            <hr />
                                        </Link>
                                        <button className="btn btn-info" data-toggle="modal" data-target="#mobilenumber">View Phone Number</button>
                                        <button className="btn btn-info mx-4" data-toggle="modal" data-target="#ownerdetails">Contact Owner</button>
                                    </div>
                                    {/* Mobile number model */}
                                    <div class="modal fade" id="mobilenumber">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">View Mobile Number</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            MoBile Number:- +91-7896541230
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Mobile number model */}
                                    {/* Owner Details model */}
                                    <div class="modal fade" id="ownerdetails">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">Owner Details</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            <p><b>Owner Name-</b> Mohan Pandey</p>
                                            <p><b>Address-</b> Bhopal, Bhopal, Pincode-789654</p>
                                            <p><b>Mobile Number-</b> +91-7896541230</p> 
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Owner Details model */}

                                </div>
                            </div>
                            
                            <div className="p-0 my-4 col-lg-12 col-md-12 col-sm-12 as-right-item">
                            <div className="row">
                                    <div className="col-4">
                                        <Link to="/viewpropety">
                                            <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-8 py-2">
                                        <Link to="/viewpropety" className='text-decoration-none text-dark'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                            <p><strong>Lorem ipsum dolor sit</strong></p>
                                            <h5><strong className=''>RS-45000</strong><strong className='px-5'>45000 sq.ft</strong> <strong className=''>1 BHK</strong></h5>
                                            <p className='py-2'><span>Lorem ipsum</span><span className='px-5'>Lorem ipsum</span><span>Lorem ipsum</span></p>
                                            <span>Lorem ipsum amet consectetur adipisicing elit Itaque expedita</span>
                                            <hr />
                                        </Link>
                                        <button className="btn btn-info" data-toggle="modal" data-target="#mobilenumber">View Phone Number</button>
                                        <button className="btn btn-info mx-4" data-toggle="modal" data-target="#ownerdetails">Contact Owner</button>
                                    </div>
                                    {/* Mobile number model */}
                                    <div class="modal fade" id="mobilenumber">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">View Mobile Number</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            MoBile Number:- +91-7896541230
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Mobile number model */}
                                    {/* Owner Details model */}
                                    <div class="modal fade" id="ownerdetails">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">Owner Details</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            <p><b>Owner Name-</b> Mohan Pandey</p>
                                            <p><b>Address-</b> Bhopal, Bhopal, Pincode-789654</p>
                                            <p><b>Mobile Number-</b> +91-7896541230</p> 
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Owner Details model */}

                                </div>
                            </div>

                            <div className="p-0 my-4 col-lg-12 col-md-12 col-sm-12 as-right-item">
                                <div className="row">
                                    <div className="col-4">
                                        <Link to="/viewpropety">
                                            <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-8 py-2">
                                        <Link to="/viewpropety" className='text-decoration-none text-dark'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                            <p><strong>Lorem ipsum dolor sit</strong></p>
                                            <h5><strong className=''>RS-45000</strong><strong className='px-5'>45000 sq.ft</strong> <strong className=''>1 BHK</strong></h5>
                                            <p className='py-2'><span>Lorem ipsum</span><span className='px-5'>Lorem ipsum</span><span>Lorem ipsum</span></p>
                                            <span>Lorem ipsum amet consectetur adipisicing elit Itaque expedita</span>
                                            <hr />
                                        </Link>
                                        <button className="btn btn-info" data-toggle="modal" data-target="#mobilenumber">View Phone Number</button>
                                        <button className="btn btn-info mx-4" data-toggle="modal" data-target="#ownerdetails">Contact Owner</button>
                                    </div>
                                    {/* Mobile number model */}
                                    <div class="modal fade" id="mobilenumber">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">View Mobile Number</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            MoBile Number:- +91-7896541230
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Mobile number model */}
                                    {/* Owner Details model */}
                                    <div class="modal fade" id="ownerdetails">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">Owner Details</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            <p><b>Owner Name-</b> Mohan Pandey</p>
                                            <p><b>Address-</b> Bhopal, Bhopal, Pincode-789654</p>
                                            <p><b>Mobile Number-</b> +91-7896541230</p> 
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Owner Details model */}

                                </div>
                            </div>

                            <div className="p-0 my-4 col-lg-12 col-md-12 col-sm-12 as-right-item">
                                <div className="row">
                                    <div className="col-4">
                                        <Link to="/viewpropety">
                                            <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-8 py-2">
                                        <Link to="/viewpropety" className='text-decoration-none text-dark'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                            <p><strong>Lorem ipsum dolor sit</strong></p>
                                            <h5><strong className=''>RS-45000</strong><strong className='px-5'>45000 sq.ft</strong> <strong className=''>1 BHK</strong></h5>
                                            <p className='py-2'><span>Lorem ipsum</span><span className='px-5'>Lorem ipsum</span><span>Lorem ipsum</span></p>
                                            <span>Lorem ipsum amet consectetur adipisicing elit Itaque expedita</span>
                                            <hr />
                                        </Link>
                                        <button className="btn btn-info" data-toggle="modal" data-target="#mobilenumber">View Phone Number</button>
                                        <button className="btn btn-info mx-4" data-toggle="modal" data-target="#ownerdetails">Contact Owner</button>
                                    </div>
                                    {/* Mobile number model */}
                                    <div class="modal fade" id="mobilenumber">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">View Mobile Number</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            MoBile Number:- +91-7896541230
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Mobile number model */}
                                    {/* Owner Details model */}
                                    <div class="modal fade" id="ownerdetails">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">Owner Details</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            <p><b>Owner Name-</b> Mohan Pandey</p>
                                            <p><b>Address-</b> Bhopal, Bhopal, Pincode-789654</p>
                                            <p><b>Mobile Number-</b> +91-7896541230</p> 
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Owner Details model */}

                                </div>
                            </div>
                            <div className="p-0 my-4 col-lg-12 col-md-12 col-sm-12 as-right-item">
                            <div className="row">
                                    <div className="col-4">
                                        <Link to="/viewpropety">
                                            <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-8 py-2">
                                        <Link to="/viewpropety" className='text-decoration-none text-dark'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                            <p><strong>Lorem ipsum dolor sit</strong></p>
                                            <h5><strong className=''>RS-45000</strong><strong className='px-5'>45000 sq.ft</strong> <strong className=''>1 BHK</strong></h5>
                                            <p className='py-2'><span>Lorem ipsum</span><span className='px-5'>Lorem ipsum</span><span>Lorem ipsum</span></p>
                                            <span>Lorem ipsum amet consectetur adipisicing elit Itaque expedita</span>
                                            <hr />
                                        </Link>
                                        <button className="btn btn-info" data-toggle="modal" data-target="#mobilenumber">View Phone Number</button>
                                        <button className="btn btn-info mx-4" data-toggle="modal" data-target="#ownerdetails">Contact Owner</button>
                                    </div>
                                    {/* Mobile number model */}
                                    <div class="modal fade" id="mobilenumber">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">View Mobile Number</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            MoBile Number:- +91-7896541230
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Mobile number model */}
                                    {/* Owner Details model */}
                                    <div class="modal fade" id="ownerdetails">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">Owner Details</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            <p><b>Owner Name-</b> Mohan Pandey</p>
                                            <p><b>Address-</b> Bhopal, Bhopal, Pincode-789654</p>
                                            <p><b>Mobile Number-</b> +91-7896541230</p> 
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Owner Details model */}

                                </div>
                            </div>
                            <div className="p-0 my-4 col-lg-12 col-md-12 col-sm-12 as-right-item">
                            <div className="row">
                                    <div className="col-4">
                                        <Link to="/viewpropety">
                                            <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-8 py-2">
                                        <Link to="/viewpropety" className='text-decoration-none text-dark'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                            <p><strong>Lorem ipsum dolor sit</strong></p>
                                            <h5><strong className=''>RS-45000</strong><strong className='px-5'>45000 sq.ft</strong> <strong className=''>1 BHK</strong></h5>
                                            <p className='py-2'><span>Lorem ipsum</span><span className='px-5'>Lorem ipsum</span><span>Lorem ipsum</span></p>
                                            <span>Lorem ipsum amet consectetur adipisicing elit Itaque expedita</span>
                                            <hr />
                                        </Link>
                                        <button className="btn btn-info" data-toggle="modal" data-target="#mobilenumber">View Phone Number</button>
                                        <button className="btn btn-info mx-4" data-toggle="modal" data-target="#ownerdetails">Contact Owner</button>
                                    </div>
                                    {/* Mobile number model */}
                                    <div class="modal fade" id="mobilenumber">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">View Mobile Number</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            MoBile Number:- +91-7896541230
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Mobile number model */}
                                    {/* Owner Details model */}
                                    <div class="modal fade" id="ownerdetails">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">Owner Details</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            <p><b>Owner Name-</b> Mohan Pandey</p>
                                            <p><b>Address-</b> Bhopal, Bhopal, Pincode-789654</p>
                                            <p><b>Mobile Number-</b> +91-7896541230</p> 
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Owner Details model */}

                                </div>
                            </div>
                            <div className="p-0 my-4 col-lg-12 col-md-12 col-sm-12 as-right-item">
                            <div className="row">
                                    <div className="col-4">
                                        <Link to="/viewpropety">
                                            <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-8 py-2">
                                        <Link to="/viewpropety" className='text-decoration-none text-dark'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                            <p><strong>Lorem ipsum dolor sit</strong></p>
                                            <h5><strong className=''>RS-45000</strong><strong className='px-5'>45000 sq.ft</strong> <strong className=''>1 BHK</strong></h5>
                                            <p className='py-2'><span>Lorem ipsum</span><span className='px-5'>Lorem ipsum</span><span>Lorem ipsum</span></p>
                                            <span>Lorem ipsum amet consectetur adipisicing elit Itaque expedita</span>
                                            <hr />
                                        </Link>
                                        <button className="btn btn-info" data-toggle="modal" data-target="#mobilenumber">View Phone Number</button>
                                        <button className="btn btn-info mx-4" data-toggle="modal" data-target="#ownerdetails">Contact Owner</button>
                                    </div>
                                    {/* Mobile number model */}
                                    <div class="modal fade" id="mobilenumber">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">View Mobile Number</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            MoBile Number:- +91-7896541230
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Mobile number model */}
                                    {/* Owner Details model */}
                                    <div class="modal fade" id="ownerdetails">
                                      <div class="modal-dialog modal-sm">
                                        <div class="modal-content">    
                                          <div class="modal-header">
                                            <h4 class="modal-title">Owner Details</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          </div>                         
                                          <div class="modal-body">
                                            <p><b>Owner Name-</b> Mohan Pandey</p>
                                            <p><b>Address-</b> Bhopal, Bhopal, Pincode-789654</p>
                                            <p><b>Mobile Number-</b> +91-7896541230</p> 
                                          </div>   
                                          <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End Owner Details model */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
