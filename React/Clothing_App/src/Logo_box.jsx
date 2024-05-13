import logo_1 from './image/client-01.png'

function Logo_box()
{
    return(
        <div className="logo">
            <div className="logo_img">
                <img src={logo_1} alt="" />
            </div>

            <div className="logo_img">
                <img src={logo_1} alt="" />
            </div>
            <div className="logo_img">
                <img src={logo_1} alt="" />
            </div>
            <div className="logo_img">
                <img src={logo_1} alt="" />
            </div>
            <div className="logo_img">
                <img src={logo_1} alt="" />
            </div>
        </div>
    )
}

export default Logo_box;