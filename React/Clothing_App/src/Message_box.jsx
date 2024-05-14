function Message_box()
{
    return(
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
    )
}

export default Message_box;