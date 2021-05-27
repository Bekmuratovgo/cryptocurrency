import React from 'react';
import './PartC.css'

import clock from '../../img/clock.png'
import objective from '../../img/objective.png'
import pie from '../../img/pie-chart.png'
import suitcase from '../../img/suitcase.png'



const PartC = () => {
    return (
        <div className="w-100">
            {/* Its just comment. After 15min delete this comment */}
            <div className="container part-c">
                <h2><span className="ben-span">0.2 BENEFITS</span></h2>
                <h1 className="main-title">Lymcoin Benefits</h1>
                <div className="row four-card">
                    <div className="col-sm-3">
                       <div className="inside-block">
                        <h1 className="num">0.1</h1>
                            <div className="card-1">
                                <img src={pie} alt="img" />
                                <h1>Lymcoin Benefits</h1>
                                <p>Use Lymcoin to make<br/> instant</p>
                            </div>
                       </div>
                    </div>

                    <div className="col-sm-3">
                    <div className="inside-block">
                        <h1 className="num">0.2</h1>
                        <div className="card-1">
                            <img src={suitcase} alt="img" />
                            <h1>Lymcoin Benefits</h1>
                            <p>Use Lymcoin to make<br/> instant</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-sm-3">
                    <div className="inside-block">
                        <h1 className="num">0.3</h1>
                        <div className="card-1">
                            <img src={objective} alt="img" />
                            <h1>Lymcoin Benefits</h1>
                            <p>Use Lymcoin to make<br/> instant</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-sm-3">
                    <div className="inside-block">
                        <h1 className="num">0.4</h1>
                        <div className="card-1">
                            <img src={clock} alt="img" />
                            <h1>Lymcoin Benefits</h1>
                            <p>Use Lymcoin to make<br/> instant</p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PartC;