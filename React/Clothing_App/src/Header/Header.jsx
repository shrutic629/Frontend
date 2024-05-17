import { Link } from 'react-router-dom'

function Header()
{
    return(
        <div className="header">
        <div className="head_L">SIXTEEN <span>CLOTHING</span></div>
        <div className="head_R">
            <div className="R_innerbox">
                <ul>
                    <li>
                        <Link to="/">Home</Link> 
                    </li>

                    <li>
                        <Link to="/our_Products/">Our Products</Link>
                    </li>

                    <li>
                        <Link to="/about_us/">About Us</Link>
                    </li>

                    <li>
                        <Link to="/contact-us/">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Header;