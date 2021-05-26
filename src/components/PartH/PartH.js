import React from 'react';
import './PartH.css';
import team1 from '../../img/partG/team1.png'
import team2 from '../../img/partG/team2.png'
import team3 from '../../img/partG/team3.png'

const PartH = () => {
    return (
        <div className="w-100 container">
            <div className="row team">
                <div className="implementation">
                    <h6 className="for-welcome"><span className="welcome">07. TEAM</span></h6>
                    <h1>Team & Advisors</h1>
                    <p>With a team of top technology and finance professionals, the nonprofit Lymcoin expands access<br/> to low-cost financial services to fight poverty and maximize individual potential.</p>
                    <div className="container">
                        <div className="row our-team">
                            <div className="col-sm-4">
                                <img src={team1} alt="" />
                                <h4 className="name">John Nelson</h4>
                                <p className="job">Account Manager</p>
                            </div>
                            <div className="col-sm-4">
                                <img src={team2} alt="" />
                                <h4 className="name">John Nelson</h4>
                                <p className="job">Account Manager</p>
                            </div>
                            <div className="col-sm-4">
                                <img src={team3} alt="" />
                                <h4 className="name">John Nelson</h4>
                                <p className="job">Account Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartH;