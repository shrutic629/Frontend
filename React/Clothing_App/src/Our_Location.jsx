import map_img from './image/Screenshot 2024-05-13 at 5.32.27 PM.png'

function Our_Location()
{
    return(
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
        
    )
}

export default Our_Location;