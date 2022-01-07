import React from 'react'
import { NavLink } from 'react-router-dom';
import AbtImage from  '../src/images/about.png';
import Common from './common'
export default function About() {
    return (
        <div>
           <Common imgSrc={AbtImage} subTitle="Expand you reputation" title="Let You know bunch of " desc="We're Team very talented & Experienced." visit="/contact" visitText="Contact Now"/>
        </div>
    )
}
