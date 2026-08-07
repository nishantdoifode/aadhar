import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const Geta = () => {
    return (
        <><div className='maincontentleft'>

            <div className="maincontent" id='firstdivofmainc'>
                <div className="space"></div>
                <h3>Aadhaar Update Service</h3>
                <div className='maincontentdiv'>


                    <section id="twdiv">
                        <div>

                            <h3><a href="#">Book An Appointment ›</a></h3>

                            <p id='p2'>For Enrolment And Update your Aadhaar data you can book an online appointment at an Aadhaar Seva Kendra.</p>
                        </div>
                        <div>
                            {/* ✅ Links wrapped in span for inline separator styling */}
                            <ul id="aadhaar-links">
                                <li><Link to="/card/12">Book an Appointment</Link></li>

                            </ul>
                        </div>
                    </section>

                </div>
                <div className='maincontentdiv'>


                    <section id="twdiv">
                        <div>

                            <h3><a href="#">Check Status ›</a></h3>

                            <p id='p2'>recently enrolled for Aadhaar? check if your Aadhaar is genrated. in case youhave or updated aty an enrolment/update center you camn check the update adress here too.</p>
                        </div>
                        <div>
                            {/* ✅ Links wrapped in span for inline separator styling */}
                            <ul id="aadhaar-links">
                                <li><Link>Check Aadhaar Status</Link></li>

                            </ul>
                        </div>
                    </section>

                </div>
                <div className='maincontentdiv'>


                    <section id="twdiv">
                        <div>

                            <h3><a href="#">Download Aadhaar ›</a></h3>

                            <p id='p2'>Download an electronic version of your Aadhaar by giving your Aadhaar number or Enrolment ID. Downloaded Aadhaar is As valid as the orignal Aadhaar letter.</p>
                        </div>
                        <div>
                            {/* ✅ Links wrapped in span for inline separator styling */}
                            <ul id="aadhaar-links">
                                <li><Link>Download Aadhaar</Link></li>

                            </ul>
                        </div>
                    </section>

                </div>
                <div className='maincontentdiv'>


                    <section id="twdiv">
                        <div>

                            <h3><a href="#">Order Aadhaar Pvc Card ›</a></h3>

                            <p id='p2'>get your Aadhaar PVC card at nominal cost. order now!</p>
                        </div>
                        <div>
                            {/* ✅ Links wrapped in span for inline separator styling */}
                            <ul id="aadhaar-links">
                                <li><Link>Order Aadhaar PVC Card</Link></li>

                            </ul>
                        </div>
                    </section>

                </div>
                <div className='maincontentdiv'>


                    <section id="twdiv">
                        <div>

                            <h3><a href="#">Check Aadhaar PVC Card Status ›</a></h3>

                            <p id='p2'>check the status of your Aadhaar PVC card request</p>
                        </div>
                        <div>
                            {/* ✅ Links wrapped in span for inline separator styling */}
                            <ul id="aadhaar-links">
                                <li><Link>check Aadhaar PVC card status</Link></li>

                            </ul>
                        </div>
                    </section>

                </div>
                <div className='maincontentdiv'>


                    <section id="twdiv">
                        
                        <div>
                            {/* ✅ Links wrapped in span for inline separator styling */}
                            <ul id="aadhaar-links">
                                <li><Link>Locate an Enrolment center in bhuvan Aadhar</Link></li>

                            </ul>
                        </div>
                    </section>

                </div>
                <div className='maincontentdiv'>


                    <section id="twdiv">
                        <div>

                            <h3><a href="#">Aadhaar Enrolment & Update Charges ›</a></h3>

                            <p id='p2'>This is Aadhaar Enrolment & Update Charges.</p>
                        </div>
                        <div>
                            {/* ✅ Links wrapped in span for inline separator styling */}
                            <ul id="aadhaar-links">
                                <li><Link>Aadhaar Enrolment & Update Charges</Link></li>

                            </ul>
                        </div>
                    </section>

                </div>
                 <div className='maincontentdiv'>


                    <section id="twdiv">
                        <div>

                            <h3><a href="#">Enrolment & Update Forms ›</a></h3>

                            <p id='p2'>This is Enrolment & Update Forms</p>
                        </div>
                        <div>
                            {/* ✅ Links wrapped in span for inline separator styling */}
                            <ul id="aadhaar-links">
                                <li><Link>Enrolment & Update Forms</Link></li>

                            </ul>
                        </div>
                    </section>

                </div>
                
            </div>

            <div className="rightsection">
                <div className="space"></div>
 
                <div className="QNA">
                    <h3>Frequently Asked Questions</h3>
                    <div><a href="#">Use Aadhaar Freely</a></div>
                    <div><a href="#">E-Aadhaar</a></div>
                    <div><a href="#">mAadhar FAQs</a></div>
                    <div><a href="#">Aadhaar Paperless Offline e-kyc</a></div>
                    <a href="#">view all</a>
                </div>
                <div className="QNA1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint sit optio quis nulla provident! Eum ullam numquam nemo reprehenderit voluptas minus molestiae?
                </div>


            </div>




        </div>
        </>
    )
}
export default Geta;