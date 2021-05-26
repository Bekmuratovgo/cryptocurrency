import React from 'react';
import './PartE.css'
import rectangle2 from '../../img/sheet/Rectangle 3.4.png'
import rectangle1 from '../../img/sheet/Rectangle 3.png'
import rec1 from '../../img/sheet/Rectangle 3.1.png'
import rec2 from '../../img/sheet/Rectangle 3.2.png'
import rec3 from '../../img/sheet/Rectangle 3.3.png'
import rec4 from '../../img/sheet/Rec4.png'
import rec5 from '../../img/sheet/Rectangle 3.5.png'
import rec6 from '../../img/sheet/Rectangle 3.6.png'

import block2 from '../../img/blocks/image 2.png'
import block3 from '../../img/blocks/image 3.png'
import block4 from '../../img/blocks/image 4.png'
import block5 from '../../img/blocks/image 5.png'
import block6 from '../../img/blocks/image 6.png'
import block1 from '../../img/blocks/image.png'


const PartE = () => {
    return (
        <div className="w-100 container block-roadmap">
            <div className="implementation">
                <h6 className="for-welcome"><span className="welcome">04. ROADMAP</span></h6>
                <h1>Implementation Sheet</h1>
                <p>At Lymcoin we have one focus - creating a viable data marketplace to start returning value<br/> to token holders in the shortest time possible.</p>
            </div>
            <div className="vector" style={{position: 'relative'}}>
                <h6 className="data" style={{marginBottom:'10px'}}>November 2017</h6>
                <div className="odin">
                    <p>Tracking services for different <br/> smart contract types</p>
                    <h6 className="data">March 2018</h6>
                </div>
                <div className="dva">
                    <p>Release of a decentralized app<br/> for affiliate networks</p>
                    <h6 className="data">May 2020</h6>
                </div>

                <div className="data-line" style={{position: 'relative'}}>
                    <img className="rec-1" src={rectangle1} alt="img" />
                    <img className="rec-2" src={rectangle2} alt="img" />
                    <img className="rec-3" src={rec1} alt="img" />
                    <img className="rec-4" src={rec2} alt="img" />
                    <img className="rec-5" src={rec3} alt="img" />
                    <img className="rec-6" src={rec4} alt="img" />
                    <img className="rec-7" src={rec5} alt="img" />
                    <img className="rec-8" src={rec6} alt="img" />
                </div>

                <div className="tri">
                    <p>Development of different types<br/> of smart contracts (CPA, CPL,<br/> CPC, CPS, CPI)</p>
                    <h6 className="data">January 2018</h6>
                </div>
                <div className="chetyre">
                    <p>Release of a decentralized app<br/> for merchants / affiliates</p>
                    <h6 className="data">March 2019</h6>
                </div>
                <div className="pyat">
                    <p>Launch of the world's first<br/> decentralized affiliate network<br/> based on the HOQU platform</p>
                    <h6 className="data">September 2020</h6>
                </div>
            </div>

            <div className="row blocks-img">
               <div className="col-sm-2">
                    <img src={block1} alt="img" />              
               </div>
               <div className="col-sm-2">
                    <img src={block2} alt="img" />               
               </div>
               <div className="col-sm-2">
                    <img src={block3} alt="img" />
               </div>
               <div className="col-sm-2">
                    <img src={block4} alt="img" />
               </div>
               <div className="col-sm-2">
                    <img src={block5} alt="img" />
               </div>
               <div className="col-sm-2">
                    <img src={block6} alt="img" />
               </div>
            </div>

        </div>
    );
};

export default PartE;