import React, { useState } from 'react'
import './Worktogether.scss'

export default function Workstogether() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [comment,setComment] = useState("");

  const senddata = async()=>{
       try{
          const user = {
            name:name,
            email:email,
            mobile:mobile,
            comment:comment
          };
          const data = await fetch("http://localhost:5000/users",{
            method:"post",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
          });
        }    catch{}
  };

  const name1 = (e) =>{
    const value = e.target.value;
    setName(value);
  };

  const email1 = (e) =>{
    const value = e.target.value;
    setEmail(value);
  };
  
  const mobile1 = (e) =>{
    const value = e.target.value;
    setMobile(value);
  };

  const comment1 = (e) =>{
    const value = e.target.value;
    setComment(value);
  };

  return (
    <>
        <div className='container-fluid' id="worktogether-c-f">
            <div className='container'>
                {/* <div className='row'> */}
                    <div className='col'>
                        <h3>Let's Work Together</h3>
                    </div>
                    <div className='col p-5 mx-auto' id="worktogether-wrapper">
                        <form action="" method=''>
                            <div className="form-group">
                              <label for="username">Full Name:</label>
                              <input type="text" className="form-control" placeholder="Full Name" id="username" name="name" onChange={name1} value={name}/>
                            </div>
                            <div className="form-group">
                              <label for="email">Email Address:</label>
                              <input type="email" className="form-control" placeholder="Email" id="email" name="email" onChange={email1} value={email}/>
                            </div>
                            <div className="form-group">
                              <label for="mobile">Mobile:</label>
                              <input type="mobile" className="form-control" placeholder="Mobile Number" id="mobile" onChange={mobile1} value={mobile}/>
                            </div>
                            <div className="form-group">
                              <label for="comment">Comment:</label>
                              <textarea className="form-control" rows="5" id="comment" name="comment" onChange={comment1} value={comment}></textarea>
                            </div>
                            {/* <div className="form-group form-check">
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"/> Remember me
                              </label>
                            </div> */}
                            <button type="submit" className="btn btn-info" name='submit' onClick={senddata}>Submit</button>
                        </form>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </>
    )
}
