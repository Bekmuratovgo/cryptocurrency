import React from 'react';
import './PartA.css'
import mainPhoto from '../../img/phone-main.png'

const PartA = () => {
    return (
        <div className="container-fluid asd">
            <div className="container-fluid" style={{margin:'10px'}}>
                <div className="block-for-secure">
                    <h1 className="secure">SECURE AND ANONYMOUS <span className="line">CR</span>YPTOCURRENCY</h1>
                </div>
                    <div className="row" >
                        <div className="col-sm-12 block-lymcoin">
                            <p className="lymcoin">Lymcoin is a decentralized, hybrid blockhain<br/> that is fully open-source</p>
                            <button className="btn-twin">contact us</button>
                            <button className="btn-twin-b">contact us</button>
                        </div>
                        {/* <div className="col-sm-6 block-phone">
                            <img src={mainPhoto} alt="img"/>
                        </div> */}
                    </div>
            </div>
        </div>
    );
};

export default PartA;