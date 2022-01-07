import React from 'react';
import cardImage from "../src/images/services/1.jpg";


export default function Card(props) {
    return (
       <div className="col-lg-4 col-xl-4 col-xxl-4 col-12 col-md-4">
                <div className="card rounded-0 border border-muted shadow-sm">
                        <img src={props.imgSrc} alt="card-image" className="img-fluid" />
                          <div className="card-body">
                                <h5 className="fw-bold my-1">{props.title}</h5>
                            <p className="text-muted mt-2">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reprehenderit beatae non.</p>
                            <a href="#" className="btn btn-primary btn-sm px-4">Read more</a>
                      </div>
                </div>
        </div>
    )

}
