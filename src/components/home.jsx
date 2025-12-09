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
                <h3>Crafted By : -</h3>
                <h4>Vamika Arya</h4>
                <img src='' alt='Vamika Arya Picture'/>

            </footer>
        </>
    )
}

export default home