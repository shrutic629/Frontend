// import Header from "../Header";
// import Footer from "../Footer"

import team_01 from "../image/team_01.jpg"
import team_02 from "../image/team_02.jpg"
import team_03 from "../image/team_03.jpg"
import team_04 from "../image/team_04.jpg"
import team_05 from "../image/team_05.jpg"
import team_06 from "../image/team_06.jpg"
import Logo_box from "../Logo_box";

function About_us()
{
    return(
        <div className="about_us">
            {/* <Header/> */}

            <div className="our_company">
                <div className="best_off">ABOUT US</div>
                <div className="n_arr">OUR COMPANY</div>
            </div>

                    <div className="our_backg">
                    <div className="ourback_head">Our Background</div>
                    <div className="who_what_para">
                        <div className="our_back_img"></div>
                        <div className="our_back_para">
                            <div className="our_back_para_box">
                                <h3>Who we are & What we do?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>
                            </div>
                            <div className="our_back_logo_box">
                                <button></button>
                                <button className="lg"></button>
                                <button className="lg"></button>
                                <button className="lg"></button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="our_team_box">
            <h1 className="ourback_head">Our Team Members</h1>
            <hr />

            <div className="team_members">
                <div className="member_card">
                    <div className="top_img_card">
                        <img src={team_01} alt="" />
                    </div>
                    <div className="bottom_intro_card">
                        <h4>Johnny William</h4>
                        <h6>CO-Founder</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                    </div>
                </div>

                <div className="member_card">
                    <div className="top_img_card">
                        <img src={team_02} alt="" />
                    </div>
                    <div className="bottom_intro_card">
                        <h4>Karry Pitcher</h4>
                        <h6>Product Expert</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                    </div>
                </div>

                <div className="member_card">
                    <div className="top_img_card">
                        <img src={team_03} alt="" />
                    </div>
                    <div className="bottom_intro_card">
                        <h4>Michael Soft</h4>
                        <h6>Chief Marketing</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                    </div>
                </div>

                <div className="member_card">
                    <div className="top_img_card">
                        <img src={team_04} alt="" />
                    </div>
                    <div className="bottom_intro_card">
                        <h4>Mary Cool</h4>
                        <h6>Product Specialist</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                    </div>
                </div>

                <div className="member_card">
                    <div className="top_img_card">
                        <img src={team_05} alt="" />
                    </div>
                    <div className="bottom_intro_card">
                        <h4>George Walker</h4>
                        <h6>Product Photographer</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                    </div>
                </div>

                <div className="member_card">
                    <div className="top_img_card">
                        <img src={team_06} alt="" />
                    </div>
                    <div className="bottom_intro_card">
                        <h4>Kate Town</h4>
                        <h6>General Manager</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="prod_cust_glob">
            <div className="prod_cus_glob_innerbox">
                <div className="pro_cus_glo_card">
                        <div className="pcg_card_top">
                            <div className="red_logo"></div>
                        </div>
                        <div className="pcg_card_bot">
                            <h4>Product Management</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                            <button>Read More</button>
                        </div>
                </div>

                <div className="pro_cus_glo_card">
                        <div className="pcg_card_top">
                            <div className="red_logo"></div>
                        </div>
                        <div className="pcg_card_bot">
                            <h4>Customer Relations</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                            <button>Details</button>
                        </div>
                </div>
                
                <div className="pro_cus_glo_card">
                        <div className="pcg_card_top">
                            <div className="red_logo"></div>
                        </div>
                        <div className="pcg_card_bot">
                            <h4>Global Collection</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                            <button>Read More</button>
                        </div>
                </div>
            </div>
        </div>

        <div className="heading">
            <h2>Happy Partners</h2>
        </div>

            <Logo_box/>

            {/* <Footer/> */}
        </div>
    )
}

export default About_us;