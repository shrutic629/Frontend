import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import im_01 from './image/product_01.jpg'
import im_02 from './image/product_02.jpg'
import im_03 from './image/product_03.jpg'
import im_04 from './image/product_04.jpg'
import im_05 from './image/product_05.jpg'
import im_06 from './image/product_06.jpg'

function Latest_prod()
{
    return(
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
    )
}

export default Latest_prod;