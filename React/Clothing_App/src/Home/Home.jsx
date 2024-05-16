import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import im_01 from '../image/product_01.jpg'
import im_02 from '../image/product_02.jpg'
import im_03 from '../image/product_03.jpg'
import im_04 from '../image/product_04.jpg'
import im_05 from '../image/product_05.jpg'
import im_06 from '../image/product_06.jpg'

import feature_i from '../image/feature-image.jpg'

import Header from '../Header'
import Footer from '../Footer'

function Home()
{
    return(

        <div className="home">
            <Header/>

            <div className="new_arr">
                <div className="best_off">BEST OFFER</div>
                <div className="n_arr">NEW ARRIVALS ON SALE</div>
            </div>

            <div className="second_box">
                <div className="Latest_head">
                    <h4 className="Late_P">Latest Products</h4>
                    <h6 className="view">VIEW ALL PRODUCTS<FontAwesomeIcon icon={faAngleRight} /></h6>
                </div>

                <div className="card_box">
                <div className="card">
                    <div className="imag">
                        <img src={im_01} alt="safs" />
                    </div>
                    <div className="content">
                        <div className="tittle">
                            <div className="titl">Tittle goes here </div>
                            <div className="dollar">$25.75</div>
                        </div>
                        <div className="para">Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</div>
                        <div className="reviews">
                            <div className="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            </div>
                            <div className="rev">Reviews(24)</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imag">
                        <img src={im_02} alt="safs" />
                    </div>
                    <div className="content">
                        <div className="tittle">
                            <div className="titl">Tittle goes here </div>
                            <div className="dollar">$30.25</div>
                        </div>
                        <div className="para">Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</div>
                        <div className="reviews">
                            <div className="star"></div>
                            <div className="rev">Reviews(21)</div>
                    </div>
                </div>
                </div>
                <div className="card">
                    <div className="imag">
                        <img src={im_03} alt="safs" />
                    </div>
                    <div className="content">
                        <div className="tittle">
                            <div className="titl">Tittle goes here </div>
                            <div className="dollar">$20.45</div>
                        </div>
                        <div className="para">Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</div>
                        <div className="reviews">
                            <div className="star"></div>
                            <div className="rev">Reviews(36)</div>
                    </div>
                </div>
                
                </div>
                <div className="card">
                <div className="imag">
                        <img src={im_04} alt="safs" />
                    </div>
                    <div className="content">
                        <div className="tittle">
                            <div className="titl">Tittle goes here </div>
                            <div className="dollar">$15.25</div>
                        </div>
                        <div className="para">Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</div>
                        <div className="reviews">
                            <div className="star"></div>
                            <div className="rev">Reviews(48)</div>
                    </div>
                </div>
            </div>
            <div className="card">
            <div className="imag">
                        <img src={im_05} alt="safs" />
                    </div>
                    <div className="content">
                        <div className="tittle">
                            <div className="titl">Tittle goes here </div>
                            <div className="dollar">$12.50</div>
                        </div>
                        <div className="para">Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</div>
                        <div className="reviews">
                            <div className="star"></div>
                            <div className="rev">Reviews(16)</div>
                    </div>
                </div>
            </div>
            <div className="card">
            <div className="imag">
                        <img src={im_06} alt="safs" />
                    </div>
                    <div className="content">
                        <div className="tittle">
                            <div className="titl">Tittle goes here </div>
                            <div className="dollar">$22.50</div>
                        </div>
                        <div className="para">Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</div>
                        <div className="reviews">
                            <div className="star"></div>
                            <div className="rev">Reviews(32)</div>
                    </div>
                </div>
            </div>
                </div>
            </div> 

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

        <Footer/>

        </div>
        
    )
}

export default Home;