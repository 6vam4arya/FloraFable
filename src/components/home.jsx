import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
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
                <img src="/Vamika_Arya_pic_1.jpg" alt="Vamika Arya Picture" />
                <p>
                    Bringing vibrance and joy to your screens with every click.
                </p>

                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/vamika-arya-4a0179288/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} color="#fff" />
                    </a>
                </div>


                <div className="footer-bottom">
                    &copy; 2025 Vamika Arya. All Rights Reserved.
                </div>
            </footer>

        </>
    )
}

export default home