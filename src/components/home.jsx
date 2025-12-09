import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'

const home = () => {
    const navigate = useNavigate();
    const navigateToGallery = () => {
        navigate('/Gallery')
    }
    return (
        <>
            <div className='homecontainer'>
                <h1>Welcome to <i>Flora<span style={{ color: 'hotpink' }}>Fable</span></i></h1>
                <p><i>where elegance meets fragrance</i></p>
                <button onClick={navigateToGallery}>Shop Here</button>
                <div className="flower flower1">🌸</div>
                <div className="flower flower2">🌼</div>
                <div className="flower flower3">🌺</div>
            </div>

            <footer>
                <h3>Crafted By:</h3>
                <h4>Vamika Arya</h4>
                <img src="your-image-link.jpg" alt="Vamika Arya Picture" />
                <p>
                    Bringing vibrance and joy to your screens with every click.
                </p>

                <div className="footer-social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                </div>

                <div className="footer-bottom">
                    &copy; 2025 Vamika Arya. All Rights Reserved.
                </div>
            </footer>

        </>
    )
}

export default home