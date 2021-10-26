import React from 'react';
import Fade from 'react-reveal/Fade';

const HomeBonus = () => {
    return (
        <div style={{backgroundColor:"#f1f6f9"}}>
            <div className="container pt-4">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                       <Fade left>
                       <img src="https://1r18mwdywg61doys93mjhyd1-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/iPhone-Patient-Start-Mockup-Facing-Right-360x528.png" alt="" />

                       </Fade>
                    </div >
                    <div className="col-md-6 col-sm-12 text-secondary ">
                       <Fade right>
                            
                        <h2>Telemedicine Benefits</h2>
                        <p>Using telemedicine as an alternative to in-person visits has a host of benefits for patients and providers alike.</p>
                        <p>Patients enjoy:</p>
                        <ul>
                            <li>Less time away from work</li>
                            <li>No travel expenses or time</li>
                            <li>Less interference with child or elder care responsibilities</li>

                            <li>Privacy</li>
                            <li>No exposure to other potentially contagious patients</li>

                        </ul>
                        <p>Providers enjoy:</p>
                        <ul>
                            <li>Increased revenue</li>
                            <li>Improved office efficiency</li>
                            <li>An answer to the competitive threat of retail health clinics and on-line only providers</li>
                            <li>Better patient follow through and improved health outcomes</li>
                            <li>Fewer missed appointments and cancellations</li>
                            <li>Private payer reimbursement</li>
                            
                        </ul>
                       </Fade>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default HomeBonus;