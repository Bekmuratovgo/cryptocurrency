import React from 'react';
import './PartG.css'
import man from '../../img/partG/man.png'
import android from '../../img/partG/android.png'
import apple from '../../img/partG/apple.png'
import windows from '../../img/partG/windows.png'
import linux from '../../img/partG/linux.png'

const PartG = () => {
    return (
        <div className="w-100">
            <div className="container">
                <div className="row" style={{marginTop:'100px'}}>
                    <div className="col-sm-5">
                        <img src={man} alt="" />
                    </div>
                    <div className="col-sm-7 " >
                        <h6 className="for-welcome"><span className="welcome">06. WALLET</span></h6>
                        <h1 className="wallet">Lymcoin Wallets</h1>
                        <button className="after-p-1" style={{margin:'0 10px'}}>CONTACT US</button>
                        <button className="after-p-2" style={{margin:'0 10px'}}>CONTACT US</button>
                        <button className="after-p-2" style={{margin:'0 10px'}}>CONTACT US</button>
                        <button className="after-p-2" style={{margin:'0 10px'}}>CONTACT US</button>
                        <div className="container">
                            <div className="row gadgets">
                                <div className="col-sm-6 ">
                                    <div className="android" style={{padding:'10px'}}>
                                        <img className="aalw" src={android} alt="" />
                                        <div style={{marginTop:'10px'}}>
                                            <h1>Android Lymcoin Wallet</h1>
                                            <p>Download</p>
                                        </div>
                                    </div>
                                    <div className="android" style={{padding:'10px',marginTop:'20px'}}>
                                        <img className="aalw" src={windows} alt="" />
                                        <div style={{marginTop:'10px'}}>
                                            <h1>Windows Lymcoin Wallet</h1>
                                            <p>Download</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="android" style={{padding:'10px'}}>
                                        <img className="aalw" src={apple} alt="" />
                                        <div style={{marginTop:'10px'}}>
                                            <h1>OSX  Lymcoin Wallet</h1>
                                            <p>Download</p>
                                        </div>
                                    </div>
                                    <div className="android" style={{padding:'10px',marginTop:'20px'}}>
                                        <img className="aalw" src={linux} alt="" />
                                        <div style={{marginTop:'10px'}}>
                                            <h1>Linux Lymcoin Wallet</h1>
                                            <p>Download</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartG;