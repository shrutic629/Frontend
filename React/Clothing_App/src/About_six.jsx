import feature_i from './image/feature-image.jpg'

function About_six()
{
    return(
        <div className="abt_six_box">
            <div className="abt_head">About Sixteen Clothing</div>
            <div className="best_prods">
                <div className="best_L">
                    <h4 className="Look">Looking for the best products?</h4>
                    <p className="pra"><span className="blue">This template</span> is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website.<span className="blue">Contact us</span> for more info.</p>
                    <div className="unorder_L">
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur an adipisicing elit</li>
                            <li>It aquecorporis nulla aspernatur</li>
                            <li>Corporis, omnis doloremque</li>
                            <li>Non cum id reprehenderit</li>
                        </ul>
                    </div>
                    <button className="btn">Read More</button>
                </div>
                <div className="best_R">
                    <div className="im_box">
                        <img src={feature_i} alt="" />
                    </div>
                </div>
            </div>
            <div className="creative_uni">
                <div className="creative_inner_box">
                    <div className="cr_L">
                        <h4>Creative & Unique Sixteen Products</h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</h5>
                    </div>
                    <div className="cr_R">
                        <button>Purchase Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About_six;