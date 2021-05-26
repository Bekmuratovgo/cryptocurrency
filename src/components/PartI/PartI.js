import React from 'react';
import './PartI.css'
// import stone from '../../img/stone.png'
import windows from '../../img/partG/windows.png'
import comps from '../../img/comp.png'

const PartI = () => {
    return (
        <div className="w-100 container-fluid main-stone">
            <div className="container stone">
                <div className="row ">
                    <div className="col-sm-7 left-stone">
                        <div className="container stone-container">
                            <h6 className="for-miner"><span className="welcome">09. MINER</span></h6>
                            <h1 className="title-stone">Compatible GPU Miner Software</h1>
                            <p>Download one of these miners for your GPU</p>
                            <div className="black-block">
                                <div className="win-block">
                                   <img src={windows} alt="img" />
                                   <div className="www">
                                        <h1>Windows Lymcoin Miner</h1>
                                        <p>Download</p>
                                   </div>
                                </div>
                                <div className="lin-block">
                                {/* <div className="win-block"> */}
                                   <img src={windows} alt="img" />
                                   <div className="www">
                                        <h1>Windows Lymcoin Miner</h1>
                                        <p>Download</p>
                                   </div>
                                {/* </div> */}
                                </div>
                            </div>
                                <div className="number-block">
                                    <p className="the-first">87 278</p>
                                    <p className="the-second">2.82 Tsol/s</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-5" style={{display:'flex', alignItems:'flex-end'}}>
                        <img src={comps} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartI;