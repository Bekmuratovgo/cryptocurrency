import React from 'react';
import './PartD.css'
// import shadow from '../../img/Vector.png'
// import mobile from '../../img/mobile_phone_png_887205.png'
import tws from '../../img/telephonewithshadow.png'


const PartD = () => {
    return (
        <div className="w-100">
            <div className="container">
                <div className="row block-d">
                    <div className="col-sm-5" >
                        <img className="tws" src={tws} alt="" />
                    </div>
                    <div className="col-sm-7 right">
                        <h6 className="for-welcome"><span className="welcome">03. WELCOME</span></h6>
                        <div className="block-for-digital">
                            <h1>Lymcoins is Digigtal Cash<br/> You Can Spend<br/> Anywhere</h1>
                        </div>
                        <p>Use Lymcoin to make instant, private payments online or in-store using our secure open-source platform hosted by thousands of users around the world.</p>
                        <button className="after-p">CONTACT US</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartD;