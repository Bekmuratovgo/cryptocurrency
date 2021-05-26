import React from 'react';
import './PartJ.css'

const PartJ = () => {
    return (
        <div className="w-100 container upcoming">
            {/* <div className> */}
                <div className="implementation">
                    <h6 className="for-welcome"><span className="welcome">10. EVENTS</span></h6>
                    <h1 className="up">Upcoming Events</h1>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="april-block">
                                <h3>16</h3>
                                <h2 className="qwerty">April 2019</h2>
                                <h4>ETHIL VOTING</h4>
                                <p>“The Ethyl Community Fund Proposal has started their voting.”</p>
                                <button className="after-p-1" style={{margin:'0 10px',background:'white',color:'black'}}>READ MORE</button>
                            </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="april-block">
                                <h3>30</h3>
                                <h2 className="qwerty">May 2019</h2>
                                <h4>CHAINGES CONFERENCE</h4>
                                <p>“The Ethyl Community Fund Proposal has started their voting.”</p>
                                <button className="after-p-1" style={{margin:'0 10px'}}>READ MORE</button>
                            </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="april-block">
                                <h3>10</h3>
                                <h2 className="qwerty">June 2019</h2>
                                <h4>ETHIL VOTING</h4>
                                <p>“The Ethyl Community Fund Proposal has started their voting.”</p>
                                <button className="after-p-1" style={{margin:'0 10px',background:'white',color:'black'}}>READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>

            {/* </div> */}
        </div>
    );
};

export default PartJ;