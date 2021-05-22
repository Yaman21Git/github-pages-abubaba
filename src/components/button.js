import React from 'react'
import './button.css'
import '../App.css';
import {Link} from 'react-router-dom'

const STYLES=['btn--primary','btn--outline','btn--rounded','btn--round-whitebor'];
const SIZES=['btn--medium','btn--large'];

export const Button=({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const chechButtonStyle = STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
    const chechButtonSize = SIZES.includes(buttonSize)?buttonSize:SIZES[0];

    return(
        <Link to="/signup" className="btn-mobile">
            <button className={`btn ${chechButtonStyle} ${chechButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};