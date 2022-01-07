import React from 'react'
import { NavLink } from 'react-router-dom';
import  HomImage from  '../src/images/home.png';
import Common from './common'

export default function Home() {
    return (
        <Common imgSrc={HomImage} subTitle="Let's do the make of your business today." title="Grow Your Business With" desc="We're Team very talented & Experienced." visit="/services" visitText="Get Started" />
    )
}
