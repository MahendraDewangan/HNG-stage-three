import React, { useState } from 'react'
import './Modal.css'

function upload_img(event, pinDetails, setPinDetails, setShowLable, setShowModalPin){
    if(event.target.files && event.target.files[0]){
        if(/image\/*/.test(event.target.files[0].type)){
            const reader = new FileReader();

            reader.onload = function(){
                setPinDetails({
                    ...pinDetails,
                    img_blob: reader.result
                });
                setShowLable(false);
                setShowModalPin(true);
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
}

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

function save_pin(pinDetails, add_pin){
    const users_data = {
        ...pinDetails,
        author: 'Jack',
        board: 'default',
        title: document.querySelector('#pin_title').value,
        description: document.querySelector('#pin_description').value,
        destination: document.querySelector('#pin_destination').value,
        pin_size: document.querySelector('#pin_size').value,

    }
    // console.log(users_data);
    add_pin(users_data);
}

export const Modal = (props) => {
    const [pinDetails, setPinDetails] = useState({
        author: '',
        board: '',
        title: '',
        description: '',
        destination: '',
        img_blob: '',
        pin_size: '',
    });

    const [showLable, setShowLable] = useState(true);
    const [showModalPin, setShowModalPin] = useState(false);

    // using react dropzone -- start
    


    // using react dropzone -- end


    return (
        <>
            <div className="add_pin_modal">
                <div className="add_pin_container">
                    <div className="side" id="left_side">
                        <div className="section1">
                            <div className='icon_container'>---</div>
                        </div >
                        <div className="section2">
                            <label htmlFor="upload_img" id='upload_img_label'
                                style={{
                                    display: showLable ? 'block' : 'none'
                                }}
                            >
                                <div className="upload_img_container">
                                    <div id="dotted_border">
                                        <div className="icon_container">
                                            <i class="fa fa-upload"></i>
                                        </div>
                                        <div>Click to upload</div>
                                        <div>Recommendation: use high quality .jpg less than 20mb</div>
                                    </div>
                                </div>
                                <input onChange={event => upload_img(event, pinDetails, setPinDetails, setShowLable, setShowModalPin)} type="file" name="upload_img" id="upload_img" value=''/>
                            </label>
                            <div className="models_pin"
                                style={{
                                    display: showModalPin ? 'block' : 'none'
                                }}
                            >
                                <div className="pin_image">
                                    <img onLoad={check_size} src={pinDetails.img_blob} alt="pin_image" />
                                </div >
                            </div>
                        </div >
                        <div className="section3">
                            <div className="save_from_site">Save</div>
                        </div>
                    </div >
                    <div className="side" id="right_side">
                        <div className="section1">
                            <div className="select_size">
                                <select defaultValue="Select" name="pin_size" id="pin_size">
                                    <option value="">Select</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                                <div  onClick={() => save_pin(pinDetails, props.add_pin)} className="save_pin">Save</div>
                            </div>
                        </div>
                        <div className="section2">
                            <input placeholder='Add your title' type="text" className="new_pin_input" id="pin_title" />
                            <input placeholder='Tell everyone what your pin is about' type="text" className="new_pin_input" id="pin_description" />
                            <input placeholder='Add a destination link' type="text" className="new_pin_input" id="pin_destination" />
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}
