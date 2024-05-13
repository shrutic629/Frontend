import team_01 from "./image/team_01.jpg"
import team_02 from "./image/team_02.jpg"
import team_03 from "./image/team_03.jpg"
import team_04 from "./image/team_04.jpg"
import team_05 from "./image/team_05.jpg"
import team_06 from "./image/team_06.jpg"

function Our_team_mbrs()
{
    return(
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
    )
}

export default Our_team_mbrs;