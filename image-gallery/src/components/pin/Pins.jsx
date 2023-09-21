import React, { useState } from 'react'
import './Pins.css'

// function upload_img(event, setPinImage){
//     if(event.target.files && event.target.files[0]){
//         if(/image\/*/.test(event.target.files[0].type)){
//             const reader = new FileReader();

//             reader.onload = function(){
//                 setPinImage(reader.result)
//             }

//             reader.readAsDataURL(event.target.files[0]);
//         }
//     }
// }

function check_size(event){
    const image = event.target;

    image.classList.add('pin_max_width');
    
    if(
        image.getBoundingClientRect().width < image.parentElement.getBoundingClientRect().width ||
        image.getBoundingClientRect().height < image.parentElement.getBoundingClientRect().height
    ){

        image.classList.remove('pin_max_width');
        image.classList.add('pin_max_height');
    }
    
    image.style.opacity = 1;

}

export const Pins = (props) => {

    


    // const [pinImage, setPinImage] = useState()


    return (
        <>
            {/* <div> */}
                {/* <input onChange={event => upload_img(event, setPinImage)} type="file" id='picture' name='picture' value='' /> */}

                {/* <div> */}
                    {/* <div className="card"> */}
                    <div className={`card card_${props.pinDetails.pin_size}`}>
                        <div className="pin_title">
                            {props.pinDetails.title}
                        </div>
                        <div className="pin_image">
                            {/* <img src={pinImage} alt="pin" /> */}
                            <img onLoad={check_size} src={props.pinDetails.img_blob} alt="pin" />
                        </div >
                        {/* <div className="pin_model"> */}
                        <div className="model_footer">
                            <h3>{props.pinDetails.title}</h3>
                            <div className="search">
                                <a href={props.pinDetails.destination}>↗</a>
                            </div>
                        </div>
                        {/* </div> */}
                        
                    </div >
                    
                {/* </div > */}
            {/* </div > */}
        </>
    )
}
