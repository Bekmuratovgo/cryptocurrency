import React from 'react';
import './PartK.css'
import romb from '../../img/romb.png'
import qr from '../../img/qr.png'
import bitcoin from '../../img/bitcoin.png'

const PartK = () => {
    return (
        <div className="w-100 container">
            <div className="event">
                <h6 className="for-welcome"><span className="welcome">10. EVENTS</span></h6>
                <h1 className="donate">Donate to Support<br/> Development</h1>
                <p>Lymcoin is not a pre-mined coin, so all of its development is funded <br/> by kind people like you.</p>
            </div>
            <div className="row">
                <div className="col-sm-6 left-bit">
                    <div className="qr-block">
                        <img className="bit" src={romb} alt="" />
                        <div className="somesleep">
                            <h4>177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1</h4>
                            <p>Lymcoin Wallet Address</p>
                        </div>
                        <img className="sss" src={qr} alt="img" />
                    </div>
                </div>
                <div className="col-sm-6 right-bit">
                <div className="qr-block">
                        <img className="bit" src={bitcoin} alt="" />
                        <div className="somesleep">
                            <h4>177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1</h4>
                            <p>Lymcoin Wallet Address</p>
                        </div>
                        <img className="sss" src={qr} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartK;