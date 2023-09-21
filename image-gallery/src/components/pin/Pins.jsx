import React, { useState } from 'react'
import './Pins.css'





function check_size(event) {
    const image = event.target;

    image.classList.add('pin_max_width');

    if (
        image.getBoundingClientRect().width < image.parentElement.getBoundingClientRect().width ||
        image.getBoundingClientRect().height < image.parentElement.getBoundingClientRect().height
    ) {

        image.classList.remove('pin_max_width');
        image.classList.add('pin_max_height');
    }

    image.style.opacity = 1;

}

export const Pins = (props) => {

    const [frame, setFrame] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    function getImg(imgSrc) {
        setTempImgSrc(imgSrc);
        setFrame(true);
    }



    return (
        <>
            <div className={frame?"frame open":"frame"}>
                <img src={tempImgSrc} alt="" />
                <div className='close_icon' onClick={()=>setFrame(false)}>X</div>
            </div>
            <div className={`card card_${props.pinDetails.pin_size}`}>
                <div className="pin_title">
                    {props.pinDetails.title}
                </div>
                <div className="pin_image">
                    <img onLoad={check_size} src={props.pinDetails.img_blob} alt="pin" onClick={() => getImg(props.pinDetails.img_blob)} />
                </div >
                <div className="model_footer">
                    <h3>{props.pinDetails.title}</h3>
                    <div className="search">
                        <a href={props.pinDetails.destination}>↗</a>
                    </div>
                </div>


            </div >

        </>
    )
}
