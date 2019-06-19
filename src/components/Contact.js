import React from 'react'

const Contact = (props) => {
    setTimeout( () => {
        props.history.push('/about')
    }, 2000 )
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque distinctio molestias sit eum fugit, aut quod iure nostrum odio, 
                ad quae ut deserunt dignissimos soluta illo, excepturi dolorem illum amet.
            </p>
        </div>
    )
}

export default Contact