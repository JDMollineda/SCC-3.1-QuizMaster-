import React from 'react'

const Pages = (props) => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className='main-video-container col-12'>                    
                    <img className='main-video' src={props.image} alt='' />
                    {props.content}                    
                </div>
            </div>
        </div>
    )
}

export default Pages