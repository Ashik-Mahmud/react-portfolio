import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
            <div className="py-2 bg-light">
                <p className="lead text-center">&copy;Copyright By 2021 & Alirght Resereved <NavLink to="/" className="alert-link">Ashik Mahmud</NavLink></p>
            </div>
    )
}
