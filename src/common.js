import React from 'react'
import { NavLink } from 'react-router-dom';
import  HomImage from  '../src/images/home.png';

export default function Common(props) {
    return (
        <section id="home" >
            <div className="container">
               <div className="row justify-content-between align-items-center ">
                    <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-5 col-sm-12 col-12">
                        <div>
                            <span className="text-muted mb-2">{props.subTitle}</span>
                            <h1 className="text-dark my-2">{props.title} <strong className="text-own text-uppercase">WebLesson</strong></h1>
                            <p className="lead">{props.desc}</p>
                            <NavLink to={props.visit} className="btn-own">{props.visitText}</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-5 col-sm-12 col-12">
                        <div>
                            <img src={props.imgSrc} className="img-fluid animated" alt="home-iamge"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
