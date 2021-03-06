
import React from 'react';
import ImageOne from "../images/egg.jpg";
import ImageTwo from "../images/egg-2.jpg";

const Content = () => {
    return (
        <>
            <div className="menu-card">
                <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow"/>

                <div className="center-content">
                    <h2 className="text-2xl mb-2">EggHouse Egg mixin :)</h2>
                    <p className="mb-2">Crispy, delicious, and nutritious</p>
                    <span>$18</span>
                </div>
            </div>

            <div className="menu-card">
                <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow"/>

                <div className="center-content">
                    <h2 className="text-2xl mb-2">EggHouse egg fratatta :)</h2>
                    <p className="mb-2">Stuffy, delicious, and nutritious</p>
                    <span>$20</span>
                </div>
            </div>


        </>
    )
}

export default Content;
