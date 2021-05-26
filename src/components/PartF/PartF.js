import React from 'react';
import './PartF.css'
import pl from '../../img/undraw_connected_world_wuay.png'
import plus1 from '../../img/plus1.png'
import plus2 from '../../img/plus2.png'
import bitrix1 from '../../img/bit1.png'
import bitrix2 from '../../img/bit2.png'
import bitrix3 from '../../img/bit3.png'



const PartF = () => {
    return (
        <div className="w-100 container-fluid planet">
            <div className="row block-f">
                <div className="col-sm-6 side-left">
                   <div className="container growing">
                        <h6 className="net"><span className="welcome">05. NETWORK</span></h6>
                        <h1>Growing Global Network</h1>
                        <p>Lymcoin is rapidly gaining popularity among crypto community. Lots<br/>of real companies and exchanges have adopted our coin already.<br/> There is much more to come. Stay tuned.</p>
                        <div className="plus">
                            <img className="plus1" src={plus1} alt="img" />
                            <img className="plus2" src={plus2} alt="img"/>
                        </div>
                        <div className="trio-bitrix">
                            <img className="asd1" src={bitrix3} alt="img" />
                            <img className="asd2" src={bitrix1} alt="img" />
                            <img className="asd3" src={bitrix2} alt="img" />
                        </div>
                   </div>

                </div>
                <div className="col-sm-6 pl">
                    <div className='container'>
                        <img src={pl} alt="img" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartF;