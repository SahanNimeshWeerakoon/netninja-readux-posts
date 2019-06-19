import React from 'react'
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque distinctio molestias sit eum fugit, aut quod iure nostrum odio, 
                ad quae ut deserunt dignissimos soluta illo, excepturi dolorem illum amet.
            </p>
        </div>
    )
}

export default Rainbow(About)