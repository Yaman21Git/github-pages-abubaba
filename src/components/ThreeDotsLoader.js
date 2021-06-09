import React from 'react';
import "./ThreeDotsLoader.css"

const ThreeDotsLoader = () => {
    return (
        <div className="loader_Container">
            <div className="spinner_container">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div>
    );
};

export default ThreeDotsLoader;