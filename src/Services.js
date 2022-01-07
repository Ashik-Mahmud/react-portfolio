import React from 'react';
import Card from "./Card";
import Sdata from "./Sdata";

export default function Services() {
    return (
        <div id="services">
            <div className="services container py-5">
                <h1 className="text-center my-4">Our Best Services</h1>
                <div className="services-content row gy-4 pt-4">
                    {
                        Sdata.map((val, ind)=>{
                            return <Card key={ind}  imgSrc={val.imgSrc} title={val.title} />; 
                        })
                        
                    }
                </div>
            </div>
        </div>
    )
}
