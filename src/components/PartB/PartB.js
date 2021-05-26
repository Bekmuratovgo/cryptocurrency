import React from 'react';
import group from '../../img/group14.png'
import './PartB.css'


const PartB = () => {
    return (
        <div className="container" >
            <div className="row part-b">
                <div className="col-sm-6" >
                    <img className="phone-girl" src={group} alt="img-rectangle"/>
                </div>
                <div className="col-sm-6 right-side">
                    <h6 className="subtitle"><span className="welcome">01. WELCOME</span></h6>
                    <div className="block-for-h1">
                        <h1>Lymcoins is Digigtal Cash You Can Spend Anywhere</h1>
                    </div>
                    <p>Use Lymcoin to make instant, private payments online or in-store using our secure open-source platform hosted by thousands of users around the world.</p>
                </div>
            </div>

        </div>
    );
};

export default PartB;