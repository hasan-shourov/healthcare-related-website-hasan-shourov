import React from 'react';

const About = () => {
    const about ={
        textDecoration: "underline",
    textDecorationColor: "rgb(214, 102, 21)"
    }
    return (
       <div style={{backgroundColor:'InactiveBorder', height:"70vh"}}>
           <br />
            <div className="container bg-white rounded-3">
           <h1 className="text-center display-3 fw-bold heeead mt-5 " style={about}>About Us</h1>
           <p className="text-center fs-5 text-secondary">
           MediCal is an online medical service targeting emerging markets that are rapidly digitising. Our mission is to improve the health and wellbeing of the populations we serve. We have developed accessible and affordable telehealth services that aims to support the public health system, research and clinical trials.
<br /><br />
MediCal offers on-demand GP and specialist consultations with verified and certified doctors, online prescriptions, medicine delivery, pathology/ diagnostics tests, all while building valuable Electronic Health Records.
<br /><br />
MediCal is vertically integrated with pharmacies/ medicine delivery suppliers, labs/ diagnostics centres, and payment providers for an end-to-end digital health experience.
<br /><br />
MediCal systematically focuses on expanding access to affordable healthcare services to all. We promise to improve our solutions continuously through our scalable technology and data analytics capabilities. Our passionate team is committed to excellence and work extremely hard to ensure we make a positive contribution to the healthcare of the future. 
           </p>
           <br />
        </div>
       </div>
    );
};

export default About;