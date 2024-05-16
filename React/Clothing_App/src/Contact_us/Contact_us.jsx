import Header from '../Header'
import Logo_box from '../Logo_box';
import map_img from '../image/Screenshot 2024-05-13 at 5.32.27 PM.png'
import Footer from '../Footer';

function Contact_us()
{
    return(
        <div className="contact_us">

            <Header/>

            <div className="lets_get">
                <h4>CONTACT US</h4>
                <h1>LET'S GET IN TOUCH</h1>
            </div>

            <div className="our_locatn">
            <div className="location_heading">Our Location on Maps</div>
            <div className="map_cont_box">
                <div className="map">
                    <img src={map_img} alt="" />
                </div>
                <div className="map_cont">
                    <div className="map_content">
                        <h5>About our office</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.</p>
                    </div>
                    <div className="map_logo">
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>


        <div className="message_main_box">
            <div className="message_heading">Send us a Message</div>
            <div className="form_main_box">
                <div className="L_form">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="E-Mail Address" />
                    <input type="text" placeholder="Subject" />
                    <input id="form_in" type="text" placeholder="Your Message" />
                    <button>Send Message</button>
                </div>
                <div className="R_form">
                    <div className="R_form1">
                        <h4>Accordion Title One</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p>
                    </div>
                    <div className="R_form2">Second Title Here</div>
                    <div className="R_form2">Accordion Title Three</div>
                    <div className="R_form2">Fourth Accordion Title</div>
                </div>
            </div>
        </div>

        <div className="heading">
            <h2>Our Happy Customers </h2>
        </div>

        <Logo_box/>
        <Footer/>

        </div>
    )
}

export default Contact_us;