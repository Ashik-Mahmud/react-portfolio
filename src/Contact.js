import React from 'react';
import  contImage from  '../src/images/contact.png';

export default function Contact() {
    return (
        <div id="contact">
             <div className="contact container ">
                
                 <div className="row justify-content-center align-items-center">
                     <div className="col-lg-5 shadow-sm p-5">
                          <h2 className="my-3 ">Contact Us Today.</h2>
                            <form action="/" method="POST">
                                <div className="my-1">
                                    <label for="name">Your Name</label>
                                    <input type="text" className="form-control rounded-0" id="name" />
                                </div>
                                  <div className="my-2">
                                    <label for="subject">Your Subject</label>
                                    <input type="text" className="form-control rounded-0" id="subject" />
                                </div>
                                  <div className="my-2">
                                    <label for="email">Your Email</label>
                                    <input type="email" className="form-control rounded-0" id="email" />
                                </div>
                                <div className="my-2">
                                    <label for="messages">Your Messages</label>
                                    <textarea className="form-control rounded-0" rows="5" id="messages"></textarea>
                                </div>
                                <div className="my-1">
                                    <button className="btn-own">Send Message</button>
                                </div>
                            </form>
                     </div>
                     <div className="col-lg-6">
                        <div>
                               <img src={contImage} className="img-fluid animated" alt="home-iamge"/>
                        </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}
